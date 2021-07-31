import express from "express"
import morgan from "morgan";

const logger = morgan("combined");
const app = express();




const globalRouter = express.Router();
const handleGlobalrouter = (req, res) => {
    return   res.send("home");
}
globalRouter.get("/", handleGlobalrouter);

const userRouter = express.Router();
const handleProfile = (req, res) => {
  return  res.send("user profile");
}
const handleUser = (req, res) => {
 return   res.send("user");

}
userRouter.get("/profile", handleProfile);
userRouter.get("/", handleUser);

const videoRouter = express.Router();
const handleVideo = (req, res)=> {
    return res.send("video page");
}
videoRouter.get("/", handleVideo);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);



const handleListening = () => {
    console.log(`server is listening to http://localhost:4000`);
}

app.listen("4000", handleListening)