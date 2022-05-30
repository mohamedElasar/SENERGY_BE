const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases:false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.trips = require("./trip.model.js")(sequelize, Sequelize,DataTypes);
db.devices = require("./device_token.model.js")(sequelize, Sequelize);

// db.users.hasMany(db.trips, {
//   foreignKey: 'trip_id',s
//   as: 'trip'
// })

db.trips.belongsTo(db.users, {
  foreignKey: 'user_id',
  as: 'user'
})
db.devices.belongsTo(db.users, {
  foreignKey: 'user_id',
  as: 'user'
})

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db;
