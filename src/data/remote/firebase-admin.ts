import { cert, App, initializeApp } from 'firebase-admin/app';
import { messaging } from 'firebase-admin';

const googleServiceJson = require('../../../firebase-admin.json');

export default class FirebaseAdmin {

    private app : App;

    constructor(){

        this.app = initializeApp({ credential: cert(googleServiceJson) });
                
    }

    sendPushNotificationToTopic(topic: string){

        const registrationToken = 'YOUR_REGISTRATION_TOKEN';

        const message = {
            data: {
            },
            token: registrationToken
        };

        messaging().send(message)
        .then((response) => {
          // Response is a message ID string.
          console.log('Successfully sent message:', response);
        })
        .catch((error) => {
          console.log('Error sending message:', error);
        });

    }

}