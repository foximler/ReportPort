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
    [authJwt.verifyToken, authJwt.isManager],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/staff",
    [authJwt.verifyToken, authJwt.isManager],
    controller.staff
  );
  app.post(
    "/api/test/addStaff",
    [authJwt.verifyToken, authJwt.isManager],
    controller.staffAdd
  );
  app.get(
    "/api/test/position",
    [authJwt.verifyToken, authJwt.isManager],
    controller.position
  );
  app.get(
    "/api/test/restaurants",
    [authJwt.verifyToken, authJwt.isManager],
    controller.restaurants
  );
  app.post(
    "/api/test/staffInfo",
    [authJwt.verifyToken, authJwt.isManager],
    controller.staffInfo
  );
  app.post(
    "/api/test/reportInfo",
    [authJwt.verifyToken, authJwt.isManager],
    controller.reportInfo
  );
  app.post(
    "/api/test/deleteStaff",
    [authJwt.verifyToken, authJwt.isManager],
    controller.deleteStaff
  );
  app.post(
    "/api/test/updateStaff",
    [authJwt.verifyToken, authJwt.isManager],
    controller.updateStaff
  );
  app.post(
    "/api/test/addDaily",
    [authJwt.verifyToken, authJwt.isManager],
    controller.addDaily
  );
  app.post(
    "/api/test/getReportByDate",
    [authJwt.verifyToken, authJwt.isManager],
    controller.getReportByDate
  );
  app.post(
    "/api/test/updateDaily",
    [authJwt.verifyToken, authJwt.isManager],
    controller.updateDaily
  );
  app.get(
    "/api/test/getRecentReports",
    [authJwt.verifyToken, authJwt.isManager],
    controller.getRecentReports
  );
  app.get(
    "/api/test/getDashboardData",
    [authJwt.verifyToken, authJwt.isManager],
    controller.getDashboardData
  );
  app.get(
    "/api/test/usersNames",
    [authJwt.verifyToken, authJwt.isManager],
    controller.getUsersNames
  );
};

