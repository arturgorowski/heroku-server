'use strict';

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("@babel/polyfill");

var _pg = _interopRequireDefault(require("pg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var device = {
  /**
     * Get All Devices
     * @param {object} req 
     * @param {object} res 
     * @returns {object} devices array
     */
  getAll: function () {
    var _getAll = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var findAllQuery, _ref, rows, rowCount;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              findAllQuery = 'SELECT * FROM devices';
              _context.prev = 1;
              _context.next = 4;
              return db.query(findAllQuery);

            case 4:
              _ref = _context.sent;
              rows = _ref.rows;
              rowCount = _ref.rowCount;
              return _context.abrupt("return", res.status(200).send({
                rows: rows,
                rowCount: rowCount
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", res.status(400).send(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    function getAll(_x, _x2) {
      return _getAll.apply(this, arguments);
    }

    return getAll;
  }()
};
var app = (0, _express.default)();
app.use(_bodyParser.default.json());

var Pool = require('pg').Pool;

var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
app.get('/', function (req, res) {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!');
});
/*app.get('/api/device/:id', (req, res)=>{
  pool.query('SELECT * FROM device', (error, results)=>{
    if(error){
      throw error
    }
    res.json(res.rows)
  })
})*/

app.get('/api/devices', device.getAll);
app.listen(process.env.PORT, function () {
  console.log("Server is running");
});