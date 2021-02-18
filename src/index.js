const express = require('express');
const morgan = require('morgan');
const pg = require('pg');
const path = require('path');
const cors = require('cors');


// Initializations
const app = express();


// Settings
app.set('port', process.env.PORT || 8000);
app.set('endPoint', '/'); 


// MiddleWare
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Global Var


// Routes
app.use(require('./routes/user'));
//app.use(require('./routes/user'));


// Server Listen
app.listen(app.get('port'), () => {
    console.log('Server listening on', app.get('port'));
});