import { NotifierDecorator } from "./src/Notifier-decorator"
import { Contact } from "./src/Contact";
import { NotificationType } from "./src/NotificationTypeEnum";

export const startDecorator = () => {
    const notificationSystem = new NotifierDecorator();
    
    const contact = new Contact({
        email: 'adrianlemess@gmail.com',
        name: 'Adrian Lemes',
        phoneNumber: '+555199999999',
        username: 'adrianlemess'
    })
    // Send email
    notificationSystem.send('Hello dear Adrian we have a super promotion for you', contact);

    // Send a push notification
    notificationSystem.setBaseDecorator(NotificationType.PUSH_NOTIFICATION);
    notificationSystem.send('Hi Adrian Lemes your house alarm fired!', contact);

    // Send a facebook notification
    notificationSystem.setBaseDecorator(NotificationType.FACEBOOK);
    notificationSystem.send('Hello we have a super promotion for you', contact);

    // Send a slack notification
    notificationSystem.setBaseDecorator(NotificationType.SLACK_NOTIFICATION);
    notificationSystem.send('The pipeline broke', contact);
};