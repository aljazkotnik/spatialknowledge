(function () {
  'use strict';

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function html2element(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

    return template.content.firstChild;
  } // html2element

  function svg2element(svg) {
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.innerHTML = svg.trim();
    return g.firstChild;
  } // svg2element

  function isWithinBoundingClientRect(A, B) {
    // A and B are expected to be the results of "getBoundingClientRect"
    return A.x > B.x && A.x < B.x + B.width && A.y > B.y && A.y < B.y + B.height;
  } // isEventWithinRectangle

  var scaleCategorical = /*#__PURE__*/function () {
    function scaleCategorical() {
      _classCallCheck(this, scaleCategorical);

      this.domain = [];
      this.range = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
    }

    _createClass(scaleCategorical, [{
      key: "dom2range",
      value: // Opposite function is not defined - two domain values can map to the same range value.
      function dom2range(v) {
        var obj = this;

        if (v) {
          var i = (obj.domain.indexOf(v) + 1) % obj.range.length - 1;

          if (i < 0) {
            obj.domain.push(v);
            return obj.range[obj.domain.length - 1];
          } else {
            return obj.range[i];
          } // if

        } else {
          // If v isn't a truthy just return black.
          return '#000000';
        } // if

      } // dom2range

    }]);

    return scaleCategorical;
  }(); // scaleCategorical

  var scaleLinear = /*#__PURE__*/function () {
    function scaleLinear() {
      _classCallCheck(this, scaleLinear);

      this._domain = [0, 1];
      this._range = [0, 1];
    }

    _createClass(scaleLinear, [{
      key: "domain",
      get: // domain
      function get() {
        return this._domain;
      } // domain
      ,
      set: function set(d) {
        this._domain = d;
      }
    }, {
      key: "range",
      get: // range
      function get() {
        return this._range;
      } // range
      ,
      set: function set(r) {
        this._range = r;
      }
    }, {
      key: "dom2range",
      value: function dom2range(v) {
        return mapSpaceAValueToSpaceB(v, this.domain, this.range);
      } // dom2range

    }, {
      key: "range2dom",
      value: function range2dom(v) {
        return mapSpaceAValueToSpaceB(v, this.range, this.domain);
      } // range2dom

    }]);

    return scaleLinear;
  }(); // scaleLinear

  function mapSpaceAValueToSpaceB(v, A, B) {
    return (v - A[0]) / (A[1] - A[0]) * (B[1] - B[0]) + B[0];
  } // mapSpaceAValueToSpaceB
  // From regular helpers.


  function unique(d) {
    // https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    } // unique


    return d.filter(onlyUnique);
  } // unique

  function arrayEqual(A, B) {
    return arrayIncludesAll(A, B) && arrayIncludesAll(B, A);
  } // arrayEqual

  function arrayIncludesAll(A, B) {
    // 'arrayIncludesAll' checks if array A includes all elements of array B. The elements of the arrays are expected to be strings.
    // Return element of B if it is not contained in A. If the response array has length 0 then A includes all elements of B, and 'true' is returned.
    var f = B.filter(function (b) {
      return !A.includes(b);
    });
    return f.length == 0 ? true : false;
  } // arrayIncludesAll
   // joinDataToElements

  var template$m = "\n<div class=\"item\">\n  <div class=\"head unselectable\">\n\t<span class=\"button dissolve\" style=\"display: none;\">\u2716</span>\n\t<span class=\"button enter\" style=\"display: none;\">\u2B8A</span>\n\t<p class=\"label\"></p>\n  </div>\n  <div class=\"viewcontainer\"></div>\n  <div class=\"preview\"></div>\n  <div class=\"commenting\"></div>\n</div>\n";
  /*
  `Item' is a basis for individual small multiples as well as groups. It implements the node creation and appends dragging.

  Scaling: the container is transformed to include zooming/panning. When the zoom happens the items are prompted to check whether they are still large enough to draw the data.
  */

  var Item = /*#__PURE__*/function () {
    // Main viewport dimensions;
    function Item() {
      _classCallCheck(this, Item);

      this.width = 300;
      this.height = 200;
      var obj = this;
      obj.node = html2element(template$m);
      obj.node.style.position = "absolute";
      obj.viewnode = obj.node.querySelector("div.viewcontainer"); // obj.viewnode.style.height = obj.height + "px";
      // obj.viewnode.style.width = obj.width + "px";

      obj.previewnode = obj.node.querySelector("div.preview"); // obj.previewnode.style.maxWidth = obj.width + "px";
      // Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.

      var active = false;
      var itemStartPosition = [0, 0];
      var itemRelativePosition = [0, 0]; // The `e.target == obj.node' prevents any events on the children elements to bubble up. This require the title width to be 0, and it prevented from a button being positioned to the right. 
      // `obj.node.contains(e.target)' allows any children to launch the dragging, but this will interfere with the panning and zooming in the viewport div.
      // Maybe any child that is contained by obj.node. but not the viewport node?

      obj.node.onmousedown = function (e) {
        if (obj.node.contains(e.target) && !obj.viewnode.contains(e.target) && obj.node.isConnected) {
          // e.preventDefault();
          var rect = obj.node.getBoundingClientRect();
          active = true;
          itemStartPosition = obj.position;
          itemRelativePosition = [e.clientX - rect.x, e.clientY - rect.y]; // Also move the viewFrame div up so that dragging over otehr higher divs is uninterrupted.

          obj.node.parentNode.insertBefore(obj.node, null);
        } // if

      }; // onmousedown


      obj.node.onmousemove = function (e) {
        if (active) {
          e.preventDefault(); // The parent may be rescaled, retrieve and collect the k from it.

          var p = obj.node.parentElement;
          var k = Number(p.style.transform.split(" ")[0].replace(/^\D+|\D+$/g, ""));
          var parentRect = p.getBoundingClientRect();
          var x = e.pageX - parentRect.x - itemRelativePosition[0];
          var y = e.pageY - parentRect.y - itemRelativePosition[1];
          obj.position = [x / k, y / k];
          obj.onmove();
        } // if

      }; // mousemove


      obj.node.onmouseup = function () {
        if (active) {
          obj.onend(itemStartPosition);
        } // if


        active = false;
      }; // onmouseup


      obj.node.onmouseenter = function () {
        active = false;
      }; // onmouseenter


      obj.node.onmouseleave = function () {
        active = false;
      }; // onmouseleave

    } // constructor
    // Generic hide, show, and position methods.


    _createClass(Item, [{
      key: "show",
      value: function show() {
        var obj = this;
        obj.node.style.display = "";
      } // show

    }, {
      key: "hide",
      value: function hide() {
        var obj = this;
        obj.node.style.display = "none";
      } // hide

    }, {
      key: "position",
      get: // set position
      function get() {
        var obj = this;
        return [parseFloat(obj.node.style.left), parseFloat(obj.node.style.top)];
      } // get position
      // superclass method defined in the subclasses.
      ,
      set: function set(point) {
        var obj = this;
        obj.node.style.left = point[0] + "px";
        obj.node.style.top = point[1] + "px";
      }
    }, {
      key: "checksize",
      value: function checksize() {} // checksize
      // Dummy method. Superset in NavigationManager to trigger the minimap update.

    }, {
      key: "onmove",
      value: function onmove() {} // onmove
      // Dummy method. Superset in Navigationmanager.track to allow adding to groups.

    }, {
      key: "onend",
      value: function onend() {} // onend

    }, {
      key: "isonscreen",
      value: function isonscreen() {
        var obj = this; // Check if any part of the item is on-screen. Or should there be a tolerance of a few pixels?

        var rect = obj.node.getBoundingClientRect(); // East, West, North, South

        var outside = rect.x > window.innerWidth || rect.x + rect.width < 0 || rect.y + rect.height < 0 || rect.y > window.innerHeight;
        return !outside && obj.node.style.display != "none";
      } // isonscreen

    }]);

    return Item;
  }(); // Item

  var _Array$prototype;
  var colors = ['white', 'black'];
  var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
  var invRanks = [].concat(ranks).reverse();

  var allKeys = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(files.map(function (c) {
    return ranks.map(function (r) {
      return c + r;
    });
  })));

  var pos2key = function pos2key(pos) {
    return allKeys[8 * pos[0] + pos[1]];
  };

  var key2pos = function key2pos(k) {
    return [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
  };

  var allPos = allKeys.map(key2pos);

  function memo(f) {
    var v;

    var ret = function ret() {
      if (v === undefined) v = f();
      return v;
    };

    ret.clear = function () {
      v = undefined;
    };

    return ret;
  }

  var timer = function timer() {
    var startAt;
    return {
      start: function start() {
        startAt = performance.now();
      },
      cancel: function cancel() {
        startAt = undefined;
      },
      stop: function stop() {
        if (!startAt) return 0;
        var time = performance.now() - startAt;
        startAt = undefined;
        return time;
      }
    };
  };

  var opposite = function opposite(c) {
    return c === 'white' ? 'black' : 'white';
  };

  var distanceSq = function distanceSq(pos1, pos2) {
    var dx = pos1[0] - pos2[0],
        dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
  };

  var samePiece = function samePiece(p1, p2) {
    return p1.role === p2.role && p1.color === p2.color;
  };

  var posToTranslateBase = function posToTranslateBase(pos, asWhite, xFactor, yFactor) {
    return [(asWhite ? pos[0] : 7 - pos[0]) * xFactor, (asWhite ? 7 - pos[1] : pos[1]) * yFactor];
  };

  var posToTranslateAbs = function posToTranslateAbs(bounds) {
    var xFactor = bounds.width / 8,
        yFactor = bounds.height / 8;
    return function (pos, asWhite) {
      return posToTranslateBase(pos, asWhite, xFactor, yFactor);
    };
  };

  var posToTranslateRel = function posToTranslateRel(pos, asWhite) {
    return posToTranslateBase(pos, asWhite, 100, 100);
  };

  var translateAbs = function translateAbs(el, pos) {
    el.style.transform = "translate(".concat(pos[0], "px,").concat(pos[1], "px)");
  };

  var translateRel = function translateRel(el, percents) {
    el.style.transform = "translate(".concat(percents[0], "%,").concat(percents[1], "%)");
  };

  var setVisible = function setVisible(el, v) {
    el.style.visibility = v ? 'visible' : 'hidden';
  };

  var eventPosition = function eventPosition(e) {
    var _a;

    if (e.clientX || e.clientX === 0) return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0]) return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return;
  };

  var isRightButton = function isRightButton(e) {
    return e.buttons === 2 || e.button === 2;
  };

  var createEl = function createEl(tagName, className) {
    var el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
  };

  function computeSquareCenter(key, asWhite, bounds) {
    var pos = key2pos(key);

    if (!asWhite) {
      pos[0] = 7 - pos[0];
      pos[1] = 7 - pos[1];
    }

    return [bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16, bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16];
  }

  function diff(a, b) {
    return Math.abs(a - b);
  }

  function pawn(color) {
    return function (x1, y1, x2, y2) {
      return diff(x1, x2) < 2 && (color === 'white' ? y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2 : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
    };
  }

  var knight = function knight(x1, y1, x2, y2) {
    var xd = diff(x1, x2);
    var yd = diff(y1, y2);
    return xd === 1 && yd === 2 || xd === 2 && yd === 1;
  };

  var bishop = function bishop(x1, y1, x2, y2) {
    return diff(x1, x2) === diff(y1, y2);
  };

  var rook = function rook(x1, y1, x2, y2) {
    return x1 === x2 || y1 === y2;
  };

  var queen = function queen(x1, y1, x2, y2) {
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
  };

  function king(color, rookFiles, canCastle) {
    return function (x1, y1, x2, y2) {
      return diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === 'white' ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
    };
  }

  function rookFilesOf(pieces, color) {
    var backrank = color === 'white' ? '1' : '8';
    var files = [];

    var _iterator = _createForOfIteratorHelper(pieces),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            piece = _step$value[1];

        if (key[1] === backrank && piece.color === color && piece.role === 'rook') {
          files.push(key2pos(key)[0]);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return files;
  }

  function premove(pieces, key, canCastle) {
    var piece = pieces.get(key);
    if (!piece) return [];
    var pos = key2pos(key),
        r = piece.role,
        mobility = r === 'pawn' ? pawn(piece.color) : r === 'knight' ? knight : r === 'bishop' ? bishop : r === 'rook' ? rook : r === 'queen' ? queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return allPos.filter(function (pos2) {
      return (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1]);
    }).map(pos2key);
  }

  function callUserFunction(f) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (f) setTimeout(function () {
      return f.apply(void 0, args);
    }, 1);
  }

  function toggleOrientation(state) {
    state.orientation = opposite(state.orientation);
    state.animation.current = state.draggable.current = state.selected = undefined;
  }

  function _setPieces(state, pieces) {
    var _iterator2 = _createForOfIteratorHelper(pieces),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            piece = _step2$value[1];

        if (piece) state.pieces.set(key, piece);else state.pieces["delete"](key);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  function setCheck(state, color) {
    state.check = undefined;
    if (color === true) color = state.turnColor;

    if (color) {
      var _iterator3 = _createForOfIteratorHelper(state.pieces),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              k = _step3$value[0],
              p = _step3$value[1];

          if (p.role === 'king' && p.color === color) {
            state.check = k;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }

  function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
  }

  function unsetPremove(state) {
    if (state.premovable.current) {
      state.premovable.current = undefined;
      callUserFunction(state.premovable.events.unset);
    }
  }

  function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = {
      role: role,
      key: key
    };
    callUserFunction(state.predroppable.events.set, role, key);
  }

  function unsetPredrop(state) {
    var pd = state.predroppable;

    if (pd.current) {
      pd.current = undefined;
      callUserFunction(pd.events.unset);
    }
  }

  function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle) return false;
    var king = state.pieces.get(orig);
    if (!king || king.role !== 'king') return false;
    var origPos = key2pos(orig);
    var destPos = key2pos(dest);
    if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1]) return false;

    if (origPos[0] === 4 && !state.pieces.has(dest)) {
      if (destPos[0] === 6) dest = pos2key([7, destPos[1]]);else if (destPos[0] === 2) dest = pos2key([0, destPos[1]]);
    }

    var rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== 'rook') return false;
    state.pieces["delete"](orig);
    state.pieces["delete"](dest);

    if (origPos[0] < destPos[0]) {
      state.pieces.set(pos2key([6, destPos[1]]), king);
      state.pieces.set(pos2key([5, destPos[1]]), rook);
    } else {
      state.pieces.set(pos2key([2, destPos[1]]), king);
      state.pieces.set(pos2key([3, destPos[1]]), rook);
    }

    return true;
  }

  function baseMove(state, orig, dest) {
    var origPiece = state.pieces.get(orig),
        destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece) return false;
    var captured = destPiece && destPiece.color !== origPiece.color ? destPiece : undefined;
    if (dest === state.selected) unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);

    if (!tryAutoCastle(state, orig, dest)) {
      state.pieces.set(dest, origPiece);
      state.pieces["delete"](orig);
    }

    state.lastMove = [orig, dest];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
  }

  function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
      if (force) state.pieces["delete"](key);else return false;
    }

    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = opposite(state.turnColor);
    return true;
  }

  function baseUserMove(state, orig, dest) {
    var result = baseMove(state, orig, dest);

    if (result) {
      state.movable.dests = undefined;
      state.turnColor = opposite(state.turnColor);
      state.animation.current = undefined;
    }

    return result;
  }

  function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
      var result = baseUserMove(state, orig, dest);

      if (result) {
        var holdTime = state.hold.stop();
        unselect(state);
        var metadata = {
          premove: false,
          ctrlKey: state.stats.ctrlKey,
          holdTime: holdTime
        };
        if (result !== true) metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        return true;
      }
    } else if (canPremove(state, orig, dest)) {
      setPremove(state, orig, dest, {
        ctrlKey: state.stats.ctrlKey
      });
      unselect(state);
      return true;
    }

    unselect(state);
    return false;
  }

  function dropNewPiece(state, orig, dest, force) {
    var piece = state.pieces.get(orig);

    if (piece && (canDrop(state, orig, dest) || force)) {
      state.pieces["delete"](orig);
      baseNewPiece(state, piece, dest, force);
      callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
        premove: false,
        predrop: false
      });
    } else if (piece && canPredrop(state, orig, dest)) {
      setPredrop(state, piece.role, dest);
    } else {
      unsetPremove(state);
      unsetPredrop(state);
    }

    state.pieces["delete"](orig);
    unselect(state);
  }

  function _selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);

    if (state.selected) {
      if (state.selected === key && !state.draggable.enabled) {
        unselect(state);
        state.hold.cancel();
        return;
      } else if ((state.selectable.enabled || force) && state.selected !== key) {
        if (userMove(state, state.selected, key)) {
          state.stats.dragged = false;
          return;
        }
      }
    }

    if (isMovable(state, key) || isPremovable(state, key)) {
      setSelected(state, key);
      state.hold.start();
    }
  }

  function setSelected(state, key) {
    state.selected = key;

    if (isPremovable(state, key)) {
      state.premovable.dests = premove(state.pieces, key, state.premovable.castle);
    } else state.premovable.dests = undefined;
  }

  function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
  }

  function isMovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
  }

  function canMove(state, orig, dest) {
    var _a, _b;

    return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
  }

  function canDrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
  }

  function isPremovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
  }

  function canPremove(state, orig, dest) {
    return orig !== dest && isPremovable(state, orig) && premove(state.pieces, orig, state.premovable.castle).includes(dest);
  }

  function canPredrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    var destPiece = state.pieces.get(dest);
    return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== 'pawn' || dest[1] !== '1' && dest[1] !== '8') && state.movable.color === piece.color && state.turnColor !== piece.color;
  }

  function isDraggable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === 'both' || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
  }

  function _playPremove(state) {
    var move = state.premovable.current;
    if (!move) return false;
    var orig = move[0],
        dest = move[1];
    var success = false;

    if (canMove(state, orig, dest)) {
      var result = baseUserMove(state, orig, dest);

      if (result) {
        var metadata = {
          premove: true
        };
        if (result !== true) metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        success = true;
      }
    }

    unsetPremove(state);
    return success;
  }

  function _playPredrop(state, validate) {
    var drop = state.predroppable.current;
    var success = false;
    if (!drop) return false;

    if (validate(drop)) {
      var piece = {
        role: drop.role,
        color: state.movable.color
      };

      if (baseNewPiece(state, piece, drop.key)) {
        callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
          premove: false,
          predrop: true
        });
        success = true;
      }
    }

    unsetPredrop(state);
    return success;
  }

  function _cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
  }

  function _stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = undefined;

    _cancelMove(state);
  }

  function _getKeyAtDomPos(pos, asWhite, bounds) {
    var file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite) file = 7 - file;
    var rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite) rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? pos2key([file, rank]) : undefined;
  }

  function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    var origPos = key2pos(orig);
    var validSnapPos = allPos.filter(function (pos2) {
      return queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]);
    });
    var validSnapCenters = validSnapPos.map(function (pos2) {
      return computeSquareCenter(pos2key(pos2), asWhite, bounds);
    });
    var validSnapDistances = validSnapCenters.map(function (pos2) {
      return distanceSq(pos, pos2);
    });

    var _validSnapDistances$r = validSnapDistances.reduce(function (a, b, index) {
      return a[0] < b ? a : [b, index];
    }, [validSnapDistances[0], 0]),
        _validSnapDistances$r2 = _slicedToArray(_validSnapDistances$r, 2),
        closestSnapIndex = _validSnapDistances$r2[1];

    return pos2key(validSnapPos[closestSnapIndex]);
  }

  function whitePov(s) {
    return s.orientation === 'white';
  }

  var initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  var roles = {
    p: 'pawn',
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king'
  };
  var letters = {
    pawn: 'p',
    rook: 'r',
    knight: 'n',
    bishop: 'b',
    queen: 'q',
    king: 'k'
  };

  function read(fen) {
    if (fen === 'start') fen = initial;
    var pieces = new Map();
    var row = 7,
        col = 0;

    var _iterator4 = _createForOfIteratorHelper(fen),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var c = _step4.value;

        switch (c) {
          case ' ':
            return pieces;

          case '/':
            --row;
            if (row < 0) return pieces;
            col = 0;
            break;

          case '~':
            var piece = pieces.get(pos2key([col, row]));
            if (piece) piece.promoted = true;
            break;

          default:
            var nb = c.charCodeAt(0);
            if (nb < 57) col += nb - 48;else {
              var role = c.toLowerCase();
              pieces.set(pos2key([col, row]), {
                role: roles[role],
                color: c === role ? 'black' : 'white'
              });
              ++col;
            }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return pieces;
  }

  function write(pieces) {
    return invRanks.map(function (y) {
      return files.map(function (x) {
        var piece = pieces.get(x + y);

        if (piece) {
          var letter = letters[piece.role];
          return piece.color === 'white' ? letter.toUpperCase() : letter;
        } else return '1';
      }).join('');
    }).join('/').replace(/1{2,}/g, function (s) {
      return s.length.toString();
    });
  }

  function configure(state, config) {
    var _a;

    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests) state.movable.dests = undefined;
    merge(state, config);

    if (config.fen) {
      state.pieces = read(config.fen);
      state.drawable.shapes = [];
    }

    if (config.hasOwnProperty('check')) setCheck(state, config.check || false);
    if (config.hasOwnProperty('lastMove') && !config.lastMove) state.lastMove = undefined;else if (config.lastMove) state.lastMove = config.lastMove;
    if (state.selected) setSelected(state, state.selected);
    if (!state.animation.duration || state.animation.duration < 100) state.animation.enabled = false;

    if (!state.movable.rookCastle && state.movable.dests) {
      var rank = state.movable.color === 'white' ? '1' : '8',
          kingStartPos = 'e' + rank,
          dests = state.movable.dests.get(kingStartPos),
          _king = state.pieces.get(kingStartPos);

      if (!dests || !_king || _king.role !== 'king') return;
      state.movable.dests.set(kingStartPos, dests.filter(function (d) {
        return !(d === 'a' + rank && dests.includes('c' + rank)) && !(d === 'h' + rank && dests.includes('g' + rank));
      }));
    }
  }

  function merge(base, extend) {
    for (var key in extend) {
      if (isObject(base[key]) && isObject(extend[key])) merge(base[key], extend[key]);else base[key] = extend[key];
    }
  }

  function isObject(o) {
    return _typeof(o) === 'object';
  }

  function anim(mutation, state) {
    return state.animation.enabled ? animate(mutation, state) : render$1(mutation, state);
  }

  function render$1(mutation, state) {
    var result = mutation(state);
    state.dom.redraw();
    return result;
  }

  function makePiece(key, piece) {
    return {
      key: key,
      pos: key2pos(key),
      piece: piece
    };
  }

  function closer(piece, pieces) {
    return pieces.sort(function (p1, p2) {
      return distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos);
    })[0];
  }

  function computePlan(prevPieces, current) {
    var anims = new Map(),
        animedOrigs = [],
        fadings = new Map(),
        missings = [],
        news = [],
        prePieces = new Map();
    var curP, preP, vector;

    var _iterator5 = _createForOfIteratorHelper(prevPieces),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _slicedToArray(_step5.value, 2),
            k = _step5$value[0],
            _p = _step5$value[1];

        prePieces.set(k, makePiece(k, _p));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    var _iterator6 = _createForOfIteratorHelper(allKeys),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var key = _step6.value;
        curP = current.pieces.get(key);
        preP = prePieces.get(key);

        if (curP) {
          if (preP) {
            if (!samePiece(curP, preP.piece)) {
              missings.push(preP);
              news.push(makePiece(key, curP));
            }
          } else news.push(makePiece(key, curP));
        } else if (preP) missings.push(preP);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    var _loop = function _loop() {
      var newP = _news[_i];
      preP = closer(newP, missings.filter(function (p) {
        return samePiece(newP.piece, p.piece);
      }));

      if (preP) {
        vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
        anims.set(newP.key, vector.concat(vector));
        animedOrigs.push(preP.key);
      }
    };

    for (var _i = 0, _news = news; _i < _news.length; _i++) {
      _loop();
    }

    for (var _i2 = 0, _missings = missings; _i2 < _missings.length; _i2++) {
      var p = _missings[_i2];
      if (!animedOrigs.includes(p.key)) fadings.set(p.key, p.piece);
    }

    return {
      anims: anims,
      fadings: fadings
    };
  }

  function step(state, now) {
    var cur = state.animation.current;

    if (cur === undefined) {
      if (!state.dom.destroyed) state.dom.redrawNow();
      return;
    }

    var rest = 1 - (now - cur.start) * cur.frequency;

    if (rest <= 0) {
      state.animation.current = undefined;
      state.dom.redrawNow();
    } else {
      var ease = easing(rest);

      var _iterator7 = _createForOfIteratorHelper(cur.plan.anims.values()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var cfg = _step7.value;
          cfg[2] = cfg[0] * ease;
          cfg[3] = cfg[1] * ease;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      state.dom.redrawNow(true);
      requestAnimationFrame(function () {
        var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
        return step(state, now);
      });
    }
  }

  function animate(mutation, state) {
    var prevPieces = new Map(state.pieces);
    var result = mutation(state);
    var plan = computePlan(prevPieces, state);

    if (plan.anims.size || plan.fadings.size) {
      var alreadyRunning = state.animation.current && state.animation.current.start;
      state.animation.current = {
        start: performance.now(),
        frequency: 1 / state.animation.duration,
        plan: plan
      };
      if (!alreadyRunning) step(state, performance.now());
    } else {
      state.dom.redraw();
    }

    return result;
  }

  function easing(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  var brushes = ['green', 'red', 'blue', 'yellow'];

  function start$2(state, e) {
    if (e.touches && e.touches.length > 1) return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? unselect(state) : _cancelMove(state);

    var pos = eventPosition(e),
        orig = _getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());

    if (!orig) return;
    state.drawable.current = {
      orig: orig,
      pos: pos,
      brush: eventBrush(e),
      snapToValidMove: state.drawable.defaultSnapToValidMove
    };
    processDraw(state);
  }

  function processDraw(state) {
    requestAnimationFrame(function () {
      var cur = state.drawable.current;

      if (cur) {
        var keyAtDomPos = _getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());

        if (!keyAtDomPos) {
          cur.snapToValidMove = false;
        }

        var mouseSq = cur.snapToValidMove ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds()) : keyAtDomPos;

        if (mouseSq !== cur.mouseSq) {
          cur.mouseSq = mouseSq;
          cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
          state.dom.redrawNow();
        }

        processDraw(state);
      }
    });
  }

  function move$1(state, e) {
    if (state.drawable.current) state.drawable.current.pos = eventPosition(e);
  }

  function end$1(state) {
    var cur = state.drawable.current;

    if (cur) {
      if (cur.mouseSq) addShape(state.drawable, cur);
      cancel$1(state);
    }
  }

  function cancel$1(state) {
    if (state.drawable.current) {
      state.drawable.current = undefined;
      state.dom.redraw();
    }
  }

  function clear(state) {
    if (state.drawable.shapes.length) {
      state.drawable.shapes = [];
      state.dom.redraw();
      onChange(state.drawable);
    }
  }

  function eventBrush(e) {
    var _a;

    var modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
    var modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, 'AltGraph'));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
  }

  function addShape(drawable, cur) {
    var sameShape = function sameShape(s) {
      return s.orig === cur.orig && s.dest === cur.dest;
    };

    var similar = drawable.shapes.find(sameShape);
    if (similar) drawable.shapes = drawable.shapes.filter(function (s) {
      return !sameShape(s);
    });
    if (!similar || similar.brush !== cur.brush) drawable.shapes.push(cur);
    onChange(drawable);
  }

  function onChange(drawable) {
    if (drawable.onChange) drawable.onChange(drawable.shapes);
  }

  function start$1(s, e) {
    if (!e.isTrusted || e.button !== undefined && e.button !== 0) return;
    if (e.touches && e.touches.length > 1) return;

    var bounds = s.dom.bounds(),
        position = eventPosition(e),
        orig = _getKeyAtDomPos(position, whitePov(s), bounds);

    if (!orig) return;
    var piece = s.pieces.get(orig);
    var previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor)) clear(s);
    if (e.cancelable !== false && (!e.touches || !s.movable.color || piece || previouslySelected || pieceCloseTo(s, position))) e.preventDefault();
    var hadPremove = !!s.premovable.current;
    var hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;

    if (s.selected && canMove(s, s.selected, orig)) {
      anim(function (state) {
        return _selectSquare(state, orig);
      }, s);
    } else {
      _selectSquare(s, orig);
    }

    var stillSelected = s.selected === orig;
    var element = pieceElementByKey(s, orig);

    if (piece && element && stillSelected && isDraggable(s, orig)) {
      s.draggable.current = {
        orig: orig,
        piece: piece,
        origPos: position,
        pos: position,
        started: s.draggable.autoDistance && s.stats.dragged,
        element: element,
        previouslySelected: previouslySelected,
        originTarget: e.target
      };
      element.cgDragging = true;
      element.classList.add('dragging');
      var ghost = s.dom.elements.ghost;

      if (ghost) {
        ghost.className = "ghost ".concat(piece.color, " ").concat(piece.role);
        translateAbs(ghost, posToTranslateAbs(bounds)(key2pos(orig), whitePov(s)));
        setVisible(ghost, true);
      }

      processDrag(s);
    } else {
      if (hadPremove) unsetPremove(s);
      if (hadPredrop) unsetPredrop(s);
    }

    s.dom.redraw();
  }

  function pieceCloseTo(s, pos) {
    var asWhite = whitePov(s),
        bounds = s.dom.bounds(),
        radiusSq = Math.pow(bounds.width / 8, 2);

    for (var key in s.pieces) {
      var center = computeSquareCenter(key, asWhite, bounds);
      if (distanceSq(center, pos) <= radiusSq) return true;
    }

    return false;
  }

  function _dragNewPiece(s, piece, e, force) {
    var key = 'a0';
    s.pieces.set(key, piece);
    s.dom.redraw();
    var position = eventPosition(e);
    s.draggable.current = {
      orig: key,
      piece: piece,
      origPos: position,
      pos: position,
      started: true,
      element: function element() {
        return pieceElementByKey(s, key);
      },
      originTarget: e.target,
      newPiece: true,
      force: !!force
    };
    processDrag(s);
  }

  function processDrag(s) {
    requestAnimationFrame(function () {
      var _a;

      var cur = s.draggable.current;
      if (!cur) return;
      if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig)) s.animation.current = undefined;
      var origPiece = s.pieces.get(cur.orig);
      if (!origPiece || !samePiece(origPiece, cur.piece)) cancel(s);else {
        if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2)) cur.started = true;

        if (cur.started) {
          if (typeof cur.element === 'function') {
            var found = cur.element();
            if (!found) return;
            found.cgDragging = true;
            found.classList.add('dragging');
            cur.element = found;
          }

          var bounds = s.dom.bounds();
          translateAbs(cur.element, [cur.pos[0] - bounds.left - bounds.width / 16, cur.pos[1] - bounds.top - bounds.height / 16]);
        }
      }
      processDrag(s);
    });
  }

  function move(s, e) {
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
      s.draggable.current.pos = eventPosition(e);
    }
  }

  function end(s, e) {
    var cur = s.draggable.current;
    if (!cur) return;
    if (e.type === 'touchend' && e.cancelable !== false) e.preventDefault();

    if (e.type === 'touchend' && cur.originTarget !== e.target && !cur.newPiece) {
      s.draggable.current = undefined;
      return;
    }

    unsetPremove(s);
    unsetPredrop(s);
    var eventPos = eventPosition(e) || cur.pos;

    var dest = _getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());

    if (dest && cur.started && cur.orig !== dest) {
      if (cur.newPiece) dropNewPiece(s, cur.orig, dest, cur.force);else {
        s.stats.ctrlKey = e.ctrlKey;
        if (userMove(s, cur.orig, dest)) s.stats.dragged = true;
      }
    } else if (cur.newPiece) {
      s.pieces["delete"](cur.orig);
    } else if (s.draggable.deleteOnDropOff && !dest) {
      s.pieces["delete"](cur.orig);
      callUserFunction(s.events.change);
    }

    if (cur.orig === cur.previouslySelected && (cur.orig === dest || !dest)) unselect(s);else if (!s.selectable.enabled) unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
  }

  function cancel(s) {
    var cur = s.draggable.current;

    if (cur) {
      if (cur.newPiece) s.pieces["delete"](cur.orig);
      s.draggable.current = undefined;
      unselect(s);
      removeDragElements(s);
      s.dom.redraw();
    }
  }

  function removeDragElements(s) {
    var e = s.dom.elements;
    if (e.ghost) setVisible(e.ghost, false);
  }

  function pieceElementByKey(s, key) {
    var el = s.dom.elements.board.firstChild;

    while (el) {
      if (el.cgKey === key && el.tagName === 'PIECE') return el;
      el = el.nextSibling;
    }

    return;
  }

  function explosion(state, keys) {
    state.exploding = {
      stage: 1,
      keys: keys
    };
    state.dom.redraw();
    setTimeout(function () {
      setStage(state, 2);
      setTimeout(function () {
        return setStage(state, undefined);
      }, 120);
    }, 120);
  }

  function setStage(state, stage) {
    if (state.exploding) {
      if (stage) state.exploding.stage = stage;else state.exploding = undefined;
      state.dom.redraw();
    }
  }

  function start(state, redrawAll) {
    function toggleOrientation$1() {
      toggleOrientation(state);
      redrawAll();
    }

    return {
      set: function set(config) {
        if (config.orientation && config.orientation !== state.orientation) toggleOrientation$1();
        (config.fen ? anim : render$1)(function (state) {
          return configure(state, config);
        }, state);
      },
      state: state,
      getFen: function getFen() {
        return write(state.pieces);
      },
      toggleOrientation: toggleOrientation$1,
      setPieces: function setPieces(pieces) {
        anim(function (state) {
          return _setPieces(state, pieces);
        }, state);
      },
      selectSquare: function selectSquare(key, force) {
        if (key) anim(function (state) {
          return _selectSquare(state, key, force);
        }, state);else if (state.selected) {
          unselect(state);
          state.dom.redraw();
        }
      },
      move: function move(orig, dest) {
        anim(function (state) {
          return baseMove(state, orig, dest);
        }, state);
      },
      newPiece: function newPiece(piece, key) {
        anim(function (state) {
          return baseNewPiece(state, piece, key);
        }, state);
      },
      playPremove: function playPremove() {
        if (state.premovable.current) {
          if (anim(_playPremove, state)) return true;
          state.dom.redraw();
        }

        return false;
      },
      playPredrop: function playPredrop(validate) {
        if (state.predroppable.current) {
          var result = _playPredrop(state, validate);

          state.dom.redraw();
          return result;
        }

        return false;
      },
      cancelPremove: function cancelPremove() {
        render$1(unsetPremove, state);
      },
      cancelPredrop: function cancelPredrop() {
        render$1(unsetPredrop, state);
      },
      cancelMove: function cancelMove() {
        render$1(function (state) {
          _cancelMove(state);

          cancel(state);
        }, state);
      },
      stop: function stop() {
        render$1(function (state) {
          _stop(state);

          cancel(state);
        }, state);
      },
      explode: function explode(keys) {
        explosion(state, keys);
      },
      setAutoShapes: function setAutoShapes(shapes) {
        render$1(function (state) {
          return state.drawable.autoShapes = shapes;
        }, state);
      },
      setShapes: function setShapes(shapes) {
        render$1(function (state) {
          return state.drawable.shapes = shapes;
        }, state);
      },
      getKeyAtDomPos: function getKeyAtDomPos(pos) {
        return _getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
      },
      redrawAll: redrawAll,
      dragNewPiece: function dragNewPiece(piece, event, force) {
        _dragNewPiece(state, piece, event, force);
      },
      destroy: function destroy() {
        _stop(state);

        state.dom.unbind && state.dom.unbind();
        state.dom.destroyed = true;
      }
    };
  }

  function defaults() {
    return {
      pieces: read(initial),
      orientation: 'white',
      turnColor: 'white',
      coordinates: true,
      autoCastle: true,
      viewOnly: false,
      disableContextMenu: false,
      resizable: true,
      addPieceZIndex: false,
      pieceKey: false,
      highlight: {
        lastMove: true,
        check: true
      },
      animation: {
        enabled: true,
        duration: 200
      },
      movable: {
        free: true,
        color: 'both',
        showDests: true,
        events: {},
        rookCastle: true
      },
      premovable: {
        enabled: true,
        showDests: true,
        castle: true,
        events: {}
      },
      predroppable: {
        enabled: false,
        events: {}
      },
      draggable: {
        enabled: true,
        distance: 3,
        autoDistance: true,
        showGhost: true,
        deleteOnDropOff: false
      },
      dropmode: {
        active: false
      },
      selectable: {
        enabled: true
      },
      stats: {
        dragged: !('ontouchstart' in window)
      },
      events: {},
      drawable: {
        enabled: true,
        visible: true,
        defaultSnapToValidMove: true,
        eraseOnClick: true,
        shapes: [],
        autoShapes: [],
        brushes: {
          green: {
            key: 'g',
            color: '#15781B',
            opacity: 1,
            lineWidth: 10
          },
          red: {
            key: 'r',
            color: '#882020',
            opacity: 1,
            lineWidth: 10
          },
          blue: {
            key: 'b',
            color: '#003088',
            opacity: 1,
            lineWidth: 10
          },
          yellow: {
            key: 'y',
            color: '#e68f00',
            opacity: 1,
            lineWidth: 10
          },
          paleBlue: {
            key: 'pb',
            color: '#003088',
            opacity: 0.4,
            lineWidth: 15
          },
          paleGreen: {
            key: 'pg',
            color: '#15781B',
            opacity: 0.4,
            lineWidth: 15
          },
          paleRed: {
            key: 'pr',
            color: '#882020',
            opacity: 0.4,
            lineWidth: 15
          },
          paleGrey: {
            key: 'pgr',
            color: '#4a4a4a',
            opacity: 0.35,
            lineWidth: 15
          }
        },
        pieces: {
          baseUrl: 'https://lichess1.org/assets/piece/cburnett/'
        },
        prevSvgHash: ''
      },
      hold: timer()
    };
  }

  function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }

  function renderSvg(state, svg, customSvg) {
    var d = state.drawable,
        curD = d.current,
        cur = curD && curD.mouseSq ? curD : undefined,
        arrowDests = new Map(),
        bounds = state.dom.bounds();

    var _iterator8 = _createForOfIteratorHelper(d.shapes.concat(d.autoShapes).concat(cur ? [cur] : [])),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var s = _step8.value;
        if (s.dest) arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    var shapes = d.shapes.concat(d.autoShapes).map(function (s) {
      return {
        shape: s,
        current: false,
        hash: shapeHash(s, arrowDests, false, bounds)
      };
    });
    if (cur) shapes.push({
      shape: cur,
      current: true,
      hash: shapeHash(cur, arrowDests, true, bounds)
    });
    var fullHash = shapes.map(function (sc) {
      return sc.hash;
    }).join(';');
    if (fullHash === state.drawable.prevSvgHash) return;
    state.drawable.prevSvgHash = fullHash;
    var defsEl = svg.querySelector('defs');
    var shapesEl = svg.querySelector('g');
    var customSvgsEl = customSvg.querySelector('g');
    syncDefs(d, shapes, defsEl);
    syncShapes(state, shapes.filter(function (s) {
      return !s.shape.customSvg;
    }), d.brushes, arrowDests, shapesEl);
    syncShapes(state, shapes.filter(function (s) {
      return s.shape.customSvg;
    }), d.brushes, arrowDests, customSvgsEl);
  }

  function syncDefs(d, shapes, defsEl) {
    var brushes = new Map();
    var brush;

    var _iterator9 = _createForOfIteratorHelper(shapes),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var s = _step9.value;

        if (s.shape.dest) {
          brush = d.brushes[s.shape.brush];
          if (s.shape.modifiers) brush = makeCustomBrush(brush, s.shape.modifiers);
          brushes.set(brush.key, brush);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    var keysInDom = new Set();
    var el = defsEl.firstChild;

    while (el) {
      keysInDom.add(el.getAttribute('cgKey'));
      el = el.nextSibling;
    }

    var _iterator10 = _createForOfIteratorHelper(brushes.entries()),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _step10$value = _slicedToArray(_step10.value, 2),
            key = _step10$value[0],
            _brush = _step10$value[1];

        if (!keysInDom.has(key)) defsEl.appendChild(renderMarker(_brush));
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  }

  function syncShapes(state, shapes, brushes, arrowDests, root) {
    var bounds = state.dom.bounds(),
        hashesInDom = new Map(),
        toRemove = [];

    var _iterator11 = _createForOfIteratorHelper(shapes),
        _step11;

    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var sc = _step11.value;
        hashesInDom.set(sc.hash, false);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }

    var el = root.firstChild,
        elHash;

    while (el) {
      elHash = el.getAttribute('cgHash');
      if (hashesInDom.has(elHash)) hashesInDom.set(elHash, true);else toRemove.push(el);
      el = el.nextSibling;
    }

    for (var _i3 = 0, _toRemove = toRemove; _i3 < _toRemove.length; _i3++) {
      var _el = _toRemove[_i3];
      root.removeChild(_el);
    }

    var _iterator12 = _createForOfIteratorHelper(shapes),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _sc = _step12.value;
        if (!hashesInDom.get(_sc.hash)) root.appendChild(renderShape(state, _sc, brushes, arrowDests, bounds));
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }

  function shapeHash(_ref, arrowDests, current, bounds) {
    var orig = _ref.orig,
        dest = _ref.dest,
        brush = _ref.brush,
        piece = _ref.piece,
        modifiers = _ref.modifiers,
        customSvg = _ref.customSvg;
    return [bounds.width, bounds.height, current, orig, dest, brush, dest && (arrowDests.get(dest) || 0) > 1, piece && pieceHash(piece), modifiers && modifiersHash(modifiers), customSvg && customSvgHash(customSvg)].filter(function (x) {
      return x;
    }).join(',');
  }

  function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter(function (x) {
      return x;
    }).join(',');
  }

  function modifiersHash(m) {
    return '' + (m.lineWidth || '');
  }

  function customSvgHash(s) {
    var h = 0;

    for (var i = 0; i < s.length; i++) {
      h = (h << 5) - h + s.charCodeAt(i) >>> 0;
    }

    return 'custom-' + h.toString();
  }

  function renderShape(state, _ref2, brushes, arrowDests, bounds) {
    var shape = _ref2.shape,
        current = _ref2.current,
        hash = _ref2.hash;
    var el;

    if (shape.customSvg) {
      var orig = orient(key2pos(shape.orig), state.orientation);
      el = renderCustomSvg(shape.customSvg, orig, bounds);
    } else if (shape.piece) el = renderPiece(state.drawable.pieces.baseUrl, orient(key2pos(shape.orig), state.orientation), shape.piece, bounds);else {
      var _orig = orient(key2pos(shape.orig), state.orientation);

      if (shape.dest) {
        var brush = brushes[shape.brush];
        if (shape.modifiers) brush = makeCustomBrush(brush, shape.modifiers);
        el = renderArrow(brush, _orig, orient(key2pos(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
      } else el = renderCircle(brushes[shape.brush], _orig, current, bounds);
    }

    el.setAttribute('cgHash', hash);
    return el;
  }

  function renderCustomSvg(customSvg, pos, bounds) {
    var width = bounds.width,
        height = bounds.height;
    var w = width / 8;
    var h = height / 8;
    var x = pos[0] * w;
    var y = (7 - pos[1]) * h;
    var g = setAttributes(createElement('g'), {
      transform: "translate(".concat(x, ",").concat(y, ")")
    });
    var svg = setAttributes(createElement('svg'), {
      width: w,
      height: h,
      viewBox: '0 0 100 100'
    });
    g.appendChild(svg);
    svg.innerHTML = customSvg;
    return g;
  }

  function renderCircle(brush, pos, current, bounds) {
    var o = pos2px(pos, bounds),
        widths = circleWidth(bounds),
        radius = (bounds.width + bounds.height) / 32;
    return setAttributes(createElement('circle'), {
      stroke: brush.color,
      'stroke-width': widths[current ? 0 : 1],
      fill: 'none',
      opacity: opacity(brush, current),
      cx: o[0],
      cy: o[1],
      r: radius - widths[1] / 2
    });
  }

  function renderArrow(brush, orig, dest, current, shorten, bounds) {
    var m = arrowMargin(bounds, shorten && !current),
        a = pos2px(orig, bounds),
        b = pos2px(dest, bounds),
        dx = b[0] - a[0],
        dy = b[1] - a[1],
        angle = Math.atan2(dy, dx),
        xo = Math.cos(angle) * m,
        yo = Math.sin(angle) * m;
    return setAttributes(createElement('line'), {
      stroke: brush.color,
      'stroke-width': lineWidth(brush, current, bounds),
      'stroke-linecap': 'round',
      'marker-end': 'url(#arrowhead-' + brush.key + ')',
      opacity: opacity(brush, current),
      x1: a[0],
      y1: a[1],
      x2: b[0] - xo,
      y2: b[1] - yo
    });
  }

  function renderPiece(baseUrl, pos, piece, bounds) {
    var o = pos2px(pos, bounds),
        size = bounds.width / 8 * (piece.scale || 1),
        name = piece.color[0] + (piece.role === 'knight' ? 'n' : piece.role[0]).toUpperCase();
    return setAttributes(createElement('image'), {
      className: "".concat(piece.role, " ").concat(piece.color),
      x: o[0] - size / 2,
      y: o[1] - size / 2,
      width: size,
      height: size,
      href: baseUrl + name + '.svg'
    });
  }

  function renderMarker(brush) {
    var marker = setAttributes(createElement('marker'), {
      id: 'arrowhead-' + brush.key,
      orient: 'auto',
      markerWidth: 4,
      markerHeight: 8,
      refX: 2.05,
      refY: 2.01
    });
    marker.appendChild(setAttributes(createElement('path'), {
      d: 'M0,0 V4 L3,2 Z',
      fill: brush.color
    }));
    marker.setAttribute('cgKey', brush.key);
    return marker;
  }

  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }

    return el;
  }

  function orient(pos, color) {
    return color === 'white' ? pos : [7 - pos[0], 7 - pos[1]];
  }

  function makeCustomBrush(base, modifiers) {
    return {
      color: base.color,
      opacity: Math.round(base.opacity * 10) / 10,
      lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
      key: [base.key, modifiers.lineWidth].filter(function (x) {
        return x;
      }).join('')
    };
  }

  function circleWidth(bounds) {
    var base = bounds.width / 512;
    return [3 * base, 4 * base];
  }

  function lineWidth(brush, current, bounds) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 512 * bounds.width;
  }

  function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
  }

  function arrowMargin(bounds, shorten) {
    return (shorten ? 20 : 10) / 512 * bounds.width;
  }

  function pos2px(pos, bounds) {
    return [(pos[0] + 0.5) * bounds.width / 8, (7.5 - pos[1]) * bounds.height / 8];
  }

  function renderWrap(element, s, relative) {
    element.innerHTML = '';
    element.classList.add('cg-wrap');

    var _iterator13 = _createForOfIteratorHelper(colors),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var c = _step13.value;
        element.classList.toggle('orientation-' + c, s.orientation === c);
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    element.classList.toggle('manipulable', !s.viewOnly);
    var helper = createEl('cg-helper');
    element.appendChild(helper);
    var container = createEl('cg-container');
    helper.appendChild(container);
    var board = createEl('cg-board');
    container.appendChild(board);
    var svg;
    var customSvg;

    if (s.drawable.visible && !relative) {
      svg = setAttributes(createElement('svg'), {
        'class': 'cg-shapes'
      });
      svg.appendChild(createElement('defs'));
      svg.appendChild(createElement('g'));
      customSvg = setAttributes(createElement('svg'), {
        'class': 'cg-custom-svgs'
      });
      customSvg.appendChild(createElement('g'));
      container.appendChild(svg);
      container.appendChild(customSvg);
    }

    if (s.coordinates) {
      var orientClass = s.orientation === 'black' ? ' black' : '';
      container.appendChild(renderCoords(ranks, 'ranks' + orientClass));
      container.appendChild(renderCoords(files, 'files' + orientClass));
    }

    var ghost;

    if (s.draggable.showGhost && !relative) {
      ghost = createEl('piece', 'ghost');
      setVisible(ghost, false);
      container.appendChild(ghost);
    }

    return {
      board: board,
      container: container,
      ghost: ghost,
      svg: svg,
      customSvg: customSvg
    };
  }

  function renderCoords(elems, className) {
    var el = createEl('coords', className);
    var f;

    var _iterator14 = _createForOfIteratorHelper(elems),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var elem = _step14.value;
        f = createEl('coord');
        f.textContent = elem;
        el.appendChild(f);
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }

    return el;
  }

  function drop(s, e) {
    if (!s.dropmode.active) return;
    unsetPremove(s);
    unsetPredrop(s);
    var piece = s.dropmode.piece;

    if (piece) {
      s.pieces.set('a0', piece);
      var position = eventPosition(e);

      var dest = position && _getKeyAtDomPos(position, whitePov(s), s.dom.bounds());

      if (dest) dropNewPiece(s, 'a0', dest);
    }

    s.dom.redraw();
  }

  function bindBoard(s, boundsUpdated) {
    var boardEl = s.dom.elements.board;

    if (!s.dom.relative && s.resizable && 'ResizeObserver' in window) {
      var observer = new window['ResizeObserver'](boundsUpdated);
      observer.observe(boardEl);
    }

    if (s.viewOnly) return;
    var onStart = startDragOrDraw(s);
    boardEl.addEventListener('touchstart', onStart, {
      passive: false
    });
    boardEl.addEventListener('mousedown', onStart, {
      passive: false
    });

    if (s.disableContextMenu || s.drawable.enabled) {
      boardEl.addEventListener('contextmenu', function (e) {
        return e.preventDefault();
      });
    }
  }

  function bindDocument(s, boundsUpdated) {
    var unbinds = [];

    if (!s.dom.relative && s.resizable && !('ResizeObserver' in window)) {
      unbinds.push(unbindable(document.body, 'chessground.resize', boundsUpdated));
    }

    if (!s.viewOnly) {
      var onmove = dragOrDraw(s, move, move$1);
      var onend = dragOrDraw(s, end, end$1);

      for (var _i4 = 0, _arr = ['touchmove', 'mousemove']; _i4 < _arr.length; _i4++) {
        var ev = _arr[_i4];
        unbinds.push(unbindable(document, ev, onmove));
      }

      for (var _i5 = 0, _arr2 = ['touchend', 'mouseup']; _i5 < _arr2.length; _i5++) {
        var _ev = _arr2[_i5];
        unbinds.push(unbindable(document, _ev, onend));
      }

      var onScroll = function onScroll() {
        return s.dom.bounds.clear();
      };

      unbinds.push(unbindable(document, 'scroll', onScroll, {
        capture: true,
        passive: true
      }));
      unbinds.push(unbindable(window, 'resize', onScroll, {
        passive: true
      }));
    }

    return function () {
      return unbinds.forEach(function (f) {
        return f();
      });
    };
  }

  function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return function () {
      return el.removeEventListener(eventName, callback, options);
    };
  }

  function startDragOrDraw(s) {
    return function (e) {
      if (s.draggable.current) cancel(s);else if (s.drawable.current) cancel$1(s);else if (e.shiftKey || isRightButton(e)) {
        if (s.drawable.enabled) start$2(s, e);
      } else if (!s.viewOnly) {
        if (s.dropmode.active) drop(s, e);else start$1(s, e);
      }
    };
  }

  function dragOrDraw(s, withDrag, withDraw) {
    return function (e) {
      if (s.drawable.current) {
        if (s.drawable.enabled) withDraw(s, e);
      } else if (!s.viewOnly) withDrag(s, e);
    };
  }

  function render(s) {
    var asWhite = whitePov(s),
        posToTranslate = s.dom.relative ? posToTranslateRel : posToTranslateAbs(s.dom.bounds()),
        translate = s.dom.relative ? translateRel : translateAbs,
        boardEl = s.dom.elements.board,
        pieces = s.pieces,
        curAnim = s.animation.current,
        anims = curAnim ? curAnim.plan.anims : new Map(),
        fadings = curAnim ? curAnim.plan.fadings : new Map(),
        curDrag = s.draggable.current,
        squares = computeSquareClasses(s),
        samePieces = new Set(),
        sameSquares = new Set(),
        movedPieces = new Map(),
        movedSquares = new Map();
    var k, el, pieceAtKey, elPieceName, anim, fading, pMvdset, pMvd, sMvdset, sMvd;
    el = boardEl.firstChild;

    while (el) {
      k = el.cgKey;

      if (isPieceNode(el)) {
        pieceAtKey = pieces.get(k);
        anim = anims.get(k);
        fading = fadings.get(k);
        elPieceName = el.cgPiece;

        if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
          el.classList.remove('dragging');
          translate(el, posToTranslate(key2pos(k), asWhite));
          el.cgDragging = false;
        }

        if (!fading && el.cgFading) {
          el.cgFading = false;
          el.classList.remove('fading');
        }

        if (pieceAtKey) {
          if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
            var pos = key2pos(k);
            pos[0] += anim[2];
            pos[1] += anim[3];
            el.classList.add('anim');
            translate(el, posToTranslate(pos, asWhite));
          } else if (el.cgAnimating) {
            el.cgAnimating = false;
            el.classList.remove('anim');
            translate(el, posToTranslate(key2pos(k), asWhite));
            if (s.addPieceZIndex) el.style.zIndex = posZIndex(key2pos(k), asWhite);
          }

          if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
            samePieces.add(k);
          } else {
            if (fading && elPieceName === pieceNameOf(fading)) {
              el.classList.add('fading');
              el.cgFading = true;
            } else {
              appendValue(movedPieces, elPieceName, el);
            }
          }
        } else {
          appendValue(movedPieces, elPieceName, el);
        }
      } else if (isSquareNode(el)) {
        var cn = el.className;
        if (squares.get(k) === cn) sameSquares.add(k);else appendValue(movedSquares, cn, el);
      }

      el = el.nextSibling;
    }

    var _iterator15 = _createForOfIteratorHelper(squares),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var _step15$value = _slicedToArray(_step15.value, 2),
            sk = _step15$value[0],
            className = _step15$value[1];

        if (!sameSquares.has(sk)) {
          sMvdset = movedSquares.get(className);
          sMvd = sMvdset && sMvdset.pop();
          var translation = posToTranslate(key2pos(sk), asWhite);

          if (sMvd) {
            sMvd.cgKey = sk;
            translate(sMvd, translation);
          } else {
            var squareNode = createEl('square', className);
            squareNode.cgKey = sk;
            translate(squareNode, translation);
            boardEl.insertBefore(squareNode, boardEl.firstChild);
          }
        }
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    var _iterator16 = _createForOfIteratorHelper(pieces),
        _step16;

    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _step16$value = _slicedToArray(_step16.value, 2),
            _k = _step16$value[0],
            p = _step16$value[1];

        anim = anims.get(_k);

        if (!samePieces.has(_k)) {
          pMvdset = movedPieces.get(pieceNameOf(p));
          pMvd = pMvdset && pMvdset.pop();

          if (pMvd) {
            pMvd.cgKey = _k;

            if (pMvd.cgFading) {
              pMvd.classList.remove('fading');
              pMvd.cgFading = false;
            }

            var _pos = key2pos(_k);

            if (s.addPieceZIndex) pMvd.style.zIndex = posZIndex(_pos, asWhite);

            if (anim) {
              pMvd.cgAnimating = true;
              pMvd.classList.add('anim');
              _pos[0] += anim[2];
              _pos[1] += anim[3];
            }

            translate(pMvd, posToTranslate(_pos, asWhite));
          } else {
            var pieceName = pieceNameOf(p),
                pieceNode = createEl('piece', pieceName),
                _pos2 = key2pos(_k);

            pieceNode.cgPiece = pieceName;
            pieceNode.cgKey = _k;

            if (anim) {
              pieceNode.cgAnimating = true;
              _pos2[0] += anim[2];
              _pos2[1] += anim[3];
            }

            translate(pieceNode, posToTranslate(_pos2, asWhite));
            if (s.addPieceZIndex) pieceNode.style.zIndex = posZIndex(_pos2, asWhite);
            boardEl.appendChild(pieceNode);
          }
        }
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }

    var _iterator17 = _createForOfIteratorHelper(movedPieces.values()),
        _step17;

    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var nodes = _step17.value;
        removeNodes(s, nodes);
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }

    var _iterator18 = _createForOfIteratorHelper(movedSquares.values()),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _nodes = _step18.value;
        removeNodes(s, _nodes);
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }
  }

  function updateBounds(s) {
    if (s.dom.relative) return;
    var asWhite = whitePov(s),
        posToTranslate = posToTranslateAbs(s.dom.bounds());
    var el = s.dom.elements.board.firstChild;

    while (el) {
      if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) {
        translateAbs(el, posToTranslate(key2pos(el.cgKey), asWhite));
      }

      el = el.nextSibling;
    }
  }

  function isPieceNode(el) {
    return el.tagName === 'PIECE';
  }

  function isSquareNode(el) {
    return el.tagName === 'SQUARE';
  }

  function removeNodes(s, nodes) {
    var _iterator19 = _createForOfIteratorHelper(nodes),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var node = _step19.value;
        s.dom.elements.board.removeChild(node);
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }

  function posZIndex(pos, asWhite) {
    var z = 2 + pos[1] * 8 + (7 - pos[0]);
    if (asWhite) z = 67 - z;
    return z + '';
  }

  function pieceNameOf(piece) {
    return "".concat(piece.color, " ").concat(piece.role);
  }

  function computeSquareClasses(s) {
    var _a;

    var squares = new Map();

    if (s.lastMove && s.highlight.lastMove) {
      var _iterator20 = _createForOfIteratorHelper(s.lastMove),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var k = _step20.value;
          addSquare(squares, k, 'last-move');
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }

    if (s.check && s.highlight.check) addSquare(squares, s.check, 'check');

    if (s.selected) {
      addSquare(squares, s.selected, 'selected');

      if (s.movable.showDests) {
        var dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);

        if (dests) {
          var _iterator21 = _createForOfIteratorHelper(dests),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _k2 = _step21.value;
              addSquare(squares, _k2, 'move-dest' + (s.pieces.has(_k2) ? ' oc' : ''));
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }

        var pDests = s.premovable.dests;

        if (pDests) {
          var _iterator22 = _createForOfIteratorHelper(pDests),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _k3 = _step22.value;
              addSquare(squares, _k3, 'premove-dest' + (s.pieces.has(_k3) ? ' oc' : ''));
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
      }
    }

    var premove = s.premovable.current;

    if (premove) {
      var _iterator23 = _createForOfIteratorHelper(premove),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _k4 = _step23.value;
          addSquare(squares, _k4, 'current-premove');
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    } else if (s.predroppable.current) addSquare(squares, s.predroppable.current.key, 'current-premove');

    var o = s.exploding;

    if (o) {
      var _iterator24 = _createForOfIteratorHelper(o.keys),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _k5 = _step24.value;
          addSquare(squares, _k5, 'exploding' + o.stage);
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }

    return squares;
  }

  function addSquare(squares, key, klass) {
    var classes = squares.get(key);
    if (classes) squares.set(key, "".concat(classes, " ").concat(klass));else squares.set(key, klass);
  }

  function appendValue(map, key, value) {
    var arr = map.get(key);
    if (arr) arr.push(value);else map.set(key, [value]);
  }

  function Chessground(element, config) {
    var maybeState = defaults();
    configure(maybeState, config || {});

    function redrawAll() {
      var prevUnbind = 'dom' in maybeState ? maybeState.dom.unbind : undefined;

      var relative = maybeState.viewOnly && !maybeState.drawable.visible,
          elements = renderWrap(element, maybeState, relative),
          bounds = memo(function () {
        return elements.board.getBoundingClientRect();
      }),
          redrawNow = function redrawNow(skipSvg) {
        render(state);
        if (!skipSvg && elements.svg) renderSvg(state, elements.svg, elements.customSvg);
      },
          boundsUpdated = function boundsUpdated() {
        bounds.clear();
        updateBounds(state);
        if (elements.svg) renderSvg(state, elements.svg, elements.customSvg);
      };

      var state = maybeState;
      state.dom = {
        elements: elements,
        bounds: bounds,
        redraw: debounceRedraw(redrawNow),
        redrawNow: redrawNow,
        unbind: prevUnbind,
        relative: relative
      };
      state.drawable.prevSvgHash = '';
      redrawNow(false);
      bindBoard(state, boundsUpdated);
      if (!prevUnbind) state.dom.unbind = bindDocument(state, boundsUpdated);
      state.events.insert && state.events.insert(elements);
      return state;
    }

    return start(redrawAll(), redrawAll);
  }

  function debounceRedraw(redrawNow) {
    var redrawing = false;
    return function () {
      if (redrawing) return;
      redrawing = true;
      requestAnimationFrame(function () {
        redrawNow();
        redrawing = false;
      });
    };
  }

  /*
   * Copyright (c) 2021, Jeff Hlywa (jhlywa@gmail.com)
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   *    this list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *
   *----------------------------------------------------------------------------*/

  function Chess(fen) {
    var BLACK = 'b';
    var WHITE = 'w';
    var EMPTY = -1;
    var PAWN = 'p';
    var KNIGHT = 'n';
    var BISHOP = 'b';
    var ROOK = 'r';
    var QUEEN = 'q';
    var KING = 'k';
    var SYMBOLS = 'pnbrqkPNBRQK';
    var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];
    var PAWN_OFFSETS = {
      b: [16, 32, 17, 15],
      w: [-16, -32, -17, -15]
    };
    var PIECE_OFFSETS = {
      n: [-18, -33, -31, -14, 18, 33, 31, 14],
      b: [-17, -15, 17, 15],
      r: [-16, 1, 16, -1],
      q: [-17, -16, -15, 1, 17, 16, 15, -1],
      k: [-17, -16, -15, 1, 17, 16, 15, -1]
    }; // prettier-ignore

    var ATTACKS = [20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0, 0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20]; // prettier-ignore

    var RAYS = [17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0, 0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0, 0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0, 0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0, -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17];
    var SHIFTS = {
      p: 0,
      n: 1,
      b: 2,
      r: 3,
      q: 4,
      k: 5
    };
    var FLAGS = {
      NORMAL: 'n',
      CAPTURE: 'c',
      BIG_PAWN: 'b',
      EP_CAPTURE: 'e',
      PROMOTION: 'p',
      KSIDE_CASTLE: 'k',
      QSIDE_CASTLE: 'q'
    };
    var BITS = {
      NORMAL: 1,
      CAPTURE: 2,
      BIG_PAWN: 4,
      EP_CAPTURE: 8,
      PROMOTION: 16,
      KSIDE_CASTLE: 32,
      QSIDE_CASTLE: 64
    };
    var RANK_1 = 7;
    var RANK_2 = 6;
    var RANK_7 = 1;
    var RANK_8 = 0; // prettier-ignore

    var SQUARES = {
      a8: 0,
      b8: 1,
      c8: 2,
      d8: 3,
      e8: 4,
      f8: 5,
      g8: 6,
      h8: 7,
      a7: 16,
      b7: 17,
      c7: 18,
      d7: 19,
      e7: 20,
      f7: 21,
      g7: 22,
      h7: 23,
      a6: 32,
      b6: 33,
      c6: 34,
      d6: 35,
      e6: 36,
      f6: 37,
      g6: 38,
      h6: 39,
      a5: 48,
      b5: 49,
      c5: 50,
      d5: 51,
      e5: 52,
      f5: 53,
      g5: 54,
      h5: 55,
      a4: 64,
      b4: 65,
      c4: 66,
      d4: 67,
      e4: 68,
      f4: 69,
      g4: 70,
      h4: 71,
      a3: 80,
      b3: 81,
      c3: 82,
      d3: 83,
      e3: 84,
      f3: 85,
      g3: 86,
      h3: 87,
      a2: 96,
      b2: 97,
      c2: 98,
      d2: 99,
      e2: 100,
      f2: 101,
      g2: 102,
      h2: 103,
      a1: 112,
      b1: 113,
      c1: 114,
      d1: 115,
      e1: 116,
      f1: 117,
      g1: 118,
      h1: 119
    };
    var ROOKS = {
      w: [{
        square: SQUARES.a1,
        flag: BITS.QSIDE_CASTLE
      }, {
        square: SQUARES.h1,
        flag: BITS.KSIDE_CASTLE
      }],
      b: [{
        square: SQUARES.a8,
        flag: BITS.QSIDE_CASTLE
      }, {
        square: SQUARES.h8,
        flag: BITS.KSIDE_CASTLE
      }]
    };

    var _board = new Array(128);

    var kings = {
      w: EMPTY,
      b: EMPTY
    };
    var _turn = WHITE;
    var castling = {
      w: 0,
      b: 0
    };
    var ep_square = EMPTY;
    var half_moves = 0;
    var move_number = 1;
    var _history = [];
    var header = {};
    var comments = {};
    /* if the user passes in a fen string, load it, else default to
     * starting position
     */

    if (typeof fen === 'undefined') {
      _load(DEFAULT_POSITION);
    } else {
      _load(fen);
    }

    function _clear(keep_headers) {
      if (typeof keep_headers === 'undefined') {
        keep_headers = false;
      }

      _board = new Array(128);
      kings = {
        w: EMPTY,
        b: EMPTY
      };
      _turn = WHITE;
      castling = {
        w: 0,
        b: 0
      };
      ep_square = EMPTY;
      half_moves = 0;
      move_number = 1;
      _history = [];
      if (!keep_headers) header = {};
      comments = {};
      update_setup(generate_fen());
    }

    function prune_comments() {
      var reversed_history = [];
      var current_comments = {};

      var copy_comment = function copy_comment(fen) {
        if (fen in comments) {
          current_comments[fen] = comments[fen];
        }
      };

      while (_history.length > 0) {
        reversed_history.push(undo_move());
      }

      copy_comment(generate_fen());

      while (reversed_history.length > 0) {
        make_move(reversed_history.pop());
        copy_comment(generate_fen());
      }

      comments = current_comments;
    }

    function _reset() {
      _load(DEFAULT_POSITION);
    }

    function _load(fen, keep_headers) {
      if (typeof keep_headers === 'undefined') {
        keep_headers = false;
      }

      var tokens = fen.split(/\s+/);
      var position = tokens[0];
      var square = 0;

      if (!_validate_fen(fen).valid) {
        return false;
      }

      _clear(keep_headers);

      for (var i = 0; i < position.length; i++) {
        var piece = position.charAt(i);

        if (piece === '/') {
          square += 8;
        } else if (is_digit(piece)) {
          square += parseInt(piece, 10);
        } else {
          var color = piece < 'a' ? WHITE : BLACK;

          _put({
            type: piece.toLowerCase(),
            color: color
          }, algebraic(square));

          square++;
        }
      }

      _turn = tokens[1];

      if (tokens[2].indexOf('K') > -1) {
        castling.w |= BITS.KSIDE_CASTLE;
      }

      if (tokens[2].indexOf('Q') > -1) {
        castling.w |= BITS.QSIDE_CASTLE;
      }

      if (tokens[2].indexOf('k') > -1) {
        castling.b |= BITS.KSIDE_CASTLE;
      }

      if (tokens[2].indexOf('q') > -1) {
        castling.b |= BITS.QSIDE_CASTLE;
      }

      ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]];
      half_moves = parseInt(tokens[4], 10);
      move_number = parseInt(tokens[5], 10);
      update_setup(generate_fen());
      return true;
    }
    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */


    function _validate_fen(fen) {
      var errors = {
        0: 'No errors.',
        1: 'FEN string must contain six space-delimited fields.',
        2: '6th field (move number) must be a positive integer.',
        3: '5th field (half move counter) must be a non-negative integer.',
        4: '4th field (en-passant square) is invalid.',
        5: '3rd field (castling availability) is invalid.',
        6: '2nd field (side to move) is invalid.',
        7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
        8: '1st field (piece positions) is invalid [consecutive numbers].',
        9: '1st field (piece positions) is invalid [invalid piece].',
        10: '1st field (piece positions) is invalid [row too large].',
        11: 'Illegal en-passant square'
      };
      /* 1st criterion: 6 space-seperated fields? */

      var tokens = fen.split(/\s+/);

      if (tokens.length !== 6) {
        return {
          valid: false,
          error_number: 1,
          error: errors[1]
        };
      }
      /* 2nd criterion: move number field is a integer value > 0? */


      if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
        return {
          valid: false,
          error_number: 2,
          error: errors[2]
        };
      }
      /* 3rd criterion: half move counter is an integer >= 0? */


      if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
        return {
          valid: false,
          error_number: 3,
          error: errors[3]
        };
      }
      /* 4th criterion: 4th field is a valid e.p.-string? */


      if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
        return {
          valid: false,
          error_number: 4,
          error: errors[4]
        };
      }
      /* 5th criterion: 3th field is a valid castle-string? */


      if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
        return {
          valid: false,
          error_number: 5,
          error: errors[5]
        };
      }
      /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */


      if (!/^(w|b)$/.test(tokens[1])) {
        return {
          valid: false,
          error_number: 6,
          error: errors[6]
        };
      }
      /* 7th criterion: 1st field contains 8 rows? */


      var rows = tokens[0].split('/');

      if (rows.length !== 8) {
        return {
          valid: false,
          error_number: 7,
          error: errors[7]
        };
      }
      /* 8th criterion: every row is valid? */


      for (var i = 0; i < rows.length; i++) {
        /* check for right sum of fields AND not two numbers in succession */
        var sum_fields = 0;
        var previous_was_number = false;

        for (var k = 0; k < rows[i].length; k++) {
          if (!isNaN(rows[i][k])) {
            if (previous_was_number) {
              return {
                valid: false,
                error_number: 8,
                error: errors[8]
              };
            }

            sum_fields += parseInt(rows[i][k], 10);
            previous_was_number = true;
          } else {
            if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
              return {
                valid: false,
                error_number: 9,
                error: errors[9]
              };
            }

            sum_fields += 1;
            previous_was_number = false;
          }
        }

        if (sum_fields !== 8) {
          return {
            valid: false,
            error_number: 10,
            error: errors[10]
          };
        }
      }

      if (tokens[3][1] == '3' && tokens[1] == 'w' || tokens[3][1] == '6' && tokens[1] == 'b') {
        return {
          valid: false,
          error_number: 11,
          error: errors[11]
        };
      }
      /* everything's okay! */


      return {
        valid: true,
        error_number: 0,
        error: errors[0]
      };
    }

    function generate_fen() {
      var empty = 0;
      var fen = '';

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (_board[i] == null) {
          empty++;
        } else {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }

          var color = _board[i].color;
          var piece = _board[i].type;
          fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        }

        if (i + 1 & 0x88) {
          if (empty > 0) {
            fen += empty;
          }

          if (i !== SQUARES.h1) {
            fen += '/';
          }

          empty = 0;
          i += 8;
        }
      }

      var cflags = '';

      if (castling[WHITE] & BITS.KSIDE_CASTLE) {
        cflags += 'K';
      }

      if (castling[WHITE] & BITS.QSIDE_CASTLE) {
        cflags += 'Q';
      }

      if (castling[BLACK] & BITS.KSIDE_CASTLE) {
        cflags += 'k';
      }

      if (castling[BLACK] & BITS.QSIDE_CASTLE) {
        cflags += 'q';
      }
      /* do we have an empty castling flag? */


      cflags = cflags || '-';
      var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square);
      return [fen, _turn, cflags, epflags, half_moves, move_number].join(' ');
    }

    function set_header(args) {
      for (var i = 0; i < args.length; i += 2) {
        if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
          header[args[i]] = args[i + 1];
        }
      }

      return header;
    }
    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */


    function update_setup(fen) {
      if (_history.length > 0) return;

      if (fen !== DEFAULT_POSITION) {
        header['SetUp'] = '1';
        header['FEN'] = fen;
      } else {
        delete header['SetUp'];
        delete header['FEN'];
      }
    }

    function _get(square) {
      var piece = _board[SQUARES[square]];
      return piece ? {
        type: piece.type,
        color: piece.color
      } : null;
    }

    function _put(piece, square) {
      /* check for valid piece object */
      if (!('type' in piece && 'color' in piece)) {
        return false;
      }
      /* check for piece */


      if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
        return false;
      }
      /* check for valid square */


      if (!(square in SQUARES)) {
        return false;
      }

      var sq = SQUARES[square];
      /* don't let the user place more than one king */

      if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
        return false;
      }

      _board[sq] = {
        type: piece.type,
        color: piece.color
      };

      if (piece.type === KING) {
        kings[piece.color] = sq;
      }

      update_setup(generate_fen());
      return true;
    }

    function _remove(square) {
      var piece = _get(square);

      _board[SQUARES[square]] = null;

      if (piece && piece.type === KING) {
        kings[piece.color] = EMPTY;
      }

      update_setup(generate_fen());
      return piece;
    }

    function build_move(board, from, to, flags, promotion) {
      var move = {
        color: _turn,
        from: from,
        to: to,
        flags: flags,
        piece: board[from].type
      };

      if (promotion) {
        move.flags |= BITS.PROMOTION;
        move.promotion = promotion;
      }

      if (board[to]) {
        move.captured = board[to].type;
      } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
      }

      return move;
    }

    function generate_moves(options) {
      function add_move(board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];

          for (var i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
        } else {
          moves.push(build_move(board, from, to, flags));
        }
      }

      var moves = [];
      var us = _turn;
      var them = swap_color(us);
      var second_rank = {
        b: RANK_7,
        w: RANK_2
      };
      var first_sq = SQUARES.a8;
      var last_sq = SQUARES.h1;
      var single_square = false;
      /* do we want legal moves? */

      var legal = typeof options !== 'undefined' && 'legal' in options ? options.legal : true;
      var piece_type = typeof options !== 'undefined' && 'piece' in options && typeof options.piece === 'string' ? options.piece.toLowerCase() : true;
      /* are we generating moves for a single square? */

      if (typeof options !== 'undefined' && 'square' in options) {
        if (options.square in SQUARES) {
          first_sq = last_sq = SQUARES[options.square];
          single_square = true;
        } else {
          /* invalid square */
          return [];
        }
      }

      for (var i = first_sq; i <= last_sq; i++) {
        /* did we run off the end of the board */
        if (i & 0x88) {
          i += 7;
          continue;
        }

        var piece = _board[i];

        if (piece == null || piece.color !== us) {
          continue;
        }

        if (piece.type === PAWN && (piece_type === true || piece_type === PAWN)) {
          /* single square, non-capturing */
          var square = i + PAWN_OFFSETS[us][0];

          if (_board[square] == null) {
            add_move(_board, moves, i, square, BITS.NORMAL);
            /* double square */

            var square = i + PAWN_OFFSETS[us][1];

            if (second_rank[us] === rank(i) && _board[square] == null) {
              add_move(_board, moves, i, square, BITS.BIG_PAWN);
            }
          }
          /* pawn captures */


          for (j = 2; j < 4; j++) {
            var square = i + PAWN_OFFSETS[us][j];
            if (square & 0x88) continue;

            if (_board[square] != null && _board[square].color === them) {
              add_move(_board, moves, i, square, BITS.CAPTURE);
            } else if (square === ep_square) {
              add_move(_board, moves, i, ep_square, BITS.EP_CAPTURE);
            }
          }
        } else if (piece_type === true || piece_type === piece.type) {
          for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
            var offset = PIECE_OFFSETS[piece.type][j];
            var square = i;

            while (true) {
              square += offset;
              if (square & 0x88) break;

              if (_board[square] == null) {
                add_move(_board, moves, i, square, BITS.NORMAL);
              } else {
                if (_board[square].color === us) break;
                add_move(_board, moves, i, square, BITS.CAPTURE);
                break;
              }
              /* break, if knight or king */


              if (piece.type === 'n' || piece.type === 'k') break;
            }
          }
        }
      }
      /* check for castling if: a) we're generating all moves, or b) we're doing
       * single square move generation on the king's square
       */


      if (piece_type === true || piece_type === KING) {
        if (!single_square || last_sq === kings[us]) {
          /* king-side castling */
          if (castling[us] & BITS.KSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from + 2;

            if (_board[castling_from + 1] == null && _board[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) {
              add_move(_board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
            }
          }
          /* queen-side castling */


          if (castling[us] & BITS.QSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from - 2;

            if (_board[castling_from - 1] == null && _board[castling_from - 2] == null && _board[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) {
              add_move(_board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
            }
          }
        }
      }
      /* return all pseudo-legal moves (this includes moves that allow the king
       * to be captured)
       */


      if (!legal) {
        return moves;
      }
      /* filter out illegal moves */


      var legal_moves = [];

      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);

        if (!king_attacked(us)) {
          legal_moves.push(moves[i]);
        }

        undo_move();
      }

      return legal_moves;
    }
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */


    function move_to_san(move, moves) {
      var output = '';

      if (move.flags & BITS.KSIDE_CASTLE) {
        output = 'O-O';
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        output = 'O-O-O';
      } else {
        if (move.piece !== PAWN) {
          var disambiguator = get_disambiguator(move, moves);
          output += move.piece.toUpperCase() + disambiguator;
        }

        if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
          if (move.piece === PAWN) {
            output += algebraic(move.from)[0];
          }

          output += 'x';
        }

        output += algebraic(move.to);

        if (move.flags & BITS.PROMOTION) {
          output += '=' + move.promotion.toUpperCase();
        }
      }

      make_move(move);

      if (_in_check()) {
        if (_in_checkmate()) {
          output += '#';
        } else {
          output += '+';
        }
      }

      undo_move();
      return output;
    } // parses all of the decorators out of a SAN string


    function stripped_san(move) {
      return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    }

    function attacked(color, square) {
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        /* did we run off the end of the board */
        if (i & 0x88) {
          i += 7;
          continue;
        }
        /* if empty square or wrong color */


        if (_board[i] == null || _board[i].color !== color) continue;
        var piece = _board[i];
        var difference = i - square;
        var index = difference + 119;

        if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
          if (piece.type === PAWN) {
            if (difference > 0) {
              if (piece.color === WHITE) return true;
            } else {
              if (piece.color === BLACK) return true;
            }

            continue;
          }
          /* if the piece is a knight or a king */


          if (piece.type === 'n' || piece.type === 'k') return true;
          var offset = RAYS[index];
          var j = i + offset;
          var blocked = false;

          while (j !== square) {
            if (_board[j] != null) {
              blocked = true;
              break;
            }

            j += offset;
          }

          if (!blocked) return true;
        }
      }

      return false;
    }

    function king_attacked(color) {
      return attacked(swap_color(color), kings[color]);
    }

    function _in_check() {
      return king_attacked(_turn);
    }

    function _in_checkmate() {
      return _in_check() && generate_moves().length === 0;
    }

    function _in_stalemate() {
      return !_in_check() && generate_moves().length === 0;
    }

    function _insufficient_material() {
      var pieces = {};
      var bishops = [];
      var num_pieces = 0;
      var sq_color = 0;

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        sq_color = (sq_color + 1) % 2;

        if (i & 0x88) {
          i += 7;
          continue;
        }

        var piece = _board[i];

        if (piece) {
          pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;

          if (piece.type === BISHOP) {
            bishops.push(sq_color);
          }

          num_pieces++;
        }
      }
      /* k vs. k */


      if (num_pieces === 2) {
        return true;
      } else if (
      /* k vs. kn .... or .... k vs. kb */
      num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
        return true;
      } else if (num_pieces === pieces[BISHOP] + 2) {
        /* kb vs. kb where any number of bishops are all on the same color */
        var sum = 0;
        var len = bishops.length;

        for (var i = 0; i < len; i++) {
          sum += bishops[i];
        }

        if (sum === 0 || sum === len) {
          return true;
        }
      }

      return false;
    }

    function _in_threefold_repetition() {
      /* TODO: while this function is fine for casual use, a better
       * implementation would use a Zobrist key (instead of FEN). the
       * Zobrist key would be maintained in the make_move/undo_move functions,
       * avoiding the costly that we do below.
       */
      var moves = [];
      var positions = {};
      var repetition = false;

      while (true) {
        var move = undo_move();
        if (!move) break;
        moves.push(move);
      }

      while (true) {
        /* remove the last two fields in the FEN string, they're not needed
         * when checking for draw by rep */
        var fen = generate_fen().split(' ').slice(0, 4).join(' ');
        /* has the position occurred three or move times */

        positions[fen] = fen in positions ? positions[fen] + 1 : 1;

        if (positions[fen] >= 3) {
          repetition = true;
        }

        if (!moves.length) {
          break;
        }

        make_move(moves.pop());
      }

      return repetition;
    }

    function push(move) {
      _history.push({
        move: move,
        kings: {
          b: kings.b,
          w: kings.w
        },
        turn: _turn,
        castling: {
          b: castling.b,
          w: castling.w
        },
        ep_square: ep_square,
        half_moves: half_moves,
        move_number: move_number
      });
    }

    function make_move(move) {
      var us = _turn;
      var them = swap_color(us);
      push(move);
      _board[move.to] = _board[move.from];
      _board[move.from] = null;
      /* if ep capture, remove the captured pawn */

      if (move.flags & BITS.EP_CAPTURE) {
        if (_turn === BLACK) {
          _board[move.to - 16] = null;
        } else {
          _board[move.to + 16] = null;
        }
      }
      /* if pawn promotion, replace with new piece */


      if (move.flags & BITS.PROMOTION) {
        _board[move.to] = {
          type: move.promotion,
          color: us
        };
      }
      /* if we moved the king */


      if (_board[move.to].type === KING) {
        kings[_board[move.to].color] = move.to;
        /* if we castled, move the rook next to the king */

        if (move.flags & BITS.KSIDE_CASTLE) {
          var castling_to = move.to - 1;
          var castling_from = move.to + 1;
          _board[castling_to] = _board[castling_from];
          _board[castling_from] = null;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          var castling_to = move.to + 1;
          var castling_from = move.to - 2;
          _board[castling_to] = _board[castling_from];
          _board[castling_from] = null;
        }
        /* turn off castling */


        castling[us] = '';
      }
      /* turn off castling if we move a rook */


      if (castling[us]) {
        for (var i = 0, len = ROOKS[us].length; i < len; i++) {
          if (move.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
            castling[us] ^= ROOKS[us][i].flag;
            break;
          }
        }
      }
      /* turn off castling if we capture a rook */


      if (castling[them]) {
        for (var i = 0, len = ROOKS[them].length; i < len; i++) {
          if (move.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
            castling[them] ^= ROOKS[them][i].flag;
            break;
          }
        }
      }
      /* if big pawn move, update the en passant square */


      if (move.flags & BITS.BIG_PAWN) {
        if (_turn === 'b') {
          ep_square = move.to - 16;
        } else {
          ep_square = move.to + 16;
        }
      } else {
        ep_square = EMPTY;
      }
      /* reset the 50 move counter if a pawn is moved or a piece is captured */


      if (move.piece === PAWN) {
        half_moves = 0;
      } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        half_moves = 0;
      } else {
        half_moves++;
      }

      if (_turn === BLACK) {
        move_number++;
      }

      _turn = swap_color(_turn);
    }

    function undo_move() {
      var old = _history.pop();

      if (old == null) {
        return null;
      }

      var move = old.move;
      kings = old.kings;
      _turn = old.turn;
      castling = old.castling;
      ep_square = old.ep_square;
      half_moves = old.half_moves;
      move_number = old.move_number;
      var us = _turn;
      var them = swap_color(_turn);
      _board[move.from] = _board[move.to];
      _board[move.from].type = move.piece; // to undo any promotions

      _board[move.to] = null;

      if (move.flags & BITS.CAPTURE) {
        _board[move.to] = {
          type: move.captured,
          color: them
        };
      } else if (move.flags & BITS.EP_CAPTURE) {
        var index;

        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }

        _board[index] = {
          type: PAWN,
          color: them
        };
      }

      if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
        var castling_to, castling_from;

        if (move.flags & BITS.KSIDE_CASTLE) {
          castling_to = move.to + 1;
          castling_from = move.to - 1;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          castling_to = move.to - 2;
          castling_from = move.to + 1;
        }

        _board[castling_to] = _board[castling_from];
        _board[castling_from] = null;
      }

      return move;
    }
    /* this function is used to uniquely identify ambiguous moves */


    function get_disambiguator(move, moves) {
      var from = move.from;
      var to = move.to;
      var piece = move.piece;
      var ambiguities = 0;
      var same_rank = 0;
      var same_file = 0;

      for (var i = 0, len = moves.length; i < len; i++) {
        var ambig_from = moves[i].from;
        var ambig_to = moves[i].to;
        var ambig_piece = moves[i].piece;
        /* if a move of the same piece type ends on the same to square, we'll
         * need to add a disambiguator to the algebraic notation
         */

        if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
          ambiguities++;

          if (rank(from) === rank(ambig_from)) {
            same_rank++;
          }

          if (file(from) === file(ambig_from)) {
            same_file++;
          }
        }
      }

      if (ambiguities > 0) {
        /* if there exists a similar moving piece on the same rank and file as
         * the move in question, use the square as the disambiguator
         */
        if (same_rank > 0 && same_file > 0) {
          return algebraic(from);
        } else if (same_file > 0) {
          /* if the moving piece rests on the same file, use the rank symbol as the
           * disambiguator
           */
          return algebraic(from).charAt(1);
        } else {
          /* else use the file symbol */
          return algebraic(from).charAt(0);
        }
      }

      return '';
    }

    function infer_piece_type(san) {
      var piece_type = san.charAt(0);

      if (piece_type >= 'a' && piece_type <= 'h') {
        var matches = san.match(/[a-h]\d.*[a-h]\d/);

        if (matches) {
          return undefined;
        }

        return PAWN;
      }

      piece_type = piece_type.toLowerCase();

      if (piece_type === 'o') {
        return KING;
      }

      return piece_type;
    }

    function _ascii() {
      var s = '   +------------------------+\n';

      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        /* display the rank */
        if (file(i) === 0) {
          s += ' ' + '87654321'[rank(i)] + ' |';
        }
        /* empty piece */


        if (_board[i] == null) {
          s += ' . ';
        } else {
          var piece = _board[i].type;
          var color = _board[i].color;
          var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += ' ' + symbol + ' ';
        }

        if (i + 1 & 0x88) {
          s += '|\n';
          i += 8;
        }
      }

      s += '   +------------------------+\n';
      s += '     a  b  c  d  e  f  g  h\n';
      return s;
    } // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates


    function move_from_san(move, sloppy) {
      // strip off any move decorations: e.g Nf3+?!
      var clean_move = stripped_san(move); // if we're using the sloppy parser run a regex to grab piece, to, and from
      // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7

      if (sloppy) {
        var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);

        if (matches) {
          var piece = matches[1];
          var from = matches[2];
          var to = matches[3];
          var promotion = matches[4];
        }
      }

      var piece_type = infer_piece_type(clean_move);
      var moves = null;
      var legalMoves = generate_moves({
        legal: true,
        piece: piece ? piece : piece_type
      });
      moves = legalMoves;

      if (sloppy) {
        var illegalMoves = generate_moves({
          legal: false,
          piece: piece ? piece : piece_type
        });
        moves = illegalMoves;
      }

      for (var i = 0, len = moves.length; i < len; i++) {
        // try the strict parser first, then the sloppy parser if requested
        // by the user
        if (clean_move === stripped_san(move_to_san(moves[i], legalMoves)) || sloppy && clean_move === stripped_san(move_to_san(moves[i], illegalMoves))) {
          return moves[i];
        } else {
          if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
            return moves[i];
          }
        }
      }

      return null;
    }
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/


    function rank(i) {
      return i >> 4;
    }

    function file(i) {
      return i & 15;
    }

    function algebraic(i) {
      var f = file(i),
          r = rank(i);
      return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    }

    function swap_color(c) {
      return c === WHITE ? BLACK : WHITE;
    }

    function is_digit(c) {
      return '0123456789'.indexOf(c) !== -1;
    }
    /* pretty = external move object */


    function make_pretty(ugly_move) {
      var move = clone(ugly_move);
      move.san = move_to_san(move, generate_moves({
        legal: true
      }));
      move.to = algebraic(move.to);
      move.from = algebraic(move.from);
      var flags = '';

      for (var flag in BITS) {
        if (BITS[flag] & move.flags) {
          flags += FLAGS[flag];
        }
      }

      move.flags = flags;
      return move;
    }

    function clone(obj) {
      var dupe = obj instanceof Array ? [] : {};

      for (var property in obj) {
        if (_typeof(property) === 'object') {
          dupe[property] = clone(obj[property]);
        } else {
          dupe[property] = obj[property];
        }
      }

      return dupe;
    }

    function trim(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/


    function _perft(depth) {
      var moves = generate_moves({
        legal: false
      });
      var nodes = 0;
      var color = _turn;

      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);

        if (!king_attacked(color)) {
          if (depth - 1 > 0) {
            var child_nodes = _perft(depth - 1);

            nodes += child_nodes;
          } else {
            nodes++;
          }
        }

        undo_move();
      }

      return nodes;
    }

    return {
      /***************************************************************************
       * PUBLIC CONSTANTS (is there a better way to do this?)
       **************************************************************************/
      WHITE: WHITE,
      BLACK: BLACK,
      PAWN: PAWN,
      KNIGHT: KNIGHT,
      BISHOP: BISHOP,
      ROOK: ROOK,
      QUEEN: QUEEN,
      KING: KING,
      SQUARES: function () {
        /* from the ECMA-262 spec (section 12.6.4):
         * "The mechanics of enumerating the properties ... is
         * implementation dependent"
         * so: for (var sq in SQUARES) { keys.push(sq); } might not be
         * ordered correctly
         */
        var keys = [];

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (i & 0x88) {
            i += 7;
            continue;
          }

          keys.push(algebraic(i));
        }

        return keys;
      }(),
      FLAGS: FLAGS,

      /***************************************************************************
       * PUBLIC API
       **************************************************************************/
      load: function load(fen) {
        return _load(fen);
      },
      reset: function reset() {
        return _reset();
      },
      moves: function moves(options) {
        /* The internal representation of a chess move is in 0x88 format, and
         * not meant to be human-readable.  The code below converts the 0x88
         * square coordinates to algebraic coordinates.  It also prunes an
         * unnecessary move keys resulting from a verbose call.
         */
        var ugly_moves = generate_moves(options);
        var moves = [];

        for (var i = 0, len = ugly_moves.length; i < len; i++) {
          /* does the user want a full move object (most likely not), or just
           * SAN
           */
          if (typeof options !== 'undefined' && 'verbose' in options && options.verbose) {
            moves.push(make_pretty(ugly_moves[i]));
          } else {
            moves.push(move_to_san(ugly_moves[i], generate_moves({
              legal: true
            })));
          }
        }

        return moves;
      },
      in_check: function in_check() {
        return _in_check();
      },
      in_checkmate: function in_checkmate() {
        return _in_checkmate();
      },
      in_stalemate: function in_stalemate() {
        return _in_stalemate();
      },
      in_draw: function in_draw() {
        return half_moves >= 100 || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
      },
      insufficient_material: function insufficient_material() {
        return _insufficient_material();
      },
      in_threefold_repetition: function in_threefold_repetition() {
        return _in_threefold_repetition();
      },
      game_over: function game_over() {
        return half_moves >= 100 || _in_checkmate() || _in_stalemate() || _insufficient_material() || _in_threefold_repetition();
      },
      validate_fen: function validate_fen(fen) {
        return _validate_fen(fen);
      },
      fen: function fen() {
        return generate_fen();
      },
      board: function board() {
        var output = [],
            row = [];

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (_board[i] == null) {
            row.push(null);
          } else {
            row.push({
              type: _board[i].type,
              color: _board[i].color
            });
          }

          if (i + 1 & 0x88) {
            output.push(row);
            row = [];
            i += 8;
          }
        }

        return output;
      },
      pgn: function pgn(options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
         * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
         */
        var newline = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\n';
        var max_width = _typeof(options) === 'object' && typeof options.max_width === 'number' ? options.max_width : 0;
        var result = [];
        var header_exists = false;
        /* add the PGN header headerrmation */

        for (var i in header) {
          /* TODO: order of enumerated properties in header object is not
           * guaranteed, see ECMA-262 spec (section 12.6.4)
           */
          result.push('[' + i + ' "' + header[i] + '"]' + newline);
          header_exists = true;
        }

        if (header_exists && _history.length) {
          result.push(newline);
        }

        var append_comment = function append_comment(move_string) {
          var comment = comments[generate_fen()];

          if (typeof comment !== 'undefined') {
            var delimiter = move_string.length > 0 ? ' ' : '';
            move_string = "".concat(move_string).concat(delimiter, "{").concat(comment, "}");
          }

          return move_string;
        };
        /* pop all of history onto reversed_history */


        var reversed_history = [];

        while (_history.length > 0) {
          reversed_history.push(undo_move());
        }

        var moves = [];
        var move_string = '';
        /* special case of a commented starting position with no moves */

        if (reversed_history.length === 0) {
          moves.push(append_comment(''));
        }
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */


        while (reversed_history.length > 0) {
          move_string = append_comment(move_string);
          var move = reversed_history.pop();
          /* if the position started with black to move, start PGN with 1. ... */

          if (!_history.length && move.color === 'b') {
            move_string = move_number + '. ...';
          } else if (move.color === 'w') {
            /* store the previous generated move_string if we have one */
            if (move_string.length) {
              moves.push(move_string);
            }

            move_string = move_number + '.';
          }

          move_string = move_string + ' ' + move_to_san(move, generate_moves({
            legal: false
          }));
          make_move(move);
        }
        /* are there any other leftover moves? */


        if (move_string.length) {
          moves.push(append_comment(move_string));
        }
        /* is there a result? */


        if (typeof header.Result !== 'undefined') {
          moves.push(header.Result);
        }
        /* history should be back to what it was before we started generating PGN,
         * so join together moves
         */


        if (max_width === 0) {
          return result.join('') + moves.join(' ');
        }

        var strip = function strip() {
          if (result.length > 0 && result[result.length - 1] === ' ') {
            result.pop();
            return true;
          }

          return false;
        };
        /* NB: this does not preserve comment whitespace. */


        var wrap_comment = function wrap_comment(width, move) {
          var _iterator = _createForOfIteratorHelper(move.split(' ')),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var token = _step.value;

              if (!token) {
                continue;
              }

              if (width + token.length > max_width) {
                while (strip()) {
                  width--;
                }

                result.push(newline);
                width = 0;
              }

              result.push(token);
              width += token.length;
              result.push(' ');
              width++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (strip()) {
            width--;
          }

          return width;
        };
        /* wrap the PGN output at max_width */


        var current_width = 0;

        for (var i = 0; i < moves.length; i++) {
          if (current_width + moves[i].length > max_width) {
            if (moves[i].includes('{')) {
              current_width = wrap_comment(current_width, moves[i]);
              continue;
            }
          }
          /* if the current move will push past max_width */


          if (current_width + moves[i].length > max_width && i !== 0) {
            /* don't end the line with whitespace */
            if (result[result.length - 1] === ' ') {
              result.pop();
            }

            result.push(newline);
            current_width = 0;
          } else if (i !== 0) {
            result.push(' ');
            current_width++;
          }

          result.push(moves[i]);
          current_width += moves[i].length;
        }

        return result.join('');
      },
      load_pgn: function load_pgn(pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;

        function mask(str) {
          return str.replace(/\\/g, '\\');
        }

        function has_keys(object) {
          for (var key in object) {
            return true;
          }

          return false;
        }

        function parse_pgn_header(header, options) {
          var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n';
          var header_obj = {};
          var headers = header.split(new RegExp(mask(newline_char)));
          var key = '';
          var value = '';

          for (var i = 0; i < headers.length; i++) {
            key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
            value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, '$1');

            if (trim(key).length > 0) {
              header_obj[key] = value;
            }
          }

          return header_obj;
        }

        var newline_char = _typeof(options) === 'object' && typeof options.newline_char === 'string' ? options.newline_char : '\r?\n'; // RegExp to split header. Takes advantage of the fact that header and movetext
        // will always have a blank line between them (ie, two newline_char's).
        // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/

        var header_regex = new RegExp('^(\\[((?:' + mask(newline_char) + ')|.)*\\])' + '(?:' + mask(newline_char) + '){2}'); // If no header given, begin with moves.

        var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : ''; // Put the board in the starting position

        _reset();
        /* parse PGN header */


        var headers = parse_pgn_header(header_string, options);

        for (var key in headers) {
          set_header([key, headers[key]]);
        }
        /* load the starting position indicated by [Setup '1'] and
         * [FEN position] */


        if (headers['SetUp'] === '1') {
          if (!('FEN' in headers && _load(headers['FEN'], true))) {
            // second argument to load: don't clear the headers
            return false;
          }
        }
        /* NB: the regexes below that delete move numbers, recursive
         * annotations, and numeric annotation glyphs may also match
         * text in comments. To prevent this, we transform comments
         * by hex-encoding them in place and decoding them again after
         * the other tokens have been deleted.
         *
         * While the spec states that PGN files should be ASCII encoded,
         * we use {en,de}codeURIComponent here to support arbitrary UTF8
         * as a convenience for modern users */


        var to_hex = function to_hex(string) {
          return Array.from(string).map(function (c) {
            /* encodeURI doesn't transform most ASCII characters,
             * so we handle these ourselves */
            return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g, '').toLowerCase();
          }).join('');
        };

        var from_hex = function from_hex(string) {
          return string.length == 0 ? '' : decodeURIComponent('%' + string.match(/.{1,2}/g).join('%'));
        };

        var encode_comment = function encode_comment(string) {
          string = string.replace(new RegExp(mask(newline_char), 'g'), ' ');
          return "{".concat(to_hex(string.slice(1, string.length - 1)), "}");
        };

        var decode_comment = function decode_comment(string) {
          if (string.startsWith('{') && string.endsWith('}')) {
            return from_hex(string.slice(1, string.length - 1));
          }
        };
        /* delete header to get the moves */


        var ms = pgn.replace(header_string, '').replace(
        /* encode comments so they don't get deleted below */
        new RegExp("({[^}]*})+?|;([^".concat(mask(newline_char), "]*)"), 'g'), function (match, bracket, semicolon) {
          return bracket !== undefined ? encode_comment(bracket) : ' ' + encode_comment("{".concat(semicolon.slice(1), "}"));
        }).replace(new RegExp(mask(newline_char), 'g'), ' ');
        /* delete recursive annotation variations */

        var rav_regex = /(\([^\(\)]+\))+?/g;

        while (rav_regex.test(ms)) {
          ms = ms.replace(rav_regex, '');
        }
        /* delete move numbers */


        ms = ms.replace(/\d+\.(\.\.)?/g, '');
        /* delete ... indicating black to move */

        ms = ms.replace(/\.\.\./g, '');
        /* delete numeric annotation glyphs */

        ms = ms.replace(/\$\d+/g, '');
        /* trim and get array of moves */

        var moves = trim(ms).split(new RegExp(/\s+/));
        /* delete empty entries */

        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        var move = '';

        for (var half_move = 0; half_move < moves.length - 1; half_move++) {
          var comment = decode_comment(moves[half_move]);

          if (comment !== undefined) {
            comments[generate_fen()] = comment;
            continue;
          }

          move = move_from_san(moves[half_move], sloppy);
          /* move not possible! (don't clear the board to examine to show the
           * latest valid position)
           */

          if (move == null) {
            return false;
          } else {
            make_move(move);
          }
        }

        comment = decode_comment(moves[moves.length - 1]);

        if (comment !== undefined) {
          comments[generate_fen()] = comment;
          moves.pop();
        }
        /* examine last move */


        move = moves[moves.length - 1];

        if (POSSIBLE_RESULTS.indexOf(move) > -1) {
          if (has_keys(header) && typeof header.Result === 'undefined') {
            set_header(['Result', move]);
          }
        } else {
          move = move_from_san(move, sloppy);

          if (move == null) {
            return false;
          } else {
            make_move(move);
          }
        }

        return true;
      },
      header: function header() {
        return set_header(arguments);
      },
      ascii: function ascii() {
        return _ascii();
      },
      turn: function turn() {
        return _turn;
      },
      move: function move(_move, options) {
        /* The move function can be called with in the following parameters:
         *
         * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
         *
         * .move({ from: 'h7', <- where the 'move' is a move object (additional
         *         to :'h8',      fields are ignored)
         *         promotion: 'q',
         *      })
         */
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = typeof options !== 'undefined' && 'sloppy' in options ? options.sloppy : false;
        var move_obj = null;

        if (typeof _move === 'string') {
          move_obj = move_from_san(_move, sloppy);
        } else if (_typeof(_move) === 'object') {
          var moves = generate_moves();
          /* convert the pretty move object to an ugly move object */

          for (var i = 0, len = moves.length; i < len; i++) {
            if (_move.from === algebraic(moves[i].from) && _move.to === algebraic(moves[i].to) && (!('promotion' in moves[i]) || _move.promotion === moves[i].promotion)) {
              move_obj = moves[i];
              break;
            }
          }
        }
        /* failed to find move */


        if (!move_obj) {
          return null;
        }
        /* need to make a copy of move because we can't generate SAN after the
         * move is made
         */


        var pretty_move = make_pretty(move_obj);
        make_move(move_obj);
        return pretty_move;
      },
      undo: function undo() {
        var move = undo_move();
        return move ? make_pretty(move) : null;
      },
      clear: function clear() {
        return _clear();
      },
      put: function put(piece, square) {
        return _put(piece, square);
      },
      get: function get(square) {
        return _get(square);
      },
      remove: function remove(square) {
        return _remove(square);
      },
      perft: function perft(depth) {
        return _perft(depth);
      },
      square_color: function square_color(square) {
        if (square in SQUARES) {
          var sq_0x88 = SQUARES[square];
          return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark';
        }

        return null;
      },
      history: function history(options) {
        var reversed_history = [];
        var move_history = [];
        var verbose = typeof options !== 'undefined' && 'verbose' in options && options.verbose;

        while (_history.length > 0) {
          reversed_history.push(undo_move());
        }

        while (reversed_history.length > 0) {
          var move = reversed_history.pop();

          if (verbose) {
            move_history.push(make_pretty(move));
          } else {
            move_history.push(move_to_san(move, generate_moves({
              legal: true
            })));
          }

          make_move(move);
        }

        return move_history;
      },
      get_comment: function get_comment() {
        return comments[generate_fen()];
      },
      set_comment: function set_comment(comment) {
        comments[generate_fen()] = comment.replace('{', '[').replace('}', ']');
      },
      delete_comment: function delete_comment() {
        var comment = comments[generate_fen()];
        delete comments[generate_fen()];
        return comment;
      },
      get_comments: function get_comments() {
        prune_comments();
        return Object.keys(comments).map(function (fen) {
          return {
            fen: fen,
            comment: comments[fen]
          };
        });
      },
      delete_comments: function delete_comments() {
        prune_comments();
        return Object.keys(comments).map(function (fen) {
          var comment = comments[fen];
          delete comments[fen];
          return {
            fen: fen,
            comment: comment
          };
        });
      }
    };
  }

  function play(width, y) {
    // Calculate the size of the triangle, and where the drawing should begin.
    var height = width * 2 * Math.sqrt(3) / 3;
    var r_max = height * Math.sqrt(3) / 6;
    var r = 3 > r_max ? r_max : 3;
    var dH = r * Math.sqrt(3); // Length of side cut by 1 rounding.

    var Mx = 0;
    var My = y + 5 - height / 2;
    var p0 = [Mx, My];
    var p1 = [Mx + height * Math.sqrt(3) / 2, My + height / 2];
    var p2 = [Mx, My + height];
    return "M".concat(p0[0], " ").concat(p0[1] + dH, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  ").concat(r * 3 / 2, ", ").concat(-dH / 2, "\n      L ").concat(p1[0] - r * 3 / 2, " ").concat(p1[1] - dH / 2, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  0, ").concat(dH, "\n      L ").concat(p2[0] + r * 3 / 2, " ").concat(p2[1] - dH / 2, "\n      a ").concat(r, ",").concat(r, ", 0,0,1  ").concat(-r * 3 / 2, ", ").concat(-dH / 2, "\n      Z\n      ");
  } // playPath


  function pause(width, y) {
    var height = width * 2 * Math.sqrt(3) / 3 - 2 * (3 * Math.sqrt(3) - 3);
    var dx = width / 5;
    var r = 3;
    var Mx = 0;
    var My = y + 5 - height / 2;
    return "\n      M ".concat(Mx + r, " ").concat(My, " \n      L ").concat(Mx + 2 * dx - r, " ").concat(My, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(r, "\n      L ").concat(Mx + 2 * dx, " ").concat(My + height - r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(r, "\n      L ").concat(Mx + r, " ").concat(My + height, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(-r, "\n      L ").concat(Mx, " ").concat(My + r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(-r, "\n\t  M ").concat(Mx + 3 * dx + r, " ").concat(My, "\n      L ").concat(Mx + 5 * dx - r, " ").concat(My, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(r, "\n      L ").concat(Mx + 5 * dx, " ").concat(My + height - r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(r, "\n      L ").concat(Mx + 3 * dx + r, " ").concat(My + height, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(-r, ",").concat(-r, "\n      L ").concat(Mx + 3 * dx, " ").concat(My + r, "\n      a ").concat(r, ",").concat(r, " 0,0,1 ").concat(r, ",").concat(-r, "\n    ");
  } // pausePath


  var template$l = "\n<g style=\"cursor: pointer;\">\n  <path fill=\"tomato\" d=\"\"></path>\n</g>\n"; // Maybe the y should just be set outside? And the same for the chapter?? Maybe give it the y it should center itself about?
  // textHeight + textBottomMargin + rectHighlightHeightDelta + rectHeight/2 - H/2

  var PlayButton = /*#__PURE__*/function () {
    // The y is given as the centerline about which to position the button. Half above, and half below. The initial y is therefore half the height, and should draw the button completely on hte svg.
    function PlayButton() {
      _classCallCheck(this, PlayButton);

      this.y = 20 * 2 * Math.sqrt(3) / 3 / 2;
      this.width = 20;
      var obj = this;
      obj.node = svg2element(template$l);
    } // constructor


    _createClass(PlayButton, [{
      key: "update",
      value: function update(playing) {
        var obj = this;
        var d = playing ? pause(obj.width, obj.y) : play(obj.width, obj.y);
        obj.node.querySelector("path").setAttribute("d", d);
      } // update

    }]);

    return PlayButton;
  }(); // PlayButton

  var defaultRectAttributes = "stroke=\"white\" stroke-width=\"2px\"";
  var template$k = "<g class=\"chapter\">\n  <rect class=\"background\" fill=\"gainsboro\" ".concat(defaultRectAttributes, "\"></rect>\n  <rect class=\"buffering\" fill=\"gray\" ").concat(defaultRectAttributes, "\"></rect>\n  <rect class=\"foreground\" fill=\"tomato\" ").concat(defaultRectAttributes, "\"></rect>\n  <text style=\"display: none;\"></text>\n</g>");

  var PlayBarAnnotation = /*#__PURE__*/function () {
    // y = textHeight + textBottomMargin + highlightHeightDelta
    function PlayBarAnnotation(config, tscale) {
      _classCallCheck(this, PlayBarAnnotation);

      this.y = 12 + 2 + 3;
      this.height = 10;
      this.dh = 4;
      var obj = this;
      obj.node = svg2element(template$k);
      obj.background = obj.node.querySelector("rect.background");
      obj.buffering = obj.node.querySelector("rect.buffering");
      obj.foreground = obj.node.querySelector("rect.foreground");
      obj.label = obj.node.querySelector("text");
      obj.config = config;
      obj.tscale = tscale;
      obj.node.addEventListener("mouseenter", function () {
        obj.highlight();
      }); // addEventListener

      obj.node.addEventListener("mouseover", function () {
        obj.highlight();
      }); // addEventListener

      obj.node.addEventListener("mouseout", function () {
        obj.unhighlight();
      }); // addEventListener
    } // constructor


    _createClass(PlayBarAnnotation, [{
      key: "update",
      value: function update(t_play, t_buffered) {
        var obj = this;
        var y = obj.y;
        var x = obj.tscale.dom2range(obj.config.starttime);
        obj.background.setAttribute("y", y);
        obj.background.setAttribute("x", x);
        obj.background.setAttribute("width", obj.width);
        obj.background.setAttribute("height", obj.height);
        obj.buffering.setAttribute("y", y);
        obj.buffering.setAttribute("x", x);
        obj.buffering.setAttribute("width", obj.width * obj.timeFraction(t_buffered));
        obj.buffering.setAttribute("height", obj.height);
        obj.foreground.setAttribute("y", y);
        obj.foreground.setAttribute("x", x);
        obj.foreground.setAttribute("width", obj.width * obj.timeFraction(t_play));
        obj.foreground.setAttribute("height", obj.height);
        obj.label.setAttribute("y", 12);
        obj.label.setAttribute("x", x);
        obj.label.innerHTML = obj.config.label;
      } // update

    }, {
      key: "width",
      get: function get() {
        var obj = this;
        var x0 = obj.tscale.dom2range(obj.config.starttime);
        var x1 = obj.tscale.dom2range(obj.config.endtime); // At the beginning hte widths may be negative because the starttime of the comment exceeds the time domain of the playbar that hasn't yet been updated to the right interval. Returen 0 while this is so.

        return x1 - x0 < 0 ? 0 : x1 - x0;
      } // width

    }, {
      key: "timeFraction",
      value: function timeFraction(t) {
        var obj = this;
        var tf = (t - obj.config.starttime) / (obj.config.endtime - obj.config.starttime);
        return Math.abs(tf - 0.5) <= 0.5 ? tf : tf > 0;
      } // timeFraction

    }, {
      key: "highlight",
      value: function highlight() {
        var obj = this;
        highlightRectangle(obj.background, obj.y, obj.height, obj.dh);
        highlightRectangle(obj.buffering, obj.y, obj.height, obj.dh);
        highlightRectangle(obj.foreground, obj.y, obj.height, obj.dh);
        obj.label.style.display = "";
      } // highlight

    }, {
      key: "unhighlight",
      value: function unhighlight() {
        var obj = this;
        unhighlightRectangle(obj.background, obj.y, obj.height);
        unhighlightRectangle(obj.buffering, obj.y, obj.height);
        unhighlightRectangle(obj.foreground, obj.y, obj.height);
        obj.label.style.display = "none";
      } // highlight

    }]);

    return PlayBarAnnotation;
  }(); // PlayBarAnnotation

  function highlightRectangle(r, y, h, dh) {
    r.height.baseVal.value = h + 2 * dh;
    r.y.baseVal.value = y - dh;
  } // highlightRectangle


  function unhighlightRectangle(r, y, h) {
    r.height.baseVal.value = h;
    r.y.baseVal.value = y;
  } // unhighlightRectangle

  var template$j = "<g style=\"cursor: pointer;\"></g>"; // template

  var PlayBar = /*#__PURE__*/function () {
    // Coordinates in whole svg frame.
    function PlayBar() {
      _classCallCheck(this, PlayBar);

      this.y = 12 + 2 + 3;
      this.x0 = 20 + 6;
      this.x1 = 300;
      this.annotations = [];
      this.t_min = 0;
      this.t_max = 1;
      this.t_buffered = 0;
      this.t_play = 0;
      var obj = this;
      obj.node = svg2element(template$j);
      obj._tscale = new scaleLinear();
    } // constructor


    _createClass(PlayBar, [{
      key: "tscale",
      get: function get() {
        // The tscale is relative to the whole svg element, and takes in whole svg coordinates.
        var obj = this;
        obj._tscale.domain = [obj.t_min, obj.t_max];
        obj._tscale.range = [obj.x0, obj.x1];
        return obj._tscale;
      } // get tscale

    }, {
      key: "rebuild",
      value: function rebuild() {
        // I need to do the join, but on objects instead of elements... Or just throw them all out and create new ones? Simpler I guess
        var obj = this;
        var exiting = obj.node.querySelectorAll("g.chapter");

        for (var i = 0; i < exiting.length; i++) {
          exiting[i].remove();
        } // for
        // The creation of the chapters to show after somme annotations have been pushed still needs to be implemented.


        function makeChapterObj(label, timestamps) {
          // Don't assign 
          return {
            label: label,
            starttime: timestamps[0] === null ? obj.t_min : timestamps[0],
            endtime: timestamps[1] === null ? obj.t_max : timestamps[1]
          };
        } // makeChapterObj
        // The ultimate way of doing it would be for the annotations to persist below other smaller annotations.


        var chapters = obj.annotations.reduce(function (acc, a, i) {
          // Don't curtail hte previous one but instead allow it to draw completely. This allows the chapters to be 'stacked'. Ordering them by start time ensures they all have a handle available.
          var previous = acc[acc.length - 1];
          var current = makeChapterObj(a.name, a.timestamps);

          if (previous.endtime < current.starttime) {
            // Push in the needed padding, and then the annotation.
            acc.push(makeChapterObj("", [previous.endtime, current.starttime]));
          } // if


          acc.push(current);

          if (i == obj.annotations.length - 1 && current.endtime < obj.t_max) {
            acc.push(makeChapterObj("", [current.endtime, obj.t_max]));
          } // if


          return acc;
        }, [makeChapterObj("", [obj.t_min, obj.t_max])]); // Cpters need to be sorted by starttime in order for all start points to be visible.

        obj.chapters = chapters.sort(function (a, b) {
          return a.starttime - b.starttime || b.endtime - a.endtime;
        }).map(function (c) {
          var a = new PlayBarAnnotation(c, obj.tscale);
          a.y = obj.y;
          return a;
        }); // map

        obj.chapters.forEach(function (chapter) {
          obj.node.appendChild(chapter.node);
        }); // forEach
      } // rebuild

    }, {
      key: "update",
      value: function update() {
        var obj = this;
        obj.chapters.forEach(function (chapter) {
          chapter.update(obj.t_play, obj.t_buffered);
        });
      } // update

    }, {
      key: "addchapters",
      value: function addchapters(tags) {
        // The player may need to be updated when the serverr pushes updates. Also if other users update the annotations it should appear straightaway.
        var obj = this; // Tags may not have both the startand end time specified. 

        obj.annotations = obj.annotations.concat(tags); // Update the bar.

        obj.rebuild();
        obj.update();
        /*
        if(tag.starttime){
        	let i = obj.annotations.findIndex(a=>a.id==tag.id);
        	obj.annotations.splice(i>-1 ? i : 0, i>-1, tag);
        
        	// Update the bar.
        	obj.rebuild();
        	obj.update();
        } // if
        */
      } // addchapter

    }]);

    return PlayBar;
  }(); // PlayBar

  var template$i = "\n<div class=\"player-controls\">\n  <svg id=\"playbar\" width=\"100%\" height=\"32px\">\n    <g class=\"playbutton\"></g>\n    <g class=\"playbar\"></g>\n  </svg>\n</div>\n"; // template

  var PlayControls = /*#__PURE__*/function () {
    function PlayControls() {
      _classCallCheck(this, PlayControls);

      this.textHeight = 12;
      this.textBottomMargin = 2;
      this.highlightHeightDelta = 3;
      var obj = this;
      obj.node = html2element(template$i);
      var y = obj.textHeight + obj.textBottomMargin + obj.highlightHeightDelta; // Make a play button.

      obj.button = new PlayButton();
      obj.button.y = y;
      obj.node.querySelector("g.playbutton").appendChild(obj.button.node);
      obj.button.node.addEventListener("click", function (event) {
        // Get the action required based on the button icon.
        if (obj.t_play == obj.t_max) {
          obj.t_play = obj.t_min;
        } // if


        obj.playing = !obj.playing;
      }); // addEventListener
      // The bar is just a node at this point

      obj.bar = new PlayBar();
      obj.bar.y = y;
      obj.node.querySelector("g.playbar").appendChild(obj.bar.node);
      obj.bar.node.addEventListener("mouseup", function (event) {
        // On click the playbar should register the correct time.
        // The tscale takes inputs in the svg coordinates, and the event returns them in the client coordinates. Therefore the client coordinates must be adjusted for the position of the SVG.
        // Because there is a transformation applied the scale needs to be corrected for that also. Maybe calculate where 
        var barrect = obj.bar.node.getBoundingClientRect();
        var t = obj.bar.t_min + (event.clientX - barrect.x) / barrect.width * (obj.bar.t_max - obj.bar.t_min); // Now just set the t to the right value, and update the view.

        obj.bar.t_play = t;
        obj.bar.update(); // The playtime changed, therefore pause the video.

        obj.playing = false;
        obj.skipped = true;
      }); // addEventListener

      obj.bar.rebuild();
      obj.bar.update();
      obj.playing = false;
      obj.skipped = false; // Annotations. Comments should be based on the chapter tags I think. The discussion is intended to be based on observed events. The logical progress is that events need to first be identified, and then discussed in a separate step. There should be a single dialogue box, and in that one tags can be added. This allows a single comment to be seen in multiple threads. Replies will have to be handled separately. Eventually the user should also be able to pin comments.
    } // constructor


    _createClass(PlayControls, [{
      key: "t_play",
      get: function get() {
        return this.bar.t_play;
      } // get t_play
      ,
      set: function set(t) {
        this.bar.t_play = t;
        this.bar.update();
      } // set t_play

    }, {
      key: "t_buffered",
      get: function get() {
        return this.bar.t_buffered;
      } // get t_buffer
      ,
      set: function set(t) {
        this.bar.t_buffered = t;
        this.bar.update();
      } // set t_buffered

    }, {
      key: "t_domain",
      get: // set t_domain
      function get() {
        return [this.bar.t_min, this.bar.t_max];
      } // get t_domain
      ,
      set: function set(t) {
        // Since t is coming from a specific location, it should be the same reference always. Therefore == comparison is valid.
        var obj = this;

        if (t[0] != obj.bar.t_min || t[1] != obj.bar.t_max) {
          obj.bar.t_min = t[0];
          obj.bar.t_max = t[1];
          obj.bar.rebuild();
          obj.bar.update();
        } // if

      }
    }, {
      key: "playing",
      get: // set playing
      function get() {
        return this._playing;
      } // get playing
      // FUNCTIONALITY
      ,
      set: function set(v) {
        var obj = this;
        obj._playing = v;
        obj.update(v);
      }
    }, {
      key: "update",
      value: function update() {
        var obj = this;
        obj.button.update(obj.playing);
        obj.bar.update();
      } // update

    }]);

    return PlayControls;
  }(); // PlayControls

  var template$h = "\n<div style=\"position: relative;\">\n  <div class=\"view\" style=\"width:300px; height:300px;\"></div>\n  <div class=\"controls\"></div>\n</div>\n"; // template

  var ChessGameRenderer = /*#__PURE__*/function () {
    function ChessGameRenderer(gamepgn) {
      _classCallCheck(this, ChessGameRenderer); // The superclass requires the viewnode to attach the required events..


      var obj = this;
      obj.node = html2element(template$h); // The FPS at which to swap out data.

      obj.fps = 24;
      obj.dt = 1000 / obj.fps;
      obj.timelastdraw = 0; // `Chess' finds the available legal moves.

      obj.chess = new Chess(); // `pgn' is teh sequence of moves played, `fen' is the current state of the game.

      obj.pgn = gamepgn; // Position within the series.

      var plies = gamepgn.split(" "); // split by gaps.

      plies.splice(plies.length - 1, 1); // last one is points allocation

      obj.plies = plies.filter(function (v, i) {
        return i % 3 != 0;
      }); // Filter out move number.
      // Convert the individual moves to FEN positions for easier navigation.

      obj.plies_fen = obj.plies.reduce(function (acc, ply) {
        obj.chess.move(ply);
        acc.push(obj.chess.fen());
        return acc;
      }, ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"]); // reduce

      obj.chess.reset();
      obj.plyind = -1;
      obj.plyind_prev = undefined; // Configure the chess board renderer. Here we need to pass in the div to draw to.

      obj.board = Chessground(obj.node.querySelector("div.view"), {
        viewOnly: false,
        movable: {
          free: false,
          events: {
            after: function after(orig, dest) {
              // After a move the new available moves need to be established. For that the chessboard needs to produce a fen for the chess module, which can then calculate the possible moves.
              obj.chess.move({
                "from": orig,
                "to": dest
              });
              obj.enforceAvailableMoves();
            }
          }
        }
      });
      obj.enforceAvailableMoves(); // On board move the available moves should be updated. How do I achieve that?
      // WHAT OTHER METODS ARE REQUIRED??
      // GEOMTRYANNOTATION OBJ

      obj.geometryannotation = {
        submit: function submit() {
          // Retain only the basic items. Should also set an empty shapes array...
          var a = {
            fen: obj.chess.fen(),
            shapes: obj.board.state.drawable.shapes.map(function (s) {
              return {
                orig: s.orig,
                dest: s.dest
              };
            })
          }; // Clear the board.

          obj.board.set({
            drawable: {
              shapes: []
            }
          }); // set

          return a;
        },
        show: function show(previewconfig) {
          // This is supposed to show the current annotation - the chessground module supports that already.
          // The tag has a specific fen to display. When previewing the annotation it should be shown.
          // How will selecting the annotations happen? Should they be on-screen only if the fen are the same? Or should they be FEN independent? And toggling them on just shows them without showing the preview? Nah, toggling will show the latest one.
          // The playbar should move simultaneously?
          if (previewconfig) {
            obj.plyind_prev = obj.plyind; // Clear the annotation state.

            obj.board.state.drawable.shapes = [];
            var plyind = obj.plies_fen.indexOf(previewconfig.fen);
            obj.ply(plyind); // Redrawing of annotations should also remove hte previous set.

            obj.drawGeometryAnnotations(previewconfig.shapes);
          } else {
            obj.ply(obj.plyind_prev);
            obj.plying_prev = undefined;
            obj.board.state.drawable.shapes = [];
            obj.board.redrawAll();
          }
        }
      }; // Add in precofigured UI. The metadata filename identifies this small multiple.

      obj.ui = new PlayControls();
      obj.node.querySelector("div.controls").appendChild(obj.ui.node);
      obj.ui.bar.t_min = 0;
      obj.ui.bar.t_max = obj.plies.length - 1;
      obj.ui.bar.rebuild();
      obj.ui.bar.update(); // The SVG elements can handle their own updating, and there is no global renderer anyway.
      // Maybe just keep an requestAnimationFrame running? Or do it with setTimeout? setTimeout is likely less wasteful.

      obj.ui.button.node.addEventListener("click", function (event) {
        // Will the rendering loop have to be redone in order to allow promises to be returned to ensure that the player is ready for the next step?
        if (obj.ui.playing) {
          obj.ply(obj.plyind + 1);
          obj.interval = setInterval(function () {
            obj.ply(obj.plyind + 1);
          }, 1000);
        } else if (obj.ui.skipped) {
          clearInterval(obj.interval);
          obj.ply(Math.floor(obj.ui.bar.t_play));
          obj.ui.skipped = false;
        } else {
          clearInterval(obj.interval);
        } // if

      }); // addEventListener

      obj.ui.bar.node.addEventListener("click", function (event) {
        if (!obj.ui.playing && obj.ui.skipped) {
          // Ok, when skipped the situation needs to be rebuilt. The chess module needs to be restarted in case variations have been played.
          obj.ply(Math.floor(obj.ui.bar.t_play));
        } // if

      }); // addEventListener
    } // constructor


    _createClass(ChessGameRenderer, [{
      key: "ply",
      value: function ply(plyind) {
        // This increments the plyind. I could then even make a computed value of `fen`, and only then ask the rerender.
        var obj = this;

        if (plyind > obj.ui.bar.t_max) {
          obj.plyind = obj.ui.bar.t_max;
          obj.ui.playing = false;
          clearInterval(obj.interval);
        } else {
          obj.plyind = plyind < 0 ? 0 : plyind;
        } // if
        // Also keep the chess module up to date - it's needed for variations.


        obj.chess.reset();
        obj.chess.load(obj.plies_fen[obj.plyind]); // Find and play the next ply.

        obj.board.set({
          fen: obj.plies_fen[obj.plyind],
          movable: {
            showDests: true,
            dests: obj.calculateAvailableMoves()
          }
        });
        obj.ui.t_play = obj.plyind; // Keep enforcing the available moves.

        obj.enforceAvailableMoves();
      } // ply

    }, {
      key: "isOnScreen",
      get: function get() {
        // Check whether the viewframe is still on hte canvas screen. If it's display has been set to "none" then just return a false. "display: none" will be required when introducing the grouping interfaces.
        var obj = this;
        var isOnScreen = false;

        if (obj.node.style.display != "none") {
          var rect = obj.node.getBoundingClientRect();
          var isOffScreen = rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth;
          isOnScreen = !isOffScreen;
        } // if


        return isOnScreen;
      } // isOnScreen

    }, {
      key: "drawGeometryAnnotations",
      value: function drawGeometryAnnotations(shapesconfigs) {
        // shapesconfigs is an array of annotation squares
        var obj = this;
        var shapes = shapesconfigs.map(function (an) {
          return {
            brush: "green",
            orig: an.orig,
            dest: an.dest
          };
        }); // map

        obj.board.set({
          drawable: {
            shapes: shapes
          }
        });
      } // drawGeometryAnnotations

    }, {
      key: "calculateAvailableMoves",
      value: function calculateAvailableMoves() {
        var obj = this; // obj.chess.turn -> get the current player w/b

        var currentplayer = obj.chess.turn(); // obj.board.state.pieces is a Map, and does not have a reduce, or filter.

        var playermoves = [];
        obj.board.state.pieces.forEach(function (piece, square) {
          if (piece.color[0] == currentplayer) {
            var moves = obj.chess.moves({
              square: square,
              verbose: true
            });
            playermoves.push([square, moves.map(function (m) {
              return m.to;
            })]);
          } // if

        });
        return new Map(playermoves);
      } // calculateAvailableMoves

    }, {
      key: "enforceAvailableMoves",
      value: function enforceAvailableMoves() {
        var obj = this;
        var availableMoves = obj.calculateAvailableMoves();
        obj.board.set({
          movable: {
            free: false,
            showDests: true,
            dests: availableMoves
          }
        });
      } // enforceAvailableMoves

    }]);

    return ChessGameRenderer;
  }(); // ChessGameRenderer

  var css$3 = {
    button: "\n    border: none;\n\tcursor: pointer;\n\tborder-radius: 4px;\n  ",
    timebutton: "\n    background-color: gainsboro;\n  ",
    submitbutton: "\n    background-color: black;\n\tcolor: white;\n  "
  }; // css

  var template$g = "\n<div style=\"width: 300px\">\n  <input class=\"tagname\" type=\"text\" placeholder=\"#tag-name\" style=\"width: 65px;\"></input>\n  \n  <input class=\"tagvalue\" type=\"text\" placeholder=\"value\" style=\"width: 35px;\"></input>\n  \n  <div class=\"buttons\" style=\"display: inline-block; float: right;\">\n      <button class=\"starttime\" style=\"".concat(css$3.button, " ").concat(css$3.timebutton, "\">start</button>\n      <i>-</i>\n      <button class=\"endtime\" style=\"").concat(css$3.button, " ").concat(css$3.timebutton, "\">end</button>\n    \n      <button class=\"submit\" style=\"").concat(css$3.button, " ").concat(css$3.submitbutton, "\">Submit</button>\n  </div>\n  \n  \n</div>\n"); // template
  // This is more than the chapterform, it is the entirety of the forms.

  var TagForm = /*#__PURE__*/function () {
    function TagForm() {
      _classCallCheck(this, TagForm);

      var obj = this;
      obj.node = html2element(template$g);
      obj.nameinput = obj.node.querySelector("input.tagname");
      obj.valueinput = obj.node.querySelector("input.tagvalue");
      obj.buttons = obj.node.querySelector("div.buttons"); // This value will be overwritten during interactions, and is where the tag manager collects the time for the timestamps.

      obj.clear(); // The button should cycle through black, green, and red. It will need some way of tracking its current state, and a way to load in existing tags! This will allow users to subsequently change the tag if needed? Maybe this is a bit much for now. It will need a submit button.
      // If the tag is loaded and the button switches to timestamping then any user can add the ned timesteps. Then the users name needs to be checked in addition. Maybe some way of filtering out the tags that are added? How would that work?
      // For now add 3 buttons. A starttime endtime and submit button. For the submit button only the start and name need to be filled in. The buttons must also show the selected times!

      obj.nameinput.onmousedown = function (e) {
        e.stopPropagation();
      }; // onmousedown
      // Update the form when the text is typed in to activate the submit button.


      obj.nameinput.oninput = function () {
        obj.update();
      }; // oninput
      // Maybe it's simpler if the time is assigned from the outside?


      obj.node.querySelector("button.starttime").onmousedown = function (e) {
        e.stopPropagation();
        obj.starttime = obj.t();
        obj.update();
      }; // onmousedown


      obj.node.querySelector("button.endtime").onmousedown = function (e) {
        e.stopPropagation();
        obj.endtime = obj.t();
        obj.update();
      }; // onmousedown


      obj.submitButton = obj.node.querySelector("button.submit");

      obj.submitButton.onmousedown = function (e) {
        e.stopPropagation();
        var tag = obj.tag;

        if (tag) {
          obj.submit(tag);
          obj.clear();
        } // if

      }; // onmousedown

    } // constructor
    // Dummy method to facilitate outside supply of the timesteps.


    _createClass(TagForm, [{
      key: "t",
      value: function t() {
        return undefined;
      }
    }, {
      key: "update",
      value: function update() {
        var obj = this; // Ensure that the times are always consistent (end > start);

        if (obj.endtime && obj.starttime) {
          var t0 = Math.min(obj.starttime, obj.endtime);
          var t1 = Math.max(obj.starttime, obj.endtime);
          obj.starttime = t0;
          obj.endtime = t1;
        } // if
        // Update the time tags also.


        var it0 = obj.node.querySelector("button.starttime");
        var it1 = obj.node.querySelector("button.endtime");
        it0.innerText = obj.starttime != undefined ? obj.starttime.toFixed(3) : "start";
        it1.innerText = obj.endtime != undefined ? obj.endtime.toFixed(3) : "end"; // The button is black by default, and making it look disabled is a bit more involved.

        var button = obj.node.querySelector("button.submit");

        if (obj.tag) {
          // Enable.
          button.style.opacity = 1;
          button.style.backgroundColor = "black";
          button.style.color = "white";
        } else {
          button.style.opacity = 0.6;
          button.style.backgroundColor = "gainsboro";
          button.style.color = "black";
        } // if

      } // update

    }, {
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.starttime = undefined;
        obj.endtime = undefined;
        obj.nameinput.value = "";
        obj.valueinput.value = "";
        obj.update();
      } // clear

    }, {
      key: "tag",
      get: function get() {
        // Chapter tag should belong to the task id so that the observations across multiple slices are available together to the user.
        var obj = this;
        var tag = {
          name: obj.nameinput.value,
          value: obj.valueinput.value
        }; // tag
        // How should the timestamps be handled? CANNOT always store two values, as the chapterform is ot aware of the extent of the timestep. So do I place undefined in one of the slots? And How would that be interpreted by JSON?

        var timestamps = [obj.starttime, obj.endtime];
        /* Expected behavior:
        	[undefined, undefined] -> tag
            [  value  , undefined] -> chapter
        	[undefined,   value  ] -> chapter
        	[  value  ,   value  ] -> chapter
        */

        if (timestamps.some(function (t) {
          return !isNaN(t);
        })) {
          // In this case at least one of the values is defined, and should be included.
          tag.timestamps = JSON.stringify(timestamps);
        }
        // This only collects the name and the optional timestamps. The author is supplied outside, in the knowledge manager, to avoid sending the author into this object.
        // The time should be defined, but it can also be 0, or less than 0!
        // obj.user && obj.input.value && ( obj.starttime != undefined ) ? tag : false; 

        return obj.nameinput.value ? tag : false;
      } // tag
      // Is this necessary?? Or should we just use an outside method?
      // Placeholder for communication between classes.

    }, {
      key: "submit",
      value: function submit(tag) {} // submit

    }]);

    return TagForm;
  }(); // TagForm

  var TagButton = /*#__PURE__*/function () {
    function TagButton(tag) {
      _classCallCheck(this, TagButton);

      var obj = this;
      obj.tag = tag;
      obj.node = html2element("<button class=\"btn-small\">#".concat(tag.name, "</button>"));
      obj.on = true; // On mouseover the tags should be highlighted. To highlight geometrical tags the corresponding SVG must be made visible.
      // Onclick the buttons should filter the comments, and toggle the annotations.

      obj.node.onmousedown = function (e) {
        e.stopPropagation();
        obj.toggle(!obj.on);
      }; // onclick
      // Turn button off as default.


      obj.toggle(false);
    } // constructor


    _createClass(TagButton, [{
      key: "toggle",
      value: function toggle(on) {
        // if on == true then turn the button on, otherwise turn it off.
        var obj = this;
        obj.node.style.background = on ? "black" : "gainsboro";
        obj.node.style.color = on ? "white" : "black";
        obj.on = on;
      } // toggle

    }]);

    return TagButton;
  }(); // TagButton

  var template$f = "<div style=\"width: 300px; margin-top: 5px;\"></div>";

  var TagOverview = /*#__PURE__*/function () {
    function TagOverview() {
      _classCallCheck(this, TagOverview);

      this.tags = [];
      this.buttons = [];
      var obj = this;
      obj.node = html2element(template$f); // The tag visualisation should happen here also.
    } // constructor


    _createClass(TagOverview, [{
      key: "add",
      value: function add(newtags) {
        var obj = this;
        newtags.forEach(function (t) {
          return obj.tags.push(t);
        });
        var newbuttons = newtags.map(function (tag) {
          return new TagButton(tag);
        }); // map

        newbuttons.forEach(function (b) {
          obj.buttons.push(b);
          obj.node.appendChild(b.node);

          b.node.onmouseover = function () {
            obj.preview(b.tag);
          }; // onmouseover


          b.node.onmouseout = function () {
            obj.previewend();
          }; // onmouseover

        }); // forEach

        obj.communicatetags(obj.tags);
      } // add

    }, {
      key: "namevalid",
      value: function namevalid(name) {
        // If any existing tag has this name the name is not valid.
        var obj = this;
        return !obj.tags.some(function (tag) {
          return tag.name == name;
        });
      } // namevalid

    }, {
      key: "purge",
      value: function purge() {
        var obj = this;
        obj.tags = [];
        obj.buttons.forEach(function (b) {
          return b.node.remove();
        });
        obj.buttons = [];
      } // purge
      // Dummy code. 

    }, {
      key: "preview",
      value: function preview(tag) {// If the tag has geometry then the SVG should be turned on. This can only be done with access to the geometry annotation class.
      } // preview

    }, {
      key: "previewend",
      value: function previewend() {// Stop the previewing by switching the SVG off - if it's not toggled on.
      } // previewend
      // The available tags need to be communicated to comments to highlight them in hte text.

    }, {
      key: "communicatetags",
      value: function communicatetags(tagnames) {} //communicatetags

    }]);

    return TagOverview;
  }(); // TagOverview

  /*
  Maybe this one should be remade into a manager so it can keep add comments to itself. Otherwise they have to be routed outside.
  */

  var css$2 = {
    textarea: "\n    width: 100%;\n    border: none;\n    resize: none;\n    overflow: hidden;\n    max-height: 100px;\n  ",
    submitbutton: "\n    color: white;\n\tbackground-color: black;\n\tborder-radius: 4px;\n\tcursor: pointer;\n  "
  }; // css

  var template$e = "\n<div>\n  <textarea class=\"comment\" type=\"text\" rows=\"1\" placeholder=\"What do you think?\" style=\"".concat(css$2.textarea, "\"></textarea>\n  <button class=\"submit\" style=\"").concat(css$2.submitbutton, "\"><b>Submit</b></button>\n</div>\n"); // template

  var AddCommentForm = /*#__PURE__*/function () {
    function AddCommentForm() {
      _classCallCheck(this, AddCommentForm);

      this._user = "";
      var obj = this;
      obj.node = html2element(template$e); // Author input got omitted because the author also needs to be known when voting on a comment, and I didn't want to implement an input there. That's why now there will be an overall login box that will control everything.

      obj.commentinput = obj.node.querySelector("textarea.comment");
      obj.submitbutton = obj.node.querySelector("button.submit");
      obj.commentinput.style.display = "block";
      obj.submitbutton.style.display = "none";

      obj.commentinput.oninput = function () {
        obj.update();
      }; // oninput
      // Make both replies and general comments to use a single form.


      obj.submitbutton.onmousedown = function (e) {
        e.stopPropagation();
        obj.submit(obj.config);
        obj.clear();
      }; // onmousedown

    } // constructor


    _createClass(AddCommentForm, [{
      key: "update",
      value: function update() {
        var obj = this; // Change the height

        obj.commentinput.style.height = "1px";
        obj.commentinput.style.height = obj.commentinput.scrollHeight + "px"; // Show or hide button.

        obj.submitbutton.style.display = obj.config ? "block" : "none";
      } // update

    }, {
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.commentinput.value = "";
        obj.update();
      } // clear

    }, {
      key: "config",
      get: function get() {
        var obj = this;
        return obj.commentinput.value ? {
          comment: obj.commentinput.value
        } : false;
      } // config
      // Dummy method that takes in hte config.

    }, {
      key: "submit",
      value: function submit(comment) {}
    }]);

    return AddCommentForm;
  }(); // AddCommentForm

  var css$1 = {
    button: "\n    border: none;\n\tbackground-color: white;\n\tcursor: pointer;\n  ",
    replybutton: "\n    color: gray;\n\tpadding: 0 0 0 0;\n  ",
    votenumberi: "\n    margin-left: 4px;\n  ",
    timestampspan: "\n    color: gray;\n\tfont-size: 14px;\n\tmargin-left: 12px;\n  "
  }; // css

  var template$d = "\n<div class=\"comment\">\n  <div class=\"header\">\n    <b class=\"author\"></b>\n\t<span class=\"timestamp\" style=\"".concat(css$1.timestampspan, "\"></span>\n  </div>\n  <div class=\"body\"></div>\n  <div class=\"footer\">\n    <button class=\"upvote\" style=\"").concat(css$1.button, "\">\n\t  <i class=\"fa fa-thumbs-up\"></i>\n\t  <i class=\"vote-number\"></i>\n\t</button>\n\t<button class=\"downvote\" style=\"").concat(css$1.button, "\">\n\t  <i class=\"fa fa-thumbs-down\"></i>\n\t  <i class=\"vote-number\" style=\"").concat(css$1.votenumberi, "\"></i>\n\t</button>\n\t<button class=\"reply\" style=\"").concat(css$1.button, " ").concat(css$1.replybutton, "\"><b>REPLY</b></button>\n  </div>\n</div>\n"); // template

  var Comment = /*#__PURE__*/function () {
    // available tags.
    function Comment(config) {
      _classCallCheck(this, Comment);

      this.user = "Default";
      this.availabletags = [];
      var obj = this; // Make a new node.

      obj.node = html2element(template$d); // Fill the template with the options from the config. There must be a comment, and there must be an author.

      obj.config = config; // Fill some options that may not be defined in config.

      obj.config.datetime = config.datetime ? config.datetime : new Date().toISOString();
      obj.config.upvotes = config.upvotes ? config.upvotes : [];
      obj.config.downvotes = config.downvotes ? config.downvotes : []; // Modify the node to reflect the config.

      var header = obj.node.querySelector("div.header");
      header.querySelector("b.author").innerText = config.author;
      obj.update(); // Add the upvoting and downvoting. Where will the author name come from?? The upvote/downvote buttons should also be colored depending on whether the current user has upvoted or downvoted the comment already. Maybe the top app should just push the current user to the elements, and then they can figure out how to handle everything. That means that the functionality can be implemented here.

      var footer = obj.node.querySelector("div.footer");

      footer.querySelector("button.upvote").onmousedown = function () {
        obj.submitvote({
          id: obj.config.id,
          type: "upvote"
        });
      }; // onclick


      footer.querySelector("button.downvote").onmousedown = function () {
        obj.submitvote({
          id: obj.config.id,
          type: "downvote"
        });
      }; // onclick

    } // constructor


    _createClass(Comment, [{
      key: "update",
      value: function update() {
        // Only the time is allowed to be updated (if it will be calculated back), and the up and down votes.
        var obj = this;
        obj.updateTimestamp();
        obj.updateVoteCounter("upvote");
        obj.updateVoteCounter("downvote");
        obj.updateContent();
      } // update

    }, {
      key: "updateContent",
      value: function updateContent() {
        var obj = this;
        obj.node.querySelector("div.body").innerHTML = obj.config.comment.replace(/#\w+/g, function (s) {
          return obj.availabletags.includes(s) ? "<mark>".concat(s, "</mark>") : s;
        }); // Any mark tags need to interact with the view.

        obj.node.querySelector("div.body").querySelectorAll("mark").forEach(function (m) {
          m.onmouseover = function () {
            obj.preview(m.innerText);
          }; // onmouseover


          m.onmouseout = function () {
            obj.previewend(m.innerText);
          }; // onmouseover

        }); // forEach
      } // updateContent

    }, {
      key: "updateTimestamp",
      value: function updateTimestamp() {
        var obj = this;
        var timestamp = obj.node.querySelector("div.header").querySelector("span.timestamp");
        timestamp.innerText = formatTimeStamp(obj.config.datetime);
      } // updateTimestamp

    }, {
      key: "updateVoteCounter",
      value: function updateVoteCounter(buttonClassName) {
        var obj = this;
        var button = obj.node.querySelector("div.footer").querySelector("button.".concat(buttonClassName));
        var icon = button.querySelector("i.fa");
        var counter = button.querySelector("i.vote-number");
        var n = 0;

        switch (buttonClassName) {
          case "upvote":
            n = obj.config.upvotes.length;
            counter.innerText = n > 0 ? n : "";
            icon.style.color = obj.config.upvotes.includes(obj.user) ? "green" : "black";
            break;

          case "downvote":
            n = obj.config.downvotes.length;
            counter.innerText = n > 0 ? -n : "";
            icon.style.color = obj.config.downvotes.includes(obj.user) ? "tomato" : "black";
            break;
        } // switch

      } // updateVoteCounter
      // Dummy functionality.

    }, {
      key: "submitvote",
      value: function submitvote(vote) {} // submitvote

    }, {
      key: "preview",
      value: function preview() {} // preview

    }, {
      key: "previewend",
      value: function previewend() {} // previewend

    }]);

    return Comment;
  }(); // Comment

  function formatTimeStamp(t) {
    // Dates are saved as strings for ease of comprehension. For formatting they are first translated into miliseconds passed since 1970.
    var now = new Date(Date.now());
    var stamp = new Date(t);
    var dayInMiliseconds = 1000 * 60 * 60 * 24;
    var todayInMiliseconds = ((now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds()) * 1000 + now.getMilliseconds(); // Format the time so that it shows everything from today as n minutes/hours ago, everything from yesterday as yesterday at :... and everything else as the date. 

    if (stamp > now - todayInMiliseconds) {
      // This was submitted today. Now figure out how long ago.
      var seconds = Math.floor((now - stamp) / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      if (days > 0) {
        return "".concat(days, " days ago");
      } // if


      if (hours > 0) {
        return "".concat(hours, " hours ago");
      } // if


      if (minutes > 0) {
        return "".concat(minutes, " minutes ago");
      } // if


      return "".concat(seconds, " seconds ago");
    } else if (stamp > now - todayInMiliseconds - dayInMiliseconds) {
      // Yesterday at HH:MM
      return "Yesterday at ".concat(stamp.toLocaleTimeString());
    } else {
      // Just keep the first 4 parts which should be day name, month name, day number, year number
      return stamp.toDateString();
    } // if

  } // updateTimestamp

  var ReplyComment = /*#__PURE__*/function (_Comment) {
    _inherits(ReplyComment, _Comment);

    var _super = _createSuper(ReplyComment);

    function ReplyComment(config) {
      var _this;

      _classCallCheck(this, ReplyComment);

      _this = _super.call(this, config);

      var obj = _assertThisInitialized(_this); // The secondary comments need to be indented.


      obj.node.style.marginLeft = "20px"; // Replies can't be replied to. Maybe allow them too, but just put a hashtagged name in front?

      obj.node.querySelector("button.reply").remove();
      return _this;
    } // constructor


    return ReplyComment;
  }(Comment); // ReplyComment

  // Sort the comments before passing them to the comments below. How will replies be updated? Ultimately everything should be coming from the server??
  // This is just a template for the controls which allow the replies to be expanded or collapsed. These are invisible at first.

  var template$c = "\n<div style=\"display: none;\">\n  <div class=\"expand-controls\" style=\"color: blue; cursor: pointer;\">\n    <i class=\"fa fa-caret-down\"></i>\n\t<i class=\"control-text\">View replies</i>\n  </div>\n  <div class=\"replies\"></div>\n</div>\n"; // Maybe the general comments can be added on top, but the replies should follow in chronological order.

  var GeneralComment = /*#__PURE__*/function (_Comment) {
    _inherits(GeneralComment, _Comment);

    var _super = _createSuper(GeneralComment);

    function GeneralComment(config) {
      var _this;

      _classCallCheck(this, GeneralComment);

      _this = _super.call(this, config);
      _this.replies = [];

      var obj = _assertThisInitialized(_this);

      obj.replybutton = obj.node.querySelector("button.reply"); // The general comment can have replies associated with it. Handle these here. Furthermore an additional control for expanding, reducing hte comments is required.

      obj.replynode = html2element(template$c);
      obj.node.appendChild(obj.replynode); // Add the functionality to the caret.

      obj.repliesExpanded = false;

      obj.replynode.querySelector("div.expand-controls").onmousedown = function () {
        obj.repliesExpanded = !obj.repliesExpanded;
        obj.update();
      }; // onclick
      // Replies on the config need to be initialised. But actually, they should be stored as separate entries for ease of updating...


      obj.update();
      return _this;
    } // constructor


    _createClass(GeneralComment, [{
      key: "addreply",
      value: function addreply(replyconfig) {
        // No pushing of updated versions.
        var obj = this; // Make a comment node, and append it to this comment.

        var r = new ReplyComment(replyconfig);
        r.preview = obj.preview;
        r.previewend = obj.previewend;
        r.availabletags = obj.availabletags;
        r.update(); // Add this one at the end.

        obj.replynode.querySelector("div.replies").appendChild(r.node);
        obj.replies.push(r); // Copy the submitvote function.

        r.submitvote = obj.submitvote; // Update the view.

        obj.update();
      } // addreply

    }, {
      key: "replaceReply",
      value: function replaceReply(existing, replacement) {
        // For simplicity handle the replacing of hte comment here.
        var obj = this; // Update the internal comments store.

        obj.replies.splice(obj.replies.indexOf(existing), 1, replacement); // Update teh DOM.

        var container = obj.node.querySelector("div.replies");
        container.insertBefore(replacement.node, existing.node);
      } // replaceReply

    }, {
      key: "update",
      value: function update() {
        // Only the time is allowed to be updated (if it will be calculated back), and the up and down votes.
        var obj = this; // From superclass

        obj.updateTimestamp();
        obj.updateVoteCounter("upvote");
        obj.updateVoteCounter("downvote");
        obj.updateContent(); // GeneralComment specific.

        obj.updateReplies();
      } // update
      // Update function in addition to the superclass ones.

    }, {
      key: "updateReplies",
      value: function updateReplies() {
        var obj = this; // First update is called when the superclass constructor is called.

        if (obj.replies) {
          var n = obj.replies.length;
          obj.replynode.style.display = n > 0 ? "" : "none"; // View replies or hide replies

          var s = n == 1 ? "y" : "ies (".concat(n, ")");
          obj.replynode.querySelector("div.expand-controls").querySelector("i.control-text").innerText = obj.repliesExpanded ? "Hide repl".concat(s) : "View repl".concat(s);
          obj.replynode.querySelector("div.expand-controls").querySelector("i.fa").classList.value = obj.repliesExpanded ? "fa fa-caret-up" : "fa fa-caret-down";
          obj.replynode.querySelector("div.replies").style.display = obj.repliesExpanded ? "" : "none";
        } // if

      } // updateReplies

    }]);

    return GeneralComment;
  }(Comment); // GeneralComment
   // findArrayItemById

  var template$b = "\n<div class=\"commenting\" style=\"width:300px; margin-top: 10px;\">\n  <div class=\"hideShowText\" style=\"cursor: pointer; margin-bottom: 5px; color: gray;\">\n    <b class=\"text\">Show comments</b>\n\t<b class=\"counter\"></b>\n\t<i class=\"fa fa-caret-down\"></i>\n  </div>\n  <div class=\"commentingWrapper\" style=\"display: none;\">\n    <div class=\"comment-form\"></div>\n    <hr>\n    <div class=\"comment-tags\"></div>\n    <div class=\"comments\" style=\"overflow-y: auto; max-height: 200px;\"></div>\n  </div>\n</div>\n"; // template

  var CommentingManager = /*#__PURE__*/function () {
    function CommentingManager() {
      _classCallCheck(this, CommentingManager);

      this.comments = [];
      this.generalcommentobjs = [];
      this.availabletags = [];
      var obj = this;
      obj.node = html2element(template$b); // Make the form;

      obj.form = new AddCommentForm();
      obj.node.querySelector("div.comment-form").appendChild(obj.form.node); // Finally add teh controls that completely hide comments.

      var hsdiv = obj.node.querySelector("div.hideShowText");
      var cdiv = obj.node.querySelector("div.commentingWrapper");

      hsdiv.onmousedown = function (e) {
        e.stopPropagation();
        var hidden = cdiv.style.display == "none";
        cdiv.style.display = hidden ? "" : "none"; // It changed from hidden to show, but hidden is past state.

        hsdiv.querySelector("b.text").innerText = hidden ? "Hide comments" : "Show comments";
        hsdiv.querySelector("i").classList.value = hidden ? "fa fa-caret-up" : "fa fa-caret-down";
      }; // onmousedown

    } // constructor


    _createClass(CommentingManager, [{
      key: "updateCommentCounter",
      value: function updateCommentCounter() {
        var obj = this;
        /*
        let n = obj.comments.reduce((acc,c)=>{
        	acc += 1
        	acc += c.replies.length;
        	return acc
        },0)
        */

        var n = obj.comments.length;
        var counterNode = obj.node.querySelector("div.hideShowText").querySelector("b.counter");
        counterNode.innerText = n ? "(".concat(n, ")") : "";
      } // updateCommentCounter

    }, {
      key: "purge",
      value: function purge() {
        var obj = this;
        obj.comments = [];
        obj.generalcommentobjs = [];
        var commentsToRemove = obj.node.querySelector("div.comments").children;

        for (var i = 0; i < commentsToRemove.length; i++) {
          commentsToRemove[i].remove();
        } // for

      } // purge

    }, {
      key: "add",
      value: function add(comments) {
        // The comments come solely from the server. They are not updated, and can just be created once.
        var obj = this; // Store all of them as a record.

        obj.comments = obj.comments.concat(comments); // Replies are owned by the general comment. So maybe split them first into general comments, and replies, and add the general comments first, and then add the replies to the general comments.

        var replies = comments.filter(function (c) {
          return c.ownerid;
        });
        var general = comments.filter(function (c) {
          return !c.ownerid;
        }); // Just add the new ones in.

        general.forEach(function (comment) {
          var c = new GeneralComment(comment);
          c.preview = obj.preview;
          c.previewend = obj.previewend;
          c.availabletags = obj.availabletags;
          c.update(); // Insert the new comment at teh very top.

          var container = obj.node.querySelector("div.comments");
          container.insertBefore(c.node, container.firstChild);
          obj.generalcommentobjs.push(c); // The general comment has a REPLY button - it needs to use the AddCommentForm submit function. That method is assigned from outside. The function here is different in that it assigns a parent id.

          c.replybutton.onmousedown = function (e) {
            e.stopPropagation();
            var c = obj.form.config;
            c.ownerid = comment.id;
            obj.form.submit(c);
            obj.form.clear();
          }; // onmousedown


          c.submitvote = obj.submitvote;
        }); // forEach
        // Replies need to be SORTED BY DATETIME!!

        replies.forEach(function (reply) {
          // Find the owner.
          var ownercomment = obj.generalcommentobjs.find(function (gc) {
            return gc.config.id == reply.ownerid;
          }); // This if is not strictly necessary, but just to play it safe.

          if (ownercomment) {
            ownercomment.addreply(reply);
          } // if

        }); // forEach
        // Update the comment section header:

        obj.updateCommentCounter();
      } // add

    }, {
      key: "user",
      set: function set(name) {
        var obj = this; // The comment appearance and functionality changes depends on who is checking them.

        obj.generalcommentobjs.forEach(function (gc) {
          gc.user = name;
          gc.update();
          gc.replies.forEach(function (rc) {
            rc.user = name;
            rc.update();
          });
        }); // forEach
      } // set user

    }, {
      key: "updateAvailableTags",
      value: function updateAvailableTags(tagnames) {
        var obj = this;
        obj.availabletags = tagnames;
        obj.generalcommentobjs.forEach(function (gc) {
          gc.availabletags = tagnames;
          gc.update();
          gc.replies.forEach(function (rc) {
            rc.availabletags = tagnames;
            rc.update();
          });
        });
      } // Dummy function

    }, {
      key: "submitvote",
      value: function submitvote() {} // submitvote

    }, {
      key: "preview",
      value: function preview() {} // preview

    }, {
      key: "previewend",
      value: function previewend() {} // previewend

    }]);

    return CommentingManager;
  }(); // CommentingManager
   // arrayIncludesAll

  /* COMMENTING SYSTEM

  A class that handles all of the commenting system. Should be minimisable!!

  */

  var template$a = "\n<div></div>\n"; // template
  // Add top caret that hides the whole thing!! And the chapterform should maybe include a draw button.

  var AnnotationSystem = /*#__PURE__*/function () {
    function AnnotationSystem(taskid) {
      _classCallCheck(this, AnnotationSystem);

      var obj = this;
      obj.node = html2element(template$a); // How will the chapter form know which time is currently selected? Should there be a dummy version that is assigned from the outside? So that the accessing can be done only when needed?

      obj.tagform = new TagForm();
      obj.node.appendChild(obj.tagform.node);
      obj.tagoverview = new TagOverview();
      obj.node.appendChild(obj.tagoverview.node); // Add in the commenting system. The metadata filename is used as the id of this 'video', and thus this player. The node needs to be added also.

      obj.commenting = new CommentingManager(taskid);
      obj.node.appendChild(obj.commenting.node); // Tags will always be submitted straight to the server, which will then send them back. It's going to be tricky to deal with the upvotes/downvotes.
      // This is just a local assignment. The actual submit function is attached in the knowledge manager.

      obj.tagform.submit = function (tag) {
        // The KnowledgeManager must push the chapter annotations to:
        // the navigation tree as a group seed, the playbar as a chapter, and the commenting system as a conversation topic.
        console.log("Send to server", tag);
      }; // submit

    } // constuctor


    _createClass(AnnotationSystem, [{
      key: "purge",
      value: function purge() {
        var obj = this;
        obj.tagoverview.purge();
        obj.commenting.purge();
      } // purge

    }]);

    return AnnotationSystem;
  }(); // AnnotationSystem

  var ChessGame = /*#__PURE__*/function (_Item) {
    _inherits(ChessGame, _Item);

    var _super = _createSuper(ChessGame);

    function ChessGame(task) {
      var _this;

      _classCallCheck(this, ChessGame);

      _this = _super.call(this);

      var obj = _assertThisInitialized(_this); // The task is important!


      obj.task = task;
      obj.node.querySelector("p.label").innerHTML = task.taskId; // Configure the chess board renderer.

      obj.renderer = new ChessGameRenderer(task.Game);
      obj.viewnode.appendChild(obj.renderer.node); // Add in a Commenting system also.

      obj.annotations = new AnnotationSystem(task.taskId);
      obj.node.querySelector("div.commenting").appendChild(obj.annotations.node); // CROSS MODULE FUNCTIONALITY
      // Maybe the tagform should be split off from the commenting? And just be its own independent module? But it'll need to be wrapped up somehown if I want to be able to hide it all at once.
      // The tagform needs to have access to the playbar current time.

      var c = obj.annotations.tagform;

      c.t = function () {
        return obj.renderer.ui.t_play;
      }; // tagform t.


      var ga = obj.renderer.geometryannotation;
      var to = obj.annotations.tagoverview;
      var cm = obj.annotations.commenting; // Attach a toggle on the geometry button to either show, or hide the geometry annotation SVG.
      // Onclick is captured and stopped somewhere else, so mousedown is looked for.
      // c.buttons.insertBefore(ga.togglebutton, c.buttons.firstChild);
      // Should previewing persist when the user is adding points? In that case the geometry annotation should know about all the active tags. So maybe it should just have a slot to show them? And it should be updated on the go?
      // Here implement the annotation tag previewing.
      // Should this just collectall currently active tags and push them to the polygon annotation for viewing?

      to.preview = function (tag) {
        // If the tag has geometry then the SVG should be turned on. This can only be done with access to the geometry annotation class.
        var activeannotations = to.buttons.filter(function (b) {
          return b.on;
        }); // Tags are stored at least as empty arrays.

        if (tag.geometry != "[]") {
          // Get all active geometries. A geometry has a FEN associated with it.
          var taggeometry = JSON.parse(tag.geometry);
          var activegeometries = activeannotations.map(function (b) {
            return JSON.parse(b.tag.geometry);
          });
          var previewconfig = {
            fen: taggeometry.fen,
            shapes: activegeometries.reduce(function (acc, g) {
              return acc.concat(g.shapes);
            }, []).concat(taggeometry.shapes)
          }; // previewconfig

          ga.show(previewconfig);
        } // if


        if (tag.timestamps) {
          // Just search by name.
          obj.renderer.ui.bar.chapters.find(function (c) {
            return c.config.label == tag.name;
          }).highlight();
        } // if

      }; // preview


      to.previewend = function () {
        // Check if the geometry annotation is toggled on. If it's not then turn the SVG off.
        to.buttons.filter(function (b) {
          return b.on;
        }).map(function (b) {
          return JSON.parse(b.tag.geometry);
        }); // ga.external = activeannotations;
        // geometryannotation.show expects to see the data in the data domain.

        ga.show(); // Unhighlight all chapters.

        obj.renderer.ui.bar.chapters.forEach(function (c) {
          return c.unhighlight();
        });
      }; // previewend


      to.communicatetags = function (tags) {
        // Pass these to the comment manager, which should pass it to all the comments.
        cm.updateAvailableTags(tags.map(function (t) {
          return "#".concat(t.name);
        }));
      }; // communicatetags
      // Commenting should also support previewing.


      cm.preview = function (tagname) {
        // Where should a selection be made which tags to preview, and which not?
        // First find the correct tag. All the tags are in TagOverview. After finding the correct tag the TagOverview preview can be used?
        var tag = to.buttons.find(function (b) {
          return b.node.innerText == tagname;
        }).tag;
        to.preview(tag);
      }; // preview


      cm.previewend = function (tagname) {
        to.previewend();
      }; // previewend


      return _this;
    } // constructor


    _createClass(ChessGame, [{
      key: "checksize",
      value: function checksize() {
        var obj = this; // Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.

        var rect = obj.node.getBoundingClientRect();

        if (rect.width < 200) ; // if

      } // checksize

    }]);

    return ChessGame;
  }(Item); // ChessGame

  var DrawLink = /*#__PURE__*/function () {
    // Indices when exiting parent node, entering child node, and the index of position of the bend.
    // Actual dimensions. The label width is the minimum horizontal line length. Bundle width is the space reserved for the vertical line width. Line width is the actual width of the white outline. The default radius is the basis for the actual bend radii.
    function DrawLink(parentnode, childnode, author) {
      _classCallCheck(this, DrawLink);

      this.pi = 0;
      this.ci = 0;
      this.bendi = 0;
      this.node_label_width = 70;
      this.bundle_width = 4;
      this.line_width = 4;
      this.r = 16;
      var obj = this; // So that hte locations can be changed on hte go.

      obj.parentnode = parentnode;
      obj.childnode = childnode;
      obj.author = author; // Exit radius is determined node level difference.

      obj.r1 = (childnode.level - parentnode.level) * obj.r;
      obj.r2 = obj.r;
    } // constructor


    _createClass(DrawLink, [{
      key: "originCoord",
      get: function get() {
        var obj = this;
        return {
          x: obj.parentnode.x,
          y: obj.parentnode.calculateOutgoingLineY(obj.pi)
        }; // origin
      } // origincoord

    }, {
      key: "targetCoord",
      get: function get() {
        var obj = this;
        return {
          x: obj.childnode.x,
          y: obj.childnode.calculateIncomingLineY(obj.ci)
        }; // origin
      } // origincoord

    }, {
      key: "path",
      get: function get() {
        // Doesn't take into account the offsets yet!!
        // Allow this to return a straight path, or a curved one. The straight path is exclusively for bundles that have only one parent. Furthermore, that one should only be allowed when connecting nodes on the same height. So maybe just base the decision off of that?
        // Straight path is just M0 0 L40 0 or so.
        var obj = this; // The target x should be > `xHorizontal + r1 + r2'

        var xHorizontal = obj.parentnode.x + obj.node_label_width + obj.bendi * obj.bundle_width;
        var origin = obj.originCoord;
        var target = obj.targetCoord;
        var p = "M".concat(origin.x, " ").concat(origin.y, " L").concat(target.x, " ").concat(target.y);

        if (origin.y != target.y) {
          var arc1start = {
            x: xHorizontal - obj.r1,
            y: origin.y
          };
          var arc1end = {
            x: xHorizontal,
            y: origin.y + obj.r1
          };
          var arc2start = {
            x: xHorizontal,
            y: target.y - obj.r2
          };
          var arc2end = {
            x: xHorizontal + obj.r2,
            y: target.y
          };
          /*
          How the path is made up.
          start point                   : M0 0
          horizontal line               : L40 0
          first bend to vertical        : A16 16 90 0 1 46 16
          vertical line                 : L46 34
          second bend to horizontal     : A16 16 90 0 0 62 50
          horizontal connection to node : L62 50
          */

          p = "M".concat(origin.x, " ").concat(origin.y, " L").concat(arc1start.x, " ").concat(arc1start.y, " A").concat(obj.r1, " ").concat(obj.r1, " 90 0 1 ").concat(arc1end.x, " ").concat(arc1end.y, " L").concat(arc2start.x, " ").concat(arc2start.y, " A").concat(obj.r2, " ").concat(obj.r2, " 90 0 0 ").concat(arc2end.x, " ").concat(arc2end.y, " L").concat(target.x, " ").concat(target.y);
        } // if


        return p;
      } // path

    }]);

    return DrawLink;
  }(); // DrawLink

  var template$9 = "\n<g class=\"bundle\">\n  <path stroke=\"white\" stroke-width=\"5\" fill=\"none\"></path>\n  <path stroke=\"black\" stroke-width=\"2\" fill=\"none\"></path>\n</g>\n"; // tempalte
  // These should just be exposed at the link level... The tree level also has them, and it's non hygienic.

  var node_label_width$1 = 70;
  var bundle_width$1 = 4;
  var r$1 = 16; // Bundles are the connections between two levels of nodes.

  var TreeBundle = /*#__PURE__*/function () {
    // Index is the ranked position of this bundle within hte level. It determines the position of hte vertical line segment, and the corner radius.
    function TreeBundle(seednode, author) {
      _classCallCheck(this, TreeBundle);

      this.links = [];
      this._bendi = 0; // A seed node is passed in to define the bundle parents and thus instantiate a bundle. After instantialisation only the children of the bundle can change.
      // NOTE: seednode is a `treenode' instance, but parents and children are `taskgroup' instances. The level is only defined for the node because it can change when the user interacts with the tree.

      var obj = this;
      obj.node = svg2element(template$9);
      obj.author = author, obj.level = seednode.level;
      obj.parents = seednode.connections.parents;
      obj.children = [seednode.connections.group];
      obj.nodeChildren = [seednode];
      obj.nodeParents = [];
    } // constructor


    _createClass(TreeBundle, [{
      key: "bendi",
      get: // bendi
      function get() {
        return this._bendi;
      } // get bendi
      ,
      set: function set(i) {
        // When a bunldes bend index is set it should propagate it to all the children.
        var obj = this;
        obj.links.forEach(function (link) {
          link.bendi = i;
        }); // forEach

        obj._bendi = i;
      }
    }, {
      key: "update",
      value: function update(color) {
        var obj = this; // There's two paths, an upper color and bottom white.

        var paths = obj.node.querySelectorAll("path");

        for (var i = 0; i < paths.length; i++) {
          paths[i].setAttribute("d", obj.path);
        } // for


        if (color) {
          paths[paths.length - 1].setAttribute("stroke", color);
        } // if


        if (!obj.author) {
          paths[paths.length - 1].setAttribute("stroke-dasharray", "5,2");
        } // if

      } // update

    }, {
      key: "addparent",
      value: function addparent(node) {
        // Only nodes can be pushed. And only the ones declared upon initialisation!
        var obj = this;
        var isNodeAllowed = obj.parents.includes(node.connections.group);
        var isNodeUnknown = !obj.nodeParents.includes(node);

        if (isNodeAllowed && isNodeUnknown) {
          obj.nodeParents.push(node);
          obj.updateNodeMinBlockPositions();
        } // if

      } // addparent

    }, {
      key: "addchild",
      value: function addchild(node) {
        var obj = this;

        if (!obj.children.includes(node.connections.group)) {
          obj.children.push(node.connections.group);
        } // if


        if (!obj.nodeChildren.includes(node)) {
          obj.nodeChildren.push(node);
          obj.updateNodeMinBlockPositions();
        } // if

      } // addchild

    }, {
      key: "makelinks",
      value: function makelinks() {
        var obj = this; // Links must be made for every child-parent combination. Strictly speaking at least one link must be made for all the children, and at least one link must connect to every parent.

        var links = [];
        obj.nodeParents.forEach(function (p) {
          obj.nodeChildren.forEach(function (c) {
            links.push(new DrawLink(p, c));
          }); // forEach
        }); // forEach

        obj.links = links;
      } // links
      // Make the full path here??

    }, {
      key: "path",
      get: function get() {
        var obj = this;
        return obj.links.map(function (link) {
          return link.path;
        }).join("");
      } // path

    }, {
      key: "width",
      get: function get() {
        // The width of the bundle is the fixed horizontal distance plus the number of bundles multiplied by the width reserved for the vertical line segment. The nodes, and therefore the lines are not yet positioned properly, therefore their width cannot be used to calculate the bunlde width. But they can be just summed together though!
        // Note that this is the minimum width of spanning one level, and not the entire width of the bundle, which may include lines spanning multiple levels!
        return node_label_width$1 + obj.bundles.length * bundle_width$1 + r$1;
      } // get width

    }, {
      key: "updateNodeMinBlockPositions",
      value: function updateNodeMinBlockPositions() {
        // This should just be run whenever the parents or the children are changed.
        // Because the links make two 90 degree turns when connecting the parent to the child the radii of these turns constitute the minimum y offset of this bundle relative to the previous one. Furthermore, this is offset relative to the lowest parent! This is important when positioning the child nodes.
        var obj = this;
        var lowestParentBlock = obj.nodeParents.reduce(function (acc, p) {
          return acc > p.block ? acc : p.block;
        }, 0);
        obj.nodeChildren.forEach(function (child) {
          child.block = lowestParentBlock; // + 2*r if all links curves.
        }); // forEach
      } // y_min

    }, {
      key: "childMinimumY",
      value: function childMinimumY() {
        var obj = this;
        return obj.nodeParents.reduce(function (acc, b) {
          return Math.max(acc, b.y);
        }, 0);
      } // childMinimumY

    }]);

    return TreeBundle;
  }(); // TreeBundle2

  var node_label_width = 70; // length of text

  var bundle_width = 4; // reserved space for the vertical bunlde line

  var r = 16; // arc radius
  // A level is an organisational group. All dimensioning is done through a treelevel. The primary elements that define the level are its bundles. The TreeLevel is necessary because the bundles need to be sequenced within a level, and the level width is required to position hte levels. Because the bundles are based on a set of parents, the level of the bundle is the level of the children.

  var TreeLevel = /*#__PURE__*/function () {
    function TreeLevel(nodes, bundles, nlevel) {
      _classCallCheck(this, TreeLevel);

      var obj = this;
      obj.n = nlevel;
      obj.bundles = bundles.filter(function (b) {
        return b.level == nlevel;
      });
      obj.nodes = nodes.filter(function (n) {
        return n.level == nlevel;
      });
    } // constructor


    _createClass(TreeLevel, [{
      key: "width",
      get: function get() {
        // The width of the entire level. It's the width of the label plus the width of all the vertical line segments (including padding), plus the length of the finishing horizontal segment (this is zero for the right-most bundle).
        var obj = this; // The width of the level is determined by the bundles that end in it. If there aren't any bundles, there is no width. Maybe do a reduce and move the width calculation to the bundle? That would eliminate the dimensions here.

        if (obj.bundles.length > 0) {
          return node_label_width + obj.bundles.length * bundle_width + r;
        } else {
          return 0;
        } // if

      } // width

    }]);

    return TreeLevel;
  }(); // TreeLevel

  /* 
  A defined group hierarchy (groups, group members, and group parents have been established) is passed in. The input data is an array of groups to be drawn.

  This is the background data based on which a tree chart can be established. Interactions with the tree don't change the underlying group hierarchy, only the drawn representation.
  */

  /*
  Node height -> number of bundles connecting to it
  Node x -> depends on the levels and their widths
  Node y -> position of parent nodes
  Level width -> number of bundles
  Bundle links -> parent/child nodes
  */

  function getBundleLinesGoingThroughNode(bundle, node) {
    // Given some bundles find which of its lines go through a specific node. Whether the lines are incoming or outgoing is not needed, because it's determined by the relationship between the bundles and the node. Instead the node must just be referenced by the line.
    return bundle.links.filter(function (link) {
      return link.childnode == node || link.parentnode == node;
    }); // filter
  } // getBundleLines


  function arrangeIncomingOutgoingTracks(node, bundles) {
    // This is for bundles coming in and out of a particular node. To draw the node I need to know where to start, how big it should be, and I should also know what the label is, and what the corresponding tags are. Each bundle should be staggered when entering a particular node. But bundles can also hold lines of several authors. These should be staggered as well.
    var outgoingbundles = bundles.filter(function (b) {
      return b.parents.includes(node.connections.group);
    }); // filter

    var incomingbundles = bundles.filter(function (b) {
      return b.children.includes(node.connections.group);
    }); // filter
    // Bundles spanning multiple levels should be all the way at the top. Then they should be ordered by bundle ind. Larger bendi means bend happens more to the right.

    incomingbundles.sort(function (a, b) {
      return b.level - a.level || b.bendi - a.bendi;
    }); // sort

    outgoingbundles.sort(function (a, b) {
      return b.level - a.level || b.bendi - a.bendi;
    }); // sort
    // This should be improved. First of all, the track indices and the bundle indices should be coordinated by sorting the lines by bundle ind before assigning the track ind. Secondly, it would be good if bundles of the same color could maintain same track positions...
    // Assign the index of track to enter the node by. Lines entering this node treat it as a child.

    incomingbundles.forEach(function (bundle, i) {
      var lines = getBundleLinesGoingThroughNode(bundle, node);
      lines.forEach(function (line) {
        line.ci = i;
      });
    }); // forEach
    // Lines exiting hte node treat it as a parent.

    outgoingbundles.forEach(function (bundle, i) {
      var lines = getBundleLinesGoingThroughNode(bundle, node);
      lines.forEach(function (line) {
        line.pi = i;
      });
    }); // forEach
    // Set number of incoming bundles.

    node.nBundlesIn = incomingbundles.length;
    node.nBundlesOut = outgoingbundles.length;
  } // arrangeIncomingOutgoingTracks


  function arrangeBundlesOfLevel(bundles) {
    bundles.sort(function (a, b) {
      // How to sort by similarity? Similarity is based on a pairs, not on individual. Maybe order by size, and then progressively do smaller sorts? Or just sort the nodes, and adjust the bundles to that?
      // Sort by size.
      return b.children.length - a.children.length;
    }); // sort
    // But it also depends on hte nodes in hte previous level? So just arrange them sensibly? Go through them and assign minimum y positions based on the parents. This can later be used to create further bundles?
    // Maybe the nodes should just track the indices of the paths that lead to them? Sort of a history? That would also allow the longest chain to be identified. And then the level indices of the paths/bundles can be used to determine the order.
    // Maybe if the up-path is also allowed it can be used to reclaim some space after a particular branch ends?
    // The bundle needs an ind for within the level. This can be used to sort the bundle links horizontally. The location of the vertical line segment is determined based on this index.

    var maxBundleInd = bundles.length - 1;
    bundles.forEach(function (b, i) {
      b.bendi = maxBundleInd - i;
    }); // forEach
  } // arrangeBundlesOfLevel


  function getbundles(nodes) {
    // The bundles should be differentiated based on tag authors.
    var bundleseeds = nodes.filter(function (node) {
      return node.connections.parents.length > 0;
    }); // filter
    // The `taskgroup' objects have several tags connected to them. Each tag represents a group that was created by some user. For every author of a group there should be a different bundle connecting to it. Even if the tag has only been created for that specific group.
    // Two bundles are not necessarily the same if htey have the same parents. They should be differentiated by the user tag also.

    var bundles = bundleseeds.reduce(function (bundles, node) {
      // This node may belong to several bundles made by different authors. Find thos bundles, and if they can't be found create them.
      node.connections.group.tags.forEach(function (tag) {
        var existing = bundles.filter(function (b) {
          return b.author == tag.author;
        }).filter(function (b) {
          return arrayEqual(b.parents, node.connections.parents);
        });

        if (existing.length > 0) {
          existing.forEach(function (b) {
            b.addchild(node);
          }); // forEach
        } else {
          bundles.push(new TreeBundle(node, tag.author));
        } // if

      });
      return bundles;
    }, []); // map
    // Go through hte nodes one more time to assign the parent nodes also. Originally only the groups are assigned as parents as the incoming nodes don't reference other nodes, but the groups do reference each other.
    // `treebundle' instances will check whether parents are valid.

    nodes.forEach(function (node) {
      bundles.forEach(function (bundle) {
        bundle.addparent(node);
      });
    }); // forEach
    // Make sure the bundles create all the required links.

    bundles.forEach(function (bundle) {
      bundle.makelinks();
    });
    return bundles;
  } // get bundles


  function getlevels(nodes, bundles) {
    // Always create all new levels!!
    var levels = []; // Find all the levels from the bundles.

    var maxlevel = Math.max.apply(Math, _toConsumableArray(nodes.map(function (n) {
      return n.level;
    })));

    for (var level = 0; level < maxlevel + 1; level++) {
      levels.push(new TreeLevel(nodes, bundles, level));
    } // for


    return levels;
  } // get levels
  // Maybe devolve this one into TreeRender and hierarchy?
  // The user can only click on the nodes to directly interact with the tree. Currently the 'collapsenode' is used for that.


  function dimensioning(nodes) {
    // `dimension' calculates the positions of the nodes on the screen, and dimensions the connecting links.
    nodes.forEach(function (node) {
      return node.clear();
    }); // Need to get teh levels so that I have a constant copy... mobx would probably improve this, but it'll do for now. Maybe it'd just be better to collect this with some sort of functions? And not getters?

    var bundles = getbundles(nodes);
    var levels = getlevels(nodes, bundles); // First order the bundles within hte levels.

    levels.forEach(function (level) {
      return arrangeBundlesOfLevel(level.bundles);
    }); // forEach
    // ASSIGN INCOMING/OUTGOING INDICES TO LINES.

    nodes.forEach(function (node) {
      return arrangeIncomingOutgoingTracks(node, bundles);
    }); // forEach
    // Last thing is to position the nodes. x positioning is controlled by the level they are on.

    var x = 0;
    levels.forEach(function (level) {
      // Assigning x positions just depends on the level.
      x += level.width;
      level.nodes.forEach(function (n) {
        n.x = x;
      }); // level.nodes
      // Recalculate the minimum node positions.

      level.bundles.forEach(function (b) {
        return b.updateNodeMinBlockPositions();
      }); // Now sort the nodes by their miny to conserve as much space as possible.

      level.nodes.sort(function (a, b) {
        return a.block - b.block;
      }); // sort
      // Run through htem again to assign unique block ids to them. This should already produce a block ordered array of nodes.

      var block = 0;
      level.nodes.forEach(function (n) {
        n.block = Math.max(n.block, block);
        block += 1;
      }); // forEach
      // After blocks are assigned do the positioning. This also depends on the links. If a link is expected to connect the same blocks it will be horizntal, and hte node positions should be adjusted accordingly.
      // The block are supposed to already separate the nodes vertically, now we're just figuring out the small adjustments.
      // The assignment has to be done via links!

      var y = 0;
      level.bundles.forEach(function (bundle) {
        bundle.links.sort(function (a, b) {
          return a.childnode.block - b.childnode.block;
        }); // sort
        // Bundle links can always only be at the same level as parents, or below.

        y = Math.max(y, bundle.childMinimumY()); // Bundle links nodes may have already been positioned - by a parallel path connecting hte same nodes.
        // If there are multiple prents, then they will have positioned the childnode twice also!
        // It's intra-bundle that causes the bundle positioning!

        bundle.links.filter(function (lnk) {
          return !lnk.childnode.positioned;
        }).forEach(function (lnk) {
          if (lnk.parentnode.block == lnk.childnode.block) {
            lnk.childnode.yBasedOnIncomingHorizontalLine(lnk.parentnode.calculateOutgoingLineY(lnk.pi), lnk.ci);
          } else {
            lnk.childnode.y = y;
          } // if
          // The y position for hte next node. This should be global!


          lnk.childnode.positioned = true;
          y = lnk.childnode.y + lnk.childnode.markerSize + lnk.childnode.pitch;
        });
      }); // forEach
    }); // forEach

    return {
      nodes: nodes,
      bundles: bundles
    };
  } // dimensioning

  // text -> 	"x", node => node.labelx, "y", node => node.labely, label node=>node.label

  var template$8 = "\n<g class=\"node\" cursor=\"pointer\">\n  <g class=\"marker\">\n    <path class=\"outline\" stroke=\"black\" stroke-width=\"8\" stroke-linecap=\"round\"></path>\n    <path class=\"fill\" stroke=\"white\" stroke-width=\"4\" stroke-linecap=\"round\"></path>\n  </g>\n  <g class=\"label\">\n    <rect rx=\"5\" ry=\"5\" fill=\"none\"></rect>\n    <text class=\"unselectable\" stroke=\"white\" stroke-width=\"2\" font-size=\"10px\"></text>\n    <text class=\"unselectable\" stroke=\"black\" stroke-width=\"0.5\" font-size=\"10px\"></text>\n  </g>\n  <g class=\"tooltip\"></g>\n</g>\n"; // template
  // A treenode object is a higher level wrapper that contains all the dimensioning information. The `connections' attribute is supposed to hold the `treegroup' object, which contains a reference the an individual group, all it's ancestors, it's direct parents, and all its descendants.

  var TreeNode = /*#__PURE__*/function () {
    // These are assigned from outside.
    // Blocks are used to roughly position nodes.
    // Line width is the width of the incoming line. The pitch is the vertical spacing to the next node.
    function TreeNode(treegroup) {
      _classCallCheck(this, TreeNode);

      this.x = 0;
      this.y = 0;
      this.block = 0;
      this.lineWidth = 4;
      this.pitch = 32;
      this.nBundlesIn = 0;
      this.nBundlesOut = 0;
      this.hidden = false;
      var obj = this;
      obj.node = svg2element(template$8); // The treegroup holds all the connections of a particular group.

      obj.connections = treegroup;
      var label = obj.node.querySelector("g.label");
      label.addEventListener("mouseenter", function () {
        obj.highlightText(true);
      });
      label.addEventListener("mouseout", function () {
        obj.highlightText(false);
      });
      var marker = obj.node.querySelector("g.marker");

      marker.onmouseenter = function () {
        obj.highlightMarker(true);
      };

      marker.onmouseleave = function () {
        obj.highlightMarker(false);
      };
    } // constructor	


    _createClass(TreeNode, [{
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.x = 0;
        obj.y = 0;
        obj.block = 0;
        obj.nBundlesIn = 0;
        obj.nBundlesOut = 0;
      } // clear
      // Updating

    }, {
      key: "update",
      value: function update() {
        var obj = this;
        var marker = obj.node.querySelector("g.marker");
        var paths = marker.querySelectorAll("path");
        var label = obj.node.querySelector("g.label");
        var texts = label.querySelectorAll("text"); // Draw the node marker

        for (var i = 0; i < paths.length; i++) {
          paths[i].setAttribute("d", "M".concat(obj.x, " ").concat(obj.y, " L").concat(obj.x, " ").concat(obj.y + obj.markerSize));
        } // for
        // Position hte texts


        label.setAttribute("transform", "translate(".concat(obj.x + 4, ", ").concat(obj.y - 4, ")"));

        for (var _i = 0; _i < texts.length; _i++) {
          texts[_i].innerHTML = obj.label;
        } // for
        // Instead of having background text just a rectangle is added behind it. Text scales weirdly...


        obj.updateBackgroundRectSize();
      } // update

    }, {
      key: "updateBackgroundRectSize",
      value: function updateBackgroundRectSize() {
        var obj = this;
        var t = obj.node.querySelector("g.label").querySelectorAll("text")[1];
        var rect = obj.node.querySelector("g.label").querySelector("rect");
        var textbox = t.getBBox();
        rect.setAttribute("x", textbox.x - textbox.width * 0.05);
        rect.setAttribute("y", textbox.y);
        rect.setAttribute("width", textbox.width * 1.1);
        rect.setAttribute("height", textbox.height * 1.1);
      } // updatebackgroundRectSize
      // Highlighting

    }, {
      key: "highlightSelect",
      value: function highlightSelect() {
        // Just toggle the background rect, and the text color. Let it still respond to mouseover font increases.
        var obj = this;
        var t = obj.node.querySelector("g.label").querySelectorAll("text");
        var rect = obj.node.querySelector("g.label").querySelector("rect"); // Text fill is now white.

        t[0].setAttribute("fill", "black");
        t[0].setAttribute("stroke", "black");
        t[1].setAttribute("fill", "white");
        t[1].setAttribute("stroke", "white"); // Set the rect

        rect.setAttribute("fill", "black");
      } // highlightSelect

    }, {
      key: "unhighlightSelect",
      value: function unhighlightSelect() {
        var obj = this;
        var t = obj.node.querySelector("g.label").querySelectorAll("text");
        var rect = obj.node.querySelector("g.label").querySelector("rect"); // Text fill is now white.

        t[0].setAttribute("fill", "white");
        t[0].setAttribute("stroke", "white");
        t[1].setAttribute("fill", "black");
        t[1].setAttribute("stroke", "black");
        rect.setAttribute("fill", "none");
      } // unhighlightSelect

    }, {
      key: "highlightText",
      value: function highlightText(v) {
        var obj = this;
        var size = v ? "12px" : "10px";
        var texts = obj.node.querySelector("g.label").querySelectorAll("text");

        for (var i = 0; i < texts.length; i++) {
          texts[i].setAttribute("font-size", size);
        } // for


        obj.updateBackgroundRectSize();
      } // highlightText

    }, {
      key: "highlightMarker",
      value: function highlightMarker(v) {
        var obj = this;
        var size = v ? 10 : 8;
        var outline = obj.node.querySelector("g.marker").querySelector("path.outline");
        outline.setAttribute("stroke-width", size);
      } // highlightMarker
      // Drawing.

    }, {
      key: "markerSize",
      get: function get() {
        return Math.max(this.nBundlesIn - 1, this.nBundlesOut - 1, 0) * this.lineWidth;
      } // markersize

    }, {
      key: "yBasedOnIncomingHorizontalLine",
      value: function yBasedOnIncomingHorizontalLine(y, i) {
        // A horizontal line should be drawn at a `y'. Given that this line should come in at index i position the node to achieve both simultaneously.
        var obj = this;
        obj.y = y - i * obj.lineWidth - obj.markerPaddingIn;
      } // yBasedOnIncomingHorizontalLine

    }, {
      key: "calculateIncomingLineY",
      value: function calculateIncomingLineY(i) {
        // given index 'i', and the position of the node calulate the y the line should terminate at.
        var obj = this;
        return obj.y + obj.markerPaddingIn + i * obj.lineWidth;
      } // calculateIncomingLineY

    }, {
      key: "calculateOutgoingLineY",
      value: function calculateOutgoingLineY(i) {
        // given index 'i', and the position of the node calulate the y the line should terminate at.
        var obj = this;
        return obj.y + obj.markerPaddingOut + i * obj.lineWidth;
      } // calculateIncomingLineY

    }, {
      key: "markerPaddingIn",
      get: function get() {
        // If the marker is larger than the width of the lines coming in, then the lines should be centered in hte middle of the marker. Calculate the empty space from hte marker start to where the lines should begin.
        var obj = this;
        return (obj.markerSize - (obj.nBundlesIn - 1) * obj.lineWidth) / 2;
      } // markerPaddingIn

    }, {
      key: "markerPaddingOut",
      get: function get() {
        var obj = this;
        return (obj.markerSize - (obj.nBundlesOut - 1) * obj.lineWidth) / 2;
      } // markerPaddingOut
      // Label to be displayed next to it. Shouldn't be larger than the node_label_width.

    }, {
      key: "label",
      get: function get() {
        var obj = this;
        var name = obj.connections.group.tags.length > 0 ? obj.connections.group.tags[0].name : "Root"; // Temporarily changed to show n tasks for troubleshooting.
        // let n = obj.connections.descendants.length;

        var n = obj.connections.group.members.length;
        return "".concat(name, " ").concat(n > 0 ? "(".concat(n, ")") : "");
      } // label

    }]);

    return TreeNode;
  }(); // TreeNode

  /*
  If all the tasks are in the same array, and the author information is on the tags, then the partial trees won;t be a problem.

  Every tag represents a group possibility essentially. But the same tag can relate to different groups. The group members differentiate the groups. The different tag descriptions of the groups should all be presented on mouseover, maybe along with the author data.

  Won't be able to remove the initial dialogue in the small multiples visualisation, but I will be able to get rid of the expand button on the small multiples.
  */
  // FROM AN ARRAY OF TASKS WITH TAGS TO A TREE

  function array2tree(array, alltasks) {
    /*
    1.) Find groups.
    2.) Merge them.
    3.) Create parent-child relationships
    */
    // Find all created groups, and merge the ones with identical members.
    var groups = findAllTagBasedGroups(array);
    var root = makeRootGroup(alltasks);
    var mergedgroups = mergeIdenticalGroups(groups.concat(root)); // Convert the groups into a higher level object to avoid circular references when figuring out ancestry.

    var hierarchicalnodes = findParentalRelationships(mergedgroups);
    return hierarchicalnodes;
  } // array2tree
  // The tree node represents a single group, but also holds references to the parent and child nodes. The treenode is a higher level object to avoid circular referencing of objects.

  var treegroup = function treegroup(taskgroup) {
    _classCallCheck(this, treegroup);

    var obj = this;
    obj.group = taskgroup; // Groups CAN have more than 1 parent. While it's true that during a single dive through the tasks each group can only have one parent, it's possible that additional dives (by the same, or other users) will produce the same groups, but tracing different steps. The merging already combines all identical groups, so the merged groups can have multiple parents.
    // Select the parents as all those candidate  groups that have not been referenced by other candidate groups already.

    obj.ancestors = []; // All upstream groups

    obj.parents = []; // Only groups directly above this one.

    obj.descendants = []; // All downstream groups

    obj.children = []; // Only groups immediately below this one.
  } // constructor
  ; // treegroup


  var taskgroup = /*#__PURE__*/function () {
    function taskgroup() {
      _classCallCheck(this, taskgroup);

      this.tags = [];
      this.members = [];
    } // constructor


    _createClass(taskgroup, [{
      key: "addtask",
      value: function addtask(task) {
        var obj = this;

        if (!obj.members.includes(task)) {
          obj.members.push(task);
        } // if

      } // addtask

    }, {
      key: "addtag",
      value: function addtag(tag) {
        var obj = this;

        if (!obj.tags.some(function (existing) {
          return existing.author == tag.author && existing.name == tag.name;
        })) {
          obj.tags.push(tag);
        } // if

      } // addtags

    }]);

    return taskgroup;
  }(); // group
  // Making groups.


  function findAllTagBasedGroups(array) {
    // Create a group for each tag present in the array. We also need to differentiate teh groups by the author at this point. Otherwise parallel trees won't be possible.
    var dict = {};
    var groups = [];
    array.forEach(function (tag) {
      // If you tag something in the session, then that tag is reserved for a particular group. If you tag other elements with it, it'll become a part of that group. Actual tags need to be retained in order to be able to edit them, and therefore edit the groups.
      var groupid = "".concat(tag.name, "-").concat(tag.author);

      if (!dict[groupid]) {
        // Here just pass the tag in. The group will need to hold on to it.
        dict[groupid] = new taskgroup();
        dict[groupid].temporary = tag.author == undefined;
        groups.push(dict[groupid]);
      } // if
      // Add teh task to the specific group, but also to the root group.


      dict[groupid].addtask(tag.taskId);
      dict[groupid].addtag(tag);
    }); // forEach

    return groups;
  } // findAllTagBasedGroups


  function makeRootGroup(array) {
    // The root MUST always contain all of the data!! It will also allow navigation all the way to the start.
    var root = new taskgroup();
    root.root = true; // Root should contain all tasks.

    array.forEach(function (tag) {
      root.addtask(tag.taskId);
    }); // forEach

    return root;
  } // makeRootGroup


  function mergeIdenticalGroups(groups) {
    var mergedgroups = groups.reduce(function (acc, g) {
      // Find group with identical members.
      var identicalg = acc.find(function (g_) {
        return arrayEqual(g_.members, g.members);
      }); // filter

      if (identicalg) {
        // Add another author to existing group.
        g.tags.forEach(function (tag) {
          identicalg.addtag(tag);
        });
      } else {
        // Add this group to the unique ones.
        acc = acc.concat(g);
      } // if


      return acc;
    }, []); // reduce

    return mergedgroups;
  } // mergeIdenticalGroups


  function isSubset(a, b) {
    // Check whether array a is a subset of array b.
    // A must be strictly smaller than b.
    if (a.length < b.length) {
      // Check if b contains all of a.
      return arrayIncludesAll(b, a);
    } else {
      return false;
    } // if

  } // isSubset


  function findParentalRelationships(groups) {
    // First create an object one level above to avoid cross referenceing of objects.
    var nodes = groups.map(function (g) {
      return new treegroup(g);
    }); // maybe calculate all ancestors, all descendants, and then parents and children? Could be useful to have all hte information available.
    // FIND PARENT CANDIDATES FOR ALL GROUPS.

    nodes.forEach(function (node) {
      // Ancestor groups are all groups that include all of the members of the node group, but are larger than it.
      node.ancestors = groups.filter(function (g) {
        return isSubset(node.group.members, g.members);
      }); // filter
      // Descendant groups are all groups that contain a subset of the members of this group.

      node.descendants = groups.filter(function (g) {
        return isSubset(g.members, node.group.members);
      });
    }); // forEach
    // Groups CAN have more than 1 parent. While it's true that during a single dive through the tasks each group can only have one parent, it's possible that additional dives (by the same, or other users) will produce the same groups, but tracing different steps. The merging already combines all identical groups, so the merged groups can have multiple parents.
    // Select the parents as all those candidate  groups that have not been referenced by other candidate groups already.
    // Loop over all the candidates of a particular group, and remove all candidates that appear in that.

    nodes.forEach(function (node) {
      node.parents = node.ancestors; // All parents of a candidate parent are considered `grandparents'. All grandparents cannot be the parent. Loop over the candidates and remove all grandparents. Candidates also include teh candidates parents, so the whole lineage is checked.

      node.parents.forEach(function (candidate) {
        // The candidate now no longer has parents. Just check directly? If another group contains all the members of a group then it is its parent.
        node.parents = node.parents.filter(function (parent) {
          if (candidate == parent) {
            // A candidate can't eliminate himself.
            return true;
          } else {
            return !isSubset(candidate.members, parent.members);
          } // if

        }); // filter
      }); // forEach
      // The children are useful when navigating, as it allows the creation of groups that are immediately below the current node.

      node.children = node.descendants;
      node.children.forEach(function (candidate) {
        node.children = node.children.filter(function (child) {
          if (candidate == child) {
            return true;
          } else {
            // a is subset of b.
            // I'm filtering out the children, and any children that are a subset of the candidate can no longer be candidates themselves.
            return !isSubset(child.members, candidate.members);
          } // if

        }); // filter
      }); // forEach
    }); // forEach

    return nodes;
  } // findParentalRelationships


  function calculateLevelNumbers(nodes) {
    // First clear all the levels and set any root ones.
    nodes.forEach(function (node) {
      node.level = undefined;

      if (node.connections.parents.length == 0) {
        node.level = 0;
      } // if

    }); // Now move through the nodes and check if all parents already had a level assigned. If so the level of the node is max(parents.level) + 1. This must be done until all the nodes have an assigned level.

    for (var i = 0; i < nodes.length; i++) {
      var unassignednodes = nodes.filter(function (node) {
        return node.level == undefined;
      });
      unassignednodes.forEach(function (node) {
        // All parents must have an assigned level, otherwise skip. Check if any don't have level.
        var parents = node.connections.parents.reduce(function (acc, parent) {
          return acc.concat(nodes.filter(function (node) {
            return node.connections.group == parent;
          }));
        }, []); // reduce

        if (parents.some(function (parent) {
          return parent.level == undefined;
        })) ; else {
          node.level = Math.max.apply(Math, _toConsumableArray(parents.map(function (parent) {
            return parent.level;
          }))) + 1;
        } // if

      }); // forEach

      if (unassignednodes.length == 0) {
        break;
      } // if

    } // for

  } // calculateLevelNumbers

  var TreeHierarchy = /*#__PURE__*/function () {
    function TreeHierarchy() {
      _classCallCheck(this, TreeHierarchy);

      var obj = this; // How should the temporary groups be differentiated from the actual ones? Inside the groups are differentiated by "<tag.name>-<tag.author>". So maybe check if the author is undefined, and if so mark it as a temporary group?

      obj.alltasks = [];
      obj.temporary = [];
      obj.annotations = [];
      obj.collapsednodes = [];
      obj.update();
    } // constructor


    _createClass(TreeHierarchy, [{
      key: "update",
      value: function update() {
        // Recalculate makes new treenodes. Maybe instead of having hidden nodes just have hidden tasks? And any group that consists only of the hidden tasks is hidden also? That's how the hierarchy creation works anyway.
        // Nah, just push the togglig to the node itself! However, anytime that the data will be recalculated the hidden aspect will disappear....
        var obj = this; // obj.temporary are actual 'Group' objects which are converted into temporary annotations on-the-go.

        var i = -1;
        var temporaryAnnotations = obj.temporary.reduce(function (acc, g, j) {
          // Why does the id need to be unique?
          // The dummy annotation needs to have a unique id, name, author, and task ids.
          return acc.concat(g.members.map(function (item) {
            i += 1;
            return {
              id: "temp".concat(i),
              name: "Unsaved ".concat(j),
              author: undefined,
              taskId: item.task.taskId
            };
          })); // concat
        }, []); // reduce

        obj.nodes = array2tree(obj.annotations.concat(temporaryAnnotations), obj.alltasks).map(function (group) {
          return new TreeNode(group);
        }); // map
      } // update

    }, {
      key: "visiblenodes",
      get: function get() {
        var obj = this;
        var collapsednodes = obj.nodes.filter(function (node) {
          return node.hidden;
        }); // Based on the collapsed nodes determine which ones are still visible. I can ignore any incorrect nodes here. But I would rather just get rid of them.

        var hiddennodes = obj.nodes.filter(function (node) {
          return collapsednodes.some(function (collapsed) {
            return collapsed.connections.descendants.includes(node.connections.group);
          }); // some
        }); // filter
        // Filter out any disabled nodes. Maybe this can be made more sophisticated so that the folds further down the line are preserved?

        var nodes = obj.nodes.filter(function (node) {
          return !hiddennodes.includes(node);
        }); // The level numbers should be assigned to all active nodes.

        calculateLevelNumbers(nodes);
        return nodes;
      } // get nodes

    }]);

    return TreeHierarchy;
  }(); // TreeHierarchy

  /* TODO
  - Connect to a scatter plot for interactive tag addition.
  - Handle unassigned tasks.
  */

  /* ADVANCED
  - Single parent bundles should allow for straight links too.

  - How to display very large trees?
  	Make the tree zoomable?

  - How should the group descriptions be presented? 
  	Number of tasks, number of children, text description, AUTHOR!! All the data is available. Maybe on text hover all the information should be displayed?? Maybe in a tooltip?
  - Which label to select when making nodes?
  	The current author should be allowed to control their branch. This would require some differentiation between users. Certainly can't be done now. For now just select the first one?
  - How to merge the groups interactively? I.e. a git pull.
  */

  /* DONE
  - Collapsible nodes - collapse, with the folding history saved.
  - Enforce partial branches to be inserted - tree created on bundle level.
  - Make text unselectable - add into app css
  - Fix node mouseover css - css affects specific child of mover g.
  */

  var template$7 = "\n<g transform=\"translate(20, 20)\">\n  <g class=\"legend\"></g>\n  <g class=\"treeelements\" transform=\"translate(0, 20)\">\n\t<g class=\"bundles\"></g>\n\t<g class=\"nodes\"></g>\n  </g>\n</g>\n";

  var TreeKnowledge = /*#__PURE__*/function () {
    function TreeKnowledge() {
      _classCallCheck(this, TreeKnowledge);

      var obj = this; // Hierarchy

      obj.hierarchy = new TreeHierarchy(); // Drawing

      obj.node = svg2element(template$7);
      obj.gnodes = obj.node.querySelector("g.nodes");
      obj.gbundles = obj.node.querySelector("g.bundles");
      obj.color = new scaleCategorical(); // The tree is redrawn on every interaction. To allow the user to ee where on the tree they currently are just highlight the group that contains all the relevant items.

      obj.currenttasks = [];
    } // constructor


    _createClass(TreeKnowledge, [{
      key: "purge",
      value: function purge() {
        // Remove all the server-based annotations.
        this.hierarchy.annotations = [];
      } // purge

    }, {
      key: "addtagannotation",
      value: function addtagannotation(tag) {
        this.hierarchy.annotations.push(tag);
      } // addtagannotation

    }, {
      key: "temporary",
      get: // set temporary
      function get() {
        return this.hierarchy.temporary;
      } // get temporary
      ,
      set: function set(d) {
        this.hierarchy.temporary = d;
      }
    }, {
      key: "clear",
      value: function clear() {
        // When clearing by looping through .children and .remove() it only removed the nodes in the last step. When redrawing it added all of them back somehow...
        var obj = this;
        obj.gnodes.innerHTML = "";
        obj.gbundles.innerHTML = "";
      } // clear

    }, {
      key: "interact",
      value: function interact() {
        var obj = this;
        obj.clear();
        obj.map = dimensioning(obj.hierarchy.visiblenodes);
        obj.updatenodes();
        obj.updatelines();
        obj.updatelegend();
      } // interact

    }, {
      key: "update",
      value: function update() {
        var obj = this;
        obj.hierarchy.update();
        obj.interact();
      } // update
      // The functionality is added in here. Maybe refactor to remove the nestedness??

    }, {
      key: "updatenodes",
      value: function updatenodes() {
        var obj = this;
        obj.map.nodes.sort(function (a, b) {
          return a.x - b.x;
        }).forEach(function (nodeobj) {
          // Check if the group should be highlighted.
          var iscurrent = !nodeobj.connections.group.members.some(function (taskId) {
            return !obj.currenttasks.includes(taskId);
          });
          obj.gnodes.appendChild(nodeobj.node);
          nodeobj.update();

          if (iscurrent) {
            nodeobj.highlightselect();
          } // if


          var tooltipTimer; // Add teh styling changes on mouseover. Clicking the label moves view to the group.

          var label = nodeobj.node.querySelector("g.label");

          label.onclick = function () {
            obj.moveto(nodeobj.connections);
            clearTimeout(tooltipTimer);
            obj.hidetooltip(nodeobj);
          }; // onclick


          label.addEventListener("mouseenter", function () {
            obj.crossreferencein(nodeobj.connections.group.members);
            tooltipTimer = setTimeout(function () {
              obj.showtooltip(nodeobj);
            }, 10);
          }); // addEventListener

          label.addEventListener("mouseout", function () {
            obj.crossreferenceout();
            clearTimeout(tooltipTimer);
            obj.hidetooltip(nodeobj);
          }); // addEventListener
          // Clicking on hte node just collapses branches.

          nodeobj.node.querySelector("g.marker").onclick = function () {
            nodeobj.hidden = !nodeobj.hidden;
            obj.interact();
          }; // onclick

        }); // forEach
      } // updatenodes

    }, {
      key: "updatelines",
      value: function updatelines() {
        var obj = this; // The renderer controls the color of the lines!!

        obj.map.bundles.forEach(function (bundleobj) {
          obj.gbundles.appendChild(bundleobj.node);
          bundleobj.update(obj.color.dom2range(bundleobj.author));
        }); // forEach
      } // updatelines

    }, {
      key: "updatelegend",
      value: function updatelegend() {
        var obj = this; // Get the tentative width of hte legend.

        var entrywidth = 90;
        var entryheight = 15; // A minus is used to allow i=0 to be used later on - easier to calculate start x.

        var legendwidth = obj.gnodes.getBoundingClientRect().width - entrywidth / 2; // This should only appear if there are any unsaved items.

        var unsaved = obj.hierarchy.temporary.length > 0 ? "<g transform=translate(0,0)>\n\t\t\t<path d=\"M0,-4 L20,-4\" stroke=\"black\" stroke-dasharray=\"5,2\" stroke-width=\"5px\"></path>\n\t\t\t<text x=\"25\" y=\"0\" font-weight=\"bold\" font-size=\"12px\">Unsaved</text>\n\t\t</g>" : "";
        var i = obj.hierarchy.temporary.length > 0 ? 0 : -1;
        var j = 0;
        var entries = obj.color.domain.map(function (author) {
          j = (i + 1) * entrywidth > legendwidth ? j + 1 : j;
          i = (i + 1) * entrywidth > legendwidth ? 0 : i + 1;
          return "<g transform=translate(".concat(i * entrywidth, ",").concat(j * entryheight, ")>\n\t\t\t<path d=\"M0,-4 L20,-4\" stroke=\"").concat(obj.color.dom2range(author), "\" stroke-width=\"5px\"></path>\n\t\t\t<text x=\"25\" y=\"0\" font-weight=\"bold\" font-size=\"12px\">").concat(author, "</text>\n\t\t\t</g>");
        }); // Try to fit the legend entries in one row. Limit username to 8 characters?

        var legend = obj.node.querySelector("g.legend");

        while (legend.lastChild) {
          legend.removeChild(legend.lastChild);
        }

        legend.appendChild(svg2element("<g>".concat([unsaved].concat(entries), "</g>")));
        obj.node.querySelector("g.treeelements").setAttribute("transform", "translate(0,".concat((j + 2) * entryheight, ")"));
      } // updatelegend

    }, {
      key: "showtooltip",
      value: function showtooltip(nodeobj) {
        var g = nodeobj.node.querySelector("g.tooltip");
        g.innerHTML = "";
        var aliases = nodeobj.connections.group.tags;

        if (aliases.length > 1) {
          // Ok - there has to be a square, and it should be positioned near the text.
          var textnodes = aliases.map(function (alias, i) {
            return svg2element("<text x=\"10\" y=\"".concat((i + 1) * 15, "\" font-weight=\"bold\" font-size=\"12px\">").concat(alias.author, ": ").concat(alias.name, "</text>"));
          });
          var tooltip = svg2element("<g>\n\t\t\t<rect x=\"0\" y=\"0\" width=\"100\" height=\"".concat(textnodes.length * 15 + 10, "\" fill=\"white\" stroke-width=\"2\" stroke=\"black\" rx=\"5px\"></rect></g>"));
          g.appendChild(tooltip);
          textnodes.forEach(function (n) {
            return tooltip.appendChild(n);
          });
          var w = textnodes.reduce(function (acc, n) {
            return Math.max(acc, n.getBBox().width);
          }, 0) + 20; // reduce

          tooltip.querySelector("rect").setAttribute("width", w);
          tooltip.setAttribute("transform", "translate(".concat(nodeobj.x - w < 0 ? 0 : nodeobj.x - w, ",").concat(nodeobj.y - 10, ")"));
        } // if

      } // showtooltip

    }, {
      key: "hidetooltip",
      value: function hidetooltip(nodeobj) {
        var g = nodeobj.node.querySelector("g.tooltip");
        g.innerHTML = "";
      } // hidetooltip

    }, {
      key: "moveto",
      value: function moveto(connections) {
        // I want to move to the group which contains only tasks given by "nodeobj.connections.group.members", but I also want to show all the groups within that grop.
        console.log("Move to", connections.group.members);
      } // moveto

    }, {
      key: "crossreferencein",
      value: function crossreferencein(taskids) {// Dummy method that takes in taskids and allows for them to be highlighted on a different plot.
      } // crossreferencein

    }, {
      key: "crossreferenceout",
      value: function crossreferenceout(taskids) {// Dummy method to signal end of cross reference
      } // crossreferenceout

    }]);

    return TreeKnowledge;
  }(); // TreeKnowledge

  var template$6 = "<circle r=\"5\" fill=\"cornflowerblue\"></circle>"; // template

  var MiniMapIcon = /*#__PURE__*/function () {
    function MiniMapIcon(item) {
      _classCallCheck(this, MiniMapIcon);

      var obj = this;
      obj.item = item;
      obj.node = svg2element(template$6);
    } // constructor


    _createClass(MiniMapIcon, [{
      key: "update",
      value: function update(xscale, yscale, highlight) {
        // The scales must be given from the parent, and the icon uses them to position itself.
        // The scales should incorporate both the panning and zooming adjustements needed.
        var obj = this; // Update the position of the circle with the center point of the DOM card.

        var itemClientRect = obj.item.node.getBoundingClientRect();
        var x = itemClientRect.left + itemClientRect.width / 2;
        var y = itemClientRect.top + itemClientRect.height / 2;
        obj.node.setAttribute("cx", xscale.dom2range(x));
        obj.node.setAttribute("cy", yscale.dom2range(y));
        obj.node.setAttribute("fill", highlight ? "orange" : "cornflowerblue");
        obj.node.setAttribute("display", obj.item.node.style.display); // Support for groups.

        if (obj.item.members) {
          // The area of the group of n items should be n times larger?
          obj.node.setAttribute("r", Math.sqrt(obj.item.members.length) * 5);
        }
      } // update

    }, {
      key: "highlight",
      value: function highlight() {
        var obj = this;
        obj.node.setAttribute("fill", "orange");
      } // highlight

    }, {
      key: "unhighlight",
      value: function unhighlight() {
        var obj = this;
        obj.node.setAttribute("fill", "cornflowerblue");
      } // unhighlight

    }]);

    return MiniMapIcon;
  }(); // MiniMapIcon

  var template$5 = "<rect class=\"current\" x=\"50\" y=\"10\" width=\"150\" height=\"50\" fill=\"black\" opacity=\"0.2\"></rect>";

  var MiniMapViewRect = /*#__PURE__*/function () {
    function MiniMapViewRect() {
      _classCallCheck(this, MiniMapViewRect);

      var obj = this;
      obj.node = svg2element(template$5); // Make it draggable.

      var active, clickedItemOffset;

      obj.node.onmousedown = function (e) {
        active = true; // Correcting for clicked position within item.

        var itemClientRect = obj.node.getBoundingClientRect();
        clickedItemOffset = {
          x: itemClientRect.x - e.clientX,
          y: itemClientRect.y - e.clientY
        }; // clickedItemOffset
      }; // onmousedown


      obj.node.onmousemove = function (e) {
        if (active) {
          // Convert the mouse position into the position within the parent SVG. ASSUME that the parent element is the SVG.
          var svgClientRect = obj.node.parentElement.getBoundingClientRect(); // Check if the mouse left the svg.

          if (isWithinBoundingClientRect({
            x: e.clientX,
            y: e.clientY
          }, svgClientRect)) {
            var x = e.clientX - svgClientRect.x + clickedItemOffset.x;
            var y = e.clientY - svgClientRect.y + clickedItemOffset.y;
            obj.node.setAttribute("x", x);
            obj.node.setAttribute("y", y); // Now all the DOM items should be moved.

            obj.reposition();
          } else {
            active = false;
          } // if

        } // if

      }; // mousemove


      obj.node.onmouseup = function () {
        active = false;
      }; // onmouseup

    } // constructor


    _createClass(MiniMapViewRect, [{
      key: "init",
      value: function init(xscale, yscale) {
        var obj = this; // Reposition the viewrect back to the origin.

        obj.node.setAttribute("x", xscale.dom2range(0));
        obj.node.setAttribute("y", yscale.dom2range(0));
      } // init
      // The data to position the icons comes from boundingClientRect, which is the positions on hte screen. In that case

    }, {
      key: "update",
      value: function update(xscale, yscale) {
        var obj = this; // The viewrect represents the window.

        var width = xscale.dom2range(window.innerWidth) - xscale.dom2range(0);
        var height = yscale.dom2range(window.innerHeight) - yscale.dom2range(0);
        obj.node.setAttribute("width", width);
        obj.node.setAttribute("height", height);
      } // update
      // Dummy function that gets changed by the minimap;

    }, {
      key: "reposition",
      value: function reposition() {} // reposition

    }]);

    return MiniMapViewRect;
  }(); // MiniMapViewRect

  var css = {
    menu: "\n\t  background-color: white;\n\t  border: 2px solid black;\n\t  border-radius: 5px;\n\t  display: none; \n\t  position: absolute;\n\t  max-height: 120px;\n\t  overflow-y: auto;\n\t",
    ul: "\n\t  list-style-type: none;\n\t  font-size: 10px;\n\t  font-weight: bold;\n\t  padding-left: 4px;\n\t  padding-right: 4px;\n\t"
  }; // css

  var template$4 = "\n<div class=\"variable-select-menu\" style=\"".concat(css.menu, "\">\n  <ul style=\"").concat(css.ul, "\">\n  </ul>\n</div>\n"); // Differentite between an x and a y one.

  var CorrelationsMenu = /*#__PURE__*/function () {
    function CorrelationsMenu(axis) {
      _classCallCheck(this, CorrelationsMenu);

      var obj = this;
      obj.node = html2element(template$4); // axis = 0/1 for x/y

      obj.axis = axis;
    } // constructor
    // Just update with variables here? No, but update with CORRELATIONS!!!!


    _createClass(CorrelationsMenu, [{
      key: "update",
      value: function update(correlations) {
        var obj = this; // First remove all li.

        var ul = obj.node.querySelector("ul");

        while (ul.lastChild) {
          ul.removeChild(ul.lastChild);
        } // while
        // Now add in the needed li objects.


        correlations.forEach(function (c) {
          var sign = c[obj.axis] > 0 ? "+" : "-";
          var li = html2element("<li class=\"hover-highlight\">".concat(sign, " ").concat(c.name, "</li>"));
          ul.appendChild(li); // Color it.

          li.style.backgroundColor = green(Math.abs(c[obj.axis])); // On click the menu should updat ethe current selection, close itself, and launch the appropriate effect.

          li.addEventListener("click", function (event) {
            // If event propagation is stopped here then additional functionality can't be attached to the menu.
            obj.current = c.name;
            obj.hide();
            obj.onvariableselect(c);
          }); // addEventListener
        });
      } // update

    }, {
      key: "toggle",
      value: function toggle(correlations, p) {
        var obj = this;

        if (obj.node.style.display == "none") {
          obj.update(correlations);

          if (obj.axis == 0) {
            obj.node.style.left = p[0] + "px";
            obj.node.style.bottom = p[1] + "px";
          } else {
            obj.position(p);
          } // if


          obj.show();
        } else {
          obj.hide();
        } // if

      } // toggle

    }, {
      key: "position",
      value: function position(p) {
        var obj = this;
        obj.node.style.left = p[0] + "px";
        obj.node.style.top = p[1] + "px";
      } // position

    }, {
      key: "show",
      value: function show() {
        var obj = this;
        obj.node.style.display = "inline-block";
      } // show

    }, {
      key: "hide",
      value: function hide() {
        var obj = this;
        obj.node.style.display = "none";
      } // hide
      // dummy method.

    }, {
      key: "onvariableselect",
      value: function onvariableselect(variable) {}
    }]);

    return CorrelationsMenu;
  }(); // CorrelationsMenu

  function green(t) {
    // t should be between 0 and 1.
    t = t > 1 ? 1 : t;
    t = t < 0 ? 0 : t;
    var r = Math.round(247 / 2 * (Math.cos(t * Math.PI) + 1));
    var g = Math.round(252 * Math.cos(t * 2 / 5 * Math.PI));
    var b = Math.round(245 - (245 - 28) * t);
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
  } // green

  /*
  Handle the variable->arrangement and arrangement->variable alleyways.




  Approaches: menu vs figure based visualisation and interaction.

  MENU:
  + : qualitative, intuitive interaction, no additional mode, no clutter
  - : no cross correlations against both axes


  FIGURE:
  + : correlations visualised
  - : non-intuitive interaction, additional mode, clutter, quantitative correlations


  A combination of both? Where the figure is brought up, but the menu is used fo rthe interaction? Maybe the Correlations menu should just have a figure attached? So that it's a small widget? But that is a figure mode then....

  Just stick to the menu for now, and figure something out later...

  Maybe click on the axes to show the menu, and that shows the figure? And then when a selection is made the figure disappears??



  If the Spatial correlations are on the sketchpad svg in the background then they are not clickable. So maybe it mag=kes sene to place them on separate svg elements, and put them into the HUD html. Then they can be positioned via css properties as opposed to explicitly.

  */

  var template$3 = "\n<g transform=\"translate(10,390)\">\n  <path class=\"horizontal\" stroke=\"grey\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"></path>\n  <text class=\"correlation-label horizontal\"></text>\n  \n  <path class=\"vertical\" stroke=\"grey\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"></path>\n  <text class=\"correlation-label vertical\" transform=\"rotate(-90)\"></text>\n</g>\n"; // The paths only depend on how close together the arrows should be.

  var arrowheadwidth = 15; // arrowheadwidth

  var arrowheadlength = 20; // arrowheadlength

  var length = 30; // whole arrow length

  var relativeHorizontalArrow = "\n  l".concat(length, ",0 \n  m-").concat(arrowheadlength, ",-").concat(arrowheadwidth / 2, " \n  c 0,0 ").concat(arrowheadlength / 6, ",").concat(arrowheadwidth / 2, " ").concat(arrowheadlength, ",").concat(arrowheadwidth / 2, " \n  m-").concat(arrowheadlength, ",").concat(arrowheadwidth / 2, "\n  c 0,0 ").concat(arrowheadlength / 6, ",-").concat(arrowheadwidth / 2, " ").concat(arrowheadlength, ",-").concat(arrowheadwidth / 2);
  var relativeVerticalArrow = "\n  l0,-".concat(length, " \n  m-").concat(arrowheadwidth / 2, ",").concat(arrowheadlength, "\n  c 0,0 ").concat(arrowheadwidth / 2, ",-").concat(arrowheadlength / 6, " ").concat(arrowheadwidth / 2, ",-").concat(arrowheadlength, "\n  m").concat(arrowheadwidth / 2, ",").concat(arrowheadlength, "\n  c 0,0 -").concat(arrowheadwidth / 2, ",-").concat(arrowheadlength / 6, " -").concat(arrowheadwidth / 2, ",-").concat(arrowheadlength);

  var SpatialCorrelations = /*#__PURE__*/function () {
    // offset from axes origin point
    function SpatialCorrelations() {
      _classCallCheck(this, SpatialCorrelations);

      this.xoffset = 300;
      this.yoffset = 300;
      var obj = this;
      obj.node = svg2element(template$3);
      obj.th = obj.node.querySelector("text.horizontal");
      obj.tv = obj.node.querySelector("text.vertical");

      obj.th.onclick = function () {
        console.log("Hello Horizontal!");
      };

      obj.tv.onclick = function () {
        console.log("Hello Vertical!");
      }; // The variables need to include undefined/unknown, and that is the default selection everytime when the user doesn't specifically click on the menu. Every interaction should revert the menu selection back to unknown.


      obj.yvariable = "Unknown";
      obj.xvariable = "Unknown";
      obj.xmenu = new CorrelationsMenu(0);
      obj.ymenu = new CorrelationsMenu(1);
    } // constructor


    _createClass(SpatialCorrelations, [{
      key: "update",
      value: function update() {
        var obj = this;
        var textmargin = 5; // offset between arrow and text

        obj.node.querySelector("path.horizontal").setAttribute("d", "M".concat(obj.xoffset - length, ",-").concat(arrowheadwidth / 2, " ").concat(relativeHorizontalArrow));
        obj.th.innerHTML = clipstring(obj.xvariable);
        obj.th.setAttribute("x", obj.xoffset - length - obj.th.getBoundingClientRect().width - textmargin);
        obj.th.setAttribute("y", -arrowheadwidth / 2 + textmargin);
        obj.node.querySelector("path.vertical").setAttribute("d", "M".concat(arrowheadwidth / 2, ",-").concat(obj.yoffset - length, " ").concat(relativeVerticalArrow));
        obj.tv.innerHTML = clipstring(obj.yvariable);
        obj.tv.setAttribute("x", obj.yoffset - length - obj.tv.getBoundingClientRect().height - textmargin);
        obj.tv.setAttribute("y", arrowheadwidth / 2 + 3);
      } // update

    }, {
      key: "position",
      value: function position(p) {
        var obj = this;
        obj.node.setAttribute("transform", "translate(".concat(p[0], ",").concat(p[1], ")"));
      } // position

    }, {
      key: "calculate",
      value: function calculate(d) {
        var obj = this; // When collecting the scores we're banking on the fact that the originally created items are never destroyed. Only the groups get destroyed when no longer needed. Items are always accessed in the same order.

        var os = obj.ordinalscores(d);
        var cs = obj.categoricalscores(d);
        return os.concat(cs);
      } // calculate

    }, {
      key: "ordinalscores",
      value: function ordinalscores(d) {

        var scores = d.ordinals.map(function (ordinal) {
          var sp = [spearman(d.spatial[0], ordinal), spearman(d.spatial[1], ordinal)];
          sp.name = ordinal.name;
          return sp;
        }); // forEach

        return scores;
      } // ordinalscores

    }, {
      key: "categoricalscores",
      value: function categoricalscores(d) {
        var scores = d.categoricals.map(function (categorical) {
          // The categorical values need to first be mapped to ordinal values. The mapping in the x and y directions may be different.
          var mapping = categoricalmapping(d.spatial[0], d.spatial[1], categorical);
          var sp = [spearman(d.spatial[0], categorical.map(function (c) {
            return mapping[c].x;
          })), spearman(d.spatial[1], categorical.map(function (c) {
            return mapping[c].y;
          }))];
          sp.name = categorical.name; // Provide the mapping also if it needs to be used outside.

          sp.mapping = mapping;
          return sp;
        }); // forEach

        return scores;
      } // get categoricalscores

    }]);

    return SpatialCorrelations;
  }(); // SpatialCorrelations

  function clipstring(s) {
    var n_max = 15;
    return s.substr(0, n_max) + (s.length > n_max ? "..." : "");
  } // clipstring


  function categoricalmapping(x, y, v) {
    // This is the mapping of a single metadata variable to numerical values. All that is needed are the x,y, and metadata values.
    var uniquevals = unique(v); // unique
    // Just assign all unique value their median point no? Or just return hte appropriate dictionary?

    return uniquevals.reduce(function (acc, uniqueval) {
      var xpos = x.filter(function (_x, i) {
        return v[i] == uniqueval;
      });
      var ypos = y.filter(function (_y, i) {
        return v[i] == uniqueval;
      });
      acc[uniqueval] = {
        x: median(xpos),
        y: median(ypos)
      };
      return acc;
    }, {}); // reduce
  } // categoricalmapping
  // ACTUAL STATISTICS FUNCTIONS


  function spearman(x, y) {
    // The inputs are two variable arrays, which are expected to also have a 'mu' and 'sigma' property.
    // Get Spearman's rank correlation scores for the order in the x direction.
    // (https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient)
    // The coefficient is
    // covariance (x_rank, y_rank ) / ( sigma(rank_x) sigma(rank_y) )
    // First precalculate some statistics:
    x = calcStatistics(x);
    y = calcStatistics(y);
    return covariance(x, y) / (x.sigma * y.sigma);
  } // spearman


  function calcStatistics(A) {
    // Give array A the mean, standard deviation, and name properties.
    A.mu = mean(A);
    A.sigma = Math.pow(variance(A), 0.5);
    A.sigma = A.sigma == 0 ? Infinity : A.sigma;
    return A;
  } // variable


  function covariance(x, y) {
    // 'd' is an array of observations. Calculate the covariance between x and the metadata variable.
    var N = x.length;
    var s = 0;

    for (var i = 0; i < N; i++) {
      s += (x[i] - x.mu) * (y[i] - y.mu);
    }

    return 1 / (N - 1) * s;
  } // covariance


  function variance(x) {
    // variance is a special case of covariance.
    return covariance(x, x);
  } // variance


  function median(numbers) {
    // https://stackoverflow.com/questions/45309447/calculating-median-javascript
    var sorted = numbers.slice().sort(function (a, b) {
      return a - b;
    });
    var middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  } // median


  function mean(d) {
    return sum(d) / d.length;
  } // mean


  function sum(objarray, accessor) {
    var _accessor = accessor ? accessor : function (d) {
      return d;
    };

    return objarray.reduce(function (acc, obj) {
      return acc += _accessor(obj);
    }, 0);
  } // sum
   // min

  /*
  The initial arrangement is not the problem of this module. This module just visualises the current arrangement, and allows global navigation.

  The panning/zooming should be made available on hte background also.
  */

  var template$2 = "<svg style=\"border: 2px solid gainsboro; display: block;\">\n  <g class=\"icons\"></g>\n</svg>"; // template
  // All the data should be on the minimap at all times, including any rearranged items. That means that the scale domain may have to be redone every time there is a rearrangement event.

  var MiniMap = /*#__PURE__*/function () {
    function MiniMap() {
      _classCallCheck(this, MiniMap);

      this.width = 300;
      this.height = 200;
      this._icons = [];
      var obj = this;
      obj.node = svg2element(template$2);
      obj.node.setAttribute("width", obj.width);
      obj.node.setAttribute("height", obj.height); // The rectangle should have the proportions of the screen.
      // Abstract the viewrect out??

      obj.viewrect = new MiniMapViewRect();
      obj.node.appendChild(obj.viewrect.node); // Scrolling is added to the the rect externally!
      // Create the scales to map the necessary range to the size of the svg.

      obj.xscale = new scaleLinear();
      obj.xscale.range = [0, obj.width];
      obj.yscale = new scaleLinear();
      obj.yscale.range = [0, obj.height]; // Maybe it's just simpler to keep re-rendering the MiniMap? So the update doesn't have to be called everywhere?
      // Maybe not, because a lot of the time it's just the re-centering of hte data that is needed?
      // Let the minimap host the correlations.
      // CORRELATIONS
      // The metadata is passed in with the items themselves - or should it be created here instead? Maybe that's a good approach, then inside the module need not think about ordinals and categoricals.

      /* Requirements:
         - when the items are moving the axes variables should be `Unknown'
         - correlations only updated when the hud elements are clicked
         - Maybe it can all be merged to the minimap? Reduces some clutter!
      */

      obj.correlations = new SpatialCorrelations();
      obj.node.appendChild(obj.correlations.node);
      obj.correlations.position([5, obj.height - 5]);
      obj.correlations.xoffset = obj.width - 15;
      obj.correlations.yoffset = obj.height - 15;
      obj.correlations.update(); // The correlations text is incorrect at first, because it relies on boundingClientRect to get the width of the text...
    } // constructor


    _createClass(MiniMap, [{
      key: "highlight",
      value: function highlight(taskids) {
        // Go through the icons and light up the ones with th eappropriate item.
        var obj = this;
        obj.icons.forEach(function (icon) {
          // Some icons represent groups, which have multiple taskIds.
          if (icon.item.members) {
            // This is a group - highlight it if any/all elements are part of it?
            var memberids = icon.item.members.map(function (memberitem) {
              return memberitem.task.taskId;
            });

            if (memberids.some(function (id) {
              return taskids.includes(id);
            })) {
              icon.highlight();
            } // if

          } else {
            if (taskids.includes(icon.item.task.taskId)) {
              icon.highlight();
            } // if

          } // if

        }); // forEach
      } // highlight

    }, {
      key: "unhighlight",
      value: function unhighlight() {
        // Turn them all off.
        var obj = this;
        obj.icons.forEach(function (icon) {
          icon.unhighlight();
        }); // forEach
      } // unhighlight
      // icons getter/setter - to dynamically filter out any group sthat are removed.

    }, {
      key: "icons",
      get: // set icons
      function get() {
        return this._icons.filter(function (icon) {
          return icon.item.node.isConnected ? true : icon.node.remove();
        });
      } // get icons
      ,
      set: function set(ic) {
        this._icons = ic;
      }
    }, {
      key: "getoffset",
      value: function getoffset() {
        var obj = this;
        return [obj.xscale.range2dom(obj.viewrect.node.getAttribute("x")), obj.yscale.range2dom(obj.viewrect.node.getAttribute("y"))];
      } // getoffset
      // The groups dynamically added to the workspace must also appear on the minimap.

    }, {
      key: "add",
      value: function add(item) {
        var obj = this;
        var icon = new MiniMapIcon(item);
        obj.node.querySelector("g.icons").appendChild(icon.node);

        obj._icons.push(icon);
      } // add

    }, {
      key: "remove",
      value: function remove(item) {
        var obj = this; // Remove the icon, and the underlying obj.

        var i = obj.icons.map(function (icon) {
          return icon.item;
        }).indexOf(item);
        obj.icons[i].node.remove();
        obj.icons.splice(i, 1);
      } // remove
      // Update the circle representations.

    }, {
      key: "update",
      value: function update(items) {
        var obj = this; // If items have been given, then change the circles.

        if (items) {
          items.forEach(function (item) {
            obj.add(item);
          }); // forEach
        } // items
        // New items arrived, the square is resized, and the icons should be positioned. Make the items all fit within the square? Or just map the screen directly onto the minimap? Or just scale the square to what can be seen on the main screen?
        // Redraw minimap


        obj.centerdata();
        obj.viewrect.init(obj.xscale, obj.yscale);
        obj.render();
      } // update

    }, {
      key: "centerdata",
      value: function centerdata() {
        var obj = this; // The minimap should show all the items at all times, thus the minimap domain needs to span all the positions of the items in both the x and y dimensions, while preserving AR=1. The data AR won't be the same as the minimap AR, and therefore the data domain is recalculated to fit into the minimap square.

        var domains = calculateInitialMinimapDomain(obj.icons.map(function (icon) {
          return icon.item;
        })); // The maximum domain AR must be selected to accomodate all the data. Then the domains can be centered on hte minimap.

        var xdiff = domains.x[1] - domains.x[0];
        var ydiff = domains.y[1] - domains.y[0];
        var u = 1.1 * Math.max(xdiff / obj.width, ydiff / obj.height); // Reset the scale domains to center the data.

        obj.xscale.domain = [domains.x[0] + xdiff / 2 - u * obj.width / 2, domains.x[0] + xdiff / 2 + u * obj.width / 2];
        obj.yscale.domain = [domains.y[0] + ydiff / 2 - u * obj.height / 2, domains.y[0] + ydiff / 2 + u * obj.height / 2];
      } // centerdata

    }, {
      key: "render",
      value: function render() {
        // Redraw the minimap. Called after the user rearranges the items.
        var obj = this; // Resize the viewrect to the right aspect ratio and size.

        obj.viewrect.update(obj.xscale, obj.yscale);
        obj.viewrect.node.getBoundingClientRect(); // Redo the icons if they are active.

        obj.icons.forEach(function (icon) {
          icon.update(obj.xscale, obj.yscale);
        }); // forEach
      } // render

    }]);

    return MiniMap;
  }(); // Minimap

  function calculateInitialMinimapDomain(items) {
    // The workspace and the minimap have no domain limitations, but the minimap should initially be scaled such that all the points are in view. When zooming the rectangle will then change size when scrolled.
    var bodyClientRect = document.body.getBoundingClientRect();
    return items.reduce(function (acc, item) {
      var itemClientRect = item.node.getBoundingClientRect(); // Calculate the positions of hte icons based on the center of the item.

      var minx = itemClientRect.left - bodyClientRect.left;
      var maxx = itemClientRect.left - bodyClientRect.left + itemClientRect.width;
      var miny = itemClientRect.top - bodyClientRect.top;
      var maxy = itemClientRect.top - bodyClientRect.top + itemClientRect.height;
      acc.x[0] = minx < acc.x[0] ? minx : acc.x[0];
      acc.x[1] = maxx > acc.x[1] ? maxx : acc.x[1];
      acc.y[0] = miny < acc.y[0] ? miny : acc.y[0];
      acc.y[1] = maxy > acc.y[1] ? maxy : acc.y[1];
      return acc;
    }, {
      x: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
      y: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
    }); // reduce
  } // calculateInitialMinimapDomain

  var template$1 = "\n<polygon class=\"lasso\" points=\"\" style=\"fill: cornflowerblue; stroke: dodgerblue; stroke-width: 2; opacity: 0.4;\"></polygon>\n"; // template

  var Lasso = /*#__PURE__*/function () {
    /* 
    	`lasso' implements a generic lasso that can be added to svg elements.
    
    The lasso logs the selected points and updates the graphic. If the underlying svg spans across the entire client viewport, then no readjustment of the coordinates is needed.
    */
    function Lasso(svg) {
      _classCallCheck(this, Lasso); // Make reactive??


      var obj = this;
      obj.svg = svg;
      obj.polygon = svg.appendChild(svg2element(template$1)); // An internal boundary is used for all the drawing, and an external boundary is presented to other interested modules. Only the exposed boundary is observable. The exposed boundary is used to determine the lasso selection.

      obj._boundary = [];
      obj.boundary = []; // Should the boundary be stored at all??

      obj.svg.addEventListener("mousedown", function (event) {
        obj.clearBoundary();
      }); // mousedown

      obj.svg.addEventListener("mousemove", function (event) {
        if (obj.active) {
          obj.addBoundaryPoint(event);
          obj.draw();
        } // if

      }); // mousedown

      obj.svg.addEventListener("mouseup", function (event) {
        obj.hide(); // The bounadry.replace was mobx functionality.

        obj.boundary = obj._boundary;
        obj.active = false;
        obj.svg.style.zIndex = ""; // Dummy function that allows responses.

        obj.onend();
      }); // mousedown
    } // constructor


    _createClass(Lasso, [{
      key: "clearBoundary",
      value: function clearBoundary() {
        var obj = this;
        obj._boundary = [];
      } // clearBoundary

    }, {
      key: "addBoundaryPoint",
      value: function addBoundaryPoint(event) {
        var obj = this; // The svgbox changes if the user scrolls around in the window.

        var svgbox = obj.svg.getBoundingClientRect();

        obj._boundary.push({
          x: event.clientX - svgbox.x,
          y: event.clientY - svgbox.y
        });
      } // addBoundaryPoint

    }, {
      key: "isPointInside",
      value: function isPointInside(point) {
        // Check wheteher the 'point' [pixel coordinates] is within the polygon defined by the points array 'boundary'.
        var obj = this; // Default answer is no.

        var isInside = false;
        var n = obj.boundary.length;

        if (n > 2) {
          for (var i = 1; i < n; i++) {
            // Check whether this edge is being passed when moving from the point to the right. If it passes an even number of edges it's outside, otherwise it's inside.
            var _p = passesEdge(obj.boundary[i - 1], obj.boundary[i], point);

            isInside = _p ? !isInside : isInside;
          } // for
          // Need to check the same number of edge segments as vertex points. The last edge should be the last and the first point.


          var p = passesEdge(obj.boundary[n - 1], obj.boundary[0], point);
          isInside = p ? !isInside : isInside;
        } // if


        return isInside;
      } // isPointInside

    }, {
      key: "draw",
      value: function draw() {
        var obj = this;
        obj.polygon.setAttribute("points", obj._boundary.map(function (p) {
          return "".concat(p.x, ",").concat(p.y);
        }).join(" "));
      } // draw

    }, {
      key: "hide",
      value: function hide() {
        // Remove the selection drawing.
        var obj = this;
        obj.polygon.setAttribute("points", "");
      } // remove
      // Dummy function.

    }, {
      key: "onend",
      value: function onend() {} // onend

    }]);

    return Lasso;
  }(); // lasso

  function passesEdge(p0, p1, point) {
    // One point needs to be above, while the other needs to be below -> the above conditions must be different.
    if (p0.y > point.y !== p1.y > point.y) {
      // One is above, and the other below. Now find if the x are positioned so that the ray passes through. Essentially interpolate the x at the y of the point, and see if it is larger.
      var x = (p1.x - p0.x) / (p1.y - p0.y) * (point.y - p0.y) + p0.x;
      return x > point.x;
    } else {
      return false;
    } // if

  } // checkIntersect

  var template = "<div class=\"hudright-menu\">\n        <div style=\"float: right;\">\n          <div>\n\t\t    <input class=\"value\" type=\"text\" placeholder=\"#tag-value\"></input>\n\t\t    <button class=\"btn-small v\">\uD83D\uDCDD</button>\n\t\t    <button class=\"btn-small x-pos\">\uD83D\uDCCC-x</button>\n\t\t    <button class=\"btn-small y-pos\">\uD83D\uDCCC-y</button>\n          </div>\n        \n          <div>\n            <input class=\"name\" type=\"text\" placeholder=\"#tag-name\"></input>\n\t\t    <button class=\"btn-small submit\">Submit</button>\n\t      </div>\n        </div>\n      </div>";
  /* 
  The batch form needs to only be able to submit when all on-screen items have the same tag-name in their forms.

  The tag-name must not be the same as any available tags given to the annotations previously.
  */

  var TagValueBatchForm = /*#__PURE__*/function () {
    function TagValueBatchForm() {
      _classCallCheck(this, TagValueBatchForm);

      this.items = [];
      var obj = this;
      obj.node = html2element(template); // name input needs to update the button anytime a char is added or removed. It should alert the user if the name is already assigned to any item.

      obj.nameInput = obj.node.querySelector("input.name");

      obj.nameInput.oninput = function () {
        // Name validty is the only condition for the submit to become active. This allows the batch mode to submit simple tags also.
        obj.toggleSubmitButton(obj.namevalid(obj.nameInput.value));
      }; // oninput
      // This one can capture anything.


      obj.valueInput = obj.node.querySelector("input.value"); // The submit button hould only work when all the items in view have a valid name and value. When will the submit button be updated? It'll have to be updated during the navigation etc. Maybe instead of updating it it can always be on, and it can alert the user with the appropriate message?

      obj.submitButton = obj.node.querySelector("button.submit");
      obj.toggleSubmitButton(false);

      obj.submitButton.onclick = function (e) {
        console.log("Check if anything can be submitted");
        obj.onscreenitems.forEach(function (item) {
          item.commenting.tagform.nameinput.value = obj.nameInput.value;
          item.commenting.tagform.submitButton.onmousedown(e);
        }); // forEach

        obj.clear();
      }; // onclick
      // The buttons need to paste the values to the appropriate


      obj.valueButton = obj.node.querySelector("button.v");

      obj.valueButton.onclick = function () {
        var value = obj.valueInput.value;
        obj.onscreenitems.forEach(function (item) {
          item.commenting.tagform.valueinput.value = value;
        }); // forEach
      }; // onclick


      obj.xPositionButton = obj.node.querySelector("button.x-pos");

      obj.xPositionButton.onclick = function () {
        obj.onscreenitems.forEach(function (item) {
          var itemrect = item.node.getBoundingClientRect();
          item.commenting.tagform.valueinput.value = itemrect.x / window.innerWidth;
        }); // forEach
      }; // onclick


      obj.yPositionButton = obj.node.querySelector("button.y-pos");

      obj.yPositionButton.onclick = function () {
        obj.onscreenitems.forEach(function (item) {
          var itemrect = item.node.getBoundingClientRect();
          item.commenting.tagform.valueinput.value = 1 - itemrect.y / window.innerHeight;
        }); // forEach
      }; // onclick

    } // constructor


    _createClass(TagValueBatchForm, [{
      key: "onscreenitems",
      get: function get() {
        var obj = this; // Automatically clear the tag forms of off-screen items.

        return obj.items.filter(function (item) {
          if (!item.isonscreen()) {
            item.commenting.tagform.clear();
          } // if


          return item.isonscreen();
        });
      } // onscreenitems

    }, {
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.nameInput.value = "";
        obj.valueInput.value = "";
        obj.toggleSubmitButton(false);
      } // clear

    }, {
      key: "toggleSubmitButton",
      value: function toggleSubmitButton(on) {
        // if on == true then turn the button on, otherwise turn it off.
        var obj = this;
        obj.submitButton.style.background = on ? "black" : "gainsboro";
        obj.submitButton.style.color = on ? "white" : "black";
        obj.submitButton.disabled = !on;
      } // toggleSubmitButton

    }, {
      key: "namevalid",
      value: function namevalid(name) {
        var obj = this;
        return !obj.onscreenitems.some(function (item) {
          return !item.commenting.tagoverview.namevalid(name);
        });
      } // namevalid

    }]);

    return TagValueBatchForm;
  }(); // TagValueBatchForm

  /*
  GROUPING: 
  This item should be support use as a single object, as well as a group. The introduction of a new group, and what happens to the constituent Items is handled outside, so the Item only needs to identify whther it should present itself as a group, or as an individual item. That depends on the number of tasks that come in.

  How will the data be managed for items in a group? If it follows the Item flow then it will try to load a rendering module, and push data to it, etc.

  Is it still better, in the end, to have a separate group class that takes Items? Ah, but then it will have to either keep making them visible, or pass in the DOM to draw into anyway.

  Have a library that holds all the files, and then distribute them out? The library is an added complication, and if it is the authority on the files it'll have to keep checking all the Items to see which ones still want to keep a copy. Furthermore, the library will have to be passed to the Items so that they can query it.

  Just creating a new Item will require that the sam efiles be reloaded.

  Maybe create a group item, but let it accept Items as the input?

  Yes, make a Group class. That will have a viewnode. Then when the usermouses over an element just go to that elements geometry and set it as the group geometry. Then the rendering can be done into the new viewport.




  Groups are always destroyed when something happens to them no? If they are entered they are destroyed, and they can only be exited through the tree? They can be disbanded otherwise.

  But if you can only navigate out using the tree, then I have to first implement it.
  But the temporary groups should be stored as well - just as the actual groups?


  Maybe just create all the group items when the data arrives from the server, and store them?? Or create temporary annotations?

  When should temporary groups be kept? When it's navigated out of? No, on all navigation tasks the group should be kept, but not otherwise!!


  ENTER/DISSOLVE
  Buttons should be added to allow the group to be entered or dissolved. maybe no button is needed to enter - a node should appear on the tree. So only dissolve.


  RELATIVE POSITIONS:
  It's advantageous to store the relative positions of the individual members. Instead of storing them explicitly the group can just store it's original position, and the individual members can just be hidden. When they are revealed again they can jut have their positions adjusted by the delta of the groups current position to the original position. The small multiples are therefore just unpiled in the new location.



  SAVING:
  There should be a local and global set of groups. That means that the user must explicitly save his group for it to be submitted to the server. This can be achieved with a tag input.


  TODO - GROUP INTERACTIONS:
  An initial lasso creates the group.
  Adding items (add together, enter tags into form, and dump actual annotations):
    Dragging item over group
    Dragging group over group
    Lassoing group and items
    Lassoing groups

  Removing items (remove, dump annotations alltogether):
    Long press on preview element?
  Don't allow items to be removed when inside a group?

  */

  var icontemplate = "<div class=\"previewicon\"></div>";
  /* TODO: 


  - entering - only through the navigation tree??

  - dragging other items over it to add them
  - lassoing items into existing group??
  - in the commenting there should be a tag input with a save button
  - the save button should also allow an annotation to be deleted by the author


  */

  var Group = /*#__PURE__*/function (_Item) {
    _inherits(Group, _Item);

    var _super = _createSuper(Group); // Main viewport dimensions;


    function Group(items, temporary) {
      var _this;

      _classCallCheck(this, Group); // `items' is an array of `Items' which should be grouped together. `temporary' is a flag that differentiates the groups created based on server served annotations or the users lasso operation.


      _this = _super.call(this);
      _this.width = 300;
      _this.height = 200;
      _this.icons = [];
      _this.members = [];
      _this._current = undefined;
      _this.temporary = true;

      var obj = _assertThisInitialized(_this); // The label should depcit the group name - where does that come from? Maybe it should just be passed in? Maybe as an array of all names for this group.


      var head = obj.node.querySelector("div.head");
      head.querySelector("p.label").innerHTML = "Group";
      var dissolvebutton = head.querySelector("span.dissolve");
      dissolvebutton.style.display = "";

      dissolvebutton.onmousedown = function () {
        // The main item checks if the event is a drag, and stops propagation if so. This happens `onmousedown', which is fired before it can become an `onclick' (which presumably includes the `onmouseup' also?)
        obj.dissolve();
      }; // onclick


      var enterbutton = head.querySelector("span.enter");
      enterbutton.style.display = "";

      enterbutton.onmousedown = function () {
        obj.enter();
      }; // onclick
      // Maybe just do it the other way around - set a temporary viewnode to the renderer, and allow it to use that?
      // Store the members. Has to be done after the renderer is established, as one of them will supersede its geometry.


      obj.current = items[0];
      items.forEach(function (item) {
        obj.addmember(item);
      }); // map

      obj.temporary = temporary; // Add in a Commenting system also.

      var commentingnode = obj.node.querySelector("div.commenting");
      commentingnode.style.clear = "both";
      commentingnode.style.paddingTop = "5px"; // The group should also have a chapter form so that tags for several items can be submitted at once. But no chapters!!!

      obj.tagform = new TagForm();
      commentingnode.appendChild(obj.tagform.node); // Hide the time buttons.

      obj.tagform.node.querySelector("button.starttime").style.display = "none";
      obj.tagform.node.querySelector("i").style.display = "none";
      obj.tagform.node.querySelector("button.endtime").style.display = "none"; // And now, when the button is clicked loop through the members and call their submit methods.

      obj.tagform.submit = function (tag) {
        obj.members.forEach(function (member) {
          member.commenting.TagForm.submit(tag);
        });
      }; // submit


      return _this;
    } // constructor


    _createClass(Group, [{
      key: "current",
      get: // set current
      function get() {
        return this._current;
      } // get current
      ,
      set: function set(item) {
        var obj = this; // The first time there is no current node to return the renderer node.

        if (obj._current) {
          obj._current.viewnode.appendChild(obj._current.renderer.node);
        } // if
        // Should I just try appending the whole renderer node?? But how to return it to its owner afterwards? Maybe here, before the current is swapped out?
        // Store the current item


        obj._current = item;
        obj.renderer = item.renderer;
        obj.viewnode.appendChild(item.renderer.node); // Size the view node to the appropriate size.
        // obj.viewnode.style.height = obj.renderer.view.style.height;
        // obj.viewnode.style.width = obj.renderer.view.style.width;
        // Itshould also have immitation controls no? These will have to be added here directly I think.
      }
    }, {
      key: "addmember",
      value: function addmember(item) {
        var obj = this;
        obj.members.push(item);

        function uncolorAllIcons() {
          // Control the preview appearance.
          obj.previewnode.querySelectorAll("div.previewicon").forEach(function (icon) {
            icon.style.background = "gainsboro";
          }); // forEach
        } // coordinateIconColors


        var iconobj = {
          item: item,
          node: html2element(icontemplate)
        }; // return
        // Give the correct initial color, and append it.

        item.hide();
        obj.previewnode.appendChild(iconobj.node);

        iconobj.node.onmouseenter = function () {
          // Set current object - important for canvas rendering.
          obj.current = iconobj.item; // coordinate the colors.

          uncolorAllIcons();
          iconobj.node.style.background = "gray";
        }; // onmouseenter
        // Long press release.


        var pressTimer;

        function releaseMember() {
          obj.release(iconobj);
        } // releaseMember


        iconobj.node.onmouseup = function () {
          clearTimeout(pressTimer); // Clear timeout

          return false;
        }; // onmouseup


        iconobj.node.onmousedown = function () {
          // Set timeout
          pressTimer = window.setTimeout(releaseMember, 1000);
          return false;
        }; // onmousedown


        obj.icons.push(iconobj);
        obj.temporary = true;
      } // addmember

    }, {
      key: "release",
      value: function release(iconobj) {
        // On release the item is placed back where it was collected! Maybe this is a good interaction??
        var obj = this;
        obj.icons.splice(obj.icons.indexOf(iconobj), 1);
        obj.members.splice(obj.members.indexOf(iconobj.item), 1);
        iconobj.node.remove();
        iconobj.item.node.style.display = "";
        obj.current = obj.icons[0].item;
        obj.icons[0].node.style.background = "gray"; // The onmove method is already set to update the minimap - just reuse it.

        obj.onmove(); // Always when an item is released the group becomes temporary.

        obj.temporary = true;
      } // release
      // Dummy method

    }, {
      key: "enter",
      value: function enter() {} // enter

    }, {
      key: "dissolve",
      value: function dissolve() {
        var obj = this; // How should this tell the NavigationManager that it should stop tracking it?
        // Maybe just allow NavigationManager to filter out any empty groups whenever it tries to access them?
        // Just remove the node! Then where there is an update needed check if the node still exists? Also reinstate the previous items.

        obj.node.remove(); // When the group is created the items remain at their locations, and are simply hidden. When the group is dissolved an offset is applied to account for th egroup moving. For items that are included individually by dragging and dropping.

        obj._current.viewnode.appendChild(obj._current.renderer.node);

        var offset = [obj.position[0] - obj.origin[0], obj.position[1] - obj.origin[1]]; // offset

        obj.members.forEach(function (item) {
          item.position = [item.position[0] + offset[0], item.position[1] + offset[1]]; // position

          item.node.style.display = "";
        }); // forEach

        obj.members = [];
        obj.ondissolve();
      } // dissolve
      // Dmmy method

    }, {
      key: "ondissolve",
      value: function ondissolve() {} // ondissolve
      // Custom hide & show methods.

    }, {
      key: "show",
      value: function show() {
        var obj = this;
        obj.members.forEach(function (item) {
          return item.hide();
        });
        obj.current = obj._current;
        obj.node.style.display = "";
      } // show

    }, {
      key: "hide",
      value: function hide() {
        var obj = this;

        obj._current.viewnode.appendChild(obj._current.renderer.node);

        obj.node.style.display = "none";
      } // hide

    }]);

    return Group;
  }(Item); // Group

  /*
  A drop in class that provides zooming, panning, minimap, and the tree hierarchy navigaton.
  */

  var NavigationManager = /*#__PURE__*/function () {
    function NavigationManager() {
      _classCallCheck(this, NavigationManager);

      this.items = [];
      this._groups = [];
      this.scale = 1;
      this.dx = 0;
      this.dy = 0;
      var obj = this;
      obj.tabletop = document.getElementById("tabletop");
      obj.container = obj.tabletop.querySelector("div.scalingwrapper");
      obj.sketchpad = document.getElementById("sketchpad"); // obj.hudsvg = document.getElementById("hudsvg");
      // Use transform: scale() to achieve the zoom in and out functionality, and transform: translate(xpx,ypx) for panning. First a default trnasform should be assigned.

      obj.container.style.transform = "scale(1) translate(0px,0px)"; // ZOOMING

      function zoom(event) {
        event.preventDefault();
        obj.scale += event.deltaY * -0.001; // Restrict scale

        obj.scale = Math.min(Math.max(.125, obj.scale), 4); // Apply scale transform

        obj.adjustview();
      }
      // MINIMAP

      obj.minimap = new MiniMap();
      document.getElementById("minimap").appendChild(obj.minimap.node);
      obj.minimap.viewrect.node.onwheel = zoom;

      obj.minimap.viewrect.reposition = function () {
        var offset = obj.minimap.getoffset();
        obj.dx = -offset[0] / obj.scale;
        obj.dy = -offset[1] / obj.scale; // No minimap update here!!

        obj.container.style.transform = obj.currenttransform();
      }; // reposition
      // CORRELATIONS!


      var c = obj.minimap.correlations;
      c.update();
      document.getElementById("menucontainer").appendChild(c.xmenu.node);

      c.th.onclick = function () {
        var sp = c.calculate(obj.collectSpatialCorrelationData());
        var p = c.th.getBoundingClientRect();
        c.xmenu.toggle(sp, [p.x, window.innerHeight - p.y]);
      }; // onclick


      document.getElementById("menucontainer").appendChild(c.ymenu.node);

      c.tv.onclick = function () {
        var sp = c.calculate(obj.collectSpatialCorrelationData());
        var p = c.tv.getBoundingClientRect();
        c.ymenu.toggle(sp, [p.x + 20, p.y]);
      }; // onclick
      // Click on an option should arrange by that variable.


      c.xmenu.onvariableselect = function (correlation) {
        c.xvariable = correlation.name;
        c.update();
        obj.arrangeItemsByMetadata("x", correlation);
      }; // onvariableselect


      c.ymenu.onvariableselect = function (correlation) {
        c.yvariable = correlation.name;
        c.update();
        obj.arrangeItemsByMetadata("y", correlation);
      }; // onvariableselect
      // Click outside of the menu shoul dclose it.


      obj.sketchpad.addEventListener("mousedown", function () {
        c.xmenu.hide();
        c.ymenu.hide();
      }); // addEventListener

      obj.minimap.node.addEventListener("mousedown", function () {
        c.xmenu.hide();
        c.ymenu.hide();
      }); // addEventListener
      // BATCH MODE

      obj.batchform = new TagValueBatchForm();
      document.getElementById("batchform").appendChild(obj.batchform.node);
      obj.batchform.items = obj.items; // LASSO 
      // Originally the lasso produced a tooltip, with the options: group, tag, close. Some of the tagging is now done through the commenting system. The lasso can still highlight the selection, and the interface based option for spatial value tags can be used for the tagging. Should that just be a menu on the right?

      obj.lasso = new Lasso(obj.sketchpad);

      function findItemsInLasso(items) {
        var selected = items.reduce(function (acc, item) {
          var itemrect = item.node.getBoundingClientRect();
          var miditem = {
            x: itemrect.x + itemrect.width / 2,
            y: itemrect.y + itemrect.height / 2
          };

          if (item.node.style.display != "none" && obj.lasso.isPointInside(miditem)) {
            acc.push(item);
          }

          return acc;
        }, []);
        return selected;
      } // findItemsInLasso


      obj.lasso.onend = function () {
        // Only visible items should be selectable!!
        var selectedIndividuals = findItemsInLasso(obj.items);

        if (selectedIndividuals.length > 1) {
          obj.makegroup(selectedIndividuals, true);
        } // if

      }; // lasso.onend
      // TABLETOP NAVIGATION
      // The navigation based on hte tabletop. Here the dragging doesn't move the item, but rather a different element. Furthermore, the type of button click should launch a different event.


      obj.tabletop.onwheel = zoom;
      var active, origin, e0;

      obj.tabletop.onmousedown = function (e) {
        // Maybe the target event could be logged on the svg?? And then passed up as necessary?
        if (e.target == obj.tabletop || e.target == obj.sketchpad) {
          switch (e.which) {
            case 1:
              // Left mouse click - panning.
              // e.preventDefault();
              active = true;
              origin = {
                x: obj.dx,
                y: obj.dy
              };
              e0 = e;
              break;

            case 2:
              // Middle mouse click - lasso.
              // Still elevate the svg to allow drawing over the DOM.
              obj.sketchpad.style.zIndex = 1000;
              obj.lasso.clearBoundary();
              obj.lasso.active = true;
              break;
          } // switch

        } // if

      }; // onmousedown


      obj.tabletop.onmousemove = function (e) {
        if (active) {
          e.preventDefault(); // The elements should move in hte dragged direction.

          obj.dx = origin.x + (e.clientX - e0.clientX) / obj.scale;
          obj.dy = origin.y + (e.clientY - e0.clientY) / obj.scale; // Move the items.

          obj.adjustview();
        } // if

      }; // mousemove


      obj.tabletop.onmouseup = function () {
        active = false;
      }; // onmouseup


      obj.tabletop.onmouseenter = function () {
        active = false;
      }; // onmouseenter


      obj.tabletop.onmouseleave = function () {
        active = false;
      }; // onmouseleave
      // KNOWLEDGE TREE
      // The knowledge tree is added here because it is nominally a navigation element. However the data for it comes from the KnowledgeManager, which will have to interact with the NavigationManager.
      // So now the hudsvg will just keep on passing the events to the tabletop? Can I just rename the hudsvg to sketchpad? And add other interactible elements to it, e.g. the lasso, and correlations??


      obj.tree = new TreeKnowledge();
      obj.sketchpad.querySelector("g.tree").appendChild(obj.tree.node);

      obj.tree.moveto = function (connections) {
        /* Requirements: 
          - temporary groups need to be made visible to be able to dissolve them - should appear whenever possible?
          - the scope of the items needs to be reduced.
          - moving to a node is moving to a view with the group visible. So keep the context of the parent. which one? Combined parents?
          - the currently selected group should be highlighted on the navigation tree.
          - prevent groups with same members from appearing simultaneously
        
          - how to deal with the user navigating to the same group twice? Check if a similar group already exists? What to do if a superset group already exists on screen? Just highlight the superset group?
        */
        // When a new item is added to a tree group it should be re-logged as a new temporary group? The groups will also need to keep track of the annotations to make sure only new ones are sent to the server?
        // The groups that can remain visible are those that are within the set of active tasks.
        if (connections.group.root) {
          // All items should become accessible.
          obj.groups.forEach(function (g) {
            return g.hide();
          });
          obj.items.forEach(function (item) {
            return item.show();
          });
          obj.tree.currenttasks = [];
          obj.hudrefresh();
        } else {
          // Restrict the view to the members of the parent nodes. If one of the parents is the root then all the items should be active tasks.
          var activetasks = connections.parents.reduce(function (acc, parentg) {
            return parentg.root ? obj.items.map(function (item) {
              return item.task.taskId;
            }) : acc.concat(parentg.members);
          }, []); // reduce
          // Update the current active tasks in hte tree also. If the root is one of the parents, then don't highlight anything. Maybe don't highlight activetasks, but the selected tasks?

          obj.tree.currenttasks = connections.group.members;
          obj.items.forEach(function (item) {
            activetasks.includes(item.task.taskId) ? item.show() : item.hide();
          }); // forEach
          // The items corresponding to the taskIds of the clicked tree node should form a new group.

          var clickedgroupitems = obj.items.filter(function (item) {
            return connections.group.members.includes(item.task.taskId);
          }); // filter
          // Hide any groups that contain elements outside the currently active tasks. Maybe just keep all the groups in one array, but tick them to be temporary.

          var clickedgroup;
          obj.groups.forEach(function (g) {
            if (g.members.map(function (item) {
              return item.task.taskId;
            }).some(function (taskId) {
              return !activetasks.includes(taskId);
            })) {
              // A group outside of the current active tasks scope.
              g.hide();
            } else {
              // Potentially a group competing with the desired group.
              // A competing group is one that is not hidden, and contains some desired items. The user should not be able to have competing groups on the screen at the same time. Force the current selection, and therefore hide the other groups. They will still be accessible through the tree.
              // But if the group contains all of the clicked items, then it's not competing, then it's a superset group. Still just hide it.
              // However if a group with exactly th edesired membership exists, then just use that.
              // So what happens to tree groups that have a member added? They are turned into a temporary group, and are therefore hidden if navigated to again.
              if (clickedgroupitems.some(function (item) {
                return g.members.includes(item);
              })) {
                g.hide();
              } else {
                g.show();
              } // if
              // A.all is written as !A.some(v=>!B.includes(v))


              if (arrayequal(g.members, clickedgroupitems)) {
                clickedgroup = g;
              } // if

            }
          }); // forEach

          if (clickedgroup) {
            clickedgroup.show();
            obj.hudrefresh();
          } else {
            obj.makegroup(clickedgroupitems, false);
          } // if

        } // if

      }; // obj.tree.moveto


      obj.tree.crossreferencein = function (taskids) {
        // Feed it to the minimap
        obj.minimap.highlight(taskids);
      }; // obj.tree.crossreference


      obj.tree.crossreferenceout = function () {
        // Feed it to the minimap
        obj.minimap.unhighlight();
      }; // obj.tree.crossreference

    } // constructor


    _createClass(NavigationManager, [{
      key: "track",
      value: function track(item) {
        var obj = this; // On Drag END chck if item should be placed into group.

        item.onend = function (p) {
          // Check if it should be added to a group.
          // BUT THIS SHOULD ONLY HAPPEN ON MOUSEUP!!
          obj.groups.forEach(function (g) {
            // Check if the item midpoint is within the group, but only if it's attached. If it's not then the boundingclient rect should come back with all 0s.
            var irect = item.node.getBoundingClientRect();
            var grect = g.node.getBoundingClientRect();

            if (irect.x + irect.width / 2 > grect.x && irect.x + irect.width / 2 < grect.x + grect.width && irect.y + irect.height / 2 > grect.y && irect.y + irect.height / 2 < grect.y + grect.height) {
              g.addmember(item); // The item itself should be positioned back to the beginning of the drag. When the group is dissolved it allows the item to be positioned based on it's relative position ot the group.
              // When the group first moved, and the item is added later the results will still be inconsistent...

              item.position = p;
            } // if

          }); // forEach
          // Update the minimap and the tree accordingly.

          obj.hudrefresh();
        }; // onend


        item.onmove = function () {
          obj.minimap.update();
        }; // onmove


        obj.items.push(item);
        obj.tree.hierarchy.alltasks.push(item.task); // Make the tree aware of this taskId also. Otherwise it'll hide it when navigating to root.
      } // additem
      // TABLETOP NAVIGATION

    }, {
      key: "adjustview",
      value: function adjustview() {
        var obj = this; // When the view is adjusted the items should also be told to check their sizes, and react is needed.

        obj.container.style.transform = obj.currenttransform(); // Update the minimap

        obj.minimap.update(); // Instruct all the items to check their size.

        obj.items.forEach(function (item) {
          item.checksize();
        }); // forEach
      } // adjustview

    }, {
      key: "currenttransform",
      value: function currenttransform() {
        var obj = this;
        return "scale(".concat(obj.scale, ") translate(").concat(obj.dx, "px,").concat(obj.dy, "px)");
      }
    }, {
      key: "collectSpatialCorrelationData",
      value: // gettransform

      /* SPATIAL CORRELATION DATA COLLECTION
      
      
      
      Why not just gather all the metadata at once? And then run through all of it?
      
      For statistics it's favourable to keep all the values of individual variables in single arrays so that calculations of mean and standard deviation etc are simpler.
      
      Still, this can just be made here, and the spatial and metadata values can be prepared together. First collect in the row orientation, and then convert? Maybe that is simplest. And in the reorientation the categoricals can be converted.
      
      TODO
      DONE: 1.) Limit the calculation to on-screen items.
      DONE: 2.) Make sure items aren't accounted for twice
      DONE: 3.) Add tag annotation data.
      
      
      */
      function collectSpatialCorrelationData() {
        var obj = this;
        var onscreenitems = obj.items.filter(function (item) {
          return item.isonscreen();
        });
        var onscreengroups = obj.groups.filter(function (group) {
          return group.isonscreen();
        }); // To see the annotation data that can be used for correlations first all common tags need to be identified. To do that all the relevant items need to be iterated over.
        // Tags under consideration ar erequired to have a value. But timesteps can have two values. Distinguish between start and end times?

        var allrelevantitems = onscreenitems.concat(onscreengroups.reduce(function (acc, grp) {
          return acc.concat(grp.members);
        }, []));
        var tagCorrelationData = collectAvailableTagCorrelationData(allrelevantitems); // Two kinds of items need to be dealt with - individuals and groups. Grouped items should use the position of the group for the spatial correlations.

        var groupedItemData = onscreengroups.reduce(function (acc, g) {
          var d = g.members.map(function (item) {
            return {
              spatial: {
                x: g.position[0],
                y: g.position[1]
              },
              metadata: item.task
            };
          }); // map

          return acc.concat(d);
        }, []); // reduce
        // Individual items are accounted for in the groups already no? So maybe try to filter them out? Add the third attribute of tag data.

        var individualItemData = onscreenitems.map(function (item) {
          return {
            spatial: {
              x: item.position[0],
              y: item.position[1]
            },
            metadata: item.task
          };
        });
        var d = groupedItemData.concat(individualItemData); // Reorient here, and introduce ordinalvariables and categoricalvariables properties? But it doesn't matter in the end, as long as the categoricals are mapped correctly it's all good?

        var spatial = [makeNamedArray(d.map(function (d_) {
          return d_.spatial.x;
        }), "x"), makeNamedArray(d.map(function (d_) {
          return d_.spatial.y;
        }), "y")]; // spatial
        // The METADATA COULD BE FILTERED INITIALLY TO REMOVE ANY NONINFORMATIVE VALUES?
        // Or just prevent non-informative values to be used for correlations - probably better.

        return {
          spatial: spatial,
          ordinals: obj.ordinals.map(function (variable) {
            return makeNamedArray(d.map(function (d_) {
              return d_.metadata[variable];
            }), variable);
          }).concat(tagCorrelationData.ordinals),
          categoricals: obj.categoricals.map(function (variable) {
            return makeNamedArray(d.map(function (d_) {
              return d_.metadata[variable];
            }), variable);
          }).concat(tagCorrelationData.categoricals)
        };
      } // collectSpatialCorrelationData

    }, {
      key: "arrangeItemsByMetadata",
      value: function arrangeItemsByMetadata(axis, correlation) {
        var obj = this;
        var i_axis = axis == "x" ? 0 : 1; // Ok, I should reposition all the items, and all hte groups. The repositioning should be done in the range of positions available, and in a square - so the max range determines the positioning.

        var d = obj.items.reduce(function (acc, item) {
          // Go for total range so things spread out a bit if needed. Enforce a minimum range?
          acc.range[0] = Math.min(acc.range[0], parseInt(item.node.style.top), parseInt(item.node.style.left));
          acc.range[1] = Math.max(acc.range[1], parseInt(item.node.style.top), parseInt(item.node.style.left));
          var v_ = item.task[correlation.name];
          var v = correlation.mapping ? correlation.mapping[v_][axis] : v_;
          acc.domain[0] = Math.min(acc.domain[0], v);
          acc.domain[1] = Math.max(acc.domain[1], v);
          return acc;
        }, {
          range: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
          domain: [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
        }); // reduce
        // What do if the variable is categorical? Now the correlation also has the mapping attribute.

        var scale = new scaleLinear();
        scale.domain = d.domain;
        scale.range = d.range; // Actually loop through the items and arrange them.

        obj.items.forEach(function (item) {
          var v_ = item.task[correlation.name];
          var v = correlation.mapping ? correlation.mapping[v_][axis] : v_;
          var p = item.position;
          p[i_axis] = scale.dom2range(v);
          item.position = p;
        }); // forEach
        // Now go through the groups and select what to do with them.

        obj.minimap.update(); // console.log(`Arrange ${axis}-axis by: `, correlation, scale)
      } // arrangeItemsByMetadata

      /* GROUPING
      How to handle the grouping?
      
      The server pushes an array of `knowledge'. Each row of the array will be a separate annotation? And then the different attributes it will have will make it a different type? The server could be asked to send specific types of annotations over, and the local version would just keep them.
      
      For comments the server sent everything originally, and then individual ones separately. The same could be applied here also. So maybe everything with a valid `tags' could be sent over first, and then the comments etc. would be sent when the corresponding commenting section is open? In any case the knowledge manager will have to keep tabs on all the individual annotations, to be able to replace them with updated versions as they arrive. How would the SQL database be updated with a newer version of the same row? With the UPDATE statement!
      
      
      How should the annotations be stored, just in an array, or in the actual items. Maybe both?
      
      
      Everything with `tags' can be fed to the tree. The groups should be tracked as unsubmitted annoations also. What kind of tags should they be given? Unsaved1 etc?
      
      
      
      The temporary groups can just be kept as groups, and the knowldge manager will just update when groups are expanded? Then the groups made through the tree should not be entered into the obj.groups array. No removal of annotations!!
      
      How should the groups be saved! Should there just be an annotation form at the bottom, that will allow the user to submit a tag? How should the groups with several tags display these? Just above the annotation form? Yes, there they also form a basis for the conversation topics! To supplement the tags they could have a draw icon next to them that allows
      
      
      How to get rid of unnecessary groups once the user dissolves them?? Need to distinguish these groups from the ones that are just navigated away from. And when a tree node is clicked it will have to keep track of the temporary groups also! Well, dissolved groups will have no members!!
      
      The tree needs to correctly position the temporary group also. How should it do this?
      
      */

    }, {
      key: "groups",
      get: function get() {
        var obj = this; // Filter out any empty groups

        obj._groups = obj._groups.filter(function (g) {
          return g.members.length > 0;
        });
        return obj._groups;
      } // set

    }, {
      key: "makegroup",
      value: function makegroup(items, temporary) {
        var obj = this; // The user wishes to create a group using lasso selection. Make this group and store it separately from groups that are a direct result of the tree navigation.

        var p = [0, 0];
        items.forEach(function (item) {
          p[0] += parseFloat(item.node.style.left) / items.length;
          p[1] += parseFloat(item.node.style.top) / items.length;
        }); // forEach

        var g = new Group(items, temporary);
        g.position = p;
        g.origin = p;

        g.enter = function () {
          // Hide all items that are not in the current set.
          obj.items.forEach(function (item) {
            g.members.includes(item) ? item.show() : item.hide();
          }); // forEach
          // Return the viewnode to the current!

          g._current.viewnode.appendChild(g._current.renderer.node); // Just hide all groups.


          obj.groups.forEach(function (g_) {
            return g_.hide();
          }); // forEach;
          // Update the tree current status.

          obj.tree.currenttasks = g.members.map(function (m) {
            return m.task.taskId;
          });
          obj.hudrefresh();
        }; // enter
        // Add the group to the session.


        obj.groups.push(g);
        obj.container.appendChild(g.node); // Update the minimap and the tree data.

        obj.minimap.add(g);

        g.onmove = function () {
          obj.minimap.update();
        }; // onmove


        g.ondissolve = function () {
          obj.hudrefresh();
        }; // ondissolve
        // All temporary groups should be added as annotations to the tree.


        obj.hudrefresh();
        obj.updateRenderingItems(obj.items.concat(obj.groups));
      } // makegroup
      // DUMMY METHOD.

    }, {
      key: "updateRenderingItems",
      value: function updateRenderingItems(items) {} // updateRenderingItems 

    }, {
      key: "hudrefresh",
      value: function hudrefresh() {
        var obj = this;
        obj.minimap.update();
        obj.tree.temporary = obj.groups.filter(function (g) {
          return g.temporary;
        });
        obj.tree.update(); // Update the correlations also in case any correlation is above 0.95, in which case the highest one in that direction should appear on the minimap axes.

        obj.minimap.correlations.xvariable = "Unknown";
        obj.minimap.correlations.yvariable = "Unknown";
        obj.minimap.correlations.update();
      } // hudrefresh

    }]);

    return NavigationManager;
  }(); // NavigationManager

  function arrayequal(A, B) {
    var AequalsB = !A.some(function (v) {
      return !B.includes(v);
    });
    var BequalsA = !B.some(function (v) {
      return !A.includes(v);
    });
    return AequalsB && BequalsA;
  } // arrayequal


  function makeNamedArray(A, name) {
    A.name = name;
    return A;
  } // namedArray


  function collectAvailableTagCorrelationData(items) {
    // Maybe it's eaiest to first collect all possibilities, and then remove any array that hose some invalid values? And base it off of a seed anyway, because all otehrs will be filtered out later anyway?
    // Loop over all the items. Keep only the tags that appear in all of them. Values can be categorical/ordinal - check to see which. Two values are created for sequence annotations, but only if the relevant values are present. Nothing for geometry for now.
    // Ok, there are several possibilities - tag value, tag starttime, tag endtime.
    // First filter out any variables that are not present in all items.
    var commonTagNames = items.reduce(function (acc, item) {
      return acc.filter(function (n) {
        return item.annotations.tagoverview.tags.map(function (t) {
          return t.name;
        }).includes(n);
      });
    }, items[0].annotations.tagoverview.tags.map(function (t) {
      return t.name;
    })); // Get the relevant item tag.

    function getItemTagByName(item, tagname) {
      return item.annotations.tagoverview.tags.find(function (t) {
        return t.name == tagname;
      });
    }

    function getTagDataNamedArray(tagname, optionname, accessor) {
      var values = items.map(function (item) {
        return accessor(getItemTagByName(item, tagname));
      }); // map

      return makeNamedArray(values, "".concat(tagname, "-").concat(optionname));
    } // getTagDataNamedArray
    // Have to use reduce because for each tag three variables are generated.


    var annotationCorrelationData = commonTagNames.reduce(function (acc, tagname) {
      acc.push(getTagDataNamedArray(tagname, "value", function (t) {
        return t.value;
      }));
      acc.push(getTagDataNamedArray(tagname, "start", function (t) {
        return t.timestamps ? t.timestamps[0] : undefined;
      }));
      acc.push(getTagDataNamedArray(tagname, "end", function (t) {
        return t.timestamps ? t.timestamps[1] : undefined;
      }));
      return acc;
    }, []); // Filter out the ones that have any invalid entries. The null values should be dropped here.

    var validAnnotationCorrelationData = annotationCorrelationData.filter(function (A) {
      return !A.some(function (v) {
        return !v;
      });
    }); // All the values are strings up to this point. Convert them here if they are ordinals.

    return validAnnotationCorrelationData.reduce(function (acc, A) {
      if (A.some(function (v) {
        return !Number(v);
      })) {
        acc.categoricals.push(A);
      } else {
        acc.ordinals.push(makeNamedArray(A.map(function (v) {
          return Number(v);
        }), A.name));
      } // if


      return acc;
    }, {
      ordinals: [],
      categoricals: []
    }); // reduce
  } // collectAvailableTagCorrelationData

  /*
  This class should connect with the server to get and save the knowledge captured.

  Where should the tree be drawn also? Top left, as before?


  Where in the code hierarchy should KnowledgeManager sit? Below or above NavigationManager. Maybe above is fine?

  What kind of knowledge is there, and what does it need to interact with, and how:

  - Structured tags: name/value pairs equivalent to ordinal/categorical metadata variables
  	ordinal name-spatial value pairs: global menu
  	categorical name-spatial value pairs: global menu
  - Unstructured tags: keywords saved as a list for each metadata row
      name: existing chapter form
  - Annotations: timestamp/line/area data with a keyword attached
      name-timestep: existing chapter form
  	name-line: drawing interaction
  	name-area: drawing interaction
  - Comments:
  	text: exiting comment form


  All properties	
  id, taskId, author, datetime, name, value, timestamps, geometry, comment, upvotes, downvotes


  Compulsory properties:
  id, taskId, author, datetime, name


  The id should be an annotation specific id!!! What should this be??? Just sequential numbers? Assigned at the server?

  The tree should only track the knowledge, and not all the taskIds.
  */

  /*
        Database doesn't exist yet - create Knowledge table. Single table could hold all possible annotations.
        
        id - annotation id, created on the fly by SQL table
        type - annotation type (tag, chapter, name-value pair,...)
        taskId - the taskId it corresponds to
        author - who contributed the knowledge
        datetime - when was it contributed, created server side
        name - tag name
        value - tag value
        timestamps - chapter start and end times saved as stringified array
        geometry - stringified array of [x,y] arrays
        comment - text comment
        upvotes - string of authors that upvoted, with special server-side update method
        downvotes - string of authros who downvoted, with special server-side update method
  */

  /*



  // Task 11 is in two groups!!
  const testannotations = [
  {id: "0", name: "green", taskId: "task 2", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "1", name: "green", taskId: "task 7", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "2", name: "green", taskId: "task 11", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "3", name: "blue", taskId: "task 5", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "4", name: "blue", taskId: "task 6", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "5", name: "blue", taskId: "task 11", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "6", name: "brown", taskId: "task 1", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "7", name: "brown", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "8", name: "brown", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "9", name: "brown", taskId: "task 8", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "10", name: "brown", taskId: "task 13", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "11", name: "brown", taskId: "task 15", author: "Aljaz", datetime: "Tue Feb 08 2022"}
  ]; // testannotations



  const testannotations2 = [
  {id: "0", name: "B", taskId: "task 1", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "1", name: "B", taskId: "task 2", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "2", name: "B", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "3", name: "B", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},

  {id: "4", name: "C", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "5", name: "C", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "6", name: "C", taskId: "task 5", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "7", name: "C", taskId: "task 6", author: "Aljaz", datetime: "Tue Feb 08 2022"},

  {id: "8", name: "D", taskId: "task 3", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "9", name: "D", taskId: "task 4", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "10", name: "D", taskId: "task 5", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "11", name: "D", taskId: "task 6", author: "Magda", datetime: "Tue Feb 08 2022"},

  {id: "12", name: "E", taskId: "task 7", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "13", name: "E", taskId: "task 8", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "14", name: "E", taskId: "task 9", author: "Magda", datetime: "Tue Feb 08 2022"},

  {id: "15", name: "F", taskId: "task 3", author: "Aljaz", datetime: "Tue Feb 08 2022"},
  {id: "16", name: "F", taskId: "task 4", author: "Aljaz", datetime: "Tue Feb 08 2022"},

  {id: "17", name: "G", taskId: "task 8", author: "Magda", datetime: "Tue Feb 08 2022"},
  {id: "18", name: "G", taskId: "task 9", author: "Magda", datetime: "Tue Feb 08 2022"},
  ]; // atestannotation2


  */

  var KnowledgeManager = /*#__PURE__*/function () {
    function KnowledgeManager(nm) {
      _classCallCheck(this, KnowledgeManager);

      var obj = this; // `nm' is a NavigationManager object.
      // Keep a reference to the navigation manager, because the tree navigation must have it's data updated with the knowledge, and the items can be accessed through it.

      obj.nm = nm; // Commenting needs to be updated if the username changes.

      document.getElementById("username").oninput = function () {
        var currentuser = document.getElementById("username").value;
        console.log(currentuser);
        obj.nm.items.forEach(function (item) {
          item.annotations.commenting.user = currentuser;
        }); // forEach
      }; // oninput

      /* WEBSOCKET INITIALISATION
      So - send over a list of taskIds, and then get back the initial set of comments.
      Everytime the connection is remade the comments will reload.
      */


      var serverAddress = "wss://continuous-brief-nylon.glitch.me";
      setupWebSocket();

      function setupWebSocket() {
        /*
        The websocket connection can be closed if there is a connection problem between
        the client and server, or if the connection is inactive for too long. In case
        there is an error when opening the connection the client tries to reconnect after
        1s. It also tries to reconnect if the connection is closed for some reason. To
        minimise the reconnections due to inactivity the client pings the server every t<300s
        to maintain the connection. The server pongs it back to keep the connection on its side.
        */
        obj.ws = new WebSocket(serverAddress, "json");

        obj.ws.onerror = function () {
          setTimeout(setupWebSocket, 1000);
        }; // onerror


        obj.ws.onopen = function () {
          // When the connection is initialised the server should send all pertinent comments.
          obj.ws.send(JSON.stringify({
            type: "query"
          }));

          function ping() {
            // This should recursively call itself.
            // console.log("ping")
            obj.ws.send(JSON.stringify({
              type: "ping"
            }));
            setTimeout(ping, 100 * 1000); // 299*1000   
          } // ping


          ping();
        }; // onopen
        // This will have to be reworked to differentiate between message and upvotes. Ultimately also annotations.


        obj.ws.onmessage = function (msg) {
          // Should differentiate between receiving a 'pong', receiving a single item, and receiving an array.
          // A single item is just added, while an array requires a purge of existing comments first.
          var action = JSON.parse(msg.data); // console.log(action)

          switch (action.type) {
            case "pong":
              break;

            case "query":
              // Purge the existing comments
              obj.purge();

            case "relay":
              // But relays can be new comments, or they can be upvotes/downvotes/...
              obj.process(action.data);
              break;

            case "vote":
              obj.processvote(action);
              break;
          }
        }; // onmessage


        obj.ws.onclose = function () {
          setTimeout(setupWebSocket, 1000);
        }; // onclose

      } // setupWebSocket

      /* IMPLEMENT THE POSTING DIRECTLY FROM THE FORMS
      The forms have dummy `submit' methods added to them, which receive the collected information as an input. The rest of the information should be fed into this object here.
      
      */

      /* Configure the items to send things to the server
      WebSockets support sending and receiving: strings, typed arrays (ArrayBuffer) 
      and Blobs. Javascript objects must be serialized to one of the above types 
      before sending.
      
      type: comment allows the server to handle different packages differently.
      */


      nm.items.forEach(function (item) {
        // `tagform' holds the button to submit tag, tag-value, tag-geometry, and tag-sequence annotations.
        item.annotations.tagform.submit = function (tag) {
          // Tag comes with at least the tag name from tagform.

          /* The author and taskId are obligatory
          Author is required to fom groups for the treenavigation, and the taskId allows the annotations to be piped to the corresponding data.
          */
          if (obj.username) {
            tag.taskId = item.task.taskId;
            tag.author = obj.username; // When stringifying an array all other properties are lost. Instead of explicitly stating that the geometry is closed just make the first and last points the same.

            tag.geometry = JSON.stringify(item.renderer.geometryannotation.submit()); // Type tag is assigned so that tags are distinguished from queries and heartbeat pings. Tag type combinations are allowed by always extracting whatever is possible from hte tags. Possible values are controlled for on the server side.

            tag.type = "tag";
            obj.ws.send(JSON.stringify(tag));
          } else {
            alert("You need to log in");
          } // if			

        }; // submit
        // Ah, with the commenting I want to have general comments and replies. And for the replies it's still the commentform that is used. So maybe that can be configured here actually. Ah, but it can't, because it depends on the dynamically generated comment DOM elements.


        item.annotations.commenting.form.submit = function (comment) {
          if (obj.username) {
            comment.taskId = item.task.taskId;
            comment.author = obj.username;
            comment.type = "tag";
            obj.ws.send(JSON.stringify(comment));
          } else {
            alert("You need to log in");
          } // if

        }; // submit
        // The submit for voting needs to be added dynamically. So the function should be gvien to the specific commenting manager, and that needs to assign it onwards.


        item.annotations.commenting.submitvote = function (vote) {
          if (obj.username) {
            vote.author = obj.username;
            obj.ws.send(JSON.stringify(vote));
          } else {
            alert("You need to log in");
          } // if

        }; // submitvote

      }); // forEach
      // Loop to keep updating the comments every 10 seconds - this is just so that the time labels are getting updated.

      /*
      function update(){
        comments.forEach(c=>{
      	c.update()
        }) // forEach
        setTimeout(update, 10*1000)
      } // update
      update();
      */
    } // constructor


    _createClass(KnowledgeManager, [{
      key: "username",
      get: function get() {
        return document.getElementById("username").value;
      } // get username

    }, {
      key: "purge",
      value: function purge() {
        var obj = this;
        console.log("Purging"); // What needs to be purged? The knowledge manager doesn't keep track of the individual annotations anyway? Maybe cause the underlying modules to drop their knowledge?
        // Purge the navigation tree of obsolete knowledge.

        obj.nm.tree.purge(); // This is called before a query also. needs to purge comment sections, tag overviews, potentially chapters.

        obj.nm.items.forEach(function (item) {
          // The annotation system will purge all its components.
          item.annotations.purge();
        }); // forEach
      } // purge
      // Processing of knowledge entries cannot rely on types, because these are no longer captured. Instead just define what the individual components require.

    }, {
      key: "process",
      value: function process(d) {
        var obj = this; // First a nice KLUDGE to get us going - it should only display knowledge relevant to this demo, and so filter out anything with an inappropriate taskId.

        var currenttasks = obj.nm.items.map(function (item) {
          return item.task.taskId;
        });
        d = d.filter(function (a) {
          return currenttasks.includes(a.taskId);
        }); // the tree can handle anything with a tag name.

        var tags = d.filter(function (a) {
          return a.name;
        });
        tags.forEach(function (tag) {
          obj.nm.tree.addtagannotation(tag);
        }); // forEach
        // console.log("Tags", d, tags)

        obj.nm.tree.update(); // tags need to be distributed to the individual items also - there the available tags will be displayed to the user. The individual items also need them to see if the name of the new annotation is unique or not.

        var tagdistribution = distribution(tags);
        obj.nm.items.forEach(function (item) {
          if (tagdistribution[item.task.taskId]) {
            item.annotations.tagoverview.add(tagdistribution[item.task.taskId]);
          } // if

        }); // forEach
        // CLICKING ON CHPTER LABELS COULD ALLOW CHAPTE MODIFICATIONS!!
        // The chapters need to be distributed to hte appropriate items.

        var chapters = d.filter(function (a) {
          if (a.timestamps) {
            // Chpters should have their timestamps parsed back into JSON arrays.
            a.timestamps = JSON.parse(a.timestamps);
            return true;
          } // if


          return false;
        }); // filter

        var chapterdistribution = distribution(chapters);
        obj.nm.items.forEach(function (item) {
          if (chapterdistribution[item.task.taskId]) {
            // The chapters are routed to the playbar.
            item.renderer.ui.bar.addchapters(chapterdistribution[item.task.taskId]);
          } // if

        }); // forEach
        // COMMENTING ON GROUPS IS IMPOSSIBLE, ONLY ACTUAL INDIVIDUALS CAN BE DISCUSSED
        // Could be relaxed by just toring all the user ids for comments submitted through groups? Would have to implement a group specific way to return a stringified array of taskIds.

        var comments = d.filter(function (c) {
          return c.comment;
        }); // filter
        // Parse the upvotes and downvotes - they shoul dbe arrays.

        comments.forEach(function (c) {
          c.upvotes = c.upvotes ? JSON.parse(c.upvotes) : null;
          c.downvotes = c.downvotes ? JSON.parse(c.downvotes) : null;
        }); // forEach
        // console.log("Comments", comments)

        var commentsdistribution = distribution(comments);
        obj.nm.items.forEach(function (item) {
          if (commentsdistribution[item.task.taskId]) {
            // The comments are routed to the commenting manager.
            item.annotations.commenting.add(commentsdistribution[item.task.taskId]);
          } // if

        }); // forEach
        // Geometry tags need not be handled separately - TagOverview does what is appropriate.
        // let geometryannotations = d.filter(a=>a.geometry);
        // console.log(geometryannotations)
      } // process

    }, {
      key: "processvote",
      value: function processvote(d) {
        // A vote is received as a single item: vote = {id, type: vote, upvotes, downvotes};
        // Find the item with the appropriate comment id, and update that comment.
        var obj = this; // SHOULD BE MOVED TO COMMENTING MANAGER

        function updatevote(c, v) {
          // Update comment `c' with a new voting object `v', if they have the same id.
          if (c.config.id == v.id) {
            c.config.upvotes = v.upvotes;
            c.config.downvotes = v.downvotes;
            c.update();
          }
        } // updatevote
        // Just updating the comment items doesn't work. Unless we update the comments, then purge the comment objects, and then create new ones?
        // Alternately loop through them.


        obj.nm.items.forEach(function (item) {
          item.annotations.commenting.generalcommentobjs.forEach(function (gc) {
            updatevote(gc, d);
            gc.replies.forEach(function (rc) {
              updatevote(rc, d);
            }); // forEach
          });
        }); // forEach
      } // processvote

    }]);

    return KnowledgeManager;
  }(); // KnowledgeManager

  function distribution(A) {
    // Create a distribution map for items in array A, by their taskId.
    var d = A.reduce(function (acc, a) {
      if (acc[a.taskId]) {
        acc[a.taskId].push(a);
      } else {
        acc[a.taskId] = [a];
      } // if


      return acc;
    }, {});
    return d;
  } // distribution

  // categorical: ["Event", "Site", "White",	"Black", "Result", "ECO", "Opening", "TimeControl",	"Termination", "Game"],
  // ordinal: ["UTCDate", "UTCTime", "WhiteElo", "BlackElo",	"WhiteRatingDiff", "BlackRatingDiff"]

  fetch("./data/lichess_db_subset.json").then(function (res) {
    return res.json();
  }).then(function (data) {
    var games = data.matches.filter(function (m, i) {
      return i < 50;
    });
    games.forEach(function (game) {
      game.taskId = "".concat(game.White, " vs. ").concat(game.Black, ", ").concat(game.UTCDate, " at ").concat(game.UTCTime);
    }); // forEach
    // The NavigationManager needs to know the variable types because it needs to collect the spatial correlation data to send to the SpatialCorrelations housed by the MiniMap.

    var workspace = new NavigationManager();
    workspace.ordinals = data.ordinal;
    workspace.categoricals = data.categorical;
    var items = [];

    for (var i = 0; i < games.length; i++) {
      var item = new ChessGame(games[i]);
      items.push(item); // Temporarilyturn the position: absolute off so we get an initial arrangement.

      item.node.style.position = ""; // Make navigation manager keep track of the item.

      workspace.container.appendChild(item.node);
      workspace.track(item);
    } // for
    // Update the minimap with all the items. This could be implemented in a nicer way it feels.


    workspace.minimap.update(items); // The initial positioning is done based on "position: relative;"

    var headeroffset = 80;
    var positions = items.reduce(function (acc, item) {
      acc.push([item.node.offsetLeft, item.node.offsetTop + headeroffset]);
      return acc;
    }, []); // Now positionthem absolutely, and add the dragging.

    items.forEach(function (item, i) {
      item.node.style.position = "absolute";
      item.position = positions[i];
    }); // forEach
    // The knowledge manager object.

    var knowledge = new KnowledgeManager(workspace); // Start with the rendering. Rendering only considers drawing the items it knows about, and it knows nothing of the dynamically created groups by the NavigationManager. As a kludge solution the NavigationManager will superst the items to be considered by the renderer.
    // How to do the memory handling. And how to make it appear in the navigation bar!

    console.log(workspace, knowledge);
  });

}());
//# sourceMappingURL=spatialknowledge_chess.js.map
