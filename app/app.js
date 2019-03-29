'use strict';

import express from 'express';
import bodyParser from "body-parser";
//import Client from 'pg';


const app = express();
app.use(bodyParser.json());

const Pool = require('pg').Pool
const pool = new Client({
  connectionString: process.env.DATABASE_URL
})

app.get('/', (req, res)=> {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!')
})

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