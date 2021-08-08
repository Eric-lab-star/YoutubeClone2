import express from "express";
import {
  joinController,
  loginController,
  logoutController,
} from "../controllers/userControllers";
import { home } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", joinController);
globalRouter.get("/login", loginController);
globalRouter.get("/logout", logoutController);

export default globalRouter;
