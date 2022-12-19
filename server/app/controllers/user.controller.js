const db = require("../models");
const config = require("../config/auth.config");
const Staff = db.staff;
const Position = db.position;
const Restaurants = db.restaurant;
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
  let response = await Staff.findAll({attributes: ['id','f_name', 'l_name', 'wage','position_id','restaurant_id','salary']})
  res.status(200).send(response)
};
exports.restaurants = async function restaurants(req, res){
  let response  = await Restaurants.findAll()
  res.status(200).send(response)
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