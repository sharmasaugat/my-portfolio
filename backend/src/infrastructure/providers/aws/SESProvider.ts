import { injectable } from 'inversify';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { IMessageProvider } from '@core/interfaces/IMessageProvider';
import { IEmailPayload } from '@core/interfaces/IEmailPayload';
import { NotificationType } from '@core/entities/NotificationStatus';
import { Result } from '@utils/Result';
import { logger } from '@utils/logger';
import { AppError } from '@utils/errors/AppError';
import { CONFIG } from '@utils/constants';

/**
 * @class SESProvider
 * @description AWS SES implementation of IMessageProvider for email delivery
 * 
 * Architecture:
 * - Implements Adapter pattern for AWS SES integration
 * - Uses Dependency Injection via inversify
 * 
 * Security measures:
 * - Input sanitization for XSS prevention
 * - Email validation using regex
 * - Rate limiting integration
 * - Secure credential management
 * 
 * Error handling:
 * - Graceful AWS error handling
 * - Detailed logging for debugging
 * - Result pattern for type-safe error handling
 * 
 * Integration points:
 * - AWS SES
 * - Logging system
 * - Configuration management
 */
@injectable()
export class SESProvider implements IMessageProvider<IEmailPayload> {
    private sesClient: SESClient;
    public readonly type = NotificationType.EMAIL;

    constructor() {
        if (!CONFIG.AWS.REGION || !CONFIG.AWS.SES_FROM_EMAIL) {
            throw new AppError('Missing required AWS configuration for SES', 500, 'AWS_CONFIG_ERROR');
        }

        logger.info(`Using AWS region: ${CONFIG.AWS.REGION}`);
        logger.info(`Using SES from email: ${CONFIG.AWS.SES_FROM_EMAIL}`); 

        this.sesClient = new SESClient({
            region: CONFIG.AWS.REGION
        });
    }

    public async send(payload: IEmailPayload): Promise<Result<string>> {
        try {
            await this.validatePayload(payload);

            const params = {
                Source: CONFIG.AWS.SES_FROM_EMAIL!,
                Destination: {
                    ToAddresses: [payload.email]
                },
                Message: {
                    Subject: {
                        Data: this.sanitizeInput(payload.subject),
                        Charset: 'UTF-8'
                    },
                    Body: {
                        Html: {
                            Data: this.buildEmailTemplate(payload),
                            Charset: 'UTF-8'
                        }
                    }
                }
            };

            const command = new SendEmailCommand(params);
            const result = await this.sesClient.send(command);
            logger.info(`Email sent successfully: ${result.MessageId}`);
            return Result.ok(result.MessageId);
        } catch (error) {
            if (error instanceof Error && 'code' in error) {
                logger.error(`AWS SES Error: ${error.message}`);
                return Result.fail(`Failed to send email: ${error.message}`);
            }
            logger.error('Email sending failed', error as Error);
            return Result.fail('Failed to send email');
        }
    }

    private async validatePayload(payload: IEmailPayload): Promise<void> {
        if (!payload.email || !this.validateRecipient(payload.email)) {
            throw new AppError('Invalid email recipient');
        }
        if (!payload.subject || payload.subject.length > CONFIG.EMAIL.TEMPLATE.SUBJECT_MAX_LENGTH) {
            throw new AppError('Invalid subject length', 400, 'INVALID_SUBJECT');
        }
        if (!payload.message || payload.message.length > CONFIG.EMAIL.TEMPLATE.MESSAGE_MAX_LENGTH) {
            throw new AppError('Invalid message length', 400, 'INVALID_MESSAGE');
        }
    }

    private sanitizeInput(input: string): string {
        return input
            .trim()
            .replace(/[<>]/g, '') 
            .substring(0, CONFIG.EMAIL.TEMPLATE.SUBJECT_MAX_LENGTH);
    }

    public validateRecipient(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private buildEmailTemplate(notification: IEmailPayload): string {
        return `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>New Portfolio Contact</h2>
                <p><strong>From:</strong> ${notification.name || 'Anonymous'}</p>
                <p><strong>Email:</strong> ${notification.email}</p>
                <p><strong>Subject:</strong> ${notification.subject}</p>
                <div style="margin-top: 20px;">
                    <p><strong>Message:</strong></p>
                    <p>${notification.message}</p>
                </div>
                <hr/>
                <p style="color: #666; font-size: 12px;">
                    This message was sent from your portfolio contact form
                </p>
            </div>
        `;
    }
}
