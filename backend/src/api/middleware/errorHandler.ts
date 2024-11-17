import { Request, Response, NextFunction } from 'express';
import { AppError } from '@utils/errors/AppError';
import { logger } from '@utils/logger';
import { ERROR_MESSAGES } from '@utils/constants';
import { ValidationError } from 'joi';

export const errorHandler = (
    error: Error | AppError | ValidationError,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const correlationId = req.headers['x-correlation-id'];
    
    const baseErrorResponse = {
        success: false,
        correlationId,
        timestamp: new Date().toISOString()
    };

    // Handle Joi validation errors
    if (error instanceof ValidationError) {
        logger.warn(`Validation error: ${error.message}`);
        res.status(400).json({
            ...baseErrorResponse,
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Invalid request data',
                details: error.details.map(detail => ({
                    field: detail.context?.key,
                    message: detail.message
                }))
            }
        });
        return;
    }

    // Handle custom app errors
    if (error instanceof AppError) {
        logger.error(error.message);
        res.status(error.statusCode).json({
            ...baseErrorResponse,
            error: {
                code: error.code,
                message: error.message,
                details: error.details
            }
        });
        return;
    }

    // Handle unexpected errors
    logger.error('Unexpected error');
    res.status(500).json({
        ...baseErrorResponse,
        error: {
            code: 'INTERNAL_ERROR',
            message: process.env.NODE_ENV === 'development' ? error.message : ERROR_MESSAGES.SERVER.INTERNAL_ERROR
        }
    });
};