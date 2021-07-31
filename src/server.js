import express from "express"
import morgan from "morgan";
import globalRouter  from "./routers/home";
import videoRouter from "./routers/videos";
import userRouter from "./routers/user";

const logger = morgan("dev");

const app = express();

app.use(logger);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);



const handleListening = () => {
    console.log(`server is listening to http://localhost:4000`);
}

app.listen("4000", handleListening)