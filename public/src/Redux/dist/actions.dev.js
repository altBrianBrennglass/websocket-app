"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoOnRegister = exports["default"] = void 0;

var _constants = require("./constants");

var infoOnRegister = function infoOnRegister(userData) {
  return {
    type: _constants.STOREONREGISTER,
    userData: userData
  };
};

exports.infoOnRegister = infoOnRegister;

var savePhoto = function savePhoto(photoEnc) {
  return {
    type: _constants.SAVEPHOTO,
    photoEnc: photoEnc
  };
};

var _default = savePhoto;
exports["default"] = _default;