const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const dbPing = require('./config/db')
const config = require('./config/config')
const corsOptions = require('./config/corsOptions')
const ApiError = require('./utils/ApiError')
const apiErrorHandler = require('./middleware/apiErrorHandler')
const routes = require('./routes/routes')

const debugStartup = require('debug')('app:startup')

const app = express();

app.use(helmet());

// CORS Security
// Setup custom domain once hosted
app.use(cors({ origin: "*" })) // default
// app.use(cors(corsOptions)) //Whitelisting

// ability to read JSON
app.use(express.json());
// ability to read url data
app.use(express.urlencoded({ extended: false }));
// Cool information on requests in your console
app.use(morgan('dev'))
debugStartup("Parsing middleware enabled")

// File / Image parsing middleware
app.use(fileUpload({ createParentPath: true }))

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