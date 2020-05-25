import { Contact } from "./Contact";

export interface Notifier { 
    send(message: string, contact: Contact): void;
}