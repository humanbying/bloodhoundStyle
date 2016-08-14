webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(175);

	var _Title = __webpack_require__(238);

	var _Title2 = _interopRequireDefault(_Title);

	var _Registration = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Registration\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Registration2 = _interopRequireDefault(_Registration);

	var _Home = __webpack_require__(383);

	var _Home2 = _interopRequireDefault(_Home);

	var _SearchDonors = __webpack_require__(384);

	var _SearchDonors2 = _interopRequireDefault(_SearchDonors);

	__webpack_require__(385);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _Title2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'registration', component: _Registration2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'home', component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'searchdonors', component: _SearchDonors2.default })
	  )
	), document.getElementById('root'));

/***/ }
])