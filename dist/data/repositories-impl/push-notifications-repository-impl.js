"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PushNotificationsRepositoryImpl {
    constructor(firebaseAdmin) {
        this.firebaseAdmin = firebaseAdmin;
    }
    sendNotificationToTopic(topic) {
        this.firebaseAdmin.sendPushNotificationToTopic(topic);
    }
    sendNotificationToUser(userId) {
    }
}
exports.default = PushNotificationsRepositoryImpl;
