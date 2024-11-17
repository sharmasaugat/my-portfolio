/**
 * Domain entity representing an SMS notification.
 * Implements the Factory pattern for object creation with validation.
 * 
 * Features:
 * - Immutable properties using readonly
 * - UUID-based unique identification
 * - Factory method with validation
 * - Inheritance from base Notification class
 */
import { v4 as uuidv4 } from 'uuid';
import { NotificationType } from './NotificationStatus';
import { Notification } from './Notification';
import { BaseNotificationProps } from '../../types/NotificationTypes';

export type SMSNotificationProps = BaseNotificationProps;

export class SMSNotification extends Notification {
    private constructor(props: SMSNotificationProps) {
        super(
            uuidv4(),
            NotificationType.SMS,
            props.recipient,
            props.content,
            props.status,
            props.metadata
        );
    }

    public static create(payload: SMSNotificationProps): SMSNotification | Error {
        const baseError = Notification.validateBase(payload);
        if (baseError) return baseError;

        return new SMSNotification(payload);
    }
}