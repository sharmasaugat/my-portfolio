// src/utils/errors/AppError.ts
export class AppError extends Error {
    constructor(
        public readonly message: string,
        public readonly statusCode: number = 500,
        public readonly code: string = 'INTERNAL_SERVER_ERROR',
        public readonly details?: unknown
    ) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    public static isAppError(error: any): error is AppError {
        return error instanceof AppError;
    }

    public static isAWSError(error: unknown): error is AWS.AWSError {
        return error instanceof Error && 'code' in error;
    }

    public toJSON() {
        return {
            name: this.name,
            message: this.message,
            statusCode: this.statusCode,
            code: this.code,
            stack: this.stack
        };
    }
}

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 400, 'VALIDATION_ERROR');
    }
}

export class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404, 'NOT_FOUND');
    }
}

export class RateLimitError extends AppError {
    constructor(message: string) {
        super(message, 429, 'RATE_LIMIT_EXCEEDED');
    }
}