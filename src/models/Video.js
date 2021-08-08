import mongoose from "mongoose";
//아래에서 비디오 shape 을 정해주었다.
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 15 },
  description: { type: String, required: true, trim: true, maxLength: 30 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 0 },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
