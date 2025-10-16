const express = require('express');

const {serverConfig , Logger} = require('./config');

const app = express();

const apiRoutes = require('./routes');
app.use('/api' , apiRoutes); // app.use() function is used to use this middleware for all the functions... like inBuilt middlewares like (req,res)=>{}, we use for that specific call, but app.use()  will give this  middleware to all the functions.

app.listen(serverConfig.PORT , ()=>{
    console.log('Server successfully running on port ', `${serverConfig.PORT}`);
    console.log(`http://localhost:${serverConfig.PORT}`);    

    // // This will log in the entry in the combined.log 
    // Logger.info('successfully started a server' , 'root' , {});    
})