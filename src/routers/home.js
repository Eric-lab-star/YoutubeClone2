import express from "express"
import {handleGlobalrouter, joinController, loginController, logoutController} from "../controllers/userControllers"

const globalRouter = express.Router();


globalRouter.get("/", handleGlobalrouter);
globalRouter.get("/join", joinController);
globalRouter.get("/login", loginController);
globalRouter.get("/logout", logoutController);
export default globalRouter;