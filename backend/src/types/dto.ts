export interface EmailDTO {
    email: string;
    subject: string;
    message: string;
    name?: string;
}

export interface SMSDTO {
    phone: string;
    message: string;
    name?: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}

export interface INotificationPayload {
    recipient: string;
    content: {
        subject?: string;
        message: string;
    };
    metadata?: Record<string, any>;
}