const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

const artService = () => {
  const getAllArts = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const arts = await dbProvider.Art.find({});
      return arts;
    });
  };

  const getArtById = async (id, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const art = await dbProvider.Art.findById(id);
      return art;
    });
  };

  const createArt = (art, cb, errorCb) => {
    // Your implementation goes here
  };

  return {
    getAllArts,
    getArtById,
    createArt
  };
};

module.exports = artService();
