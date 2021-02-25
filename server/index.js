const express = require('express');
const bodyParser = require('body-parser');
const client = require('../database/pgConnect.js');
const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/drinks', function (req, res) {
  client.query('SELECT * FROM drinks', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

// app.get('/drinks/:index', (req, res) => {
//   const index = { index: Number(req.params.index) };
//   Drinks.selectDrink(index, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });

// app.post('/drinks', (req, res) => {
//   const data = req.body;
//   Users.registerUser(data, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   })
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
