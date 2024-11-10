
// src/core/interfaces/IEmailPayload.ts
export interface IEmailPayload {
    email: string;
    subject: string;
    message: string;
    name?: string;
}