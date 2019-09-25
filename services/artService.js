const artService = () => {
  const getAllArts = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const arts = await art.find({});
      return ufos;
    });
  };

  const getArtById = (id, cb, errorCb) => {
    // Your implementation goes here
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
