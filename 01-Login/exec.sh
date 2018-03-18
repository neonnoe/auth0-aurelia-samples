#!/usr/bin/env bash
docker build -t auth0-aurelia-01-login .
docker run -p 3003:3003 -it auth0-aurelia-01-login
