webpackHotUpdate(0,{

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(240);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(245);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(246);

	var _index6 = _interopRequireDefault(_index5);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(175);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/HBY/code/bloodhound-master/src/components/Title.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/HBY/code/bloodhound-master/src/components/Title.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2(_UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Title = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Title',
	  render: function render() {
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement(
	        'h1',
	        { id: 'bhTitle' },
	        'Bloodhound'
	      ),
	      _react3.default.createElement('hr', null),
	      _react3.default.createElement(
	        'h4',
	        { id: 'slogan' },
	        'search. give. save.'
	      ),
	      _react3.default.createElement(
	        'button',
	        { className: 'titleButtons', id: 'homeButton' },
	        _react3.default.createElement(
	          _reactRouter.Link,
	          { to: '/home' },
	          'Home'
	        )
	      ),
	      _react3.default.createElement(
	        'button',
	        { className: 'titleButtons', id: 'registrationButton' },
	        _react3.default.createElement(
	          _reactRouter.Link,
	          { to: '/registration' },
	          'Registration'
	        )
	      ),
	      _react3.default.createElement(
	        'button',
	        { className: 'titleButtons', id: 'searchButton' },
	        _react3.default.createElement(
	          _reactRouter.Link,
	          { to: '/searchdonors' },
	          'Search Donors'
	        )
	      ),
	      _react3.default.createElement('br', null),
	      this.props.children
	    );
	  }
	}));
	exports.default = Title;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})