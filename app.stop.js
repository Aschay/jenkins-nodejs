const io = require('socket.io-client');

const socketClient1 = io.connect('http://localhost:3000')
const socketClient2 = io.connect('http://localhost:3001')

socketClient1.on('connect', () => {
  if (socketClient1.id!=null){
  socketClient1.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);}
  
});

socketClient2.on('connect', () => {
  if (socketClient2.id!=null){
  socketClient2.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);}
  
});
//module.exports = stop;  