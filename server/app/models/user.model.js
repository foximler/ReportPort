module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    restaurant_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
  });

  return User;
};
