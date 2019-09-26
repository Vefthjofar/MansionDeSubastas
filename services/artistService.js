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

const artistService = () => {
  const getAllArtists = async (cb, errorCb) => {
    return await globalTryCatch(async () => {
      const artists = await dbProvider.Artist.find({});
      if (artists.length == 0) {
        return {
          status: 404,
          body: ""
        }
      }
      return {
        status: 200,
        body: artists
      };
    });
  };

  const getArtistById = async (id, cb, errorCb) => {
    return await globalTryCatch(async () => {
      const artist = await dbProvider.Artist.findById(id);
      if (artist == null) {
        return {
          status: 404,
          body: "Artist with given id not found"
        }
      }
      return {
        status: 200,
        body: artist
      };
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
