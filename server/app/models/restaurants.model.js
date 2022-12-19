module.exports = (sequelize, Sequelize) => {  
  const Restaurant = sequelize.define("restaurants", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    franchise_id: {
      type: Sequelize.INTEGER
    },
    meta_restaurant: {
      type: Sequelize.JSONB
    },
  });

  return Restaurant;
};
