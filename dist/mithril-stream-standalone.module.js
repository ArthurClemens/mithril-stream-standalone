function g(t) {
  return p(function() {
    return t.map(function(e) {
      return e();
    });
  }, t);
}
function h(t, e, u) {
  var n = u.map(function(c) {
    var f = t(e, c);
    return f !== i.SKIP && (e = f), f;
  });
  return n(e), n;
}
function l(t, e) {
  var u = t.map(function(c) {
    return c[0];
  }), n = p(function() {
    var c = arguments[arguments.length - 1];
    return u.forEach(function(f, r) {
      c.indexOf(f) > -1 && (e = t[r][1](e, f()));
    }), e;
  }, u);
  return n(e), n;
}
function _() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return g(e).map(function(u) {
    return t.apply(void 0, u);
  });
}
function s(t) {
  return t._state === "pending" || t._state === "active" || t._state === "changing";
}
var i = function(t) {
  var e = [], u = [];
  function n(r) {
    return arguments.length && r !== i.SKIP && (t = r, s(n) && (n._changing(), n._state = "active", e.slice().forEach(function(a, o) {
      s(a) && a(this[o](t));
    }, u.slice()))), t;
  }
  n.constructor = i, n._state = arguments.length && t !== i.SKIP ? "active" : "pending", n._parents = [], n._changing = function() {
    s(n) && (n._state = "changing"), e.forEach(function(r) {
      r._changing();
    });
  }, n._map = function(r, a) {
    var o = a ? i() : i(r(t));
    return o._parents.push(n), e.push(o), u.push(r), o;
  }, n.map = function(r) {
    return n._map(r, n._state !== "active");
  };
  var c;
  function f() {
    return c = i(), c.map(function(r) {
      return r === !0 && (n._parents.forEach(function(a) {
        a._unregisterChild(n);
      }), n._state = "ended", n._parents.length = e.length = u.length = 0), r;
    }), c;
  }
  return n.toJSON = function() {
    return t != null && typeof t.toJSON == "function" ? t.toJSON() : t;
  }, n["fantasy-land/map"] = n.map, n["fantasy-land/ap"] = function(r) {
    return p(
      function(a, o) {
        return a()(o());
      },
      [r, n]
    );
  }, n._unregisterChild = function(r) {
    var a = e.indexOf(r);
    a !== -1 && (e.splice(a, 1), u.splice(a, 1));
  }, Object.defineProperty(n, "end", {
    get: function() {
      return c || f();
    }
  }), n;
};
function p(t, e) {
  var u = e.every(function(a) {
    if (a.constructor !== i)
      throw new Error(
        "Ensure that each item passed to stream.combine/stream.merge/lift is a stream."
      );
    return a._state === "active";
  }), n = u ? i(t.apply(null, e.concat([e]))) : i(), c = [], f = e.map(function(a) {
    return a._map(function(o) {
      return c.push(a), (u || e.every(function(m) {
        return m._state !== "pending";
      })) && (u = !0, n(t.apply(null, e.concat([c]))), c = []), o;
    }, !0);
  }), r = n.end.map(function(a) {
    a === !0 && (f.forEach(function(o) {
      o.end(!0);
    }), r.end(!0));
  });
  return n;
}
i.SKIP = {};
i.lift = _;
i.scan = h;
i.merge = g;
i.combine = p;
i.scanMerge = l;
i["fantasy-land/of"] = i;
var d = !1;
Object.defineProperty(i, "HALT", {
  get: function() {
    return d || console.log("HALT is deprecated and has been renamed to SKIP"), d = !0, i.SKIP;
  }
});
export {
  i as default
};
//# sourceMappingURL=mithril-stream-standalone.module.js.map
