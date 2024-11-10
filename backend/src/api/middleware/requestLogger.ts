import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const { method, originalUrl, ip } = req;
    
    console.log(`[${timestamp}] ${method} ${originalUrl} - IP: ${ip}`);
    
    // Log request body if present (excluding sensitive data)
    if (req.body && Object.keys(req.body).length > 0) {
        const sanitizedBody = { ...req.body };
        // Remove sensitive fields
        delete sanitizedBody.password;
        delete sanitizedBody.token;
        console.log('Request Body:', sanitizedBody);
    }

    next();
};
