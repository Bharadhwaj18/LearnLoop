const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  url: String,
  heading: String,
  songName: { type: String, default: "No Song Chosen" },
  likes: { type: String, default: "0" },
  messages: { type: String, default: "0" },
  description: String,
  shares: { type: String, default: "0" },
});

// Collection inside the database

module.exports = mongoose.model("tiktokVideos", tiktokSchema);
