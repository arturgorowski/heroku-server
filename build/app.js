'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import "@babel/polyfill";
//import Client from 'pg';
var devices = [{
  id_device: 1,
  name: 'light'
}, {
  id_device: 2,
  name: 'blinds'
}, {
  id_device: 3,
  name: 'air_conditioning'
}, {
  id_device: 4,
  name: 'heating'
}, {
  id_device: 5,
  name: 'sound'
}, {
  id_device: 6,
  name: 'alarm'
}, {
  id_device: 7,
  name: 'cameras'
}, {
  id_device: 8,
  name: 'front_door'
}, {
  id_device: 9,
  name: 'garage_door'
}, {
  id_device: 10,
  name: 'gate'
}, {
  id_device: 11,
  name: 'weather_station'
}, {
  id_device: 12,
  name: 'fridge'
}, {
  id_device: 13,
  name: 'TV'
}, {
  id_device: 14,
  name: 'washer'
}, {
  id_device: 15,
  name: 'oven'
}];
/*
const device = {
/**
   * Get All Devices
   * @param {object} req 
   * @param {object} res 
   * @returns {object} devices array
   *
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM devices';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
  }
}*/

var app = (0, _express.default)();
app.use(_bodyParser.default.json());

var Pool = require('pg').Pool;

var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
app.get('/', function (req, res) {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!');
});
app.get('/api/device/:id', function (req, res) {
  pool.query('SELECT * FROM device', function (error, results) {
    if (error) {
      throw error;
    }

    res.json(res.rows);
  });
}); //app.get('/api/devices', device.getAll);

app.listen(process.env.PORT, function () {
  console.log("Server is running");
});