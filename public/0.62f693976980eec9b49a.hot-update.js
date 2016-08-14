webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRouter = __webpack_require__(175);

	var _Title = __webpack_require__(238);

	var _Title2 = _interopRequireDefault(_Title);

	var _Registration = __webpack_require__(382);

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

/***/ },

/***/ 382:
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
	  _component: {}
	};

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/HBY/code/bloodhound-master/src/components/Registration.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/HBY/code/bloodhound-master/src/components/Registration.js',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2(_UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Registration = _wrapComponent('_component')(_react3.default.createClass({
	  displayName: 'Registration',

	  getInitialState: function getInitialState() {
	    return {
	      fname: '',
	      lname: '',
	      bloodtype: '',
	      age: '',
	      address: '',
	      state: '',
	      country: '',
	      phonenumber: ''
	    };
	  },

	  onInputChange: function onInputChange(event) {
	    this.setState({ fname: event.target.value });
	  },
	  onInputChangeLast: function onInputChangeLast(event) {
	    this.setState({ lname: event.target.value });
	  },
	  onInputChangeBloodType: function onInputChangeBloodType(event) {
	    this.setState({ bloodtype: event.target.value });
	  },
	  onInputChangeAge: function onInputChangeAge(event) {
	    this.setState({ age: event.target.value });
	  },
	  onInputChangeAddress: function onInputChangeAddress(event) {
	    this.setState({ address: event.target.value });
	  },
	  onInputChangeState: function onInputChangeState(event) {
	    this.setState({ state: event.target.value });
	  },
	  onInputChangeCountry: function onInputChangeCountry(event) {
	    this.setState({ country: event.target.value });
	  },
	  onInputChangePhone: function onInputChangePhone(event) {
	    this.setState({ phonenumber: event.target.value });
	  },
	  addDonor: function addDonor() {
	    var url = "/bloodhounds/";
	    fetch(url, {
	      method: "POST",
	      headers: { "Content-type": "application/json" },
	      body: JSON.stringify(this.state)
	    });
	    console.log("this.state:", this.state);
	  },

	  render: function render() {
	    console.log('Registration');
	    return _react3.default.createElement(
	      'div',
	      null,
	      _react3.default.createElement('input', { type: 'text', value: this.state.fname, placeholder: 'First Name', onChange: this.onInputChange }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.lname, placeholder: 'Last Name', onChange: this.onInputChangeLast }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.bloodtype, placeholder: 'Blood Type', onChange: this.onInputChangeBloodType }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.age, placeholder: 'Age', onChange: this.onInputChangeAge }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.address, placeholder: 'Address', onChange: this.onInputChangeAddress }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.state, placeholder: 'State', onChange: this.onInputChangeState }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.country, placeholder: 'Country', onChange: this.onInputChangeCountry }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement('input', { type: 'text', value: this.state.phonenumber, placeholder: 'Phone Number', onChange: this.onInputChangePhone }),
	      _react3.default.createElement('br', null),
	      _react3.default.createElement(
	        'button',
	        { className: 'btn btn-success btn-sm', onClick: this.addDonor },
	        'submit'
	      )
	    );
	  }
	}));

	exports.default = Registration;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})