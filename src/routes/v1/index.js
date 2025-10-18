const express = require('express');

const router = express.Router();


const { infoController }= require('../../controllers');   // will automatically fetch from the index.js in the controllers folder.

const airplaneRoutes = require('./airplane_routes');

router.use('/airplanes' , airplaneRoutes);

router.get('/info' , infoController.info)    // Now we separrately handled the middleware for info.

module.exports = router;