// src/infrastructure/providers/aws/SESProvider.ts
import { injectable } from 'inversify';
import AWS from 'aws-sdk';
import { IMessageProvider } from '../../../core/interfaces/IMessageProvider';
import { IEmailPayload } from '../../../core/interfaces/IEmailPayload';
import { NotificationType } from '../../../core/entities/NotificationStatus';
import { Result } from '../../../utils/Result';
import { logger } from '../../../utils/logger';
import { AppError } from '../../../utils/errors/AppError';
import { CONFIG } from '../../../config/constants';
import { SendEmailRequest } from 'aws-sdk/clients/ses';

@injectable()
export class SESProvider implements IMessageProvider<IEmailPayload> {
    private ses: AWS.SES;
    public readonly type = NotificationType.EMAIL;

    constructor() {
        if (!CONFIG.AWS.REGION || !CONFIG.AWS.SES_FROM_EMAIL) {
            throw new AppError('Missing required AWS configuration for SES', 500, 'AWS_CONFIG_ERROR');
        }

        this.ses = new AWS.SES({
            apiVersion: '2010-12-01', // Hardcode version instead of using CONFIG
            region: CONFIG.AWS.REGION
        });
    }

    public async send(payload: IEmailPayload): Promise<Result<string>> {
        try {
            await this.validatePayload(payload);

            const params: SendEmailRequest = {
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

            const result = await this.ses.sendEmail(params).promise();
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
            throw new AppError('Invalid email recipiSUBJECT_MAX_LENGTHD_EMAIL');
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
            .replace(/[<>]/g, '') // Remove potential HTML tags
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
