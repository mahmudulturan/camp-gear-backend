import express, { Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes';


const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', router);


// root route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Camp Gear backend');
})




export default app;