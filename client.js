const net = require('net');
const credentials = require("./constants");


const connect = function() {
  const conn = net.createConnection(credentials, () => {
    console.log('Successfully connected to game server');
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.write("Name: ARG");

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;