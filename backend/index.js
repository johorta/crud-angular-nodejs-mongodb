const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/empleado', require('./routes/empleado.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port 4000');
})