const express = require('express');
const { getFilesNames, getFileContent } = require('./file');

module.exports.initRouter = () => {
  const router = express.Router();
  router.get('/getFilesNames', getFilesNames);
  router.get('/getFileContent', getFileContent);
  return router;
};
