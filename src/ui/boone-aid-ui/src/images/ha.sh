#!/bin/bash

icon="Logo.svg"                                         # input icon

# program="/C/Program Files/Inkscape/bin/inkscape.exe"  # for windows x64
# program="/C/Program Files/Inkscape/inkscape.exe"      # for windows x64
program="inkscape"                                      # for linux

for i in 48 72 96 144 192 256 384 512;
do
    "${program}" --export-png="./icon-${i}x${i}.png" -w "${i}" -h "${i}" "${icon}"

    # "${program}" -z -e "./icon-${i}x${i}.png" -w "${i}" -h "${i}" "${icon}";
done