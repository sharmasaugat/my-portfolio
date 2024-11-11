import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { EmailDTO, SMSDTO } from '../types/dto';
import { INotificationService } from '../core/interfaces/INotificationService';
import { IMessageProvider } from '../core/interfaces/IMessageProvider';
import { Result } from '../utils/Result';
import { AppError } from '../utils/errors/AppError';
import { NotificationType, NotificationStatus } from '../core/entities/NotificationStatus';
import { Notification } from '../core/entities/Notification';
import { IEmailPayload } from '../core/interfaces/IEmailPayload';
import { ISMSPayload } from '../core/interfaces/ISMSPayload';

@injectable()
export class NotificationService implements INotificationService {
    constructor(
        @inject(TYPES.EmailProvider) private emailProvider: IMessageProvider,
        @inject(TYPES.SMSProvider) private smsProvider: IMessageProvider
    ) {}

    public async sendEmail(payload: EmailDTO): Promise<Result<string>> {
        if (!payload.email || !payload.subject || !payload.message) {
            return Result.fail('Invalid email payload');
        }

        try {
            if (!this.emailProvider.validateRecipient(payload.email)) {
                return Result.fail('Invalid email address');
            }

            const notification = Notification.create(NotificationType.EMAIL, {
                type: NotificationType.EMAIL,
                recipient: payload.email,
                content: {
                    message: payload.message,
                    subject: payload.subject
                },
                status: NotificationStatus.PENDING
            });

            if (notification instanceof Error) {
                return Result.fail(notification.message);
            }

            const emailPayload: IEmailPayload = {
                email: notification.recipient,
                subject: notification.content.subject as string,
                message: notification.content.message,
                name: payload.name
            };

            return await this.emailProvider.send(emailPayload);
        } catch (error) {
            throw new AppError('Email sending failed');
        }
    }

    public async sendSMS(payload: SMSDTO): Promise<Result<string>> {
        if (!payload.phone || !payload.message) {
            return Result.fail('Invalid SMS payload');
        }

        try {
            if (!this.smsProvider.validateRecipient(payload.phone)) {
                return Result.fail('Invalid phone number');
            }

            const notification = Notification.create(NotificationType.SMS, {
                type: NotificationType.SMS,
                recipient: payload.phone,
                content: {
                    message: payload.message
                },
                status: NotificationStatus.PENDING
            });

            if (notification instanceof Error) {
                return Result.fail(notification.message);
            }

            const smsPayload: ISMSPayload = {
                phone: notification.recipient,
                message: notification.content.message,
                name: payload.name
            };

            return await this.smsProvider.send(smsPayload);
        } catch (error) {
            throw new AppError('SMS sending failed');
        }
    }
}