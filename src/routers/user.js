import express from "express";
import { handleUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", handleUser);

export default userRouter;
