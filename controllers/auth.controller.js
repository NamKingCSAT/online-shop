const User = require("../models/user.model")

function getSignup(req, res, next) {
  //render a template for the response
  //res object is given to us by express
  /*this render method will do multiple things:
  render a template(take a template, parse it with ejs language,
    replace all the dynamic part with text), once the html code is finished,
    this html code is sent to the visitor for the response
  */
  res.render("customer/auth/signup");
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city);

  await user.signup();

  res.redirect('/login');
}

function getLogin(req, res, next) {
  res.render("customer/auth/login");
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup
};
