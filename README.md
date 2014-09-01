sanko-server
============

Backend server for the Sanko game.

License: [BSD (3-clause)](https://github.com/futurice/sanko-server/blob/master/LICENSE)

## What it does

`sanko-server` is a really simple WebSocket server, that accepts messages from any client and broadcasts them as-is to all connected clients. There is no HTTP server available, mind you: you can only talk to the server via the `ws://` protocol prefix.

To keep the connection alive, the server will also automatically send a timestamp message at intervals to each client. These intervals are removed when the socket closes.


## How to run locally

You need [Node.js](http://nodejs.org/) and `npm` (Node Package Manager) installed. Then you can simply navigate to the directory on the terminal and:

```bash
$ npm install  

# -> modules are installed

$ node ws-server.js

# -> server is started
```

Now you have the server running at ws://localhost:9900 


There is also a Procfile that makes the server deployable on e.g. Heroku.
