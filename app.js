const express = require('express');
app= express();
const http =require('http');

app.get("/app", function(req,res){
    res.send("Hello there");
});

app.get("*",function(rep,res){
    res.status(404).send("PAGE NOT FOUND")
})

const server = http.createServer(app).listen(3000, function(err) {
    if (err) {
      console.log(err);
    } else {
      const host = server.address().address;
      const port = server.address().port;
      console.log(`Server listening on ${host}:${port}`);
    }
});
    
const io = require('socket.io')(server);
  io.on('connection', (socketServer) => {
    socketServer.on('npmStop', () => {
      process.exit(0);
    });
  });
  
module.exports = app;  