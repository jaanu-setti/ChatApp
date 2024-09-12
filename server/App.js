const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');

const cors = require('cors')
app.use(cors());

const method_override = require('method-override');
app.use(method_override());

const user = require('./Routes/user')
app.use('/chat',user)

const port = 7000;
app.listen(port , ()=>{console.log(`server is listening at ${port}`)})