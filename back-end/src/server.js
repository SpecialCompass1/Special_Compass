 var dbConfig = require('./config/db');

import express from 'express';
import { routes } from './routes/index';
let cors = require("cors");
//import { initializeDbConnection } from './db';


const PORT = process.env.PORT || 8080;

let db =dbConfig(); 
const corsOptions = {
  origin:"*",
  credentials:true,
  optionSuccessStatus:200
}
const app = express();
app.use(cors(corsOptions))

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());

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
  