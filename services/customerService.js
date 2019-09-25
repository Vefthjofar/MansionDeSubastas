const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

const customerService = () => {
    const getAllCustomers = async (cb, errorCb) => {
        return await globalTryCatch(async () => {
            const customers = await dbProvider.Customer.find({});
            return customers;
          });
    };

    const getCustomerById = async (id, cb, errorCb) => {
        return await globalTryCatch(async () => {
            const customer = await dbProvider.Customer.findById(id);
            return customer;
          });
    };

    const getCustomerAuctionBids = (customerId, cb, errorCb) => {
        // Your implementation goes here
    };

	const createCustomer = (customer, cb, errorCb) => {
        // Your implementation goes here
    };

    return {
        getAllCustomers,
        getCustomerById,
        getCustomerAuctionBids,
		createCustomer
    };
};

module.exports = customerService();
