"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromosController {
    constructor(pushNotificationsRepository) {
        this.pushNotificationsRepository = pushNotificationsRepository;
        this.sendPromo = (req, res) => {
            this.pushNotificationsRepository.sendNotificationToTopic('promos');
            res.send('OK');
        };
    }
}
exports.default = PromosController;
