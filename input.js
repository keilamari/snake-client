let connection;

const setupInput = (conn) => {
  connection = conn;
{
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: Up') 
    } if (key ==='a') {
      connection.write('Move: left') 
    } if (key === 's') {
      connection.write('Move: down')
    } if (key === 'd') {
      connection.write('Move: right')
    }
  });

  return stdin;
}
};

module.exports = setupInput;