const fakeUser = {
    name: "Eric",
    login: true,
};

const videos = [];

export const handleProfile = (req, res) => {
    return  res.send("user profile");
};
  
export const handleUser = (req, res) => res.render("user")
  
export const handleGlobalrouter = (req, res) => res.render("home", {title: "Home", fakeUser, videos});

export const  joinController = (req, res) => {
    return   res.send("join");
};

export const  loginController = (req, res) => {
    return   res.send("login");
};

export const  logoutController = (req, res) => {
    return   res.send("logout");
};

export const  editProfile = (req, res) => {
    return   res.send("edit your profile");
};