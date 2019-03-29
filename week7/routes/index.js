const educationRoutes = require("./education");
const storyRoutes = require("./story");
const aboutRoutes = require("./about");

const appConstructorMethod = app => {
  app.use("/about", aboutRoutes);
  app.use("/story", storyRoutes);
  app.use("/education", educationRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Page Not found" });
  });
};

module.exports = appConstructorMethod;
