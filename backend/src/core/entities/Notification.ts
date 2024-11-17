// src/core/entities/Notification.ts
import { v4 as uuidv4 } from 'uuid';
import { NotificationStatus, NotificationType } from './NotificationStatus';
import { NotificationResponse, BaseNotificationProps } from '../../types/NotificationTypes';

export abstract class Notification {
    protected constructor(
        public readonly id: string,
        public readonly type: NotificationType,
        public readonly recipient: string,
        public readonly content: {
            subject?: string;
            message: string;
        },
        public status: NotificationStatus = NotificationStatus.PENDING,
        public metadata?: Record<string, any>
    ) {}

    protected static validateBase(payload: BaseNotificationProps): Error | null {
        if (!payload.recipient) {
            return new Error('Recipient is required');
        }

        if (!payload.content.message) {
            return new Error('Message is required');
        }

        return null;
    }

    public toResponse(): NotificationResponse {
        return {
            id: this.id,
            status: this.status,
            type: this.type,
            recipient: this.recipient,
            sentAt: this.metadata?.sentAt
        };
    }
}
