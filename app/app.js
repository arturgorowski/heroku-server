'use strict';

import express from 'express';
import bodyParser from "body-parser";
//import Client from 'pg';

const app = express();

app.use(bodyParser.json());

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});*/


app.get('/', (req, res)=> {
  res.json('cos')
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running");
})