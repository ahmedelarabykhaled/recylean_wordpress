(function () {
	'use strict';

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

	var scrollTo = function scrollTo(val) {
	  greenletData.to_top_at = val;
	  var to = 0;

	  if (val.includes('px')) {
	    to = parseInt(val.split('px')[0], 10);
	  } else if (val.includes('%')) {
	    to = parseInt(val.split('%')[0], 10) * (document.body.offsetHeight - window.innerHeight) / 100;
	  }

	  window.scrollTo(0, to);
	};
	var dScrollTo = debounce(scrollTo, 40, true);
	var toggleToTop = function toggleToTop(val) {
	  var btn = document.getElementsByClassName('to-top');
	  if (0 === btn.length) return;

	  if (true === val) {
	    btn[0].style.display = '';
	  } else {
	    btn[0].style.display = 'none';
	  }
	};

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var styles = "html, body {\n  scroll-behavior: smooth; }\n\n#glp-canvas .cover-drop-zone-wrap {\n  z-index: 9999; }\n\n#glp-canvas .cover-drop-zone {\n  position: fixed;\n  border: 1px dashed #0285ba;\n  box-shadow: 0 0 1px #0285ba;\n  min-height: 10px; }\n  #glp-canvas .cover-drop-zone.drag-over {\n    box-shadow: 0 0 2px 1px #0285ba; }\n\n.header-column .customize-partial-edit-shortcut, .footer-column .customize-partial-edit-shortcut {\n  display: none; }\n\n.scroll-disabled {\n  background: #fff;\n  padding: 10px 0;\n  color: #888; }\n";

	function Canvas(_ref) {
	  var pos = _ref.pos;
	  var __ = wp.i18n.__;

	  var _React$useState = React.useState(false),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      isZoneShown = _React$useState2[0],
	      setZoneShown = _React$useState2[1];

	  var _React$useState3 = React.useState([]),
	      _React$useState4 = _slicedToArray(_React$useState3, 2),
	      dropZones = _React$useState4[0],
	      setDropZones = _React$useState4[1];

	  var showDropZone = function showDropZone() {
	    var coverCols = document.querySelectorAll("section.".concat(pos, "-section .").concat(pos, "-column, ").concat(pos, ".").concat(pos, "-section .").concat(pos, "-column"));

	    if (coverCols.length > 0) {
	      var zones = _toConsumableArray(coverCols).map(function (col) {
	        var _col$getBoundingClien = col.getBoundingClientRect(),
	            top = _col$getBoundingClien.top,
	            left = _col$getBoundingClien.left,
	            width = _col$getBoundingClien.width,
	            height = _col$getBoundingClien.height;

	        return {
	          loc: col.dataset.loc,
	          style: {
	            top: top,
	            left: left,
	            width: width,
	            height: height
	          },
	          dragOver: false
	        };
	      });

	      setDropZones(zones);
	    }

	    setZoneShown(true);
	  };

	  var hideDropZone = function hideDropZone() {
	    return setZoneShown(false);
	  };

	  var div = document.createElement('div');
	  div.classList.add('scroll-disabled');
	  div.innerText = __('Infinite scrolling is temporarily disabled to edit footer.', 'greenlet');

	  var toggleInfiniteScroll = function toggleInfiniteScroll() {
	    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	    if ('Greenlet' in window) {
	      Greenlet.toggleScroll(enable);
	    }

	    var button = document.querySelector('.pagination.infinite a');
	    if (null === button) return;

	    if (!enable) {
	      button.style.display = 'none';
	      button.parentNode.appendChild(div);
	    } else {
	      button.parentNode.removeChild(div);
	      button.style.display = 'inline';
	    }
	  };

	  React.useEffect(function () {
	    var initialPosition = [document.documentElement.scrollLeft, document.documentElement.scrollTop];
	    toggleInfiniteScroll(false);
	    window.scrollTo(0, 'header' === pos ? 0 : 1000000);
	    wp.customize.preview.bind('start-drag-item', showDropZone);
	    wp.customize.preview.bind('end-drag-item', hideDropZone);
	    var isDirty = false;

	    var setDirty = function setDirty() {
	      return isDirty = true;
	    };

	    setTimeout(function () {
	      return window.addEventListener('scroll', setDirty);
	    }, 1000);
	    return function () {
	      if (!isDirty) window.scrollTo(initialPosition[0], initialPosition[1]);
	      toggleInfiniteScroll();
	      wp.customize.preview.unbind('start-drag-item', showDropZone);
	      wp.customize.preview.unbind('end-drag-item', hideDropZone);
	      window.removeEventListener('scroll', setDirty);
	    };
	  }, []);

	  var _onDragOver = function onDragOver(e, loc) {
	    e.preventDefault();
	    setDropZones(function (prev) {
	      return prev.map(function (zone) {
	        zone.dragOver = zone.loc === loc;
	        return zone;
	      });
	    });
	  };

	  var _onDrop = function onDrop(e, loc) {
	    e.preventDefault();
	    wp.customize.preview.send('dropped-over', [pos, loc.split('-')]);
	  };

	  return /*#__PURE__*/React.createElement("div", {
	    id: "glp-canvas"
	  }, isZoneShown && /*#__PURE__*/React.createElement("div", {
	    className: "cover-drop-zone-wrap",
	    style: {
	      position: 'fixed',
	      top: '0',
	      left: '0'
	    }
	  }, dropZones.map(function (zone) {
	    return /*#__PURE__*/React.createElement("div", {
	      key: zone.loc,
	      style: zone.style,
	      className: "cover-drop-zone ".concat(zone.dragOver ? 'drag-over' : ''),
	      onDragOver: function onDragOver(e) {
	        return _onDragOver(e, zone.loc);
	      },
	      onDragLeave: function onDragLeave(e) {
	        return _onDragOver(e, false);
	      },
	      onDrop: function onDrop(e) {
	        _onDrop(e, zone.loc);
	      }
	    });
	  })), /*#__PURE__*/React.createElement("style", {
	    type: "text/css"
	  }, styles));
	}

	/**
	 * Greenlet Customizer Preview.
	 *
	 * @package greenlet
	 */

	function isCustomizer() {
	  return !!(typeof wp !== 'undefined' && wp.hasOwnProperty('customize'));
	}

	if (isCustomizer()) {
	  wp.customize.bind('preview-ready', function () {
	    var canvas = document.createElement('div');
	    canvas.id = 'greenlet-preview';
	    document.body.appendChild(canvas);
	    wp.customize.preview.bind('start-customize', function (pos) {
	      setTimeout(function () {
	        return ReactDOM.render( /*#__PURE__*/React.createElement(Canvas, {
	          pos: pos
	        }), canvas);
	      }, 100);
	    });
	    wp.customize.preview.bind('stop-customize', function () {
	      ReactDOM.unmountComponentAtNode(canvas);
	    });
	    wp.customize('to_top', function (setting) {
	      return setting.bind(toggleToTop);
	    });
	    wp.customize('to_top_at', function (setting) {
	      return setting.bind(dScrollTo);
	    });
	  });
	}

}());
//# sourceMappingURL=greenlet-preview.js.map
