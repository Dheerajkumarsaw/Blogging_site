const authorModel = require("../models/authorModel");
const validation = require("../validators/validations");
const jwt = require("jsonwebtoken");

const login = async function (req, res) {
  try {
    const requestBody = req.body;

    /** Input body validation */
    if (Object.keys(requestBody).length == 0)
      return res
        .status(400)
        .send({ status: false, message: "Please Enter Email and password" });

    /** Object Destructuring */
    const { email, password } = requestBody;
    if (!validation.isValidEmail(email))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter Email or Password" });

    if (!validation.password(password))
      return res
        .status(400)
        .send({ status: false, message: "Please enter password" });

    const isAuthorExist = await authorModel.findOne(requestBody);
    if (!isAuthorExist)
      return res
        .status(400)
        .send({ status: false, message: " Register First" });

    const token = jwt.sign(
      {
        userId: author._id.toString(),
        group: "group-5",
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 10 * 60 * 60,
      },
      process.env.SECRET_KEY
    );
    res.setHeader("x-api-key", token);
    res
      .status(200)
      .send({ status: true, message: "Successfully LoggedIn", token: token });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
