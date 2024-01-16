import {Request, Response} from 'express';
import PushNotificationsRepository from '../../../domain/repositories/push-notifications-repository';

export default class PromosController {

    constructor(
        readonly pushNotificationsRepository: PushNotificationsRepository
    ){}

    sendPromo = (req:Request,res: Response)=>{
        this.pushNotificationsRepository.sendNotificationToTopic('promos');
        res.send('OK');
    };
}