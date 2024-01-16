export default interface PushNotificationsRepository {

    sendNotificationToTopic(topic: string):void;
    sendNotificationToUser(userId: string):void;
}