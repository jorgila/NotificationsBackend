"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const firebase_admin_1 = require("firebase-admin");
const googleServiceJson = require('../../../firebase-admin.json');
class FirebaseAdmin {
    constructor() {
        this.app = (0, app_1.initializeApp)({ credential: (0, app_1.cert)(googleServiceJson) });
    }
    sendPushNotificationToTopic(topic) {
        (0, firebase_admin_1.messaging)().send({
            topic,
            notification: {
                title: 'Primera notificación desde el Backend',
                body: '¡Enhorabuena! Has enviado tu primera notificación desde el Backend.'
            }
        })
            .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
            .catch((error) => {
            console.log('Error sending message:', error);
        });
    }
}
exports.default = FirebaseAdmin;
