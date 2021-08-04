import express from "express";
import {
  handleVideo,
  editVideo,
  uploadVideo,
  deleteVideo,
  postEditedVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", handleVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.post("/:id(\\d+)/edit", postEditedVideo);
videoRouter.get("/:id(\\d+)/edit/delete", deleteVideo);
videoRouter.get("/:id(\\d+)/edit/upload", uploadVideo);
export default videoRouter;
