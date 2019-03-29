'use strict';

import express from 'express';
import bodyParser from "body-parser";
//import Client from 'pg';


const app = express();
app.use(bodyParser.json());

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

app.get('/', (req, res)=> {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!')
})

app.get('/api/device', (req, res)=>{
  /*pool.query('SELECT * FROM device', (error, results)=>{
    if(error){
      throw error
    }
    res.status(200).json(res.rows)
  })*/
  const findAllQuery = 'SELECT * FROM device';
    try {
      const { rows, rowCount } = pool.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
})


app.listen(process.env.PORT, function(){
  console.log("Server is running");
})