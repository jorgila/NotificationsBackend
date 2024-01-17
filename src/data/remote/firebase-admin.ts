import { cert, App, initializeApp } from 'firebase-admin/app';
import { messaging } from 'firebase-admin';

const googleServiceJson = require('../../../firebase-admin.json');

export default class FirebaseAdmin {

    private app : App;

    constructor(){

        this.app = initializeApp({ credential: cert(googleServiceJson) });
                
    }

    sendPushNotificationToTopic(topic: string){

        messaging().send({
          topic,
          notification:{
              title: 'Primera notificación desde el Backend',
              body: '¡Enhorabuena! Has enviado tu primera notificación desde el Backend.'
            }
          }
        )
        .then((response) => {
          // Response is a message ID string.
          console.log('Successfully sent message:', response);
        })
        .catch((error) => {
          console.log('Error sending message:', error);
        });
    }

}