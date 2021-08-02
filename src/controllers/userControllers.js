const fakeUser = {
  name: "Eric",
  login: false,
};

const videos = [
  {
    title: "video 1",
    rating: 5,
    comments: 2,
    view: 12,
  },
  {
    title: "video 2",
    rating: 5,
    comments: 2,
    view: 12,
  },
  {
    title: "video 3",
    rating: 5,
    comments: 2,
    view: 12,
  },

  {
    title: "video 4",
    rating: 5,
    comments: 2,
    view: 12,
  },
];

export const handleProfile = (req, res) => {
  return res.send("user profile");
};

export const handleUser = (req, res) => res.render("user");

export const handleGlobalrouter = (req, res) =>
  res.render("home", { title: "Home", fakeUser, videos });

export const joinController = (req, res) => {
  return res.send("join");
};

export const loginController = (req, res) => {
  return res.send("login");
};

export const logoutController = (req, res) => {
  return res.send("logout");
};

export const editProfile = (req, res) => {
  return res.send("edit your profile");
};
