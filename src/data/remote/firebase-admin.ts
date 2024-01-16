import { credential, app, initializeApp } from "firebase-admin";

const googleServiceJson = require('../../../firebase-admin.json');

export default class FirebaseAdmin {

    private app: app.App;

    constructor(){
        const _credential = credential.cert(googleServiceJson);
        this.app = initializeApp({credential: _credential});
    }

    sendPushNotification(token: string){
        this.app.messaging().send({
            token,
            notification:{
                title: 'fcm',
                body: 'this is a test',
            }
        })
    }

}