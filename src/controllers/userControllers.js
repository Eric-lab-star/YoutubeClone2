
export const handleProfile = (req, res) => {
    return  res.send("user profile");
};
  
export const handleUser = (req, res) => res.render("user")
  
export const handleGlobalrouter = (req, res) => res.render("home");

export const  joinController = (req, res) => {
    return   res.send("join");
};

export const  loginController = (req, res) => {
    return   res.send("login");
};

export const  editProfile = (req, res) => {
    return   res.send("edit your profile");
};