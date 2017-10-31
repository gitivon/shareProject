"use strict";var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _getIterator2 = require("babel-runtime/core-js/get-iterator");var _getIterator3 = _interopRequireDefault(_getIterator2);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _promise = require("babel-runtime/core-js/promise");var _promise2 = _interopRequireDefault(_promise);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var arr = [1, 2, 3];
var timeout = function timeout(timer) {
  return new _promise2.default(function (resolve) {
    setTimeout(resolve, timer);
  });
};

var asyncLog = function asyncLog(i) {
  return timeout(1000).then(function () {
    return i;
  });
};

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_iteratorNormalCompletion = true;_didIteratorError = false;_iteratorError = undefined;_context.prev = 3;_iterator = (0, _getIterator3.default)(




          arr);case 5:if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {_context.next = 15;break;}i = _step.value;_context.t0 =
          console;_context.next = 10;return asyncLog(i);case 10:_context.t1 = _context.sent;_context.t0.log.call(_context.t0, _context.t1);case 12:_iteratorNormalCompletion = true;_context.next = 5;break;case 15:_context.next = 21;break;case 17:_context.prev = 17;_context.t2 = _context["catch"](3);_didIteratorError = true;_iteratorError = _context.t2;case 21:_context.prev = 21;_context.prev = 22;if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}case 24:_context.prev = 24;if (!_didIteratorError) {_context.next = 27;break;}throw _iteratorError;case 27:return _context.finish(24);case 28:return _context.finish(21);case 29:case "end":return _context.stop();}}}, _callee, undefined, [[3, 17, 21, 29], [22,, 24, 28]]);}))();
