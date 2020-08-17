const mongoose = require("mongoose");

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/blogDB";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Mongo connected mon"))
  .catch((e) =>
    console.error("ERRRRROOOORRRR WITH MONGGGGOOOO!!!!", e.message)
  );

module.exports = mongoose.connection;
