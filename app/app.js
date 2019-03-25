'use strict';

import express from 'express';
import bodyParser from "body-parser";

const { Client } = require('pg');
//const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});*/

app.get('/', (req, res)=> {
  res.json('cos')
})


app.listen(process.env.PORT, function(){
  console.log("Server is running");
})