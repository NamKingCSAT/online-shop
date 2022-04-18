//this file holds auth related routes.
const express = require("express");

//create router object.
const router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/products');
});

module.exports = router;
