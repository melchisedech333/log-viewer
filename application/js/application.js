
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

    // ***
    for (var a=0; a<100; a++) {
        var item =
        `
            <div class="row" >
                <div class="col-md-12" >
                Item `+ a +`
                </div>
            </div>
        `;

        $('.log-content').append(item);
    }
});

function process_worker (ev)
{
    var request = ev.data;

    if (request.cmd == 'log-data') {
        console.log('log data:', request.data);
    }
}


