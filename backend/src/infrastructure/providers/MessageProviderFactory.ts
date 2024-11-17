// src/infrastructure/providers/MessageProviderFactory.ts
import { injectable, inject } from 'inversify';
import { TYPES } from '../../types';
import { IMessageProvider } from '@core/interfaces/IMessageProvider';
import { NotificationType } from '@core/entities/NotificationStatus';
import { AppError } from '@utils/errors/AppError';

@injectable()
export class MessageProviderFactory {
    constructor(
        @inject(TYPES.EmailProvider) private emailProvider: IMessageProvider,
        @inject(TYPES.SMSProvider) private smsProvider: IMessageProvider
    ) {}

    public getProvider(type: NotificationType): IMessageProvider {
        switch (type) {
            case NotificationType.EMAIL:
                return this.emailProvider;
            case NotificationType.SMS:
                return this.smsProvider;
            default:
                throw new AppError(`Unsupported notification type: ${type}`);
        }
    }
}
