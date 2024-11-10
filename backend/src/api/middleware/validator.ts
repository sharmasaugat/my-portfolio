// src/api/middleware/validator.ts
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Schema } from 'joi';
import { logger } from '../../utils/logger';

export const validateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            error: errors.array().map(err => err.msg).join(', ')
        });
    }
    next();
    return;
};

export const validateSchema = (schema: Schema) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            logger.warn(`Validation failed: ${error.message}`);
            return next(error);
        }

        req.body = value;
        next();
    };
};