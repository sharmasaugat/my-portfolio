export const TYPES = {
    NotificationService: Symbol.for('NotificationService'),
    NotificationController: Symbol.for('NotificationController'),
    
    MessageProviderFactory: Symbol.for('MessageProviderFactory'),
    MessageProvider: Symbol.for('MessageProvider'),
    EmailProvider: Symbol.for('EmailProvider'),
    SMSProvider: Symbol.for('SMSProvider'),
    Logger: Symbol.for('Logger')
};

export interface NotificationConfig {
    enabled: boolean;
    provider: string;
    credentials: Record<string, any>;
}

export interface NotificationPayload {
    to: string;
    subject?: string;
    message: string;
}