/*
 RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
*/
var requirejs, require, define;
(function(ga) {
    function ka(b, c, d, g) { return g || "" }

    function K(b) { return "[object Function]" === Q.call(b) }

    function L(b) { return "[object Array]" === Q.call(b) }

    function y(b, c) { if (b) { var d; for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1); } }

    function X(b, c) { if (b) { var d; for (d = b.length - 1; - 1 < d && (!b[d] || !c(b[d], d, b)); --d); } }

    function x(b, c) { return la.call(b, c) }

    function e(b, c) { return x(b, c) && b[c] }

    function D(b, c) {
        for (var d in b)
            if (x(b, d) && c(b[d], d)) break
    }

    function Y(b, c, d, g) {
        c && D(c, function(c, e) {
            if (d || !x(b, e)) !g || "object" !==
                typeof c || !c || L(c) || K(c) || c instanceof RegExp ? b[e] = c : (b[e] || (b[e] = {}), Y(b[e], c, d, g))
        });
        return b
    }

    function z(b, c) { return function() { return c.apply(b, arguments) } }

    function ha(b) { throw b; }

    function ia(b) {
        if (!b) return b;
        var c = ga;
        y(b.split("."), function(b) { c = c[b] });
        return c
    }

    function F(b, c, d, g) {
        c = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + b);
        c.requireType = b;
        c.requireModules = g;
        d && (c.originalError = d);
        return c
    }

    function ma(b) {
        function c(a, n, b) {
            var h, k, f, c, d, l, g, r;
            n = n && n.split("/");
            var q = p.map,
                m = q && q["*"];
            if (a) {
                a = a.split("/");
                k = a.length - 1;
                p.nodeIdCompat && U.test(a[k]) && (a[k] = a[k].replace(U, ""));
                "." === a[0].charAt(0) && n && (k = n.slice(0, n.length - 1), a = k.concat(a));
                k = a;
                for (f = 0; f < k.length; f++) c = k[f], "." === c ? (k.splice(f, 1), --f) : ".." === c && 0 !== f && (1 !== f || ".." !== k[2]) && ".." !== k[f - 1] && 0 < f && (k.splice(f - 1, 2), f -= 2);
                a = a.join("/")
            }
            if (b && q && (n || m)) {
                k = a.split("/");
                f = k.length;
                a: for (; 0 < f; --f) {
                    d = k.slice(0, f).join("/");
                    if (n)
                        for (c = n.length; 0 < c; --c)
                            if (b = e(q, n.slice(0, c).join("/")))
                                if (b = e(b, d)) {
                                    h = b;
                                    l = f;
                                    break a
                                }!g && m && e(m, d) &&
                        (g = e(m, d), r = f)
                }!h && g && (h = g, l = r);
                h && (k.splice(0, l, h), a = k.join("/"))
            }
            return (h = e(p.pkgs, a)) ? h : a
        }

        function d(a) { E && y(document.getElementsByTagName("script"), function(n) { if (n.getAttribute("data-requiremodule") === a && n.getAttribute("data-requirecontext") === l.contextName) return n.parentNode.removeChild(n), !0 }) }

        function m(a) { var n = e(p.paths, a); if (n && L(n) && 1 < n.length) return n.shift(), l.require.undef(a), l.makeRequire(null, { skipMap: !0 })([a]), !0 }

        function r(a) {
            var n, b = a ? a.indexOf("!") : -1; - 1 < b && (n = a.substring(0,
                b), a = a.substring(b + 1, a.length));
            return [n, a]
        }

        function q(a, n, b, h) {
            var k, f, d = null,
                g = n ? n.name : null,
                p = a,
                q = !0,
                m = "";
            a || (q = !1, a = "_@r" + (Q += 1));
            a = r(a);
            d = a[0];
            a = a[1];
            d && (d = c(d, g, h), f = e(v, d));
            a && (d ? m = f && f.normalize ? f.normalize(a, function(a) { return c(a, g, h) }) : -1 === a.indexOf("!") ? c(a, g, h) : a : (m = c(a, g, h), a = r(m), d = a[0], m = a[1], b = !0, k = l.nameToUrl(m)));
            b = !d || f || b ? "" : "_unnormalized" + (T += 1);
            return { prefix: d, name: m, parentMap: n, unnormalized: !!b, url: k, originalName: p, isDefine: q, id: (d ? d + "!" + m : m) + b }
        }

        function u(a) {
            var b = a.id,
                c = e(t, b);
            c || (c = t[b] = new l.Module(a));
            return c
        }

        function w(a, b, c) {
            var h = a.id,
                k = e(t, h);
            if (!x(v, h) || k && !k.defineEmitComplete)
                if (k = u(a), k.error && "error" === b) c(k.error);
                else k.on(b, c);
            else "defined" === b && c(v[h])
        }

        function A(a, b) {
            var c = a.requireModules,
                h = !1;
            if (b) b(a);
            else if (y(c, function(b) { if (b = e(t, b)) b.error = a, b.events.error && (h = !0, b.emit("error", a)) }), !h) g.onError(a)
        }

        function B() {
            V.length && (y(V, function(a) {
                var b = a[0];
                "string" === typeof b && (l.defQueueMap[b] = !0);
                G.push(a)
            }), V = [])
        }

        function C(a) {
            delete t[a];
            delete Z[a]
        }

        function J(a, b, c) {
            var h = a.map.id;
            a.error ? a.emit("error", a.error) : (b[h] = !0, y(a.depMaps, function(h, f) {
                var d = h.id,
                    g = e(t, d);
                !g || a.depMatched[f] || c[d] || (e(b, d) ? (a.defineDep(f, v[d]), a.check()) : J(g, b, c))
            }), c[h] = !0)
        }

        function H() {
            var a, b, c = (a = 1E3 * p.waitSeconds) && l.startTime + a < (new Date).getTime(),
                h = [],
                k = [],
                f = !1,
                g = !0;
            if (!aa) {
                aa = !0;
                D(Z, function(a) {
                    var l = a.map,
                        e = l.id;
                    if (a.enabled && (l.isDefine || k.push(a), !a.error))
                        if (!a.inited && c) m(e) ? f = b = !0 : (h.push(e), d(e));
                        else if (!a.inited && a.fetched && l.isDefine &&
                        (f = !0, !l.prefix)) return g = !1
                });
                if (c && h.length) return a = F("timeout", "Load timeout for modules: " + h, null, h), a.contextName = l.contextName, A(a);
                g && y(k, function(a) { J(a, {}, {}) });
                c && !b || !f || !E && !ja || ba || (ba = setTimeout(function() {
                    ba = 0;
                    H()
                }, 50));
                aa = !1
            }
        }

        function I(a) { x(v, a[0]) || u(q(a[0], null, !0)).init(a[1], a[2]) }

        function O(a) {
            a = a.currentTarget || a.srcElement;
            var b = l.onScriptLoad;
            a.detachEvent && !ca ? a.detachEvent("onreadystatechange", b) : a.removeEventListener("load", b, !1);
            b = l.onScriptError;
            a.detachEvent && !ca || a.removeEventListener("error",
                b, !1);
            return { node: a, id: a && a.getAttribute("data-requiremodule") }
        }

        function P() {
            var a;
            for (B(); G.length;) {
                a = G.shift();
                if (null === a[0]) return A(F("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                I(a)
            }
            l.defQueueMap = {}
        }
        var aa, da, l, R, ba, p = { waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {} },
            t = {},
            Z = {},
            ea = {},
            G = [],
            v = {},
            W = {},
            fa = {},
            Q = 1,
            T = 1;
        R = {
            require: function(a) { return a.require ? a.require : a.require = l.makeRequire(a.map) },
            exports: function(a) {
                a.usingExports = !0;
                if (a.map.isDefine) return a.exports ?
                    v[a.map.id] = a.exports : a.exports = v[a.map.id] = {}
            },
            module: function(a) { return a.module ? a.module : a.module = { id: a.map.id, uri: a.map.url, config: function() { return e(p.config, a.map.id) || {} }, exports: a.exports || (a.exports = {}) } }
        };
        da = function(a) {
            this.events = e(ea, a.id) || {};
            this.map = a;
            this.shim = e(p.shim, a.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        };
        da.prototype = {
            init: function(a, b, c, h) {
                h = h || {};
                if (!this.inited) {
                    this.factory = b;
                    if (c) this.on("error", c);
                    else this.events.error &&
                        (c = z(this, function(a) { this.emit("error", a) }));
                    this.depMaps = a && a.slice(0);
                    this.errback = c;
                    this.inited = !0;
                    this.ignore = h.ignore;
                    h.enabled || this.enabled ? this.enable() : this.check()
                }
            },
            defineDep: function(a, b) { this.depMatched[a] || (this.depMatched[a] = !0, --this.depCount, this.depExports[a] = b) },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0;
                    l.startTime = (new Date).getTime();
                    var a = this.map;
                    if (this.shim) l.makeRequire(this.map, { enableBuildCallback: !0 })(this.shim.deps || [], z(this, function() {
                        return a.prefix ? this.callPlugin() :
                            this.load()
                    }));
                    else return a.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var a = this.map.url;
                W[a] || (W[a] = !0, l.load(this.map.id, a))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var a, b, c = this.map.id;
                    b = this.depExports;
                    var h = this.exports,
                        k = this.factory;
                    if (!this.inited) x(l.defQueueMap, c) || this.fetch();
                    else if (this.error) this.emit("error", this.error);
                    else if (!this.defining) {
                        this.defining = !0;
                        if (1 > this.depCount && !this.defined) {
                            if (K(k)) {
                                if (this.events.error && this.map.isDefine || g.onError !==
                                    ha) try { h = l.execCb(c, k, b, h) } catch (d) { a = d } else h = l.execCb(c, k, b, h);
                                this.map.isDefine && void 0 === h && ((b = this.module) ? h = b.exports : this.usingExports && (h = this.exports));
                                if (a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", A(this.error = a)
                            } else h = k;
                            this.exports = h;
                            if (this.map.isDefine && !this.ignore && (v[c] = h, g.onResourceLoad)) {
                                var f = [];
                                y(this.depMaps, function(a) { f.push(a.normalizedMap || a) });
                                g.onResourceLoad(l, this.map, f)
                            }
                            C(c);
                            this.defined = !0
                        }
                        this.defining = !1;
                        this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                    }
                }
            },
            callPlugin: function() {
                var a = this.map,
                    b = a.id,
                    d = q(a.prefix);
                this.depMaps.push(d);
                w(d, "defined", z(this, function(h) {
                    var k, f, d = e(fa, this.map.id),
                        M = this.map.name,
                        r = this.map.parentMap ? this.map.parentMap.name : null,
                        m = l.makeRequire(a.parentMap, { enableBuildCallback: !0 });
                    if (this.map.unnormalized) {
                        if (h.normalize && (M = h.normalize(M, function(a) { return c(a, r, !0) }) ||
                                ""), f = q(a.prefix + "!" + M, this.map.parentMap), w(f, "defined", z(this, function(a) {
                                this.map.normalizedMap = f;
                                this.init([], function() { return a }, null, { enabled: !0, ignore: !0 })
                            })), h = e(t, f.id)) {
                            this.depMaps.push(f);
                            if (this.events.error) h.on("error", z(this, function(a) { this.emit("error", a) }));
                            h.enable()
                        }
                    } else d ? (this.map.url = l.nameToUrl(d), this.load()) : (k = z(this, function(a) { this.init([], function() { return a }, null, { enabled: !0 }) }), k.error = z(this, function(a) {
                        this.inited = !0;
                        this.error = a;
                        a.requireModules = [b];
                        D(t, function(a) {
                            0 ===
                                a.map.id.indexOf(b + "_unnormalized") && C(a.map.id)
                        });
                        A(a)
                    }), k.fromText = z(this, function(h, c) {
                        var d = a.name,
                            f = q(d),
                            M = S;
                        c && (h = c);
                        M && (S = !1);
                        u(f);
                        x(p.config, b) && (p.config[d] = p.config[b]);
                        try { g.exec(h) } catch (e) { return A(F("fromtexteval", "fromText eval for " + b + " failed: " + e, e, [b])) }
                        M && (S = !0);
                        this.depMaps.push(f);
                        l.completeLoad(d);
                        m([d], k)
                    }), h.load(a.name, m, k, p))
                }));
                l.enable(d, this);
                this.pluginMaps[d.id] = d
            },
            enable: function() {
                Z[this.map.id] = this;
                this.enabling = this.enabled = !0;
                y(this.depMaps, z(this, function(a,
                    b) {
                    var c, h;
                    if ("string" === typeof a) {
                        a = q(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap);
                        this.depMaps[b] = a;
                        if (c = e(R, a.id)) { this.depExports[b] = c(this); return }
                        this.depCount += 1;
                        w(a, "defined", z(this, function(a) { this.undefed || (this.defineDep(b, a), this.check()) }));
                        this.errback ? w(a, "error", z(this, this.errback)) : this.events.error && w(a, "error", z(this, function(a) { this.emit("error", a) }))
                    }
                    c = a.id;
                    h = t[c];
                    x(R, c) || !h || h.enabled || l.enable(a, this)
                }));
                D(this.pluginMaps, z(this, function(a) {
                    var b = e(t, a.id);
                    b && !b.enabled && l.enable(a, this)
                }));
                this.enabling = !1;
                this.check()
            },
            on: function(a, b) {
                var c = this.events[a];
                c || (c = this.events[a] = []);
                c.push(b)
            },
            emit: function(a, b) { y(this.events[a], function(a) { a(b) }); "error" === a && delete this.events[a] }
        };
        l = {
            config: p,
            contextName: b,
            registry: t,
            defined: v,
            urlFetched: W,
            defQueue: G,
            defQueueMap: {},
            Module: da,
            makeModuleMap: q,
            nextTick: g.nextTick,
            onError: A,
            configure: function(a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                if ("string" === typeof a.urlArgs) {
                    var b =
                        a.urlArgs;
                    a.urlArgs = function(a, c) { return (-1 === c.indexOf("?") ? "?" : "&") + b }
                }
                var c = p.shim,
                    h = { paths: !0, bundles: !0, config: !0, map: !0 };
                D(a, function(a, b) { h[b] ? (p[b] || (p[b] = {}), Y(p[b], a, !0, !0)) : p[b] = a });
                a.bundles && D(a.bundles, function(a, b) { y(a, function(a) { a !== b && (fa[a] = b) }) });
                a.shim && (D(a.shim, function(a, b) {
                    L(a) && (a = { deps: a });
                    !a.exports && !a.init || a.exportsFn || (a.exportsFn = l.makeShimExports(a));
                    c[b] = a
                }), p.shim = c);
                a.packages && y(a.packages, function(a) {
                    var b;
                    a = "string" === typeof a ? { name: a } : a;
                    b = a.name;
                    a.location &&
                        (p.paths[b] = a.location);
                    p.pkgs[b] = a.name + "/" + (a.main || "main").replace(na, "").replace(U, "")
                });
                D(t, function(a, b) { a.inited || a.map.unnormalized || (a.map = q(b, null, !0)) });
                (a.deps || a.callback) && l.require(a.deps || [], a.callback)
            },
            makeShimExports: function(a) {
                return function() {
                    var b;
                    a.init && (b = a.init.apply(ga, arguments));
                    return b || a.exports && ia(a.exports)
                }
            },
            makeRequire: function(a, n) {
                function m(c, d, f) {
                    var e, r;
                    n.enableBuildCallback && d && K(d) && (d.__requireJsBuild = !0);
                    if ("string" === typeof c) {
                        if (K(d)) return A(F("requireargs",
                            "Invalid require call"), f);
                        if (a && x(R, c)) return R[c](t[a.id]);
                        if (g.get) return g.get(l, c, a, m);
                        e = q(c, a, !1, !0);
                        e = e.id;
                        return x(v, e) ? v[e] : A(F("notloaded", 'Module name "' + e + '" has not been loaded yet for context: ' + b + (a ? "" : ". Use require([])")))
                    }
                    P();
                    l.nextTick(function() {
                        P();
                        r = u(q(null, a));
                        r.skipMap = n.skipMap;
                        r.init(c, d, f, { enabled: !0 });
                        H()
                    });
                    return m
                }
                n = n || {};
                Y(m, {
                    isBrowser: E,
                    toUrl: function(b) {
                        var d, f = b.lastIndexOf("."),
                            g = b.split("/")[0]; - 1 !== f && ("." !== g && ".." !== g || 1 < f) && (d = b.substring(f, b.length), b = b.substring(0,
                            f));
                        return l.nameToUrl(c(b, a && a.id, !0), d, !0)
                    },
                    defined: function(b) { return x(v, q(b, a, !1, !0).id) },
                    specified: function(b) { b = q(b, a, !1, !0).id; return x(v, b) || x(t, b) }
                });
                a || (m.undef = function(b) {
                    B();
                    var c = q(b, a, !0),
                        f = e(t, b);
                    f.undefed = !0;
                    d(b);
                    delete v[b];
                    delete W[c.url];
                    delete ea[b];
                    X(G, function(a, c) { a[0] === b && G.splice(c, 1) });
                    delete l.defQueueMap[b];
                    f && (f.events.defined && (ea[b] = f.events), C(b))
                });
                return m
            },
            enable: function(a) { e(t, a.id) && u(a).enable() },
            completeLoad: function(a) {
                var b, c, d = e(p.shim, a) || {},
                    g = d.exports;
                for (B(); G.length;) {
                    c = G.shift();
                    if (null === c[0]) {
                        c[0] = a;
                        if (b) break;
                        b = !0
                    } else c[0] === a && (b = !0);
                    I(c)
                }
                l.defQueueMap = {};
                c = e(t, a);
                if (!b && !x(v, a) && c && !c.inited)
                    if (!p.enforceDefine || g && ia(g)) I([a, d.deps || [], d.exportsFn]);
                    else return m(a) ? void 0 : A(F("nodefine", "No define call for " + a, null, [a]));
                H()
            },
            nameToUrl: function(a, b, c) {
                var d, k, f, m;
                (d = e(p.pkgs, a)) && (a = d);
                if (d = e(fa, a)) return l.nameToUrl(d, b, c);
                if (g.jsExtRegExp.test(a)) d = a + (b || "");
                else {
                    d = p.paths;
                    k = a.split("/");
                    for (f = k.length; 0 < f; --f)
                        if (m = k.slice(0, f).join("/"),
                            m = e(d, m)) {
                            L(m) && (m = m[0]);
                            k.splice(0, f, m);
                            break
                        }
                    d = k.join("/");
                    d += b || (/^data\:|^blob\:|\?/.test(d) || c ? "" : ".js");
                    d = ("/" === d.charAt(0) || d.match(/^[\w\+\.\-]+:/) ? "" : p.baseUrl) + d
                }
                return p.urlArgs && !/^blob\:/.test(d) ? d + p.urlArgs(a, d) : d
            },
            load: function(a, b) { g.load(l, a, b) },
            execCb: function(a, b, c, d) { return b.apply(d, c) },
            onScriptLoad: function(a) { if ("load" === a.type || oa.test((a.currentTarget || a.srcElement).readyState)) N = null, a = O(a), l.completeLoad(a.id) },
            onScriptError: function(a) {
                var b = O(a);
                if (!m(b.id)) {
                    var c = [];
                    D(t, function(a, d) { 0 !== d.indexOf("_@r") && y(a.depMaps, function(a) { if (a.id === b.id) return c.push(d), !0 }) });
                    return A(F("scripterror", 'Script error for "' + b.id + (c.length ? '", needed by: ' + c.join(", ") : '"'), a, [b.id]))
                }
            }
        };
        l.require = l.makeRequire();
        return l
    }

    function pa() {
        if (N && "interactive" === N.readyState) return N;
        X(document.getElementsByTagName("script"), function(b) { if ("interactive" === b.readyState) return N = b });
        return N
    }
    var g, B, C, H, O, I, N, P, u, T, qa = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        ra = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        U = /\.js$/,
        na = /^\.\//;
    B = Object.prototype;
    var Q = B.toString,
        la = B.hasOwnProperty,
        E = !("undefined" === typeof window || "undefined" === typeof navigator || !window.document),
        ja = !E && "undefined" !== typeof importScripts,
        oa = E && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        ca = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
        J = {},
        w = {},
        V = [],
        S = !1;
    if ("undefined" === typeof define) {
        if ("undefined" !== typeof requirejs) {
            if (K(requirejs)) return;
            w = requirejs;
            requirejs = void 0
        }
        "undefined" === typeof require ||
            K(require) || (w = require, require = void 0);
        g = requirejs = function(b, c, d, m) {
            var r, q = "_";
            L(b) || "string" === typeof b || (r = b, L(c) ? (b = c, c = d, d = m) : b = []);
            r && r.context && (q = r.context);
            (m = e(J, q)) || (m = J[q] = g.s.newContext(q));
            r && m.configure(r);
            return m.require(b, c, d)
        };
        g.config = function(b) { return g(b) };
        g.nextTick = "undefined" !== typeof setTimeout ? function(b) { setTimeout(b, 4) } : function(b) { b() };
        require || (require = g);
        g.version = "2.2.0";
        g.jsExtRegExp = /^\/|:|\?|\.js$/;
        g.isBrowser = E;
        B = g.s = { contexts: J, newContext: ma };
        g({});
        y(["toUrl",
            "undef", "defined", "specified"
        ], function(b) { g[b] = function() { var c = J._; return c.require[b].apply(c, arguments) } });
        E && (C = B.head = document.getElementsByTagName("head")[0], H = document.getElementsByTagName("base")[0]) && (C = B.head = H.parentNode);
        g.onError = ha;
        g.createNode = function(b, c, d) {
            c = b.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            c.type = b.scriptType || "text/javascript";
            c.charset = "utf-8";
            c.async = !0;
            return c
        };
        g.load = function(b, c, d) {
            var m = b && b.config || {},
                e;
            if (E) {
                e = g.createNode(m, c, d);
                e.setAttribute("data-requirecontext", b.contextName);
                e.setAttribute("data-requiremodule", c);
                !e.attachEvent || e.attachEvent.toString && 0 > e.attachEvent.toString().indexOf("[native code") || ca ? (e.addEventListener("load", b.onScriptLoad, !1), e.addEventListener("error", b.onScriptError, !1)) : (S = !0, e.attachEvent("onreadystatechange", b.onScriptLoad));
                e.src = d;
                if (m.onNodeCreated) m.onNodeCreated(e, m, c, d);
                P = e;
                H ? C.insertBefore(e, H) : C.appendChild(e);
                P = null;
                return e
            }
            if (ja) try {
                setTimeout(function() {},
                    0), importScripts(d), b.completeLoad(c)
            } catch (q) { b.onError(F("importscripts", "importScripts failed for " + c + " at " + d, q, [c])) }
        };
        E && !w.skipDataMain && X(document.getElementsByTagName("script"), function(b) { C || (C = b.parentNode); if (O = b.getAttribute("data-main")) return u = O, w.baseUrl || -1 !== u.indexOf("!") || (I = u.split("/"), u = I.pop(), T = I.length ? I.join("/") + "/" : "./", w.baseUrl = T), u = u.replace(U, ""), g.jsExtRegExp.test(u) && (u = O), w.deps = w.deps ? w.deps.concat(u) : [u], !0 });
        define = function(b, c, d) {
            var e, g;
            "string" !== typeof b &&
                (d = c, c = b, b = null);
            L(c) || (d = c, c = null);
            !c && K(d) && (c = [], d.length && (d.toString().replace(qa, ka).replace(ra, function(b, d) { c.push(d) }), c = (1 === d.length ? ["require"] : ["require", "exports", "module"]).concat(c)));
            S && (e = P || pa()) && (b || (b = e.getAttribute("data-requiremodule")), g = J[e.getAttribute("data-requirecontext")]);
            g ? (g.defQueue.push([b, c, d]), g.defQueueMap[b] = !0) : V.push([b, c, d])
        };
        define.amd = { jQuery: !0 };
        g.exec = function(b) { return eval(b) };
        g(w)
    }
})(this);;
(function() {
    if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
        var c = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
            return -1
        }(Muse.assets.required, "require.js");
        if (-1 != c) { Muse.assets.required.splice(c, 1); for (var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++) { var a = c[b]; if ("generator" == a.getAttribute("name")) { "2018.1.0.386" != a.getAttribute("content") && Muse.assets.outOfDate.push("require.js"); break } } }
    }
})();
c &&
    D(c, function(c, e) {
        if (d || !x(b, e))
            !g ||
            "object" !== typeof c ||
            !c ||
            L(c) ||
            K(c) ||
            c instanceof RegExp ?
            (b[e] = c) :
            (b[e] || (b[e] = {}), Y(b[e], c, d, g));
    });
