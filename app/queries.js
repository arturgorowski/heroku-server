import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const getDevices = (request, response) => {
    pool.query('SELECT id_device, name, icon FROM public.devices', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT id_user, first_name, last_name, email FROM public.users', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { first_name, last_name, email } = request.body

    pool.query('INSERT INTO public.users (first_name, last_name, email) VALUES ($1, $2, $3)', [first_name, last_name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json('User added')
    })
}

const userId = (request, response) => {
    const { email } = toString(request.params.email)

    pool.query('SELECT id_user, first_name, last_name, email FROM public.users WHERE email=$1', [email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results)
    })
}

const deleteDevice = (request, response) => {
    const { id_user } = parseInt(request.params.id_user)

    pool.query('DELETE FROM public.user_device WHERE id_user=$1', [id_user], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json('User devices deleted')
        if(response.status===200){

        }
    })
}
const deleteUsers = (request, response) => {
    const { id_user } = parseInt(request.params.id_user)
    pool.query('DELETE FROM public.users WHERE id_user = $1', [id_user], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json('User deleted')
    })
}

const createUserDevice = (request, response) => {
    const { id_user, id_device } = request.body

    pool.query('INSERT INTO public.user_device (id_user, id_device) VALUES ($1, $2)', [id_user, id_device], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json('User device added')
    })
}

const addDevice = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO public.device ( name )', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json('Device added')
    })
}

const getUserDevice = (request, response) => {
    const { id_user } = parseInt(request.params.id_user)

    pool.query('SELECT * FROM public.users NATURAL JOIN public.user_device NATURAL JOIN public.device WHERE public.users.id_user=$1', [id_user], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getDevices,
    getUsers,
    createUser,
    deleteDevice,
    deleteUsers,
    createUserDevice,
    userId,
    addDevice,
    getUserDevice
}