import express from "express";
import {
  loginController,
  logoutController,
} from "../controllers/userControllers";
import { home, search } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", home);

globalRouter.get("/login", loginController);
globalRouter.get("/logout", logoutController);
globalRouter.get("/search", search);

export default globalRouter;
