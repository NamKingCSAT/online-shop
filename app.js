const path = require("path");

const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

//tell the app that I want to use ejs for rendering my view.
app.set("view engine", "ejs");
//tell the app where the ejs is located, 2nd parameter is for the path.
//__dirname is nodejs global variable
//path.join(__dirname, 2nd para)  2nd parameter value to join to construct a path to the view folder
app.set("views", path.join(__dirname, "views"));

//register routes
app.use(authRoutes);

app.listen(3000);
