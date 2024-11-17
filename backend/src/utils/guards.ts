
export function isNullOrUndefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
}