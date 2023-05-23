// express
import express from 'express';
// mongoose mongodb 라이브러리
import mongoose from 'mongoose';
// cors - 교차 출처 리소스 공유 라이브러리
import cors from 'cors';
// 미들웨어
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// 환경설정
import dotenv from 'dotenv';

import userRouter from './routers/user-router.js';
import projectRouter from "./routers/project-router.js";
import planRouter from "./routers/plan-router.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
    cors({
        credentials: true,
        origin: [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
        ],
    }),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('cookieParser'));

mongoose
    .connect(process.env.MONGO_URI || '')
    .then(() => console.log('Successfully connected mongodb'))
    .catch((e) => console.error(e));

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/plans', planRouter);

app.listen(port, () => {
    console.log(`http is listening to ${port}`);
});
