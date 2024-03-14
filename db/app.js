const express = require('express')
const app = express()
const { getTopics } = require('../controllers/topics.controller')
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/api/topics', getTopics); // gets the topics data



module.exports = app 