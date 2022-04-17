# Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/adinvadim/firebase-functions-proxy-server)

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/adinvadim/firebase-functions-proxy-server/tree/master)



# How it work

## Proxy functions

It is simple proxy server.

`/functions/:region/:projectId/example-function-name` -> `https://${region}-${projectId}.cloudfunctions.net/example-function-name`

Example:

`europe-west1` and `example`

`/functions/europe-west1/example/example-function-name` -> `https://europe-west-1-example.cloudfunctions.net/example-function-name`

Also support query and many levels in paths (`/example-function-name/sub-path/another-path`)


## Proxy firestore

Connect domain to your proxy server and set domain in firestore settings.

Example with proxy server on domain `your-domain.com`:
```
const db = firebase.firestore();
db.settings({
  host: 'your-domain.com/firestore',
  ssl: true
})
```


## Proxy auth
You need replace `www.googleapis.com` and `securetoken.googleapis.com` with
proxy urls.

One of possible for it is webpack plugins.

Example with proxy server on domain `your-domain.com`:
```
{
  enforce: 'pre',
  test: /\.js$/,
  loader: 'string-replace-loader',
  options: {
    search: 'www.googleapis.com',
    replace: 'your-domain.com/auth',
    flags: 'g',
  },
},
{
  enforce: 'pre',
  test: /\.js$/,
  loader: 'string-replace-loader',
  options: {
    search: 'securetoken.googleapis.com',
    replace: 'your-domain.com/securetoken',
    flags: 'g',
  },
},
```
