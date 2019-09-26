const Schema = require("mongoose").Schema;

module.exports = new Schema({
  artId: { type: Schema.Types.ObjectId, required: true },
  auctionWinner: { type: Schema.Types.ObjectId},
  minimumPrice: { type: Number },
  endDate: {type: Date, required: true},
});
