export const RATE_LIMIT = {
    DEFAULT: {
        WINDOW_MS: 15 * 60 * 1000, // 15 minutes
        MAX_REQUESTS: 100
    },
    EMAIL: {
        WINDOW_MS: 15 * 60 * 1000,
        MAX_REQUESTS: 5,
    },
    SMS: {
        WINDOW_MS: 60 * 60 * 1000, // 1 hour in milliseconds
        MAX_REQUESTS: 3,
    },
} as const;