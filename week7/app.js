const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const appConstructor = require("./routes");

app.use(bodyParser.json());
appConstructor(app);
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`We've now got a server!`);
  console.log(`Your routes will be running on ${PORT}`);
});
