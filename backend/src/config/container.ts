// src/config/container.ts
import { Container } from 'inversify';
import { TYPES } from '../types';

// Interfaces
import { INotificationService } from '@interfaces/INotificationService';
import { IMessageProvider } from '@interfaces/IMessageProvider';

// Implementations
import { NotificationService } from '@services/NotificationService';
import { SESProvider } from '@aws/SESProvider';
import { SNSProvider } from '@aws/SNSProvider';
import { MessageProviderFactory } from '@providers/MessageProviderFactory';
import { NotificationController } from '@controllers/NotificationController';

const container = new Container();

// Service bindings
container.bind<INotificationService>(TYPES.NotificationService)
    .to(NotificationService)
    .inSingletonScope();

// Provider bindings
container.bind<IMessageProvider>(TYPES.EmailProvider)
    .to(SESProvider)
    .inSingletonScope();

container.bind<IMessageProvider>(TYPES.SMSProvider)
    .to(SNSProvider)
    .inSingletonScope();

container.bind<MessageProviderFactory>(TYPES.MessageProviderFactory)
    .to(MessageProviderFactory)
    .inSingletonScope();

// Controller bindings
container.bind<NotificationController>(TYPES.NotificationController)
    .to(NotificationController)
    .inSingletonScope();

export { container };