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
    test(`GET / request should return error status code 404 with a message 'endpoint not found'`, () => {
      return request(app)
        .get("/api/noTopics")
        .expect(404)
        .then((res) => {
          expect(res.body.msg).toBe("endpoint not found");
        });
    });
  });
});

describe("app", () => {
  describe("/api/articles", () => {
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
  })
})


