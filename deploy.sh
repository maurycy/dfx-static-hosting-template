#!/usr/bin/env bash
set -e

name="$(basename "$1" ".git")"

pushd /tmp

if [ ! -d "/tmp/${name}" ]
then
    git clone $1
fi

cd "/tmp/${name}"
yarn install
yarn build

popd

cp -rv "/tmp/${name}/build/" dist/build/

dfx start --background
dfx deploy
