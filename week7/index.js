const express = require("express");
const app = express();
const appConstructor = require("./routes");

appConstructor(app);
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`We've now got a server!`);
  console.log(`Your routes will be running on ${PORT}`);
});
