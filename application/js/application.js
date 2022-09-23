
/**
 * Startup actions.
 */

var wk = null;
var message_counter = 0;

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

    // Prepare toolbar buttons.
    $('#btn-open-dev-tools').on('click', ()=> {
        window.interface.toggle_dev_tools();
    });

    $('#btn-log-out').on('click', ()=> {
        window.interface.restart_application();
    });
});

function process_worker (ev)
{
    var request = ev.data;

    if (request.cmd == 'set-server-port') {
        $('.server-port').text(request.port);
    }

    else if (request.cmd == 'log-data') {

        // Total messages received.
        $('.message-counter').text(message_counter);
        message_counter++;
        
        process_log_data(request.data);
    }
}

function process_log_data (data)
{
    var item =
    `
        <div class="row log-item" >
            <div class="col-md-12" >
                <div class="text"> 
                    `+ data +`
                </div>
            </div>
        </div>
    `;

    $('.log-content').append(item);
}


