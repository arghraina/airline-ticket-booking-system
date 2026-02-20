const express = require('express');
const router = express.Router();

const { airplaneController } = require('../../controllers');

// this is referring to like:
//    /api/v1/airplanes/  POST request.
router.post('/' , airplaneController.createAirplane);

module.exports = router;
