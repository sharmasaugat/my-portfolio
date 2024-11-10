import winston, { format, Logger } from 'winston';
import { Request } from 'express';
import { CONFIG } from './constants';

class AppLogger {
    private logger: Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: CONFIG.LOGGER.DEFAULT_LEVEL,
            format: format.combine(
                format.timestamp({ format: CONFIG.LOGGER.TIMESTAMP_FORMAT }),
                format.colorize(),
                format.json()
            ),
            transports: [
                new winston.transports.Console(CONFIG.LOGGER.TRANSPORT_OPTIONS.console)
            ]
        });
    }

    private formatMessage(message: string, meta?: Record<string, unknown>) {
        return { message, ...meta };
    }

    public info(message: string, meta?: Record<string, unknown>): void {
        this.logger.info(this.formatMessage(message, meta));
    }

    public error(message: string, error?: Error, meta?: Record<string, unknown>): void {
        this.logger.error(this.formatMessage(message, {
            ...meta,
            error: error ? {
                message: error.message,
                stack: error.stack,
                name: error.name
            } : undefined
        }));
    }

    public warn(message: string, meta?: Record<string, unknown>): void {
        this.logger.warn(this.formatMessage(message, meta));
    }

    public logRequest(req: Request): void {
        this.info(`${req.method} ${req.url}`, {
            ip: req.ip,
            correlationId: req.headers['x-correlation-id'],
            userAgent: req.headers['user-agent']
        });
    }
}

export const logger = new AppLogger();
