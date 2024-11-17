
import Joi from 'joi';

export const notificationValidators = {
    email: Joi.object({
        name: Joi.string()
            .min(2)
            .max(50)
            .required()
            .trim()
            .pattern(/^[a-zA-Z\s]*$/),
        email: Joi.string()
            .email()
            .required()
            .trim(),
        subject: Joi.string()
            .min(2)
            .max(100)
            .required()
            .trim(),
        message: Joi.string()
            .min(10)
            .max(1000)
            .required()
            .trim()
    }),

    sms: Joi.object({
        name: Joi.string()
            .min(2)
            .max(50)
            .required()
            .trim()
            .pattern(/^[a-zA-Z\s]*$/),
        phone: Joi.string()
            .pattern(/^\+[1-9]\d{1,14}$/)
            .required(),
        message: Joi.string()
            .min(10)
            .max(160)
            .required()
            .trim()
    })
};