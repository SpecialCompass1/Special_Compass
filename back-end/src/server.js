 var dbConfig = require('./config/db');
 //const router = new express.Router();
const express = require('express');
const app = express();
const path = require('path');
//const router = require('./routes/router')


import { routes } from './routes/index';
let cors = require("cors");

const cookieParser = require('cookie-parser');
//import { initializeDbConnection } from './db';


const PORT = process.env.PORT || 8080;




app.use(express.json());

app.use(cookieParser());
//app.use(router);



let db =dbConfig(); 

const corsOptions = {
  origin:"*",
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions))

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)


// Add all the routes to our Express server
// exported from routes/index.js
console.log("routes");
console.log(routes);

routes.forEach(route => {
  console.log("route");
  console.log(route)
    app[route.method](route.path, route.handler);
});



// Connect to the database, then start the server.
// This prevents us from having to create a new DB
// connection for every request.
//initializeDbConnection()
    //.then(() => {
       // app.listen(PORT, () => {
         //   console.log(`Server is listening on port ${PORT}`);
        //});
    //});


    app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}`);
        });
  