'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var removeCommas = exports.removeCommas = function removeCommas(str) {
  var t = '' + str;return t.replace(/,/g, '');
};

var removeNonNumeric = exports.removeNonNumeric = function removeNonNumeric(str) {
  var t = '' + str;return t.replace(/[^0-9.]/g, '');
};
//# sourceMappingURL=helpers.js.map