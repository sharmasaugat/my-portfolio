// src/config/aws.config.ts
import AWS from 'aws-sdk';
import { logger } from '../utils/logger';
import { CONFIG } from '../utils/constants';
import { AppError } from '../utils/errors/AppError';

export const initializeAWS = (): void => {
    try {
        if (!CONFIG.AWS.CREDENTIALS.ACCESS_KEY_ID || !CONFIG.AWS.CREDENTIALS.SECRET_ACCESS_KEY) {
            throw new AppError('AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be provided');
        }

        AWS.config.update({
            region: CONFIG.AWS.REGION,
            credentials: {
                accessKeyId: CONFIG.AWS.CREDENTIALS.ACCESS_KEY_ID,
                secretAccessKey: CONFIG.AWS.CREDENTIALS.SECRET_ACCESS_KEY
            }
        });

        logger.info('AWS configuration initialized successfully');
    } catch (error) {
        const err = error instanceof Error ? error : new Error('Unknown error during AWS initialization');
        logger.error('Failed to initialize AWS configuration', err);
        throw err;
    }
};