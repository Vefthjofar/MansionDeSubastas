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

const artService = () => {
  const getAllArts = async () => {
    return await globalTryCatch(async () => {
      const resp = await dbProvider.Art.find({});
      if(resp.length == 0) {
        return {
          status: 404,
          body: "No data in database"
        }
      }
      return {
        status: 200,
        body: resp
      };
    });
  };

  const getArtById = async (id) => {
    return await globalTryCatch(async () => {
      const resp = await dbProvider.Art.findById(id);
      if(resp == null) {
        return {
          status: 404,
          body: "Artwork with requested id not found"
        }
      }
      return {
        status: 200,
        body: resp
      };
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
