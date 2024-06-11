require('dotenv/config');
const home = require('./utils/home.js');
const anime = require('./utils/anime.js');
const episodes = require('./utils/episodes.js');
const episode = require('./utils/episode.js');
const search = require('./utils/search.js');
const ongoingAnime = require('./utils/ongoingAnime.js');
const completeAnime = require('./utils/completeAnime.js');
const batch = require('./utils/batch.js');
const genreLists = require('./utils/genreLists.js');
const animeByGenre = require('./utils/animeByGenre.js');

module.exports = {
  home,
  anime,
  episodes,
  episode,
  search,
  ongoingAnime,
  completeAnime,
  batch,
  genreLists,
  animeByGenre
};

