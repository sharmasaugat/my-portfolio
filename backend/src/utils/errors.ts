
export class AppError extends Error {
    constructor(
        public message: string,
        public code: string,
        public statusCode: number = 500,
        public metadata?: Record<string, any>
    ) {
        super(message);
        this.name = 'AppError';
    }
}

export function createError(error: unknown): AppError {
    if (error instanceof AppError) return error;
    if (error instanceof Error) {
        return new AppError(error.message, 'UNKNOWN_ERROR', 500, {
            originalError: {
                name: error.name,
                stack: error.stack
            }
        });
    }
    return new AppError('An unknown error occurred', 'UNKNOWN_ERROR', 500);
}