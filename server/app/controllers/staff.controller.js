const db = require("../models");
const config = require("../config/auth.config");
const Staff = db.staff;
exports.getStaff = (req, res) => {
  //un used
  let response = Staff.findAll({attributes: ['id','f_name', 'l_name', 'wage','position_id','restaurant_id','salary']})
  res.status(200).send(response)
};
