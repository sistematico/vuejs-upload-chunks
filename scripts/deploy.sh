#!/usr/bin/env bash

PATH=$PATH:/home/nginx/.bun/bin

cd apps/api
bun install

apps/site
bun install
bun run build