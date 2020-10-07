require('rootpath')();
require('_helpers/db');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const userRoutes = require('./_routes/user');
const bookRoutes = require('./_routes/book');
const favoriRoutes = require('./_routes/favorite');
const helmet = require("helmet");

app.use(bodyParser.json({limit:'20 mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());
// global error handler
app.use(errorHandler);

// Routes
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/favori', favoriRoutes);
// start server

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));