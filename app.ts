import express, { Express } from "express";
import userRouter from "./routes/users";

const app: Express = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(3000);
