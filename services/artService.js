const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch (err) {
    return err;
  }
}

const artService = () => {
  const getAllArts = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const resp = await dbProvider.Art.find({});
      return resp;
    });
  };

  const getArtById = async (id, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const resp = await dbProvider.Art.findById(id);
      return resp;
    });
  };

  const createArt = (art, cb, errorCb) => {
    // Your implementation goes here
    const resp = dbProvider.Art.create(art, function (err, result) {
      if (err) { errorCb(err); }
      else { cb(result); }
    });
  };

  return {
    getAllArts,
    getArtById,
    createArt
  };
};

module.exports = artService();
