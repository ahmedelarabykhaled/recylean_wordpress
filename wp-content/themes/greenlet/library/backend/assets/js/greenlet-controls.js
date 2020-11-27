(function (React$1) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var $ = jQuery;
  function debounce(callback, wait) {
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var timeout = null;
    return function () {
      var _arguments = arguments,
          _this = this;

      var callNow = immediate && !timeout;

      var next = function next() {
        return callback.apply(_this, _arguments);
      };

      clearTimeout(timeout);
      timeout = setTimeout(next, wait);

      if (callNow) {
        next();
      }
    };
  }
  function arrayMoveMutate(array, from, to) {
    var startIndex = from < 0 ? array.length + from : from;

    if (startIndex >= 0 && startIndex < array.length) {
      var endIndex = to < 0 ? array.length + to : to;

      var _array$splice = array.splice(from, 1),
          _array$splice2 = _slicedToArray(_array$splice, 1),
          item = _array$splice2[0];

      array.splice(endIndex, 0, item);
    }
  }
  function clone(o) {
    // If Date or Proto disabling is needed, use: https://github.com/davidmarkclements/rfdc
    var out, val, key;

    if (_typeof(o) !== "object" || o === null) {
      return o;
    }

    out = Array.isArray(o) ? [] : {};

    for (key in o) {
      val = o[key];
      out[key] = clone(val);
    }

    return out;
  }

  var popupStyles = ".cw-popup {\n  position: relative; }\n  .cw-popup.shown {\n    z-index: 1; }\n\n.cw-popup-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.cw-popup-content {\n  float: left;\n  position: relative;\n  margin: 12px 0 18px;\n  background: #fff;\n  box-sizing: border-box;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);\n  border-radius: 2px; }\n\n.cw-popup-arrow {\n  position: absolute;\n  bottom: 100%;\n  transform: translateX(-7px); }\n  .cw-popup-arrow:before, .cw-popup-arrow:after {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    width: 0;\n    height: 0;\n    border: 8px solid transparent;\n    border-bottom-color: #999; }\n  .cw-popup-arrow:after {\n    border: 7px solid transparent;\n    border-bottom-color: #fff;\n    left: 1px; }\n";

  var styles = ".cover-layout [tabindex]:not([tabindex='-1']):focus {\n  outline: 1px auto #035fcc; }\n\n.cover-layout .row {\n  margin-left: -12px;\n  margin-right: -12px; }\n\n.cover-layout .row-title {\n  background: #fff;\n  padding: 8px 10px;\n  border-left: 2px solid transparent;\n  transition: all .15s ease-in-out, border-color .15s ease-in-out, background .15s ease-in-out;\n  box-shadow: 0 0 0 1px #ddd;\n  position: relative;\n  cursor: pointer; }\n\n.cover-layout .row-content {\n  padding: 0 12px;\n  border-bottom: 1px solid #ddd;\n  max-height: 0;\n  overflow-y: auto;\n  box-sizing: border-box;\n  transition: .5s all;\n  opacity: 0.2; }\n\n.cover-layout .expanded .row-content {\n  padding: 8px 12px 14px;\n  max-height: 500px;\n  opacity: 1; }\n\n.cover-layout .add-button {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  margin: auto;\n  padding: 2px;\n  border: 1px solid #ccc;\n  cursor: pointer; }\n\n.cover-layout .dashicons {\n  font-size: 14px;\n  width: auto;\n  height: auto;\n  vertical-align: text-top; }\n\n.cover-layout .add-wrap {\n  padding: 6px;\n  text-align: center; }\n  .cover-layout .add-wrap .add-button {\n    display: block; }\n\n.cover-layout .toggler {\n  float: right;\n  background: none;\n  border: none;\n  color: #999;\n  padding: 0;\n  height: 18px;\n  transition: .2s transform; }\n  .cover-layout .toggler .dashicons {\n    line-height: 18px; }\n\n.cover-layout .row.expanded .toggler {\n  transform: rotateZ(-180deg); }\n\n.cover-layout .layout-control {\n  margin-bottom: 12px;\n  align-items: center; }\n  .cover-layout .layout-control .title {\n    display: block;\n    margin-bottom: 5px; }\n  .cover-layout .layout-control .delete {\n    color: #a00;\n    width: 100%;\n    text-align: left;\n    border: none;\n    padding: 0;\n    margin-top: 10px;\n    cursor: pointer; }\n    .cover-layout .layout-control .delete .dashicons {\n      float: right; }\n  .cover-layout .layout-control-items {\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);\n    border-radius: 3px;\n    background: #fff; }\n\n.cover-layout .cols-title {\n  padding: 5px; }\n\n.cover-layout .cover-layout-col {\n  min-height: 30px;\n  border-top: 1px solid #eee; }\n  .cover-layout .cover-layout-col .add-button {\n    background: #7cb342;\n    color: #fff;\n    border-color: transparent;\n    margin-bottom: 5px; }\n\n.cover-layout .col-name, .cover-layout .col-items {\n  padding: 5px 5px 0;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cover-layout .col-name {\n  border-right: 1px solid #f9f9f9; }\n\n.cover-layout .cw-popup {\n  display: inline-block;\n  max-width: 20px; }\n\n.cover-layout .layout-item {\n  border-color: transparent;\n  background: none;\n  padding: 10px 20px;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  color: #0173aa; }\n\n.cover-layout .open.col-item {\n  margin-right: 0;\n  width: 100%; }\n\n.cover-layout .open > .item-id {\n  width: calc( 100% - 20px); }\n\n.cover-layout .open .item-x {\n  display: inline-block; }\n\n.cover-layout .item-props {\n  background: #e6f1da;\n  border: 1px solid #7cb342; }\n  .cover-layout .item-props .item-prop {\n    display: flex;\n    margin-bottom: 5px; }\n    .cover-layout .item-props .item-prop.hidden {\n      display: none; }\n  .cover-layout .item-props .prop-title {\n    width: 25%;\n    padding-top: 3px; }\n  .cover-layout .item-props input.prop-control {\n    width: 75%;\n    min-height: 26px;\n    height: 26px;\n    font-size: 13px; }\n\n.cover-layout select {\n  margin: 0; }\n\n.cover-layout .advanced {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: 0.5s all; }\n  .cover-layout .advanced.open {\n    max-height: 500px; }\n\n.cover-layout .advanced-toggle {\n  text-align: right;\n  position: relative; }\n  .cover-layout .advanced-toggle span {\n    padding-right: 5px; }\n  .cover-layout .advanced-toggle .check {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 110px;\n    height: 22px;\n    background: none;\n    margin: 0;\n    box-shadow: none; }\n    .cover-layout .advanced-toggle .check:checked::before {\n      content: ''; }\n    .cover-layout .advanced-toggle .check:focus {\n      box-shadow: 0 0 0 1px #007cba; }\n\n.cover-layout .expandable {\n  opacity: 0;\n  max-height: 0;\n  max-width: 0;\n  overflow: hidden;\n  transition: .2s all;\n  padding: 0 5px; }\n\n.cover-layout .open > .expandable {\n  opacity: 1;\n  overflow: auto;\n  max-height: 1000px;\n  max-width: 100%;\n  padding: 5px 5px 0 5px; }\n\n.cover-layout .select-search__input {\n  height: 26px;\n  font-size: 13px; }\n\n.cover-layout .select-search__row {\n  margin: 0; }\n\n.cover-layout .select-search__option {\n  height: 24px;\n  line-height: 24px;\n  font-size: 13px; }\n\n/* Sortable Cover Column Items */\n.gl-sort-clone {\n  z-index: 999500; }\n\n.gl-col-item {\n  margin-right: 10px;\n  margin-bottom: 5px;\n  display: inline-block; }\n  .gl-col-item .item-id {\n    display: inline-flex;\n    background: #7cb342;\n    color: #fff;\n    border: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    border-radius: 3px; }\n    .gl-col-item .item-id span {\n      padding: 3px 6px 3px 0; }\n    .gl-col-item .item-id .drag-handle {\n      cursor: move;\n      padding-left: 6px; }\n  .gl-col-item .item-x {\n    width: 20px;\n    background: #fff;\n    border: 1px solid #7cb342;\n    border-left: none;\n    padding: 2px 0;\n    color: #D84315;\n    cursor: pointer;\n    box-sizing: border-box;\n    text-align: center;\n    display: none; }\n  .gl-col-item.gl-sort-clone .item-props {\n    display: none; }\n\n.gl-ext-link {\n  margin-bottom: 1px; }\n  .gl-ext-link a {\n    padding: 10px 10px 11px 14px;\n    background: #fff;\n    border-left: 4px solid #fff;\n    transition: .15s color ease-in-out, .15s background-color ease-in-out, .15s border-color ease-in-out;\n    box-shadow: 0 0 0 1px #7cb342;\n    display: block;\n    font-size: 14px;\n    font-weight: 600;\n    text-decoration: none;\n    position: relative;\n    line-height: 1.55; }\n    .gl-ext-link a:hover, .gl-ext-link a:focus {\n      background: #f3f3f5;\n      border-left-color: #0073aa; }\n      .gl-ext-link a:hover:after, .gl-ext-link a:focus:after {\n        color: #0073aa; }\n    .gl-ext-link a:after {\n      content: '\\f345';\n      font: normal 20px/1 dashicons;\n      color: #a0a5aa;\n      position: absolute;\n      right: 10px;\n      top: calc(50% - 10px);\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale; }\n  .gl-ext-link.control {\n    width: 100%;\n    float: left;\n    clear: both;\n    margin-top: 12px;\n    margin-bottom: 12px; }\n    .gl-ext-link.control a {\n      border-left-width: 2px;\n      padding: 6px 10px;\n      font-size: 13px;\n      font-weight: 500; }\n      .gl-ext-link.control a:after {\n        content: \"\\f504\";\n        font: normal 16px/1 dashicons;\n        top: calc(50% - 8px); }\n";

  $(window).on('load', function () {
    $('html').addClass('window-loaded');
  });
  var style = document.createElement('style');
  style.id = 'greenlet-controls';
  style.innerHTML = "".concat(popupStyles, " ").concat(styles);
  document.body.appendChild(style);

  var insertExtLinks = function insertExtLinks() {
    if (['1', 'true', true].includes(glControlData.ext)) return;
    var items = [{
      id: 'accordion-section-title_tagline',
      place: 'before',
      type: 'section',
      tagName: 'li'
    }, {
      id: 'sub-accordion-section-blog_extra',
      place: 'append',
      type: 'control',
      tagName: 'li'
    }, {
      id: 'customize-control-post_list_layout',
      place: 'append',
      type: 'control'
    }, {
      id: 'customize-control-css_framework',
      place: 'append',
      type: 'control'
    }];
    var extUrl = 'https://greenletwp.com/pro';
    var markUp = "<a href=\"".concat(extUrl, "\" target=\"_blank\"><span>").concat(glControlData.extText, "</span></a>");
    items.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (null === el) return;
      var link = document.createElement(item.tagName || 'div');
      link.classList.add('gl-ext-link');
      link.innerHTML = markUp;

      if ('control' === item.type) {
        link.classList.add('control');
      }

      if ('before' === item.place) {
        el.insertAdjacentElement('beforebegin', link);
      } else if ('append' === item.place) {
        el.appendChild(link);
      }
    });
  };

  wp.customize.bind('ready', function () {
    insertExtLinks();
  });

  /**
   * Multicheck Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['multicheck'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      var checkboxes = $(control.selector + ' input[type="checkbox"]');
      checkboxes.on('change', function () {
        var val = Array.from(control.setting._value);
        var current = $(this).val();
        var index = val.indexOf(current);

        if ($(this).prop('checked')) {
          if (index === -1) {
            val.push(current);
          }
        } else {
          if (index !== -1) {
            val.splice(index, 1);
          }
        }

        control.setting.set(val);
      });
    }
  });

  /**
   * Radio Image Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['radio-image'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      var radios = $(control.selector + ' input[type="radio"]');
      radios.on('change', function () {
        control.setting.set(this.value);
      });
    }
  });

  /**
   * Template Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['template'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      var radios = $(control.selector + ' input[type="radio"]');
      var rawInput = $(control.selector + ' #' + control.id + '-text');

      var setValue = function setValue(value, element) {
        if (element === 'input') {
          rawInput.val(value);
        } else if (element === 'radios') {
          radios.val([value]);
        }

        control.setting.set(value);
      };

      rawInput.on('input', debounce(function () {
        setValue(this.value, 'radios');
      }, 500));
      radios.on('change', function () {
        setValue(this.value, 'input');
      });
    }
  });

  /**
   * Template Selector Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['template-sequence'] = wp.customize.Control.extend({
    ready: function ready() {
      var __ = wp.i18n.__;
      var control = this;
      var radios = $(control.selector + ' input[type="radio"]');
      var val = control.setting._value;
      var template = val.template; // Listen to Template selection change.

      radios.on('change', function () {
        template = $(this).val();
        var cols = template.split('-');
        var colsLength = cols.length;
        var matcherHtml = '';
        var sequence = ['main'];
        var sidebars = $('#_customize-input-sidebars_qty').val();

        for (var i = 1; i <= colsLength; i++) {
          matcherHtml += '<div class="gl-template-matcher col-' + cols[i - 1] + '">';
          matcherHtml += '<select class="gl-template-selection">';
          var selected = i === 1 ? 'selected' : '';
          matcherHtml += "<option value=\"main\" ".concat(selected, ">").concat(__('Main Content', 'greenlet'), "</option>");

          for (var j = 1; j <= sidebars; j++) {
            selected = i === j + 1 ? 'selected' : '';
            matcherHtml += "<option value=\"sidebar-".concat(j, "\" ").concat(selected, ">").concat(__('Sidebar', 'greenlet'), " ").concat(j, "</option>");
          }

          matcherHtml += '</select>';
          matcherHtml += '<div class="gl-template-matcher-column">col ' + i + ' (' + cols[i - 1] + ')</div>';
          matcherHtml += '</div>';

          if (i < colsLength) {
            sequence.push('sidebar-' + i);
          }
        }

        $('#customize-control-' + control.id).find('.gl-template-matcher-sequence').html(matcherHtml);
        val = {
          template: template,
          sequence: sequence
        };
        control.setting.set(val);
      }); // Listen to Template column sequence change.

      $(control.selector).on('change', '.gl-template-matcher select', function () {
        // Update control value.
        var sequence = [];
        $(this).parent().parent().find('select').each(function () {
          sequence.push($(this).val());
        });
        val = {
          template: template,
          sequence: sequence
        };
        control.setting.set(val);
      });
    }
  });

  function highlightReducer(highlighted, value) {
    const {
      key,
      options
    } = value;
    const max = options.length - 1;
    let newHighlighted = key === 'ArrowDown' ? highlighted + 1 : highlighted - 1;

    if (newHighlighted < 0) {
      newHighlighted = max;
    } else if (newHighlighted > max) {
      newHighlighted = 0;
    }

    const option = options[newHighlighted];

    if (option && option.disabled) {
      return highlightReducer(newHighlighted, {
        key,
        options
      });
    }

    return newHighlighted;
  }

  function getDisplayValue(value) {
    if (value && typeof value === 'object') {
      if (Array.isArray(value)) {
        return value.map(singleOption => singleOption.name).join(', ');
      }

      return value.name;
    }

    return '';
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function flattenOptions(options) {
    if (!Array.isArray(options)) {
      return [];
    }

    const nextOptions = [];
    options.forEach((option, index) => {
      if ('type' in option && option.type === 'group') {
        const id = option.name.replace(/\s+/g, '-').toLowerCase() + "-" + index;
        option.items.forEach(groupOption => {
          nextOptions.push(_objectSpread(_objectSpread({}, groupOption), {}, {
            groupId: id,
            groupName: option.name,
            _id: "" + groupOption.value
          }));
        });
        return;
      }

      nextOptions.push(_objectSpread(_objectSpread({}, option), {}, {
        _id: "" + option.value,
        index
      }));
    });
    return nextOptions;
  }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function groupOptions(options) {
    const nextOptions = [];
    options.forEach((option, i) => {
      if ('groupId' in option) {
        const nextOption = _objectSpread$1({}, option);

        const groupIndex = nextOptions.findIndex(el => 'groupId' in el && el.groupId === nextOption.groupId);
        nextOption.index = i;

        if (groupIndex > -1) {
          nextOptions[groupIndex].items.push(nextOption);
        } else {
          nextOptions.push({
            items: [nextOption],
            groupId: option.groupId,
            type: 'group',
            name: option.groupName
          });
        }
      } else {
        nextOptions.push(option);
      }
    });
    return nextOptions;
  }

  function getNewValue(value, oldValue, multiple) {
    if (!multiple) {
      return value;
    }

    if (!oldValue) {
      return [value];
    }

    const newValue = !Array.isArray(oldValue) ? [oldValue] : [...oldValue];
    const valueIndex = newValue.findIndex(val => val === value);

    if (valueIndex >= 0) {
      newValue.splice(valueIndex, 1);
    } else {
      newValue.push(value);
    }

    return newValue;
  }

  function getOption(value, defaultOptions) {
    if (Array.isArray(value)) {
      return value.map(singleValue => defaultOptions.find(option => option.value === singleValue));
    }

    return defaultOptions.find(option => option.value === value) || null;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var fuse = createCommonjsModule(function (module, exports) {
  /*!
   * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
   * 
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   */
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var i=r(1),a=r(7),s=a.get,c=(a.deepValue,a.isArray),h=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,a=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.caseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.id,S=void 0===b?null:b,x=r.keys,M=void 0===x?[]:x,_=r.shouldSort,w=void 0===_||_,L=r.getFn,A=void 0===L?s:L,O=r.sortFn,C=void 0===O?function(e,t){return e.score-t.score}:O,j=r.tokenize,P=void 0!==j&&j,I=r.matchAllTokens,F=void 0!==I&&I,T=r.includeMatches,N=void 0!==T&&T,z=r.includeScore,E=void 0!==z&&z,W=r.verbose,K=void 0!==W&&W;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,minMatchCharLength:k,id:S,keys:M,includeMatches:N,includeScore:E,shouldSort:w,getFn:A,sortFn:C,verbose:K,tokenize:P,matchAllTokens:F},this.setCollection(t),this._processKeys(M);}var t,r;return t=e,(r=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,r=e.length;t<r;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n);}else {for(var a=0,s=0,c=e.length;s<c;s+=1){var h=e[s];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');this._keyWeights[l]=u,a+=u;}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var r=this._prepareSearchers(e),n=r.tokenSearchers,o=r.fullSearcher,i=this._search(n,o);return this._computeScore(i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return {tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=r.length;s<c;s+=1)for(var h=r[s],l=0,u=this._keyNames.length;l<u;l+=1){var f=this._keyNames[l];this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:s},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});}return o}},{key:"_analyze",value:function(e,t){var r=this,n=e.key,o=e.arrayIndex,i=void 0===o?-1:o,a=e.value,s=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,f=t.fullSearcher,v=t.resultMap,p=void 0===v?{}:v,d=t.results,g=void 0===d?[]:d;!function e(t,o,i,a){if(null!=o)if("string"==typeof o){var s=!1,h=-1,l=0;r._log("\nKey: ".concat(""===n?"--":n));var v=f.search(o);if(r._log('Full text: "'.concat(o,'", score: ').concat(v.score)),r.options.tokenize){for(var d=o.split(r.options.tokenSeparator),y=d.length,m=[],k=0,b=u.length;k<b;k+=1){var S=u[k];r._log('\nPattern: "'.concat(S.pattern,'"'));for(var x=!1,M=0;M<y;M+=1){var _=d[M],w=S.search(_),L={};w.isMatch?(L[_]=w.score,s=!0,x=!0,m.push(w.score)):(L[_]=1,r.options.matchAllTokens||m.push(1)),r._log('Token: "'.concat(_,'", score: ').concat(L[_]));}x&&(l+=1);}h=m[0];for(var A=m.length,O=1;O<A;O+=1)h+=m[O];h/=A,r._log("Token score average:",h);}var C=v.score;h>-1&&(C=(C+h)/2),r._log("Score average:",C);var j=!r.options.tokenize||!r.options.matchAllTokens||l>=u.length;if(r._log("\nCheck Matches: ".concat(j)),(s||v.isMatch)&&j){var P={key:n,arrayIndex:t,value:o,score:C};r.options.includeMatches&&(P.matchedIndices=v.matchedIndices);var I=p[a];I?I.output.push(P):(p[a]={item:i,output:[P]},g.push(p[a]));}}else if(c(o))for(var F=0,T=o.length;F<T;F+=1)e(F,o[F],i,a);}(i,a,s,h);}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,r=!!Object.keys(t).length,n=0,o=e.length;n<o;n+=1){for(var i=e[n],a=i.output,s=a.length,c=1,h=0;h<s;h+=1){var l=a[h],u=l.key,f=r?t[u]:1,v=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;c*=Math.pow(v,f);}i.score=c,this._log(i);}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn);}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var r=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==r.indexOf(t))return;r.push(t);}return t},2)),r=null;}var o=[];this.options.includeMatches&&o.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a);}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score;});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c);}else t.push(s.item);}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments);}}])&&o(t.prototype,r),e}();e.exports=h;},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}var o=r(2),i=r(3),a=r(6),s=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,s=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.isCaseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.includeMatches,S=void 0!==b&&b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,includeMatches:S,minMatchCharLength:k},this.pattern=v?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern));}var t,r;return t=e,(r=[{key:"search",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return n&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,c=s.maxPatternLength,h=s.tokenSeparator;if(this.pattern.length>c)return o(e,this.pattern,h);var l=this.options,u=l.location,f=l.distance,v=l.threshold,p=l.findAllMatches,d=l.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:u,distance:f,threshold:v,findAllMatches:p,minMatchCharLength:d,includeMatches:n})}}])&&n(t.prototype,r),e}();e.exports=s;},function(e,t){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(r,"\\$&").replace(n,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1]);}return {score:a?.5:1,isMatch:a,matchedIndices:s}};},function(e,t,r){var n=r(4),o=r(5);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,v=void 0!==f&&f,p=i.minMatchCharLength,d=void 0===p?1:p,g=i.includeMatches,y=void 0!==g&&g,m=s,k=e.length,b=u,S=e.indexOf(t,m),x=t.length,M=[],_=0;_<k;_+=1)M[_]=0;if(-1!==S){var w=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});if(b=Math.min(w,b),-1!==(S=e.lastIndexOf(t,m+x))){var L=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});b=Math.min(L,b);}}S=-1;for(var A=[],O=1,C=x+k,j=1<<(x<=31?x-1:30),P=0;P<x;P+=1){for(var I=0,F=C;I<F;){n(t,{errors:P,currentLocation:m+F,expectedLocation:m,distance:h})<=b?I=F:C=F,F=Math.floor((C-I)/2+I);}C=F;var T=Math.max(1,m-F+1),N=v?k:Math.min(m+F,k)+x,z=Array(N+2);z[N+1]=(1<<P)-1;for(var E=N;E>=T;E-=1){var W=E-1,K=r[e.charAt(W)];if(K&&(M[W]=1),z[E]=(z[E+1]<<1|1)&K,0!==P&&(z[E]|=(A[E+1]|A[E])<<1|1|A[E+1]),z[E]&j&&(O=n(t,{errors:P,currentLocation:W,expectedLocation:m,distance:h}))<=b){if(b=O,(S=W)<=m)break;T=Math.max(1,2*m-S);}}if(n(t,{errors:P+1,currentLocation:m,expectedLocation:m,distance:h})>b)break;A=z;}var $={isMatch:S>=0,score:0===O?.001:O};return y&&($.matchedIndices=o(M,d)),$};},function(e,t){e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l};},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||((o=i-1)-n+1>=t&&r.push([n,o]),n=-1);}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r};},function(e,t){e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t};},function(e,t){var r=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return "0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return "string"==typeof e},i=function(e){return "number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var c=s.indexOf("."),h=s,l=null;-1!==c&&(h=s.slice(0,c),l=s.slice(c+1));var u=t[h];if(null!=u)if(l||!o(u)&&!i(u))if(r(u))for(var f=0,v=u.length;f<v;f+=1)e(u[f],l);else l&&e(u,l);else a.push(n(u));}else a.push(t);}(e,t),a},isArray:r,isString:o,isNum:i,toString:n};}])});
  });

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  let Fuse = null;

  try {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    Fuse = fuse;
  } catch (e) {
  }

  function fuzzySearch(value, options, fuseOptions) {
    const fuse = new Fuse(options, fuseOptions);
    return fuse.search(value).map((item, index) => _objectSpread$2(_objectSpread$2({}, item), {}, {
      index
    }));
  }

  function search(value, options, fuseOptions) {
    if (value.length && Fuse && fuseOptions) {
      return fuzzySearch(value, options, fuseOptions);
    }

    return false;
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function useSelect({
    value: defaultValue = null,
    disabled = false,
    multiple = false,
    search: canSearch = false,
    fuse = false,
    options: defaultOptions,
    onChange = () => {},
    getOptions = null,
    allowEmpty = true,
    closeOnSelect = true,
    closable = true
  }) {
    const ref = React$1.useRef(null);
    const flatDefaultOptions = React$1.useMemo(() => flattenOptions(defaultOptions), [defaultOptions]);
    const [state, setState] = React$1.useState({
      flat: [],
      addedOptions: [],
      value: defaultValue,
      search: '',
      focus: false,
      searching: false,
      highlighted: -1,
      changed: false
    });
    const {
      flat,
      addedOptions,
      value,
      search: search$1,
      focus,
      searching,
      highlighted
    } = state;
    const option = React$1.useMemo(() => {
      let newOption = getOption(value, [...flatDefaultOptions, ...addedOptions]);

      if (!newOption && !allowEmpty && !multiple) {
        [newOption] = flatDefaultOptions;
      }

      return newOption;
    }, [value, flatDefaultOptions, addedOptions, allowEmpty, multiple]);
    const options = React$1.useMemo(() => groupOptions(flat), [flat]);
    const displayValue = React$1.useMemo(() => getDisplayValue(option), [option]);
    const onBlur = React$1.useCallback(() => {
      setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
        focus: false,
        search: '',
        flat: flatDefaultOptions,
        highlighted: -1
      }));

      if (ref.current) {
        ref.current.blur();
      }
    }, [flatDefaultOptions, ref]);

    const setFocus = newFocus => setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
      focus: newFocus
    }));

    const onClick = () => setFocus(!focus);

    const onFocus = () => setFocus(true);

    const onSelect = React$1.useCallback(id => {
      setState(prevState => {
        const {
          flat: prevFlat,
          highlighted: prevHighlighted
        } = prevState; // eslint-disable-next-line no-underscore-dangle,eqeqeq

        const item = id ? prevFlat.find(i => i.value == id) : prevFlat[prevHighlighted];

        if (!item) {
          return prevState;
        }

        const values = getNewValue(item.value, prevState.value, multiple);
        const newOptions = getOption(values, prevFlat);
        return _objectSpread$3(_objectSpread$3({}, prevState), {}, {
          addedOptions: multiple ? newOptions : [newOptions],
          value: values,
          changed: [values, newOptions]
        });
      });
    }, [multiple]);
    const onMouseDown = React$1.useCallback(e => {
      if (!closeOnSelect) {
        e.preventDefault();
      }

      onSelect(e.currentTarget.value);
    }, [onSelect, closeOnSelect]);
    const onKeyDown = React$1.useCallback(e => {
      const {
        key
      } = e;

      if (key === 'ArrowDown' || key === 'ArrowUp') {
        e.preventDefault();
        setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
          highlighted: highlightReducer(oldState.highlighted, {
            key,
            options: oldState.flat
          })
        }));
      }
    }, []);
    const onKeyPress = React$1.useCallback(({
      key
    }) => {
      if (key === 'Enter') {
        onSelect();

        if (closable && closeOnSelect) {
          onBlur();
        }
      }
    }, [onSelect, closeOnSelect, onBlur, closable]);
    const onKeyUp = React$1.useCallback(({
      key
    }) => {
      if (key === 'Escape') {
        onBlur();
      }
    }, [onBlur]);

    const onSearch = ({
      target
    }) => {
      const {
        value: inputVal
      } = target;
      const newState = {
        search: inputVal
      };
      let searchableOption = flatDefaultOptions;

      if (getOptions && inputVal.length) {
        newState.searching = true;
        searchableOption = getOptions(inputVal);
      }

      setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), newState));
      Promise.resolve(searchableOption).then(foundOptions => {
        let newOptions = foundOptions;

        if (inputVal.length) {
          newOptions = search(inputVal, foundOptions, fuse);
        }

        setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
          flat: newOptions === false ? foundOptions : newOptions,
          searching: false
        }));
      }).catch(() => setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
        flat: flatDefaultOptions,
        searching: false
      })));
    };

    const valueProps = {
      tabIndex: '0',
      readOnly: !canSearch,
      onChange: canSearch ? onSearch : null,
      disabled,
      onMouseDown: onClick,
      onBlur,
      onFocus,
      onKeyPress,
      onKeyDown,
      onKeyUp,
      ref
    };
    const optionProps = React$1.useMemo(() => ({
      tabIndex: '-1',
      onMouseDown,
      onKeyDown,
      onKeyPress,
      onBlur
    }), [onMouseDown, onKeyDown, onKeyPress, onBlur]);
    React$1.useEffect(() => {
      setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
        value: defaultValue
      }));
    }, [defaultValue]);
    React$1.useEffect(() => {
      setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
        flat: flatDefaultOptions
      }));
    }, [flatDefaultOptions]);
    React$1.useEffect(() => {
      if (state.changed !== false) {
        setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
          changed: false
        }));
        onChange(...state.changed);
      }
    }, [state.changed, onChange]);
    return [{
      value: option,
      highlighted,
      options,
      disabled,
      displayValue,
      focus,
      search: search$1,
      searching
    }, valueProps, optionProps, newValue => setState(oldState => _objectSpread$3(_objectSpread$3({}, oldState), {}, {
      value: newValue
    }))];
  }

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  const Option = (_ref) => {
    let {
      optionProps,
      highlighted,
      selected,
      cls,
      renderOption
    } = _ref,
        option = _objectWithoutProperties(_ref, ["optionProps", "highlighted", "selected", "cls", "renderOption"]);

    const optionClass = [cls('option'), selected ? cls('is-selected') : false, highlighted ? cls('is-highlighted') : false].filter(single => !!single).join(' ');

    const domProps = _objectSpread$4(_objectSpread$4({}, optionProps), {}, {
      value: option.value,
      disabled: option.disabled
    });

    return /*#__PURE__*/React__default['default'].createElement("li", {
      className: cls('row'),
      role: "menuitem",
      "data-index": option.index,
      "data-value": escape(option.value),
      key: option.value
    }, renderOption(domProps, option, {
      selected,
      highlighted
    }, optionClass));
  };

  Option.defaultProps = {
    disabled: false,
    index: null,
    value: null
  };
  var Option$1 = /*#__PURE__*/React$1.memo(Option);

  function isSelected(itemValue, selectedValue) {
    if (!selectedValue) {
      return false;
    }

    return Array.isArray(selectedValue) ? selectedValue.findIndex(item => item.value === itemValue.value) >= 0 : selectedValue.value === itemValue.value;
  }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  const SelectSearch = /*#__PURE__*/React$1.forwardRef(({
    value: defaultValue,
    disabled,
    placeholder,
    multiple,
    search,
    autoFocus,
    autoComplete,
    options: defaultOptions,
    id,
    onChange,
    printOptions,
    closeOnSelect,
    className,
    renderValue,
    renderOption,
    renderGroupHeader,
    getOptions,
    fuse
  }, ref) => {
    const selectRef = React$1.useRef(null);
    const [snapshot, valueProps, optionProps] = useSelect({
      options: defaultOptions,
      value: defaultValue,
      multiple,
      disabled,
      fuse,
      search,
      onChange,
      getOptions,
      closeOnSelect,
      closable: !multiple || printOptions === 'on-focus',
      allowEmpty: !!placeholder
    });
    const {
      focus,
      highlighted,
      value,
      options,
      searching,
      displayValue,
      search: searchValue
    } = snapshot;
    const cls = React$1.useCallback(key => {
      if (typeof className === 'function') {
        return className(key);
      }

      if (key.indexOf('container') === 0) {
        return key.replace('container', className);
      }

      if (key.indexOf('is-') === 0 || key.indexOf('has-') === 0) {
        return key;
      }

      return className.split(' ')[0] + "__" + key;
    }, [className]);
    const wrapperClass = [cls('container'), disabled ? cls('is-disabled') : false, searching ? cls('is-loading') : false, focus ? cls('has-focus') : false].filter(single => !!single).join(' ');
    const inputValue = focus && search ? searchValue : displayValue;
    React$1.useEffect(() => {
      const {
        current
      } = selectRef;

      if (!current || multiple || highlighted < 0 && !value) {
        return;
      }

      const query = highlighted > -1 ? "[data-index=\"" + highlighted + "\"]" : "[data-value=\"" + escape(value.value) + "\"]";
      const selected = current.querySelector(query);

      if (selected) {
        const rect = current.getBoundingClientRect();
        const selectedRect = selected.getBoundingClientRect();
        current.scrollTop = selected.offsetTop - rect.height / 2 + selectedRect.height / 2;
      }
    }, [focus, value, highlighted, selectRef, multiple]);
    let shouldRenderOptions;

    switch (printOptions) {
      case 'never':
        shouldRenderOptions = false;
        break;

      case 'always':
        shouldRenderOptions = true;
        break;

      case 'on-focus':
        shouldRenderOptions = focus;
        break;

      default:
        shouldRenderOptions = !disabled && (focus || multiple);
        break;
    }

    return /*#__PURE__*/React__default['default'].createElement("div", {
      ref: ref,
      className: wrapperClass,
      id: id
    }, (!multiple || placeholder || search) && /*#__PURE__*/React__default['default'].createElement("div", {
      className: cls('value')
    }, renderValue(_objectSpread$5(_objectSpread$5({}, valueProps), {}, {
      placeholder,
      autoFocus,
      autoComplete,
      value: inputValue
    }), snapshot, cls('input'))), shouldRenderOptions && /*#__PURE__*/React__default['default'].createElement("div", {
      className: cls('select'),
      ref: selectRef
    }, /*#__PURE__*/React__default['default'].createElement("ul", {
      className: cls('options')
    }, options.map(option => {
      const isGroup = option.type === 'group';
      const items = isGroup ? option.items : [option];
      const base = {
        cls,
        optionProps,
        renderOption
      };
      const rendered = items.map(o => /*#__PURE__*/React__default['default'].createElement(Option$1, _extends({
        key: o.value,
        selected: isSelected(o, value),
        highlighted: highlighted === o.index
      }, base, o)));

      if (isGroup) {
        return /*#__PURE__*/React__default['default'].createElement("li", {
          role: "none",
          className: cls('row'),
          key: option.groupId
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: cls('group')
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: cls('group-header')
        }, renderGroupHeader(option.name)), /*#__PURE__*/React__default['default'].createElement("ul", {
          className: cls('options')
        }, rendered)));
      }

      return rendered;
    }))));
  });
  SelectSearch.defaultProps = {
    className: 'select-search',
    disabled: false,
    search: false,
    multiple: false,
    placeholder: null,
    id: null,
    autoFocus: false,
    autoComplete: 'on',
    value: '',
    onChange: () => {},
    printOptions: 'auto',
    closeOnSelect: true,
    renderOption: (domProps, option, snapshot, className) =>
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default['default'].createElement("button", _extends({
      className: className
    }, domProps), option.name),
    renderGroupHeader: name => name,
    renderValue: (valueProps, snapshot, className) => /*#__PURE__*/React__default['default'].createElement("input", _extends({}, valueProps, {
      className: className
    })),
    fuse: {
      keys: ['name', 'groupName'],
      threshold: 0.3
    },
    getOptions: null
  };
  var SelectSearch$1 = /*#__PURE__*/React$1.memo(SelectSearch);

  function Popup(props) {
    var _React$useState = React.useState({
      show: false,
      style: {
        content: {
          top: 0
        },
        arrow: {
          right: 0
        }
      }
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        popState = _React$useState2[0],
        setPopState = _React$useState2[1];

    props.onClose(function () {
      setPopState(function (prev) {
        return _objectSpread2(_objectSpread2({}, prev), {}, {
          show: false
        });
      });
    });

    var popupNow = function popupNow(e) {
      var widthSelector = props.widthSelector;

      if (undefined === widthSelector) {
        widthSelector = '.customize-control';
      }

      var widthEl = e.target.closest(widthSelector);
      var elRect;

      if (null !== widthEl) {
        elRect = widthEl.getBoundingClientRect();
      } else {
        elRect = document.body.getBoundingClientRect();
      }

      var clientRect = e.target.getBoundingClientRect();
      var parentRect = e.target.offsetParent.getBoundingClientRect();
      var content = {
        marginLeft: elRect.left - parentRect.left,
        width: elRect.width
      };
      var arrow = {
        left: clientRect.left - elRect.left + clientRect.width / 2
      };
      setPopState(function (prevPopState) {
        return {
          show: !prevPopState.show,
          style: {
            content: content,
            arrow: arrow
          }
        };
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "cw-popup ".concat(popState.show ? 'shown' : '')
    }, /*#__PURE__*/React.createElement("button", {
      className: "cw-popup-button ".concat(props.className),
      onClick: popupNow,
      type: "button"
    }, props.children[0]), /*#__PURE__*/React.createElement("div", {
      className: "cw-popup-overlay ".concat(popState.show ? '' : 'hidden'),
      onClick: function onClick() {
        return setPopState(function (prev) {
          return _objectSpread2(_objectSpread2({}, prev), {}, {
            show: false
          });
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-popup-content ".concat(popState.show ? '' : 'hidden'),
      style: popState.style.content
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-popup-arrow",
      style: popState.style.arrow
    }), props.children[1]));
  }

  function RowItems(_ref) {
    var props = _ref.props;
    var __ = wp.i18n.__;
    var row = props.row,
        i = props.i,
        pos = props.pos,
        updateRows = props.updateRows,
        items = props.items;
    var cols = row.columns.split('-');

    var _React$useState = React.useState(-1),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

    var closePop = function closePop() {};

    var onClose = function onClose(cb) {
      closePop = cb;
    };

    var toggleRow = function toggleRow(e, i) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(function (prev) {
        return prev === i ? -1 : i;
      });
    };

    var addItem = function addItem(col, item) {
      updateRows(function (prev) {
        if ('items' in prev[i]) {
          if (col in prev[i].items) {
            prev[i].items[col].push(item.id);
          } else {
            prev[i].items[col] = [item.id];
          }
        } else {
          prev[i].items = _defineProperty({}, col, [item.id]);
        }

        return prev;
      });
      closePop();
    };

    var removeItem = function removeItem(col, item) {
      updateRows(function (prev) {
        prev[i].items[col].splice(prev[i].items[col].indexOf(item), 1);
        return prev;
      });
    };

    var ColItemProps = function ColItemProps(_ref4) {
      var col = _ref4.col,
          index = _ref4.index,
          item = _ref4.item;
      var meta = item in items && 'meta' in items[item] ? items[item].meta : false;
      var currentMeta = row.items[col][index].meta;
      var hasQuery = currentMeta && 'target' in currentMeta && 'query' !== currentMeta.target;

      var _onChange = function onChange(val, propKey) {
        updateRows(function (prev) {
          var colItem = prev[i].items[col][index];

          if (_typeof(colItem) === 'object' && 'meta' in colItem) {
            prev[i].items[col][index].meta[propKey] = val;
          } else {
            prev[i].items[col][index] = {
              id: item,
              meta: _defineProperty({}, propKey, val)
            };
          }

          return prev;
        });
      };

      var debouncedChange = debounce(_onChange, 500);

      var renderProp = function renderProp(propKey, prop) {
        var defaultValue = currentMeta !== undefined ? currentMeta[propKey] : '';

        if ('select' === prop.type) {
          var forwardProps = {
            options: Object.entries(prop.items).map(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  value = _ref6[0],
                  name = _ref6[1];

              return {
                name: name,
                value: value
              };
            }),
            value: defaultValue,
            onChange: function onChange(val) {
              return _onChange(val, propKey);
            }
          };
          return /*#__PURE__*/React.createElement(SelectSearch$1, forwardProps);
        } else if ('input' === prop.type) {
          return /*#__PURE__*/React.createElement("input", {
            type: "text",
            className: "prop-control",
            defaultValue: defaultValue,
            onChange: function onChange(e) {
              return debouncedChange(e.target.value, propKey);
            }
          });
        }
      };

      return !!meta ? /*#__PURE__*/React.createElement("div", {
        className: "item-props expandable"
      }, Object.entries(meta).map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            propKey = _ref8[0],
            prop = _ref8[1];

        return /*#__PURE__*/React.createElement("div", {
          key: propKey,
          className: "item-prop ".concat(hasQuery && 'input' === prop.type ? 'hidden' : '')
        }, /*#__PURE__*/React.createElement("span", {
          className: "prop-title"
        }, prop.name), renderProp(propKey, prop));
      })) : null;
    };

    var DragHandle = SortableHOC.SortableHandle(function () {
      return /*#__PURE__*/React.createElement("span", {
        className: "drag-handle"
      }, "::");
    });
    var ColItem = SortableHOC.SortableElement(function (_ref9) {
      var children = _ref9.children;
      return children;
    });
    var ColItems = SortableHOC.SortableContainer(function (_ref10) {
      var children = _ref10.children;
      return /*#__PURE__*/React.createElement("div", {
        className: "col-items col-10"
      }, children);
    });

    var _onSortEnd = function onSortEnd(col, from, to) {
      updateRows(function (prev) {
        arrayMoveMutate(prev[i].items[col], from, to);
        return prev;
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "layout-control layout-control-items"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cols-title"
    }, pos, " ", i + 1, " ", __('Items', 'greenlet')), /*#__PURE__*/React.createElement("div", {
      className: "cover-layout-cols-items"
    }, cols.map(function (width, j) {
      var col = j + 1;
      var rowItems = row.items && col in row.items ? row.items[col] : [];
      return /*#__PURE__*/React.createElement("div", {
        key: col,
        className: "cover-layout-col gl-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-name col-2"
      }, "col-", col), /*#__PURE__*/React.createElement(ColItems, {
        axis: "xy",
        helperClass: "gl-sort-clone",
        useDragHandle: true,
        onSortEnd: function onSortEnd(_ref11) {
          var oldIndex = _ref11.oldIndex,
              newIndex = _ref11.newIndex;
          return _onSortEnd(col, oldIndex, newIndex);
        }
      }, rowItems.map(function (item, k) {
        return /*#__PURE__*/React.createElement(ColItem, {
          key: "".concat(col, "-").concat(k),
          index: k
        }, /*#__PURE__*/React.createElement("div", {
          className: "gl-col-item".concat(expanded === "".concat(col, "-").concat(k) ? ' open' : '')
        }, /*#__PURE__*/React.createElement("div", {
          className: "item-id",
          tabIndex: "0",
          onClick: function onClick(e) {
            return toggleRow(e, "".concat(col, "-").concat(k));
          }
        }, /*#__PURE__*/React.createElement(DragHandle, null), /*#__PURE__*/React.createElement("span", null, item.id ? item.id : item)), /*#__PURE__*/React.createElement("div", {
          className: "item-x",
          tabIndex: "0",
          onClick: function onClick() {
            return removeItem(col, item);
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "dashicons dashicons-trash"
        })), /*#__PURE__*/React.createElement(ColItemProps, {
          col: col,
          index: k,
          item: item.id ? item.id : item
        })));
      }), /*#__PURE__*/React.createElement(Popup, {
        className: "add-button",
        widthSelector: ".col-items",
        onClose: onClose
      }, /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-plus-alt2"
      }), /*#__PURE__*/React.createElement("div", {
        className: "layout-items"
      }, Object.entries(items).map(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
            id = _ref13[0],
            item = _ref13[1];

        return /*#__PURE__*/React.createElement("button", {
          key: id,
          className: "layout-item",
          type: "button",
          onClick: function onClick() {
            return addItem(col, item);
          }
        }, item.name);
      })))));
    })));
  }

  function Layout(_ref) {
    var control = _ref.control,
        updateSettings = _ref.updateSettings;
    var __ = wp.i18n.__;
    var _control$params = control.params,
        position = _control$params.position,
        choices = _control$params.choices;

    var _React$useState = React.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

    var _React$useState3 = React.useState(control.setting._value.map(function (row) {
      return _objectSpread2({}, row);
    })),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        coverRows = _React$useState4[0],
        setRows = _React$useState4[1];

    var _React$useState5 = React.useState(control.setting._value.reduce(function (o, c, i) {
      return _objectSpread2(_objectSpread2({}, o), {}, _defineProperty({}, i, false));
    }, {})),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        advanced = _React$useState6[0],
        setAdvanced = _React$useState6[1];

    var capitalize = function capitalize(str) {
      return "".concat(str.charAt(0).toUpperCase()).concat(str.slice(1));
    };

    var pos = capitalize(position);

    var updateRows = function updateRows(cb) {
      setRows(function (prev) {
        var newRows = cb(JSON.parse(JSON.stringify(prev)));
        updateSettings(newRows);
        return newRows;
      });
    };

    var toggleRow = function toggleRow(e, i) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(function (prev) {
        return prev === i ? -1 : i;
      });
    };

    var toggleAdvanced = function toggleAdvanced(e, i) {
      var val = e.currentTarget.checked;
      setAdvanced(function (prev) {
        return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, i, val));
      });
    };

    var changeSticky = function changeSticky(i) {
      setRows(function (prev) {
        var rows = prev.map(function (row) {
          return _objectSpread2({}, row);
        });
        rows[i]['sticky'] = !rows[i]['sticky'];
        updateSettings(rows);
        return rows;
      });
    };

    var changeColumns = function changeColumns(e, i) {
      var columns = e.currentTarget.value;
      setRows(function (prev) {
        var rows = prev.map(function (row) {
          return _objectSpread2({}, row);
        });
        rows[i]['columns'] = columns;
        updateSettings(rows);
        return rows;
      });
    };

    var changeVertical = function changeVertical(e, i) {
      var vertical = e.currentTarget.value;
      setRows(function (prev) {
        var rows = prev.map(function (row) {
          return _objectSpread2({}, row);
        });
        rows[i]['vertical'] = vertical;
        updateSettings(rows);
        return rows;
      });
    };

    var deleteRow = function deleteRow(e, i) {
      e.preventDefault();
      var confirmed = window.confirm("Are you sure you want to remove ".concat(position, " ").concat(i + 1));
      if (!confirmed) return;
      setRows(function (prev) {
        var rows = prev.map(function (row) {
          return _objectSpread2({}, row);
        });
        rows.splice(i, 1);
        updateSettings(rows);
        return rows;
      });
    };

    var addRow = function addRow(e, placement) {
      e.preventDefault();
      setRows(function (prev) {
        var rows = prev.map(function (row) {
          return _objectSpread2({}, row);
        });
        var newRow = {
          columns: '12'
        };

        if ('before' === placement) {
          rows.unshift(newRow);
        } else {
          rows.push(newRow);
        }

        updateSettings(rows);
        return rows;
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "layout-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-wrap add-before"
    }, /*#__PURE__*/React.createElement("button", {
      className: "add-button",
      onClick: function onClick(e) {
        return addRow(e, 'before');
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-plus-alt2"
    }))), coverRows.map(function (row, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "row ".concat(expanded === i ? 'expanded' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "row-title",
        onClick: function onClick(e) {
          return toggleRow(e, i);
        }
      }, row.primary ? "".concat(pos, " ").concat(i + 1, " (").concat(__('Main', 'greenlet'), ")") : "".concat(pos, " ").concat(i + 1), /*#__PURE__*/React.createElement("button", {
        className: "toggler",
        onClick: function onClick(e) {
          return toggleRow(e, i);
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-arrow-down"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "row-content"
      }, /*#__PURE__*/React.createElement("div", {
        className: "layout-control customize-control-checkbox"
      }, /*#__PURE__*/React.createElement("span", {
        className: "customize-inside-control-row"
      }, /*#__PURE__*/React.createElement("input", {
        id: "_customize-input-cover_layout_".concat(pos, "-").concat(i, "-sticky"),
        type: "checkbox",
        defaultChecked: row.sticky,
        onChange: function onChange() {
          return changeSticky(i);
        }
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "_customize-input-cover_layout_".concat(pos, "-").concat(i, "-sticky")
      }, __('Sticky', 'greenlet')))), /*#__PURE__*/React.createElement("div", {
        className: "layout-control customize-control-template"
      }, /*#__PURE__*/React.createElement("span", {
        className: "title"
      }, __('Select Columns Layout', 'greenlet')), /*#__PURE__*/React.createElement("div", {
        className: "gl-radio-images"
      }, Object.entries(choices).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            choice = _ref3[1];

        return /*#__PURE__*/React.createElement("div", {
          key: key,
          className: "gl-radio-image"
        }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
          type: "radio",
          name: "".concat(pos, "-").concat(i, "-template"),
          value: key,
          onChange: function onChange(e) {
            return changeColumns(e, i);
          },
          defaultChecked: row.columns === key
        }), /*#__PURE__*/React.createElement("img", {
          src: choice,
          alt: key
        }), /*#__PURE__*/React.createElement("span", {
          className: "template-name"
        }, key)));
      }))), /*#__PURE__*/React.createElement(RowItems, {
        props: {
          row: row,
          i: i,
          pos: pos,
          updateRows: updateRows,
          items: control.params.items
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "advanced ".concat(advanced[i] ? 'open' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "layout-control"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
        className: "title"
      }, __('Enter column numbers separated by hyphen.', 'greenlet'), /*#__PURE__*/React.createElement("br", null), "Eg: ", /*#__PURE__*/React.createElement("code", null, "5-7"), " or ", /*#__PURE__*/React.createElement("code", null, "6-3-3"), ". ", __('Sum should be', 'greenlet'), " ", /*#__PURE__*/React.createElement("code", null, "12")), /*#__PURE__*/React.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          return changeColumns(e, i);
        }
      }))), /*#__PURE__*/React.createElement("div", {
        className: "layout-control gl-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-4"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "_customize-input-cover_layout_".concat(pos, "-").concat(i, "-vertical")
      }, __('Vertical', 'greenlet'))), /*#__PURE__*/React.createElement("div", {
        className: "col-8"
      }, /*#__PURE__*/React.createElement("select", {
        id: "_customize-input-cover_layout_".concat(pos, "-").concat(i, "-vertical"),
        defaultValue: row.vertical,
        onChange: function onChange(e) {
          return changeVertical(e, i);
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: "no"
      }, __('No', 'greenlet')), /*#__PURE__*/React.createElement("option", {
        value: "left"
      }, __('Left', 'greenlet')), /*#__PURE__*/React.createElement("option", {
        value: "right"
      }, __('Right', 'greenlet'))))), /*#__PURE__*/React.createElement("div", {
        className: "layout-control"
      }, /*#__PURE__*/React.createElement("button", {
        className: "delete",
        onClick: function onClick(e) {
          return deleteRow(e, i);
        }
      }, "".concat(__('Delete', 'greenlet'), " ").concat(pos, " ").concat(i + 1), " ", /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-trash"
      })))), /*#__PURE__*/React.createElement("div", {
        className: "advanced-toggle"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, advanced[i] ? __('Hide', 'greenlet') : __('Show', 'greenlet'), " ", __('Advanced', 'greenlet')), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        className: "check",
        onChange: function onChange(e) {
          return toggleAdvanced(e, i);
        }
      })))));
    }), /*#__PURE__*/React.createElement("div", {
      className: "add-wrap add-after"
    }, /*#__PURE__*/React.createElement("button", {
      className: "add-button",
      onClick: function onClick(e) {
        return addRow(e);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-plus-alt2"
    }))));
  }

  wp.customize.controlConstructor['cover-layout'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;

      var updateSettings = function updateSettings(rows) {
        var newRows = rows.map(function (row) {
          return _objectSpread2({}, row);
        });
        control.setting.set(newRows);
      };

      ReactDOM.render( /*#__PURE__*/React.createElement(Layout, {
        control: control,
        updateSettings: updateSettings
      }), document.getElementById("".concat(control.id, "-root")));
      wp.customize.section(control.section(), function (section) {
        section.expanded.bind(function (isExpanded) {
          var sendCoverInit = function sendCoverInit() {
            return wp.customize.previewer.send('start-customize', control.params.position);
          };

          if (isExpanded) {
            sendCoverInit();
            wp.customize.previewer.bind('ready', sendCoverInit);
          } else {
            wp.customize.previewer.send('stop-customize', control.params.position);
            wp.customize.previewer.unbind('ready', sendCoverInit);
          }
        });
      });
    }
  });

  /**
   * Length Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['length'] = wp.customize.Control.extend({
    ready: function ready() {
      var Length = cw.components.Length;
      var control = this;

      var onChange = function onChange(data) {
        control.setting.set(data);
      };

      var params = {
        onChange: onChange,
        label: control.params.label,
        subType: control.params.subType,
        val: control.setting._value,
        units: control.params.units
      };
      params.val = undefined === params.val ? '' : params.val;
      ReactDOM.render( /*#__PURE__*/React.createElement("div", {
        className: "cw-control"
      }, /*#__PURE__*/React.createElement(Length, params)), document.getElementById(control.id + '-root'));
    }
  });

  /**
   * Range Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['range'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      control.container.append('<span class="reset dashicons dashicons-undo"></span>');
      var resetVal = control.setting._value;
      $(control.selector + ' .reset').on('click', function () {
        control.setting.set(resetVal);
      });
    }
  });

  /**
   * Color Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['gl-color'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      var picker = $(control.selector + ' .color-picker');
      var options = {
        change: function change(event, ui) {
          var color = ui.color.toString();

          if ($('html').hasClass('window-loaded')) {
            control.setting.set(color);
          }
        },
        clear: function clear() {
          control.setting.set('');
        }
      };

      if (control.params.palettes.length > 0) {
        options['palettes'] = control.params.palettes;
      }

      picker.wpColorPicker(options);
    }
  });

  /**
   * Border Control.
   *
   * @package greenlet
   */
  wp.customize.controlConstructor['border'] = wp.customize.Control.extend({
    ready: function ready() {
      // Set initial Values.
      var control = this;
      var widthSelector = $('#border-width-' + control.id);
      var styleSelector = $('#border-style-' + control.id);
      var colorSelector = $('#border-color-' + control.id);
      var border = control.setting._value;
      var borderParts = border.split(' ');
      var width = 0;
      var style = 'none';
      var color = '#000000';

      if (borderParts.length === 3) {
        width = borderParts[0];
        style = borderParts[1];
        color = borderParts[2]; // Set width.

        if (width.indexOf('px') !== -1) {
          width = width.split('px')[0];
        } // Set style options.


        var options = '';
        var styles = ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'];
        var stylesLength = styles.length;

        for (var i = 0; i < stylesLength; i++) {
          var selected = styles[i] === style ? 'selected' : '';
          options += '<option value="' + styles[i] + '" ' + selected + '>' + styles[i] + '</option>';
        }

        styleSelector.html(options);
      }

      widthSelector.val(width);
      styleSelector.val(style);
      colorSelector.val(color);

      function setBorder() {
        if ($('html').hasClass('window-loaded')) {
          var newValue = widthSelector.val() + 'px ' + styleSelector.val() + ' ' + colorSelector.val();
          control.setting.set(newValue);
        }
      } // Listen to changes.


      widthSelector.on('change', setBorder);
      styleSelector.on('change', setBorder);
      colorSelector.on('change', setBorder);
    }
  });

  wp.customize.controlConstructor['preset'] = wp.customize.Control.extend({
    ready: function ready() {
      var control = this;
      var radios = $(control.selector + ' input[type="radio"]');
      var defaultPreset = control.params.presets['Default'];
      var cw = clone(defaultPreset.color_wings);
      defaultPreset.color_wings = wp.customize.control('color_wings').setting._value;
      defaultPreset.color_wings[cwControlObject.theme] = cw;

      var deepMerge = function deepMerge(targetObject, source) {
        var target = Object.assign({}, targetObject);

        for (var key in source) {
          if (!Object.hasOwnProperty.call(source, key)) {
            continue;
          }

          if (!(key in target)) {
            target[key] = source[key];
          } else if (_typeof(source[key]) === 'object' && !Array.isArray(source[key])) {
            target[key] = deepMerge(target[key], source[key]);
          }
        }

        return target;
      };

      radios.on('change', function () {
        var confirm = window.confirm('This will override all customizer settings and\nApply "' + this.value + '" preset.\nProceed?');

        if (confirm === false) {
          return;
        }

        var preset = clone(control.params.presets[this.value]);
        preset.color_wings = _defineProperty({}, cwControlObject.theme, preset.color_wings);
        var currentPreset = this.value === 'Default' ? defaultPreset : deepMerge(preset, defaultPreset);

        for (var prop in currentPreset) {
          var singleControl = wp.customize.control(prop);

          if (undefined !== singleControl) {
            singleControl.setting.set(currentPreset[prop]);
          }
        }

        wp.customize.previewer.refresh();
      });
    }
  });

  /**
   * Change Sidebars quantity dependencies.
   */
  function manageSidebarDependencies() {
    var __ = wp.i18n.__;
    var selector = document.getElementById('_customize-input-sidebars_qty');
    selector.addEventListener('change', function (e) {
      var sidebars = e.target.value;
      var templates = document.querySelectorAll('.gl-template-selection');
      templates.forEach(function (template) {
        var selected = template.value === 'main' ? 'selected' : '';
        var matcherHtml = "<option value=\"main\" ".concat(selected, ">").concat(__('Main Content', 'greenlet'), "</option>");

        for (var j = 1; j <= sidebars; j++) {
          selected = template.value === 'sidebar-' + j ? 'selected' : '';
          matcherHtml += "<option value=\"sidebar-".concat(j, "\" ").concat(selected, ">").concat(__('Sidebar', 'greenlet'), " ").concat(j, "</option>");
        }

        template.innerHTML = matcherHtml;
      });
    });
  }
  /**
   * Manage Post List dependencies.
   */


  function managePostListDependencies() {
    var control = wp.customize.control('post_list_layout');

    if (control.setting._value === 'list') {
      document.getElementById('customize-control-posts_columns').style.display = 'none';
    }

    control.setting.bind(function () {
      if (control.setting._value === 'list') {
        document.getElementById('customize-control-posts_columns').style.display = 'none';
      } else {
        document.getElementById('customize-control-posts_columns').style.display = '';
      }
    });
  }
  /**
   * Manage Performance dependencies.
   */


  function managePerformanceDependencies() {
    var control = wp.customize.control('disable_block_editor');

    if (control.setting._value !== false) {
      document.getElementById('customize-control-defer_block_css').style.display = 'none';
      document.getElementById('customize-control-inline_block_css').style.display = 'none';
    }

    control.setting.bind(function () {
      if (control.setting._value !== false) {
        document.getElementById('customize-control-defer_block_css').style.display = 'none';
        document.getElementById('customize-control-inline_block_css').style.display = 'none';
      } else {
        document.getElementById('customize-control-defer_block_css').style.display = '';
        document.getElementById('customize-control-inline_block_css').style.display = '';
      }
    });
  }
  /**
   * Manage Back to top dependencies.
   */


  function manageToTopDependencies() {
    var control = wp.customize.control('to_top');

    if (control.setting._value === false) {
      document.getElementById('customize-control-to_top_at').style.display = 'none';
    }

    control.setting.bind(function () {
      if (control.setting._value === false) {
        document.getElementById('customize-control-to_top_at').style.display = 'none';
      } else {
        document.getElementById('customize-control-to_top_at').style.display = '';
      }
    });
  }

  wp.customize.bind('ready', function () {
    manageSidebarDependencies();
    managePostListDependencies();
    managePerformanceDependencies();
    manageToTopDependencies();
  });

}(React));
//# sourceMappingURL=greenlet-controls.js.map
