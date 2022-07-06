(function () {
  'use strict';

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

  var template$n = "\n<div class=\"item\">\n  <div class=\"head unselectable\">\n\t<span class=\"button dissolve\" style=\"display: none;\">\u2716</span>\n\t<span class=\"button enter\" style=\"display: none;\">\u2B8A</span>\n\t<p class=\"label\"></p>\n  </div>\n  <div class=\"viewcontainer\"></div>\n  <div class=\"preview\"></div>\n  <div class=\"commenting\"></div>\n</div>\n";
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
      obj.node = html2element(template$n);
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

  function multiplyPoint(matrix, point) {
    var x = point[0],
        y = point[1],
        z = point[2],
        w = point[3];
    var c1r1 = matrix[0],
        c2r1 = matrix[1],
        c3r1 = matrix[2],
        c4r1 = matrix[3],
        c1r2 = matrix[4],
        c2r2 = matrix[5],
        c3r2 = matrix[6],
        c4r2 = matrix[7],
        c1r3 = matrix[8],
        c2r3 = matrix[9],
        c3r3 = matrix[10],
        c4r3 = matrix[11],
        c1r4 = matrix[12],
        c2r4 = matrix[13],
        c3r4 = matrix[14],
        c4r4 = matrix[15];
    return [x * c1r1 + y * c1r2 + z * c1r3 + w * c1r4, x * c2r1 + y * c2r2 + z * c2r3 + w * c2r4, x * c3r1 + y * c3r2 + z * c3r3 + w * c3r4, x * c4r1 + y * c4r2 + z * c4r3 + w * c4r4];
  }
  function multiplyMatrices(a, b) {
    // multiplies matrices such that result = a*b;
    // TODO - Simplify for explanation
    // currently taken from https://github.com/toji/gl-matrix/blob/master/src/gl-matrix/mat4.js#L306-L337
    var result = [];
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15]; // Cache only the current line of the second matrix

    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    result[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    result[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    result[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    result[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    result[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    result[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    result[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return result;
  }
  function multiplyArrayOfMatrices(matrices) {
    var inputMatrix = matrices[0];

    for (var i = 1; i < matrices.length; i++) {
      inputMatrix = multiplyMatrices(inputMatrix, matrices[i]);
    }

    return inputMatrix;
  }
  function scaleMatrix(w, h, d) {
    return [w, 0, 0, 0, 0, h, 0, 0, 0, 0, d, 0, 0, 0, 0, 1];
  }
  function translateMatrix(x, y, z) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
  }
  function invertMatrix(matrix) {
    // Adapted from: https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js
    // Performance note: Try not to allocate memory during a loop. This is done here
    // for the ease of understanding the code samples.
    var result = [];
    var n11 = matrix[0],
        n12 = matrix[4],
        n13 = matrix[8],
        n14 = matrix[12];
    var n21 = matrix[1],
        n22 = matrix[5],
        n23 = matrix[9],
        n24 = matrix[13];
    var n31 = matrix[2],
        n32 = matrix[6],
        n33 = matrix[10],
        n34 = matrix[14];
    var n41 = matrix[3],
        n42 = matrix[7],
        n43 = matrix[11],
        n44 = matrix[15];
    result[0] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
    result[4] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
    result[8] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
    result[12] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
    result[1] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
    result[5] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
    result[9] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
    result[13] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
    result[2] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
    result[6] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
    result[10] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
    result[14] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
    result[3] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
    result[7] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
    result[11] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
    result[15] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;
    var determinant = n11 * result[0] + n21 * result[4] + n31 * result[8] + n41 * result[12];

    if (determinant === 0) {
      throw new Error("Can't invert matrix, determinant is 0");
    }

    for (var i = 0; i < result.length; i++) {
      result[i] /= determinant;
    }

    return result;
  }

  var Camera = /*#__PURE__*/function () {
    // A third angle could be used to encode the camera 'roll'. 'z' is not changed in the current apps, but it would be used if the camera had 'walking' controls, e.g. through the arrow keys.
    function Camera() {
      _classCallCheck(this, Camera);

      this.mouseDown = false;
      this.mouseStart = [0, 0];
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.theta = 0;
      this.phi = 0;
      this.xStart = 0;
      this.yStart = 0;
      this.thetaStart = 0;
      this.phiStart = 0;
      this.fieldOfViewInRadians = Math.PI * 0.2;
      this.aspectRatio = 1;
      this.nearClippingPlaneDistance = 1;
      this.farClippingPlaneDistance = 100;
    } // constructor


    _createClass(Camera, [{
      key: "moveStart",
      value: function moveStart(x, y) {
        var obj = this;
        obj.mouseStart = [x, y];
        obj.mouseDown = true;
        obj.thetaStart = obj.theta;
        obj.phiStart = obj.phi;
        obj.xStart = obj.x;
        obj.yStart = obj.y;
      } // moveStart

    }, {
      key: "move",
      value: function move(x, y) {
        var obj = this;

        if (obj.mouseDown) {
          // Angles have to be in radians!! Division by 4 is just a relaxation parameter.
          var diffX = Math.PI / 180 * (x - obj.mouseStart[0]) / 4;
          var diffY = Math.PI / 180 * (y - obj.mouseStart[1]) / 4;
          obj.theta = obj.thetaStart + diffX;
          obj.phi = constrainValue(obj.phiStart - diffY, -Math.PI / 2, Math.PI / 2);
        } // if  

      } // move

    }, {
      key: "moveEnd",
      value: function moveEnd() {
        var obj = this;
        obj.mouseDown = false;
      } // moveEnd

    }, {
      key: "incrementNearClippingPlane",
      value: function incrementNearClippingPlane(d) {
        var obj = this;
        obj.nearClippingPlaneDistance = Math.max(1, obj.nearClippingPlaneDistance + d / 10);
      } // cameraChangeDist

    }]);

    return Camera;
  }(); // Camera
  var Camera2D = /*#__PURE__*/function (_Camera) {
    _inherits(Camera2D, _Camera);

    var _super = _createSuper(Camera2D); // The 2D camera has panning instead of changing the camera angle.
    // Collect zoom points for smooth interactions.
    // zoomPointClip = [0,0]
    // k = 1


    function Camera2D() {
      var _this;

      _classCallCheck(this, Camera2D);

      _this = _super.call(this);
      _this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      _this.zoomEvents = [[0, 0, 1]];

      _assertThisInitialized(_this); // obj.zoomPointClip = [0,0]
      // obj.k = 1;


      return _this;
    } // constructor


    _createClass(Camera2D, [{
      key: "move",
      value: function move(x, y, vpp) {
        // Instead of changing the camera pitch/yaw/roll pan the view.
        var obj = this;
        vpp = vpp == undefined ? [1, 1] : vpp;

        if (obj.mouseDown) {
          var diffX = (x - obj.mouseStart[0]) * vpp[0];
          var diffY = (y - obj.mouseStart[1]) * vpp[1]; // Limit the panning?

          obj.x = obj.xStart - diffX;
          obj.y = obj.yStart + diffY;
        } // if  

      } // move

    }, {
      key: "zoom",
      value: function zoom(p, k) {
        var obj = this; // Zoom, but keep the anchor point fixed.

        var dx = p[0];
        var dy = p[1]; // Just update the camera matrix.

        var translateToOrigin = translateMatrix(-dx, -dy, 0);
        var scaleToZoomSpace = scaleMatrix(k, k, 1);
        var translateToZoomSpace = translateMatrix(dx, dy, 0);
        var M = multiplyArrayOfMatrices([translateToZoomSpace, scaleToZoomSpace, translateToOrigin]);
        obj.transform(M);
        obj.zoomEvents.push([dx, dy, k]);
      } // zoom

    }, {
      key: "incrementZoomValue",
      value: function incrementZoomValue(d) {
        this.k += d;
      } // incrementZoomValue

    }, {
      key: "transform",
      value: function transform(M) {
        var obj = this; // Obj.matrix is second input because the last transformation is supposed to be the left-most matrix in the multiplication!!!

        obj.matrix = multiplyArrayOfMatrices([M, obj.matrix]);
      } // tansform

    }]);

    return Camera2D;
  }(Camera); // Camera2D

  function constrainValue(v, a, b) {
    // Constrain value 'v' to a <= v <= b.
    return Math.max(Math.min(v, b), a);
  } // constrainValue

  // The geom annotation view cannot be above the view or it will obstruct interactions!!

  var template$m = "\n<div style=\"position: relative;\">\n  <div class=\"view\" style=\"width:300px; height:200px;\"></div>\n  <div class=\"controls\"></div>\n</div>\n";

  var ViewFrame2D = /*#__PURE__*/function () {
    function ViewFrame2D(gl) {
      _classCallCheck(this, ViewFrame2D);

      var obj = this;
      obj.gl = gl; // Okay, create the whole player here, and then just append it in hte item. The Item should then adjust the size to the player!!

      obj.node = html2element(template$m); // obj.view is a convenience reference that points to the node. Transforms.view is the view transformation matrix.

      obj.view = obj.node.querySelector("div.view"); // Some initial dummy geometry to allow initialisation.

      obj.geometry = {
        domain: {
          x: [0, 1],
          y: [0, 1]
        }
      }; // initial dummy values
      // Transformation matrices.

      obj.transforms = {};
      /*
      Interactivity:
      What should clicking and dragging do? Pan, or adjust camera angle? 
      
      For 2D panning is more useful.
      For 3D adjusting the camera angle is better.
      */

      obj.camera = new Camera2D(); // (e.clientX, e.clientY)

      obj.view.onmousedown = function (e) {
        obj.cameraMoveStart(e);
      };

      obj.view.onmousemove = function (e) {
        obj.cameraMove(e);
      };

      obj.view.onmouseup = function (e) {
        obj.cameraMoveEnd();
      };

      obj.view.onmouseleave = function (e) {
        obj.cameraMoveEnd();
      }; // adding a zoom directly causes the passive event warning to come up in the console, and also stops the wheel event from being properly executed.
      // If the div is empty the event does not occur!


      obj.view.addEventListener("wheel", function (e) {
        e.preventDefault();
        e.stopPropagation();
        obj.cameraZoom(e);
      }, {
        passive: false
      });
    } // constructor

    /* The geometry moving is implemented in 'computeModelMatrix'. User interaction movement is implemented in 'computeViewMatrix'.  */


    _createClass(ViewFrame2D, [{
      key: "computeModelMatrix",
      value: function computeModelMatrix() {
        // The model matrix incorporates the initial scaling and translation to make sure the data fits in view.
        var dom = this.geometry.domain; // First translate left bottom corner to origin, scale so that top right domain corner is at 2,2, and then reposition so that domain is between -1 and 1.

        var k = 2 / Math.max(dom.x[1] - dom.x[0], dom.y[1] - dom.y[0]); // Correct for the aspect ratio of the view element. For now the y domain is rescaled because the example data featured a larger x domain, and the width was kep constant. This can be made adjustable later.

        var kar = (dom.x[1] - dom.x[0]) / (dom.y[1] - dom.y[0]);
        var translateToOrigin = translateMatrix(-dom.x[0], -dom.y[0], 0);
        var scaleToClipSpace = scaleMatrix(k, k * kar, 1);
        var translateToScaleSpace = translateMatrix(-1, -1, 0);
        this.transforms.model = multiplyArrayOfMatrices([translateToScaleSpace, scaleToClipSpace, translateToOrigin]); // model
        // Performance caveat: in real production code it's best not to create new arrays and objects in a loop. This example chooses code clarity over performance.
      } // computeModelMatrix

    }, {
      key: "computeOrthographicMatrix",
      value: function computeOrthographicMatrix() {
        // viewport: left, bottom, width, height
        this.transforms.projection = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      } // computeOrthographicMatrix

    }, {
      key: "computeViewMatrix",
      value: function computeViewMatrix() {
        // Push this all into the camera? And let it track everything on an incremental basis?
        // But te translation is always in the absolute sense. But does it need to be? Maybe it can be incremental also?
        var camera = this.camera;
        /* PANNING
        The translations must also be tracked as incremental changes, as opposed to one change from hte origin to accommodate anchor point zooming. However, panning is a `quasi-continuous' event. Therefore the matrices are only recalculated when the pan stops. The internal camera positions are used to facilitate the transformations during hte movement itself.
        
        Maybe this should be changed? just log all events - this will allow to capture animations.
        */

        var position = translateMatrix(camera.x, camera.y, camera.z);
        /* ZOOMING
        Zooming is done by pointing and scrolling, and the zoom point should remain at the same position. To achieve this the model should first be translated to the origin, then scaled, and finally retranslated back. This ensures that the zoom point retains it's clip space coordinates.
        
        Consecutive zoom events cannot supersede the preceding event - consecutive zooms at different points also incur a translation, which cannot be accounted for in a simple zoom. Therefore the events need to be tracked, and reapplied every time.
        
        The reapplication of many matrices is a bit repetitive. To save on computation an accumulator matrix is defined on the camera, and the event transformations are applied only once, when they occur.
        */
        // Move the matrices to be stored directly, as opposed to being recalculated on-the-go?
        // Inverse the operation for camera movements, because we are actually moving the geometry in the scene, not the camera itself.
        // this.transforms.view = invertMatrix( position );
        // Inverse the operation for camera movements, because we are actually moving the geometry in the scene, not the camera itself.
        // Remember - multiplication is in reverse order!

        this.transforms.view = multiplyArrayOfMatrices([invertMatrix(position), camera.matrix]); // model
      } // computeViewMatrix
      // On the go updates.

    }, {
      key: "update",
      value: function update() {
        var obj = this; // Compute our matrices

        obj.computeModelMatrix();
        obj.computeViewMatrix();
        obj.computeOrthographicMatrix();
      } // update

    }, {
      key: "viewport",
      get: function get() {
        var obj = this; // The viewframe may want to be projected to another frame than the one it was created with. For that reason check here if a secondary view was specified.

        var rect = obj.view.getBoundingClientRect(); // The viewport bottom is measured from the bottom of the screen.

        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        var left = rect.left;
        var bottom = obj.gl.canvas.clientHeight - rect.bottom;
        return [left, bottom, width, height];
      } // get viewport

    }, {
      key: "valuePerPixel",
      get: function get() {
        // The zoom transformation will work in the clip space, which is within [-1,1]. Therefore the range is 2, and independent of hte domain of the data.
        var obj = this;
        var arx = 2 / obj.viewport[2]; // 2/obj.camera.k/obj.viewport[2]; // obj.camera.k*2/obj.viewport[2]; //

        var ary = 2 / obj.viewport[3]; // 2/obj.camera.k/obj.viewport[3]; // obj.camera.k*2/obj.viewport[3];

        return [arx, ary];
      } // get aspectRatio
      // Camera

    }, {
      key: "cameraMoveStart",
      value: function cameraMoveStart(e) {
        var camera = this.camera;
        camera.moveStart(e.clientX, e.clientY);
      } // startMove

    }, {
      key: "cameraMove",
      value: function cameraMove(e) {
        var camera = this.camera;
        camera.move(e.clientX, e.clientY, this.valuePerPixel);
      } // cameraMove

    }, {
      key: "cameraMoveEnd",
      value: function cameraMoveEnd() {
        var camera = this.camera;
        camera.moveEnd(); // Apply the translate transformation here, and reset the camera position, which will be encoded in the matrix.

        camera.transform(invertMatrix(translateMatrix(camera.x, camera.y, camera.z)));
        camera.x = 0;
        camera.y = 0;
        camera.z = 0;
      } // cameraMoveEnd

    }, {
      key: "cameraZoom",
      value: function cameraZoom(e) {
        var obj = this; // The 2D camera works off of a zoom value, because the perspective does not change. There is no perspective transformation because the data only has x/y, and to make zoom work through perspective a third z value would have to be spliced into the ArrayBuffer data.
        // The first translate can be made using the clip coordinates. The translate back after scaling has to be done using pixels, because the point should stay at the same pixel location. Store both the clip coordinate, and the pixel coordinate.

        var c = obj.pixel2clip([e.clientX, e.clientY]);
        var k = e.deltaY < 0 ? 1.1 : 1 / 1.1; // obj.camera.zoomEvents.push( [ dx, dy, k] );
        // obj.camera.incrementZoomValue(e.deltaY<0 ? 0.1 : -0.1);

        obj.camera.zoom(c, k);
      } // cameraChangeDist
      // Maybe this should be moved into the camera?

    }, {
      key: "pixel2clip",
      value: function pixel2clip(p) {
        /* PIXEL2CLIP is used to establish the zoom anchor point. When zooming the zooming point should stay at the cursor location, and the domain around it should be scaled. The anchor point usage is implemented in the view matrix. The view matrix calculates the transform from the original clip domain every time, therefore the anchor point adjustment needs to be done in the original clip space. 
        	
        obj.transforms.view goes from the original clip space to the current anchor point clip space. We select a new anchor point in the current clip space, and reproject it back to the original clip space. On refresh the entire scaling should be applied there.
        
        When zooming the anchor point is translated to origin, the view scaled, and then the anchor point is translated back. This means that the anchor point should return to the same end clip space coordinates? And since the clip space remains the same this should mean the same pixel location.
        
        But the anchor point is not equal to the underlying data! So maybe just apply all the transformations back to find hte data point, and then apply the transformation to the clip space?
        */
        // Pixel values can be obtained from the event. Convert the pixel value to the clip space values.
        var obj = this;
        var rect = obj.view.getBoundingClientRect(); // Clicked point within the viewport, in terms of pixels.

        var x_px = p[0] - rect.left;
        var y_px = p[1] - rect.top; // Convert to current clip coordinates. Camera.x is in data coordinates.

        var x_clip = 2 * (x_px / (rect.right - rect.left)) - 1;
        var y_clip = -2 * (y_px / (rect.bottom - rect.top)) + 1;
        return [x_clip, y_clip];
      } // pixel2clip
      // When finding the return transformation I'm figuring out what the translation of the left lower corner should be to keep a particular point at the same pixel location.
      // But the model matrix converts from the data domain to hte clip domain.

    }, {
      key: "title",
      value: function title(label) {
        // Change the title of the player.
        this.node.querySelector("div.label").textContent = label;
      } // title

    }]);

    return ViewFrame2D;
  }(); // ViewFrame2D

  /*
  Should these be split up into a Mesh2D superclass and an UnsteadyMesh2D childclass? The unsteady case is a superclass of hte steady one!


  Mesh2D does the loading of required timestep files, so it should do the memory hanling as well. Maybe just give it a size limit of what it can take up, and it should trim its memory accordingly.
  */
  // Some geometry to initialise the buffers.

  var vertices = [1, -0.99, 1, -1, 0.99, -1]; // vertices
  // clockwise triangles. 

  var indices = [0, 1, 2]; // indices
  // values per vertex

  var values = [0, 0, 0]; // values
  // Initial domain.

  var initdomain = {
    x: [-1, 1],
    y: [-1, 1],
    v: [0, 1],
    t: [0, 1]
  };

  var Mesh2D = /*#__PURE__*/function () {
    // Initial byte length limit is 1MB
    function Mesh2D(gl, unsteadyMetadataFilename) {
      _classCallCheck(this, Mesh2D);

      this._currentFrameInd = 0;
      this.frameByteLength = 225420;
      this.limitByteLength = Math.pow(10, 7);
      this.domain = initdomain;
      this.timesteps = [];
      var obj = this;
      obj.gl = gl; // obj.vertices = vertices;
      // obj.indices = indices;
      // obj.colors = colors;
      // "In case of glBufferData, the buffer object currently bound to target is used." (https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glBufferData.xhtml)
      // Size of the data used by each vertex is selected in 'MeshRenderer.updateAttributesAndUniforms'. However, that should really be kept with the data specification, so that MeshRenderer doesn't need to change if the data changes. Then the MeshRenderer becomes independent of the dimension of data.

      var verticesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      obj.verticesBuffer = verticesBuffer;
      var valuesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(values), gl.STATIC_DRAW);
      obj.valuesBuffer = valuesBuffer;
      var indicesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), gl.STATIC_DRAW);
      obj.indicesBuffer = indicesBuffer;
      obj.indicesLength = indices.length; // If teh index defines which frame to play next, then the timesteps need to be ordered. Maybe it's best to just enforce this by sorting the timesteps when they are loaded.
      // Imagine that some metadata was loaded in.
      // "./data/testmetadata.json"

      performance.now(); // The if wrapper allows the Mesh2D to be initialised errorless  without a valid unsteadyMetadataFilename.

      if (unsteadyMetadataFilename) {
        obj.metadatapromise = fetch(unsteadyMetadataFilename).then(function (res) {
          return res.json();
        });
        obj.metadatapromise.then(function (content) {
          // The domain and timesteps get assigned within the batch promise to make sure outside processes can't access them beforehand?
          obj.domain = content.domain;
          obj.timesteps = content.timesteps; // But all three need to be available at the same time before rendering.

          var indicesPromise = loadBinData(content.indices).then(function (ab) {
            return new Uint32Array(ab);
          });
          var verticesPromise = loadBinData(content.vertices).then(function (ab) {
            return new Float32Array(ab);
          });
          /* The values should be loaded in separately from the vertices and indices.
          
          Do we just loop through some timesteps and make the promises. However, the data size restrictions should be maintained at all times! The data loading function should keep that in mind.
          */

          obj.currentFrameInd = 0;
          var valuesPromise = obj.timesteps[obj.currentFrameInd].valuesPromise.then(function (ui8) {
            return Float32Array.from(ui8);
          });
          Promise.all([indicesPromise, verticesPromise, valuesPromise]).then(function (d) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, d[0], gl.STATIC_DRAW);
            obj.indicesLength = d[0].length;
            gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, d[1], gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, valuesBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, d[2], gl.STATIC_DRAW); // console.log("time to draw: ",  performance.now() - t0, "[ms]");
          }); // then
        }); // fetch
      } // if

    } // constructor
    // The 'values' are stored as a 'scaled uint8 array' to save memory. The values are retransformed back into the original domain on the GPU by mapping them from [0,255] to 'currentUintRange', which is obtained from the metadata file of this unsteady simulation.
    // The MeshRenderer2D looks at the domain to determine what the full value domain of this small multiple will be. It looks at the c to determine the uint compression domain.
    // Domain has to be overwritten when the actual data is loaded. Afterwards, only the 'c' property should change with the timesteps. By changing the global color value ranges the colorbar can be adjusted by the user.]


    _createClass(Mesh2D, [{
      key: "currentUintRange",
      get: function get() {
        // This used to be in domain under 'c', but was moved here as it will change as the frames change.
        var obj = this;
        return obj.timesteps.length > 0 ? obj.timesteps[obj.currentFrameInd].c_uint : [0, 1]; // return [871, 977]
      } // currentUintRange

    }, {
      key: "currentTime",
      get: function get() {
        // Get the time of the current frame as a fraction of the total time span available.
        var obj = this;
        return obj.timesteps[obj.currentFrameInd].t;
      } // currentTimestep

    }, {
      key: "memoryUsed",
      get: function get() {
        // This is currently only the memory the values files take up.
        var obj = this;
        var memory = 0;
        obj.timesteps.forEach(function (t) {
          if (t.byteLength) {
            memory += t.byteLength;
          } // if

        });
        return memory;
      } // memoryUsed
      // There should be two separate methods to pick the current frame. One is by incrementing, and the other is by setting the appropriate time.

    }, {
      key: "incrementCurrentFrame",
      value: function incrementCurrentFrame() {
        // When incrementing past the end of the available time range we loop to the start.
        var obj = this;
        obj.currentFrameInd = (obj.currentFrameInd + 1) % obj.timesteps.length;
      } // incrementCurrentFrame

    }, {
      key: "timestepCurrentFrame",
      value: function timestepCurrentFrame(t) {
        // Different players can start at different times. However, if a dt is passed in to increment the current frame the incrementing can truncate a part of the dt, leading to different players to be at different times. Therefore the actual time is expected. If t is outside of the time range available, the min or max frame indices are returned as appropriate.
        var obj = this; // Find the closest timestep.

        var t_closest = obj.timesteps.reduce(function (closest, timestep) {
          return Math.abs(closest.t - t) < Math.abs(timestep.t - t) ? closest : timestep;
        }); // reduce
        // Set the index of the closest timestep as the current frame index

        obj.currentFrameInd = obj.timesteps.indexOf(t_closest);
      } // timestepCurrentFrame
      // This should be reworked into an outside call, because eventually it would be beneficial if the files can be loaded by a library system, and the mesh is only responsible to declare what it would like?

    }, {
      key: "currentFrameInd",
      get: // set currentFrameInd
      function get() {
        return this._currentFrameInd;
      } // get currentFrameInd
      ,
      set: function set(i) {
        // When the index is set automatically manage the data. This will allow the data to be loaded once and kept in memory.
        var obj = this;
        obj._currentFrameInd = i;
        obj.buffering(i);
        obj.updateCurrentFrameBuffer();
      }
    }, {
      key: "updateCurrentFrameBuffer",
      value: function updateCurrentFrameBuffer() {
        // The UnsteadyPlayer will input an actual timestep, as opposed to just increment the frame. This allows simulations with different temporal resolutions to be compared directly. Comparable time frames are selected based on available data.
        // What will be passed in? Just an icrement I guess, and it's up to the user to provide time variables with the same dt and in the same domain.
        var obj = this;
        var gl = obj.gl; // The values from the files were stored as uint8, but the GPU requires them to be float32. The data is converted just before passing it to the buffer.	

        obj.timesteps[obj.currentFrameInd].valuesPromise.then(function (ui8) {
          return Float32Array.from(ui8);
        }).then(function (f32) {
          gl.bindBuffer(gl.ARRAY_BUFFER, obj.valuesBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, f32, gl.STATIC_DRAW);
        });
      } // updateCurrentFrameBuffer

      /*
      MEMORY HANDLING
      
      - DONE: Buffer the required files ASAP
      - DONE: Unload all files when prompted
      - Prevent buffering if off-screen 
          Just unload, and rely that they won't be updated? OR - Manipulate the limit they are allowed to use, and then let the object handle itself.
      - The data requests/buffering should be throttled.
          Throttling is done with `Promise.all' and a loading promise array `queue'. Some coordination between the items still wouldn't hurt.
       
       How will the items that are off-screen handle the initial loading? Just do the initial loading, and afterwards immediately unload them? Or how to do it?
      
      */

    }, {
      key: "buffering",
      value: function buffering(i_closest) {
        // `t' is the current playing time. For only forward playing any timesteps before this one can be unloaded, and any after need to be loaded, up to the limit. For t approaching max t the initial timesteps should start loading to allow the player to loop around.
        var obj = this;
        var n_all = obj.timesteps.length;
        var n_max = Math.floor(obj.limitByteLength / obj.frameByteLength); // Maybe chain the required promises somehow?
        // Maybe it's better to unload all not needed promises at the beginning?? And then focus on the ones that need to be loaded?

        var queue = [];

        var _loop = function _loop(i) {
          var timestep = obj.timesteps[(i_closest + i) % n_all];

          if (i < n_max) {
            // Should hve a value promise, but doesn't yet.
            if (!timestep.valuesPromise) {
              // Instead of fetching the data straight ahead wait for the established queue to free up. In the case of an empty queue just skip the promise?
              if (queue.length > 0) {
                Promise.all(queue).then(function (res) {
                  timestep.valuesPromise = loadBinData(timestep.filename).then(function (ab) {
                    return new Uint8Array(ab);
                  });
                  timestep.valuesPromise.then(function (ui8) {
                    timestep.byteLength = ui8.byteLength;
                  });
                  queue.push(timestep.valuesPromise);
                }); // Promise.all
              } else {
                timestep.valuesPromise = loadBinData(timestep.filename).then(function (ab) {
                  return new Uint8Array(ab);
                });
                timestep.valuesPromise.then(function (ui8) {
                  timestep.byteLength = ui8.byteLength;
                });
                queue.push(timestep.valuesPromise);
              } // if

            } // if

          } else {
            // The promise should be deleted to conserve memory. The byte length must be the same for all of them anyway. However, some allowance will have to be made for the 32 bit arrays - 3 of them in total. The length of the values array in bytes is given by the 32 float arrays along with the assumption of the uint8 encoding anyway.
            delete timestep.valuesPromise;
            delete timestep.byteLength;
          } // if

        };

        for (var i = 0; i < n_all; i++) {
          _loop(i);
        } // for

      } // buffering
      // So the buffering needs to be updated on the go, but all the data should be unloaded when the item is no longer on screen, and then reloaded when it comes back on screen. - Just have an `unload' method? I guess the data loaded in the buffers will persist until changed?

    }, {
      key: "t_buffered",
      get: function get() {
        var obj = this; // Go through the promises and return the lates one in a row that is ready. We know that a promise is ready if the timestep has a byteLength declared.

        var t_current = obj.timesteps[obj.currentFrameInd];
        var t_buffered = t_current ? t_current.t : 0;

        for (var i = obj.currentFrameInd; i < obj.timesteps.length; i++) {
          var timestep = obj.timesteps[i];

          if (timestep.byteLength) {
            t_buffered = timestep.t;
          } else {
            return t_buffered;
          } // if

        } // for


        return t_buffered;
      } // t_buffered

    }, {
      key: "unload",
      value: function unload() {
        var obj = this;
        obj.timesteps.forEach(function (timestep) {
          delete timestep.valuesPromise;
          delete timestep.byteLength;
        }); // forEach
      } // unload

    }]);

    return Mesh2D;
  }(); // Mesh2D

  function loadBinData(filename) {
    return fetch(filename).then(function (res) {
      return res.arrayBuffer();
    });
  } // getBinData

  /*
  {
  	x: [-0.76, 1.01],
  	y: [-0.1, 1],
  	v: [870.4389253677576, 977.0020293037556]
  }
  */

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

  var template$h = "<svg class=\"gman\" width=300 height=200 style=\"display: none; position: absolute; top: 0px;\">\n  <g class=\"annotations\"></g>\n</svg>";
  var toggle = "<button class=\"geometrytoggle\" style=\"border: none; cursor: pointer; border-radius: 4px; background-color: gainsboro;\">\uD83D\uDCD0</button>";

  var PolygonAnnotation = /*#__PURE__*/function () {
    function PolygonAnnotation() {
      _classCallCheck(this, PolygonAnnotation);

      this.transforms = void 0;
      this.points = [];
      this.toggled = false;
      this.external = [];
      this.pointradius = 10;
      var obj = this;
      obj.node = svg2element(template$h);
      obj.togglebutton = html2element(toggle); // Mousedown is used, as mousedown implements the camera movements because onclick is for general dragging.

      obj.node.onmousedown = function (e) {
        e.stopPropagation(); // If several points are availabe, and the last one is the same as the first one then the shape is closed.

        var p = screenPixel2dataDomain(e);

        if (obj.points.length > 1 && obj.points[0].toString() == p.toString()) ; else if (obj.points.length > 1 && distance(dataDomain2screenPixel(obj.points[0]), dataDomain2screenPixel(p)) < Math.pow(obj.pointradius + 2, 2)) {
          obj.points.push(obj.points[0]);
        } else {
          obj.points.push(p);
        } // if


        obj.show();

        function dataDomain2screenPixel(p) {
          var I = obj.dataDomain2clipSpaceMatrix;
          var viewrect = {
            height: obj.node.clientHeight,
            width: obj.node.clientWidth
          }; // obj.node.getBoundingClientRect();

          return dataDomain2svgDomain(I, viewrect, [p[0], p[1], 0, 1]);
        } // dataDomain2screenPixel


        function screenPixel2dataDomain(e) {
          var M = obj.clipSpace2dataDomainMatrix; // Need to account for the overall scaling here. clientWidth/Height are in the original units, whereas the bounding rect is in onscreen units.

          var boundingrect = obj.node.getBoundingClientRect();
          var k = boundingrect.width / obj.node.clientWidth;
          var viewrect = {
            height: obj.node.clientHeight,
            width: obj.node.clientWidth
          }; // obj.node.getBoundingClientRect();

          var p_pixel = [(e.clientX - boundingrect.x) / k, (e.clientY - boundingrect.y) / k];
          var p = multiplyPoint(M, [2 * p_pixel[0] / viewrect.width - 1, 2 * (viewrect.height - p_pixel[1]) / viewrect.height - 1, 0, 1]);
          return p;
        } // screenPixelToDataDomain

      }; // onmousedown
      // Wheel event triggers zooming. Prevent it, or force a redraw.


      obj.node.addEventListener("wheel", function (e) {
        e.stopPropagation();
      }); // The points need to be kept in domain coordinates if panning around needs to be supported. So the transformations need to be assigned to this class.
      // Attach a toggle on the geometry button to either show, or hide the geometry annotation SVG.
      // Onclick is captured and stopped somewhere else, so mousedown is looked for.

      var toggleState = true;
      var pressTimer;

      obj.togglebutton.onmouseup = function () {
        if (toggleState) {
          // Appearance is changed in show/hide, but not the state to prevent previewing toggling it permanently.
          obj.toggled ? obj.hide() : obj.show();
          obj.toggled = !obj.toggled;
        } // if
        // If mousedown was long enough to execute the clearing the mouseup shouldn't change the state.


        clearTimeout(pressTimer);
        toggleState = true;
      }; // onmouseup


      obj.togglebutton.onmousedown = function () {
        pressTimer = setTimeout(function () {
          // After a long-press the points should be cleared.
          obj.clear();
          toggleState = false;
        }, 1000);
      }; // onclick

    } // constructor


    _createClass(PolygonAnnotation, [{
      key: "draw",
      value: function draw(drawdata) {
        // Draw data is in the data domain.
        var obj = this;
        var g = obj.node.querySelector("g.annotations"); // Convert the data into SVG coordinates.
        // Matrix I transforms the domain coordinates to clip coordinates. The clip coordinates have to be further transformed into svg coordinates.

        var I = obj.dataDomain2clipSpaceMatrix;
        var viewrect = {
          height: obj.node.clientHeight,
          width: obj.node.clientWidth
        }; // obj.node.getBoundingClientRect();

        var svgdata = drawdata.map(function (p) {
          return dataDomain2svgDomain(I, viewrect, p);
        });

        if (svgdata.length > 1) {
          var d = svgdata.reduce(function (acc, p, i) {
            var s = " L".concat(p[0], ",").concat(p[1]);

            if (i == 0) {
              s = " M".concat(p[0], ",").concat(p[1]);
            } // if


            return acc + s;
          }, ""); // Determine if a polygon, or just a line should be drawn.

          var fill = "none";

          if (svgdata[0].toString() == svgdata[svgdata.length - 1].toString()) {
            d += " Z";
            fill = "blue";
          } // if
          // This is the path. Circles will also be needed.


          g.appendChild(svg2element("<path d=\"".concat(d, "\" fill=\"").concat(fill, "\" opacity=\"0.3\"></path>")));
          g.appendChild(svg2element("<path d=\"".concat(d, "\" fill=\"none\" stroke=\"white\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>")));
          g.appendChild(svg2element("<path d=\"".concat(d, "\" fill=\"none\" stroke=\"black\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>")));
        } // if
        // Add also points. These would ideally be draggable. And they need to provide the snapping interactions!


        svgdata.forEach(function (d, i) {
          var outline = svg2element("<circle cx=\"".concat(d[0], "\" cy=\"").concat(d[1], "\" r=\"").concat(obj.pointradius, "\" fill=\"black\"></circle>"));
          var inside = svg2element("<circle cx=\"".concat(d[0], "\" cy=\"").concat(d[1], "\" r=\"").concat(obj.pointradius - 4, "\" fill=\"white\"></circle>"));
          g.appendChild(outline);
          g.appendChild(inside);

          if (i == 0) {
            outline.onmouseover = function () {
              outline.setAttribute("r", obj.pointradius + 2);
            };

            inside.onmouseover = function () {
              outline.setAttribute("r", obj.pointradius + 2);
            };

            outline.onmouseout = function () {
              outline.setAttribute("r", obj.pointradius);
            };
          } // if

        }); // forEach
      } // draw

    }, {
      key: "clipSpace2dataDomainMatrix",
      get: function get() {
        var obj = this;
        return multiplyArrayOfMatrices([invertMatrix(obj.transforms.model), invertMatrix(obj.transforms.view), invertMatrix(obj.transforms.projection)]);
      } // clipSpace2dataDomainMatrix

    }, {
      key: "dataDomain2clipSpaceMatrix",
      get: function get() {
        var obj = this;
        return multiplyArrayOfMatrices([obj.transforms.projection, obj.transforms.view, obj.transforms.model]);
      } // dataDomain2clipSpaceMatrix

    }, {
      key: "clearsvg",
      value: function clearsvg() {
        var obj = this;

        if (obj.node.querySelector("g.annotations")) {
          obj.node.querySelector("g.annotations").remove();
          obj.node.appendChild(svg2element("<g class=\"annotations\"></g>"));
        }
      } // clearsvg

    }, {
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.clearsvg();
        obj.points = [];
      } // clear
      // REWORK so that annotation data can be passed in as empty, or undefined. Maybe the transformation can be pushed into draw?
      // Should the user be allowed to toggle on hte annotations in hte comments? And that would toggle them on the SVG? And multiple ones can be toggled at once?

    }, {
      key: "show",
      value: function show() {
        // `annotationdata' must be in the data domain.
        var obj = this; // The SVG needs to be shown before a viewrect is established.

        obj.node.style.display = "";
        obj.togglebutton.style.backgroundColor = "black";
        obj.clearsvg(); // Any outside annotations should be shown.

        obj.external.forEach(function (a) {
          return obj.draw(a);
        }); // Draw the currently drawn points.

        obj.draw(obj.points); // draw
      }
    }, {
      key: "hide",
      value: // show
      function hide() {
        // Everytime the svg is hidden, remove the currently drawn geometry.
        var obj = this;
        obj.clearsvg();
        obj.node.style.display = "none";
        obj.togglebutton.style.backgroundColor = "gainsboro";
      }
    }, {
      key: "submit",
      value: // hide
      function submit() {
        var obj = this;
        obj.hide();
        var p = obj.points;
        obj.clear();
        return p;
      } // submit

    }]);

    return PolygonAnnotation;
  }();
  // An additional transformation is required here to move from clip space to SVG space, instead of the webgl clip space to viewport transformation.
  // Ok - points near the center follow the transforms better, apart from being inverted in y.

  function dataDomain2svgDomain(M, viewrect, p) {
    var pClip = multiplyPoint(M, p);
    return [(pClip[0] + 1) / 2 * viewrect.width, viewrect.height - (pClip[1] + 1) / 2 * viewrect.height];
  } // dataDomain2svgDomain


  function distance(a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
  } // // distance

  // It's advantageous to inherit from ViewFrame2D because the geometry changes on the go - first some dummy geometry is specified, and after the actual geometry is loaded in that just gets automatically used on next FrameAnimationRate step. If the ViewFrame is a module then the UnsteadyPlayer has to monitor when the geometry changes, and update the ViewFrame accordingly.
  // Because it's advantageous to inherit from ViewFrame2D it is also advantageous to create the outside html player wrapper in it. Then the unsteady player only needs to add other modules into it.

  var UnsteadyPlayer2D = /*#__PURE__*/function (_ViewFrame2D) {
    _inherits(UnsteadyPlayer2D, _ViewFrame2D);

    var _super = _createSuper(UnsteadyPlayer2D);

    function UnsteadyPlayer2D(gl, unsteadyMetadataFilename) {
      var _this;

      _classCallCheck(this, UnsteadyPlayer2D); // The superclass requires the viewnode to attach the required events..


      _this = _super.call(this, gl);

      var obj = _assertThisInitialized(_this); // The FPS at which to swap out data.


      obj.fps = 24;
      obj.dt = 1000 / obj.fps;
      obj.timelastdraw = 0; // Actual geometry to be drawn. The time domain will change after the geometry loads in its data.
      // The time domain can only be known AFTER the metadata is loaded. But, after the timesteps are updated the playcontrols need to be updated too. Specifically, the chapters need to be rebuild because they are independent of the actual annotations. But they currently don't need to be! Yes, they do - e.g. padding etc.

      obj.geometry = new Mesh2D(gl, unsteadyMetadataFilename);
      obj.geometry.metadatapromise.then(function (content) {
        obj.ui.t_domain = content.domain.t;
      }); //then
      // What about putting the SVG into the view div? And then the events should bubble up?
      // PolygonAnnotation has a node (svg drawing area), and a toggle button, which needs to be attached to the chapterform. The toggle should be controlled here also..

      obj.geometryannotation = new PolygonAnnotation();
      obj.view.appendChild(obj.geometryannotation.node); //obj.geometryannotation.node.setAttribute("width", 300);
      //obj.geometryannotation.node.setAttribute("height", 200);
      // Add in precofigured UI. The metadata filename identifies this small multiple.

      obj.ui = new PlayControls();
      obj.node.querySelector("div.controls").appendChild(obj.ui.node);
      return _this;
    } // constructor
    // The update runs at requestAnimationFrame rate, so it can b eused to pass the messages between hte modules.


    _createClass(UnsteadyPlayer2D, [{
      key: "update",
      value: function update(now) {
        var obj = this; // Compute the view matrices

        obj.computeModelMatrix();
        obj.computeViewMatrix();
        obj.computeOrthographicMatrix(); // Will the rendering loop have to be redone in order to allow promises to be returned to ensure that the player is ready for the next step?

        if (now > obj.timelastdraw + obj.dt) {
          if (obj.ui.playing) {
            obj.timelastdraw = now;
            obj.incrementTimeStep();
          } else if (obj.ui.skipped) {
            obj.timelastdraw = now;
            obj.incrementTimeStep(0);
            obj.ui.skipped = false;
          } // if

        } // if
        // Try to prevent unnecessary updating.


        if (obj.ui.t_buffered != obj.geometry.t_buffered) {
          obj.ui.t_buffered = obj.geometry.t_buffered;
        } // if
        // Update the annotation transforms. Navigation interactions should not be possible when the geometry annotation pane is open.


        obj.geometryannotation.transforms = obj.transforms;
      } // update

    }, {
      key: "incrementTimeStep",
      value: function incrementTimeStep(dt) {
        /*
        The small multiple should be able to play on its own. In that case it should just update the data 24 times per second.
        
        It should of course support playing several small multiples at once. If the 'dt' for all the simulations are the same then playing several at once just requires an input that will toggle several small multiples on at the same time. If the 'dt' are not the same, then it becomes more difficult because the data can't be loaded by incrementing, and instead a desired time must be passed to the player. Furthermore, the player should support several small multiples to be played at once, but starting from different times. In those cases the player must keep track of the time increment total to ensure all small multiples move by the same amount.
        
        For now the playbar can just play forward correctly, and the t_play can be used to keep track of the actual playing time. The dt is just added on to that time them.
        */
        var obj = this;

        if (dt >= 0) {
          var t_new = obj.ui.t_play + dt;
          obj.geometry.timestepCurrentFrame(t_new);
          obj.ui.t_play = t_new;
        } else {
          obj.geometry.incrementCurrentFrame();
          obj.ui.t_play = obj.geometry.currentTime;
        } // if

      } // incrementTimeStep

    }, {
      key: "isOnScreen",
      get: function get() {
        // Check whether the viewframe is still on hte canvas screen. If it's display has been set to "none" then just return a false. "display: none" will be required when introducing the grouping interfaces.
        var obj = this;
        var isOnScreen = false;

        if (obj.node.style.display != "none") {
          var rect = obj.node.getBoundingClientRect();
          var isOffScreen = rect.bottom < 0 || rect.top > obj.gl.canvas.clientHeight || rect.right < 0 || rect.left > obj.gl.canvas.clientWidth;
          isOnScreen = !isOffScreen;
        } // if


        return isOnScreen;
      } // isOnScreen

    }]);

    return UnsteadyPlayer2D;
  }(ViewFrame2D); // UnsteadyPlayer2D

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

  var Individual = /*#__PURE__*/function (_Item) {
    _inherits(Individual, _Item);

    var _super = _createSuper(Individual);

    function Individual(task, gl) {
      var _this;

      _classCallCheck(this, Individual);

      _this = _super.call(this);

      var obj = _assertThisInitialized(_this); // The task is important!


      obj.task = task;
      obj.node.querySelector("p.label").innerHTML = task.taskId; // There should ever only be one individual, and it should have the option to switch between renderers when ordered to do so. The order of the renderer should come from a slice configuration file. The allowed option renderers still need to be imported here.
      // The MeshRenderer2D should be outside completely? Yes! And there could be a MeshRenderer3D running at the same time, and they just check which of them should perform the render? But then the code that applies to the gl needs to be swapped out everytime? In that case there could be a canvas for 2D and one for 3D if necessary. Would this be needed at all??
      // maybe it's more sensible to let hte renderer create the view node etc?

      obj.renderer = new UnsteadyPlayer2D(gl, task.entropy2d);
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

      c.buttons.insertBefore(ga.togglebutton, c.buttons.firstChild); // Should previewing persist when the user is adding points? In that case the geometry annotation should know about all the active tags. So maybe it should just have a slot to show them? And it should be updated on the go?
      // Here implement the annotation tag previewing.
      // Should this just collectall currently active tags and push them to the polygon annotation for viewing?

      to.preview = function (tag) {
        // If the tag has geometry then the SVG should be turned on. This can only be done with access to the geometry annotation class.
        var activeannotations = to.buttons.filter(function (b) {
          return b.on;
        }).map(function (b) {
          return JSON.parse(b.tag.geometry);
        }); // Tags are stored at least as empty arrays.

        if (tag.geometry != "[]") {
          ga.external = activeannotations.concat([JSON.parse(tag.geometry)]);
          ga.show();
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
        var activeannotations = to.buttons.filter(function (b) {
          return b.on;
        }).map(function (b) {
          return JSON.parse(b.tag.geometry);
        });
        ga.external = activeannotations; // geometryannotation.show expects to see the data in the data domain.

        ga.toggled ? ga.show() : ga.hide(); // Unhighlight all chapters.

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


    _createClass(Individual, [{
      key: "checksize",
      value: function checksize() {
        var obj = this; // Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.

        var rect = obj.node.getBoundingClientRect();

        if (rect.width < 200) ; // if

      } // checksize

    }]);

    return Individual;
  }(Item); // Individual

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
      // Min block positions are not necessarily 0 - the blocks may begin lower down. Just offset from previous.

      var block = 0; // 0

      level.nodes.forEach(function (n) {
        n.block = Math.max(n.block, block);
        block = n.block + 1;
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
            nodeobj.highlightSelect();
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

  /* @license twgl.js 4.19.2 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
  Available via the MIT license.
  see: http://github.com/greggman/twgl.js for details */

  function error(...args) {
    console.error(...args);
  }

  function isShader(gl, t) {
    return typeof WebGLShader !== 'undefined' && t instanceof WebGLShader;
  }

  function isTexture(gl, t) {
    return typeof WebGLTexture !== 'undefined' && t instanceof WebGLTexture;
  }

  /*
   * Copyright 2019 Gregg Tavares
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  /**
   * Gets the gl version as a number
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @return {number} version of gl
   * @private
   */
  //function getVersionAsNumber(gl) {
  //  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
  //}

  /**
   * Check if context is WebGL 2.0
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext
   * @return {bool} true if it's WebGL 2.0
   * @memberOf module:twgl
   */
  function isWebGL2(gl) {
    // This is the correct check but it's slow
    //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
    // This might also be the correct check but I'm assuming it's slow-ish
    // return gl instanceof WebGL2RenderingContext;
    return !!gl.texStorage2D;
  }

  /**
   * Gets a string for WebGL enum
   *
   * Note: Several enums are the same. Without more
   * context (which function) it's impossible to always
   * give the correct enum. As it is, for matching values
   * it gives all enums. Checking the WebGL2RenderingContext
   * that means
   *
   *      0     = ZERO | POINT | NONE | NO_ERROR
   *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
   *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
   *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
   *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
   *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
   *
   * It's also not useful for bits really unless you pass in individual bits.
   * In other words
   *
   *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
   *     twgl.glEnumToString(gl, bits);  // not going to work
   *
   * Note that some enums only exist on extensions. If you
   * want them to show up you need to pass the extension at least
   * once. For example
   *
   *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
   *     if (ext) {
   *        twgl.glEnumToString(ext, 0);  // just prime the function
   *
   *        ..later..
   *
   *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
   *        console.log(twgl.glEnumToString(gl, internalFormat));
   *
   * Notice I didn't have to pass the extension the second time. This means
   * you can have place that generically gets an enum for texture formats for example.
   * and as long as you primed the function with the extensions
   *
   * If you're using `twgl.addExtensionsToContext` to enable your extensions
   * then twgl will automatically get the extension's enums.
   *
   * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
   * @param {number} value the value of the enum you want to look up.
   * @return {string} enum string or hex value
   * @memberOf module:twgl
   * @function glEnumToString
   */
  const glEnumToString = (function() {
    const haveEnumsForType = {};
    const enums = {};

    function addEnums(gl) {
      const type = gl.constructor.name;
      if (!haveEnumsForType[type]) {
        for (const key in gl) {
          if (typeof gl[key] === 'number') {
            const existing = enums[gl[key]];
            enums[gl[key]] = existing ? `${existing} | ${key}` : key;
          }
        }
        haveEnumsForType[type] = true;
      }
    }

    return function glEnumToString(gl, value) {
      addEnums(gl);
      return enums[value] || (typeof value === 'number' ? `0x${value.toString(16)}` : value);
    };
  }());

  /*
   * Copyright 2019 Gregg Tavares
   *
   * Permission is hereby granted, free of charge, to any person obtaining a
   * copy of this software and associated documentation files (the "Software"),
   * to deal in the Software without restriction, including without limitation
   * the rights to use, copy, modify, merge, publish, distribute, sublicense,
   * and/or sell copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
   * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  /**
   * Low level shader program related functions
   *
   * You should generally not need to use these functions. They are provided
   * for those cases where you're doing something out of the ordinary
   * and you need lower level access.
   *
   * For backward compatibility they are available at both `twgl.programs` and `twgl`
   * itself
   *
   * See {@link module:twgl} for core functions
   *
   * @module twgl/programs
   */

  const error$1 = error;
  function getElementById(id) {
    return (typeof document !== 'undefined' && document.getElementById)
        ? document.getElementById(id)
        : null;
  }

  const TEXTURE0                       = 0x84c0;

  const ARRAY_BUFFER$1                   = 0x8892;

  const COMPILE_STATUS                 = 0x8b81;
  const LINK_STATUS                    = 0x8b82;
  const FRAGMENT_SHADER                = 0x8b30;
  const VERTEX_SHADER                  = 0x8b31;
  const SEPARATE_ATTRIBS               = 0x8c8d;

  const ACTIVE_UNIFORMS                = 0x8b86;
  const ACTIVE_ATTRIBUTES              = 0x8b89;
  const TRANSFORM_FEEDBACK_VARYINGS    = 0x8c83;
  const ACTIVE_UNIFORM_BLOCKS          = 0x8a36;
  const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER   = 0x8a44;
  const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
  const UNIFORM_BLOCK_DATA_SIZE                     = 0x8a40;
  const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES        = 0x8a43;

  const FLOAT$3                         = 0x1406;
  const FLOAT_VEC2                    = 0x8B50;
  const FLOAT_VEC3                    = 0x8B51;
  const FLOAT_VEC4                    = 0x8B52;
  const INT$3                           = 0x1404;
  const INT_VEC2                      = 0x8B53;
  const INT_VEC3                      = 0x8B54;
  const INT_VEC4                      = 0x8B55;
  const BOOL                          = 0x8B56;
  const BOOL_VEC2                     = 0x8B57;
  const BOOL_VEC3                     = 0x8B58;
  const BOOL_VEC4                     = 0x8B59;
  const FLOAT_MAT2                    = 0x8B5A;
  const FLOAT_MAT3                    = 0x8B5B;
  const FLOAT_MAT4                    = 0x8B5C;
  const SAMPLER_2D                    = 0x8B5E;
  const SAMPLER_CUBE                  = 0x8B60;
  const SAMPLER_3D                    = 0x8B5F;
  const SAMPLER_2D_SHADOW             = 0x8B62;
  const FLOAT_MAT2x3                  = 0x8B65;
  const FLOAT_MAT2x4                  = 0x8B66;
  const FLOAT_MAT3x2                  = 0x8B67;
  const FLOAT_MAT3x4                  = 0x8B68;
  const FLOAT_MAT4x2                  = 0x8B69;
  const FLOAT_MAT4x3                  = 0x8B6A;
  const SAMPLER_2D_ARRAY              = 0x8DC1;
  const SAMPLER_2D_ARRAY_SHADOW       = 0x8DC4;
  const SAMPLER_CUBE_SHADOW           = 0x8DC5;
  const UNSIGNED_INT$3                  = 0x1405;
  const UNSIGNED_INT_VEC2             = 0x8DC6;
  const UNSIGNED_INT_VEC3             = 0x8DC7;
  const UNSIGNED_INT_VEC4             = 0x8DC8;
  const INT_SAMPLER_2D                = 0x8DCA;
  const INT_SAMPLER_3D                = 0x8DCB;
  const INT_SAMPLER_CUBE              = 0x8DCC;
  const INT_SAMPLER_2D_ARRAY          = 0x8DCF;
  const UNSIGNED_INT_SAMPLER_2D       = 0x8DD2;
  const UNSIGNED_INT_SAMPLER_3D       = 0x8DD3;
  const UNSIGNED_INT_SAMPLER_CUBE     = 0x8DD4;
  const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;

  const TEXTURE_2D$1                    = 0x0DE1;
  const TEXTURE_CUBE_MAP$1              = 0x8513;
  const TEXTURE_3D$1                    = 0x806F;
  const TEXTURE_2D_ARRAY$1              = 0x8C1A;

  const typeMap = {};

  /**
   * Returns the corresponding bind point for a given sampler type
   */
  function getBindPointForSamplerType(gl, type) {
    return typeMap[type].bindPoint;
  }

  // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
  // this code could be a lot smaller but that is sadly really slow (T_T)

  function floatSetter(gl, location) {
    return function(v) {
      gl.uniform1f(location, v);
    };
  }

  function floatArraySetter(gl, location) {
    return function(v) {
      gl.uniform1fv(location, v);
    };
  }

  function floatVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2fv(location, v);
    };
  }

  function floatVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3fv(location, v);
    };
  }

  function floatVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4fv(location, v);
    };
  }

  function intSetter(gl, location) {
    return function(v) {
      gl.uniform1i(location, v);
    };
  }

  function intArraySetter(gl, location) {
    return function(v) {
      gl.uniform1iv(location, v);
    };
  }

  function intVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2iv(location, v);
    };
  }

  function intVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3iv(location, v);
    };
  }

  function intVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4iv(location, v);
    };
  }

  function uintSetter(gl, location) {
    return function(v) {
      gl.uniform1ui(location, v);
    };
  }

  function uintArraySetter(gl, location) {
    return function(v) {
      gl.uniform1uiv(location, v);
    };
  }

  function uintVec2Setter(gl, location) {
    return function(v) {
      gl.uniform2uiv(location, v);
    };
  }

  function uintVec3Setter(gl, location) {
    return function(v) {
      gl.uniform3uiv(location, v);
    };
  }

  function uintVec4Setter(gl, location) {
    return function(v) {
      gl.uniform4uiv(location, v);
    };
  }

  function floatMat2Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2fv(location, false, v);
    };
  }

  function floatMat3Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3fv(location, false, v);
    };
  }

  function floatMat4Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4fv(location, false, v);
    };
  }

  function floatMat23Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2x3fv(location, false, v);
    };
  }

  function floatMat32Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3x2fv(location, false, v);
    };
  }

  function floatMat24Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix2x4fv(location, false, v);
    };
  }

  function floatMat42Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4x2fv(location, false, v);
    };
  }

  function floatMat34Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix3x4fv(location, false, v);
    };
  }

  function floatMat43Setter(gl, location) {
    return function(v) {
      gl.uniformMatrix4x3fv(location, false, v);
    };
  }

  function samplerSetter(gl, type, unit, location) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    return isWebGL2(gl) ? function(textureOrPair) {
      let texture;
      let sampler;
      if (isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl.uniform1i(location, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
      gl.bindSampler(unit, sampler);
    } : function(texture) {
      gl.uniform1i(location, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
    };
  }

  function samplerArraySetter(gl, type, unit, location, size) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    const units = new Int32Array(size);
    for (let ii = 0; ii < size; ++ii) {
      units[ii] = unit + ii;
    }

    return isWebGL2(gl) ? function(textures) {
      gl.uniform1iv(location, units);
      textures.forEach(function(textureOrPair, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        let texture;
        let sampler;
        if (isTexture(gl, textureOrPair)) {
          texture = textureOrPair;
          sampler = null;
        } else {
          texture = textureOrPair.texture;
          sampler = textureOrPair.sampler;
        }
        gl.bindSampler(unit, sampler);
        gl.bindTexture(bindPoint, texture);
      });
    } : function(textures) {
      gl.uniform1iv(location, units);
      textures.forEach(function(texture, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        gl.bindTexture(bindPoint, texture);
      });
    };
  }

  typeMap[FLOAT$3]                         = { Type: Float32Array, size:  4, setter: floatSetter,      arraySetter: floatArraySetter, };
  typeMap[FLOAT_VEC2]                    = { Type: Float32Array, size:  8, setter: floatVec2Setter,  };
  typeMap[FLOAT_VEC3]                    = { Type: Float32Array, size: 12, setter: floatVec3Setter,  };
  typeMap[FLOAT_VEC4]                    = { Type: Float32Array, size: 16, setter: floatVec4Setter,  };
  typeMap[INT$3]                           = { Type: Int32Array,   size:  4, setter: intSetter,        arraySetter: intArraySetter, };
  typeMap[INT_VEC2]                      = { Type: Int32Array,   size:  8, setter: intVec2Setter,    };
  typeMap[INT_VEC3]                      = { Type: Int32Array,   size: 12, setter: intVec3Setter,    };
  typeMap[INT_VEC4]                      = { Type: Int32Array,   size: 16, setter: intVec4Setter,    };
  typeMap[UNSIGNED_INT$3]                  = { Type: Uint32Array,  size:  4, setter: uintSetter,       arraySetter: uintArraySetter, };
  typeMap[UNSIGNED_INT_VEC2]             = { Type: Uint32Array,  size:  8, setter: uintVec2Setter,   };
  typeMap[UNSIGNED_INT_VEC3]             = { Type: Uint32Array,  size: 12, setter: uintVec3Setter,   };
  typeMap[UNSIGNED_INT_VEC4]             = { Type: Uint32Array,  size: 16, setter: uintVec4Setter,   };
  typeMap[BOOL]                          = { Type: Uint32Array,  size:  4, setter: intSetter,        arraySetter: intArraySetter, };
  typeMap[BOOL_VEC2]                     = { Type: Uint32Array,  size:  8, setter: intVec2Setter,    };
  typeMap[BOOL_VEC3]                     = { Type: Uint32Array,  size: 12, setter: intVec3Setter,    };
  typeMap[BOOL_VEC4]                     = { Type: Uint32Array,  size: 16, setter: intVec4Setter,    };
  typeMap[FLOAT_MAT2]                    = { Type: Float32Array, size: 16, setter: floatMat2Setter,  };
  typeMap[FLOAT_MAT3]                    = { Type: Float32Array, size: 36, setter: floatMat3Setter,  };
  typeMap[FLOAT_MAT4]                    = { Type: Float32Array, size: 64, setter: floatMat4Setter,  };
  typeMap[FLOAT_MAT2x3]                  = { Type: Float32Array, size: 24, setter: floatMat23Setter, };
  typeMap[FLOAT_MAT2x4]                  = { Type: Float32Array, size: 32, setter: floatMat24Setter, };
  typeMap[FLOAT_MAT3x2]                  = { Type: Float32Array, size: 24, setter: floatMat32Setter, };
  typeMap[FLOAT_MAT3x4]                  = { Type: Float32Array, size: 48, setter: floatMat34Setter, };
  typeMap[FLOAT_MAT4x2]                  = { Type: Float32Array, size: 32, setter: floatMat42Setter, };
  typeMap[FLOAT_MAT4x3]                  = { Type: Float32Array, size: 48, setter: floatMat43Setter, };
  typeMap[SAMPLER_2D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[SAMPLER_CUBE]                  = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[SAMPLER_3D]                    = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[SAMPLER_2D_SHADOW]             = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[SAMPLER_2D_ARRAY]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[SAMPLER_2D_ARRAY_SHADOW]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[SAMPLER_CUBE_SHADOW]           = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[INT_SAMPLER_2D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[INT_SAMPLER_3D]                = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[INT_SAMPLER_CUBE]              = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[INT_SAMPLER_2D_ARRAY]          = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };
  typeMap[UNSIGNED_INT_SAMPLER_2D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1,       };
  typeMap[UNSIGNED_INT_SAMPLER_3D]       = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D$1,       };
  typeMap[UNSIGNED_INT_SAMPLER_CUBE]     = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP$1, };
  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null,         size:  0, setter: samplerSetter,    arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY$1, };

  function floatAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        switch (b.value.length) {
          case 4:
            gl.vertexAttrib4fv(index, b.value);
            break;
          case 3:
            gl.vertexAttrib3fv(index, b.value);
            break;
          case 2:
            gl.vertexAttrib2fv(index, b.value);
            break;
          case 1:
            gl.vertexAttrib1fv(index, b.value);
            break;
          default:
            throw new Error('the length of a float constant value must be between 1 and 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribPointer(
            index, b.numComponents || b.size, b.type || FLOAT$3, b.normalize || false, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function intAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4iv(index, b.value);
        } else {
          throw new Error('The length of an integer constant value must be 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
            index, b.numComponents || b.size, b.type || INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function uintAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4uiv(index, b.value);
        } else {
          throw new Error('The length of an unsigned integer constant value must be 4!');
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
            index, b.numComponents || b.size, b.type || UNSIGNED_INT$3, b.stride || 0, b.offset || 0);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index, b.divisor);
        }
      }
    };
  }

  function matAttribSetter(gl, index, typeInfo) {
    const defaultSize = typeInfo.size;
    const count = typeInfo.count;

    return function(b) {
      gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
      const numComponents = b.size || b.numComponents || defaultSize;
      const size = numComponents / count;
      const type = b.type || FLOAT$3;
      const typeInfo = typeMap[type];
      const stride = typeInfo.size * numComponents;
      const normalize = b.normalize || false;
      const offset = b.offset || 0;
      const rowOffset = stride / count;
      for (let i = 0; i < count; ++i) {
        gl.enableVertexAttribArray(index + i);
        gl.vertexAttribPointer(
            index + i, size, type, normalize, stride, offset + rowOffset * i);
        if (b.divisor !== undefined) {
          gl.vertexAttribDivisor(index + i, b.divisor);
        }
      }
    };
  }



  const attrTypeMap = {};
  attrTypeMap[FLOAT$3]             = { size:  4, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC2]        = { size:  8, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC3]        = { size: 12, setter: floatAttribSetter, };
  attrTypeMap[FLOAT_VEC4]        = { size: 16, setter: floatAttribSetter, };
  attrTypeMap[INT$3]               = { size:  4, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC2]          = { size:  8, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC3]          = { size: 12, setter: intAttribSetter,   };
  attrTypeMap[INT_VEC4]          = { size: 16, setter: intAttribSetter,   };
  attrTypeMap[UNSIGNED_INT$3]      = { size:  4, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC2] = { size:  8, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: uintAttribSetter,  };
  attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: uintAttribSetter,  };
  attrTypeMap[BOOL]              = { size:  4, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC2]         = { size:  8, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC3]         = { size: 12, setter: intAttribSetter,   };
  attrTypeMap[BOOL_VEC4]         = { size: 16, setter: intAttribSetter,   };
  attrTypeMap[FLOAT_MAT2]        = { size:  4, setter: matAttribSetter,   count: 2, };
  attrTypeMap[FLOAT_MAT3]        = { size:  9, setter: matAttribSetter,   count: 3, };
  attrTypeMap[FLOAT_MAT4]        = { size: 16, setter: matAttribSetter,   count: 4, };

  const errorRE = /ERROR:\s*\d+:(\d+)/gi;
  function addLineNumbersWithError(src, log = '', lineOffset = 0) {
    // Note: Error message formats are not defined by any spec so this may or may not work.
    const matches = [...log.matchAll(errorRE)];
    const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
      const lineNo = parseInt(m[1]);
      const next = matches[ndx + 1];
      const end = next ? next.index : log.length;
      const msg = log.substring(m.index, end);
      return [lineNo - 1, msg];
    }));
    return src.split('\n').map((line, lineNo) => {
      const err = lineNoToErrorMap.get(lineNo);
      return `${lineNo + 1 + lineOffset}: ${line}${err ? `\n\n^^^ ${err}` : ''}`;
    }).join('\n');
  }

  /**
   * Error Callback
   * @callback ErrorCallback
   * @param {string} msg error message.
   * @param {number} [lineOffset] amount to add to line number
   * @memberOf module:twgl
   */

  const spaceRE = /^[ \t]*\n/;

  /**
   * Loads a shader.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {string} shaderSource The shader source.
   * @param {number} shaderType The type of shader.
   * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
   * @return {WebGLShader} The created shader.
   * @private
   */
  function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
    const errFn = opt_errorCallback || error$1;
    // Create the shader object
    const shader = gl.createShader(shaderType);

    // Remove the first end of line because WebGL 2.0 requires
    // #version 300 es
    // as the first line. No whitespace allowed before that line
    // so
    //
    // <script>
    // #version 300 es
    // </script>
    //
    // Has one line before it which is invalid according to GLSL ES 3.00
    //
    let lineOffset = 0;
    if (spaceRE.test(shaderSource)) {
      lineOffset = 1;
      shaderSource = shaderSource.replace(spaceRE, '');
    }

    // Load the shader source
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check the compile status
    const compiled = gl.getShaderParameter(shader, COMPILE_STATUS);
    if (!compiled) {
      // Something went wrong during compilation; get the error
      const lastError = gl.getShaderInfoLog(shader);
      errFn(`${addLineNumbersWithError(shaderSource, lastError, lineOffset)}\nError compiling ${glEnumToString(gl, shaderType)}: ${lastError}`);
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  /**
   * @typedef {Object} ProgramOptions
   * @property {function(string)} [errorCallback] callback for errors
   * @property {Object.<string,number>} [attribLocations] a attribute name to location map
   * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
   *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
   *   you can pass an array of names.
   * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
   * @memberOf module:twgl
   */

  /**
   * Gets the program options based on all these optional arguments
   * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
   * @private
   */
  function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
    let transformFeedbackVaryings;
    let transformFeedbackMode;
    if (typeof opt_locations === 'function') {
      opt_errorCallback = opt_locations;
      opt_locations = undefined;
    }
    if (typeof opt_attribs === 'function') {
      opt_errorCallback = opt_attribs;
      opt_attribs = undefined;
    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
      // If we have an errorCallback we can just return this object
      // Otherwise we need to construct one with default errorCallback
      if (opt_attribs.errorCallback) {
        return opt_attribs;
      }
      const opt = opt_attribs;
      opt_errorCallback = opt.errorCallback;
      opt_attribs = opt.attribLocations;
      transformFeedbackVaryings = opt.transformFeedbackVaryings;
      transformFeedbackMode = opt.transformFeedbackMode;
    }

    const options = {
      errorCallback: opt_errorCallback || error$1,
      transformFeedbackVaryings: transformFeedbackVaryings,
      transformFeedbackMode: transformFeedbackMode,
    };

    if (opt_attribs) {
      let attribLocations = {};
      if (Array.isArray(opt_attribs)) {
        opt_attribs.forEach(function(attrib,  ndx) {
          attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
        });
      } else {
        attribLocations = opt_attribs;
      }
      options.attribLocations = attribLocations;
    }

    return options;
  }

  const defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER",
  ];

  function getShaderTypeFromScriptType(gl, scriptType) {
    if (scriptType.indexOf("frag") >= 0) {
      return FRAGMENT_SHADER;
    } else if (scriptType.indexOf("vert") >= 0) {
      return VERTEX_SHADER;
    }
    return undefined;
  }

  function deleteShaders(gl, shaders) {
    shaders.forEach(function(shader) {
      gl.deleteShader(shader);
    });
  }

  /**
   * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
   * program and calls useProgram.
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgram(gl, [vs, fs], options);
   *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram?} the created program or null if error.
   * @memberOf module:twgl/programs
   */
  function createProgram(
      gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const realShaders = [];
    const newShaders = [];
    for (let ndx = 0; ndx < shaders.length; ++ndx) {
      let shader = shaders[ndx];
      if (typeof (shader) === 'string') {
        const elem = getElementById(shader);
        const src = elem ? elem.text : shader;
        let type = gl[defaultShaderType[ndx]];
        if (elem && elem.type) {
          type = getShaderTypeFromScriptType(gl, elem.type) || type;
        }
        shader = loadShader(gl, src, type, progOptions.errorCallback);
        newShaders.push(shader);
      }
      if (isShader(gl, shader)) {
        realShaders.push(shader);
      }
    }

    if (realShaders.length !== shaders.length) {
      progOptions.errorCallback("not enough shaders for program");
      deleteShaders(gl, newShaders);
      return null;
    }

    const program = gl.createProgram();
    realShaders.forEach(function(shader) {
      gl.attachShader(program, shader);
    });
    if (progOptions.attribLocations) {
      Object.keys(progOptions.attribLocations).forEach(function(attrib) {
        gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
      });
    }
    let varyings = progOptions.transformFeedbackVaryings;
    if (varyings) {
      if (varyings.attribs) {
        varyings = varyings.attribs;
      }
      if (!Array.isArray(varyings)) {
        varyings = Object.keys(varyings);
      }
      gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
    }
    gl.linkProgram(program);

    // Check the link status
    const linked = gl.getProgramParameter(program, LINK_STATUS);
    if (!linked) {
      // something went wrong with the link
      const lastError = gl.getProgramInfoLog(program);
      progOptions.errorCallback(`${
      realShaders.map(shader => {
        const src = addLineNumbersWithError(gl.getShaderSource(shader), '', 0);
        const type = gl.getShaderParameter(shader, gl.SHADER_TYPE);
        return `${glEnumToString(gl, type)}\n${src}}`;
      }).join('\n')
    }\nError in program linking: ${lastError}`);

      gl.deleteProgram(program);
      deleteShaders(gl, newShaders);
      return null;
    }
    return program;
  }

  /**
   * Creates a program from 2 sources.
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSources Array of sources for the
   *        shaders. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {WebGLProgram?} the created program or null if error.
   * @memberOf module:twgl/programs
   */
  function createProgramFromSources(
      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaders = [];
    for (let ii = 0; ii < shaderSources.length; ++ii) {
      const shader = loadShader(
          gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);
      if (!shader) {
        return null;
      }
      shaders.push(shader);
    }
    return createProgram(gl, shaders, progOptions);
  }

  /**
   * Returns true if attribute/uniform is a reserved/built in
   *
   * It makes no sense to me why GL returns these because it's
   * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
   * with names that start with `gl_` (and `webgl_` in WebGL)
   *
   * I can only assume they are there because they might count
   * when computing the number of uniforms/attributes used when you want to
   * know if you are near the limit. That doesn't really make sense
   * to me but the fact that these get returned are in the spec.
   *
   * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
   *    `gl.getActiveAttrib`.
   * @return {bool} true if it's reserved
   * @private
   */
  function isBuiltIn(info) {
    const name = info.name;
    return name.startsWith("gl_") || name.startsWith("webgl_");
  }

  /**
   * Creates setter functions for all uniforms of a shader
   * program.
   *
   * @see {@link module:twgl.setUniforms}
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program the program to create setters for.
   * @returns {Object.<string, function>} an object with a setter by name for each uniform
   * @memberOf module:twgl/programs
   */
  function createUniformSetters(gl, program) {
    let textureUnit = 0;

    /**
     * Creates a setter for a uniform of the given program with it's
     * location embedded in the setter.
     * @param {WebGLProgram} program
     * @param {WebGLUniformInfo} uniformInfo
     * @returns {function} the created setter.
     */
    function createUniformSetter(program, uniformInfo, location) {
      const isArray = uniformInfo.name.endsWith("[0]");
      const type = uniformInfo.type;
      const typeInfo = typeMap[type];
      if (!typeInfo) {
        throw new Error(`unknown type: 0x${type.toString(16)}`); // we should never get here.
      }
      let setter;
      if (typeInfo.bindPoint) {
        // it's a sampler
        const unit = textureUnit;
        textureUnit += uniformInfo.size;
        if (isArray) {
          setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
        } else {
          setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
        }
      } else {
        if (typeInfo.arraySetter && isArray) {
          setter = typeInfo.arraySetter(gl, location);
        } else {
          setter = typeInfo.setter(gl, location);
        }
      }
      setter.location = location;
      return setter;
    }

    const uniformSetters = { };
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);

    for (let ii = 0; ii < numUniforms; ++ii) {
      const uniformInfo = gl.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
          continue;
      }
      let name = uniformInfo.name;
      // remove the array suffix.
      if (name.endsWith("[0]")) {
        name = name.substr(0, name.length - 3);
      }
      const location = gl.getUniformLocation(program, uniformInfo.name);
      // the uniform will have no location if it's in a uniform block
      if (location) {
        uniformSetters[name] = createUniformSetter(program, uniformInfo, location);
      }
    }
    return uniformSetters;
  }

  /**
   * @typedef {Object} TransformFeedbackInfo
   * @property {number} index index of transform feedback
   * @property {number} type GL type
   * @property {number} size 1 - 4
   * @memberOf module:twgl
   */

  /**
   * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program an existing WebGLProgram.
   * @return {Object<string, module:twgl.TransformFeedbackInfo>}
   * @memberOf module:twgl
   */
  function createTransformFeedbackInfo(gl, program) {
    const info = {};
    const numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
    for (let ii = 0; ii < numVaryings; ++ii) {
      const varying = gl.getTransformFeedbackVarying(program, ii);
      info[varying.name] = {
        index: ii,
        type: varying.type,
        size: varying.size,
      };
    }
    return info;
  }

  /**
   * @typedef {Object} UniformData
   * @property {number} type The WebGL type enum for this uniform
   * @property {number} size The number of elements for this uniform
   * @property {number} blockNdx The block index this uniform appears in
   * @property {number} offset The byte offset in the block for this uniform's value
   * @memberOf module:twgl
   */

  /**
   * The specification for one UniformBlockObject
   *
   * @typedef {Object} BlockSpec
   * @property {number} index The index of the block.
   * @property {number} size The size in bytes needed for the block
   * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
   *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
   * @property {bool} usedByVertexShader Self explanatory
   * @property {bool} usedByFragmentShader Self explanatory
   * @property {bool} used Self explanatory
   * @memberOf module:twgl
   */

  /**
   * A `UniformBlockSpec` represents the data needed to create and bind
   * UniformBlockObjects for a given program
   *
   * @typedef {Object} UniformBlockSpec
   * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
   * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
   * @memberOf module:twgl
   */

  /**
   * Creates a UniformBlockSpec for the given program.
   *
   * A UniformBlockSpec represents the data needed to create and bind
   * UniformBlockObjects
   *
   * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
   * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
   * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
   * @memberOf module:twgl/programs
   */
  function createUniformBlockSpecFromProgram(gl, program) {
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    const uniformData = [];
    const uniformIndices = [];

    for (let ii = 0; ii < numUniforms; ++ii) {
      uniformIndices.push(ii);
      uniformData.push({});
      const uniformInfo = gl.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
        break;
      }
      uniformData[ii].name = uniformInfo.name;
    }

    [
      [ "UNIFORM_TYPE", "type" ],
      [ "UNIFORM_SIZE", "size" ],  // num elements
      [ "UNIFORM_BLOCK_INDEX", "blockNdx" ],
      [ "UNIFORM_OFFSET", "offset", ],
    ].forEach(function(pair) {
      const pname = pair[0];
      const key = pair[1];
      gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
        uniformData[ndx][key] = value;
      });
    });

    const blockSpecs = {};

    const numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
    for (let ii = 0; ii < numUniformBlocks; ++ii) {
      const name = gl.getActiveUniformBlockName(program, ii);
      const blockSpec = {
        index: gl.getUniformBlockIndex(program, name),
        usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
        usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
        size: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_DATA_SIZE),
        uniformIndices: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES),
      };
      blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
      blockSpecs[name] = blockSpec;
    }

    return {
      blockSpecs: blockSpecs,
      uniformData: uniformData,
    };
  }

  /**
   * Creates setter functions for all attributes of a shader
   * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
   *
   * @see {@link module:twgl.setAttributes} for example
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
   * @param {WebGLProgram} program the program to create setters for.
   * @return {Object.<string, function>} an object with a setter for each attribute by name.
   * @memberOf module:twgl/programs
   */
  function createAttributeSetters(gl, program) {
    const attribSetters = {
    };

    const numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);
    for (let ii = 0; ii < numAttribs; ++ii) {
      const attribInfo = gl.getActiveAttrib(program, ii);
      if (isBuiltIn(attribInfo)) {
          continue;
      }
      const index = gl.getAttribLocation(program, attribInfo.name);
      const typeInfo = attrTypeMap[attribInfo.type];
      const setter = typeInfo.setter(gl, index, typeInfo);
      setter.location = index;
      attribSetters[attribInfo.name] = setter;
    }

    return attribSetters;
  }

  /**
   * @typedef {Object} ProgramInfo
   * @property {WebGLProgram} program A shader program
   * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
   * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
   * @property {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
   * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
   * @memberOf module:twgl
   */

  /**
   * Creates a ProgramInfo from an existing program.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {WebGLProgram} program an existing WebGLProgram.
   * @return {module:twgl.ProgramInfo} The created ProgramInfo.
   * @memberOf module:twgl/programs
   */
  function createProgramInfoFromProgram(gl, program) {
    const uniformSetters = createUniformSetters(gl, program);
    const attribSetters = createAttributeSetters(gl, program);
    const programInfo = {
      program: program,
      uniformSetters: uniformSetters,
      attribSetters: attribSetters,
    };

    if (isWebGL2(gl)) {
      programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
      programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
    }

    return programInfo;
  }

  /**
   * Creates a ProgramInfo from 2 sources.
   *
   * A ProgramInfo contains
   *
   *     programInfo = {
   *        program: WebGLProgram,
   *        uniformSetters: object of setters as returned from createUniformSetters,
   *        attribSetters: object of setters as returned from createAttribSetters,
   *     }
   *
   * NOTE: There are 4 signatures for this function
   *
   *     twgl.createProgramInfo(gl, [vs, fs], options);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
   *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
   *
   * @param {WebGLRenderingContext} gl The WebGLRenderingContext
   *        to use.
   * @param {string[]} shaderSources Array of sources for the
   *        shaders or ids. The first is assumed to be the vertex shader,
   *        the second the fragment shader.
   * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
   * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
   * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
   *        on error. If you want something else pass an callback. It's passed an error message.
   * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
   * @memberOf module:twgl/programs
   */
  function createProgramInfo(
      gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    let good = true;
    shaderSources = shaderSources.map(function(source) {
      // Lets assume if there is no \n it's an id
      if (source.indexOf("\n") < 0) {
        const script = getElementById(source);
        if (!script) {
          progOptions.errorCallback("no element with id: " + source);
          good = false;
        } else {
          source = script.text;
        }
      }
      return source;
    });
    if (!good) {
      return null;
    }
    const program = createProgramFromSources(gl, shaderSources, progOptions);
    if (!program) {
      return null;
    }
    return createProgramInfoFromProgram(gl, program);
  }

  var vertshader = "\n//Each point has a position and color\nattribute vec2 position;\nattribute float value;\n\n// The transformation matrices\nuniform mat4 model;\nuniform mat4 view;\nuniform mat4 projection;\n\n// Pass the color attribute down to the fragment shader\nvarying float v_uint_colorval;\n\nvoid main() {\n  \n  // Pass the color down to the fragment shader.\n  v_uint_colorval = value;\n  \n  // Read the multiplication in reverse order, the point is taken from the original model space and moved into world space. It is then projected into clip space as a homogeneous point. Generally the W value will be something other than 1 at the end of it.\n  gl_Position = projection * view * model * vec4( position, 0.0, 1.0 );\n}";
  var fragshader = "\nprecision mediump float;\nvarying float v_uint_colorval;\n\nuniform sampler2D colormap;\nuniform float u_cmin, u_cmax;\nuniform float u_uint_cmin, u_uint_cmax;\n\nvoid main() {\n  gl_FragColor = texture2D(colormap, vec2( ( (v_uint_colorval/255.0*(u_uint_cmax-u_uint_cmin)+u_uint_cmin) - u_cmin)/(u_cmax-u_cmin), 0.5));;\n}"; // A viridis colormap. Values for color channels in frag shader should be [0, 1].

  var cmap = new Uint8Array([68, 1, 84, 255, 71, 19, 101, 255, 72, 36, 117, 255, 70, 52, 128, 255, 65, 68, 135, 255, 59, 82, 139, 255, 53, 95, 141, 255, 47, 108, 142, 255, 42, 120, 142, 255, 37, 132, 142, 255, 33, 145, 140, 255, 30, 156, 137, 255, 34, 168, 132, 255, 47, 180, 124, 255, 68, 191, 112, 255, 94, 201, 98, 255, 122, 209, 81, 255, 155, 217, 60, 255, 189, 223, 38, 255, 223, 227, 24, 255, 253, 231, 37, 255]); // cmap

  var MeshRenderer2D = /*#__PURE__*/function () {
    function MeshRenderer2D(canvas) {
      _classCallCheck(this, MeshRenderer2D);

      var obj = this;
      obj.canvas = canvas;
      obj.canvas.width = window.innerWidth;
      obj.canvas.height = window.innerHeight; // Grab a context and setup a program.

      var gl = canvas.value = canvas.getContext("webgl", {
        antialias: true,
        depth: false
      }); // The extension is needed to allow indices to be uint32.

      gl.getExtension("OES_element_index_uint"); // console.log("can uints be used? ", uints_for_indices)

      obj.webglProgram = setupProgram(gl);
      obj.gl = gl; // The texture represents a solorbar, and stores the color values. It is indexed on a range of 0 - 1. The index is computed in the colorshader.
      // gl.texImage2D( ... , width, height, border, format, type, ArrayBuffer)

      obj.colormapTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, obj.colormapTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 21, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, cmap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); // Collection of plots to draw.

      obj.items = [];
    } // constructor


    _createClass(MeshRenderer2D, [{
      key: "draw",
      value: function draw() {
        var obj = this;
        var gl = obj.gl; // Common current time. This should be changed so that it starts from when the user presses a play. Furthermore the views should be either linked or individual

        var now = performance.now(); // Move the canvas to the right position for scrolling.
        // gl.canvas.style.transform = `translateY(${window.scrollY}px)`;
        // The actual drawing loop.

        obj.items.forEach(function (item) {
          // Check whether the item is visible or not.
          if (obj.isItemVisible(item)) {
            // Update the ViewFrame to calculate new transform matrices. Nothing (camera, model, zoom) moves as a function of time. Time is still passed in to synchronise the player updates.
            item.renderer.update(now); // Update the data going to the GPU

            obj.updateAttributesAndUniforms(item); // Set the rectangle to draw to. Scissor clips, viewport transforms the space. The viewport seems to be doing the scissoring also...

            obj.updateViewport(item.renderer); // Perform the actual draw. gl.UNSIGNED_INT allows teh use of Uint32Array indices, but the 'OES_element_index_uint' extension had to be loaded.

            gl.drawElements(gl.TRIANGLES, item.renderer.geometry.indicesLength, gl.UNSIGNED_INT, 0);
          } // if

        }); // forEach

        requestAnimationFrame(obj.draw.bind(obj));
      } // draw
      // Maybe just keep it as track batch? I.e. the items are always supplied as arrays? But the getters provide different arrays as a result, not the same one.

    }, {
      key: "track",
      value: function track(item) {
        var obj = this;
        obj.items.push(item);
      } // track

    }, {
      key: "updateViewport",
      value: function updateViewport(item) {
        var gl = this.gl;
        gl.viewport.apply(gl, _toConsumableArray(item.viewport));
        gl.scissor.apply(gl, _toConsumableArray(item.viewport));
        gl.clearColor.apply(gl, [0, 0, 0, 0]);
      } // updateViewport
      // Maybe the update could be performed by the item itself. That way both 2D and 3D objects could potentially be drawn alongside. 
      // But the programme declares the variables it expects, so the program would have to be redone also, which means another webgl instance is needed, and thus another canvas.
      // SPLIT BETWEEN TRANSFORMATIONS, DATA, AND COLORSCALE?

    }, {
      key: "updateAttributesAndUniforms",
      value: function updateAttributesAndUniforms(item) {
        // 'item' is a 'ViewFrame' instance. This method needs to update the transformation matrices, which are owned by the 'ViewFrame' instance, as well as the geometry buffers owned by the 'ViewFrame.geometry' instance.
        // 'transforms' should have the 'model', 'projection', and 'view' transform 4x4 matrices that will be used to draw the scene.
        // In addition to that this update also requires the 'position' and 'color' buffers. So the entire geometry is needed here to update gl before drawing. 
        var obj = this;
        var gl = this.gl; // Locations are pointers to the GPU buffers. Transforms are the transformation matrices. Buffers are the geometry arrays.

        var locations = obj.webglProgram.locations;
        var transforms = item.renderer.transforms;
        var geometry = item.renderer.geometry; // Update the transformations.

        gl.uniformMatrix4fv(locations.model, false, new Float32Array(transforms.model));
        gl.uniformMatrix4fv(locations.projection, false, new Float32Array(transforms.projection));
        gl.uniformMatrix4fv(locations.view, false, new Float32Array(transforms.view)); // Set the vertices attribute

        gl.enableVertexAttribArray(locations.position);
        gl.bindBuffer(gl.ARRAY_BUFFER, geometry.verticesBuffer);
        gl.vertexAttribPointer(locations.position, 2, gl.FLOAT, false, 0, 0); // Update the colors attribute

        gl.enableVertexAttribArray(locations.value);
        gl.bindBuffer(gl.ARRAY_BUFFER, geometry.valuesBuffer);
        gl.vertexAttribPointer(locations.value, 1, gl.FLOAT, false, 0, 0); // Update the indices attribute.

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indicesBuffer);
        /* 
        vec2( (v_colorval-u_cmin)/(u_cmax-u_cmin), 0.5)
        
        v_colorval : [0, 255]
        u_cmin : variable min value
        u_cmax : variable max value
        
        First I need to map from [0, 255] to [a,b], then to [0,1]. The first [0,255] represents the frame specific uint encoding. The second encoding allows all the values to be drawn to the correct value across several files. However, the [0, 255] values are pushed to the GPU straight away, and both mappings must occur there.
        */
        // cmin/cmax give the global (for all small multiples) colorbar range.

        gl.uniform1f(locations.cmin, obj.colormapRange[0]); // 0   880

        gl.uniform1f(locations.cmax, obj.colormapRange[1]); // 255   920
        // uint_cmin/uint_cmax give the local (particular small multiple) colorbar range,

        gl.uniform1f(locations.uint_cmin, geometry.currentUintRange[0]); // 0   880

        gl.uniform1f(locations.uint_cmax, geometry.currentUintRange[1]); // 255   920

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, obj.colormapTexture);
        gl.uniform1i(locations.colormap, 0);
      } // updateAttributesAndUniforms
      // This should focus solely on hte view div rectangle!!

    }, {
      key: "isItemVisible",
      value: function isItemVisible(item) {
        // Check whether the current item is visible. (!!!!) Extend later to check whether other items obscure the current item.
        var obj = this;
        /*
        Cases:
         - Item off-screen
         - Item on-screen, but covered
         - Item on-screen, in a group, but     cover
         - Item on-screen, in a group, but not cover
        
        Just rely on the item itself to know whether it should draw or not. Here it's only checked whether the item is covered by something.
        */
        // The idea is to collect all the boundingClientRects, and check if any of the following items overlap it, in which case skip the drawing.
        // The limit is 16 items drawn at once. There can be more items in analysis at the same time, but only 16 drawn at once. This means that if the items overlap, there can be any number of them, as long as they are in maximum 15 piles.
        // It all really depends on the connection speed and the size of the files...

        var rect = item.viewnode.getBoundingClientRect();
        var isCovered = false;

        for (var i = obj.items.indexOf(item) + 1; i < obj.items.length; i++) {
          // Check if the i-th viewFrame covers this one. This is a simple version that skirts the problem of figuring out if a bunch of viewFrames collectively cover this viewFrame.
          // Maybe later on there can just be group interfaces added as a separate attribute, and those can be made to hide the other frames,
          var higherRect = obj.items[i].viewnode.getBoundingClientRect();
          isCovered = isCovered ? true : isRectInHigherRect(rect, higherRect);
        } // for


        return item.renderer.isOnScreen && !isCovered;
      } // isItemVisible

    }, {
      key: "colormapRange",
      get: function get() {
        var obj = this;
        return obj.customColormapRange ? obj.customColormapRange : obj.globalColormapRange;
      } // get colormapRange

    }, {
      key: "globalColormapRange",
      get: function get() {
        var obj = this;
        return obj.items.reduce(function (acc, item) {
          // v is the domain across all the frames of an unsteady simulation instance.
          var v = item.renderer.geometry.domain.v;
          acc[0] = acc[0] > v[0] ? v[0] : acc[0];
          acc[1] = acc[1] < v[1] ? v[1] : acc[1];
          return acc;
        }, [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]);
      } // globalColormapRange

    }]);

    return MeshRenderer2D;
  }(); // MeshRenderer2D

  function isRectInHigherRect(rect, higherRect) {
    // For it to be in hte rect it must be in the x and y range of the rect.
    return higherRect.left <= rect.left && rect.right <= higherRect.right && higherRect.top <= rect.top && rect.bottom <= higherRect.bottom;
  } // isPointInRect


  function setupProgram(gl) {
    // WHAT EXACTLY DOES TWGL DO THAT I CAN'T DO MYSELF?
    // Setup a WebGL program
    var webglProgram = createProgramInfo(gl, [vertshader, fragshader]);
    var program = webglProgram.program;
    gl.useProgram(program); // Save the attribute and uniform locations

    var loc_model = gl.getUniformLocation(program, "model");
    var loc_view = gl.getUniformLocation(program, "view");
    var loc_projection = gl.getUniformLocation(program, "projection");
    var loc_colormap = gl.getUniformLocation(program, "colormap");
    var loc_cmax = gl.getUniformLocation(program, "u_cmax");
    var loc_cmin = gl.getUniformLocation(program, "u_cmin");
    var loc_uint_cmax = gl.getUniformLocation(program, "u_uint_cmax");
    var loc_uint_cmin = gl.getUniformLocation(program, "u_uint_cmin");
    var loc_position = gl.getAttribLocation(program, "position");
    var loc_value = gl.getAttribLocation(program, "value"); // let loc_color = gl.getAttribLocation(program, "color");
    // For 2D triangle meshes culling and depth testing is not needed.
    // gl.enable(gl.CULL_FACE);
    // gl.enable(gl.DEPTH_TEST);
    // Scissor defines the part of canvas to draw to.

    gl.enable(gl.SCISSOR_TEST);
    return {
      locations: {
        model: loc_model,
        view: loc_view,
        projection: loc_projection,
        colormap: loc_colormap,
        cmax: loc_cmax,
        cmin: loc_cmin,
        uint_cmax: loc_uint_cmax,
        uint_cmin: loc_uint_cmin,
        position: loc_position,
        value: loc_value
      },
      program: program
    };
  } // setupProgram

  // author, datetime, tag, taskId, line, area, t
  // Maybe separate annotations for starttime and endtime? And then let the system figure out a close chapter.

  var ids = ["0000", "0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014", "0015"];
  var mtdtprmss = ids.map(function (id) {
    return fetch("./data/".concat(id, "/casemetadata.json")).then(function (res) {
      return res.json();
    }).then(function (json) {
      var a = json;
      a.entropy2d = "./data/".concat(id, "/unsteady_contour2d_meta.json");
      delete a.unsteady_line;
      delete a.unsteady_scatterplot;
      delete a.unsteady_entropy_contour;
      return a;
    });
  }); // map

  var ordinals = ["stage_loading", "flow_coefficient", "eff_isen", "eff_poly", "alpha_rel_stator_in", "alpha_rel_stator_out", "alpha_rel_rotor_in", "alpha_rel_rotor_out", "alpha_stator_in", "alpha_stator_out", "alpha_rotor_in", "alpha_rotor_out", "eff_isen_lost_stator_in", "eff_isen_lost_stator_out", "eff_isen_lost_rotor_in", "eff_isen_lost_rotor_out"];
  var categoricals = [];
  Promise.all(mtdtprmss).then(function (data) {
    // The NavigationManager needs to know the variable types because it needs to collect the spatial correlation data to send to the SpatialCorrelations housed by the MiniMap.
    var workspace = new NavigationManager();
    workspace.ordinals = ordinals;
    workspace.categoricals = categoricals;
    var renderer = new MeshRenderer2D(document.getElementById("canvas"));
    var items = [];

    for (var i = 0; i < data.length; i++) {
      var item = new Individual(data[i], renderer.gl);
      items.push(item); // Temporarilyturn the position: absolute off so we get an initial arrangement.

      item.node.style.position = ""; // Make navigation manager keep track of the item.

      workspace.container.appendChild(item.node);
      workspace.track(item); // Make the MeshRenderer draw it. The mesh renderer provides the gl object, which must be given to the items to initialise the players.
      // Trackbatch? And connect it to the workspace hidden attribute??

      renderer.track(item);
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

    new KnowledgeManager(workspace); // Start with the rendering. Rendering only considers drawing the items it knows about, and it knows nothing of the dynamically created groups by the NavigationManager. As a kludge solution the NavigationManager will superst the items to be considered by the renderer.
    // How should the renderer recognise that it needs to change the set of groups to iterate over?

    renderer.customColormapRange = [1140, 1160];
    renderer.draw(); // Allow NavigationManager to control which items are rendered.

    workspace.updateRenderingItems = function (subsetitems) {
      renderer.items = subsetitems;
    }; // updateRenderingItems


    console.log(items);
  });

}());
//# sourceMappingURL=spatialknowledge_turbine.js.map
