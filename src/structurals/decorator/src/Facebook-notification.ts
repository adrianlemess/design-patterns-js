import { Contact } from "./Contact";
import { NotifierDecorator } from "./Notifier-decorator";
import { Notifier } from "./Notifier";

export class FacebookNotification extends NotifierDecorator {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }
    send(message: string, contact: Contact) {
        this.wrapee.send(message, contact);
        console.log(`Facebook Message: ${message} sended to facebook username ${contact.username}`);
    }
}