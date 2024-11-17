import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { EmailDTO, SMSDTO } from '../types/dto';
import { INotificationService } from '../core/interfaces/INotificationService';
import { IMessageProvider } from '../core/interfaces/IMessageProvider';
import { Result } from '../utils/Result';
import { AppError } from '../utils/errors/AppError';
import { NotificationStatus } from '../core/entities/NotificationStatus';
import { EmailNotification } from '../core/entities/EmailNotification';
import { SMSNotification } from '../core/entities/SMSNotification';
import { IEmailPayload } from '../core/interfaces/IEmailPayload';
import { ISMSPayload } from '../core/interfaces/ISMSPayload';
import { logger } from '../utils/logger';

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

            logger.info(`Using verified email: ${process.env.AWS_SES_FROM_EMAIL}`); // Log the verified email
            logger.info(`AWS region: ${process.env.AWS_REGION}`); // Log the AWS region

            const notification = EmailNotification.create({
                recipient: process.env.AWS_SES_FROM_EMAIL!, // Verified email address
                content: {
                    message: payload.message,
                    subject: payload.subject
                },
                metadata: {
                    name: payload.name
                }
            });

            if (notification instanceof Error) {
                return Result.fail(notification.message);
            }

            const emailPayload: IEmailPayload = {
                email: process.env.AWS_SES_FROM_EMAIL!, // Verified email address as recipient
                subject: payload.subject,
                message: `From: ${process.env.AWS_SES_FROM_EMAIL}\n\n${payload.message}`, // Include original sender's email in the message
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

            const notification = SMSNotification.create({
                recipient: payload.phone,
                content: {
                    message: payload.message
                },
                metadata: {
                    name: payload.name
                }
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