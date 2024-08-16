import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes';
import configs from './app/configs';


const app = express();

app.use(express.json());
app.use(cors({ origin: [configs.local_frontend_url as string, configs.live_frontend_url as string] }));


app.use('/api', router);


// root route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Camp Gear backend');
})




export default app;