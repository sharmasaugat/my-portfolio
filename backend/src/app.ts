import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { v4 as uuidv4 } from 'uuid';
import { notificationRoutes } from './api/routes/notification.routes';
import { errorHandler } from './api/middleware/errorHandler';
import { logger } from './utils/logger';
import { initializeAWS } from './config/aws.config';
import { CONFIG } from './config/constants';

class App {
    
    public app: Application;

    constructor() {
        this.app = express();
        this.initializeConfig();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeConfig(): void {
        initializeAWS();
    }

    private initializeMiddlewares(): void {
        // Security middlewares
        this.app.use(helmet({
            crossOriginResourcePolicy: { policy: "cross-origin" },
            contentSecurityPolicy: {
                directives: CONFIG.SECURITY.CSP
            }
        }));

        // CORS setup
        this.app.use(cors({
            origin: CONFIG.SERVER.CORS_ORIGIN,
            methods: [...CONFIG.SECURITY.CORS.methods],
            allowedHeaders: [...CONFIG.SECURITY.CORS.allowedHeaders],
            credentials: CONFIG.SECURITY.CORS.credentials,
            maxAge: CONFIG.SECURITY.CORS.maxAge
        }));

        // Rate limiting
        this.app.use(rateLimit({
            windowMs: CONFIG.RATE_LIMIT.WINDOW_MS, // 15 minutes
            max: CONFIG.RATE_LIMIT.MAX_REQUESTS // limit each IP to 100 requests per windowMs
        }));

        // Body parsing
        this.app.use(express.json({ limit: CONFIG.SERVER.BODY_LIMIT }));
        this.app.use(express.urlencoded({ extended: true, limit: CONFIG.SERVER.BODY_LIMIT }));

        // Compression
        this.app.use(compression());

        // Correlation ID
        this.app.use((_req, _res, next) => {
            _req.headers['x-correlation-id'] = _req.headers['x-correlation-id'] || uuidv4();
            logger.logRequest(_req);
            next();
        });
    }

    private initializeRoutes(): void {
        // Health check endpoint
        this.app.get('/health', (_req, res) => {
            res.status(200).json({
                status: 'healthy',
                timestamp: new Date().toISOString(),
                uptime: process.uptime()
            });
        });

        // API routes
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






// # Dockerfile
// FROM node:18-alpine AS builder

// WORKDIR /app

// COPY package*.json ./
// RUN npm ci

// COPY . .
// RUN npm run build

// FROM node:18-alpine

// WORKDIR /app

// COPY --from=builder /app/dist ./dist
// COPY --from=builder /app/package*.json ./

// RUN npm ci --only=production

// ENV NODE_ENV=production

// EXPOSE 3000

// CMD ["npm", "start"]