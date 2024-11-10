import 'dotenv/config';
import App from './app';
import { logger } from './utils/logger';

process.on('uncaughtException', (error: Error) => {
    logger.error('Uncaught Exception', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
    logger.error('Unhandled Rejection', reason);
    process.exit(1);
});

try {
    const app = new App();
    app.listen();
} catch (error) {
    logger.error('Failed to start server', error as Error);
    process.exit(1);
}