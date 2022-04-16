# Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/adinvadim/firebase-functions-proxy-server)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/adinvadim/firebase-functions-proxy-server/tree/master)



# How it work

It is simple proxy server.

`/functions/:region/:projectId/example-function-name` -> `https://${region}-${projectId}.cloudfunctions.net/example-function-name`

Example:

`europe-west1` and `example`

`/functions/europe-west1/example/example-function-name` -> `https://europe-west-1-example.cloudfunctions.net/example-function-name`

Also support query and many levels in paths (`/example-function-name/sub-path/another-path`)
