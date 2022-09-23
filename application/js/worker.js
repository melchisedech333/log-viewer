
const net = require('net');

onmessage = function(ev) {
    var request = ev.data;
    request.status = false;

    if (request.cmd == 'start-server') {
        request.status = true;
        postMessage(request);
    }
};


