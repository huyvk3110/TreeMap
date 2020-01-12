const liveServer = require('live-server');

liveServer.start({
    port: 3000,
    root: './public',
    wait: 300
})