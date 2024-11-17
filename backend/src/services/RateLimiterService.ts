/**
 * @class RateLimiterService
 * @description Implements Token Bucket algorithm for rate limiting
 * 
 * Architecture:
 * - Factory pattern for bucket creation
 * - Singleton pattern for bucket management
 * 
 * Design decisions:
 * - Uses Token Bucket over Leaky Bucket for better burst handling
 * - In-memory storage for quick access (trade-off: not suitable for distributed systems)
 * 
 * Integration:
 * - Used by API middleware
 * - Configurable per-endpoint limits
 * 
 * Error handling:
 * - Throws RateLimitError for quota exceeding
 * - Maintains separate buckets per IP for isolation
 */
import { TokenBucket } from '@ratelimiter/algorithms/tokenBucket';
import { RateLimitError } from '@errors/AppError';

export class RateLimiterService {
    private static buckets = new Map<string, TokenBucket>();

    static getTokenBucket(key: string, capacity: number, refillRate: number): TokenBucket {
        if (!this.buckets.has(key)) {
            this.buckets.set(key, new TokenBucket({ capacity, refillRate }));
        }
        return this.buckets.get(key)!;
    }

    static createLimiter(
        limitKeyPrefix: string,
        windowMs: number,
        maxRequests: number,
        errorMessage: string
    ) {
        const refillRate = maxRequests / (windowMs / 1000);
        
        return (ip: string): boolean => {
            const key = `${limitKeyPrefix}:${ip}`;
            const bucket = this.getTokenBucket(key, maxRequests, refillRate);
            
            if (!bucket.consume()) {
                throw new RateLimitError(errorMessage);
            }
            return true;
        };
    }
}