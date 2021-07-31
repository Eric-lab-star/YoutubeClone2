import express from "express"
import { handleVideo, editVideo, uploadVideo, deleteVideo } from "../controllers/videoController";


const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", handleVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/edit/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/edit/upload", uploadVideo);
export default videoRouter;