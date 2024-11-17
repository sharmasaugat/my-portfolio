
import { TokenBucket } from '../core/ratelimiter/algorithms/tokenBucket';
import { RateLimitError } from '../utils/errors/AppError';

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