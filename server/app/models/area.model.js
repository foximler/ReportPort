module.exports = (sequelize, Sequelize) => {
  const Area = sequelize.define("areas", {
    name: {
      type: Sequelize.STRING
    },
  });
  return Area;
};
