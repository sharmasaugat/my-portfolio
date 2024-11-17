/**
 * Notification routes configuration implementing security best practices.
 * 
 * Security Features:
 * - Rate limiting protection against DoS
 * - Request validation using schemas
 * - Request logging for audit trails
 * - Dependency injection for controller instantiation
 * 
 * Routes:
 * POST /email - Send email notifications
 * POST /sms - Send SMS notifications
 */
import { Router } from 'express';
import { NotificationController } from '@controllers/NotificationController';
import { validateSchema } from '@middlewares/validator';
import { notificationValidators } from '@validators/notification.validator';
import { requestLogger } from '@middlewares/requestLogger';
import { container } from '@config/container';
import { rateLimiters } from '@middlewares/rateLimiter';

const router = Router();
const controller = container.resolve(NotificationController);

router.post(
    '/email',
    rateLimiters.email,
    requestLogger,
    (req, res, next) => validateSchema(notificationValidators.email)(req, res, next),
    controller.sendEmail
);

router.post(
    '/sms',
    rateLimiters.sms,
    requestLogger,
    (req, res, next) => validateSchema(notificationValidators.sms)(req, res, next),
    controller.sendSMS
);

export { router as notificationRoutes };