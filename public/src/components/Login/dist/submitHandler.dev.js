"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _actions = require("../../Redux/actions");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var submitHandler = function submitHandler(loginOrRegister, email, username, password) {
  var dispatch = (0, _reactRedux.useDispatch)();

  if (loginOrRegister === 'Register') {
    _axios["default"].post('/Register', {
      username: username,
      email: email,
      password: password
    }).then(function (res) {
      return dispatch((0, _actions.infoOnRegister)(res.data));
    })["catch"](function (err) {
      return console.log(err);
    });
  } else {//Deals with Login
  }
};

var _default = submitHandler;
exports["default"] = _default;