const express = require("express");
const index_routes = require('./src/routes');

const app = express()



app.listen(3000, () => {

    console.log("Running in 3000");

})