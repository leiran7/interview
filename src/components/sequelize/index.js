const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fytvjzof', 'fytvjzof', 'g7bOwP54eDr9jvtUKFFvsKKempd3EB6k', {
  host: 'dumbo.db.elephantsql.com',
  dialect: 'postgres',
});

module.exports.initSequlize = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports.sequelize = sequelize;
