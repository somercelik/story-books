const express = require("express");
const dotenv = require("dotenv");

// Load config
dotenv.config({
    path: "config/config.env"
});

const app = express();

const PORT = process.env.BACKEND_PORT;

app.listen(
    PORT,
    () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    });