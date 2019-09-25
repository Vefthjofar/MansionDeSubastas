const dbProvider = require("../data/db");

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

const artistService = () => {
    const getAllArtists = async (cb, errorCb) => {
        return await globalTryCatch(async () => {
            const artists = await dbProvider.Artist.find({});
            return artists;
          });
    };

    const getArtistById = async (id, cb, errorCb) => {
        return await globalTryCatch(async () => {
            const artist = await dbProvider.Artist.findById(id);
            return artist;
          });
    };

    const createArtist = (artist, cb, errorCb) => {
        // Your implementation goes here
    };

    return {
        getAllArtists,
        getArtistById,
        createArtist
    };
};

module.exports = artistService();
