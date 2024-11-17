
import { NotificationStatus, NotificationType } from '../core/entities/NotificationStatus';

export interface NotificationResponse {
    id: string;
    status: NotificationStatus;
    type: NotificationType;
    recipient: string;
    sentAt?: string;
}

export type BaseNotificationProps = {
    recipient: string;
    content: {
        message: string;
        subject?: string;
    };
    status?: NotificationStatus;
    metadata?: Record<string, unknown>;
}