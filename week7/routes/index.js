const animalsRoutes = require("./animals");
const postsRoutes = require("./posts");
const likesRoutes = require("./likes");

const appConstructorMethod = app => {
  app.use("/animals", animalsRoutes);
  app.use("/posts", postsRoutes);
  app.use("/likes", likesRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Page Not found" });
  });
};

module.exports = appConstructorMethod;
