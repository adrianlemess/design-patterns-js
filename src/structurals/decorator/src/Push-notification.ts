import { Contact } from "./Contact";
import { NotifierDecorator } from "./Notifier-decorator";
import { Notifier } from "./Notifier";

export class PushNotification extends NotifierDecorator {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }
    send(message: string, contact: Contact) {
        this.wrapee.send(message, contact);
        console.log(`Push notification: ${message} sended to phone number ${contact.phoneNumber}`);
    }
}