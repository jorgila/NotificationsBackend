import PushNotificationsRepository from '../../domain/repositories/push-notifications-repository';
import FirebaseAdmin from '../remote/firebase-admin';

export default class PushNotificationsRepositoryImpl 
    implements PushNotificationsRepository
{

    constructor(readonly firebaseAdmin: FirebaseAdmin){ }

    sendNotificationToTopic(topic: string): void {
        this.firebaseAdmin.sendPushNotificationToTopic(topic);
    }
    sendNotificationToUser(userId: string): void {
        
    }

}