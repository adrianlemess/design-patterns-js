import { Notifier } from "./Notifier";
import { Contact } from "./Contact";

export class FacebookNotification implements Notifier {
    send(message: string, contact: Contact) {
        console.log(`Facebook Message: ${message} sended to facebook username ${contact.username}`);
    }
}