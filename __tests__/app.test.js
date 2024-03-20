const request = require("supertest");
const app = require("../db/app.js");
const db = require("../db/connection.js");
const seed = require("../db/seeds/seed.js");
const testData = require("../db/data/test-data/index.js");
const endpoints = require("../endpoints.json");

afterAll(() => db.end());
beforeEach(() => seed(testData));

describe("app", () => {
  test("GET/ api should return a description of all other endpoints", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then((res) => {
        expect(typeof res).toBe("object");
        expect(res.body.endpoints).toEqual(endpoints);
        for (const key in res.body.endpoints) {
          expect(typeof res.body.endpoints[key].description).toBe("string");
          if (key === "GET /api") {
            expect(res.body.endpoints[key].description).toBe(
              "serves up a json representation of all the available endpoints of the api"
            );
          }
          if (key !== "GET /api") {
            expect(Array.isArray(res.body.endpoints[key].queries)).toBe(true);
            expect(typeof res.body.endpoints[key].exampleResponse).toBe(
              "object"
            );
          }
        }
      });
  });
});

describe("app", () => {
  describe("/api/topics", () => {
    test("GET /topics should return a list of all topics and a status code 200", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((res) => {
          expect(res.body.topics.length).toBe(6);
          res.body.topics.forEach((topic) => {
            const objectKeys = Object.keys(topic);
            expect(objectKeys.includes("slug")).toBe(true);
            expect(objectKeys.includes("description")).toBe(true);
            expect(typeof topic.slug).toBe("string");
            expect(typeof topic.description).toBe("string");
          });
        });
    });
    test(`GET / request should return error status code 404 with a message 'endpoint not found' for invalid endpoint requests.`, () => {
      return request(app)
        .get("/api/noTopics")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
  });
});

// api/planetNames

describe("app", () => {
  describe("/api/planet_names", () => {
    test("GET /planet_names should return an array of objects with a status code of 200", () => {
      return request(app)
        .get("/api/planet_names")
        .expect(200)
        .then((res) => {
          expect(res.body.planetNames.length).toBe(8);
          res.body.planetNames.forEach((planetName) => {
            expect(typeof planetName).toBe("object");
            expect(typeof planetName.name).toBe("string");
            expect(typeof planetName.order_from_sun).toBe("number");
            if (planetName.order_from_sun === 1)
              expect(planetName.name).toBe("Mercury");
            if (planetName.order_from_sun === 2)
              expect(planetName.name).toBe("Venus");
            if (planetName.order_from_sun === 3)
              expect(planetName.name).toBe("Earth");
            if (planetName.order_from_sun === 4)
              expect(planetName.name).toBe("Mars");
            if (planetName.order_from_sun === 5)
              expect(planetName.name).toBe("Jupiter");
            if (planetName.order_from_sun === 6)
              expect(planetName.name).toBe("Saturn");
            if (planetName.order_from_sun === 7)
              expect(planetName.name).toBe("Uranus");
            if (planetName.order_from_sun === 8)
              expect(planetName.name).toBe("Neptune");
          });
        });
    });
    test(`GET / request should return error status code 404 with a message 'endpoint not found' for invalid endpoint requests.`, () => {
      return request(app)
        .get("/api/planet_nameLess")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
  });
});

// api/stars

describe("app", () => {
  describe("/api/stars", () => {
    test("GET /stars should return an array of objects for each star in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/stars")
        .expect(200)
        .then((res) => {
          res.body.stars.forEach((star) => {
            expect(typeof star.stars_id).toBe("number");
            expect(typeof star.name).toBe("string");
            expect(typeof star.type).toBe("string");
            expect(typeof star.mass).toBe("string");
            expect(typeof star.radius).toBe("string");
            expect(typeof star.temperature).toBe("string");
            expect(typeof star.luminosity).toBe("string");
            expect(typeof star.age).toBe("string");
            expect(typeof star.description).toBe("string");
            expect(typeof star.size_comparison).toBe("string");
            expect(typeof star.img_url).toBe("string");
          });
        });
    });
    test(`GET / request should return error status code 404 with a message 'endpoint not found' for invalid endpoint requests.`, () => {
      return request(app)
        .get("/api/starss")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
  });
});

// api/astronomy_info

describe("app", () => {
  describe("/api/astronomy_info", () => {
    test("GET /astronomy_info should return an array of objects for each topic in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/astronomy_info")
        .expect(200)
        .then((res) => {
          res.body.astronomy.forEach((item) => {
            expect(typeof item.astronomy_info_id).toBe("number");
            expect(typeof item.topic).toBe("string");
            expect(typeof item.description).toBe("string");
            expect(typeof item.img_url).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/black_holes", () => {
    test("GET /black_holes should return an array of objects for each black hole in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/black_holes")
        .expect(200)
        .then((res) => {
          res.body.blackHoles.forEach((item) => {
            expect(typeof item.black_hole_id).toBe("number");
            expect(typeof item.name).toBe("string");
            expect(typeof item.type).toBe("string");
            expect(typeof item.mass).toBe("string");
            expect(typeof item.distance).toBe("string");
            expect(typeof item.description).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/galaxies", () => {
    test("GET /galaxies should return an array of objects for each galaxy in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/galaxies")
        .expect(200)
        .then((res) => {
          res.body.galaxy.forEach((galaxy) => {
            expect(typeof galaxy.galaxy_id).toBe("number");
            expect(typeof galaxy.galaxy_name).toBe("string");
            expect(typeof galaxy.type).toBe("string");
            expect(typeof galaxy.size).toBe("string");
            expect(typeof galaxy.distance_from_earth).toBe("string");
            expect(typeof galaxy.number_of_stars).toBe("string");
            expect(typeof galaxy.visible_galactic_center).toBe("boolean");
            expect(typeof galaxy.constellation).toBe("string");
            expect(typeof galaxy.img_url).toBe("string");
            expect(typeof galaxy.general_info).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/planets", () => {
    test("GET /planets should return an array of objects for each planets in the solar System and a status code of 200.", () => {
      return request(app)
        .get("/api/planets")
        .expect(200)
        .then((res) => {
          expect(res.body.planet.length).toBe(8);
          res.body.planet.forEach((planet) => {
            expect(typeof planet.planets_id).toBe("number");
            expect(typeof planet.name).toBe("string");
            expect(typeof planet.average_temp).toBe("number");
            expect(typeof planet.highest_recorded_temp).toBe("string");
            expect(typeof planet.lowest_recorded_temp).toBe("string");
            expect(typeof planet.planet_type).toBe("string");
            expect(typeof planet.density).toBe("number");
            expect(typeof planet.dimension).toBe("string");
            expect(typeof planet.distance_from_sun).toBe("number");
            expect(typeof planet.gravity).toBe("number");
            expect(typeof planet.mass_value).toBe("number");
            expect(typeof planet.number_of_moons).toBe("number");
            expect(typeof planet.orbital_period_years).toBe("number");
            expect(typeof planet.mass_exponent).toBe("number");
            expect(typeof planet.mean_radius).toBe("number");
            expect(typeof planet.img_url).toBe("string");
            expect(typeof planet.planet_description).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/black_holes", () => {
    test("GET /black_holes should return an array of objects for each black hole in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/black_holes")
        .expect(200)
        .then((res) => {
          res.body.blackHoles.forEach((item) => {
            expect(typeof item.black_hole_id).toBe("number");
            expect(typeof item.name).toBe("string");
            expect(typeof item.type).toBe("string");
            expect(typeof item.mass).toBe("string");
            expect(typeof item.distance).toBe("string");
            expect(typeof item.description).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/galaxies", () => {
    test("GET /galaxies should return an array of objects for each galaxy in the database and a status code of 200.", () => {
      return request(app)
        .get("/api/galaxies")
        .expect(200)
        .then((res) => {
          expect(res.body.galaxy.length > 0).toBe(true);
          res.body.galaxy.forEach((galaxy) => {
            expect(typeof galaxy.galaxy_id).toBe("number");
            expect(typeof galaxy.galaxy_name).toBe("string");
            expect(typeof galaxy.type).toBe("string");
            expect(typeof galaxy.size).toBe("string");
            expect(typeof galaxy.distance_from_earth).toBe("string");
            expect(typeof galaxy.number_of_stars).toBe("string");
            expect(typeof galaxy.visible_galactic_center).toBe("boolean");
            expect(typeof galaxy.constellation).toBe("string");
            expect(typeof galaxy.img_url).toBe("string");
            expect(typeof galaxy.general_info).toBe("string");
          });
        });
    });
  });
});
describe("app", () => {
  describe("/api/moons", () => {
    test("GET /moons should return an array of objects for each planets in the solar System and a status code of 200.", () => {
      return request(app)
        .get("/api/moons")
        .expect(200)
        .then((res) => {
          expect(res.body.moon.length > 0).toBe(true);
          res.body.moon.forEach((moon) => {
            expect(typeof moon.moons_id).toBe("number");
            expect(typeof moon.orbits).toBe("string");
            expect(typeof moon.moon_name).toBe("string");
            expect(typeof moon.distance_from_planet).toBe("string");
            expect(typeof moon.gravity).toBe("string");
            expect(typeof moon.mass_value).toBe("string");
            expect(typeof moon.mass_exponent).toBe("string");
            expect(typeof moon.mean_radius).toBe("string");
          });
        });
    });
  });
});

describe("app", () => {
  describe("/api/articles:article_id", () => {
    test("GET /articles should return the single requested article object and status code 200", () => {
      return request(app)
        .get("/api/articles/1")
        .expect(200)
        .then((res) => {
          expect(res.body.article.topic).toBe("Dwarf Planet");
          expect(res.body.article.title).toBe(
            "Weird white dwarf star has a metal scar after eating a planet"
          );
          expect(res.body.article.body.slice(0, 96)).toBe(
            `Astronomers have spotted a white dwarf star with a patch of metal near one of its magnetic poles`
          );
          expect(typeof res.body.article.votes).toBe("number");
          expect(res.body.article.article_img_url).toBe(
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_22/1254611/151007-pluto-mn-1525.jpg"
          );
          expect(res.body.article.created_at).toBe("2020-10-10T22:02:00.000Z");
        });
    });
    test("GET /articles should return the single requested article object and status code 200", () => {
      return request(app)
        .get("/api/articles/6")
        .expect(200)
        .then((res) => {
          expect(res.body.article.topic).toBe("Supernova");
          expect(res.body.article.title).toBe(
            "Exploring the Explosive Deaths of Stars"
          );
          expect(res.body.article.body.slice(0, 94)).toBe(
            `Supernova, the explosive deaths of stars, are among the most energetic events in the universe.`
          );
          expect(typeof res.body.article.votes).toBe("number");
          expect(res.body.article.article_img_url).toBe(
            "https://c02.purpledshub.com/uploads/sites/48/2023/03/GettyImages-1329886746-Converted-9b412b9.jpg"
          );
          expect(res.body.article.created_at).toBe("2020-10-10T22:03:10.000Z");
        });
    });
    test(`GET /articles should return a status code 404 and the message 'endpoint not found'`, () => {
      return request(app)
        .get("/api/no-articles/1")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
    test(`GET /articles should return a status code 404 and the message 'article does not exist'`, () => {
      return request(app)
        .get("/api/articles/99999")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("article does not exist");
        });
    });
  });
});

describe("app", () => {
  describe("/api/articles", () => {
    test(`GET /articles all articles, removing the body key and adding in a count of 'number of comments'. Status code 200`, () => {
      return request(app)
        .get("/api/articles")
        .expect(200)
        .then((res) => {
          expect(res.body.article.length > 0).toBe(true);
          res.body.article.forEach((article) => {
            expect(typeof article).toBe("object");
            expect(typeof article.author).toBe("string");
            expect(typeof article.title).toBe("string");
            expect(typeof article.article_id).toBe("number");
            expect(typeof article.created_at).toBe("string");
            expect(typeof article.votes).toBe("number");
            expect(typeof article.article_img_url).toBe("string");
            expect(typeof article.number_of_comments).toBe("string");
            expect(typeof Number(article.number_of_comments)).toBe("number");
            expect(typeof article.body).toBe("undefined");
          });
        });
    });
    test("GET /articles in order by date created. Return a status code of 200", () => {
      return request(app)
        .get("/api/articles")
        .expect(200)
        .then((res) => {
          expect(res.body.article).toBeSortedBy("created_at", {
            descending: true,
          });
          expect(res.body.article).not.toBeSortedBy("created_at", {
            ascending: true,
          });
        });
    });
    test(`GET /articles should return error code 404 and the message 'endpoint not found' for invalid endpoints.`, () => {
      return request(app)
        .get("/api/articleLess")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
  });
});

// api/article/:article_id/comments

describe("app", () => {
  describe("/api/articles/:article_id/comments", () => {
    test("Get /Check server responds with an array of comments and a status code of 200. Ensure each property is present.", () => {
      return request(app)
        .get("/api/articles/1/comments")
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body.comments)).toBe(true);
          expect(res.body.comments.length > 0).toBe(true);
          res.body.comments.forEach((comment) => {
            expect(comment.article_id).toBe(1);
            expect(typeof comment.comment_id).toBe("number");
            expect(typeof comment.body).toBe("string");
            expect(typeof comment.created_at).toBe("string");
            expect(typeof comment.author).toBe("string");
            expect(typeof comment.votes).toBe("number");
          });
        });
    });
    test("GET / Check server responds with an array of comments for the requested article", () => {
      return request(app)
        .get("/api/articles/3/comments")
        .expect(200)
        .then((res) => {
          expect(Array.isArray(res.body.comments)).toBe(true);
          expect(res.body.comments.length > 0).toBe(true);
          res.body.comments.forEach((comment) => {
            expect(comment.article_id).toBe(3);
          });
        });
    });
    test("GET / Check comments are ordered with the most recent first. Status code 200", () => {
      return request(app)
        .get("/api/articles/1/comments")
        .expect(200)
        .then((res) => {
          expect(res.body.comments).toBeSortedBy("created_at", {
            descending: true,
          });
          expect(res.body.comments).not.toBeSortedBy("invalid_key", {
            descending: true,
          });
          expect(res.body.comments).not.toBeSortedBy("created_at", {
            ascending: true,
          });
        });
    });
    test("GET / Check comments are ordered with the most recent first. Status code 200", () => {
      return request(app)
        .get("/api/articles/2/comments")
        .expect(200)
        .then((res) => {
          expect(res.body.comments).toBeSortedBy("created_at", {
            descending: true,
          });
          expect(res.body.comments).not.toBeSortedBy("invalid_key", {
            descending: true,
          });
          expect(res.body.comments).not.toBeSortedBy("created_at", {
            ascending: true,
          });
        });
    });
    test("GET / Check the server responds with a status code of 404 when given an article_id that does not yet exist.", () => {
      return request(app)
        .get("/api/articles/999999999/comments")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("article does not exist");
        });
    });
    test("GET / Check the server responds with a status code of 400 when for invalid requests.", () => {
      return request(app)
        .get("/api/articles/three/comments")
        .expect(400)
        .then((res) => {
          expect(res.body.msg).toBe("Bad request");
        });
    });
  });
});

// post / api/articles/:article_id/comments

describe("app", () => {
  describe("POST /api/articles/:article_id/comments", () => {
    test("Check data is posted with correct object keys and data", () => {
      return request(app)
        .post("/api/articles/1/comments")
        .send({
          body: "This is a test comment",
          username: "KingKakarot",
        })
        .expect(201)
        .then((res) => {
          expect(res.body.comment[0]).toMatchObject({
            comment_id: 18,
            body: "This is a test comment",
            votes: 0,
            author: "KingKakarot",
            article_id: 1,
          });
          expect(typeof res.body.comment[0].body).toBe("string");
          expect(typeof res.body.comment[0].author).toBe("string");
          expect(res.body.comment[0].hasOwnProperty("created_at")).toBe(true);
        });
    });
    test("POST:404 responds with an appropriate status and error message when provided with an invalid username (no username exists)", () => {
      return request(app)
        .post("/api/articles/6/comments")
        .send({
          body: "this is the body",
          username: "QueenKakarot",
        })
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("Username not found");
        });
    });
    test("POST:404 responds with an appropriate status and error message when making a post to an article that does not yet exist (article has not yet been created)", () => {
      return request(app)
        .post("/api/articles/7/comments")
        .send({
          body: "this is the body",
          username: "KingKakarot",
        })
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("article does not exist");
        });
    });
    test("POST:404 responds with an appropriate status and error message when an invalid endpoint", () => {
      return request(app)
        .post("/api/bananas/1/comments")
        .send({
          body: "this is the body",
          username: "KingKakarot",
        })
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
    test("POST:404 responds with an appropriate status and error message when provided with an article that is yet to be created", () => {
      return request(app)
        .post("/api/articles/99999999/comments")
        .send({
          body: "this is the body",
          username: "KingKakarot",
        })
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("article does not exist");
        });
    });
    test("POST:400 responds with an appropriate status and error message when not provided with a username", () => {
      return request(app)
        .post("/api/articles/1/comments")
        .send({
          body: "this is the body",
        })
        .expect(400)
        .then((res) => {
          expect(res.body.msg).toBe("Bad request");
        });
    });
  });
});









// patch votes

describe("app", () => {
  describe("/api/articles/:article_id", () => {
    test("Check status code returns 200 for valid patch requests", () => {
      return request(app)
        .patch("/api/articles/1")
        .send({ inc_votes: +1 })
        .expect(200);
    });
  });
});
