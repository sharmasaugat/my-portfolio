// src/core/interfaces/IMessageProvider.ts
import { NotificationType } from '../entities/NotificationStatus';
import { Result } from './../../utils/Result';
import { IEmailPayload } from './IEmailPayload';
import { ISMSPayload } from './ISMSPayload';

export type NotificationPayload = IEmailPayload | ISMSPayload;

export interface IMessageProvider<T extends NotificationPayload = NotificationPayload> {
    readonly type: NotificationType;
    send(payload: T): Promise<Result<string>>;
    validateRecipient(recipient: string): boolean;
}