const searchRoutes = require("./search");
const detailsRoutes = require("./details");

const appConstructorMethod = app => {
  app.use("/search", searchRoutes);
  app.use("/details", detailsRoutes);

  app.get('/', (req, res) => {
    res.render('person/index', {title: 'People Finder', keywords: "people find"})
  })

  app.use("*", (req, res) => {
    res.render('404', {title: 'People Finder', errors: "404 Not found", keywords: "people find" });
  });
};
module.exports = appConstructorMethod;