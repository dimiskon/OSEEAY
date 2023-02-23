'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const staffsRouter = require('./routes/staffs');
const buildingsRouter = require('./routes/buildings');

// Middlewares
const dbConnector = require('./middlewares/dbConnector');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const filterOutResponse = require('./middlewares/filterOutResponse');

const startServer = async() => {
  try {
    app.use(cors());
    app.use(express.json());

    // Start the web server on the specified port.
    app.listen(PORT, () => {
      console.log(`Server is up and running at: http://localhost:${PORT}`);
    });

    // DB connection
    app.use(dbConnector);

    // Middlewares - Before
    app.use(logger);

    // Home Page
    app.get('/', (req, res) => {
      res.send('HOME PAGE');
    });

    // Routers
    app.use('/staffs', staffsRouter);
    app.use('/buildings', buildingsRouter);

    // Middlewares - After
    app.use(filterOutResponse);

    // Error Handling Middleware
    app.use(errorHandler);

  } catch (error) {
    console.log('Unable to connect to the database:', error.original);
  }
};

startServer();