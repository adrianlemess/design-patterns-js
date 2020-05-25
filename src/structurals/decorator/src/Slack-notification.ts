import { Notifier } from "./Notifier";
import { Contact } from "./Contact";

export class SlackNotification implements Notifier {
    send(message: string, contact: Contact) {
        console.log(`Slack notification: ${message} sended to email ${contact.email} and username ${contact.username}`);
    }
}