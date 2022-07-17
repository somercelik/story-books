const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            console.log(accessToken);
            console.log(refreshToken);
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    })
}