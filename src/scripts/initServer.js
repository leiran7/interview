const { initExpress } = require('../components/express');

module.exports = async (expressApp) => {
  await initExpress(expressApp);
};
