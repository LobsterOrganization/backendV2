//require("dotenv").config();
const config = require("config");
const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user.model");

const cookieExtractor = (req) => {
  var jwt = null;

  if (req && req.cookies) {
    jwt = req.cookies["SessionToken"];
  }

  return jwt;
};

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: config.get("Lobster-Project.jwt.privateKey"),
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({
      mail: jwt_payload.mail,
    })
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => done(err, null));
  })
);
