const dotenv = require('dotenv');
// The require returns us the object and then below, I am using config() to read the envioronment variables.


dotenv.config();   // This helps us to read the environment variables.

module.exports = {
    PORT: process.env.PORT
}

// Read from the official documentation of dotenv.
