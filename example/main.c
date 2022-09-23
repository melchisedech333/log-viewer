
#include <stdio.h>  // sprintf
#include <string.h> // strlen, memset
#include <unistd.h> // sleep
#include <time.h>   // time, localtime

#define lib_debug_print_internal(DEBUG_FLAG, FMT, ...)              \
    do {                                                            \
        time_t now     = time(NULL);                                \
        struct tm *tms = localtime(&now);                           \
        char hour[5], min[5], sec[5];                               \
                                                                    \
        memset(hour, 0x0, 5);                                       \
        memset(min,  0x0, 5);                                       \
        memset(sec,  0x0, 5);                                       \
                                                                    \
        sprintf(hour, "%d", tms->tm_hour);                          \
        sprintf(min,  "%d", tms->tm_min);                           \
        sprintf(sec,  "%d", tms->tm_sec);                           \
                                                                    \
        if (strlen(hour) == 1)                                      \
            sprintf(hour, "0%d", tms->tm_hour);                     \
        if (strlen(min) == 1)                                       \
            sprintf(min, "0%d",  tms->tm_min);                      \
        if (strlen(sec) == 1)                                       \
            sprintf(sec, "0%d",  tms->tm_sec);                      \
                                                                    \
        if (DEBUG_FLAG == 1)                                        \
            printf("[%s:%s:%s] -> %s:%d:%s(): " FMT "\n",           \
                hour, min, sec,                                     \
                __FILE__, __LINE__, __func__, ##__VA_ARGS__ );      \
        else                                                        \
            printf("[%s:%s:%s]: " FMT "\n",                         \
                hour, min, sec, ##__VA_ARGS__ );                    \
    } while (0)

#define say_debug(FMT, ...)                                         \
    do {                                                            \
        lib_debug_print_internal(0, FMT, ##__VA_ARGS__);            \
    } while (0)

#define say_debug_details(FMT, ...)                                 \
    do {                                                            \
        lib_debug_print_internal(1, FMT, ##__VA_ARGS__);            \
    } while (0)

int main (int argc, char *argv[])
{
    for (int a=0; a<100; a++) {
        say_debug("Iesus Hominum Salvator!");
        sleep(1);
    }

    return 0;
}


