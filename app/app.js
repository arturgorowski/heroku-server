'use strict';

import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(express.json());

//app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//const dotenv = require('dotenv');

//const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

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

pool.on('connect', () => {
  console.log('connected to the db');
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM user', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
}

app.get('/', (req, res)=> {
  res.json('IT WORKS')
});

app.get('/api/devices', (req, res)=>{
  res.send(devices);
});

app.get('/users', (req, res)=>{
  res.send(getUsers);
});

app.get('/users1', getUsers)



app.listen(process.env.PORT, function(){
  console.log("Server is running");
});

