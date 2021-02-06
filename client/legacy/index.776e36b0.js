import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as svg_element, g as space, f as element, t as text, j as claim_element, l as children, n as detach_dev, k as claim_space, m as claim_text, o as attr_dev, p as add_location, q as set_style, r as insert_dev, u as append_dev, v as noop, w as validate_slots } from './client.fc2b433c.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\login\\index.svelte";

function create_fragment(ctx) {
  var svg;
  var g;
  var rect0;
  var path0;
  var path1;
  var path2;
  var path3;
  var path4;
  var path5;
  var defs;
  var mask;
  var rect1;
  var t0;
  var div5;
  var b;
  var t1;
  var t2;
  var div4;
  var div0;
  var i0;
  var t3;
  var input0;
  var t4;
  var div1;
  var i1;
  var t5;
  var input1;
  var t6;
  var div2;
  var button;
  var span;
  var t7;
  var t8;
  var p0;
  var t9;
  var t10;
  var div3;
  var i2;
  var t11;
  var i3;
  var t12;
  var i4;
  var t13;
  var i5;
  var t14;
  var p1;
  var t15;
  var t16;
  var a;
  var t17;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      g = svg_element("g");
      rect0 = svg_element("rect");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      defs = svg_element("defs");
      mask = svg_element("mask");
      rect1 = svg_element("rect");
      t0 = space();
      div5 = element("div");
      b = element("b");
      t1 = text("EasyToKnows");
      t2 = space();
      div4 = element("div");
      div0 = element("div");
      i0 = element("i");
      t3 = space();
      input0 = element("input");
      t4 = space();
      div1 = element("div");
      i1 = element("i");
      t5 = space();
      input1 = element("input");
      t6 = space();
      div2 = element("div");
      button = element("button");
      span = element("span");
      t7 = text("\r\n\t\t\t\tLogin");
      t8 = space();
      p0 = element("p");
      t9 = text("-OR-");
      t10 = space();
      div3 = element("div");
      i2 = element("i");
      t11 = space();
      i3 = element("i");
      t12 = space();
      i4 = element("i");
      t13 = space();
      i5 = element("i");
      t14 = space();
      p1 = element("p");
      t15 = text("don't have an account?");
      t16 = space();
      a = element("a");
      t17 = text("Register");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        class: true,
        xmlns: true,
        version: true,
        "xmlns:xlink": true,
        "xmlns:svgjs": true,
        preserveAspectRatio: true,
        height: true,
        width: true
      }, 1);
      var svg_nodes = children(svg);
      g = claim_element(svg_nodes, "g", {
        mask: true,
        fill: true
      }, 1);
      var g_nodes = children(g);
      rect0 = claim_element(g_nodes, "rect", {
        width: true,
        height: true,
        x: true,
        y: true,
        fill: true
      }, 1);
      children(rect0).forEach(detach_dev);
      path0 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path0).forEach(detach_dev);
      path1 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path1).forEach(detach_dev);
      path2 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path2).forEach(detach_dev);
      path3 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path3).forEach(detach_dev);
      path4 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path4).forEach(detach_dev);
      path5 = claim_element(g_nodes, "path", {
        d: true,
        fill: true,
        class: true
      }, 1);
      children(path5).forEach(detach_dev);
      g_nodes.forEach(detach_dev);
      defs = claim_element(svg_nodes, "defs", {}, 1);
      var defs_nodes = children(defs);
      mask = claim_element(defs_nodes, "mask", {
        id: true
      }, 1);
      var mask_nodes = children(mask);
      rect1 = claim_element(mask_nodes, "rect", {
        width: true,
        height: true,
        fill: true
      }, 1);
      children(rect1).forEach(detach_dev);
      mask_nodes.forEach(detach_dev);
      defs_nodes.forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      b = claim_element(div5_nodes, "B", {
        class: true
      });
      var b_nodes = children(b);
      t1 = claim_text(b_nodes, "EasyToKnows");
      b_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      i0 = claim_element(div0_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      input0 = claim_element(div0_nodes, "INPUT", {
        type: true,
        placeholder: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      i1 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", {
        type: true,
        placeholder: true,
        class: true
      });
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      button = claim_element(div2_nodes, "BUTTON", {
        class: true,
        style: true
      });
      var button_nodes = children(button);
      span = claim_element(button_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      span_nodes.forEach(detach_dev);
      t7 = claim_text(button_nodes, "\r\n\t\t\t\tLogin");
      button_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      p0 = claim_element(div4_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t9 = claim_text(p0_nodes, "-OR-");
      p0_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      i2 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i2).forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      i3 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i3).forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      i4 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i4).forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      i5 = claim_element(div3_nodes, "I", {
        class: true
      });
      children(i5).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      p1 = claim_element(div4_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t15 = claim_text(p1_nodes, "don't have an account?");
      p1_nodes.forEach(detach_dev);
      t16 = claim_space(div4_nodes);
      a = claim_element(div4_nodes, "A", {
        href: true,
        title: true,
        class: true
      });
      var a_nodes = children(a);
      t17 = claim_text(a_nodes, "Register");
      a_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(rect0, "width", "100%");
      attr_dev(rect0, "height", "100%");
      attr_dev(rect0, "x", "0");
      attr_dev(rect0, "y", "0");
      attr_dev(rect0, "fill", "#6f7fc7");
      add_location(rect0, file, 5, 8, 296);
      attr_dev(path0, "d", "M1474.773766487949 465.7830194165646L1386.8467139740587 424.67989881078483 1392.7652478802559 509.3188769323433z");
      attr_dev(path0, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path0, "class", "triangle-float3 svelte-gyho7n");
      add_location(path0, file, 6, 8, 374);
      attr_dev(path1, "d", "M1015.9919744489198 458.6765467578656L1027.9718260727889 361.10848497734145 930.4037642922648 349.1286333534723 918.4239126683956 446.69669513399646z");
      attr_dev(path1, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path1, "class", "triangle-float2 svelte-gyho7n");
      add_location(path1, file, 7, 8, 568);
      attr_dev(path2, "d", "M545.2008966416453 594.4411428172161L638.0535319039905 558.8998482463004 571.4760465544649 503.0347048448028z");
      attr_dev(path2, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path2, "class", "triangle-float2 svelte-gyho7n");
      add_location(path2, file, 8, 8, 799);
      attr_dev(path3, "d", "M166.06349294080235 523.438485847968L298.29272106482904 549.1412440877581 323.99547930461915 416.9120159637314 191.76625118059246 391.2092577239413z");
      attr_dev(path3, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path3, "class", "triangle-float1 svelte-gyho7n");
      add_location(path3, file, 9, 8, 990);
      attr_dev(path4, "d", "M249.3582233525348-23.285016409960456L218.34401392080298 66.78678798419118 368.95882522789634 68.27219993471307z");
      attr_dev(path4, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path4, "class", "triangle-float3 svelte-gyho7n");
      add_location(path4, file, 10, 8, 1220);
      attr_dev(path5, "d", "M970.2205083691996 61.00260569330216L1020.591094002101 152.07813773418493 1068.8028085476758 74.92326624263075z");
      attr_dev(path5, "fill", "rgba(250,250,250,0.75)");
      attr_dev(path5, "class", "triangle-float3 svelte-gyho7n");
      add_location(path5, file, 11, 8, 1414);
      attr_dev(g, "mask", "url(\"#SvgjsMask1000\")");
      attr_dev(g, "fill", "none");
      add_location(g, file, 4, 4, 232);
      attr_dev(rect1, "width", "100%");
      attr_dev(rect1, "height", "100%");
      attr_dev(rect1, "fill", "#ffffff");
      add_location(rect1, file, 15, 12, 1668);
      attr_dev(mask, "id", "SvgjsMask1000");
      add_location(mask, file, 14, 8, 1629);
      add_location(defs, file, 13, 4, 1613);
      attr_dev(svg, "class", "svg svelte-gyho7n");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "version", "1.1");
      attr_dev(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      attr_dev(svg, "xmlns:svgjs", "http://svgjs.com/svgjs");
      attr_dev(svg, "preserveAspectRatio", "none");
      attr_dev(svg, "height", "100%");
      attr_dev(svg, "width", "100%");
      add_location(svg, file, 3, 0, 24);
      attr_dev(b, "class", "svelte-gyho7n");
      add_location(b, file, 22, 1, 1792);
      attr_dev(i0, "class", "fas fa-envelope svelte-gyho7n");
      add_location(i0, file, 25, 3, 1865);
      attr_dev(input0, "type", "email");
      attr_dev(input0, "placeholder", "email");
      attr_dev(input0, "class", "svelte-gyho7n");
      add_location(input0, file, 26, 3, 1901);
      attr_dev(div0, "class", "text-field svelte-gyho7n");
      add_location(div0, file, 24, 2, 1836);
      attr_dev(i1, "class", "fas fa-lock svelte-gyho7n");
      add_location(i1, file, 29, 3, 1985);
      attr_dev(input1, "type", "password");
      attr_dev(input1, "placeholder", "password");
      attr_dev(input1, "class", "svelte-gyho7n");
      add_location(input1, file, 30, 3, 2017);
      attr_dev(div1, "class", "text-field svelte-gyho7n");
      add_location(div1, file, 28, 2, 1956);
      attr_dev(span, "class", "mdc-button__ripple");
      add_location(span, file, 34, 4, 2188);
      attr_dev(button, "class", "mdc-button mdc-button--raised svelte-gyho7n");
      set_style(button, "background", "#6f7fc7");
      add_location(button, file, 33, 3, 2108);
      attr_dev(div2, "class", "button-field svelte-gyho7n");
      add_location(div2, file, 32, 2, 2077);
      attr_dev(p0, "class", "svelte-gyho7n");
      add_location(p0, file, 40, 2, 2280);
      attr_dev(i2, "class", "fab fa-google svelte-gyho7n");
      add_location(i2, file, 42, 3, 2325);
      attr_dev(i3, "class", "fab fa-facebook svelte-gyho7n");
      add_location(i3, file, 43, 3, 2359);
      attr_dev(i4, "class", "fab fa-github svelte-gyho7n");
      add_location(i4, file, 44, 3, 2395);
      attr_dev(i5, "class", "fab fa-instagram svelte-gyho7n");
      add_location(i5, file, 45, 3, 2429);
      attr_dev(div3, "class", "other-login svelte-gyho7n");
      add_location(div3, file, 41, 2, 2295);
      attr_dev(p1, "class", "svelte-gyho7n");
      add_location(p1, file, 47, 2, 2475);
      attr_dev(a, "href", "");
      attr_dev(a, "title", "");
      attr_dev(a, "class", "svelte-gyho7n");
      add_location(a, file, 48, 2, 2508);
      attr_dev(div4, "class", "multi svelte-gyho7n");
      add_location(div4, file, 23, 1, 1813);
      attr_dev(div5, "class", "register svelte-gyho7n");
      add_location(div5, file, 21, 0, 1767);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, g);
      append_dev(g, rect0);
      append_dev(g, path0);
      append_dev(g, path1);
      append_dev(g, path2);
      append_dev(g, path3);
      append_dev(g, path4);
      append_dev(g, path5);
      append_dev(svg, defs);
      append_dev(defs, mask);
      append_dev(mask, rect1);
      insert_dev(target, t0, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, b);
      append_dev(b, t1);
      append_dev(div5, t2);
      append_dev(div5, div4);
      append_dev(div4, div0);
      append_dev(div0, i0);
      append_dev(div0, t3);
      append_dev(div0, input0);
      append_dev(div4, t4);
      append_dev(div4, div1);
      append_dev(div1, i1);
      append_dev(div1, t5);
      append_dev(div1, input1);
      append_dev(div4, t6);
      append_dev(div4, div2);
      append_dev(div2, button);
      append_dev(button, span);
      append_dev(button, t7);
      append_dev(div4, t8);
      append_dev(div4, p0);
      append_dev(p0, t9);
      append_dev(div4, t10);
      append_dev(div4, div3);
      append_dev(div3, i2);
      append_dev(div3, t11);
      append_dev(div3, i3);
      append_dev(div3, t12);
      append_dev(div3, i4);
      append_dev(div3, t13);
      append_dev(div3, i5);
      append_dev(div4, t14);
      append_dev(div4, p1);
      append_dev(p1, t15);
      append_dev(div4, t16);
      append_dev(div4, a);
      append_dev(a, t17);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Login", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Login> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Login = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Login, _SvelteComponentDev);

  var _super = _createSuper(Login);

  function Login(options) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Login",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Login;
}(SvelteComponentDev);

export default Login;
