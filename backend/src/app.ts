/**
 * Core application setup implementing a modular Express.js architecture.
 * Follows the composition root pattern for dependency injection.
 * 
 * Architecture Features:
 * - Modular middleware configuration
 * - Centralized error handling
 * - Health check endpoint
 * - AWS service initialization
 * - Dependency injection setup
 * - Route management
 */
import 'reflect-metadata';
import express, { Application } from 'express';
import { notificationRoutes } from '@routes/notification.routes';
import { errorHandler } from '@middlewares/errorHandler';
import { logger } from '@utils/logger';
import { initializeAWS } from '@config/aws.config';
import { CONFIG } from '@utils/constants';
import { configureMiddleware } from '@config/middleware.config';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.initialize();
    }

    private initialize(): void {
        initializeAWS();
        configureMiddleware(this.app);
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeRoutes(): void {
        this.app.get('/health', (_req, res) => {
            res.status(200).json({
                status: 'healthy',
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            });
        });

        this.app.use('/api/notifications', notificationRoutes);
    }

    private initializeErrorHandling(): void {
        this.app.use(errorHandler);
    }

    public listen(): void {
        this.app.listen(CONFIG.SERVER.PORT, () => {
            logger.info(`Server is running on port ${CONFIG.SERVER.PORT}`);
        });
    }
}

export default App;