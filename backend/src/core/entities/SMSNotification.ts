import { v4 as uuidv4 } from 'uuid';
import { NotificationStatus, NotificationType } from './NotificationStatus';
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