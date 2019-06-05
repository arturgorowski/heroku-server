'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import { getDevices, getUsers, createUser, deleteDevice, deleteUsers, createUserDevice, userId, addDevice, getUserDevice } from './queries'

const app = express();
app.use(express.json());

app.use(bodyParser.json())

app.get('/', (req, res)=> { res.json('Artur Górowski | Krystian Lisowski') });

app.get('/get/devices', getDevices)

app.get('/get/users', getUsers)

app.post('/post/users', createUser)

app.delete('/delete/users/:id_user', deleteDevice, deleteUsers)

app.post('/post/createUserDevice', createUserDevice)

app.delete('/get/userId/:email', userId)

app.post('/post/addDevice', addDevice)

app.get('/get/usersDevice/:id_user', getUserDevice)

app.listen(process.env.PORT, function(){
  console.log("Server is running");
});