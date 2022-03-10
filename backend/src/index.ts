import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, Capstone Team 5');
});

app.listen(3000, () => {
    console.log('Start Server with 3000 port');
});