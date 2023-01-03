const db = require("../models");
const Staff = db.staff;
const User = db.user;
const Position = db.position;
const Restaurants = db.restaurant;
const DailyReport = db.dailyReport;
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
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.staff = async function staff(req, res){
  let restaurantid = await User.findOne({
    attributes: ['restaurant_id'],
    where: {
      id: req.userId
    }
  })
  restaurantid = restaurantid?.dataValues?.restaurant_id
  let response;
  if (restaurantid !== undefined && restaurantid !== null){
    response = await Staff.findAll({attributes: ['id','f_name', 'l_name', 'wage','position_id','restaurant_id','salary'], where: {
    restaurant_id: restaurantid
  }})
  }
  else{
    response = await Staff.findAll({attributes: ['id','f_name', 'l_name', 'wage','position_id','restaurant_id','salary']})
  }
  res.status(200).send(response)
};
exports.restaurants = async function restaurants(req, res){
  let response  = await Restaurants.findAll()
  res.status(200).send(response)
};
exports.getUsersNames = async function getUsersNames(req, res){
  let response  = await User.findAll({attributes: ['id','first_name','last_name']})
  res.status(200).send(response)
};

exports.getDashboardData = async function getDashboardData(req, res){
    let restaurantid = await User.findOne({
    attributes: ['restaurant_id'],
    where: {
      id: req.userId
    }
  })
  restaurantid = restaurantid?.dataValues?.restaurant_id
  let monthly;
  if (restaurantid !== undefined && restaurantid !== null){
    monthly = await sequelize.query(`SELECT * FROM public."dailyReports" WHERE report_date > current_date - interval '31' day AND restaurant_id = ${restaurantid};`)
  }
  else{
    monthly = await DailyReport.findAll({attributes: ['id','f_name', 'l_name', 'wage','position_id','restaurant_id','salary']})
  }
  res.status(200).send(monthly)
};

exports.staffAdd = async function staffAdd(req, res){
  Staff.create({
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    bank:req.body.bank,
    dob: req.body.dob,
    sin: req.body.sin,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    restaurant_id: req.body.restaurant_id,
    position_id: req.body.position_id,
    wage: req.body.wage
  })
  .then(function (){
    res.status(200).send("Sucess")
  })
  .catch( function (err) {
  res.status(503).send(err)
})
  
};

exports.reportInfo = async function reportInfo(req, res){
  // first we make it work, then we make it safe. Check if staff restaurant id belongs to searchers staff id
  let response  = await DailyReport.findOne({
    where: {
      id: req.body.id
    }
  }).catch( function (err) {
  res.status(503).send(err)
});
  res.status(200).send(response)
};

exports.getReportByDate = async function getReportByDate(req, res){
  let response  = await DailyReport.findOne({
    attributes: ['id'],
    where: {
      report_date: req.body.date
    }})
  res.status(200).send(response? response : "none")
};

exports.addDaily = async function addDaily(req, res){
  let restaurantid = await User.findOne({
    attributes: ['restaurant_id'],
    where: {
      id: req.userId
    }
  })
  DailyReport.create({
    restaurant_id: restaurantid?.dataValues?.restaurant_id,
    user_id:  req.userId,
    report_date:req.body.reportDate,
    meta_daily:req.body.dailyData
  })
  .then(function (){
    res.status(200).send("Sucess")
  })
  .catch( function (err) {
  res.status(503).send(err)
})
  
};
exports.updateDaily = async function updateDaily(req, res){
  DailyReport.update({
    user_id:  req.userId,
    report_date:req.body.reportDate,
    meta_daily:req.body.dailyData
  },
  {
    where: {
      id: req.body.id
    }
  })
  .then(function (){
    res.status(200).send("Sucess")
  })
  .catch( function (err) {
  res.status(503).send(err)
})
  
};
exports.updateStaff = async function staffUpdate(req, res){
  Staff.update({
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    bank:req.body.bank,
    dob: req.body.dob,
    sin: req.body.sin,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    restaurant_id: req.body.restaurant_id,
    position_id: req.body.position_id,
    wage: req.body.wage
  },
  {
    where: {
      id: req.body.id
    }
  })
  .then( function (){
    res.status(200).send("Sucess")
  })
  .catch( function (err) {
  res.status(503).send(err)
})
  
};
exports.position = async function position(req, res){
  let response  = await Position.findAll()
  res.status(200).send(response)
};
exports.getRecentReports = async function getRecentReports(req, res){
    let restaurantid = await User.findOne({
    attributes: ['restaurant_id'],
    where: {
      id: req.userId
    }
  })
  let response  = await DailyReport.findAll({ limit: 10,order: [['id','DESC']],where:{
    restaurant_id: restaurantid?.dataValues?.restaurant_id
  }})
  res.status(200).send(response)
};

exports.staffInfo = async function staffInfo(req, res){
  // first we make it work, then we make it safe. Check if staff restaurant id belongs to searchers staff id
  let response  = await Staff.findOne({
    where: {
      id: req.body.id
    }
  }).catch( function (err) {
  res.status(503).send(err)
});
  res.status(200).send(response)
};
exports.deleteStaff = async function deleteStaff(req, res){
  // first we make it work, then we make it safe. Check if staff restaurant id belongs to searchers staff id
  let response  = await Staff.destroy({
    where: {
      id: req.body.id
    }
  }).catch( function (err) {
  res.status(503).send(err)
});
  res.status(200).send("Sucess")
};