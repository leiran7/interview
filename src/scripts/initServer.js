const { initSequlize } = require('../components/sequelize');
const { initExpress } = require('../components/express');

module.exports = async (expressApp) => {
  await initSequlize();
  await initExpress(expressApp);
};
