const net = require('net');

//establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here
  });

  //interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

console.log("Connecting ...");
connect();




module.exports = connect;