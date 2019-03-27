'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _pg = _interopRequireDefault(require("pg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());

var Pool = require('pg').Pool;

var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
app.get('/', function (req, res) {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!');
});
app.get('/api/device', function (req, res) {
  pool.query('SELECT * FROM device', function (error, results) {
    if (error) {
      throw error;
    }

    res.status(200).json(res.rows);
  });
});
app.listen(process.env.PORT, function () {
  console.log("Server is running");
});