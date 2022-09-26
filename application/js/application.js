
/**
 * Startup actions.
 */

var wk = null;
var message_counter = 1;
var message_counter_limit = 5000;

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

    auto_scroll_controller();
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

        if (message_counter >= message_counter_limit)
        window.interface.restart_application();
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

var auto_scroll_running = false;
var auto_scroll_enabled = true;

function auto_scroll_controller ()
{
    $('#btn-auto-scroll').on('click', ()=> {
        if (auto_scroll_enabled == true) {
            auto_scroll_enabled = false;

            $('#btn-auto-scroll').removeClass('btn-success');
            $('#btn-auto-scroll').addClass('btn-danger');
        }

        else {
            auto_scroll_enabled = true;

            $('#btn-auto-scroll').addClass('btn-success');
            $('#btn-auto-scroll').removeClass('btn-danger');
        }
    });

    setInterval(function(){
        if (auto_scroll_running == false) {
            auto_scroll_running = true;

            if (auto_scroll_enabled == true) 
                window.location.href = "#log-end";

            auto_scroll_running = false;
        }
    }, 100)
}


