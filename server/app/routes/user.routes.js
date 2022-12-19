const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/staff",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.staff
  );
  app.post(
    "/api/test/addStaff",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.staffAdd
  );
  app.get(
    "/api/test/position",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.position
  );
  app.get(
    "/api/test/restaurants",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.restaurants
  );
  app.post(
    "/api/test/staffInfo",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.staffInfo
  );
  app.post(
    "/api/test/deleteStaff",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.deleteStaff
  );
  app.post(
    "/api/test/updateStaff",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.updateStaff
  );
};

