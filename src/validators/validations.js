const mongoose = require("mongoose");

const isValidBody = function (value) {
  if (typeof value == "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "Number" && value.trim().length === 0) return false;
  return true;
};

const isValidPhone = function (value) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(value);
};

const isValidEmail = function (value) {
  const regex = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/;
  return regex.test(value);
};

const isValidPin = function (value) {
  const regex = /^[0-9]{6}$/;
  return regex.test(value);
};

const isValidObjectId = function (value) {
  return mongoose.Types.ObjectId.isValid(value);
};

const isValidPassword = function (password) {
  const regex = /^[0-9a-zA-Z!@#$%&*]{8,15}$/;
  return regex.test(password);
};

const isValidString = function (value) {
  const regex = /^[A-Za-z0-9 ]{2,}$/;
  return regex.test(value);
};

const isValidEnum = function (value) {
  return ["Mr", "Mrs", "Miss"].indexOf(value) !== -1;
};

module.exports = {
  isValidBody,
  isValidEmail,
  isValidObjectId,
  isValidPassword,
  isValidPhone,
  isValidPin,
  isValidString,
  isValidEnum,
};
