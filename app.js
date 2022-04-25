const path = require("path");

const express = require("express");
const csrf = require("csurf");
const expressSession = require("express-session");
//where to store session
const createSessionConfig = require("./config/session");
//establish database connection before the web server
const db = require("./data/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
//add error handling middleware
const errorHandlerMiddleware = require("./middlewares/error-handler");
const checkAuthStatusMiddleware = require("./middlewares/check-auth");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/products.routes");
const baseRoutes = require("./routes/base.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

//tell the app that I want to use ejs for rendering my view.
app.set("view engine", "ejs");
//tell the app where the ejs is located, 2nd parameter is for the path.
//__dirname is nodejs global variable
//path.join(__dirname, 2nd para)  2nd parameter value to join to construct a path to the view folder
app.set("views", path.join(__dirname, "views"));

//tell app where to fetch static contents
app.use(express.static("public"));
//only requests end with /products/assets will be served with product-data
app.use("/products/assets", express.static("product-data"));
//have to call urlencoded because this function yields the actual middleware
//we can pass an object to this function with configuration to it
//it is common to see extended set to false to support a regular form submission.
//allow the extraction of data from url request
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
//to protect against csrf attack, the position is not important but have to be before the request hit your route
app.use(csrf());

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

//register routes
app.use(baseRoutes);
app.use(authRoutes);
app.use(productRoutes);
//only request that starts with /admin will make into this route configuration
app.use("/admin", adminRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
