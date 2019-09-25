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
  //Auction bids must be higher than the minimum
  //price and must also be higher than the current highest bid. If the auction bid price is
  //lower than the minimum price or current highest bid, the web service should return a
  //status code 412 (Precondition failed).

  // gæti komið error ef hann reynir að ná í winningbid þar sem það er ekkert bid**.
  const createAuctionBid = async (auctionBid, cb, errorCb) => {
    const winningBid = await dbProvider.AuctionBid.find({
      auctionId: auctionBid.auctionId
    })
      .sort("-price")
      .limit(1);
    const auction = await dbProvider.Auction.findById(auctionBid.auctionId);

    if (
      auctionBid.price > auction.minimumPrice &&
      auctionBid.price > winningBid[0].price //**
    ) {
      const resp = dbProvider.AuctionBid.create(auctionBid, function(
        err,
        result
      ) {
        if (err) {
          errorCb(err);
        } else {
          cb(result);
        }
      });
    } else {
      console.log("not good enough");
    }
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
    createAuctionBid,
    getAuctionBidsWithinAuction,
    placeNewBid
  };
};

module.exports = auctionService();
