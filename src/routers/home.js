import express from "express"
import {handleGlobalrouter, joinController, loginController} from "../controllers/userControllers"

const globalRouter = express.Router();


globalRouter.get("/", handleGlobalrouter);
globalRouter.get("/join", joinController);
globalRouter.get("/login", loginController);
export default globalRouter;