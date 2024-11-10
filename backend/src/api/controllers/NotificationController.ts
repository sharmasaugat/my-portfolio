import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import { INotificationService } from '../../core/interfaces/INotificationService';
import { AppError } from '../../utils/errors/AppError';

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
            const result = await this.notificationService.sendEmail(req.body);
            if (result.isSuccess) {
                res.status(200).json({ success: true, data: result.getValue() });
            } else {
                res.status(400).json({ success: false, error: result.error });
            }
        } catch (error) {
            next(new AppError('Email sending failed', error));
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
            next(new AppError('SMS sending failed', error));
        }
    };
}