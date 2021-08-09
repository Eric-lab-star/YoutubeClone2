export const handleUser = (req, res) =>
  res.render("user", { pageTitle: "User" });

export const loginController = (req, res) =>
  res.render("login", { pageTitle: "login" });

export const logoutController = (req, res) =>
  res.render("logout", { pageTitle: "logout" });
