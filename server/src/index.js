const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const dbPing = require('./config/db')
const config = require('./config/config')
const ApiError = require('./utils/ApiError')
const apiErrorHandler = require('./middleware/apiErrorHandler')
const routes = require('./routes/Routes')

const debugStartup = require('debug')('app:startup')


const app = express();

// ability to read JSON
app.use(express.json());
// ability to read url data
app.use(express.urlencoded({ extended: false }));
// Cool information on requests in your console
app.use(morgan('dev'))
debugStartup("Parsing middleware enabled")


app.use('/api', routes());

// Route not found
app.use((req, res, next) => {
    next(ApiError.notFound());
})

// Using our error handler
app.use(apiErrorHandler);

if (dbPing) {
    const PORT = config.port;
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
} else {
    console.error('Error: Database connection failed.');
}