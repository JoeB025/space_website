const express = require("express");
const app = express();
const { getTopics } = require("../controllers/topics.controller");
const { getAllData } = require("../controllers/api.controller");
const { getArticles, getOrderedArticles, getArticleComments, insertComments, patchVotes } = require("../controllers/articles.controller");
const { getPlanetNames } = require("../controllers/planetNames.controller");
const { getStars } = require("../controllers/stars.controller");
const { getAstronomyInfo } = require("../controllers/astronomyInfo.controller");
const { getBlackHoles } = require("../controllers/blackHoles.controller");
const { getGalaxies } = require("../controllers/galaxies.controller");
const { getPlanets, getPlanetsById } = require("../controllers/planets.controller");
const { getMoons } = require("../controllers/moons.controller");
const { deleteComments } = require("../controllers/comments.controller");
const { getUsers, getUserByUsername } = require("../controllers/users.controller");
const { getImages } = require("../controllers/images.controller");



const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/topics", getTopics); // gets the topics data

app.get("/api", getAllData); // gets all the data

app.get("/api/articles/:article_id", getArticles); // gets the articles by id

app.get('/api/articles', getOrderedArticles) // gets articles in an ordered format 

app.get('/api/articles/:article_id/comments', getArticleComments); // gets comments by article_id

app.get('/api/planet_names', getPlanetNames); // get the planet names

app.get('/api/stars', getStars) // get the stars

app.get('/api/astronomy_info', getAstronomyInfo) // get astronomy data 

app.get('/api/black_holes', getBlackHoles) // get black hole data

app.get('/api/galaxies', getGalaxies) // get galaxy data

app.get('/api/planets', getPlanets) // get planet data

app.get('/api/planets/:planets_id', getPlanetsById) // get planets by id 

app.get('/api/moons', getMoons) // get moon data

app.get('/api/users', getUsers) // get user data

app.get('/api/users/:username', getUserByUsername); // get user by username

app.post('/api/articles/:article_id/comments', insertComments) // insert article comments

app.patch('/api/articles/:article_id', patchVotes) // update the votes on articles 

app.delete('/api/comments/:comment_id', deleteComments) // delete comments on articles

app.get('/api/images', getImages) // get images

app.all("*", (req, res) => {
  res.status(404).send({ Status: 404, msg: "endpoint not found" });
}); // rejects all promises where an endpoint is not found

app.use((err, req, res, next) => {
  // console.log(err)
  // console.log(err.code)
  // console.log(err.detail)

  if (err.code === "23503" && err.detail.includes("article_id")) {
    res.status(404).send({ Status: 404, msg: "article does not exist" });
  } else if (err.code === "23503" && err.detail.includes("user")) {
    res.status(404).send({ Status: 404, msg: "Username not found" });
  } else if (
    err.code === "22P02" ||
    err.code === "23502" ||
    err.code === "42883" ||
    err.code === "42703"
  ) {
    res.status(400).send({ msg: "Bad request" });
  } else if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  }
  next();
});

module.exports = app;
