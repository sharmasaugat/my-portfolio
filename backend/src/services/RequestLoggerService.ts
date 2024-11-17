
import { Request } from 'express';
import { logger } from '@utils/logger';

export class RequestLoggerService {
    static logRequest(req: Request): void {
        const timestamp = new Date().toISOString();
        const { method, originalUrl, ip } = req;
        
        logger.info(`[${timestamp}] ${method} ${originalUrl} - IP: ${ip}`);
        
        if (req.body && Object.keys(req.body).length > 0) {
            const sanitizedBody = this.sanitizeBody(req.body);
            logger.info('Request Body:', sanitizedBody);
        }
    }

    private static sanitizeBody(body: any): any {
        const sanitized = { ...body };
        const sensitiveFields = ['password', 'token', 'secret'];
        sensitiveFields.forEach(field => delete sanitized[field]);
        return sanitized;
    }
}