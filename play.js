const net = require('net');

//establish connection with game server
const credentials = {
  port: 50541,
  host: "165.227.47.243"
};

const connect = function() {
  const conn = net.createConnection(credentials, () => {
    console.log('Successfully connected to game server');
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.write("Name: ARG");

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

console.log("Connecting ...");




module.exports = connect;