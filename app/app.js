const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const logger = require('./middleware/logger');
app.use(logger);


// Dashboard
// app.use('/dashboard', express.static(path.join(__dirname, 'public', 'dashboard')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/asd', (req, res) => {
  res.send('Hello World!');
});
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });