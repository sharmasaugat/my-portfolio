import { injectable } from 'inversify';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { IMessageProvider } from '@core/interfaces/IMessageProvider';
import { ISMSPayload } from '@core/interfaces/ISMSPayload';
import { NotificationType } from '@core/entities/NotificationStatus';
import { Result } from '@utils/Result';
import { logger } from '@utils/logger';
import { AppError } from '@utils/errors/AppError';

/**
 * SNSProvider implements IMessageProvider for SMS delivery using AWS SNS.
 * This provider handles:
 * - AWS SNS client initialization and configuration
 * - Message formatting and delivery
 * - Phone number validation
 * - Error handling and logging
 */
@injectable()
export class SNSProvider implements IMessageProvider<ISMSPayload> {
    private snsClient: SNSClient;
    public readonly type = NotificationType.SMS;

    constructor() {
        if (!process.env.AWS_REGION) {
            throw new AppError('Missing required AWS configuration');
        }

        this.snsClient = new SNSClient({
            region: process.env.AWS_REGION
        });
    }

    /**
     * Sends an SMS message using AWS SNS
     * @param payload - Contains phone number, message content, and optional metadata
     * @returns Result<string> - Success with MessageId or failure with error message
     * 
     * Features:
     * - Configures SMS type as Transactional for better delivery
     * - Sets custom sender ID for brand recognition
     * - Includes comprehensive error handling
     */
    public async send(payload: ISMSPayload): Promise<Result<string>> {
        try {
            if (!this.validateRecipient(payload.phone)) {
                return Result.fail('Invalid phone number');
            }

            const params = {
                Message: payload.message,
                PhoneNumber: payload.phone,
                MessageAttributes: {
                    'AWS.SNS.SMS.SenderID': {
                        DataType: 'String',
                        StringValue: 'Portfolio'
                    },
                    'AWS.SNS.SMS.SMSType': {
                        DataType: 'String',
                        StringValue: 'Transactional'
                    }
                }
            };

            const command = new PublishCommand(params);
            const result = await this.snsClient.send(command);
            return Result.ok(result.MessageId);
        } catch (error) {
            logger.error('Failed to send SMS', error as Error);
            return Result.fail((error as Error).message);
        }
    }

    /**
     * Validates phone numbers using E.164 format
     * Format: +[country code][number], e.g., +14155552671
     */
    public validateRecipient(phone: string): boolean {
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }
}


