
const net = require('net');

/**
 * Settings.
 */
var port   = 1337;
var server = null;

/**
 * Interface control.
 */
onmessage = function(ev) {
    var request = ev.data;
    request.status = false;

    if (request.cmd == 'start-server') {
        server = net.createServer(client_connections);
        
        server.listen(port, function(){
            console.log(`Server started on port ${port}`); 
            postMessage({
                cmd: 'set-server-port',
                port: port
            })
        });
    
        request.status = true;
        postMessage(request);
    }
};

/**
 * Server control.
 */
function client_connections (sock) {
    // console.log(`${sock.remoteAddress}:${sock.remotePort} Connected`);

    sock.on('data',function(data){
        var request = {
            cmd: 'log-data',
            data: data.toString().trim()
        };

        postMessage(request);
        sock.destroy();
	});
    
    sock.on('close',function(){
        // console.log(`${sock.remoteAddress}:${sock.remotePort} Connection closed`);
    });
    
    sock.on('error',function(error){
        console.error(`${sock.remoteAddress}:${sock.remotePort} Connection Error ${error}`);
    });
}


