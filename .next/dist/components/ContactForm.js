'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/amiterandole/Documents/current/mypresentations/react-next-codelab/react-next-website/components/ContactForm.js';

var STATES = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

var ContactForm = function (_Component) {
  (0, _inherits3.default)(ContactForm, _Component);

  function ContactForm(props) {
    (0, _classCallCheck3.default)(this, ContactForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactForm.__proto__ || (0, _getPrototypeOf2.default)(ContactForm)).call(this, props));

    _this.isValid = function () {
      var fields = ['firstName', 'lastName', 'phoneNumber', 'address', 'city', 'state', 'zipCode'];
      if (_this.props.email) fields.push('email');
      if (_this.props.question) fields.push('question');

      var errors = {};
      fields.forEach(function (field) {
        var value = trim(_reactDom2.default.findDOMNode(this.refs[field]).value);
        if (!value) {
          errors[field] = 'This field is required';
        }
      }.bind(_this));
      _this.setState({ errors: errors });

      var isValid = true;
      for (var error in errors) {
        isValid = false;
        break;
      }
      return isValid;
    };

    _this.getFormData = function () {
      var data = {
        firstName: _reactDom2.default.findDOMNode(_this.refs.firstName).value,
        lastName: _reactDom2.default.findDOMNode(_this.refs.lastName).value,
        phoneNumber: _reactDom2.default.findDOMNode(_this.refs.phoneNumber).value,
        address: _reactDom2.default.findDOMNode(_this.refs.address).value,
        city: _reactDom2.default.findDOMNode(_this.refs.city).value,
        state: _reactDom2.default.findDOMNode(_this.refs.state).value,
        zipCode: _reactDom2.default.findDOMNode(_this.refs.zipCode).value,
        currentCustomer: _reactDom2.default.findDOMNode(_this.refs.currentCustomerYes).checked
      };
      if (_this.props.email) data.email = _reactDom2.default.findDOMNode(_this.refs.email).value;
      if (_this.props.question) data.question = _reactDom2.default.findDOMNode(_this.refs.question).value;
      return data;
    };

    _this.renderTextInput = function (id, label) {
      return _this.renderField(id, label, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }));
    };

    _this.renderTextarea = function (id, label) {
      return _this.renderField(id, label, _react2.default.createElement('textarea', { className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }));
    };

    _this.renderSelect = function (id, label, values) {
      var options = values.map(function (value, index) {
        return _react2.default.createElement('option', { key: index, value: value, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, value);
      });
      return _this.renderField(id, label, _react2.default.createElement('select', { className: 'form-control', id: id, ref: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, options));
    };

    _this.renderRadioInlines = function (id, label, kwargs) {
      var radios = kwargs.values.map(function (value, index) {
        var defaultChecked = value == kwargs.defaultCheckedValue;
        return _react2.default.createElement('label', { key: index, className: 'radio-inline', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement('input', { type: 'radio', ref: id + value, name: id, value: value, defaultChecked: defaultChecked, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), value);
      });
      return _this.renderField(id, label, radios);
    };

    _this.renderField = function (id, label, field) {
      return _react2.default.createElement('div', { className: $c('form-group', { 'has-error': id in _this.state.errors }), __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('label', { htmlFor: id, className: 'col-sm-4 control-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, label), _react2.default.createElement('div', { className: 'col-sm-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, field));
    };

    _this.state = {
      errors: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ContactForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'form-horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.renderTextInput('firstName', 'First Name'), this.renderTextInput('lastName', 'Last Name'), this.renderTextInput('phoneNumber', 'Phone number'), this.props.email && this.renderTextInput('email', 'Email'), this.props.question && this.renderTextarea('question', 'Question'), this.renderTextInput('address', 'Address'), this.renderTextInput('city', 'City'), this.renderSelect('state', 'State', STATES), this.renderTextInput('zipCode', 'Zip Code'), this.renderRadioInlines('currentCustomer', 'Are you currently a ' + this.props.company + ' Customer?', {
        values: ['Yes', 'No'],
        defaultCheckedValue: 'No'
      }));
    }
  }]);

  return ContactForm;
}(_react.Component);

// Utils

ContactForm.defaultProps = {
  email: true,
  question: false
};
var trim = function () {
  var TRIM_RE = /^\s+|\s+$/g;
  return function trim(string) {
    return string.replace(TRIM_RE, '');
  };
}();

function $c(staticClassName, conditionalClassNames) {
  var classNames = [];
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName;
  } else {
    classNames.push(staticClassName);
  }
  for (var className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className);
    }
  }
  return classNames.join(' ');
}

exports.default = ContactForm;