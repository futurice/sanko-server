var WebSocketServer = require('ws').Server,
  port = process.env.PORT || 9900,
  wss = new WebSocketServer({ port: port });

/**
 *  Sends the data to each of the connected clients.
 */
wss.broadcast = function(data) {
  for(var i in this.clients) {
    this.clients[i].send(data);
  }
};

/**
 *  Starts listening for messages and instantly
 *  broadcasts any message received to each client.
 */
wss.on('connection', function(ws) {

  ws.on('message', function(message) {
    console.log('received: %s', message);
    wss.broadcast(message);
  });

  console.log('WS connected');
  console.log('  %d clients connected', this.clients.length);

  var id = setInterval(function() {
    ws.send("--" + new Date().toISOString() + "--");
  }, 10000);

  ws.on("close", function() {
    console.log("WS closed");
    clearInterval(id);
  });
});
