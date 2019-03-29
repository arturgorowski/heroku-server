'use strict';

import express from 'express';
import bodyParser from "body-parser";

/*const devices = [
  {id_device: 1,name:'light'},
  {id_device: 2,name:'blinds'},
  {id_device: 3,name:'air_conditioning'},
  {id_device: 4,name:'heating'},
  {id_device: 5,name:'sound'},
  {id_device: 6,name:'alarm'},
  {id_device: 7,name:'cameras'},
  {id_device: 8,name:'front_door'},
  {id_device: 9,name:'garage_door'},
  {id_device: 10,name:'gate'},
  {id_device: 11,name:'weather_station'},
  {id_device: 12,name:'fridge'},
  {id_device: 13,name:'TV'},
  {id_device: 14,name:'washer'},
  {id_device: 15,name:'oven'}
];*/



const app = express();
app.use(bodyParser.json());

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const device = {
  /**
     * Get All Devices
     * @param {object} req 
     * @param {object} res 
     * @returns {object} devices array
     */
    async getAll(req, res) {
      const findAllQuery = 'SELECT * FROM device';
      try {
        const { rows, rowCount } = await pool.query(findAllQuery);
        return res.status(200).send({ rows, rowCount });
      } catch(error) {
        return res.status(400).send(error);
      }
    },

    async create(req, res) {
      const text = `INSERT INTO
        device(id_device, name)
        VALUES($1, $2)
        returning *`;
      const values = [
        uuidv4(),
        req.body.success,
        req.body.low_point,
        req.body.take_away,
        moment(new Date()),
        moment(new Date())
      ];
  
      try {
        const { rows } = await db.query(text, values);
        return res.status(201).send(rows[0]);
      } catch(error) {
        return res.status(400).send(error);
      }
    },
  }

app.get('/', (req, res)=> {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!')
})

app.get('/api/devices', device.getAll);
app.post('/api/devices', device.create);

app.listen(process.env.PORT, function(){
  console.log("Server is running");
})

