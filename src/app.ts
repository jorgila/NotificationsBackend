import express, {Application} from 'express';
import apiV1 from './api/routes/v1'
export default class App{
    private app: Application = express();

    async initialize(): Promise<void>{
        apiV1(this.app)
        const PORT = process.env.PORT ?? 8000;
        this.app.listen(PORT,()=>{
            console.log(`running on ${PORT}`)
        })
    }
}