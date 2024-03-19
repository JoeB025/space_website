const request = require('supertest');
const app = require('../db/app.js');
const db = require('../db/connection.js');
const seed = require('../db/seeds/seed.js');
const testData = require('../db/data/test-data/index.js')
const endpoints = require('../endpoints.json')

afterAll(() => db.end());
beforeEach(() => seed(testData));



describe('app', () => {
  test('GET/ api should return a description of all other endpoints', () => {
    return request(app)
    .get('/api')
    .expect(200)
    .then((res) => {
      expect(typeof res).toBe('object')
      expect(res.body.endpoints).toEqual(endpoints)
      for (const key in res.body.endpoints) {
        expect(typeof res.body.endpoints[key].description).toBe('string')
        if (key === 'GET /api') {
          expect(res.body.endpoints[key].description).toBe('serves up a json representation of all the available endpoints of the api')
        }
        if (key !== 'GET /api') {
          expect(Array.isArray(res.body.endpoints[key].queries)).toBe(true)
          expect(typeof res.body.endpoints[key].exampleResponse).toBe('object')
        }
      }
    })
  })
})



describe('app', () => {
  describe('/api/topics', () => {
    test('GET /topics should return a list of all topics and a status code 200', () => {
      return request(app)
      .get('/api/topics')
      .expect(200)
      .then((res) => {
        expect(res.body.topics.length).toBe(6);
        res.body.topics.forEach((topic) => {
          const objectKeys = Object.keys(topic)
          expect(objectKeys.includes('slug')).toBe(true)
          expect(objectKeys.includes('description')).toBe(true)
          expect(typeof topic.slug).toBe('string')
          expect(typeof topic.description).toBe('string')
        })  
      })
    })
    test(`GET / request should return error status code 404 with a message 'endpoint not found'`, () => {
    return request(app)
    .get('/api/noTopics')
    .expect(404)
    .then((res) => {
      expect(res.body.msg).toBe('endpoint not found')
    })
    })
  })
})


