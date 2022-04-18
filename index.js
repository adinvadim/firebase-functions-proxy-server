const app = require('express')();
const proxy = require('express-http-proxy');
const port = process.env.PORT || 8080;

const selectHost = (req) => {
  return `https://${req.params.region}-${req.params.projectId}.cloudfunctions.net`;
};

app.use(
  '/functions/:projectId/:region',
  proxy(selectHost, {
    https: true,
  })
);

app.use(
  '/firestore/',
  proxy('https://firestore.googleapis.com', { https: true })
);

app.use(
  '/securetoken/',
  proxy('https://securetoken.googleapis.com/', { https: true })
);

app.use('/auth/', proxy('www.googleapis.com', { https: true }));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
