// src/infrastructure/providers/aws/SNSProvider.ts
import { injectable } from 'inversify';
import AWS from 'aws-sdk';
import { IMessageProvider } from '../../../core/interfaces/IMessageProvider';
import { ISMSPayload } from '../../../core/interfaces/ISMSPayload';
import { NotificationType } from '../../../core/entities/NotificationStatus';
import { Result } from '../../../utils/Result';
import { logger } from '../../../utils/logger';
import { AppError } from '../../../utils/errors/AppError';

@injectable()
export class SNSProvider implements IMessageProvider<ISMSPayload> {
    private sns: AWS.SNS;
    public readonly type = NotificationType.SMS;

    constructor() {
        if (!process.env.AWS_REGION) {
            throw new AppError('Missing required AWS configuration');
        }

        this.sns = new AWS.SNS({
            apiVersion: '2010-03-31',
            region: process.env.AWS_REGION
        });
    }

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

            const result = await this.sns.publish(params).promise();
            return Result.ok(result.MessageId);
        } catch (error) {
            logger.error('Failed to send SMS', error as Error);
            return Result.fail((error as Error).message);
        }
    }

    public validateRecipient(phone: string): boolean {
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }
}


