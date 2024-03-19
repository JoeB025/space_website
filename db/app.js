const express = require('express')
const app = express()
const { getTopics } = require('../controllers/topics.controller')
const { getAllData } = require('../controllers/api.controller')
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/api/topics', getTopics); // gets the topics data

app.get('/api', getAllData); // gets all the data 


app.all('*', (req, res) => {
  res.status(404).send({Status: 404, msg : 'endpoint not found'})

}) // rejects all promises where an endpoint is not found


module.exports = app 