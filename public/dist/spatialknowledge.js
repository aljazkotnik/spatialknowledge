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

  var template$4 = "\n<div class=\"item\">\n  <div class=\"head unselectable\">\n    <span class=\"label\"></span>\n\t<span class=\"button\" style=\"display: none;\">x</span>\n  </div>\n  <div class=\"view\"></div>\n  <div class=\"preview\"></div>\n  <div class=\"controls\"></div>\n  <div class=\"commenting\"></div>\n</div>\n";
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
      obj.node = html2element(template$4);
      obj.node.style.position = "absolute";
      obj.viewnode = obj.node.querySelector("div.view");
      obj.viewnode.style.height = obj.height + "px";
      obj.viewnode.style.width = obj.width + "px";
      obj.previewnode = obj.node.querySelector("div.preview");
      obj.previewnode.style.maxWidth = obj.width + "px"; // Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.

      var active = false;
      var itemRelativePosition = [0, 0]; // The `e.target == obj.node' prevents any events on the children elements to bubble up. This require the title width to be 0, and it prevented from a button being positioned to the right. 
      // `obj.node.contains(e.target)' allows any children to launch the dragging, but this will interfere with the panning and zooming in the viewport div.
      // Maybe any child that is contained by obj.node. but not the viewport node?

      obj.node.onmousedown = function (e) {
        if (obj.node.contains(e.target) && e.target != obj.viewnode && obj.node.isConnected) {
          e.preventDefault();
          var rect = obj.node.getBoundingClientRect();
          active = true;
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

    }]);

    return Item;
  }(); // Item

  var Individual = /*#__PURE__*/function (_Item) {
    _inherits(Individual, _Item);

    var _super = _createSuper(Individual);

    function Individual(task) {
      var _this;

      _classCallCheck(this, Individual);

      _this = _super.call(this);

      var obj = _assertThisInitialized(_this); // The task is important, because 


      obj.task = task;
      obj.node.querySelector("span.label").innerHTML = task.taskId;
      return _this;
    } // constructor


    _createClass(Individual, [{
      key: "checksize",
      value: function checksize() {
        var obj = this; // Check size to decide what to do. In cases where many items are drawn the cumulative memory required to draw the image may be too high, and it's sensible to draw a static image instead.

        var rect = obj.node.getBoundingClientRect();

        if (rect.width < 200) {
          // Paint the inside red.
          obj.viewnode.style.background = obj.task.color;
          obj.viewnode.style.opacity = 1;
        } else {
          // Turn it back to default values.
          obj.viewnode.style.background = "";
          obj.viewnode.style.opacity = 0.001;
        } // if

      } // checksize

    }]);

    return Individual;
  }(Item); // Individual

  var template$3 = "<circle r=\"5\" fill=\"cornflowerblue\"></circle>"; // template

  var MiniMapIcon = /*#__PURE__*/function () {
    function MiniMapIcon(item) {
      _classCallCheck(this, MiniMapIcon);

      var obj = this;
      obj.item = item;
      obj.node = svg2element(template$3);
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

    }]);

    return MiniMapIcon;
  }(); // MiniMapIcon

  var template$2 = "<rect class=\"current\" x=\"50\" y=\"10\" width=\"150\" height=\"50\" fill=\"black\" opacity=\"0.5\"></rect>";

  var MiniMapViewRect = /*#__PURE__*/function () {
    function MiniMapViewRect() {
      _classCallCheck(this, MiniMapViewRect);

      var obj = this;
      obj.node = svg2element(template$2); // Make it draggable.

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

  /*
  The initial arrangement is not the problem of this module. This module just visualises the current arrangement, and allows global navigation.

  The panning/zooming should be made available on hte background also.
  */

  var template$1 = "<svg style=\"border: 2px solid gainsboro; display: block;\">\n  <g class=\"icons\"></g>\n</svg>"; // template
  // All the data should be on the minimap at all times, including any rearranged items. That means that the scale domain may have to be redone every time there is a rearrangement event.

  var MiniMap = /*#__PURE__*/function () {
    function MiniMap() {
      _classCallCheck(this, MiniMap);

      this.width = 300;
      this.height = 200;
      this._icons = [];
      var obj = this;
      obj.node = svg2element(template$1);
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
    } // constructor
    // icons getter/setter - to dynamically filter out any group sthat are removed.


    _createClass(MiniMap, [{
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

  var template = "\n<polygon class=\"lasso\" points=\"\" style=\"fill: cornflowerblue; stroke: dodgerblue; stroke-width: 2; opacity: 0.4;\"></polygon>\n"; // template

  var Lasso = /*#__PURE__*/function () {
    /* 
    	`lasso' implements a generic lasso that can be added to svg elements.
    
    The lasso logs the selected points and updates the graphic. If the underlying svg spans across the entire client viewport, then no readjustment of the coordinates is needed.
    */
    function Lasso(svg) {
      _classCallCheck(this, Lasso); // Make reactive??


      var obj = this;
      obj.svg = svg;
      obj.polygon = svg.appendChild(svg2element(template)); // An internal boundary is used for all the drawing, and an external boundary is presented to other interested modules. Only the exposed boundary is observable. The exposed boundary is used to determine the lasso selection.

      obj._boundary = [];
      obj.boundary = []; // Should the boundary be stored at all??

      obj.svg.addEventListener("mousedown", function (event) {
        obj.clearBoundary();
        obj.active = true;
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


    function Group(items, annotations) {
      var _this;

      _classCallCheck(this, Group); // `items' is an array of `Items' which should be grouped together. `annotations' are an optional input for groups that are created based on server saved annotations.


      _this = _super.call(this);
      _this.width = 300;
      _this.height = 200;

      var obj = _assertThisInitialized(_this); // The label should depcit the group name - where does that come from? Maybe it should just be passed in? Maybe as an array of all names for this group.


      var head = obj.node.querySelector("div.head");
      head.querySelector("span.label").innerHTML = "Group";
      var dissolvebutton = head.querySelector("span.button");
      dissolvebutton.style.display = "";

      dissolvebutton.onmousedown = function () {
        // The main item checks if the event is a drag, and stops propagation if so. This happens `onmousedown', which is fired before it can become an `onclick' (which presumably includes the `onmouseup' also?)
        obj.dissolve();
      }; // onclick
      // Store the members.


      obj.members = items;
      obj.current = items[0]; // When deleting an item the current item WILL be deleted (because it was moused onto first). Therefore another item will have to be selected

      function uncolorAllIcons() {
        // Control the preview appearance.
        obj.previewnode.querySelectorAll("div.previewicon").forEach(function (icon) {
          icon.style.background = "gainsboro";
        }); // forEach
      } // coordinateIconColors


      obj.icons = obj.members.map(function (item) {
        var iconobj = {
          item: item,
          node: html2element(icontemplate)
        }; // return
        // Give the correct initial color, and append it.

        obj.previewnode.appendChild(iconobj.node);

        iconobj.node.onmouseenter = function () {
          // Set current object - important for canvas rendering.
          obj.current = iconobj.item; // coordinate the colors.

          uncolorAllIcons();
          iconobj.node.style.background = "gray"; // Dummy rendering

          obj.viewnode.style.background = obj.current.task.color;
          obj.viewnode.style.opacity = 1;
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


        return iconobj;
      }); // map

      return _this;
    } // constructor


    _createClass(Group, [{
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

        obj.onmove();
      } // release

    }, {
      key: "dissolve",
      value: function dissolve() {
        var obj = this; // How should this tell the NavigationManager that it should stop tracking it?
        // Maybe just allow NavigationManager to filter out any empty groups whenever it tries to access them?
        // Just remove the node! Then where there is an update needed check if the node still exists? Also reinstate the previous items.

        obj.node.remove(); // Calculate and apply the offset.

        var offset = [obj.position[0] - obj.origin[0], obj.position[1] - obj.origin[1]]; // offset

        obj.members.forEach(function (item) {
          item.position = [item.position[0] + offset[0], item.position[1] + offset[1]]; // position

          item.node.style.display = "";
        }); // forEach

        obj.onmove();
      } // dissolve

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
      this.groups = [];
      this.scale = 1;
      this.dx = 0;
      this.dy = 0;
      var obj = this;
      obj.tabletop = document.getElementById("tabletop");
      obj.container = obj.tabletop.querySelector("div.scalingwrapper");
      obj.sketchpad = document.getElementById("sketchpad"); // Use transform: scale() to achieve the zoom in and out functionality, and transform: translate(xpx,ypx) for panning. First a default trnasform should be assigned.

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
      // LASSO 
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
        var selectedIndividuals = findItemsInLasso(obj.items); // let selectedGroups = findItemsInLasso( obj.groups );

        if (selectedIndividuals.length > 1) {
          // Groups are only kept on navigation events. Here all the groups are destroyed, and the members are recombined into a new group.
          // Or should a supergroup be created whenever multiple groups are selected? Maybe that makes more sense? How to store local groups?
          obj.makegroup(selectedIndividuals);
          obj.minimap.update();
        } // if

      }; // lasso.onend
      // The navigation based on hte tabletop. Here the dragging doesn't move the item, but rather a different element. Furthermore, the type of button click should launch a different event.


      obj.tabletop.onwheel = zoom;
      var active, origin, e0;

      obj.tabletop.onmousedown = function (e) {
        if (e.target == obj.tabletop) {
          switch (e.which) {
            case 1:
              // Left mouse click - panning.
              e.preventDefault();
              active = true;
              origin = {
                x: obj.dx,
                y: obj.dy
              };
              e0 = e;
              break;

            case 2:
              // Middle mouse click - lasso.
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

    } // constructor
    // Getter and setter for groups to allow inactive groups to be filtered out.


    _createClass(NavigationManager, [{
      key: "track",
      value: function track(item) {
        var obj = this;
        obj.container.appendChild(item.node);

        item.onmove = function () {
          // Check if it should be added to a group.
          // Update the minimap accordingly?
          obj.minimap.update();
        }; // onmove


        obj.items.push(item);
      } // additem

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
      key: "makegroup",
      value: // gettransform

      /* GROUPING
      How to handle the grouping?
      
      The server pushes an array of `knowledge'. Each row of the array will be a separate annotation? And then the different attributes it will have will make it a different type? The server could be asked to send specific types of annotations over, and the local version would just keep them.
      
      For comments the server sent everything originally, and then individual ones separately. The same could be applied here also. So maybe everything with a valid `tags' could be sent over first, and then the comments etc. would be sent when the corresponding commenting section is open? In any case the knowledge manager will have to keep tabs on all the individual annotations, to be able to replace them with updated versions as they arrive. How would the SQL database be updated with a newer version of the same row? With the UPDATE statement!
      
      
      How should the annotations be stored, just in an array, or in the actual items. Maybe both?
      
      
      Everything with `tags' can be fed to the tree. The groups should be tracked as unsubmitted annoations also. What kind of tags should they be given? Unsaved1 etc?
      
      
      
      The temporary groups can just be kept as groups, and the knowldge manager will just update when groups are expanded? Then the groups made through the tree should not be entered into the obj.groups array. No removal of annotations!!
      
      How should the groups be saved! Should there just be an annotation form at the bottom, that will allow the user to submit a tag? How should the groups with several tags display these? Just above the annotation form? Yes, there they also form a basis for the conversation topics! To supplement the tags they could have a draw icon next to them that allows
      
      
      How to get rid of unnecessary groups once the user dissolves them?? Need to distinguish these groups from the ones that are just navigated away from. And when a tree node is clicked it will have to keep track of the temporary groups also!
      
      The tree needs to correctly position the temporary group also. How should it do this?
      
      */

      /*
      get groups(){
       // Filter out any groups
       let obj = this;
       obj._groups = obj._groups.filter(g=>{
        return g.
       })
      } // set
      */
      function makegroup(items) {
        var obj = this; // Collect the midpoint of the selected items to position the group.

        var p = [0, 0];
        items.forEach(function (item) {
          p[0] += parseFloat(item.node.style.left) / items.length;
          p[1] += parseFloat(item.node.style.top) / items.length;
          item.hide();
        }); // forEach

        var g = new Group(items);
        obj.groups.push(g);
        g.position = p;
        g.origin = p;
        obj.container.appendChild(g.node);
        obj.minimap.add(g);

        g.onmove = function () {
          obj.minimap.update();
        }; // onmove

      } // makegroup

    }]);

    return NavigationManager;
  }(); // NavigationManager

  var data = [{
    taskId: "task 0",
    sepal_length: 5.1,
    sepal_width: 3.5,
    color: "salmon"
  }, {
    taskId: "task 1",
    sepal_length: 4.9,
    sepal_width: 3,
    color: "sandybrown"
  }, {
    taskId: "task 2",
    sepal_length: 4.7,
    sepal_width: 3.2,
    color: "seagreen"
  }, {
    taskId: "task 3",
    sepal_length: 4.6,
    sepal_width: 3.1,
    color: "seashell"
  }, {
    taskId: "task 4",
    sepal_length: 5,
    sepal_width: 3.6,
    color: "sienna"
  }, {
    taskId: "task 5",
    sepal_length: 5.4,
    sepal_width: 3.9,
    color: "skyblue"
  }, {
    taskId: "task 6",
    sepal_length: 4.6,
    sepal_width: 3.4,
    color: "slateblue"
  }, {
    taskId: "task 7",
    sepal_length: 5,
    sepal_width: 3.4,
    color: "springgreen"
  }, {
    taskId: "task 8",
    sepal_length: 4.4,
    sepal_width: 2.9,
    color: "tan"
  }, {
    taskId: "task 9",
    sepal_length: 4.9,
    sepal_width: 3.1,
    color: "thistle"
  }, {
    taskId: "task 10",
    sepal_length: 5.4,
    sepal_width: 3.7,
    color: "tomato"
  }, {
    taskId: "task 11",
    sepal_length: 4.8,
    sepal_width: 3.4,
    color: "turquoise"
  }, {
    taskId: "task 12",
    sepal_length: 4.8,
    sepal_width: 3,
    color: "violet"
  }, {
    taskId: "task 13",
    sepal_length: 4.3,
    sepal_width: 3,
    color: "wheat"
  }, {
    taskId: "task 14",
    sepal_length: 5.8,
    sepal_width: 4,
    color: "lightpink"
  }, {
    taskId: "task 15",
    sepal_length: 5.7,
    sepal_width: 4.4,
    color: "antiquewhite"
  }]; // data
  // Items

  var workspace = new NavigationManager();
  var items = [];

  for (var i = 0; i < data.length; i++) {
    var item = new Individual(data[i]);
    items.push(item); // Temporarilyturn the position: absolute off so we get an initial arrangement.

    item.node.style.position = ""; // Make navigation manager keep track of the item.

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
  // Add the main rendering loop

  console.log(workspace);

}());
//# sourceMappingURL=spatialknowledge.js.map
