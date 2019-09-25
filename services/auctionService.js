const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

const auctionService = () => {
    const getAllAuctions = async (cb, errorCb) => {
        return await globalTryCatch(async () => {
            const auctions = await dbProvider.Auction.find({});
            return auctions;
          });
    };

    const getAuctionById = async (id, cb, errorCb) => {
        return await globalTryCatch(async () => {
            const auction = await dbProvider.Auction.findById(id);
            return auction;
          });
    };

    const getAuctionWinner = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };

	const createAuction = (auction, cb, errorCb) => {
        // Your implementation goes here
    };

	const getAuctionBidsWithinAuction = (auctionId, cb, errorCb) => {
        // Your implementation goes here
    };

	const placeNewBid = (auctionId, customerId, price, cb, errorCb) => {
		// Your implementation goes here
	}

    return {
        getAllAuctions,
        getAuctionById,
        getAuctionWinner,
		createAuction,
		getAuctionBidsWithinAuction,
		placeNewBid
    };
};

module.exports = auctionService();
