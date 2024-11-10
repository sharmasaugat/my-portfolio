import { EmailDTO, SMSDTO } from '../../types/dto';
import { Result } from '../../utils/Result';

export interface INotificationService {
    sendEmail(payload: EmailDTO): Promise<Result<string>>;
    sendSMS(payload: SMSDTO): Promise<Result<string>>;
}