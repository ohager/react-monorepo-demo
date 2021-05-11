#!/bin/bash

mkdir -p packages/webapp-vanilla/src/vendor/lib
ln -rs packages/atoms/dist/acme.atoms.js -t packages/webapp-vanilla/src/vendor/lib
ln -rs packages/molecules/dist/acme.molecules.js -t packages/webapp-vanilla/src/vendor/lib
