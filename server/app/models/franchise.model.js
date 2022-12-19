module.exports = (sequelize, Sequelize) => {
  const Franchise = sequelize.define("franchises", {
    name: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    }
  });

  return Franchise;
};
