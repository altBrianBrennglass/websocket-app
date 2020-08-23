"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useMessageGrabber = function useMessageGrabber() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var getMessage = function getMessage(name, value, registerOrLogin) {
    var response, res;
    return regeneratorRuntime.async(function getMessage$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("/loginRegisterEvaluate/".concat(name, "/?").concat(name, "=").concat(value)));

          case 3:
            res = _context.sent;
            response = Object.values(res.data)[0];
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", setMessage(['connection error', 'failure']));

          case 10:
            _context.t1 = name;
            _context.next = _context.t1 === 'email' ? 13 : _context.t1 === 'username' ? 15 : 17;
            break;

          case 13:
            if (response) registerOrLogin === 'Login' ? setMessage(['email recongized', 'success']) : setMessage(['email taken', 'failure']);else registerOrLogin === 'Register' ? setMessage(['email available', 'succes']) : setMessage(['email not recognized', 'failure']);
            return _context.abrupt("break", 19);

          case 15:
            if (response) registerOrLogin === 'Login' ? setMessage(['username recongized', 'success']) : setMessage(['username taken', 'failure']);else registerOrLogin === 'Register' ? setMessage(['username available', 'success']) : setMessage(['username not recognized', 'failure']);
            return _context.abrupt("break", 19);

          case 17:
            setMessage(['connection error', 'failure']);
            return _context.abrupt("break", 19);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };

  var toggleMessage = function toggleMessage(registerOrLogin) {
    if (message[0] !== '' && message[0] !== 'connection error') {
      if (registerOrLogin === 'Login') {
        if (message[0] === 'username taken') setMessage(['username recognized', 'failure']);else setMessage(['username not recongized', 'success']);
      } else {
        if (message[0] === 'username recongized') setMessage(['username taken', 'failure']);else setMessage(['username available', 'success']);
      }
    }
  };

  return [message, getMessage, toggleMessage];
};

var _default = useMessageGrabber;
exports["default"] = _default;