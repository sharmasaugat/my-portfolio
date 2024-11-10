// src/utils/constants.ts
export const DEFAULT_RATE_LIMIT = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
};

export const MESSAGE_LIMITS = {
    name: {
        min: 2,
        max: 50
    },
    subject: {
        min: 2,
        max: 100
    },
    message: {
        min: 10,
        max: 1000
    },
    smsMessage: {
        min: 10,
        max: 160
    }
};

export const ERROR_MESSAGES = {
    VALIDATION: {
        INVALID_EMAIL: 'Invalid email format',
        INVALID_PHONE: 'Phone number must be in E.164 format',
        NAME_LENGTH: `Name must be between ${MESSAGE_LIMITS.name.min} and ${MESSAGE_LIMITS.name.max} characters`,
        MESSAGE_LENGTH: `Message must be between ${MESSAGE_LIMITS.message.min} and ${MESSAGE_LIMITS.message.max} characters`,
        SMS_LENGTH: `SMS message must be between ${MESSAGE_LIMITS.smsMessage.min} and ${MESSAGE_LIMITS.smsMessage.max} characters`
    },
    AUTH: {
        RATE_LIMIT: 'Too many requests from this IP, please try again later'
    },
    SERVER: {
        INTERNAL_ERROR: 'Internal server error',
        AWS_SES_ERROR: 'Failed to send email via AWS SES'
    }
};

export const CONFIG = {
    LOGGER: {
        DEFAULT_LEVEL: 'info',
        TIMESTAMP_FORMAT: 'YYYY-MM-DD HH:mm:ss',
        LEVELS: {
            ERROR: 'error',
            WARN: 'warn',
            INFO: 'info',
            DEBUG: 'debug'
        },
        TRANSPORT_OPTIONS: {
            console: {
                handleExceptions: true,
                handleRejections: true
            }
        }
    },

    EMAIL: {
        TEMPLATE: {
            SUBJECT_MAX_LENGTH: 100,
            MESSAGE_MAX_LENGTH: 1000
        }
    },

    AWS: {
        REGION: process.env.AWS_REGION || 'us-east-1',
        SES_FROM_EMAIL: process.env.AWS_SES_FROM_EMAIL,
        CREDENTIALS: {
            ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
            SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
        }
    },

    SERVER: {
        PORT: process.env.PORT || 3000,
        CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
        BODY_LIMIT: '10mb'
    },

    SECURITY: {
        CORS: {
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] as string[],
            allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id'] as string[]
        },
        CSP: {
            'default-src': ["'self'"],
            'img-src': ["'self'", 'data:', 'https:'],
            'script-src': ["'self'"],
            'style-src': ["'self'", "'unsafe-inline'"]
        }
    }
} as const;