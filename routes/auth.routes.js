//this file holds auth related routes.
const express = require("express");

const authController = require("../controllers/auth.controller");

//create router object.
const router = express.Router();

//set up routes. All routes handlers which are defined with help from express router, take middleware functions as argument after the paths parameter
router.get("/signup", authController.getSignup);

router.post("/signup", authController.signup);

router.get("/login", authController.getLogin);

//module export tell nodejs which object, functions are defined in this file should be exposed to other files
module.exports = router;
