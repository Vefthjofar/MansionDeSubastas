const Schema = require("mongoose").Schema;

module.exports = new Schema({
  title: { type: String, required: true },
  artistId: Number,
  date: Date,
  description: String,
  isAuctionItem: Boolean,
  images: [String]
});
