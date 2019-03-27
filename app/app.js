'use strict';


//import express from 'express';
//import bodyParser from "body-parser";
//import Client from 'pg';
import Device from './server2';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

app.get('/', Device.getAll);

app.get('/api/device', (req, res)=>{
  pool.query('SELECT * FROM device', (error, results)=>{
    if(error){
      throw error
    }
    res.status(200).json(res.rows)
  })
})


app.listen(process.env.PORT, function(){
  console.log("Server is running");
})