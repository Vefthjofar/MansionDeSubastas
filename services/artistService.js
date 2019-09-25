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
      const resp = dbProvider.Artist.create(artist, function (err, result) {
        if (err) { errorCb(err); }
        else { cb(result); }
      });
    };

    return {
        getAllArtists,
        getArtistById,
        createArtist
    };
};

module.exports = artistService();
