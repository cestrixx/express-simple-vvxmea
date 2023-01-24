import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { authRoute, otherRoute } from './api/routes';

const app = express();

const port = 3010;
const path = require('path');
app.use(express.static('static'));
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
  })
);
app.use(helmet());
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' });
});
app.use('/auth', authRoute);
app.use('/logout', otherRoute);
app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({
    status: 500,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
