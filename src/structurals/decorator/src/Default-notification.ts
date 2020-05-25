import { Notifier } from "./Notifier";
import { Contact } from "./Contact";

export class DefaultNotification implements Notifier {
    send(message: string, contact: Contact) {
        console.log(`Email: ${message} sended to ${contact.email}`);
    }
}