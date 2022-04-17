const app = require('express')();
const proxy = require('express-http-proxy');
const port = process.env.PORT || 8080;

const selectHost = (req) => {
  return `https://${req.params.region}-${req.params.projectId}.cloudfunctions.net`;
};

app.use(
  '/functions/:region/:projectId',
  proxy(selectHost, {
    https: true,
  })
);

app.use(
  '/firestore/',
  proxy('https://firestore.googleapis.com', { https: true })
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
