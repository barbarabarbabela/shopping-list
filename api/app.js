const express = require('express');
const app = express();
const port = 3001;
const routes = require('./routes/routes');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

const url = process.env.DB_URL;
mongoose.connect(url)
.then(() => {
  console.log('Connected to database');
  })
.catch(err => {
  console.error('Error:', err);
});

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`Recebida uma requisição para: ${req.url}`);
    next();
  });

app.use('/', routes)


app.listen(port, () => {
    console.log("server running at port", port)
})

