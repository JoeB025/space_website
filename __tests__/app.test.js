const request = require('supertest');
const app = require('../db/app.js');
const db = require('../db/connection.js');
const seed = require('../db/seeds/seed.js');
const testData = require('../db/data/test-data/index.js')
const endpoints = require('../endpoints.json')

afterAll(() => db.end());

beforeEach(() => seed(testData));


describe('app', () => {
  describe('/api/topics', () => {
    test('GET /topics should return a list of all topics and a status code 200', () => {
      return request(app)
      .get('/api/topics')
      .expect(200)
      .then((res) => {
        expect(res.body.topics.length > 3).toBe(true)
      })
    })
  })
})

