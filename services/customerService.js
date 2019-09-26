const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch (err) {
    return {
      status: 500,
      body: err
    };
  }
}

const customerService = () => {
  const getAllCustomers = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const customers = await dbProvider.Customer.find({});
      if (customers.length == 0) {
        return {
          status: 404,
          body: ""
        }
      }
      return {
        status: 200,
        body: customers
      };
    });
  };

  const getCustomerById = async (id, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const customer = await dbProvider.Customer.findById(id);
      if (customer == null) {
        return {
          status: 404,
          body: ""
        }
      }
      return {
        status: 200,
        body: customer
      };
    });
  };

  const getCustomerAuctionBids = async (Id, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const bids = await dbProvider.AuctionBid.find({ customerId: Id });
      if (bids == null) {
        return {
          status: 404,
          body: ""
        }
      }
      return {
        status: 200,
        body: bids
      };
    });
  };

  const createCustomer = (customer, cb, errorCb) => {
    // Your implementation goes here
    const resp = dbProvider.Customer.create(customer, function (err, result) {
      if (err) { errorCb(err); }
      else { cb(result); }
    });
  };

  return {
    getAllCustomers,
    getCustomerById,
    getCustomerAuctionBids,
    createCustomer
  };
};

module.exports = customerService();
