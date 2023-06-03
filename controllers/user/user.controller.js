const User = require("../../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

const jwt = require("jsonwebtoken");
const { hashSync, compareSync } = require("bcrypt");
const config = require("config");
const privateKey = config.get("Lobster-Project.jwt.privateKey");

var controller = {
  /**
   * Registration function
   */
  registration: async (req, res, next) => {
    try {
      const { userFirstName, userLastName, userEmail, userPassword } = req.body;

      if (userFirstName.length < 2 || userLastName.length < 2) {
        res.status(409).send("userLastName ou userFirstName invalid");
      } else if (userPassword.length < 8) {
        res.status(409).send("Password must be at least 8 characters");
      } else {
        User.findOne({ userEmail: userEmail }).then((user) => {
          if (!user) {
            let user = User.create({
              userFirstName: userFirstName,
              userLastName: userLastName,
              userEmail: userEmail,
              userPassword: hashSync(userPassword, 10),
            });
            const payload = {
              userEmail: userEmail,
              id: user._id,
            };
            const token = jwt.sign(payload, privateKey, { expiresIn: "1d" });
            res.json(token);
          } else {
            res.status(409).send("userEmail already exists");
          }
        });
      }
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Login function with jwt
   */
  login: async (req, res, next) => {
    try {
      const { userEmail, userPassword } = req.body;

      await User.findOne({ userEmail: req.body.userEmail }).then((user) => {
        if (!user) {
          res.status(400).send("Login incorrect");
        }

        if (!compareSync(req.body.userPassword, user.userPassword)) {
          res.status(400).send("Login incorrects");
        }

        const payload = {
          userEmail: user.userEmail,
          userLastName: user.userLastName,
        };

        const token = jwt.sign(payload, privateKey, { expiresIn: "1d" });

        // Store token in cookie
        const cookieExpiry = config.get("Lobster-Project.cookie.COOKIE_EXPIRY");
        res.cookie("SessionToken", token, {
          httpOnly: true,
          domain : "/",
          maxAge: cookieExpiry,
          secure: true,
        }).status(200).json({ user: user._id, name: user.userEmail });
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Logout function
   */
  logout: async (req, res, next) => {
    res.cookie("SessionToken", "", { maxAge: 1 });
    res.redirect("/");
  },

  /**
   * Get all users
   */
  getUsers: async (req, res, next) => {
    try {
      let users = await User.find().select("-userPassword");
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  /**
   * Get user data
   */
  getUser: async (req, res, next) => {
    try {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknow : " + req.params.id);
      }

      User.findById(req.params.id, (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log("ID unknown : " + err);
        }
      }).select("-userPassword");
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
};

module.exports = controller;
