const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const postRoutes = require("./routes/postRoutes");
const db = require("./db/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/api", postRoutes);

db.on(
  "error",
  console.error.bind(console, "MongoDB is muthafuckin down homie!")
);

app.listen(PORT, () => {
  console.log(`We iz listening on port ${PORT}`);
});
