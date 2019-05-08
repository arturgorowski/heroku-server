'use strict';

import express from 'express';
//import { Pool } from 'pg';
//import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { getDevices, getUsers, createUser, deleteUser } from './queries';

//dotenv.config();
const app = express();
app.use(express.json());

app.use(bodyParser.json())
/*app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)*/
//const dotenv = require('dotenv');

//const Pool = require('pg').Pool
/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
  console.log('connected to the db');
});

const getDevices = (request, response) => {
  pool.query('SELECT id_device, name, icon FROM public.devices', (error, results) =>{
    if(error){
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUsers = (request, response) => {
  pool.query('SELECT id_user, first_name, last_name, email, password FROM public.users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { id_user, first_name, last_name, email, password } = request.body

  pool.query('INSERT INTO public.users (id_user, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)', [id_user, first_name, last_name, email, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json('User added')
  })
}

const deleteUser = (request, response) => {
  const id_user = parseInt(request.params.id_user)

  pool.query('DELETE FROM public.users WHERE id_user = $1', [id_user], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json('User deleted')
  })
}*/

app.get('/', (req, res)=> { res.json('Artur Górowski | Krystian Lisowski') });

app.get('/api/devices', getDevices)

app.get('/users', getUsers)

app.post('/post/users', createUser)

app.delete('/users/:id_user', deleteUser)

app.listen(process.env.PORT, function(){
  console.log("Server is running");
});

