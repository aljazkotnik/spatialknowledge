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

  var template$7 = "\n<div class=\"item\">\n  <div class=\"head unselectable\">\n    <span class=\"label\"></span>\n\t<span class=\"button\" style=\"display: none;\">x</span>\n  </div>\n  <div class=\"view\"></div>\n  <div class=\"preview\"></div>\n  <div class=\"controls\"></div>\n  <div class=\"commenting\"></div>\n</div>\n";
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
      obj.node = html2element(template$7);
      obj.node.style.position = "absolute";
      obj.viewnode = obj.node.querySelector("div.view");
      obj.viewnode.style.height = obj.height + "px";
      obj.viewnode.style.width = obj.width + "px";
      obj.previewnode = obj.node.querySelector("div.preview");
      obj.previewnode.style.maxWidth = obj.width + "px"; // Add the dragging in here. The dragging is supposed to be in a scaled, and potentially tranlated div, so the offset to the div needs to be removed.

      var active = false;
      var itemStartPosition = [0, 0];
      var itemRelativePosition = [0, 0]; // The `e.target == obj.node' prevents any events on the children elements to bubble up. This require the title width to be 0, and it prevented from a button being positioned to the right. 
      // `obj.node.contains(e.target)' allows any children to launch the dragging, but this will interfere with the panning and zooming in the viewport div.
      // Maybe any child that is contained by obj.node. but not the viewport node?

      obj.node.onmousedown = function (e) {
        if (obj.node.contains(e.target) && e.target != obj.viewnode && obj.node.isConnected) {
          e.preventDefault();
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
      key: "path",
      get: function get() {
        // Doesn't take into account the offsets yet!!
        // Allow this to return a straight path, or a curved one. The straight path is exclusively for bundles that have only one parent. Furthermore, that one should only be allowed when connecting nodes on the same height. So maybe just base the decision off of that?
        // Straight path is just M0 0 L40 0 or so.
        var obj = this;
        var dyc = obj.ci * obj.line_width + obj.childnode.markerEmptyIn;
        var dyp = obj.pi * obj.line_width + obj.parentnode.markerEmptyOut; // The target x should be > `xHorizontal + r1 + r2'

        var xHorizontal = obj.parentnode.x + obj.node_label_width + obj.bendi * obj.bundle_width; // Origin and target MUST be at least `[node_label_width + 2*r, 2*r]' apart otherwise the graphic logic doesn't follow.

        var origin = {
          x: obj.parentnode.x,
          y: obj.parentnode.yMarkerStart + dyp
        };
        var target = {
          x: obj.childnode.x,
          y: obj.childnode.yMarkerStart + dyc
        };
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

        var p = "M".concat(origin.x, " ").concat(origin.y, " L").concat(arc1start.x, " ").concat(arc1start.y, " A").concat(obj.r1, " ").concat(obj.r1, " 90 0 1 ").concat(arc1end.x, " ").concat(arc1end.y, " L").concat(arc2start.x, " ").concat(arc2start.y, " A").concat(obj.r2, " ").concat(obj.r2, " 90 0 0 ").concat(arc2end.x, " ").concat(arc2end.y, " L").concat(target.x, " ").concat(target.y);
        return p;
      } // path

    }]);

    return DrawLink;
  }(); // DrawLink

  var template$6 = "\n<g class=\"bundle\">\n  <path stroke=\"white\" stroke-width=\"5\" fill=\"none\"></path>\n  <path stroke=\"black\" stroke-width=\"2\" fill=\"none\"></path>\n</g>\n"; // tempalte
  // These should just be exposed at the link level... The tree level also has them, and it's non hygienic.

  var node_label_width$1 = 70;
  var bundle_width$1 = 4;
  var r$1 = 16; // Bundles are the connections between two levels of nodes.

  var treebundle = /*#__PURE__*/function () {
    // Index is the ranked position of this bundle within hte level. It determines the position of hte vertical line segment, and the corner radius.
    function treebundle(seednode, author) {
      _classCallCheck(this, treebundle);

      this.links = [];
      this._bendi = 0; // A seed node is passed in to define the bundle parents and thus instantiate a bundle. After instantialisation only the children of the bundle can change.
      // NOTE: seednode is a `treenode' instance, but parents and children are `taskgroup' instances. The level is only defined for the node because it can change when the user interacts with the tree.

      var obj = this;
      obj.node = svg2element(template$6);
      obj.author = author, obj.level = seednode.level;
      obj.parents = seednode.connections.parents;
      obj.children = [seednode.connections.group];
      obj.nodeChildren = [seednode];
      obj.nodeParents = [];
    } // constructor


    _createClass(treebundle, [{
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
          obj.updateNodeMinPositions();
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
          obj.updateNodeMinPositions();
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
      key: "updateNodeMinPositions",
      value: function updateNodeMinPositions() {
        // This should just be run whenever teh parents or the children are changed.
        // Because the links make two 90 degree turns when connecting the parent to the child the radii of these turns constitute the minimum y offset of this bundle relative to the previous one. Furthermore, this is offset relative to the lowest parent! This is important when positioning the child nodes.
        var obj = this;
        var y_lowest_parent = obj.nodeParents.reduce(function (acc, p) {
          return acc > p.y ? acc : p.y;
        }, 0);
        obj.nodeChildren.forEach(function (child) {
          child.miny = y_lowest_parent + 2 * r$1;
        }); // forEach
      } // y_min

    }]);

    return treebundle;
  }(); // treebundle

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
    // To draw the node I need to know where to start, how big it should be, and I should also know what the label is, and what the corresponding tags are.
    // Each bundle should be staggered when entering a particular node. But bundles can also hold lines of several authors. These should be staggered as well.
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
    // Assign the index of track to enter the node by.

    incomingbundles.forEach(function (bundle, i) {
      var lines = getBundleLinesGoingThroughNode(bundle, node);
      lines.forEach(function (line) {
        line.ci = i;
      });
    }); // forEach

    outgoingbundles.forEach(function (bundle, i) {
      var lines = getBundleLinesGoingThroughNode(bundle, node);
      lines.forEach(function (line) {
        line.pi = i;
      });
    }); // forEach
    // Set number of incoming bundles.

    node.nbundlesin = incomingbundles.length;
    node.nbundlesout = outgoingbundles.length;
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
          bundles.push(new treebundle(node, tag.author));
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
    // Last thing is to position the nodes.

    var x_offset = 0;
    levels.forEach(function (level) {
      // Recalculate the minimum node positions.
      level.bundles.forEach(function (b) {
        return b.updateNodeMinPositions();
      }); // Now sort the nodes by their miny to conserve as much space as possible.

      level.nodes.sort(function (a, b) {
        return a.miny - b.miny;
      }); // sort
      // With the sizes of the nodes defined, the x and y locations can be assigned. The x location depends on the level, and the y location on the order within hte level.

      x_offset += level.width;
      var y_offset = 0;
      level.nodes.forEach(function (n) {
        n.x = x_offset;
        n.y = y_offset; // Compute offset for next node. This is just offset within the level!

        y_offset = n.y + n.markersize + n.pitch;
      }); // forEach
    }); // forEach

    return {
      nodes: nodes,
      bundles: bundles
    };
  } // dimensioning

  // text -> 	"x", node => node.labelx, "y", node => node.labely, label node=>node.label

  var template$5 = "\n<g class=\"node\" cursor=\"pointer\">\n  <g class=\"marker\">\n    <path class=\"outline\" stroke=\"black\" stroke-width=\"8\" stroke-linecap=\"round\"></path>\n    <path class=\"fill\" stroke=\"white\" stroke-width=\"4\" stroke-linecap=\"round\"></path>\n  </g>\n  <g class=\"label\">\n    <text class=\"unselectable\" stroke=\"white\" stroke-width=\"2\" font-size=\"10px\"></text>\n    <text class=\"unselectable\" stroke=\"black\" stroke-width=\"0.5\" font-size=\"10px\"></text>\n  </g>\n</g>\n"; // template
  // A treenode object is a higher level wrapper that contains all the dimensioning information. The `connections' attribute is supposed to hold the `treegroup' object, which contains a reference the an individual group, all it's ancestors, it's direct parents, and all its descendants.

  var TreeNode = /*#__PURE__*/function () {
    // Line width is the width of the incoming line. The pitch is the vertical spacing to the next node.
    function TreeNode(treegroup) {
      _classCallCheck(this, TreeNode);

      this.x = undefined;
      this._y = 0;
      this.miny = 0;
      this.line_width = 4;
      this.pitch = 32;
      this.nbundlesin = 0;
      this.nbundlesout = 0;
      this.hidden = false;
      var obj = this;
      obj.node = svg2element(template$5); // The treegroup holds all the connections of a particular group.

      obj.connections = treegroup;
      var label = obj.node.querySelector("g.label");

      label.onmouseenter = function () {
        obj.highlighttext(true);
      };

      label.onmouseleave = function () {
        obj.highlighttext(false);
      };

      var marker = obj.node.querySelector("g.marker");

      marker.onmouseenter = function () {
        obj.highlightmarker(true);
      };

      marker.onmouseleave = function () {
        obj.highlightmarker(false);
      };
    } // constructor	


    _createClass(TreeNode, [{
      key: "update",
      value: function update() {
        var obj = this;
        var marker = obj.node.querySelector("g.marker");
        var paths = marker.querySelectorAll("path");
        var label = obj.node.querySelector("g.label");
        var texts = label.querySelectorAll("text");

        for (var i = 0; i < paths.length; i++) {
          paths[i].setAttribute("d", "M".concat(obj.x, " ").concat(obj.yMarkerStart, " L").concat(obj.x, " ").concat(obj.yMarkerStart + obj.markersize));
        } // for


        label.setAttribute("transform", "translate(".concat(obj.labelx, ", ").concat(obj.labely, ")"));

        for (var _i = 0; _i < texts.length; _i++) {
          texts[_i].innerHTML = obj.label;
        } // for

      } // update

    }, {
      key: "highlighttext",
      value: function highlighttext(v) {
        var obj = this;
        var size = v ? "12px" : "10px";
        var texts = obj.node.querySelector("g.label").querySelectorAll("text");

        for (var i = 0; i < texts.length; i++) {
          texts[i].setAttribute("font-size", size);
        } // for

      } // highlighttext

    }, {
      key: "highlightmarker",
      value: function highlightmarker(v) {
        var obj = this;
        var size = v ? 10 : 8;
        var outline = obj.node.querySelector("g.marker").querySelector("path.outline");
        outline.setAttribute("stroke-width", size);
      } // highlighttext

    }, {
      key: "clear",
      value: function clear() {
        var obj = this;
        obj.x = undefined;
        obj._y = 0;
        obj.miny = 0;
        obj.nbundlesin = 0;
        obj.nbundlesout = 0;
      } // clear

    }, {
      key: "y",
      get: // set y
      function get() {
        var obj = this;
        return Math.max(obj._y, obj.miny);
      } // get y
      ,
      set: function set(val) {
        var obj = this;
        obj._y = val;
      }
    }, {
      key: "yMarkerStart",
      get: function get() {
        var obj = this;
        var yoffset = obj.markersize > 0 ? obj.line_width / 2 : 0;
        return obj.y - obj.markersize / 2 + yoffset;
      } // markery

    }, {
      key: "markersize",
      get: function get() {
        return Math.max(this.nbundlesin - 1, this.nbundlesout - 1, 0) * this.line_width;
      } // markersize

    }, {
      key: "markerEmptyIn",
      get: function get() {
        // If the marker is larger than the width of the lines coming in, then the lines should be centered in hte middle of the marker. Calculate the empty space from hte marker start to where the lines should begin.
        var obj = this;
        return (obj.markersize - (obj.nbundlesin - 1) * obj.line_width) / 2;
      } // markerEmptyIn

    }, {
      key: "markerEmptyOut",
      get: function get() {
        var obj = this;
        return (obj.markersize - (obj.nbundlesout - 1) * obj.line_width) / 2;
      } // markerEmptyIn
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

    }, {
      key: "labelx",
      get: function get() {
        return this.x + 4;
      } // labelx

    }, {
      key: "labely",
      get: function get() {
        return this.yMarkerStart - 4;
      } // labely

    }]);

    return TreeNode;
  }(); // TreeNode

  /*
  If all the tasks are in the same array, and the author information is on the tags, then the partial trees won;t be a problem.

  Every tag represents a group possibility essentially. But the same tag can relate to different groups. The group members differentiate the groups. The different tag descriptions of the groups should all be presented on mouseover, maybe along with the author data.

  Won't be able to remove the initial dialogue in the small multiples visualisation, but I will be able to get rid of the expand button on the small multiples.
  */
  // FROM AN ARRAY OF TASKS WITH TAGS TO A TREE

  function array2tree(array) {
    /*
    1.) Find groups.
    2.) Merge them.
    3.) Create parent-child relationships
    */
    // Find all created groups, and merge the ones with identical members.
    var groups = findAllTagBasedGroups(array);
    var mergedgroups = mergeIdenticalGroups(groups); // Convert the groups into a higher level object to avoid circular references when figuring out ancestry.

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
          return existing.id == tag.id;
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
    // A root group should be present. It will be merged with other existing groups if possible in hte next tep.

    var root = makeRootGroup(array);
    return groups.concat(root);
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
      var identicalg = acc.filter(function (g_) {
        return arrayEqual(g_.members, g.members);
      }); // filter

      if (identicalg.length > 0) {
        // Add another author to existing group.
        g.tags.forEach(function (tag) {
          identicalg[0].addtag(tag);
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
        var temporaryAnnotations = obj.temporary.reduce(function (acc, g) {
          // The dummy annotation needs to have a unique id, name, author, and task ids.
          return acc.concat(g.members.map(function (item) {
            i += 1;
            return {
              id: "temp".concat(i),
              name: "Unsaved",
              author: undefined,
              taskId: item.task.taskId
            };
          })); // concat
        }, []); // reduce

        obj.nodes = array2tree(obj.annotations.concat(temporaryAnnotations)).map(function (group) {
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

  var template$4 = "\n<g transform=\"translate(20, 20)\">\n  <g class=\"bundles\"></g>\n  <g class=\"nodes\"></g>\n  <g class=\"nodetooltip\"></g>\n  <g class=\"linktooltip\"></g>\n</g>\n";

  var TreeKnowledge = /*#__PURE__*/function () {
    function TreeKnowledge() {
      _classCallCheck(this, TreeKnowledge);

      var obj = this; // Hierarchy

      obj.hierarchy = new TreeHierarchy(); // Drawing

      obj.node = svg2element(template$4);
      obj.gnodes = obj.node.querySelector("g.nodes");
      obj.gbundles = obj.node.querySelector("g.bundles");
      obj.color = new scaleCategorical();
    } // constructor


    _createClass(TreeKnowledge, [{
      key: "data",
      get: // set data
      function get() {
        return this.hierarchy.annotations;
      } // get data
      ,
      set: function set(d) {
        this.hierarchy.annotations = d;
      }
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
        obj.map.nodes.forEach(function (nodeobj) {
          obj.gnodes.appendChild(nodeobj.node);
          nodeobj.update(); // Add teh styling changes on mouseover. Clicking the label moves view to the group.

          nodeobj.node.querySelector("g.label").onclick = function () {
            obj.moveto(nodeobj.connections);
          }; // onclick
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
      key: "moveto",
      value: function moveto(connections) {
        // I want to move to the group which contains only tasks given by "nodeobj.connections.group.members", but I also want to show all the groups within that grop.
        console.log("Move to", nodeobj.connections.group.members);
      } // moveto

    }]);

    return TreeKnowledge;
  }(); // TreeKnowledge

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


    function Group(items, temporary) {
      var _this;

      _classCallCheck(this, Group); // `items' is an array of `Items' which should be grouped together. `temporary' is a flag that differentiates the groups created based on server served annotations or the users lasso operation.


      _this = _super.call(this);
      _this.width = 300;
      _this.height = 200;
      _this.icons = [];
      _this.members = [];
      _this.temporary = true;

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


      obj.current = items[0]; // When deleting an item the current item WILL be deleted (because it was moused onto first). Therefore another item will have to be selected

      items.forEach(function (item) {
        obj.addmember(item);
      }); // map

      obj.temporary = temporary;
      return _this;
    } // constructor


    _createClass(Group, [{
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

    }, {
      key: "dissolve",
      value: function dissolve() {
        var obj = this; // How should this tell the NavigationManager that it should stop tracking it?
        // Maybe just allow NavigationManager to filter out any empty groups whenever it tries to access them?
        // Just remove the node! Then where there is an update needed check if the node still exists? Also reinstate the previous items.

        obj.node.remove(); // When the group is created the items remain at their locations, and are simply hidden. When the group is dissolved an offset is applied to account for th egroup moving. For items that are included individually by dragging and dropping.

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

    }, {
      key: "reinstate",
      value: function reinstate() {
        // Reinstate the group by showing it, and hiding all the constituent items.
        var obj = this;
        obj.members.forEach(function (item) {
          return item.hide();
        });
        obj.show();
      } // reinstate

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
      // CORRELATIONS
      // How should the metadata be passed in? Within hte items themselves?
      // Should be reworked so that the elements sit in the HUD. Then the actual interactions should be defined. Maybe the dragging of individual correlations was not bad? It should just be explicitly dragging the variable onto the axis (e.g. the point moves, if released prematurely it returns to its position, if released over axes it arranges.)

      /*
      obj.correlations = new SpatialCorrelations();
      obj.sketchpad.appendChild(obj.correlations.node);
      obj.correlations.position([5, window.innerHeight - 5]);
      obj.correlations.xoffset = window.innerWidth - 15;
      obj.correlations.yoffset = window.innerHeight - 15;
      obj.correlations.update();
      */
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
          obj.minimap.update();
        } else {
          // Restrict the view to the members of the parent nodes. If one of the parents is the root then all the items should be active tasks.
          var activetasks = connections.parents.reduce(function (acc, parentg) {
            return parentg.root ? obj.items.map(function (item) {
              return item.task.taskId;
            }) : acc.concat(parentg.members);
          }, []); // reduce

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
              }
              // A.all is written as !A.some(v=>!B.includes(v))

              if (arrayequal(g.members, clickedgroupitems)) {
                clickedgroup = g;
              } // if

            }
          }); // forEach

          if (clickedgroup) {
            clickedgroup.reinstate();
            obj.minimap.update();
          } else {
            obj.makegroup(clickedgroupitems, false);
          } // if

        } // if

      }; // function

    } // constructor
    // Getter and setter for groups to allow inactive groups to be filtered out.


    _createClass(NavigationManager, [{
      key: "track",
      value: function track(item) {
        var obj = this;
        obj.container.appendChild(item.node); // On Drag END chck if item should be placed into group.

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
      key: "groups",
      get: // gettransform

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
      function get() {
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
        g.origin = p; // Add the group to the session.

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
      } // makegroup

    }, {
      key: "hudrefresh",
      value: function hudrefresh() {
        var obj = this;
        obj.minimap.update();
        obj.tree.temporary = obj.groups.filter(function (g) {
          return g.temporary;
        });
        obj.tree.update();
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

  var testannotations2 = [{
    id: "0",
    name: "B",
    taskId: "task 1",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "1",
    name: "B",
    taskId: "task 2",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "2",
    name: "B",
    taskId: "task 3",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "3",
    name: "B",
    taskId: "task 4",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "4",
    name: "C",
    taskId: "task 3",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "5",
    name: "C",
    taskId: "task 4",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "6",
    name: "C",
    taskId: "task 5",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "7",
    name: "C",
    taskId: "task 6",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "8",
    name: "D",
    taskId: "task 3",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "9",
    name: "D",
    taskId: "task 4",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "10",
    name: "D",
    taskId: "task 5",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "11",
    name: "D",
    taskId: "task 6",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "12",
    name: "E",
    taskId: "task 7",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "13",
    name: "E",
    taskId: "task 8",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "14",
    name: "E",
    taskId: "task 9",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "15",
    name: "F",
    taskId: "task 3",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "16",
    name: "F",
    taskId: "task 4",
    author: "Aljaz",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "17",
    name: "G",
    taskId: "task 8",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }, {
    id: "18",
    name: "G",
    taskId: "task 9",
    author: "Magda",
    datetime: "Tue Feb 08 2022"
  }]; // atestannotation2

  var KnowledgeManager = function KnowledgeManager(nm) {
    _classCallCheck(this, KnowledgeManager);
    // For now just push the given annotations to the tree?? Justto see if the tree is working? Where and how are the events attached to the tree?

    nm.tree.data = testannotations2;
    nm.tree.update();
  } // constructor
  ; // KnowledgeManager

  // author, datetime, tag, taskId, line, area, t
  // Maybe separate annotations for starttime and endtime? And then let the system figure out a close chapter.

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
  // The knowledge manager object.

  new KnowledgeManager(workspace); // Add the main rendering loop

  console.log(workspace);

}());
//# sourceMappingURL=spatialknowledge.js.map
