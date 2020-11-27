(function () {
  'use strict';

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

  var styles = "svg.svg-def {\n  display: block; }\n\n.gl-row {\n  display: flex; }\n  .gl-row .col-1 {\n    width: 8.33333%; }\n  .gl-row .col-2 {\n    width: 16.66667%; }\n  .gl-row .col-3 {\n    width: 25%; }\n  .gl-row .col-4 {\n    width: 33.33333%; }\n  .gl-row .col-5 {\n    width: 41.66667%; }\n  .gl-row .col-6 {\n    width: 50%; }\n  .gl-row .col-7 {\n    width: 58.33333%; }\n  .gl-row .col-8 {\n    width: 66.66667%; }\n  .gl-row .col-9 {\n    width: 75%; }\n  .gl-row .col-10 {\n    width: 83.33333%; }\n  .gl-row .col-11 {\n    width: 91.66667%; }\n  .gl-row .col-12 {\n    width: 100%; }\n\n.gl-layout .gl-layout-control {\n  padding-top: 10px; }\n\n.gl-layout-options {\n  display: flex; }\n  .gl-layout-options .components-button {\n    width: 50%;\n    justify-content: center; }\n\n.gl-radio-images {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -4px; }\n\n.gl-radio-image {\n  max-width: 25%;\n  padding: 10px 4px; }\n  .gl-radio-image label {\n    display: block;\n    position: relative; }\n  .gl-radio-image input[type=\"radio\"] {\n    position: absolute;\n    width: 0;\n    height: 0;\n    opacity: 0; }\n    .gl-radio-image input[type=\"radio\"]:checked + img, .gl-radio-image input[type=\"radio\"]:focus + img {\n      outline: 3px solid #7cb342; }\n  .gl-radio-image img {\n    display: block;\n    max-width: 100%; }\n  .gl-radio-image .template-name {\n    position: absolute;\n    width: 100%;\n    height: 10px;\n    line-height: 1;\n    font-size: 11px;\n    text-align: center;\n    bottom: 110%;\n    visibility: hidden; }\n  .gl-radio-image:hover .template-name {\n    visibility: visible; }\n\n.gl-sequence {\n  margin-right: -4px;\n  margin-left: -4px;\n  margin-bottom: 10px; }\n\n.gl-sequence-col {\n  padding-top: 0;\n  border: 1px solid #7e8993;\n  background: #fff;\n  position: relative; }\n  .gl-sequence-col:not(:last-child) {\n    border-right: none; }\n  .gl-sequence-col:first-child {\n    border-radius: 3px 0 0 3px; }\n  .gl-sequence-col:last-child {\n    border-radius: 0 3px 3px 0; }\n  .gl-sequence-col select {\n    width: 100%;\n    margin: 0;\n    border: none;\n    font-size: 12px; }\n\n.gl-sequence-name {\n  position: absolute;\n  top: 110%;\n  left: -1px;\n  font-size: 10px;\n  color: #aaa;\n  width: calc( 100% + 2px);\n  text-align: center;\n  overflow: hidden; }\n  .gl-sequence-name svg.gl-arrow {\n    position: absolute;\n    left: 0;\n    top: 4px; }\n    .gl-sequence-name svg.gl-arrow.right {\n      transform: rotateZ(180deg);\n      right: 0;\n      left: auto; }\n  .gl-sequence-name > span {\n    background: #fff;\n    position: relative;\n    padding: 0 4px; }\n";

  var registerPlugin = wp.plugins.registerPlugin;
  var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
  var _wp$data = wp.data,
      withSelect = _wp$data.withSelect,
      withDispatch = _wp$data.withDispatch;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      ButtonGroup = _wp$components.ButtonGroup;
  var useState = wp.element.useState;
  var __ = wp.i18n.__;
  var LayoutMetaField = withDispatch(function (dispatch) {
    return {
      updateMetaValue: function updateMetaValue(v) {
        dispatch('core/editor').editPost({
          meta: {
            greenlet_layout: v
          }
        });
      }
    };
  })(withSelect(function (select) {
    var meta = select('core/editor').getEditedPostAttribute('meta');

    if (undefined === meta || !('greenlet_layout' in meta)) {
      return {};
    }

    return {
      greenlet_layout: meta.greenlet_layout
    };
  })(function (props) {
    if (!('greenlet_layout' in props)) return null;
    var template = 'template' in props.greenlet_layout ? props.greenlet_layout.template : 'default';
    var sequence = 'sequence' in props.greenlet_layout ? props.greenlet_layout.sequence : ['main', 'sidebar-1', 'sidebar-2', 'sidebar-3'];

    var _useState = useState(template),
        _useState2 = _slicedToArray(_useState, 2),
        primary = _useState2[0],
        setPrimary = _useState2[1];

    var updateOption = function updateOption(v) {
      setPrimary(v);
      props.updateMetaValue({
        template: 'default',
        sequence: sequence
      });
    };

    var updateTemplate = function updateTemplate(e) {
      props.updateMetaValue({
        template: e.currentTarget.value,
        sequence: sequence
      });
    };

    var updateSequence = function updateSequence(e) {
      var currentSeq = [];
      e.currentTarget.parentNode.parentNode.querySelectorAll('select.gl-sequence-content').forEach(function (el) {
        return currentSeq.push(el.value);
      });
      props.updateMetaValue({
        template: template,
        sequence: currentSeq
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "gl-layout"
    }, /*#__PURE__*/React.createElement(ButtonGroup, {
      className: "gl-layout-control gl-layout-options",
      "aria-label": "options"
    }, /*#__PURE__*/React.createElement(Button, {
      isSmall: true,
      className: 'default' === primary ? 'is-primary' : 'is-secondary',
      onClick: function onClick() {
        return updateOption('default');
      }
    }, __('Default', 'greenlet')), /*#__PURE__*/React.createElement(Button, {
      isSmall: true,
      className: 'default' === primary ? 'is-secondary' : 'is-primary',
      onClick: function onClick() {
        return updateOption('custom');
      }
    }, __('Custom', 'greenlet'))), 'default' !== primary && /*#__PURE__*/React.createElement("div", {
      className: "gl-layout-control gl-meta-template"
    }, /*#__PURE__*/React.createElement("div", {
      className: "gl-radio-images"
    }, Object.entries(greenletMeta.templates).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          choice = _ref2[1];

      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: "gl-radio-image"
      }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: "template",
        value: key,
        onChange: updateTemplate,
        defaultChecked: template === key
      }), /*#__PURE__*/React.createElement("img", {
        src: choice,
        alt: key
      }), /*#__PURE__*/React.createElement("span", {
        className: "template-name"
      }, key)));
    }))), 'default' !== template && /*#__PURE__*/React.createElement("div", {
      className: "gl-layout-control gl-meta-sequence"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "svg-def",
      width: "0",
      height: "0",
      viewBox: "0 0 201 11"
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("g", {
      id: "gl-arrow-shape",
      fill: "#ccc"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "5",
      width: "199",
      height: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "0",
      width: "1",
      height: "11",
      fill: "#ddd"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "1 5.5 4 2 4 9"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "gl-sequence gl-row"
    }, template.split('-').map(function (col, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "gl-sequence-col col-".concat(col)
      }, /*#__PURE__*/React.createElement("select", {
        className: "gl-sequence-content",
        defaultValue: sequence[i] ? sequence[i] : 'main',
        onChange: updateSequence
      }, Object.entries(greenletMeta.contents).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            id = _ref4[0],
            content = _ref4[1];

        return /*#__PURE__*/React.createElement("option", {
          key: id,
          value: id
        }, content);
      })), /*#__PURE__*/React.createElement("div", {
        className: "gl-sequence-name"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "gl-arrow left",
        width: "201px",
        height: "11px",
        viewBox: "0 0 201 11"
      }, /*#__PURE__*/React.createElement("use", {
        href: "#gl-arrow-shape"
      })), /*#__PURE__*/React.createElement("svg", {
        className: "gl-arrow right",
        width: "201px",
        height: "11px",
        viewBox: "0 0 201 11"
      }, /*#__PURE__*/React.createElement("use", {
        href: "#gl-arrow-shape"
      })), /*#__PURE__*/React.createElement("span", null, col)));
    }))));
  }));

  var GreenletLayout = function GreenletLayout() {
    return /*#__PURE__*/React.createElement(PluginDocumentSettingPanel, {
      name: "greenlet-layout",
      title: __('Page Layout', 'greenlet'),
      className: "greenlet-layout",
      icon: "greenlet-layout"
    }, /*#__PURE__*/React.createElement(LayoutMetaField, null), /*#__PURE__*/React.createElement("style", {
      type: "text/css"
    }, styles));
  };

  if (greenletMeta.hasMeta) {
    registerPlugin('greenlet-layout', {
      render: GreenletLayout
    });
  }

}());
//# sourceMappingURL=greenlet-meta.js.map
