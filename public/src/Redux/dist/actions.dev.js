"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoOnRegister = void 0;

var _constants = require("./constants");

var infoOnRegister = function infoOnRegister(userData) {
  return {
    type: _constants.STOREONREGISTER,
    userData: userData
  };
};

exports.infoOnRegister = infoOnRegister;