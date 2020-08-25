"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.STOREONREGISTER:
      var _action$userData = action.userData,
          _id = _action$userData._id,
          username = _action$userData.username,
          bioPage = _action$userData.bioPage;
      return Object.assign({}, state, {
        userData: {
          _id: _id,
          username: username
        }
      }, {
        activePage: {
          bioPage: bioPage
        }
      });

    case _constants.SAVEPHOTO:
      return Object.assign({}, state, {
        photoEnc: action.photoEnc
      });

    default:
      console.log('default');
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;