import { Router } from 'express';
import { NotificationController } from '../controllers/NotificationController';
import { validateSchema } from '../middleware/validator';
import { notificationValidators } from '../validators/notification.validator';
import { requestLogger } from '../middleware/requestLogger';
import { container } from '../../config/container';

const router = Router();
const controller = container.resolve(NotificationController);

router.post(
    '/email',
    requestLogger,
    (req, res, next) => validateSchema(notificationValidators.email)(req, res, next),
    controller.sendEmail
);

router.post(
    '/sms',
    requestLogger,
    (req, res, next) => validateSchema(notificationValidators.sms)(req, res, next),
    controller.sendSMS
);

export { router as notificationRoutes };