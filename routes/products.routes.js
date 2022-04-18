//this file holds auth related routes.
const express = require("express");

//create router object.
const router = express.Router();

router.get('/products', function (req, res) {
    res.render('customer/products/all-products');
});

module.exports = router;
