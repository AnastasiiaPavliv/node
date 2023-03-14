
import express from "express";
import mongoose from "mongoose";
import {userRouter} from "./routers/user.router";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
     mongoose.connect('mongodb://127.0.0.1:27017/Project 0');
    console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
})