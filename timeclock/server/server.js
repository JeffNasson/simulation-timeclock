require('dotenv').config();
const axios = require('axios');
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

const ctrl=require('./controller.js');

const app=express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`))

const {SERVER_PORT,CONNECTION_STRING,SECRET} = process.env

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('db connected')
}).catch(err=>console.log(err))

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

//Homepage
app.get(`/api/punches`,ctrl.getPunches)
app.delete(`/api/punch/:id`,ctrl.deletePunch)

//New Punch page
app.post(`/api/punch`,ctrl.newPunch)

//Edit Punch page
app.get(`/api/punch/:id`)
app.put(`/api/punch/:id`)




app.listen(SERVER_PORT,()=>console.log(`Listening on port:${SERVER_PORT}`))