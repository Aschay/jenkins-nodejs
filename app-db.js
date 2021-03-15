const express = require('express');
app= express();
const http =require('http');
const config = require('./config/config-db');
const env = process.env.NODE_ENV || 'development';


var mongoose = require('mongoose');
mongoose.connect(config.db[env], config.dbParams);

const Product = require('./models/Product');



app.get('/api/products', function (req, res) {
    Product.find({}).then(function(p){
        res.send(p);
    })
  });

app.get('*', function (req, res) {
  res.status(404).send('PAGE NOT FOUND');
});

const server = http.createServer(app).listen(3001, function(err) {
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