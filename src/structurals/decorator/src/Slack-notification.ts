import { Contact } from "./Contact";
import { NotifierDecorator } from "./Notifier-decorator";
import { Notifier } from "./Notifier";

export class SlackNotification extends NotifierDecorator {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }
    send(message: string, contact: Contact) {
        this.wrapee.send(message, contact);
        console.log(`Slack notification: ${message} sended to email ${contact.email} and username ${contact.username}`);
    }
}