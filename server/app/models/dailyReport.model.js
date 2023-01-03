module.exports = (sequelize, Sequelize) => {  
  const DailyReport = sequelize.define("dailyReport", {
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
        model: 'users', 
        key: 'id'
      }
    },
    report_date:{
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.DATE,
      defaultValue: Sequelize.DataTypes.NOW,
    }
  },
    {
    uniqueKeys: {
      restaurant_id_report_date_idx: {
        fields: ['restaurant_id', 'report_date']
      }
    }
  });
  return DailyReport;
};
