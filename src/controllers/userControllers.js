
export const handleProfile = (req, res) => {
    return  res.send("user profile");
};
  
export const handleUser = (req, res) => {
    console.log(req.params)
   return   res.send("user");
};
  
export const handleGlobalrouter = (req, res) => {
    return   res.send("home");
};

export const  joinController = (req, res) => {
    return   res.send("join");
};

export const  loginController = (req, res) => {
    return   res.send("login");
};

export const  editProfile = (req, res) => {
    return   res.send("edit your profile");
};