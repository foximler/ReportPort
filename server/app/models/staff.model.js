module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define("staff", {
    f_name: {
      type: Sequelize.STRING
    },
    l_name: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.STRING
    },
    sin:{
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.JSONB
    },
    email: {
      type: Sequelize.STRING
    },
    wage: {
      type: Sequelize.DECIMAL
    },
    salary: {
      type: Sequelize.DECIMAL
    },
    bank: {
      type: Sequelize.JSONB
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          validator: function(v) {
              return phoneValidationRegex.test(v); 
        },
      }
    },
    restaurant_id: {
      type: Sequelize.INTEGER
    },
    position_id: {
      type: Sequelize.INTEGER
    },
  });

  return Staff;
};

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 