return b;
}

function z(b, c) {
    return function() {
        return c.apply(b, arguments);
    };
}

function ha(b) {
    throw b;
}

function ia(b) {
    if (!b) return b;
    var c = ga;
    y(b.split("."), function(b) {
        c = c[b];
    });
    return c;
}

function F(b, c, d, g) {
    c = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + b);
    c.requireType = b;
    c.requireModules = g;
    d && (c.originalError = d);
    return c;
}

function ma(b) {
    function c(a, n, b) {
        var h, k, f, c, d, l, g, r;
        n = n && n.split("/");
        var q = p.map,
            m = q && q["*"];
        if (a) {
            a = a.split("/");
            k = a.length - 1;
            p.nodeIdCompat && U.test(a[k]) && (a[k] = a[k].replace(U, ""));
            "." === a[0].charAt(0) &&
                n &&
                ((k = n.slice(0, n.length - 1)), (a = k.concat(a)));
            k = a;
            for (f = 0; f < k.length; f++)
                (c = k[f]),
                "." === c ?
                (k.splice(f, 1), --f) :
                ".." === c &&
                0 !== f &&
                (1 !== f || ".." !== k[2]) &&
                ".." !== k[f - 1] &&
                0 < f &&
                (k.splice(f - 1, 2), (f -= 2));
            a = a.join("/");
        }
        if (b && q && (n || m)) {
            k = a.split("/");
            f = k.length;
            a: for (; 0 < f; --f) {
                d = k.slice(0, f).join("/");
                if (n)
                    for (c = n.length; 0 < c; --c)
                        if ((b = e(q, n.slice(0, c).join("/"))))
                            if ((b = e(b, d))) {
                                h = b;
                                l = f;
                                break a;
                            }!g && m && e(m, d) && ((g = e(m, d)), (r = f));
            }!h && g && ((h = g), (l = r));
            h && (k.splice(0, l, h), (a = k.join("/")));
        }
        return (h = e(p.pkgs, a)) ? h : a;
    }

    function d(a) {
        E &&
            y(document.getElementsByTagName("script"), function(n) {
                if (
                    n.getAttribute("data-requiremodule") === a &&
                    n.getAttribute("data-requirecontext") === l.contextName
                )
                    return n.parentNode.removeChild(n), !0;
            });
    }

    function m(a) {
        var n = e(p.paths, a);
        if (n && L(n) && 1 < n.length)
            return (
                n.shift(),
                l.require.undef(a),
                l.makeRequire(null, { skipMap: !0 })([a]), !0
            );
    }

    function r(a) {
        var n,
            b = a ? a.indexOf("!") : -1; -
        1 < b && ((n = a.substring(0, b)), (a = a.substring(b + 1, a.length)));
        return [n, a];
    }

    function q(a, n, b, h) {
        var k,
            f,
            d = null,
            g = n ? n.name : null,
            p = a,
            q = !0,
            m = "";
        a || ((q = !1), (a = "_@r" + (Q += 1)));
        a = r(a);
        d = a[0];
        a = a[1];
        d && ((d = c(d, g, h)), (f = e(v, d)));
        a &&
            (d ?
                (m =
                    f && f.normalize ?
                    f.normalize(a, function(a) {
                        return c(a, g, h);
                    }) :
                    -1 === a.indexOf("!") ?
                    c(a, g, h) :
                    a) :
                ((m = c(a, g, h)),
                    (a = r(m)),
                    (d = a[0]),
                    (m = a[1]),
                    (b = !0),
                    (k = l.nameToUrl(m))));
        b = !d || f || b ? "" : "_unnormalized" + (T += 1);
        return {
            prefix: d,
            name: m,
            parentMap: n,
            unnormalized: !!b,
            url: k,
            originalName: p,
            isDefine: q,
            id: (d ? d + "!" + m : m) + b,
        };
    }

    function u(a) {
        var b = a.id,
            c = e(t, b);
        c || (c = t[b] = new l.Module(a));
        return c;
    }

    function w(a, b, c) {
        var h = a.id,
            k = e(t, h);
        if (!x(v, h) || (k && !k.defineEmitComplete))
            if (((k = u(a)), k.error && "error" === b)) c(k.error);
            else k.on(b, c);
        else "defined" === b && c(v[h]);
    }

    function A(a, b) {
        var c = a.requireModules,
            h = !1;
        if (b) b(a);
        else if (
            (y(c, function(b) {
                if ((b = e(t, b)))
                    (b.error = a), b.events.error && ((h = !0), b.emit("error", a));
            }), !h)
        )
            g.onError(a);
    }

    function B() {
        V.length &&
            (y(V, function(a) {
                    var b = a[0];
                    "string" === typeof b && (l.defQueueMap[b] = !0);
                    G.push(a);
                }),
                (V = []));
    }

    function C(a) {
        delete t[a];
        delete Z[a];
    }

    function J(a, b, c) {
        var h = a.map.id;
        a.error ?
            a.emit("error", a.error) :
            ((b[h] = !0),
                y(a.depMaps, function(h, f) {
                    var d = h.id,
                        g = e(t, d);
                    !g ||
                        a.depMatched[f] ||
                        c[d] ||
                        (e(b, d) ? (a.defineDep(f, v[d]), a.check()) : J(g, b, c));
                }),
                (c[h] = !0));
    }

    function H() {
        var a,
            b,
            c = (a = 1e3 * p.waitSeconds) && l.startTime + a < new Date().getTime(),
            h = [],
            k = [],
            f = !1,
            g = !0;
        if (!aa) {
            aa = !0;
            D(Z, function(a) {
                var l = a.map,
                    e = l.id;
                if (a.enabled && (l.isDefine || k.push(a), !a.error))
                    if (!a.inited && c) m(e) ? (f = b = !0) : (h.push(e), d(e));
                    else if (!a.inited &&
                    a.fetched &&
                    l.isDefine &&
                    ((f = !0), !l.prefix)
                )
                    return (g = !1);
            });
            if (c && h.length)
                return (
                    (a = F("timeout", "Load timeout for modules: " + h, null, h)),
                    (a.contextName = l.contextName),
                    A(a)
                );
            g &&
                y(k, function(a) {
                    J(a, {}, {});
                });
            (c && !b) ||
            !f ||
                (!E && !ja) ||
                ba ||
                (ba = setTimeout(function() {
                    ba = 0;
                    H();
                }, 50));
            aa = !1;
        }
    }

    function I(a) {
        x(v, a[0]) || u(q(a[0], null, !0)).init(a[1], a[2]);
    }

    function O(a) {
        a = a.currentTarget || a.srcElement;
        var b = l.onScriptLoad;
        a.detachEvent && !ca ?
            a.detachEvent("onreadystatechange", b) :
            a.removeEventListener("load", b, !1);
        b = l.onScriptError;
        (a.detachEvent && !ca) || a.removeEventListener("error", b, !1);
        return { node: a, id: a && a.getAttribute("data-requiremodule") };
    }

    function P() {
        var a;
        for (B(); G.length;) {
            a = G.shift();
            if (null === a[0])
                return A(
                    F(
                        "mismatch",
                        "Mismatched anonymous define() module: " + a[a.length - 1]
                    )
                );
            I(a);
        }
        l.defQueueMap = {};
    }
    var aa,
        da,
        l,
        R,
        ba,
        p = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {},
        },
        t = {},
        Z = {},
        ea = {},
        G = [],
        v = {},
        W = {},
        fa = {},
        Q = 1,
        T = 1;
    R = {
        require: function(a) {
            return a.require ? a.require : (a.require = l.makeRequire(a.map));
        },
        exports: function(a) {
            a.usingExports = !0;
            if (a.map.isDefine)
                return a.exports ?
                    (v[a.map.id] = a.exports) :
                    (a.exports = v[a.map.id] = {});
        },
        module: function(a) {
            return a.module ?
                a.module :
                (a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function() {
                        return e(p.config, a.map.id) || {};
                    },
                    exports: a.exports || (a.exports = {}),
                });
        },
    };
    da = function(a) {
        this.events = e(ea, a.id) || {};
        this.map = a;
        this.shim = e(p.shim, a.id);
        this.depExports = [];
        this.depMaps = [];
        this.depMatched = [];
        this.pluginMaps = {};
        this.depCount = 0;
    };
    da.prototype = {
        init: function(a, b, c, h) {
            h = h || {};
            if (!this.inited) {
                this.factory = b;
                if (c) this.on("error", c);
                else
                    this.events.error &&
                    (c = z(this, function(a) {
                        this.emit("error", a);
                    }));
                this.depMaps = a && a.slice(0);
                this.errback = c;
                this.inited = !0;
                this.ignore = h.ignore;
                h.enabled || this.enabled ? this.enable() : this.check();
            }
        },
        defineDep: function(a, b) {
            this.depMatched[a] ||
                ((this.depMatched[a] = !0),
                    --this.depCount,
                    (this.depExports[a] = b));
        },
        fetch: function() {
            if (!this.fetched) {
                this.fetched = !0;
                l.startTime = new Date().getTime();
                var a = this.map;
                if (this.shim)
                    l.makeRequire(this.map, { enableBuildCallback: !0 })(
                        this.shim.deps || [],
                        z(this, function() {
                            return a.prefix ? this.callPlugin() : this.load();
                        })
                    );
                else return a.prefix ? this.callPlugin() : this.load();
            }
        },
        load: function() {
            var a = this.map.url;
            W[a] || ((W[a] = !0), l.load(this.map.id, a));
        },
        check: function() {
            if (this.enabled && !this.enabling) {
                var a,
                    b,
                    c = this.map.id;
                b = this.depExports;
                var h = this.exports,
                    k = this.factory;
                if (!this.inited) x(l.defQueueMap, c) || this.fetch();
                else if (this.error) this.emit("error", this.error);
                else if (!this.defining) {
                    this.defining = !0;
                    if (1 > this.depCount && !this.defined) {
                        if (K(k)) {
                            if (
                                (this.events.error && this.map.isDefine) ||
                                g.onError !== ha
                            )
                                try {
                                    h = l.execCb(c, k, b, h);
                                } catch (d) {
                                    a = d;
                                }
                            else h = l.execCb(c, k, b, h);
                            this.map.isDefine &&
                                void 0 === h &&
                                ((b = this.module) ?
                                    (h = b.exports) :
                                    this.usingExports && (h = this.exports));
                            if (a)
                                return (
                                    (a.requireMap = this.map),
                                    (a.requireModules = this.map.isDefine ?
                                        [this.map.id] :
                                        null),
                                    (a.requireType = this.map.isDefine ? "define" : "require"),
                                    A((this.error = a))
                                );
                        } else h = k;
                        this.exports = h;
                        if (
                            this.map.isDefine &&
                            !this.ignore &&
                            ((v[c] = h), g.onResourceLoad)
                        ) {
                            var f = [];
                            y(this.depMaps, function(a) {
                                f.push(a.normalizedMap || a);
                            });
                            g.onResourceLoad(l, this.map, f);
                        }
                        C(c);
                        this.defined = !0;
                    }
                    this.defining = !1;
                    this.defined &&
                        !this.defineEmitted &&
                        ((this.defineEmitted = !0),
                            this.emit("defined", this.exports),
                            (this.defineEmitComplete = !0));
                }
            }
        },
        callPlugin: function() {
            var a = this.map,
                b = a.id,
                d = q(a.prefix);
            this.depMaps.push(d);
            w(
                d,
                "defined",
                z(this, function(h) {
                    var k,
                        f,
                        d = e(fa, this.map.id),
                        M = this.map.name,
                        r = this.map.parentMap ? this.map.parentMap.name : null,
                        m = l.makeRequire(a.parentMap, { enableBuildCallback: !0 });
                    if (this.map.unnormalized) {
                        if (
                            (h.normalize &&
                                (M =
                                    h.normalize(M, function(a) {
                                        return c(a, r, !0);
                                    }) || ""),
                                (f = q(a.prefix + "!" + M, this.map.parentMap)),
                                w(
                                    f,
                                    "defined",
                                    z(this, function(a) {
                                        this.map.normalizedMap = f;
                                        this.init(
                                            [],
                                            function() {
                                                return a;
                                            },
                                            null, { enabled: !0, ignore: !0 }
                                        );
                                    })
                                ),
                                (h = e(t, f.id)))
                        ) {
                            this.depMaps.push(f);
                            if (this.events.error)
                                h.on(
                                    "error",
                                    z(this, function(a) {
                                        this.emit("error", a);
                                    })
                                );
                            h.enable();
                        }
                    } else
                        d ?
                        ((this.map.url = l.nameToUrl(d)), this.load()) :
                        ((k = z(this, function(a) {
                                this.init(
                                    [],
                                    function() {
                                        return a;
                                    },
                                    null, { enabled: !0 }
                                );
                            })),
                            (k.error = z(this, function(a) {
                                this.inited = !0;
                                this.error = a;
                                a.requireModules = [b];
                                D(t, function(a) {
                                    0 === a.map.id.indexOf(b + "_unnormalized") &&
                                        C(a.map.id);
                                });
                                A(a);
                            })),
                            (k.fromText = z(this, function(h, c) {
                                var d = a.name,
                                    f = q(d),
                                    M = S;
                                c && (h = c);
                                M && (S = !1);
                                u(f);
                                x(p.config, b) && (p.config[d] = p.config[b]);
                                try {
                                    g.exec(h);
                                } catch (e) {
                                    return A(
                                        F(
                                            "fromtexteval",
                                            "fromText eval for " + b + " failed: " + e,
                                            e, [b]
                                        )
                                    );
                                }
                                M && (S = !0);
                                this.depMaps.push(f);
                                l.completeLoad(d);
                                m([d], k);
                            })),
                            h.load(a.name, m, k, p));
                })
            );
            l.enable(d, this);
            this.pluginMaps[d.id] = d;
        },
        enable: function() {
            Z[this.map.id] = this;
            this.enabling = this.enabled = !0;
            y(
                this.depMaps,
                z(this, function(a, b) {
                    var c, h;
                    if ("string" === typeof a) {
                        a = q(
                            a,
                            this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap
                        );
                        this.depMaps[b] = a;
                        if ((c = e(R, a.id))) {
                            this.depExports[b] = c(this);
                            return;
                        }
                        this.depCount += 1;
                        w(
                            a,
                            "defined",
                            z(this, function(a) {
                                this.undefed || (this.defineDep(b, a), this.check());
                            })
                        );
                        this.errback ?
                            w(a, "error", z(this, this.errback)) :
                            this.events.error &&
                            w(
                                a,
                                "error",
                                z(this, function(a) {
                                    this.emit("error", a);
                                })
                            );
                    }
                    c = a.id;
                    h = t[c];
                    x(R, c) || !h || h.enabled || l.enable(a, this);
                })
            );
            D(
                this.pluginMaps,
                z(this, function(a) {
                    var b = e(t, a.id);
                    b && !b.enabled && l.enable(a, this);
                })
            );
            this.enabling = !1;
            this.check();
        },
        on: function(a, b) {
            var c = this.events[a];
            c || (c = this.events[a] = []);
            c.push(b);
        },
        emit: function(a, b) {
            y(this.events[a], function(a) {
                a(b);
            });
            "error" === a && delete this.events[a];
        },
    };
    l = {
        config: p,
        contextName: b,
        registry: t,
        defined: v,
        urlFetched: W,
        defQueue: G,
        defQueueMap: {},
        Module: da,
        makeModuleMap: q,
        nextTick: g.nextTick,
        onError: A,
        configure: function(a) {
            a.baseUrl &&
                "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) &&
                (a.baseUrl += "/");
            if ("string" === typeof a.urlArgs) {
                var b = a.urlArgs;
                a.urlArgs = function(a, c) {
                    return (-1 === c.indexOf("?") ? "?" : "&") + b;
                };
            }
            var c = p.shim,
                h = { paths: !0, bundles: !0, config: !0, map: !0 };
            D(a, function(a, b) {
                h[b] ? (p[b] || (p[b] = {}), Y(p[b], a, !0, !0)) : (p[b] = a);
            });
            a.bundles &&
                D(a.bundles, function(a, b) {
                    y(a, function(a) {
                        a !== b && (fa[a] = b);
                    });
                });
            a.shim &&
                (D(a.shim, function(a, b) {
                        L(a) && (a = { deps: a });
                        (!a.exports && !a.init) ||
                        a.exportsFn ||
                            (a.exportsFn = l.makeShimExports(a));
                        c[b] = a;
                    }),
                    (p.shim = c));
            a.packages &&
                y(a.packages, function(a) {
                    var b;
                    a = "string" === typeof a ? { name: a } : a;
                    b = a.name;
                    a.location && (p.paths[b] = a.location);
                    p.pkgs[b] =
                        a.name + "/" + (a.main || "main").replace(na, "").replace(U, "");
                });
            D(t, function(a, b) {
                a.inited || a.map.unnormalized || (a.map = q(b, null, !0));
            });
            (a.deps || a.callback) && l.require(a.deps || [], a.callback);
        },
        makeShimExports: function(a) {
            return function() {
                var b;
                a.init && (b = a.init.apply(ga, arguments));
                return b || (a.exports && ia(a.exports));
            };
        },
        makeRequire: function(a, n) {
            function m(c, d, f) {
                var e, r;
                n.enableBuildCallback && d && K(d) && (d.__requireJsBuild = !0);
                if ("string" === typeof c) {
                    if (K(d)) return A(F("requireargs", "Invalid require call"), f);
                    if (a && x(R, c)) return R[c](t[a.id]);
                    if (g.get) return g.get(l, c, a, m);
                    e = q(c, a, !1, !0);
                    e = e.id;
                    return x(v, e) ?
                        v[e] :
                        A(
                            F(
                                "notloaded",
                                'Module name "' +
                                e +
                                '" has not been loaded yet for context: ' +
                                b +
                                (a ? "" : ". Use require([])")
                            )
                        );
                }
                P();
                l.nextTick(function() {
                    P();
                    r = u(q(null, a));
                    r.skipMap = n.skipMap;
                    r.init(c, d, f, { enabled: !0 });
                    H();
                });
                return m;
            }
            n = n || {};
            Y(m, {
                isBrowser: E,
                toUrl: function(b) {
                    var d,
                        f = b.lastIndexOf("."),
                        g = b.split("/")[0]; -
                    1 !== f &&
                        (("." !== g && ".." !== g) || 1 < f) &&
                        ((d = b.substring(f, b.length)), (b = b.substring(0, f)));
                    return l.nameToUrl(c(b, a && a.id, !0), d, !0);
                },
                defined: function(b) {
                    return x(v, q(b, a, !1, !0).id);
                },
                specified: function(b) {
                    b = q(b, a, !1, !0).id;
                    return x(v, b) || x(t, b);
                },
            });
            a ||
                (m.undef = function(b) {
                    B();
                    var c = q(b, a, !0),
                        f = e(t, b);
                    f.undefed = !0;
                    d(b);
                    delete v[b];
                    delete W[c.url];
                    delete ea[b];
                    X(G, function(a, c) {
                        a[0] === b && G.splice(c, 1);
                    });
                    delete l.defQueueMap[b];
                    f && (f.events.defined && (ea[b] = f.events), C(b));
                });
            return m;
        },
        enable: function(a) {
            e(t, a.id) && u(a).enable();
        },
        completeLoad: function(a) {
            var b,
                c,
                d = e(p.shim, a) || {},
                g = d.exports;
            for (B(); G.length;) {
                c = G.shift();
                if (null === c[0]) {
                    c[0] = a;
                    if (b) break;
                    b = !0;
                } else c[0] === a && (b = !0);
                I(c);
            }
            l.defQueueMap = {};
            c = e(t, a);
            if (!b && !x(v, a) && c && !c.inited)
                if (!p.enforceDefine || (g && ia(g)))
                    I([a, d.deps || [], d.exportsFn]);
                else
                    return m(a) ?
                        void 0 :
                        A(F("nodefine", "No define call for " + a, null, [a]));
            H();
        },
        nameToUrl: function(a, b, c) {
            var d, k, f, m;
            (d = e(p.pkgs, a)) && (a = d);
            if ((d = e(fa, a))) return l.nameToUrl(d, b, c);
            if (g.jsExtRegExp.test(a)) d = a + (b || "");
            else {
                d = p.paths;
                k = a.split("/");
                for (f = k.length; 0 < f; --f)
                    if (((m = k.slice(0, f).join("/")), (m = e(d, m)))) {
                        L(m) && (m = m[0]);
                        k.splice(0, f, m);
                        break;
                    }
                d = k.join("/");
                d += b || (/^data\:|^blob\:|\?/.test(d) || c ? "" : ".js");
                d =
                    ("/" === d.charAt(0) || d.match(/^[\w\+\.\-]+:/) ? "" : p.baseUrl) +
                    d;
            }
            return p.urlArgs && !/^blob\:/.test(d) ? d + p.urlArgs(a, d) : d;
        },
        load: function(a, b) {
            g.load(l, a, b);
        },
        execCb: function(a, b, c, d) {
            return b.apply(d, c);
        },
        onScriptLoad: function(a) {
            if (
                "load" === a.type ||
                oa.test((a.currentTarget || a.srcElement).readyState)
            )
                (N = null), (a = O(a)), l.completeLoad(a.id);
        },
        onScriptError: function(a) {
            var b = O(a);
            if (!m(b.id)) {
                var c = [];
                D(t, function(a, d) {
                    0 !== d.indexOf("_@r") &&
                        y(a.depMaps, function(a) {
                            if (a.id === b.id) return c.push(d), !0;
                        });
                });
                return A(
                    F(
                        "scripterror",
                        'Script error for "' +
                        b.id +
                        (c.length ? '", needed by: ' + c.join(", ") : '"'),
                        a, [b.id]
                    )
                );
            }
        },
    };
    l.require = l.makeRequire();
    return l;
}

