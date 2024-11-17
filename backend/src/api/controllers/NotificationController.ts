/**
 * Controller handling notification requests implementing the Clean Architecture pattern.
 * 
 * Design Patterns:
 * - Dependency Injection for service coupling
 * - Response formatting standardization
 * - Error boundary implementation
 * - Async/await with proper error handling
 * 
 * Response Format:
 * Success: { success: true, data: string }
 * Error: { success: false, error: string }
 */
import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import { INotificationService } from '@interfaces/INotificationService';  // This should now work
import { AppError } from '@utils/errors/AppError';

@injectable()
export class NotificationController {
    constructor(
        @inject(TYPES.NotificationService) 
        private notificationService: INotificationService
    ) {}

    public sendEmail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            debugger;
            const result = await this.notificationService.sendEmail(req.body);
            if (result.isSuccess) {
                res.status(200).json({ success: true, data: result.getValue() });
            } else {
                res.status(400).json({ success: false, error: result.error });
            }
        } catch (error) {
            next(new AppError('Email sending failed'));
        }
    };

    public sendSMS = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const result = await this.notificationService.sendSMS(req.body);
            if (result.isSuccess) {
                res.status(200).json({ success: true, data: result.getValue() });
            } else {
                res.status(400).json({ success: false, error: result.error });
            }
        } catch (error) {
            next(new AppError('SMS sending failed'));
        }
    };
}