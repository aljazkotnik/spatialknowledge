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

  function isEventWithinBoundingClientRect(e, rect) {
    return e.clientX > rect.x && e.clientX < rect.x + rect.width && e.clientY > rect.y && e.clientY < rect.y + rect.height;
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

  var template$3 = "\n<div class=\"item\">\n  <div class=\"label unselectable\">Label</div>\n  <div class=\"view\">\n  </div>\n</div>\n"; // This item should be support use as a single object, as well as a group. Just depends on the tasks coming in.
  // The Item will have to be scalable!!

  var Item = /*#__PURE__*/function () {
    // Main viewport dimensions;
    function Item(task) {
      _classCallCheck(this, Item);

      this.width = 300;
      this.height = 200;
      var obj = this;
      obj.task = task;
      obj.node = html2element(template$3);
      obj.viewnode = obj.node.querySelector("div.view");
      obj.viewnode.style.height = obj.height + "px";
      obj.viewnode.style.width = obj.width + "px";
      obj.node.querySelector("div.label").innerHTML = task.taskId; // Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.

      var active = false;
      var itemRelativePosition = [0, 0];

      obj.node.onmousedown = function (e) {
        if (e.target == obj.node) {
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
          obj.node.style.left = x / k + "px";
          obj.node.style.top = y / k + "px";
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
    // Dummy method that evaluates when the item is being repositioned.


    _createClass(Item, [{
      key: "onmove",
      value: function onmove() {} // onmove

    }]);

    return Item;
  }(); // Item

  var template$2 = "<circle r=\"5\" fill=\"orange\"></circle>"; // template

  var MiniMapIcon = /*#__PURE__*/function () {
    function MiniMapIcon(item) {
      _classCallCheck(this, MiniMapIcon);

      var obj = this;
      obj.item = item;
      obj.node = svg2element(template$2);
    } // constructor


    _createClass(MiniMapIcon, [{
      key: "update",
      value: function update(xscale, yscale) {
        // The scales must be given from the parent, and the icon uses them to position itself.
        // The scales should incorporate both the panning and zooming adjustements needed.
        var obj = this; // Update the position of the circle with the center point of the DOM card.

        var itemClientRect = obj.item.node.getBoundingClientRect();
        var x = itemClientRect.left + itemClientRect.width / 2;
        var y = itemClientRect.top + itemClientRect.height / 2;
        obj.node.setAttribute("cx", xscale.dom2range(x));
        obj.node.setAttribute("cy", yscale.dom2range(y));
      } // update

    }]);

    return MiniMapIcon;
  }(); // MiniMapIcon

  var template$1 = "<rect class=\"current\" x=\"50\" y=\"10\" width=\"150\" height=\"50\" fill=\"black\" opacity=\"0.5\"></rect>";

  var MiniMapViewRect = /*#__PURE__*/function () {
    function MiniMapViewRect() {
      _classCallCheck(this, MiniMapViewRect);

      var obj = this;
      obj.node = svg2element(template$1); // Make it draggable.

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

          if (isEventWithinBoundingClientRect(e, svgClientRect)) {
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

  var template = "<svg style=\"border: 2px solid black; display: block;\">\n  <g class=\"icons\"></g>\n</svg>"; // template
  // All the data should be on the minimap at all times, including any rearranged items. That means that the scale domain may have to be redone every time there is a rearrangement event.

  var MiniMap = /*#__PURE__*/function () {
    function MiniMap() {
      _classCallCheck(this, MiniMap);

      this.width = 300;
      this.height = 200;
      this.icons = [];
      var obj = this;
      obj.node = svg2element(template);
      obj.node.setAttribute("width", obj.width);
      obj.node.setAttribute("height", obj.height); // The rectangle should have the proportions of the screen.
      // Abstract the viewrect out??

      obj.viewrect = new MiniMapViewRect();
      obj.node.appendChild(obj.viewrect.node); // When the square moves the main view should be updated. How to do the update?
      // Should tehre be an offset applied? This doesn't seem neat
      // Should the items keep track of their coordinates and sizes in initial coordinates, which would then be converted to the browser coordinates depending on the view.
      // scrollLeft and scrollTop are bounded by 0 on each side, so the items can either be repositioned initially, or I keep track of the coordnates internally.
      // Then the position components need to be tracked independently, as they are changed through different interactions. So keep track of the initial position and size, and the user dragging offset separately.
      // The dragging just applies the offset from the original position to the current cursor position. Maybe instead of storing the components I can just transform back, and apply the new transform?
      // Add scrolling to the rect!
      // Create the scales to map the necessary range to the size of the svg.

      obj.xscale = new scaleLinear();
      obj.xscale.range = [0, obj.width];
      obj.yscale = new scaleLinear();
      obj.yscale.range = [0, obj.height];
    } // constructor


    _createClass(MiniMap, [{
      key: "getoffset",
      value: function getoffset() {
        var obj = this;
        return [obj.xscale.range2dom(obj.viewrect.node.getAttribute("x")), obj.yscale.range2dom(obj.viewrect.node.getAttribute("y"))];
      } // getoffset
      // Update the circle representations.

    }, {
      key: "update",
      value: function update(items) {
        var obj = this; // If items have been given, then change the circles.

        if (items) {
          var container = obj.node.querySelector("g.icons");
          obj.icons = items.map(function (item) {
            var icon = new MiniMapIcon(item);
            container.appendChild(icon.node);
            return icon;
          }); // map
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

        obj.viewrect.update(obj.xscale, obj.yscale); // Redo the icons.

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

  /*
  A drop in class that provides zooming, panning, minimap, and the tree hierarchy navigaton.
  */

  var NavigationManager = /*#__PURE__*/function () {
    function NavigationManager() {
      _classCallCheck(this, NavigationManager);

      this.items = [];
      this.scale = 1;
      this.dx = 0;
      this.dy = 0;
      var obj = this;
      obj.tabletop = document.getElementById("tabletop");
      obj.container = obj.tabletop.querySelector("div.scalingwrapper"); // // Use transform: scale() to achieve the zoom in and out functionality, and transform: translate(xpx,ypx) for panning. First a default trnasform should be assigned.

      obj.container.style.transform = "scale(1) translate(0px,0px)"; // make a minimap and include the items on it.

      obj.minimap = new MiniMap();
      document.getElementById("minimap").appendChild(obj.minimap.node); // ZOOMING

      function zoom(event) {
        event.preventDefault();
        obj.scale += event.deltaY * -0.001; // Restrict scale

        obj.scale = Math.min(Math.max(.125, obj.scale), 4); // Apply scale transform

        obj.adjustview();
      }

      obj.tabletop.onwheel = zoom;
      obj.minimap.viewrect.node.onwheel = zoom;

      obj.minimap.viewrect.reposition = function () {
        var offset = obj.minimap.getoffset();
        obj.dx = -offset[0] / obj.scale;
        obj.dy = -offset[1] / obj.scale; // No minimap update here!!

        obj.container.style.transform = obj.currenttransform();
      }; // reposition
      // Here the dragging doesn't move the item, but rather a different element.


      var active, origin, e0;

      obj.tabletop.onmousedown = function (e) {
        console.log("onmousedown tabletop");

        if (e.target == obj.tabletop) {
          e.preventDefault();
          active = true;
          origin = {
            x: obj.dx,
            y: obj.dy
          };
          e0 = e;
        } // if

      }; // onmousedown


      obj.tabletop.onmousemove = function (e) {
        if (active) {
          e.preventDefault(); // The elements should move in hte dragged direction.

          obj.dx = origin.x + e.clientX - e0.clientX;
          obj.dy = origin.y + e.clientY - e0.clientY; // Move the items.

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


    _createClass(NavigationManager, [{
      key: "adjustview",
      value: function adjustview() {
        var obj = this; // When the view is adjusted the items should also be told to check their sizes, and react is needed.

        obj.container.style.transform = obj.currenttransform(); // Update the minimap

        obj.minimap.update();
      } // adjustview

    }, {
      key: "currenttransform",
      value: function currenttransform() {
        var obj = this;
        return "scale(".concat(obj.scale, ") translate(").concat(obj.dx, "px,").concat(obj.dy, "px)");
      }
    }]);

    return NavigationManager;
  }();

  var data = [{
    taskId: "task 0",
    sepal_length: 5.1,
    sepal_width: 3.5
  }, {
    taskId: "task 1",
    sepal_length: 4.9,
    sepal_width: 3
  }, {
    taskId: "task 2",
    sepal_length: 4.7,
    sepal_width: 3.2
  }, {
    taskId: "task 3",
    sepal_length: 4.6,
    sepal_width: 3.1
  }, {
    taskId: "task 4",
    sepal_length: 5,
    sepal_width: 3.6
  }, {
    taskId: "task 5",
    sepal_length: 5.4,
    sepal_width: 3.9
  }, {
    taskId: "task 6",
    sepal_length: 4.6,
    sepal_width: 3.4
  }, {
    taskId: "task 7",
    sepal_length: 5,
    sepal_width: 3.4
  }, {
    taskId: "task 8",
    sepal_length: 4.4,
    sepal_width: 2.9
  }, {
    taskId: "task 9",
    sepal_length: 4.9,
    sepal_width: 3.1
  }, {
    taskId: "task 10",
    sepal_length: 5.4,
    sepal_width: 3.7
  }, {
    taskId: "task 11",
    sepal_length: 4.8,
    sepal_width: 3.4
  }, {
    taskId: "task 12",
    sepal_length: 4.8,
    sepal_width: 3
  }, {
    taskId: "task 13",
    sepal_length: 4.3,
    sepal_width: 3
  }, {
    taskId: "task 14",
    sepal_length: 5.8,
    sepal_width: 4
  }, {
    taskId: "task 15",
    sepal_length: 5.7,
    sepal_width: 4.4
  }]; // data
  // Items

  var workspace = new NavigationManager();
  var items = [];

  for (var i = 0; i < data.length; i++) {
    var item = new Item(data[i]);
    items.push(item); // Make navigation manager keep track of the item.

    workspace.container.appendChild(item.node);

    item.onmove = function () {
      workspace.minimap.update();
    }; // onmove

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
    item.node.style.left = positions[i][0] + "px";
    item.node.style.top = positions[i][1] + "px";
  }); // forEach
  // ALL NAVIGATION BELOW
  // If all of the navigation is in onle class, then that class could keep a reference for the scale, and then on every update communicate it to the member modules.
  // The tabletop should support zooming and panning
  // The minimap should support zooming and panning
  // So maybe no panning on hte tabletop??
  // If there is panning on the tabletop, then how will hte lasso svg become active?

}());
//# sourceMappingURL=spatialknowledge.js.map
