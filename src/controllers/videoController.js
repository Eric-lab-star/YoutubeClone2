const videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 1,
  },
  {
    title: "Scond Video",
    rating: 4,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 3,
  },
  {
    title: "Fourth Video",
    rating: 1,
    rating: 3,
    comments: 2,
    createdAt: "2 min ago",
    id: 4,
  },
];
export const handleGlobalrouter = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const handleVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("video", { pageTitle: video.title });
};

export const editVideo = (req, res) => res.render("editVideo");

export const uploadVideo = (req, res) => res.render("uploadVideo");

export const deleteVideo = (req, res) => res.render("deleteVideo");
