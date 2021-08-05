const videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 1,
    view: 2,
  },
  {
    title: "Scond Video",
    rating: 4,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 2,
    view: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 3,
    view: 2,
  },
  {
    title: "Fourth Video",
    rating: 1,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 4,
    view: 1,
  },
];
export const handleGlobalrouter = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const handleVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("video", { pageTitle: video.title, video });
};

export const editVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("editVideo", { pageTitle: video.title, video });
};
export const postEditedVideo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  console.log(req.body);
  return res.redirect(`/video/${id}`);
};

export const uploadVideo = (req, res) => res.render("uploadVideo");

export const deleteVideo = (req, res) => res.render("deleteVideo");
