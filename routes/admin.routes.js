//this file holds auth related routes.
const express = require("express");

const adminController = require("../controllers/admin.controller");

//create router object.
const router = express.Router();

router.get("/admin/products", adminController.getProducts);

router.get("/admin/products/new", adminController.getNewProduct);

module.exports = router;
