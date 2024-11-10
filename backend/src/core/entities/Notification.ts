// src/core/entities/Notification.ts
import { v4 as uuidv4 } from 'uuid';
import { NotificationStatus, NotificationType } from './NotificationStatus';

export interface NotificationResponse {
    id: string;
    status: NotificationStatus;
    type: NotificationType;
    recipient: string;
    sentAt?: string;
}

export type NotificationProps = {
    type: NotificationType;
    recipient: string;
    content: {
        message: string;
        subject?: string;
    };
    status?: NotificationStatus;
    metadata?: Record<string, unknown>;
}

export class Notification {
    private constructor(
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

    public static create(type: NotificationType, payload: NotificationProps): Notification | Error {
        if (!payload.recipient) {
            return new Error('Recipient is required');
        }

        if (!payload.content.message) {
            return new Error('Message is required');
        }

        if (type === NotificationType.EMAIL && !payload.content.subject) {
            return new Error('Subject is required for email notifications');
        }

        return new Notification(
            uuidv4(),
            type,
            payload.recipient,
            payload.content,
            payload.status || NotificationStatus.PENDING,
            payload.metadata
        );
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
