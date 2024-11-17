import { NotificationStatus, NotificationType } from './NotificationStatus';
import { NotificationResponse, BaseNotificationProps } from '../../types/NotificationTypes';

/**
 * Abstract base class for all notification types (Email, SMS, etc.)
 * Implements the Domain-Driven Design pattern for notification entities
 * 
 * Features:
 * - Unique ID generation for each notification
 * - Status tracking
 * - Type-specific content validation
 * - Metadata support for additional properties
 * - Response formatting for API responses
 */
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

    /**
     * Validates common notification properties
     * @param payload - Base notification properties including recipient and content
     * @returns null if valid, Error if validation fails
     */
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
