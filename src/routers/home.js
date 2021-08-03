import express from "express";
import {
  joinController,
  loginController,
  logoutController,
} from "../controllers/userControllers";
import { handleGlobalrouter } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", handleGlobalrouter);
globalRouter.get("/join", joinController);
globalRouter.get("/login", loginController);
globalRouter.get("/logout", logoutController);
export default globalRouter;
