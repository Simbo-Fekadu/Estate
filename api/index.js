import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

config();
connect(process.env.mymongo).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server is running on port 3000')
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);