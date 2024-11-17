import { v4 as uuidv4 } from 'uuid';
import { NotificationStatus, NotificationType } from './NotificationStatus';
import { Notification } from './Notification';
import { BaseNotificationProps } from '../../types/NotificationTypes';

export type EmailNotificationProps = BaseNotificationProps;

export class EmailNotification extends Notification {
    private constructor(props: EmailNotificationProps) {
        super(
            uuidv4(),
            NotificationType.EMAIL,
            props.recipient,
            props.content,
            props.status,
            props.metadata
        );
    }

    public static create(payload: EmailNotificationProps): EmailNotification | Error {
        const baseError = Notification.validateBase(payload);
        if (baseError) return baseError;

        if (!payload.content.subject) {
            return new Error('Subject is required for email notifications');
        }

        return new EmailNotification(payload);
    }
}