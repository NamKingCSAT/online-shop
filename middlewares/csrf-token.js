//req, res, next are the 3 parameters that ALL middleware will receive because Express will
//call these middleware for us
function addCsrfToken(req, res, next) {
    //A feature of express is to allow setting of variables that are exposed to All VIEWS automatically
    //with the help of locals property. On locals, I can add my own value pair like token.
    //the csrfToken() is available thanks to the middleware added to app.js
    res.locals.csrfToken = req.csrfToken(); //locals variables available in all views
    //next() is to ensure that after this middleware is excecuted, the request is able to reach
    //the enxt middleware or route handler
    next();
}

module.exports = addCsrfToken;