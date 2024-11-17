import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { EmailDTO, SMSDTO } from '../types/dto';
import { INotificationService } from '@core/interfaces/INotificationService';
import { IMessageProvider } from '@interfaces/IMessageProvider';
import { Result } from '@utils/Result';
import { AppError } from '@utils/errors/AppError';
import { EmailNotification } from '@core/entities/EmailNotification';
import { SMSNotification } from '@core/entities/SMSNotification';
import { IEmailPayload } from '@core/interfaces/IEmailPayload';
import { ISMSPayload } from '@interfaces/ISMSPayload';
import { logger } from '@utils/logger';

/**
 * NotificationService implements INotificationService to handle both email and SMS notifications.
 * It uses dependency injection to receive email and SMS providers, promoting loose coupling
 * and easier testing.
 * 
 * The service includes:
 * - Input validation for both email and SMS payloads
 * - Integration with AWS SES for emails and AWS SNS for SMS
 * - Error handling and logging
 */
@injectable()
export class NotificationService implements INotificationService {
    constructor(
        @inject(TYPES.EmailProvider) private emailProvider: IMessageProvider,
        @inject(TYPES.SMSProvider) private smsProvider: IMessageProvider
    ) {}

    /**
     * Sends an email using the configured email provider (AWS SES)
     * @param payload - EmailDTO containing recipient details and message content
     * @returns Result<string> - Success/failure with message ID or error message
     * 
     * Security Note: Uses verified email addresses only to prevent spam
     * Error Handling: Includes payload validation and provider-level error handling
     */
    public async sendEmail(payload: EmailDTO): Promise<Result<string>> {
        if (!payload.email || !payload.subject || !payload.message) {
            return Result.fail('Invalid email payload');
        }

        try {
            if (!this.emailProvider.validateRecipient(payload.email)) {
                return Result.fail('Invalid email address');
            }

            logger.info(`Using verified email: ${process.env.AWS_SES_FROM_EMAIL}`); 
            logger.info(`AWS region: ${process.env.AWS_REGION}`); 

            const notification = EmailNotification.create({
                recipient: process.env.AWS_SES_FROM_EMAIL!,
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
                message: `From: ${payload.email}\n\n${payload.message}`, // Include original sender's email in the message
                name: payload.name
            };

            return await this.emailProvider.send(emailPayload);
        } catch (error) {
            throw new AppError('Email sending failed');
        }
    }

    /**
     * Sends an SMS using the configured SMS provider (AWS SNS)
     * @param payload - SMSDTO containing phone number and message
     * @returns Result<string> - Success/failure with message ID or error message
     * 
     * Validation: Includes phone number format validation
     * Error Handling: Handles provider-level errors and invalid inputs
     */
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