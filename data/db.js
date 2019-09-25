const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/artist');
const auctionSchema = require('../schemas/auction');
const auctionBidSchema = require('../schemas/auctionBid');
const customerSchema = require('../schemas/customer');

const connection = mongoose.createConnection('mongodb+srv://Vefthjofar:MDSubastas@mansiondesubastasdb-jz5fd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, 
(err,client) => {
    if(err) {throw new Error(err);}

    console.log('Succsessfully connected to the Database');
});

module.exports = {
    Art: connection.model('Art', artSchema),
    Artist: connection.model('Artist', artistSchema),
    Auction: connection.model('Auction', auctionSchema),
    AuctionBid: connection.model('AuctionBid', auctionBidSchema),
    Customer: connection.model('Customer', customerSchema)
};
