#!/bin/bash

clear
rm -rf main
gcc -c debug.c -o debug.o
gcc main.c debug.o -o main
rm -rf debug.o


