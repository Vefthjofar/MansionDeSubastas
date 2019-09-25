const Schema = require("mongoose").Schema;

module.exports = new Schema({
  auctionId: { type: Number, required: true },
  customerId: { type: Number, required: true },
  price: Number
});
