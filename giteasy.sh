#!/bin/bash
echo "executing git add . command"
git add .
echo "excecuting git commit with $1"
git commit -m "$1"

if [$2 -eq "true"] then
    echo "executing git push"
    git push
else then
    echo "skipping git push"
fi