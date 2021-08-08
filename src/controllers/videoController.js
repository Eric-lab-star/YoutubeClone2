import "../models/Video";
import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};

export const handleVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  } else {
    return res.render("video", { pageTitle: video.title, video });
  }
};

export const editVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
};

export const postEditedVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`)),
  });

  return res.redirect(`/video/${id}`);
};

export const getUploadVideo = (req, res) => {
  return res.render("uploadVideo", { pageTitle: "upload" });
};

export const postUploadVideo = async (req, res) => {
  const { title, hashtags, description } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`)),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("uploadVideo", {
      pageTitle: "upload",
      errorMessage: error._message,
    });
  }
};
export const deleteVideo = (req, res) => res.render("deleteVideo");
