import express, { Request, Response, Application } from 'express';
import {add} from '@src/utils/add';
import {getDate} from '@src/utils/date';

const PORT = process.env.PORT || 3000;
const app: Application = express();
const x = 7;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, date: getDate(), msg: 'Go to route /add?a=<number>&b=<number> to add two numbers' });
});

app.get('/add', (req: Request, res: Response) => {
  const { a, b } = req.query;
  console.log(a, b);
  if (a && b) {
    const result = add(+a, +b);
    res.status(200).json({ success: true, numbers: [a, b], result });
  } else {
    res.status(404).json({ success: false, msg: 'Numbers not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
