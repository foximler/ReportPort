module.exports = (sequelize, Sequelize) => {  
  const DailyReport = sequelize.define("dailyReport", {
    name: {
      type: Sequelize.STRING
    },
    restaurant_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
    meta_daily: {
      type: Sequelize.JSONB
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user', 
        key: 'id'
      }
    },
    reportDate:{
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.DATE,
      defaultValue: DataTypes.NOW,
    }
  });
  return dailyReport;
};
