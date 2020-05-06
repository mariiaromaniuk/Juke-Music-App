const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')


Artist.hasMany(Album);
Artist.hasMany(Song);

Album.belongsTo(Artist);
Album.hasMany(Song);

Song.belongsTo(Album);
Song.belongsTo(Artist);


module.exports = {
  db,
  Album,
  Artist,
  Song
}
