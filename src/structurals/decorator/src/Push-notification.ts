import { Notifier } from "./Notifier";
import { Contact } from "./Contact";

export class PushNotification implements Notifier {
    send(message: string, contact: Contact) {
        console.log(`Push notification: ${message} sended to phone number ${contact.phoneNumber}`);
    }
}