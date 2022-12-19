const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.franchise = require("../models/franchise.model.js")(sequelize,Sequelize);
db.restaurant = require("../models/restaurants.model.js")(sequelize,Sequelize);
db.staff = require("../models/staff.model.js")(sequelize,Sequelize);
db.position = require("../models/position.model.js")(sequelize,Sequelize);
db.area = require("../models/area.model.js")(sequelize,Sequelize);

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "Owner", "Manager"];

module.exports = db;
