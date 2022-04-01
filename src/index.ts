import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { Container } from 'typedi';
import { Client } from './Client';

dotenv.config();

// Initialize the Client using the IoC.
Container.get<Client>(Client);


// dummy server used to bind the client to the port
import http = require('http');
const server = http.createServer();
server.listen(process.env.PORT || 8080);