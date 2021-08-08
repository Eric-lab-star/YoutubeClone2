import express from "express";
import {
  handleVideo,
  editVideo,
  getUploadVideo,
  deleteVideo,
  postEditedVideo,
  postUploadVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", handleVideo);
videoRouter.route("/:id([0-9a-f]{24})").get(editVideo).post(postEditedVideo);
videoRouter.get("/:id([0-9a-f]{24})/edit/delete", deleteVideo);
videoRouter.route("/upload").get(getUploadVideo).post(postUploadVideo);
export default videoRouter;
