"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopPage;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _CountUp = _interopRequireDefault(require("../../organisms/CountUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TopPage() {
  return "\n    <html>\n      <head>\n        <title>ReactSSR</title>\n        <meta charset=\"utf-8\" />\n      </head>\n      <body>\n        <div id=\"app\">\n          ".concat((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_CountUp["default"], null)), "\n        </div>\n        <script src=\"./client.js\"></script>\n      </body>\n    </html>\n  ");
}