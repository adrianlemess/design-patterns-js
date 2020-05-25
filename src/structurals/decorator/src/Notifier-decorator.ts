import { Notifier } from "./Notifier";
import { NotificationType } from "./NotificationTypeEnum";
import { Contact } from "./Contact";
import { DefaultNotification } from "./Default-notification";
import { FacebookNotification } from "./Facebook-notification";
import { PushNotification } from "./Push-notification";
import { SlackNotification } from "./Slack-notification";

export class NotifierDecorator implements Notifier {
    private wrapee: Notifier;

    setBaseDecorator(notifier: NotificationType = NotificationType.DEFAULT) {
        switch(notifier) {
            case NotificationType.DEFAULT:
                this.wrapee = new DefaultNotification();
                break;
            case NotificationType.FACEBOOK:
                this.wrapee = new FacebookNotification();
                break;
            case NotificationType.PUSH_NOTIFICATION:
                this.wrapee = new PushNotification();
                break;
            case NotificationType.SLACK_NOTIFICATION:
                this.wrapee = new SlackNotification();
                break;
            default:
                throw new Error('Notification not specified')
        }
    }

    send(message: string, contact: Contact) {
        if (!this.wrapee) {
            this.setBaseDecorator();
        }
        this.wrapee.send(message, contact);
    }
}