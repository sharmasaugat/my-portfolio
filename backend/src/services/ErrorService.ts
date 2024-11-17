
import { logger } from '@utils/logger';

export class ErrorService {
    static initializeErrorHandlers(): void {
        process.on('uncaughtException', (error: Error) => {
            logger.error('Uncaught Exception', error);
            process.exit(1);
        });

        process.on('unhandledRejection', (reason: Error) => {
            logger.error('Unhandled Rejection', reason);
            process.exit(1);
        });
    }

    static handleError(error: Error): string {
        logger.error('Application Error:', error);
        return error.message || 'Internal Server Error';
    }
}