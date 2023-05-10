const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app=express()
const route=require('./routes')
const dotenv = require('dotenv').config({ path: 'src/.env' });
PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('./dbConnect')
app.use('/task',route);
app.use((req, res, next) => {
    res.status(404).json({
        error: 'not found'
    });
});

app.listen(5000, () =>
    console.log(`server listening on 5000`)
);