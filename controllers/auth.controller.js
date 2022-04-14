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

function getLogin(req, res, next) {
  // ...
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
};
