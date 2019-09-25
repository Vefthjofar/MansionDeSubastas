const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch (err) {
    return err;
  }
};

const auctionService = () => {
  const getAllAuctions = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const auctions = await dbProvider.Auction.find({});
      return auctions;
    });
  };

  const getAuctionById = async (auctionId, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const auction = await dbProvider.Auction.findById(auctionId);
      return auction;
    });
  };

  const getAuctionWinner = async (auctionId, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const winningBid = await dbProvider.AuctionBid.find({
        auctionId: auctionId
      })
        .sort("-price")
        .limit(1);
      const winner = await dbProvider.Customer.findById(
        winningBid[0].customerId
      );
      return winner;
    });
  };

  const createAuction = (auction, cb, errorCb) => {
    const resp = dbProvider.Auction.create(auction, function(err, result) {
      if (err) {
        errorCb(err);
      } else {
        cb(result);
      }
    });
  };

  const getAuctionBidsWithinAuction = async (auctionId, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const bids = await dbProvider.AuctionBid.find({ auctionId: auctionId });
      return bids;
    });
  };

  const placeNewBid = (auctionId, customerId, price, cb, errorCb) => {
    // Your implementation goes here
  };

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
