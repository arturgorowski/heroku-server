'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import { getDevices, getUsers, createUser, getUserId, deleteAccount, deleteDevice, createUserDevice,  getUserDevice } from './queries'

const app = express();
app.use(express.json());

app.use(bodyParser.json())

app.get('/', (req, res)=> { res.json('Artur Górowski | Krystian Lisowski') });

app.get('/get/devices', getDevices)

app.get('/get/users', getUsers)

app.post('/post/users', createUser)

app.get('/get/userId/:email', getUserId)

app.delete('/delete/users/:id_user', deleteAccount)

app.delete('/delete/device/:id_user/:id_device')

app.post('/post/createUserDevice', createUserDevice)

app.get('/get/usersDevice/:id_user', getUserDevice)

app.listen(process.env.PORT, function(){
  console.log("Server is running");
});