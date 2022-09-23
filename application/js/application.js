
/**
 * Startup actions.
 */

var wk = null;

// Initialization.
$(document).ready(() => {
    console.log("Log viewer - Jesus <3");
    
    // Prepare worker.
    if (typeof(Worker) !== "undefined") {
        wk = new Worker("./js/worker.js");
        wk.onmessage = process_worker;

        // Start TCP server.
        var request = {
            cmd: 'start-server'
        };

        wk.postMessage(request);

    } else 
        alert('Sorry, no Web Worker support.');
});

function process_worker (ev)
{
    var request = ev.data;

    console.log('request:', request);
}


