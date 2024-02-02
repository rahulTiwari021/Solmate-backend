import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.dev'
});

import logger from "./utils/logger";
import { PORT_NUMBER } from "./config";
const { router } = require("./services");

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

//app.set('/', router);
// commented above statement to mount router on app and used app.use to listen to requests
app.use('/', router);

// Need to connect here to Database using TypeOrm with sync mode set to "true" so that it could create the entity in our local psql db
/**
 * Few Suggestions:
 * it would be nice to have routes file in ts than js as it will ensure consitency accross the app. 
 * And we can use commonjs import statements intead of using require
 */

app.listen(PORT_NUMBER);

console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);
