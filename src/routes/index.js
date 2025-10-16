const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();
// Now, what this router does is that it crates the middlewares over here and then when we call it in the main index.js in src folder, we can access this router object which we are going to make... basically, here router handles all the GET, POST, etc functions.

router.use('/v1' , v1Routes);

module.exports = router;