const express = require('express');
const initServer = require('./scripts/initServer');

const startServer = async () => {
  const app = express();
  const port = 3000;
  await initServer(app);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

startServer();
