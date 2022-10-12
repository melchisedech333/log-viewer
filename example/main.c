
#include "debug.h"

int main (int argc, char *argv[])
{
    /**
     * Detailed message example.
     */
    say_debug_detail("Iesus Hominum Salvator!");

    /**
     * Example of common usage.
     */
    
    for (int a=0; a<10; a++) {
        say_debug("Message %d: Iesus Hominum Salvator!", a);
        sleep(1);
    }

    return 0;
}


