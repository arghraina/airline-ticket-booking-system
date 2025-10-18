const dotenv = require('dotenv');
const path = require('path');

// The require returns us the object and then below, I am using config() to read the envioronment variables.
dotenv.config({ path: path.resolve(__dirname, '../../.env') });   // This helps us to read the environment variables.

module.exports = {
    PORT: process.env.PORT
}

// Read from the official documentation of dotenv.
