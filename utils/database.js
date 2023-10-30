const { Sequelize } = require('sequelize');
const config = require("../config/config.js");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    benchmark: true
  }
);
// Create the database and the tables if they don't exist
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("Database and tables created successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  sequelize,
  connectToDatabase,
};
