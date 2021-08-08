import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/home";
import videoRouter from "./routers/videos";
import userRouter from "./routers/user";

const logger = morgan("dev");

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
