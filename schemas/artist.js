const Schema = require("mongoose").Schema;

module.exports = new Schema({
  name: { type: String, required: true },
  nickname: String,
  Address: String,
  MemberSince: Date
});
