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
        const registrationToken = 'YOUR_REGISTRATION_TOKEN';
        const message = {
            data: {},
            token: registrationToken
        };
        (0, firebase_admin_1.messaging)().send(message)
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
