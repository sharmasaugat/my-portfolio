// src/api/middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit';
import { RateLimitError } from '../../utils/errors/AppError';

const createLimiter = (
    windowMs: number,
    max: number,
    type: string
) => rateLimit({
    windowMs,
    max,
    handler: () => {
        throw new RateLimitError(
            `Too many ${type} requests. Please try again later.`
        );
    },
    keyGenerator: (req) => {
        return `${req.ip}-${type}`;
    }
});

export const rateLimiters = {
    email: createLimiter(
        15 * 60 * 1000, // 15 minutes
        5, // 5 requests per window
        'email'
    ),
    sms: createLimiter(
        60 * 60 * 1000, // 1 hour
        3, // 3 requests per window
        'SMS'
    )
};