const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel");
const validation = require("../validators/validations");

// ============================   Register Author   ================================
const createAuthor = async function (req, res) {
  try {
    const requestBody = req.body;

    /** Input Body validation */
    if (Object.keys(requestBody).length == 0)
      return res.status(400).send({
        status: false,
        message: "Invalid Request Please Enter Author Details",
      });

    /**  Object Destructuring */
    const { firstName, lastName, title, email, password } = requestBody;

    if (!validation.isValidString(firstName))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter First Name" });

    if (!validation.isValidString(lastName))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter Last Name" });

    if (!validation.isValidString(title))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter Title" });

    if (!validation.isValidEmail(email))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter valid Email" });

    // Password validation
    if (!validation.isValidPass(password))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter Your Password" });

    /** unique validation of the author */
    const isUniqueAuthor = await authorModel.findOne({ email: email });
    if (isUniqueAuthor)
      return res.status(400).send({
        status: false,
        message: `Use different email or password`,
      });

    const createdAuthor = await authorModel.create(requestBody);
    res.status(201).send({
      status: true,
      message: "Author successfully Registered",
      data: createdAuthor,
    });
  } catch (err) {
    res.status(500).send({ status: false, Error: err.message });
  }
};

module.exports = { createAuthor };
