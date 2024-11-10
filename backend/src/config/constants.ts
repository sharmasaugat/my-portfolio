
export const CONFIG = {
    SERVER: {
        PORT: process.env.PORT || 3000,
        CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
        BODY_LIMIT: '10kb',
    },
    AWS: {
        REGION: process.env.AWS_REGION || 'us-east-1',
        SES_FROM_EMAIL: process.env.AWS_SES_FROM_EMAIL,
    },
    RATE_LIMIT: {
        WINDOW_MS: 15 * 60 * 1000, // 15 minutes
        MAX_REQUESTS: 100,
    },
    SECURITY: {
        CSP: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"]
        },
        CORS: {
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id'],
            credentials: true,
            maxAge: 86400
        }
    },
    EMAIL: {
        TEMPLATE: {
            SUBJECT_MAX_LENGTH: 100,
            MESSAGE_MAX_LENGTH: 1000
        }
    }
} as const;