const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const {
    engine
} = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");


// Load config
dotenv.config({
    path: "config/config.env"
});

connectDB();

const app = express();

// Passport config
require("./config/passport")(passport)

// Body parser
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Handlebars
app.engine(".hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: mongoose.connection._connectionString,
        mongoOptions: mongoose.connection._connectionOptions
    })
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

const PORT = process.env.BACKEND_PORT;

app.listen(
    PORT,
    () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    });