import { Contact } from "./src/Contact";
import { FacebookNotification } from "./src/Facebook-notification";
import { SlackNotification } from "./src/Slack-notification";
import { PushNotification } from "./src/Push-notification";
import { DefaultNotification } from "./src/Default-notification";

export const startDecorator = () => {
    const notificationSystem =
        new SlackNotification(
            new PushNotification(
                new FacebookNotification(
                    new DefaultNotification()
                )
            )
        )

    const contact = new Contact({
        email: 'adrianlemess@gmail.com',
        name: 'Adrian Lemes',
        phoneNumber: '+555199999999',
        username: 'adrianlemess'
    })

    notificationSystem.send('Hello World', contact);
};