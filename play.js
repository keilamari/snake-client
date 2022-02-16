const setupInput = require('./input');
const connect = require('./client');
//establish connection with game server


console.log("Connecting ...");

connect();

setupInput();