webpackHotUpdate(0,{

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

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
	  _component: {},
	  _component2: {}
	};

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: "/Users/HBY/code/bloodhound-master/src/components/SearchDonors.js",
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: "/Users/HBY/code/bloodhound-master/src/components/SearchDonors.js",
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHBYCodeBloodhoundMasterNode_modulesReactTransformHmrLibIndexJs2(_UsersHBYCodeBloodhoundMasterNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var SearchDonors = _wrapComponent("_component")(_react3.default.createClass({
	  displayName: "SearchDonors",

	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },

	  DeleteMe: function DeleteMe(id) {

	    var url = "/bloodhounds/" + id;
	    fetch(url, {
	      method: "DELETE",
	      headers: { "Content-type": "application/json" }

	    }).then(function (res) {
	      return res.json();
	    })
	    /*.then(data => {
	       this.setState({data:data});
	    })*/
	    //hi
	    .catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe0: function clickedMe0(event) {
	    var _this = this;

	    var url = "/bloodhounds/" + btn0.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe1: function clickedMe1(event) {
	    var _this2 = this;

	    var url = "/bloodhounds/" + btn1.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this2.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe2: function clickedMe2(event) {
	    var _this3 = this;

	    var url = "/bloodhounds/" + btn2.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this3.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe3: function clickedMe3(event) {
	    var _this4 = this;

	    var url = "/bloodhounds/" + btn3.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this4.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe4: function clickedMe4(event) {
	    var _this5 = this;

	    var url = "/bloodhounds/" + btn4.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this5.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe5: function clickedMe5(event) {
	    var _this6 = this;

	    var url = "/bloodhounds/" + btn5.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this6.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe6: function clickedMe6(event) {
	    var _this7 = this;

	    var url = "/bloodhounds/" + btn6.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this7.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },

	  clickedMe7: function clickedMe7(event) {
	    var _this8 = this;

	    var url = "/bloodhounds/" + btn7.value;
	    fetch(url, {
	      method: "GET",
	      headers: {
	        "Content-type": "application/json"
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (data) {

	      _this8.setState({ data: data });
	    }).catch(function (err) {
	      return console.log('err', 'err');
	    });
	  },
	  render: function render() {
	    console.log('in donors page');
	    return _react3.default.createElement(
	      "div",
	      { className: "dropdown" },
	      _react3.default.createElement(
	        "button",
	        { className: "dropbtn" },
	        "Blood type"
	      ),
	      _react3.default.createElement(
	        "div",
	        { className: "dropdown-content" },
	        _react3.default.createElement(
	          "div",
	          null,
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe0, id: "btn0", value: "O+" },
	            "O+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe1, id: "btn1", value: "O-" },
	            "O-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe2, id: "btn2", value: "A+" },
	            "A+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe3, id: "btn3", value: "A-" },
	            "A-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe4, id: "btn4", value: "B+" },
	            "B+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe5, id: "btn5", value: "B-" },
	            "B-"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe6, id: "btn6", value: "AB+" },
	            "AB+"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: this.clickedMe7, id: "btn7", value: "AB-" },
	            "AB-"
	          )
	        )
	      ),
	      _react3.default.createElement(DataDisplay, { data: this.state.data, "delete": this.DeleteMe })
	    );
	  }
	}));

	var DataDisplay = _wrapComponent("_component2")(_react3.default.createClass({
	  displayName: "DataDisplay",


	  DeleteMe: function DeleteMe(event) {
	    var id = event.target.value;
	    this.props.delete(id);
	  },

	  ModifyMe: function ModifyMe() {
	    console.log("delete me");
	  },
	  render: function render() {
	    var _this9 = this;

	    var person = this.props.data.map(function (info) {
	      return _react3.default.createElement(
	        "tr",
	        { key: info.id },
	        _react3.default.createElement(
	          "td",
	          null,
	          info.fname + ' ' + info.lname
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.bloodtype
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.age
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.address
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.state
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.country
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          info.phonenumber
	        ),
	        _react3.default.createElement(
	          "td",
	          null,
	          _react3.default.createElement(
	            "button",
	            { value: info.id, onClick: _this9.DeleteMe },
	            "Delete"
	          ),
	          _react3.default.createElement(
	            "button",
	            { onClick: _this9.ModifyMe },
	            "Modify"
	          )
	        )
	      );
	    });
	    return _react3.default.createElement(
	      "table",
	      { className: "table table-bordered" },
	      _react3.default.createElement(
	        "thead",
	        null,
	        _react3.default.createElement(
	          "tr",
	          null,
	          _react3.default.createElement(
	            "th",
	            null,
	            "Name"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Bloodtype"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Age"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Address"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "State"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Country"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Phone Number"
	          ),
	          _react3.default.createElement(
	            "th",
	            null,
	            "Delete/Modify"
	          )
	        )
	      ),
	      _react3.default.createElement(
	        "tbody",
	        null,
	        person
	      )
	    );
	  }
	}));

	exports.default = SearchDonors;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239)(module)))

/***/ }

})