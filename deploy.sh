#!/bin/bash

echo "start deployment"
echo "pulling source code ..."
git pull
echo "finish pull"
echo "installing denpdencies..."
npm install
echo "building app"
npm run build
echo "finished"
