const Schema = require("mongoose").Schema;

module.exports = new Schema({
  title: { type: String, required: true },
  artistId: Schema.Types.ObjectId,
  date: Date,
  description: String,
  isAuctionItem: Boolean,
  images: [String]
});
