#!/bin/bash

mkdir -p packages/webapp-vanilla/src/vendor/lib
ln -rs packages/atoms/dist/* -t packages/webapp-vanilla/src/vendor/lib
ln -rs packages/molecules/dist/* -t packages/webapp-vanilla/src/vendor/lib
