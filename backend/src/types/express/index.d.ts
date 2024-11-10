
import { Schema } from 'joi';

declare global {
    namespace Express {
        interface Request {
            schema?: Schema;
        }
    }
}

export {};