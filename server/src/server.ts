import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api/v1', router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({ type: 'error', message: err.message });
});

app.listen(3333, () => console.log('Server is running at port 3333'));
