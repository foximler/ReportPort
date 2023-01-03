const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
const User = db.user;
const Franchise = db.franchise
const Restaurant = db.restaurant
const Area = db.area
const Position = db.position
const Staff = db.staff
// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  //console.log("Drop and re-sync db.");
  //initial();
});

app.use(express.static("public"));
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/staff.routes')(app);
app.get('*', function (request, response){
  response.sendFile('index.html',{ root: './public/' })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  await Franchise.create({
   name: "T"
  })
  await Restaurant.create({
   name: "T",
   address: "GP",
   franchise_id: 1
  })
  await Role.create({
    id: 1,
    name: "user"
  });

  await Role.create({
    id: 2,
    name: "employee"
  });

  await Role.create({
    id: 3,
    name: "manager"
  });
 
  await Role.create({
    id: 4,
    name: "owner"
  });
  await User.create({
    id:1,
    first_name: "Fox",
    last_name: "Imler",
    email: "",
    password: "",
  }).then(user => {
    user.setRoles([4])
  })
  await User.create({
    id:2,
    first_name: "Fox",
    last_name: "Imler",
    email: "",
    password: "",
    restaurant_id:1
  }).then(user => {
    user.setRoles([3])
  })

  Area.create({
    id: 1,
    name: "Kitchen"
  })
  Area.create({
    id: 2,
    name: "Expo"
  })
  Area.create({
    id: 3,
    name: "Front"
  })

  Position.create({
    name: "Server",
    area: 3
  })
  Position.create({
    name: "Kitchen",
    area: 1
  })
  Position.create({
    name: "Dishwasher",
    area: 1
  })
  Position.create({
    name: "Expo",
    area: 2
  })
  Position.create({
    name: "Host",
    area: 3
  })

  Staff.create({
    f_name: "Fox",
    l_name: "Imler",
    sin: "",
    dob: "2022-12-04",
    bank: {"bank_name": "BMO", "account_number": "123123", "transit_number": "001", "institution_number": "123123"},
    address: {"zip": "T6j5v1", "city": "SexyTown", "address": "Addr", "province": "AB", "address_2": "Addr"},
    email: "",
    phone: "",
    restaurant_id: 1,
    position_id: 1,
    wage: 22
  })



}