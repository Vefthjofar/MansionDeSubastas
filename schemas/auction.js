const Schema = require("mongoose").Schema;

module.exports = new Schema({
  artId: { type: Number, required: true },
  minimumPrice: { type: Number, required: true },
  endDate: Date,
  auctionWinner: String
});
