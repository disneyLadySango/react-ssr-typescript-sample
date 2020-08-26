"use strict";

var _express = _interopRequireDefault(require("express"));

var _TopPage = _interopRequireDefault(require("../components/pages/TopPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(3000);
app.use(_express["default"]["static"]('assets')); // Getで飛んできたらssrを返却

app.get('/', function (_, res) {
  var response = (0, _TopPage["default"])();
  res.send(response);
});