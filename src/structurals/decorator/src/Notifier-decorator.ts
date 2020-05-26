import { Contact } from "./Contact";
import { Notifier } from "./Notifier";

export abstract class NotifierDecorator implements Notifier {
    protected wrapee: Notifier;
    
    constructor(wrapee: Notifier) {
        this.wrapee = wrapee;
    }

    send(message: string, contact: Contact) {
        if (this.wrapee) {
            this.wrapee.send(message, contact);
        }
    }
}