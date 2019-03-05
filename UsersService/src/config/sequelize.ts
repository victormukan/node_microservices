import * as Sequelize from 'sequelize';

const sequelize = new Sequelize('db', 'postgres', 'root', {
  host: 'localhost',
  port: 5000,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });

export default sequelize;
