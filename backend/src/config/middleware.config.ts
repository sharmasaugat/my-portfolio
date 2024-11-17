
import { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { CONFIG } from '@utils/constants';
import { RequestLoggerService } from '@services/RequestLoggerService';

export const configureMiddleware = (app: Application): void => {
    app.use(cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-correlation-id']
    }));

    app.use(helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" },
        contentSecurityPolicy: false
    }));

    app.use(express.json({ limit: CONFIG.SERVER.BODY_LIMIT }));
    app.use(express.urlencoded({ extended: true, limit: CONFIG.SERVER.BODY_LIMIT }));
    app.use(compression());

    app.use((_req, _res, next) => {
        _req.headers['x-correlation-id'] = _req.headers['x-correlation-id'] || uuidv4();
        RequestLoggerService.logRequest(_req);
        next();
    });
};