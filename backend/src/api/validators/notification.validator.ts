// // src/api/validators/notification.validator.ts
// import { body } from 'express-validator';

// export const notificationValidators = {
//     email: [
//         body('email').isEmail().withMessage('Invalid email address'),
//         body('subject').trim().notEmpty().withMessage('Subject is required')
//             .isLength({ max: 100 }).withMessage('Subject too long'),
//         body('message').trim().notEmpty().withMessage('Message is required')
//             .isLength({ max: 1000 }).withMessage('Message too long'),
//         body('name').optional().trim().isLength({ max: 100 })
//     ],
    
//     sms: [
//         body('phone').matches(/^\+[1-9]\d{1,14}$/).withMessage('Invalid phone number'),
//         body('message').trim().notEmpty().withMessage('Message is required')
//             .isLength({ max: 160 }).withMessage('Message too long for SMS'),
//         body('name').optional().trim().isLength({ max: 100 })
//     ]
// };

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