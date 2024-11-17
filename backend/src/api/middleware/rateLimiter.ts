/**
 * @middleware rateLimiter
 * @description Rate limiting middleware using Token Bucket algorithm
 * 
 * Architecture:
 * - Factory pattern for middleware creation
 * - Closure-based configuration
 * 
 * Security features:
 * - IP-based rate limiting
 * - Configurable limits per endpoint
 * - DoS protection
 * 
 * Design decisions:
 * - In-memory storage for performance
 * - Separate limits for different services
 * - Non-blocking implementation
 * 
 * Scaling considerations:
 * - Works best in single-instance deployments
 * - For distributed systems, consider Redis-based implementation
 */

import { Request, Response, NextFunction } from 'express';
import { RateLimitError } from '@utils/errors/AppError';
import { TokenBucket } from '@ratelimiter/algorithms/tokenBucket';
import { RATE_LIMIT } from '@config/rateLimitConfig';

const buckets = new Map<string, TokenBucket>();

function getTokenBucket(key: string, capacity: number, refillRate: number): TokenBucket {
    if (!buckets.has(key)) {
        buckets.set(key, new TokenBucket({ capacity, refillRate }));
    }
    return buckets.get(key)!;
}

function rateLimiterFactory(
    limitKeyPrefix: string,
    limitOptions: { WINDOW_MS: number; MAX_REQUESTS: number },
    errorMessage: string
) {
    const capacity = limitOptions.MAX_REQUESTS;
    const refillRate = capacity / (limitOptions.WINDOW_MS / 1000); // Tokens per second

    return (req: Request, res: Response, next: NextFunction) => {
        const key = `${limitKeyPrefix}:${req.ip}`;
        const bucket = getTokenBucket(key, capacity, refillRate);

        if (bucket.consume()) {
            next();
        } else {
            next(new RateLimitError(errorMessage));
        }
    };
}

export const rateLimiters = {
    email: rateLimiterFactory(
        'email',
        RATE_LIMIT.EMAIL,
        'Too many email requests. Please try again later.'
    ),
    sms: rateLimiterFactory(
        'sms',
        RATE_LIMIT.SMS,
        'Too many SMS requests. Please try again later.'
    ),
};