/**
 * Interface defining the contract for SMS message payloads.
 * Part of the domain model for SMS notifications.
 * 
 * @property phone - E.164 format phone number (+[country code][number])
 * @property message - The SMS content to be delivered
 * @property name - Optional sender name for tracking/logging purposes
 */
export interface ISMSPayload {
    phone: string;
    message: string;
    name?: string;
}