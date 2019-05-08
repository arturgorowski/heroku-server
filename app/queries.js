import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  })
  
 /* pool.on('connect', () => {
    console.log('connected to the db');
  });*/
  
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
  }

  module.exports = {
      getDevices,
      getUsers,
      createUser,
      deleteUser
  }