const router = require('./routers/landing');


const express = require('express');
const app = express();

function firstMiddleware(req, res, next) {
  console.log('First middleware');
  next();
}

function secondMiddleware(req, res, next) {
  console.log('Second middleware');
  next();
}

app.get('/sequence', [firstMiddleware, secondMiddleware], (req, res) => {
  res.send('Middleware sequence completed');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
