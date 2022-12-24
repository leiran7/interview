const express = require('express');
const { initRouter } = require('../../routes');

module.exports.initExpress = async (app) => {
  const router = initRouter();
  app.use(express.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use('/', router);
};
