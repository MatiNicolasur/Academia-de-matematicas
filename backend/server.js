const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const applicantsRoute = require('./routes/applicants');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/academia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/applicants', applicantsRoute);

app.listen(3000, () => {
  console.log('Servidor backend escuchando en puerto 3000');
});