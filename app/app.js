'use strict';

//import express from 'express';
//import bodyParser from "body-parser";
//import Client from 'pg';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});*/


app.get('/', (req, res)=> {
  res.json('KURWA JA PIERDOLE JEBANY SUKCES!!')
})

app.get('/grzyb', (req, res)=>{
  res.json('łosie sarny dziki XD')
})


app.listen(process.env.PORT, function(){
  console.log("Server is running");
})