const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

//register routes
app.use(authRoutes);

app.listen(3000);
