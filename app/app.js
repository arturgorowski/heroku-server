'use strict';

import express from 'express';
import bodyParser from "body-parser";

const devices = [
  {id_device: 1,name:'Light', icon:'lightbulb-on'},
  {id_device: 2,name:'Blinds', icon:'blinds'},
  {id_device: 3,name:'Air conditioning', icon:'air-conditioner'},
  {id_device: 4,name:'Heating', icon:'fire'},
  {id_device: 5,name:'Sound', icon:'music'},
  {id_device: 6,name:'Alarm', icon:'shield-check'},
  {id_device: 7,name:'Cameras', icon:'camera'},
  {id_device: 8,name:'Front door', icon:'door'},
  {id_device: 9,name:'Garage door', icon:'garage'},
  {id_device: 10,name:'Gate', icon:'gate'},
  {id_device: 11,name:'Weather station', icon:'apple-icloud'},
  {id_device: 12,name:'Fridge', icon:'fridge-outline'},
  {id_device: 13,name:'TV', icon:'television'},
  {id_device: 14,name:'Washer', icon:'water'},
  {id_device: 15,name:'Oven', icon:'toaster-oven'},
  {id_device: 16,name:'Printer', icon:'printer'}
];



const app = express();
app.use(express.json());

/*const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})*/




/*const device = {
  /**
     * Get All Devices
     * @param {object} req 
     * @param {object} res 
     * @returns {object} devices array
     *
    async getAll(req, res) {
      const findAllQuery = 'SELECT * FROM device';
      try {
        const { rows, rowCount } = await pool.query(findAllQuery);
        return res.status(200).send({ rows, rowCount });
      } catch(error) {
        return res.status(400).send(error);
      }
    }
  }*/

app.get('/', (req, res)=> {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!')
})

app.get('/api/devices', (req, res)=>{
  res.send(devices);
})

//app.get('/api/devices', device.getAll);


app.listen(process.env.PORT, function(){
  console.log("Server is running");
})

