const express = require("express");
const cors = require("cors");
const { routerEmployee } = require("./src/routes/routesEmployee");
const { routerIndex } = require("./src/routes/routesIndex");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routerIndex);
app.use("/api/", routerEmployee);
app.use("*", (req, res, next) => {
  res.status(404).json({ msg: "Page not found Daaaa" });
});

app.listen(port, () => {
  console.log(`Listen in port: ${port}`);
});
