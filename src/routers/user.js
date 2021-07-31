import express from "express"
import {handleUser, handleProfile, editProfile} from "../controllers/userControllers"

const userRouter = express.Router();

userRouter.get("/:id(\\d+)/profile/edit", editProfile);
userRouter.get("/:id(\\d+)/profile", handleProfile);
userRouter.get("/:id(\\d+)", handleUser);


export default userRouter;