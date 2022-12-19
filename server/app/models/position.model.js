module.exports = (sequelize, Sequelize) => {
  const Position = sequelize.define("positions", {
    name: {
      type: Sequelize.STRING
    },
    area_id: {
      type: Sequelize.INTEGER
    }
  });
  return Position;
};