function pa() {
    if (N && "interactive" === N.readyState) return N;
    X(document.getElementsByTagName("script"), function(b) {
        if ("interactive" === b.readyState) return (N = b);
    });
    return N;
}
var g,
    B,
    C,
    H,
    O,
    I,
    N,
    P,
    u,
    T,
    qa = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    ra = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    U = /\.js$/,
    na = /^\.\//;
B = Object.prototype;
var Q = B.toString,
    la = B.hasOwnProperty,
    E = !(
        "undefined" === typeof window ||
        "undefined" === typeof navigator ||
        !window.document
    ),
    ja = !E && "undefined" !== typeof importScripts,
    oa =
    E && "PLAYSTATION 3" === navigator.platform ?
    /^complete$/ :
    /^(complete|loaded)$/,
    ca = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
    J = {},
    w = {},
    V = [],
    S = !1;
if ("undefined" === typeof define) {
    if ("undefined" !== typeof requirejs) {
        if (K(requirejs)) return;
        w = requirejs;
        requirejs = void 0;
    }
    "undefined" === typeof require ||
        K(require) ||
        ((w = require), (require = void 0));
    g = requirejs = function(b, c, d, m) {
        var r,
            q = "_";
        L(b) ||
            "string" === typeof b ||
            ((r = b), L(c) ? ((b = c), (c = d), (d = m)) : (b = []));
        r && r.context && (q = r.context);
        (m = e(J, q)) || (m = J[q] = g.s.newContext(q));
        r && m.configure(r);
        return m.require(b, c, d);
    };
    g.config = function(b) {
        return g(b);
    };
    g.nextTick =
        "undefined" !== typeof setTimeout ?

        function(b) {
            setTimeout(b, 4);
        } :
        function(b) {
            b();
        };
    require || (require = g);
    g.version = "2.2.0";
    g.jsExtRegExp = /^\/|:|\?|\.js$/;
    g.isBrowser = E;
    B = g.s = { contexts: J, newContext: ma };
    g({});
    y(["toUrl", "undef", "defined", "specified"], function(b) {
        g[b] = function() {
            var c = J._;
            return c.require[b].apply(c, arguments);
        };
    });
    E &&
        ((C = B.head = document.getElementsByTagName("head")[0]),
            (H = document.getElementsByTagName("base")[0])) &&
        (C = B.head = H.parentNode);
    g.onError = ha;
    g.createNode = function(b, c, d) {
        c = b.xhtml ?
            document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "html:script"
            ) :
            document.createElement("script");
        c.type = b.scriptType || "text/javascript";
        c.charset = "utf-8";
        c.async = !0;
        return c;
    };
    g.load = function(b, c, d) {
        var m = (b && b.config) || {},
            e;
        if (E) {
            e = g.createNode(m, c, d);
            e.setAttribute("data-requirecontext", b.contextName);
            e.setAttribute("data-requiremodule", c);
            !e.attachEvent ||
                (e.attachEvent.toString &&
                    0 > e.attachEvent.toString().indexOf("[native code")) ||
                ca ?
                (e.addEventListener("load", b.onScriptLoad, !1),
                    e.addEventListener("error", b.onScriptError, !1)) :
                ((S = !0), e.attachEvent("onreadystatechange", b.onScriptLoad));
            e.src = d;
            if (m.onNodeCreated) m.onNodeCreated(e, m, c, d);
            P = e;
            H ? C.insertBefore(e, H) : C.appendChild(e);
            P = null;
            return e;
        }
        if (ja)
            try {
                setTimeout(function() {}, 0), importScripts(d), b.completeLoad(c);
            } catch (q) {
                b.onError(
                    F(
                        "importscripts",
                        "importScripts failed for " + c + " at " + d,
                        q, [c]
                    )
                );
            }
    };
    E &&
        !w.skipDataMain &&
        X(document.getElementsByTagName("script"), function(b) {
            C || (C = b.parentNode);
            if ((O = b.getAttribute("data-main")))
                return (
                    (u = O),
                    w.baseUrl ||
                    -1 !== u.indexOf("!") ||
                    ((I = u.split("/")),
                        (u = I.pop()),
                        (T = I.length ? I.join("/") + "/" : "./"),
                        (w.baseUrl = T)),
                    (u = u.replace(U, "")),
                    g.jsExtRegExp.test(u) && (u = O),
                    (w.deps = w.deps ? w.deps.concat(u) : [u]), !0
                );
        });
    define = function(b, c, d) {
        var e, g;
        "string" !== typeof b && ((d = c), (c = b), (b = null));
        L(c) || ((d = c), (c = null));
        !c &&
            K(d) &&
            ((c = []),
                d.length &&
                (d
                    .toString()
                    .replace(qa, ka)
                    .replace(ra, function(b, d) {
                        c.push(d);
                    }),
                    (c = (
                        1 === d.length ? ["require"] : ["require", "exports", "module"]
                    ).concat(c))));
        S &&
            (e = P || pa()) &&
            (b || (b = e.getAttribute("data-requiremodule")),
                (g = J[e.getAttribute("data-requirecontext")]));
        g
            ?
            (g.defQueue.push([b, c, d]), (g.defQueueMap[b] = !0)) :
            V.push([b, c, d]);
    };
    define.amd = { jQuery: !0 };
    g.exec = function(b) {
        return eval(b);
    };
    g(w);
}
})(this);
(function() {
    if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) {
        var c = (function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
            return -1;
        })(Muse.assets.required, "require.js");
        if (-1 != c) {
            Muse.assets.required.splice(c, 1);
            for (
                var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++
            ) {
                var a = c[b];
                if ("generator" == a.getAttribute("name")) {
                    "2018.1.0.386" != a.getAttribute("content") &&
                        Muse.assets.outOfDate.push("require.js");
                    break;
                }
            }
        }
    }
})();