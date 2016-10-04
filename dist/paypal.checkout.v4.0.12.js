this["ppxo"] = function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
}([ /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(module, exports, __webpack_require__) {
    "use strict";
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    if (window.paypal && window.paypal.Button && window.paypal.Checkout) {
        var error = "PayPal Checkout Integration Script already loaded on page";
        if (window.console) {
            if (window.console.warn) {
                window.console.warn(error);
            } else {
                window.console.log(error);
            }
        }
        module.exports = window.paypal;
    } else {
        var paypal = __webpack_require__(/*! ./interface */ 1);
        module.exports = paypal;
        module.exports["default"] = module.exports;
        if (window.paypal) {
            window.paypal = _extends({}, window.paypal, paypal);
        } else {
            window.paypal = paypal;
        }
        window.PAYPAL = __webpack_require__(/*! ./legacy/interface */ 87);
    }
}, /*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.version = exports.onPossiblyUnhandledException = exports.request = exports.isEligible = exports.config = exports.setup = exports.apps = exports.checkout = exports.PayPalCheckout = exports.Checkout = exports.Button = undefined;
    var _components = __webpack_require__(/*! ./components */ 2);
    Object.defineProperty(exports, "Button", {
        enumerable: true,
        get: function get() {
            return _components.Button;
        }
    });
    Object.defineProperty(exports, "Checkout", {
        enumerable: true,
        get: function get() {
            return _components.Checkout;
        }
    });
    Object.defineProperty(exports, "PayPalCheckout", {
        enumerable: true,
        get: function get() {
            return _components.PayPalCheckout;
        }
    });
    var _interface = __webpack_require__(/*! ./legacy/interface */ 87);
    Object.defineProperty(exports, "checkout", {
        enumerable: true,
        get: function get() {
            return _interface.checkout;
        }
    });
    Object.defineProperty(exports, "apps", {
        enumerable: true,
        get: function get() {
            return _interface.apps;
        }
    });
    var _setup = __webpack_require__(/*! ./setup */ 93);
    Object.defineProperty(exports, "setup", {
        enumerable: true,
        get: function get() {
            return _setup.setup;
        }
    });
    var _config = __webpack_require__(/*! ./config */ 63);
    Object.defineProperty(exports, "config", {
        enumerable: true,
        get: function get() {
            return _config.config;
        }
    });
    var _eligibility = __webpack_require__(/*! ./eligibility */ 94);
    Object.defineProperty(exports, "isEligible", {
        enumerable: true,
        get: function get() {
            return _eligibility.isEligible;
        }
    });
    var _lib = __webpack_require__(/*! ./lib */ 65);
    Object.defineProperty(exports, "request", {
        enumerable: true,
        get: function get() {
            return _lib.request;
        }
    });
    __webpack_require__(/*! ./bridge */ 79);
    var _src = __webpack_require__(/*! xcomponent/src */ 5);
    var _src2 = _interopRequireDefault(_src);
    var _src3 = __webpack_require__(/*! post-robot/src */ 9);
    var _src4 = _interopRequireDefault(_src3);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    __webpack_require__(/*! ./fallback */ 95);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    _src4["default"].CONFIG.ALLOW_POSTMESSAGE_POPUP = false;
    module.exports.xcomponent = _src2["default"];
    module.exports.postRobot = _src4["default"];
    var onPossiblyUnhandledException = exports.onPossiblyUnhandledException = _promise.SyncPromise.onPossiblyUnhandledException;
    var version = exports.version = "4.0.12";
}, /*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _button = __webpack_require__(/*! ./button */ 3);
    Object.keys(_button).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _button[key];
            }
        });
    });
    var _checkout = __webpack_require__(/*! ./checkout */ 80);
    Object.keys(_checkout).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _checkout[key];
            }
        });
    });
}, /*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _component = __webpack_require__(/*! ./component */ 4);
    Object.keys(_component).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _component[key];
            }
        });
    });
}, /*!********************************************!*\
  !*** ./src/components/button/component.js ***!
  \********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Button = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _src = __webpack_require__(/*! xcomponent/src */ 5);
    var _src2 = _interopRequireDefault(_src);
    var _config = __webpack_require__(/*! ../../config */ 63);
    var _rest = __webpack_require__(/*! ../../rest */ 64);
    var _checkout = __webpack_require__(/*! ../checkout */ 80);
    var _common = __webpack_require__(/*! ../common */ 84);
    var _componentTemplate = __webpack_require__(/*! ./componentTemplate.htm */ 86);
    var _componentTemplate2 = _interopRequireDefault(_componentTemplate);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    var Button = exports.Button = _src2["default"].create({
        tag: "paypal-button",
        name: "ppbutton",
        buildUrl: function buildUrl(instance) {
            var env = instance.props.env || _config.config.env;
            return _config.config.buttonUrls[env];
        },
        contexts: {
            iframe: true,
            lightbox: false,
            popup: false
        },
        scrolling: false,
        componentTemplate: _componentTemplate2["default"],
        get version() {
            return _config.config.ppobjects ? "4.0.12" : "4.0.12";
        },
        validateProps: function validateProps(component, props) {
            var required = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
            if (required) {
                return (0, _common.validateProps)(props);
            }
        },
        props: {
            env: {
                type: "string",
                required: false,
                def: function def() {
                    return _config.config.env;
                }
            },
            stage: {
                type: "string",
                required: false,
                def: function def() {
                    return _config.config.stage;
                }
            },
            clientID: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            paymentToken: {
                type: "string",
                required: false,
                getter: true,
                queryParam: false,
                def: function def(props) {
                    if (props.billingToken || props.billingDetails) {
                        return;
                    }
                    return function() {
                        var env = props.env || _config.config.env;
                        return (0, _rest.createCheckoutToken)(env, this.props.clientID[env], this.props.paymentDetails);
                    };
                }
            },
            paymentDetails: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            billingToken: {
                type: "string",
                required: false,
                getter: true,
                queryParam: false,
                def: function def(props) {
                    if (props.paymentToken || props.paymentDetails) {
                        return;
                    }
                    return function() {
                        var env = props.env || _config.config.env;
                        return (0, _rest.createBillingToken)(env, this.props.clientID[env], this.props.billingDetails);
                    };
                }
            },
            billingDetails: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            autoExecute: {
                type: "boolean",
                required: false,
                sendToChild: false
            },
            submitForm: {
                type: "boolean",
                required: false,
                def: false,
                sendToChild: false
            },
            onPaymentAuthorize: {
                type: "function",
                required: false,
                autoClose: false,
                def: function def(props) {
                    if (props.autoExecute && props.onPaymentComplete) {
                        var _ret = function() {
                            var onPaymentComplete = props.onPaymentComplete;
                            delete props.onPaymentComplete;
                            return {
                                v: function v() {
                                    console.warn("Calling onPaymentComplete, but this feature is not yet implemented so do not rely on transaction being executed");
                                    onPaymentComplete.apply(this, arguments);
                                }
                            };
                        }();
                        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                    }
                },
                decorate: function decorate(original) {
                    if (original) {
                        return function() {
                            _checkout.Checkout.contexts.lightbox = true;
                            return original.apply(this, arguments);
                        };
                    }
                }
            },
            onPaymentComplete: {
                type: "function",
                required: false,
                autoClose: false,
                decorate: function decorate(original) {
                    if (original) {
                        return function() {
                            _checkout.Checkout.contexts.lightbox = true;
                            return original.apply(this, arguments);
                        };
                    }
                }
            },
            onPaymentCancel: {
                type: "function",
                required: false,
                autoClose: false
            },
            onClick: {
                type: "function",
                required: false
            },
            dimensions: {
                type: "object",
                required: false,
                def: function def(props) {
                    var size = props.buttonStyle && props.buttonStyle.size || "small";
                    return {
                        tiny: {
                            width: 80,
                            height: 22
                        },
                        small: {
                            width: 148,
                            height: 40
                        },
                        medium: {
                            width: 230,
                            height: 48
                        }
                    }[size];
                }
            },
            locale: {
                type: "string",
                required: false,
                def: function def() {
                    return "en_US";
                }
            },
            buttonStyle: {
                type: "object",
                required: false,
                queryParam: false,
                def: function def() {
                    return {
                        color: "gold",
                        shape: "pill",
                        size: "small",
                        label: "checkout"
                    };
                }
            }
        },
        autoResize: true,
        dimensions: {
            width: 146,
            height: 40
        }
    });
}, /*!***********************************!*\
  !*** ./~/xcomponent/src/index.js ***!
  \***********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.registerLogger = exports.destroyAll = exports.getByTag = undefined;
    exports.create = create;
    var _component = __webpack_require__(/*! ./component */ 6);
    Object.defineProperty(exports, "getByTag", {
        enumerable: true,
        get: function get() {
            return _component.getByTag;
        }
    });
    Object.defineProperty(exports, "destroyAll", {
        enumerable: true,
        get: function get() {
            return _component.destroyAll;
        }
    });
    var _error = __webpack_require__(/*! ./error */ 49);
    Object.keys(_error).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _error[key];
            }
        });
    });
    var _lib = __webpack_require__(/*! ./lib */ 36);
    Object.defineProperty(exports, "registerLogger", {
        enumerable: true,
        get: function get() {
            return _lib.registerLogger;
        }
    });
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _constants = __webpack_require__(/*! ./constants */ 45);
    var CONSTANTS = _interopRequireWildcard(_constants);
    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }
            newObj["default"] = obj;
            return newObj;
        }
    }
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function create(options) {
        return new _component.Component(options);
    }
    module.exports.CONSTANTS = CONSTANTS;
    module.exports.postRobot = _src2["default"];
    exports["default"] = module.exports;
}, /*!*********************************************!*\
  !*** ./~/xcomponent/src/component/index.js ***!
  \*********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _component = __webpack_require__(/*! ./component */ 7);
    Object.keys(_component).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _component[key];
            }
        });
    });
    var _parent = __webpack_require__(/*! ./parent */ 47);
    Object.keys(_parent).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _parent[key];
            }
        });
    });
    var _child = __webpack_require__(/*! ./child */ 42);
    Object.keys(_child).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _child[key];
            }
        });
    });
}, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/component/index.js ***!
  \*******************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Component = exports.components = undefined;
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    exports.getByTag = getByTag;
    var _base = __webpack_require__(/*! ../base */ 8);
    var _child = __webpack_require__(/*! ../child */ 42);
    var _parent = __webpack_require__(/*! ../parent */ 47);
    var _delegate = __webpack_require__(/*! ../delegate */ 53);
    var _props = __webpack_require__(/*! ./props */ 54);
    var _window = __webpack_require__(/*! ../window */ 43);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    var _validate2 = __webpack_require__(/*! ./validate */ 55);
    var _parent2 = __webpack_require__(/*! ./templates/parent.htm */ 56);
    var _parent3 = _interopRequireDefault(_parent2);
    var _component = __webpack_require__(/*! ./templates/component.htm */ 57);
    var _component2 = _interopRequireDefault(_component);
    var _drivers = __webpack_require__(/*! ../../drivers */ 58);
    var drivers = _interopRequireWildcard(_drivers);
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }
            newObj["default"] = obj;
            return newObj;
        }
    }
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var components = exports.components = {};
    var Component = exports.Component = function(_BaseComponent) {
        _inherits(Component, _BaseComponent);
        function Component() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            _classCallCheck(this, Component);
            var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, options));
            _this.validate(options);
            _this.addProp(options, "tag");
            _this.addProp(options, "name", _this.tag.replace(/-/g, "_"));
            _this.props = _extends({}, _props.internalProps, options.props);
            _this.addProp(options, "dimensions");
            _this.addProp(options, "scrolling");
            _this.addProp(options, "version", "latest");
            _this.addProp(options, "defaultEnv");
            _this.addProp(options, "envUrls");
            _this.addProp(options, "buildUrl");
            _this.addProp(options, "bridgeUrl");
            _this.addProp(options, "bridgeUrls");
            _this.addProp(options, "url");
            _this.addProp(options, "contexts", {});
            for (var _iterator = _constants.CONTEXT_TYPES_LIST, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var context = _ref;
                _this.contexts[context] = _this.contexts[context] === undefined ? true : Boolean(_this.contexts[context]);
            }
            _this.addProp(options, "closeDelay");
            _this.addProp(options, "resizeDelay");
            _this.addProp(options, "defaultContext");
            _this.addProp(options, "singleton");
            _this.addProp(options, "autoResize", false);
            _this.addProp(options, "autocloseParentTemplate", true);
            _this.addProp(options, "parentTemplate", _parent3["default"]);
            _this.addProp(options, "componentTemplate", _component2["default"]);
            _this.addProp(options, "validateProps");
            components[_this.tag] = _this;
            for (var _iterator2 = Object.keys(drivers), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var driverName = _ref2;
                var driver = drivers[driverName];
                if (driver.isActive()) {
                    driver.register(_this);
                }
            }
            if ((0, _window.isXComponentWindow)()) {
                var componentMeta = (0, _window.getComponentMeta)();
                if (componentMeta.tag === _this.tag) {
                    window.xchild = new _child.ChildComponent(_this);
                }
            }
            return _this;
        }
        _createClass(Component, [ {
            key: "isXComponent",
            value: function isXComponent() {
                return (0, _window.isXComponentWindow)();
            }
        }, {
            key: "parent",
            value: function parent(options) {
                return new _parent.ParentComponent(this, options);
            }
        }, {
            key: "child",
            value: function child(options) {
                if (!window.xchild) {
                    throw new Error("Child not instantiated");
                }
                if (window.xchild.component !== this) {}
                if (options && options.onEnter) {
                    options.onEnter.call(window.xchild);
                }
                return window.xchild;
            }
        }, {
            key: "attach",
            value: function attach(options) {
                return this.child(options);
            }
        }, {
            key: "init",
            value: function init(props) {
                return new _parent.ParentComponent(this, {
                    props: props
                });
            }
        }, {
            key: "delegate",
            value: function delegate() {
                var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                return new _delegate.DelegateComponent(this, options);
            }
        }, {
            key: "render",
            value: function render(props, element, context) {
                return this.init(props).render(element, context);
            }
        }, {
            key: "renderToParent",
            value: function renderToParent(props, element, context) {
                return this.init(props).renderToParent(element, context);
            }
        }, {
            key: "getByTag",
            value: function getByTag(tag) {
                return components[tag];
            }
        }, {
            key: "validate",
            value: function validate(options) {
                return (0, _validate2.validate)(options);
            }
        }, {
            key: "log",
            value: function log(event) {
                var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                _lib.logger.info("xc_" + this.name + "_" + event, payload);
            }
        }, {
            key: "logWarning",
            value: function logWarning(event, payload) {
                _lib.logger.warn("xc_" + this.name + "_" + event, payload);
            }
        }, {
            key: "logError",
            value: function logError(event, payload) {
                _lib.logger.error("xc_" + this.name + "_" + event, payload);
            }
        } ]);
        return Component;
    }(_base.BaseComponent);
    function getByTag(tag) {
        return components[tag];
    }
    var _loop = function _loop() {
        if (_isArray3) {
            if (_i3 >= _iterator3.length) return "break";
            _ref3 = _iterator3[_i3++];
        } else {
            _i3 = _iterator3.next();
            if (_i3.done) return "break";
            _ref3 = _i3.value;
        }
        var context = _ref3;
        var contextName = (0, _lib.capitalizeFirstLetter)(context);
        Component.prototype["render" + contextName] = function(props, element) {
            return this.init(props).render(element, context);
        };
        Component.prototype["render" + contextName + "ToParent"] = function(props, element) {
            return this.init(props).renderToParent(element, context);
        };
    };
    for (var _iterator3 = _constants.CONTEXT_TYPES_LIST, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
        var _ref3;
        var _ret = _loop();
        if (_ret === "break") break;
    }
}, /*!********************************************!*\
  !*** ./~/xcomponent/src/component/base.js ***!
  \********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BaseComponent = undefined;
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _lib = __webpack_require__(/*! ../lib */ 36);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var BaseComponent = exports.BaseComponent = function() {
        function BaseComponent() {
            _classCallCheck(this, BaseComponent);
        }
        _createClass(BaseComponent, [ {
            key: "addProp",
            value: function addProp(options, name, def) {
                (0, _lib.copyProp)(options, this, name, def);
            }
        }, {
            key: "registerForCleanup",
            value: function registerForCleanup(task) {
                this.cleanupTasks = this.cleanupTasks || [];
                this.cleanupTasks.push(task);
                return this;
            }
        }, {
            key: "cleanup",
            value: function cleanup(err) {
                while (this.cleanupTasks && this.cleanupTasks.length) {
                    var task = this.cleanupTasks.pop();
                    task(err);
                }
            }
        }, {
            key: "hasCleanupTasks",
            value: function hasCleanupTasks() {
                return Boolean(this.cleanupTasks.length);
            }
        }, {
            key: "setForCleanup",
            value: function setForCleanup(key, value) {
                var _this = this;
                this[key] = value;
                this.registerForCleanup(function() {
                    delete _this[key];
                });
            }
        }, {
            key: "tryCatch",
            value: function tryCatch(method, doOnce) {
                var self = this;
                var errored = false;
                var wrapper = function wrapper() {
                    if (errored) {
                        return;
                    }
                    try {
                        return method.apply(this, arguments);
                    } catch (err) {
                        errored = true;
                        return self.error(err);
                    }
                };
                if (doOnce !== false) {
                    wrapper = (0, _lib.once)(wrapper);
                }
                return wrapper;
            }
        }, {
            key: "listen",
            value: function listen(win, domain) {
                var _this2 = this;
                if (!win) {
                    throw new Error("[" + this.component.tag + "] window to listen to not set");
                }
                if (!domain) {
                    throw new Error("Must pass domain to listen to");
                }
                if (!this.listeners) {
                    return;
                }
                var listeners = this.listeners();
                var _loop = function _loop() {
                    if (_isArray) {
                        if (_i >= _iterator.length) return "break";
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) return "break";
                        _ref = _i.value;
                    }
                    var listenerName = _ref;
                    var listener = _src2["default"].on(listenerName, {
                        window: win,
                        domain: domain,
                        errorHandler: function errorHandler(err) {
                            return _this2.error(err);
                        }
                    }, function(_ref2) {
                        var source = _ref2.source;
                        var data = _ref2.data;
                        _this2.component.log("listener_" + listenerName.replace(/^xcomponent_/, ""));
                        return listeners[listenerName].call(_this2, source, data);
                    });
                    _this2.registerForCleanup(function() {
                        listener.cancel();
                    });
                };
                for (var _iterator = Object.keys(listeners), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    var _ret = _loop();
                    if (_ret === "break") break;
                }
            }
        } ]);
        return BaseComponent;
    }();
}, /*!***********************************!*\
  !*** ./~/post-robot/src/index.js ***!
  \***********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Promise = undefined;
    var _interface = __webpack_require__(/*! ./interface */ 10);
    Object.keys(_interface).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _interface[key];
            }
        });
    });
    var _lib = __webpack_require__(/*! ./lib */ 17);
    Object.defineProperty(exports, "Promise", {
        enumerable: true,
        get: function get() {
            return _lib.Promise;
        }
    });
    var _drivers = __webpack_require__(/*! ./drivers */ 15);
    var _global = __webpack_require__(/*! ./global */ 24);
    var _bridge = __webpack_require__(/*! ./bridge */ 32);
    function init() {
        if (!_global.global.initialized) {
            _lib.util.listen(window, "message", _drivers.messageListener);
            (0, _bridge.openTunnelToOpener)();
            (0, _lib.initOnReady)();
            (0, _lib.listenForMethods)();
        }
        _global.global.initialized = true;
    }
    init();
    exports["default"] = module.exports;
}, /*!*********************************************!*\
  !*** ./~/post-robot/src/interface/index.js ***!
  \*********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.winutil = exports.util = exports.linkUrl = exports.bridgeRequired = exports.openBridge = exports.reset = exports.parent = undefined;
    var _client = __webpack_require__(/*! ./client */ 11);
    Object.keys(_client).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _client[key];
            }
        });
    });
    var _server = __webpack_require__(/*! ./server */ 34);
    Object.keys(_server).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _server[key];
            }
        });
    });
    var _config = __webpack_require__(/*! ./config */ 35);
    Object.keys(_config).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _config[key];
            }
        });
    });
    var _drivers = __webpack_require__(/*! ../drivers */ 15);
    Object.defineProperty(exports, "reset", {
        enumerable: true,
        get: function get() {
            return _drivers.resetListeners;
        }
    });
    var _bridge = __webpack_require__(/*! ../bridge */ 32);
    Object.defineProperty(exports, "openBridge", {
        enumerable: true,
        get: function get() {
            return _bridge.openBridge;
        }
    });
    Object.defineProperty(exports, "bridgeRequired", {
        enumerable: true,
        get: function get() {
            return _bridge.bridgeRequired;
        }
    });
    Object.defineProperty(exports, "linkUrl", {
        enumerable: true,
        get: function get() {
            return _bridge.linkUrl;
        }
    });
    var _util = __webpack_require__(/*! ../lib/util */ 21);
    Object.defineProperty(exports, "util", {
        enumerable: true,
        get: function get() {
            return _util.util;
        }
    });
    var _windows = __webpack_require__(/*! ../lib/windows */ 23);
    var windowUtil = _interopRequireWildcard(_windows);
    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }
            newObj["default"] = obj;
            return newObj;
        }
    }
    var parent = exports.parent = (0, _windows.getAncestor)();
    var winutil = exports.winutil = windowUtil;
}, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/client.js ***!
  \**********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.send = undefined;
    exports.request = request;
    exports.sendToParent = sendToParent;
    exports.client = client;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _drivers = __webpack_require__(/*! ../drivers */ 15);
    var _lib = __webpack_require__(/*! ../lib */ 17);
    function request(options) {
        return _lib.promise.nodeify(new _lib.promise.Promise(function(resolve, reject) {
            if (!options.name) {
                throw new Error("Expected options.name");
            }
            if (!options.window) {
                throw new Error("Expected options.window");
            }
            if (_conf.CONFIG.MOCK_MODE) {
                options.window = window;
            } else if (typeof options.window === "string") {
                var el = document.getElementById(options.window);
                if (!el) {
                    throw new Error("Expected options.window " + options.window + " to be a valid element id");
                }
                if (el.tagName.toLowerCase() !== "iframe") {
                    throw new Error("Expected options.window " + options.window + " to be an iframe");
                }
                options.window = el.contentWindow;
                if (!options.window) {
                    throw new Error("Expected options.window");
                }
            }
            options.domain = options.domain || "*";
            var hash = options.name + "_" + _lib.util.uniqueID();
            _drivers.listeners.response[hash] = options;
            if ((0, _lib.isWindowClosed)(options.window)) {
                throw new Error("Target window is closed");
            }
            var hasResult = false;
            options.respond = function(err, result) {
                if (!err) {
                    hasResult = true;
                }
                return err ? reject(err) : resolve(result);
            };
            return _lib.promise.run(function() {
                if ((0, _lib.isAncestor)(window, options.window)) {
                    return (0, _lib.onWindowReady)(options.window);
                }
            }).then(function() {
                (0, _drivers.sendMessage)(options.window, {
                    hash: hash,
                    type: _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST,
                    name: options.name,
                    data: options.data,
                    fireAndForget: options.fireAndForget
                }, options.domain)["catch"](reject);
                if (options.fireAndForget) {
                    return resolve();
                }
                var ackTimeout = _lib.util.intervalTimeout(_conf.CONFIG.ACK_TIMEOUT, 100, function(remaining) {
                    if (options.ack || (0, _lib.isWindowClosed)(options.window)) {
                        return ackTimeout.cancel();
                    }
                    if (!remaining) {
                        return reject(new Error("No ack for postMessage " + options.name + " in " + _conf.CONFIG.ACK_TIMEOUT + "ms"));
                    }
                });
                if (options.timeout) {
                    (function() {
                        var timeout = _lib.util.intervalTimeout(options.timeout, 100, function(remaining) {
                            if (hasResult || (0, _lib.isWindowClosed)(options.window)) {
                                return timeout.cancel();
                            }
                            if (!remaining) {
                                return reject(new Error("Post message response timed out after " + options.timeout + " ms"));
                            }
                        }, options.timeout);
                    })();
                }
            })["catch"](reject);
        }), options.callback);
    }
    function _send(window, name, data, options, callback) {
        if (!callback) {
            if (!options && typeof data === "function") {
                callback = data;
                options = {};
                data = {};
            } else if (typeof options === "function") {
                callback = options;
                options = {};
            }
        }
        options = options || {};
        options.window = window;
        options.name = name;
        options.data = data;
        options.callback = callback;
        return request(options);
    }
    exports.send = _send;
    function sendToParent(name, data, options, callback) {
        var win = (0, _lib.getAncestor)();
        if (!win) {
            return new _lib.promise.Promise(function(resolve, reject) {
                return reject(new Error("Window does not have a parent"));
            });
        }
        return _send(win, name, data, options, callback);
    }
    function client() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        if (!options.window) {
            throw new Error("Expected options.window");
        }
        return {
            send: function send(name, data, callback) {
                return _send(options.window, name, data, options, callback);
            }
        };
    }
}, /*!****************************************!*\
  !*** ./~/post-robot/src/conf/index.js ***!
  \****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _config = __webpack_require__(/*! ./config */ 13);
    Object.keys(_config).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _config[key];
            }
        });
    });
    var _constants = __webpack_require__(/*! ./constants */ 14);
    Object.keys(_constants).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _constants[key];
            }
        });
    });
}, /*!*****************************************!*\
  !*** ./~/post-robot/src/conf/config.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CONFIG = undefined;
    var _ALLOWED_POST_MESSAGE;
    var _constants = __webpack_require__(/*! ./constants */ 14);
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    var CONFIG = exports.CONFIG = {
        ALLOW_POSTMESSAGE_POPUP: true,
        LOG_LEVEL: "info",
        BRIDGE_TIMEOUT: 5e3,
        ACK_TIMEOUT: 1e3,
        LOG_TO_PAGE: false,
        MOCK_MODE: false,
        ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, true), 
        _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.BRIDGE, true), 
        _ALLOWED_POST_MESSAGE)
    };
    if (window.location.href.indexOf(_constants.CONSTANTS.FILE_PROTOCOL) === 0) {
        CONFIG.ALLOW_POSTMESSAGE_POPUP = true;
    }
}, /*!********************************************!*\
  !*** ./~/post-robot/src/conf/constants.js ***!
  \********************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var CONSTANTS = exports.CONSTANTS = {
        POST_MESSAGE_TYPE: {
            REQUEST: "postrobot_message_request",
            RESPONSE: "postrobot_message_response",
            ACK: "postrobot_message_ack"
        },
        POST_MESSAGE_ACK: {
            SUCCESS: "success",
            ERROR: "error"
        },
        POST_MESSAGE_NAMES: {
            METHOD: "postrobot_method",
            READY: "postrobot_ready",
            OPEN_TUNNEL: "postrobot_open_tunnel"
        },
        WINDOW_TYPES: {
            FULLPAGE: "fullpage",
            POPUP: "popup",
            IFRAME: "iframe"
        },
        WINDOW_PROPS: {
            POSTROBOT: "__postRobot__"
        },
        SERIALIZATION_TYPES: {
            METHOD: "postrobot_method"
        },
        SEND_STRATEGIES: {
            POST_MESSAGE: "postrobot_post_message",
            BRIDGE: "postrobot_bridge"
        },
        MOCK_PROTOCOL: "mock://",
        FILE_PROTOCOL: "file://",
        BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
        POSTROBOT_PROXY: "__postrobot_proxy__"
    };
    var POST_MESSAGE_NAMES_LIST = exports.POST_MESSAGE_NAMES_LIST = Object.keys(CONSTANTS.POST_MESSAGE_NAMES).map(function(key) {
        return CONSTANTS.POST_MESSAGE_NAMES[key];
    });
}, /*!*******************************************!*\
  !*** ./~/post-robot/src/drivers/index.js ***!
  \*******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _receive = __webpack_require__(/*! ./receive */ 16);
    Object.keys(_receive).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _receive[key];
            }
        });
    });
    var _send = __webpack_require__(/*! ./send */ 30);
    Object.keys(_send).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _send[key];
            }
        });
    });
    var _listeners = __webpack_require__(/*! ./listeners */ 33);
    Object.keys(_listeners).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _listeners[key];
            }
        });
    });
}, /*!***************************************************!*\
  !*** ./~/post-robot/src/drivers/receive/index.js ***!
  \***************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.receiveMessage = receiveMessage;
    exports.messageListener = messageListener;
    var _conf = __webpack_require__(/*! ../../conf */ 12);
    var _lib = __webpack_require__(/*! ../../lib */ 17);
    var _compat = __webpack_require__(/*! ../../compat */ 27);
    var _global = __webpack_require__(/*! ../../global */ 24);
    var _types = __webpack_require__(/*! ./types */ 29);
    _global.global.receivedMessages = _global.global.receivedMessages || [];
    function parseMessage(message) {
        try {
            message = JSON.parse(message);
        } catch (err) {
            return;
        }
        if (!message.type) {
            return;
        }
        if (!_types.RECEIVE_MESSAGE_TYPES[message.type]) {
            return;
        }
        return message;
    }
    function receiveMessage(event) {
        if (!window || window.closed) {
            throw new Error("Message recieved in closed window");
        }
        try {
            if (!event.source) {
                return;
            }
        } catch (err) {
            return;
        }
        var source = event.source;
        var origin = event.origin;
        var data = event.data;
        var message = parseMessage(data);
        if (!message) {
            return;
        }
        if (message.sourceDomain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0 || message.sourceDomain.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) === 0) {
            origin = message.sourceDomain;
        }
        if (_global.global.receivedMessages.indexOf(message.id) === -1) {
            _global.global.receivedMessages.push(message.id);
        } else {
            return;
        }
        var level = void 0;
        if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK) {
            level = "debug";
        } else if (message.ack === "error") {
            level = "error";
        } else {
            level = "info";
        }
        _lib.log.logLevel(level, [ "\n\n\t", "#receive", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", origin, "\n\n", message ]);
        if ((0, _lib.isWindowClosed)(source)) {
            return _lib.log.debug("Source window is closed - can not send " + message.type + " " + message.name);
        }
        if (message.data) {
            message.data = (0, _lib.deserializeMethods)(source, origin, message.data);
        }
        _types.RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
    }
    function messageListener(event) {
        try {
            event.source;
        } catch (err) {
            return;
        }
        event = {
            source: event.source || event.sourceElement,
            origin: event.origin || event.originalEvent.origin,
            data: event.data
        };
        try {
            (0, _compat.emulateIERestrictions)(event.source, window);
        } catch (err) {
            return;
        }
        receiveMessage(event);
    }
}, /*!***************************************!*\
  !*** ./~/post-robot/src/lib/index.js ***!
  \***************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _promise = __webpack_require__(/*! ./promise */ 18);
    Object.keys(_promise).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _promise[key];
            }
        });
    });
    var _util = __webpack_require__(/*! ./util */ 21);
    Object.keys(_util).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _util[key];
            }
        });
    });
    var _log = __webpack_require__(/*! ./log */ 22);
    Object.keys(_log).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _log[key];
            }
        });
    });
    var _windows = __webpack_require__(/*! ./windows */ 23);
    Object.keys(_windows).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _windows[key];
            }
        });
    });
    var _methods = __webpack_require__(/*! ./methods */ 25);
    Object.keys(_methods).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _methods[key];
            }
        });
    });
    var _tick = __webpack_require__(/*! ./tick */ 20);
    Object.keys(_tick).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _tick[key];
            }
        });
    });
    var _ready = __webpack_require__(/*! ./ready */ 26);
    Object.keys(_ready).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _ready[key];
            }
        });
    });
}, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/promise.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.promise = exports.Promise = undefined;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _tick = __webpack_require__(/*! ./tick */ 20);
    var Promise = exports.Promise = _promise.SyncPromise;
    var promise = exports.promise = {
        Promise: Promise,
        run: function run(method) {
            return Promise.resolve().then(method);
        },
        nextTick: function nextTick(method) {
            return new Promise(function(resolve, reject) {
                (0, _tick.nextTick)(function() {
                    return promise.run(method).then(resolve, reject);
                });
            });
        },
        method: function method(_method) {
            return function promiseWrapper() {
                var _this = this, _arguments = arguments;
                return Promise.resolve().then(function() {
                    return _method.apply(_this, _arguments);
                });
            };
        },
        nodeify: function nodeify(prom, callback) {
            if (!callback) {
                return prom;
            }
            prom.then(function(result) {
                callback(null, result);
            }, function(err) {
                callback(err);
            });
        },
        deNodeify: function deNodeify(method) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }
            return new Promise(function(resolve, reject) {
                try {
                    if (args.length < method.length) {
                        return method.apply(undefined, args.concat([ function(err, result) {
                            return err ? reject(err) : resolve(result);
                        } ]));
                    }
                    return promise.run(function() {
                        return method.apply(undefined, args);
                    }).then(resolve, reject);
                } catch (err) {
                    return reject(err);
                }
            });
        },
        map: function map(items, method) {
            var results = [];
            var _loop = function _loop(i) {
                results.push(promise.run(function() {
                    return method(items[i]);
                }));
            };
            for (var i = 0; i < items.length; i++) {
                _loop(i);
            }
            return Promise.all(results);
        }
    };
}, /*!*********************************************!*\
  !*** ./~/sync-browser-mocks/src/promise.js ***!
  \*********************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.patchPromise = patchPromise;
    function trycatch(method, successHandler, errorHandler) {
        var isCalled = false;
        var isSuccess = false;
        var isError = false;
        var err, res;
        function flush() {
            if (isCalled) {
                if (isError) {
                    return errorHandler(err);
                } else if (isSuccess) {
                    return successHandler(res);
                }
            }
        }
        try {
            method(function(result) {
                res = result;
                isSuccess = true;
                flush();
            }, function(error) {
                err = error;
                isError = true;
                flush();
            });
        } catch (error) {
            return errorHandler(error);
        }
        isCalled = true;
        flush();
    }
    var possiblyUnhandledPromiseHandlers = [];
    var possiblyUnhandledPromises = [];
    var possiblyUnhandledPromiseTimeout;
    function addPossiblyUnhandledPromise(promise) {
        possiblyUnhandledPromises.push(promise);
        possiblyUnhandledPromiseTimeout = possiblyUnhandledPromiseTimeout || setTimeout(flushPossiblyUnhandledPromises, 1);
    }
    function flushPossiblyUnhandledPromises() {
        possiblyUnhandledPromiseTimeout = null;
        var promises = possiblyUnhandledPromises;
        possiblyUnhandledPromises = [];
        for (var i = 0; i < promises.length; i++) {
            var promise = promises[i];
            if (!promise.hasHandlers) {
                promise.handlers.push({
                    onError: function onError(err) {
                        if (!promise.hasHandlers) {
                            logError(err);
                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) {
                                possiblyUnhandledPromiseHandlers[j](promise.value);
                            }
                        }
                    }
                });
                promise.dispatch();
            }
        }
    }
    function logError(err) {
        setTimeout(function() {
            throw err;
        }, 1);
    }
    var toString = {}.toString;
    function isPromise(item) {
        try {
            if (!item) {
                return false;
            }
            if (window.Window && item instanceof window.Window) {
                return false;
            }
            if (window.constructor && item instanceof window.constructor) {
                return false;
            }
            if (toString) {
                var name = toString.call(item);
                if (name === "[object Window]" || name === "[object global]" || name === "[object DOMWindow]") {
                    return false;
                }
            }
            if (item && item.then instanceof Function) {
                return true;
            }
        } catch (err) {
            return false;
        }
        return false;
    }
    var SyncPromise = exports.SyncPromise = function SyncPromise(handler) {
        this.resolved = false;
        this.rejected = false;
        this.hasHandlers = false;
        this.handlers = [];
        addPossiblyUnhandledPromise(this);
        if (!handler) {
            return;
        }
        var self = this;
        trycatch(handler, function(res) {
            return self.resolve(res);
        }, function(err) {
            return self.reject(err);
        });
    };
    SyncPromise.resolve = function SyncPromiseResolve(value) {
        if (isPromise(value)) {
            return value;
        }
        return new SyncPromise().resolve(value);
    };
    SyncPromise.reject = function SyncPromiseResolve(error) {
        return new SyncPromise().reject(error);
    };
    SyncPromise.prototype.resolve = function(result) {
        if (this.resolved || this.rejected) {
            return this;
        }
        if (isPromise(result)) {
            throw new Error("Can not resolve promise with another promise");
        }
        this.resolved = true;
        this.value = result;
        this.dispatch();
        return this;
    };
    SyncPromise.prototype.reject = function(error) {
        if (this.resolved || this.rejected) {
            return this;
        }
        if (isPromise(error)) {
            throw new Error("Can not reject promise with another promise");
        }
        this.rejected = true;
        this.value = error;
        this.dispatch();
        return this;
    };
    SyncPromise.prototype.dispatch = function() {
        var _this = this;
        if (!this.resolved && !this.rejected) {
            return;
        }
        var _loop = function _loop() {
            var handler = _this.handlers.shift();
            try {
                if (_this.resolved) {
                    result = handler.onSuccess ? handler.onSuccess(_this.value) : _this.value;
                } else {
                    if (handler.onError) {
                        result = handler.onError(_this.value);
                    } else {
                        error = _this.value;
                    }
                }
            } catch (err) {
                error = err;
            }
            if (result === _this) {
                throw new Error("Can not return a promise from the the then handler of the same promise");
            }
            if (!handler.promise) {
                return "continue";
            }
            if (error) {
                handler.promise.reject(error);
            } else if (isPromise(result)) {
                result.then(function(res) {
                    handler.promise.resolve(res);
                }, function(err) {
                    handler.promise.reject(err);
                });
            } else {
                handler.promise.resolve(result);
            }
        };
        while (this.handlers.length) {
            var result, error;
            var _ret = _loop();
            if (_ret === "continue") continue;
        }
    };
    SyncPromise.prototype.then = function(onSuccess, onError) {
        var promise = new SyncPromise(null, this);
        this.handlers.push({
            promise: promise,
            onSuccess: onSuccess,
            onError: onError
        });
        this.hasHandlers = true;
        this.dispatch();
        return promise;
    };
    SyncPromise.prototype["catch"] = function(onError) {
        return this.then(null, onError);
    };
    SyncPromise.prototype["finally"] = function(handler) {
        return this.then(function(result) {
            handler();
            return result;
        }, function(error) {
            handler();
            throw error;
        });
    };
    SyncPromise.all = function(promises) {
        var promise = new SyncPromise();
        var count = promises.length;
        var results = [];
        var _loop2 = function _loop2(i) {
            var prom = isPromise(promises[i]) ? promises[i] : SyncPromise.resolve(promises[i]);
            prom.then(function(result) {
                results[i] = result;
                count -= 1;
                if (count === 0) {
                    promise.resolve(results);
                }
            }, function(err) {
                promise.reject(err);
            });
        };
        for (var i = 0; i < promises.length; i++) {
            _loop2(i);
        }
        return promise;
    };
    SyncPromise.onPossiblyUnhandledException = function(handler) {
        possiblyUnhandledPromiseHandlers.push(handler);
    };
    function patchPromise() {
        window.Promise = SyncPromise;
    }
}, /*!**************************************!*\
  !*** ./~/post-robot/src/lib/tick.js ***!
  \**************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.nextTick = nextTick;
    var _util = __webpack_require__(/*! ./util */ 21);
    var tickMessageName = "__nextTick__postRobot__" + _util.util.uniqueID();
    var queue = [];
    window.addEventListener("message", function(event) {
        if (event.data === tickMessageName) {
            var method = queue.shift();
            method.call();
        }
    });
    function nextTick(method) {
        queue.push(method);
        window.postMessage(tickMessageName, "*");
    }
}, /*!**************************************!*\
  !*** ./~/post-robot/src/lib/util.js ***!
  \**************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.util = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var util = exports.util = {
        once: function once(method) {
            if (!method) {
                return method;
            }
            var called = false;
            return function onceWrapper() {
                if (!called) {
                    called = true;
                    return method.apply(this, arguments);
                }
            };
        },
        noop: function noop() {},
        safeHasProp: function safeHasProp(obj, name) {
            try {
                if (obj[name]) {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                return false;
            }
        },
        safeGetProp: function safeGetProp(obj, name) {
            try {
                return obj[name];
            } catch (err) {
                return;
            }
        },
        listen: function listen(win, event, handler) {
            if (win.addEventListener) {
                win.addEventListener(event, handler);
            } else {
                win.attachEvent("on" + event, handler);
            }
            return {
                cancel: function cancel() {
                    if (win.removeEventListener) {
                        win.removeEventListener(event, handler);
                    } else {
                        win.detachEvent("on" + event, handler);
                    }
                }
            };
        },
        apply: function apply(method, context, args) {
            if (typeof method.apply === "function") {
                return method.apply(context, args);
            }
            return method(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
        },
        find: function find(collection, method, def) {
            if (!collection) {
                return def;
            }
            for (var i = 0; i < collection.length; i++) {
                if (method(collection[i])) {
                    return collection[i];
                }
            }
            return def;
        },
        map: function map(collection, method) {
            var results = [];
            for (var i = 0; i < collection.length; i++) {
                results.push(method(collection[i]));
            }
            return results;
        },
        some: function some(collection, method) {
            method = method || Boolean;
            for (var i = 0; i < collection.length; i++) {
                if (method(collection[i])) {
                    return true;
                }
            }
            return false;
        },
        keys: function keys(mapping) {
            var result = [];
            for (var key in mapping) {
                if (mapping.hasOwnProperty(key)) {
                    result.push(key);
                }
            }
            return result;
        },
        values: function values(mapping) {
            var result = [];
            for (var key in mapping) {
                if (mapping.hasOwnProperty(key)) {
                    result.push(mapping[key]);
                }
            }
            return result;
        },
        getByValue: function getByValue(mapping, value) {
            for (var key in mapping) {
                if (mapping.hasOwnProperty(key) && mapping[key] === value) {
                    return key;
                }
            }
        },
        uniqueID: function uniqueID() {
            var chars = "0123456789abcdef";
            return "xxxxxxxxxx".replace(/./g, function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            });
        },
        memoize: function memoize(method) {
            var results = {};
            return function memoized() {
                var args = JSON.stringify(Array.prototype.slice.call(arguments));
                if (!results.hasOwnProperty(args)) {
                    results[args] = method.apply(this, arguments);
                }
                return results[args];
            };
        },
        extend: function extend(obj, source) {
            if (!source) {
                return obj;
            }
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    obj[key] = source[key];
                }
            }
            return obj;
        },
        each: function each(obj, callback) {
            if (Array.isArray(obj)) {
                for (var i = 0; i < obj.length; i++) {
                    callback(obj[i], i);
                }
            } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        callback(obj[key], key);
                    }
                }
            }
        },
        replaceObject: function replaceObject(obj, callback) {
            var depth = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
            if (depth >= 100) {
                throw new Error("Self-referential object passed, or object contained too many layers");
            }
            var newobj = Array.isArray(obj) ? [] : {};
            util.each(obj, function(item, key) {
                var result = callback(item, key);
                if (result !== undefined) {
                    newobj[key] = result;
                } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                    newobj[key] = util.replaceObject(item, callback, depth + 1);
                } else {
                    newobj[key] = item;
                }
            });
            return newobj;
        },
        safeInterval: function safeInterval(method, time) {
            var timeout = void 0;
            function runInterval() {
                timeout = setTimeout(runInterval, time);
                method.call();
            }
            timeout = setTimeout(runInterval, time);
            return {
                cancel: function cancel() {
                    clearTimeout(timeout);
                }
            };
        },
        intervalTimeout: function intervalTimeout(time, interval, method) {
            var safeInterval = util.safeInterval(function() {
                time -= interval;
                time = time <= 0 ? 0 : time;
                if (time === 0) {
                    safeInterval.cancel();
                }
                method(time);
            }, interval);
            return safeInterval;
        },
        getDomain: function getDomain(win) {
            win = win || window;
            if (win.mockDomain && win.mockDomain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
                return win.mockDomain;
            }
            return win.location.protocol + "//" + win.location.host;
        },
        getDomainFromUrl: function getDomainFromUrl(url) {
            var domain = void 0;
            if (url.match(/^(https?|mock|file):\/\//)) {
                domain = url;
            } else {
                return this.getDomain();
            }
            domain = domain.split("/").slice(0, 3).join("/");
            return domain;
        },
        safeGet: function safeGet(obj, prop) {
            var result = void 0;
            try {
                result = obj[prop];
            } catch (err) {}
            return result;
        }
    };
}, /*!*************************************!*\
  !*** ./~/post-robot/src/lib/log.js ***!
  \*************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.log = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _util = __webpack_require__(/*! ./util */ 21);
    var _windows = __webpack_require__(/*! ./windows */ 23);
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var LOG_LEVELS = [ "debug", "info", "warn", "error" ];
    if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
        [ "log", "info", "warn", "error" ].forEach(function(method) {
            console[method] = this.bind(console[method], console);
        }, Function.prototype.call);
    }
    var log = exports.log = {
        clearLogs: function clearLogs() {
            if (window.console && window.console.clear) {
                window.console.clear();
            }
            if (_conf.CONFIG.LOG_TO_PAGE) {
                var container = document.getElementById("postRobotLogs");
                if (container) {
                    container.parentNode.removeChild(container);
                }
            }
        },
        writeToPage: function writeToPage(level, args) {
            setTimeout(function() {
                var container = document.getElementById("postRobotLogs");
                if (!container) {
                    container = document.createElement("div");
                    container.id = "postRobotLogs";
                    container.style.cssText = "width: 800px; font-family: monospace; white-space: pre-wrap;";
                    document.body.appendChild(container);
                }
                var el = document.createElement("div");
                var date = new Date().toString().split(" ")[4];
                var payload = _util.util.map(args, function(item) {
                    if (typeof item === "string") {
                        return item;
                    }
                    if (!item) {
                        return Object.prototype.toString.call(item);
                    }
                    var json = void 0;
                    try {
                        json = JSON.stringify(item, 0, 2);
                    } catch (e) {
                        json = "[object]";
                    }
                    return "\n\n" + json + "\n\n";
                }).join(" ");
                var msg = date + " " + level + " " + payload;
                el.innerHTML = msg;
                var color = {
                    log: "#ddd",
                    warn: "orange",
                    error: "red",
                    info: "blue",
                    debug: "#aaa"
                }[level];
                el.style.cssText = "margin-top: 10px; color: " + color + ";";
                if (!container.childNodes.length) {
                    container.appendChild(el);
                } else {
                    container.insertBefore(el, container.childNodes[0]);
                }
            });
        },
        logLevel: function logLevel(level, args) {
            try {
                if (LOG_LEVELS.indexOf(level) < LOG_LEVELS.indexOf(_conf.CONFIG.LOG_LEVEL)) {
                    return;
                }
                args = Array.prototype.slice.call(args);
                args.unshift("" + window.location.host + window.location.pathname);
                args.unshift("::");
                args.unshift("" + (0, _windows.getWindowType)().toLowerCase());
                args.unshift("[post-robot]");
                if (_conf.CONFIG.LOG_TO_PAGE) {
                    log.writeToPage(level, args);
                }
                if (!window.console) {
                    return;
                }
                if (!window.console[level]) {
                    level = "log";
                }
                if (!window.console[level]) {
                    return;
                }
                window.console[level].apply(window.console, args);
            } catch (err) {}
        },
        debug: function debug() {
            log.logLevel("debug", arguments);
        },
        info: function info() {
            log.logLevel("info", arguments);
        },
        warn: function warn() {
            log.logLevel("warn", arguments);
        },
        error: function error() {
            log.logLevel("error", arguments);
        }
    };
}, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/windows.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isSameDomain = isSameDomain;
    exports.isWindow = isWindow;
    exports.isWindowClosed = isWindowClosed;
    exports.getOpener = getOpener;
    exports.getParent = getParent;
    exports.getParents = getParents;
    exports.isAncestorParent = isAncestorParent;
    exports.getFrames = getFrames;
    exports.getAllChildFrames = getAllChildFrames;
    exports.getAllFramesInWindow = getAllFramesInWindow;
    exports.getTop = getTop;
    exports.getFrameByName = getFrameByName;
    exports.isParent = isParent;
    exports.isOpener = isOpener;
    exports.getAncestor = getAncestor;
    exports.isAncestor = isAncestor;
    exports.isPopup = isPopup;
    exports.isIframe = isIframe;
    exports.isFullpage = isFullpage;
    exports.getWindowType = getWindowType;
    exports.isSameTopWindow = isSameTopWindow;
    var _util = __webpack_require__(/*! ./util */ 21);
    var _global = __webpack_require__(/*! ../global */ 24);
    var _conf = __webpack_require__(/*! ../conf */ 12);
    _global.global.domainMatches = _global.global.domainMatches || [];
    var domainMatchTimeout = void 0;
    function isSameDomain(win) {
        for (var _iterator = _global.global.domainMatches, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var _match = _ref;
            if (_match.win === win) {
                return _match.match;
            }
        }
        var match = false;
        try {
            if (_util.util.getDomain(window) === _util.util.getDomain(win)) {
                match = true;
            }
        } catch (err) {}
        _global.global.domainMatches.push({
            win: win,
            match: match
        });
        if (!domainMatchTimeout) {
            domainMatchTimeout = setTimeout(function() {
                _global.global.domainMatches = [];
                domainMatchTimeout = null;
            }, 1);
        }
        return match;
    }
    function isWindow(item) {
        if (!item) {
            return false;
        }
        try {
            var _arr = [ "setTimeout", "setInterval", "postMessage", "alert" ];
            for (var _i2 = 0; _i2 < _arr.length; _i2++) {
                var key = _arr[_i2];
                if (typeof item[key] !== "function") {
                    return false;
                }
            }
            if (!item.document || !item.location) {
                return false;
            }
            return true;
        } catch (err) {}
        try {
            for (var i = 0; i < 5; i++) {
                if (item) {
                    item = item[Math.random().toString()];
                }
            }
            return false;
        } catch (err) {
            return true;
        }
    }
    function isWindowClosed(win) {
        try {
            if (!win || win.closed || isSameDomain(win) && _util.util.safeGet(win, "mockclosed")) {
                return true;
            }
            return false;
        } catch (err) {}
        return true;
    }
    function getOpener(win) {
        if (!win) {
            return;
        }
        try {
            return win.opener;
        } catch (err) {
            return;
        }
    }
    function getParent(win) {
        if (!win) {
            return;
        }
        try {
            if (win.parent && win.parent !== win) {
                return win.parent;
            }
        } catch (err) {
            return;
        }
    }
    function getParents(win) {
        var result = [];
        try {
            while (win.parent !== win) {
                result.push(win.parent);
                win = win.parent;
            }
        } catch (err) {}
        return result;
    }
    function isAncestorParent(parent, child) {
        if (!parent || !child) {
            return false;
        }
        var childParent = getParent(child);
        if (childParent) {
            return childParent === parent;
        }
        if (getParents(child).indexOf(parent) !== -1) {
            return true;
        }
        return false;
    }
    function getFrames(win) {
        var result = [];
        var frames = void 0;
        try {
            frames = win.frames;
        } catch (err) {
            frames = win;
        }
        var len = void 0;
        try {
            len = frames.length;
        } catch (err) {}
        if (len === 0) {
            return result;
        }
        if (len) {
            for (var i = 0; i < len; i++) {
                var frame = void 0;
                try {
                    frame = frames[i];
                } catch (err) {
                    continue;
                }
                result.push(frame);
            }
        } else {
            var _i3 = 0;
            while (true) {
                var _frame = void 0;
                try {
                    _frame = frames[_i3];
                } catch (err) {
                    return result;
                }
                if (!_frame) {
                    return result;
                }
                result.push(_frame);
                _i3 += 1;
                if (_i3 > 20) {
                    return result;
                }
            }
        }
        return result;
    }
    function getAllChildFrames(win) {
        var result = [];
        for (var _iterator2 = getFrames(win), _isArray2 = Array.isArray(_iterator2), _i4 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i4 >= _iterator2.length) break;
                _ref2 = _iterator2[_i4++];
            } else {
                _i4 = _iterator2.next();
                if (_i4.done) break;
                _ref2 = _i4.value;
            }
            var frame = _ref2;
            result.push(frame);
            for (var _iterator3 = getAllChildFrames(frame), _isArray3 = Array.isArray(_iterator3), _i5 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray3) {
                    if (_i5 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i5++];
                } else {
                    _i5 = _iterator3.next();
                    if (_i5.done) break;
                    _ref3 = _i5.value;
                }
                var childFrame = _ref3;
                result.push(childFrame);
            }
        }
        return result;
    }
    function getAllFramesInWindow(win) {
        var result = getAllChildFrames(win);
        result.push(win);
        for (var _iterator4 = getParents(win), _isArray4 = Array.isArray(_iterator4), _i6 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
            var _ref4;
            if (_isArray4) {
                if (_i6 >= _iterator4.length) break;
                _ref4 = _iterator4[_i6++];
            } else {
                _i6 = _iterator4.next();
                if (_i6.done) break;
                _ref4 = _i6.value;
            }
            var parent = _ref4;
            result.push(parent);
            for (var _iterator5 = getFrames(parent), _isArray5 = Array.isArray(_iterator5), _i7 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                var _ref5;
                if (_isArray5) {
                    if (_i7 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i7++];
                } else {
                    _i7 = _iterator5.next();
                    if (_i7.done) break;
                    _ref5 = _i7.value;
                }
                var frame = _ref5;
                if (result.indexOf(frame) === -1) {
                    result.push(frame);
                }
            }
        }
        return result;
    }
    function getTop(win) {
        if (!win) {
            return;
        }
        try {
            if (win.top) {
                return win.top;
            }
        } catch (err) {}
        if (getParent(win) === win) {
            return win;
        }
        try {
            if (isAncestorParent(window, win)) {
                return window.top;
            }
        } catch (err) {}
        try {
            if (isAncestorParent(win, window)) {
                return window.top;
            }
        } catch (err) {}
        for (var _iterator6 = getAllChildFrames(win), _isArray6 = Array.isArray(_iterator6), _i8 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
            var _ref6;
            if (_isArray6) {
                if (_i8 >= _iterator6.length) break;
                _ref6 = _iterator6[_i8++];
            } else {
                _i8 = _iterator6.next();
                if (_i8.done) break;
                _ref6 = _i8.value;
            }
            var frame = _ref6;
            try {
                if (frame.top) {
                    return frame.top;
                }
            } catch (err) {}
            if (getParent(frame) === frame) {
                return frame;
            }
        }
    }
    function getFrameByName(win, name) {
        for (var _iterator7 = getFrames(win), _isArray7 = Array.isArray(_iterator7), _i9 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
            var _ref7;
            if (_isArray7) {
                if (_i9 >= _iterator7.length) break;
                _ref7 = _iterator7[_i9++];
            } else {
                _i9 = _iterator7.next();
                if (_i9.done) break;
                _ref7 = _i9.value;
            }
            var childFrame = _ref7;
            try {
                if (childFrame.name === name && isWindow(childFrame)) {
                    return childFrame;
                }
            } catch (err) {}
        }
        try {
            if (isWindow(win.frames[name])) {
                return win.frames[name];
            }
        } catch (err) {}
        try {
            if (isWindow(win[name])) {
                return win[name];
            }
        } catch (err) {}
    }
    function isParent(win, frame) {
        var frameParent = getParent(frame);
        if (frameParent) {
            return frameParent === win;
        }
        for (var _iterator8 = getFrames(win), _isArray8 = Array.isArray(_iterator8), _i10 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
            var _ref8;
            if (_isArray8) {
                if (_i10 >= _iterator8.length) break;
                _ref8 = _iterator8[_i10++];
            } else {
                _i10 = _iterator8.next();
                if (_i10.done) break;
                _ref8 = _i10.value;
            }
            var childFrame = _ref8;
            if (childFrame === frame) {
                return true;
            }
        }
        return false;
    }
    function isOpener(parent, child) {
        return parent === getOpener(child);
    }
    function getAncestor(win) {
        win = win || window;
        var opener = getOpener(win);
        if (opener) {
            return opener;
        }
        var parent = getParent(win);
        if (parent) {
            return parent;
        }
    }
    function isAncestor(parent, child) {
        var actualParent = getAncestor(child);
        if (actualParent) {
            if (actualParent === parent) {
                return true;
            }
            return false;
        }
        if (child === parent) {
            return false;
        }
        if (getTop(child) === child) {
            return false;
        }
        for (var _iterator9 = getFrames(parent), _isArray9 = Array.isArray(_iterator9), _i11 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
            var _ref9;
            if (_isArray9) {
                if (_i11 >= _iterator9.length) break;
                _ref9 = _iterator9[_i11++];
            } else {
                _i11 = _iterator9.next();
                if (_i11.done) break;
                _ref9 = _i11.value;
            }
            var frame = _ref9;
            if (frame === child) {
                return true;
            }
        }
        return false;
    }
    function isPopup() {
        return Boolean(getOpener(window));
    }
    function isIframe() {
        return Boolean(getParent(window));
    }
    function isFullpage() {
        return Boolean(!isIframe() && !isPopup());
    }
    function getWindowType() {
        if (isPopup()) {
            return _conf.CONSTANTS.WINDOW_TYPES.POPUP;
        }
        if (isIframe()) {
            return _conf.CONSTANTS.WINDOW_TYPES.IFRAME;
        }
        return _conf.CONSTANTS.WINDOW_TYPES.FULLPAGE;
    }
    function anyMatch(collection1, collection2) {
        for (var _iterator10 = collection1, _isArray10 = Array.isArray(_iterator10), _i12 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator](); ;) {
            var _ref10;
            if (_isArray10) {
                if (_i12 >= _iterator10.length) break;
                _ref10 = _iterator10[_i12++];
            } else {
                _i12 = _iterator10.next();
                if (_i12.done) break;
                _ref10 = _i12.value;
            }
            var item1 = _ref10;
            for (var _iterator11 = collection2, _isArray11 = Array.isArray(_iterator11), _i13 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator](); ;) {
                var _ref11;
                if (_isArray11) {
                    if (_i13 >= _iterator11.length) break;
                    _ref11 = _iterator11[_i13++];
                } else {
                    _i13 = _iterator11.next();
                    if (_i13.done) break;
                    _ref11 = _i13.value;
                }
                var item2 = _ref11;
                if (item1 === item2) {
                    return true;
                }
            }
        }
    }
    function isSameTopWindow(win1, win2) {
        var top1 = getTop(win1);
        var top2 = getTop(win2);
        try {
            if (top1 && top2) {
                if (top1 === top2) {
                    return true;
                }
                return false;
            }
        } catch (err) {}
        var allFrames1 = getAllFramesInWindow(win1);
        var allFrames2 = getAllFramesInWindow(win2);
        if (anyMatch(allFrames1, allFrames2)) {
            return true;
        }
        var opener1 = getOpener(top1);
        var opener2 = getOpener(top2);
        if (opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2)) {
            return false;
        }
        if (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1)) {
            return false;
        }
    }
}, /*!************************************!*\
  !*** ./~/post-robot/src/global.js ***!
  \************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.global = undefined;
    var _conf = __webpack_require__(/*! ./conf */ 12);
    var global = exports.global = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] || {};
}, /*!*****************************************!*\
  !*** ./~/post-robot/src/lib/methods.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.listenForMethods = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.serializeMethod = serializeMethod;
    exports.serializeMethods = serializeMethods;
    exports.deserializeMethod = deserializeMethod;
    exports.deserializeMethods = deserializeMethods;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _util = __webpack_require__(/*! ./util */ 21);
    var _interface = __webpack_require__(/*! ../interface */ 10);
    var _log = __webpack_require__(/*! ./log */ 22);
    var _promise = __webpack_require__(/*! ./promise */ 18);
    var _global = __webpack_require__(/*! ../global */ 24);
    _global.global.methods = _global.global.methods || {};
    var listenForMethods = exports.listenForMethods = _util.util.once(function() {
        (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
            window: "*",
            origin: "*"
        }, function(_ref) {
            var source = _ref.source;
            var origin = _ref.origin;
            var data = _ref.data;
            var meth = _global.global.methods[data.id];
            if (!meth) {
                throw new Error("Could not find method with id: " + data.id);
            }
            if (meth.destination !== source) {
                throw new Error("Method window does not match");
            }
            if (meth.domain && meth.domain !== "*" && origin !== meth.domain) {
                throw new Error("Method domain " + meth.domain + " does not match origin " + origin);
            }
            _log.log.debug("Call local method", data.name, data.args);
            return _promise.promise.run(function() {
                return meth.method.apply({
                    source: source,
                    origin: origin,
                    data: data
                }, data.args);
            }).then(function(result) {
                return {
                    result: result,
                    id: data.id,
                    name: data.name
                };
            });
        });
    });
    function isSerializedMethod(item) {
        return (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null && item.__type__ === _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD && item.__id__;
    }
    function serializeMethod(destination, domain, method, name) {
        var id = _util.util.uniqueID();
        _global.global.methods[id] = {
            destination: destination,
            domain: domain,
            method: method
        };
        return {
            __type__: _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD,
            __id__: id,
            __name__: name
        };
    }
    function serializeMethods(destination, domain, obj) {
        return _util.util.replaceObject({
            obj: obj
        }, function(item, key) {
            if (typeof item === "function") {
                return serializeMethod(destination, domain, item, key);
            }
        }).obj;
    }
    function deserializeMethod(source, origin, obj) {
        function wrapper() {
            var args = Array.prototype.slice.call(arguments);
            _log.log.debug("Call foreign method", obj.__name__, args);
            return (0, _interface.send)(source, _conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                id: obj.__id__,
                name: obj.__name__,
                args: args
            }, {
                domain: origin
            }).then(function(_ref2) {
                var data = _ref2.data;
                _log.log.debug("Got foreign method result", obj.__name__, data.result);
                return data.result;
            });
        }
        wrapper.__name__ = obj.__name__;
        return wrapper;
    }
    function deserializeMethods(source, origin, obj) {
        return _util.util.replaceObject({
            obj: obj
        }, function(item, key) {
            if (isSerializedMethod(item)) {
                return deserializeMethod(source, origin, item);
            }
        }).obj;
    }
}, /*!***************************************!*\
  !*** ./~/post-robot/src/lib/ready.js ***!
  \***************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initOnReady = initOnReady;
    exports.onWindowReady = onWindowReady;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _windows = __webpack_require__(/*! ./windows */ 23);
    var _interface = __webpack_require__(/*! ../interface */ 10);
    var _log = __webpack_require__(/*! ./log */ 22);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _global = __webpack_require__(/*! ../global */ 24);
    _global.global.readyPromises = _global.global.readyPromises || [];
    function initOnReady() {
        (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {
            window: "*",
            domain: "*"
        }, function(_ref) {
            var source = _ref.source;
            var data = _ref.data;
            for (var _iterator = _global.global.readyPromises, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref2 = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref2 = _i.value;
                }
                var item = _ref2;
                if (item.win === source) {
                    item.promise.resolve(source);
                    return;
                }
            }
            _global.global.readyPromises.push({
                win: source,
                promise: new _promise.SyncPromise().resolve(source)
            });
        });
        var parent = (0, _windows.getAncestor)();
        if (parent) {
            (0, _interface.send)(parent, _conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {}, {
                domain: "*"
            })["catch"](function(err) {
                _log.log.debug(err.stack || err.toString());
            });
        }
    }
    function onWindowReady(win) {
        var timeout = arguments.length <= 1 || arguments[1] === undefined ? 5e3 : arguments[1];
        var name = arguments.length <= 2 || arguments[2] === undefined ? "Window" : arguments[2];
        for (var _iterator2 = _global.global.readyPromises, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref3;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref3 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref3 = _i2.value;
            }
            var item = _ref3;
            if (item.win === win) {
                return item.promise;
            }
        }
        var promise = new _promise.SyncPromise();
        _global.global.readyPromises.push({
            win: win,
            promise: promise
        });
        setTimeout(function() {
            return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
        }, timeout);
        return promise;
    }
}, /*!******************************************!*\
  !*** ./~/post-robot/src/compat/index.js ***!
  \******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _ie = __webpack_require__(/*! ./ie */ 28);
    Object.keys(_ie).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _ie[key];
            }
        });
    });
}, /*!***************************************!*\
  !*** ./~/post-robot/src/compat/ie.js ***!
  \***************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.emulateIERestrictions = emulateIERestrictions;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _lib = __webpack_require__(/*! ../lib */ 17);
    function emulateIERestrictions(sourceWindow, targetWindow) {
        if (!_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP) {
            if ((0, _lib.isSameDomain)(sourceWindow) && (0, _lib.isSameDomain)(targetWindow)) {
                return;
            }
            if ((0, _lib.isSameTopWindow)(sourceWindow, targetWindow) === false) {
                throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)");
            }
        }
    }
}, /*!***************************************************!*\
  !*** ./~/post-robot/src/drivers/receive/types.js ***!
  \***************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.RECEIVE_MESSAGE_TYPES = undefined;
    var _RECEIVE_MESSAGE_TYPE;
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _conf = __webpack_require__(/*! ../../conf */ 12);
    var _lib = __webpack_require__(/*! ../../lib */ 17);
    var _send = __webpack_require__(/*! ../send */ 30);
    var _listeners = __webpack_require__(/*! ../listeners */ 33);
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function matchDomain(domain, origin) {
        if (typeof domain === "string") {
            return domain === "*" || origin === domain;
        }
        if (Object.prototype.toString.call(domain) === "[object RegExp]") {
            return origin.match(domain);
        }
        if (Array.isArray(domain)) {
            return domain.indexOf(origin) !== -1;
        }
        return false;
    }
    var RECEIVE_MESSAGE_TYPES = exports.RECEIVE_MESSAGE_TYPES = (_RECEIVE_MESSAGE_TYPE = {}, 
    _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK, function(source, origin, message) {
        var options = _listeners.listeners.response[message.hash];
        if (!options) {
            throw new Error("No handler found for post message ack for message: " + message.name + " in " + window.location.href);
        }
        if (!matchDomain(options.domain, origin)) {
            throw new Error("Ack origin " + origin + " does not match domain " + options.domain);
        }
        options.ack = true;
    }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST, function(source, origin, message) {
        var options = (0, _listeners.getRequestListener)(message.name, source);
        function respond(data) {
            if (message.fireAndForget || (0, _lib.isWindowClosed)(source)) {
                return _lib.promise.Promise.resolve();
            }
            return (0, _send.sendMessage)(source, _extends({
                target: message.originalSource,
                hash: message.hash,
                name: message.name
            }, data), origin);
        }
        return _lib.promise.Promise.all([ respond({
            type: _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK
        }), _lib.promise.run(function() {
            if (!options) {
                throw new Error("No postmessage request handler for " + message.name + " in " + window.location.href);
            }
            if (!matchDomain(options.domain, origin)) {
                throw new Error("Request origin " + origin + " does not match domain " + options.domain);
            }
            var data = message.data;
            return _lib.promise.deNodeify(options.handler, {
                source: source,
                origin: origin,
                data: data
            });
        }).then(function(data) {
            return respond({
                type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                ack: _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS,
                data: data
            });
        }, function(err) {
            return respond({
                type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                ack: _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR,
                error: err.stack ? err.message + "\n" + err.stack : err.toString()
            });
        }) ])["catch"](function(err) {
            if (options && options.handleError) {
                return options.handleError(err);
            } else {
                _lib.log.error(err.stack || err.toString());
            }
        });
    }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE, function(source, origin, message) {
        var options = _listeners.listeners.response[message.hash];
        if (!options) {
            throw new Error("No response handler found for post message response " + message.name + " in " + window.location.href);
        }
        if (!matchDomain(options.domain, origin)) {
            throw new Error("Response origin " + origin + " does not match domain " + options.domain);
        }
        delete _listeners.listeners.response[message.hash];
        if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR) {
            return options.respond(new Error(message.error));
        } else if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS) {
            var data = message.data || message.response;
            return options.respond(null, {
                source: source,
                origin: origin,
                data: data
            });
        }
    }), _RECEIVE_MESSAGE_TYPE);
}, /*!************************************************!*\
  !*** ./~/post-robot/src/drivers/send/index.js ***!
  \************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    exports.buildMessage = buildMessage;
    exports.sendMessage = sendMessage;
    var _conf = __webpack_require__(/*! ../../conf */ 12);
    var _lib = __webpack_require__(/*! ../../lib */ 17);
    var _strategies = __webpack_require__(/*! ./strategies */ 31);
    function buildMessage(win, message) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var id = _lib.util.uniqueID();
        var type = (0, _lib.getWindowType)();
        var sourceDomain = _lib.util.getDomain(window);
        return _extends({}, message, options, {
            sourceDomain: sourceDomain,
            id: message.id || id,
            windowType: type
        });
    }
    function sendMessage(win, message, domain) {
        return _lib.promise.run(function() {
            message = buildMessage(win, message, {
                data: (0, _lib.serializeMethods)(win, domain, message.data),
                domain: domain
            });
            var level = void 0;
            if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK) {
                level = "debug";
            } else if (message.ack === "error") {
                level = "error";
            } else {
                level = "info";
            }
            _lib.log.logLevel(level, [ "\n\n\t", "#send", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", domain || "*", "\n\n", message ]);
            if (_conf.CONFIG.MOCK_MODE) {
                delete message.target;
                return window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].postMessage({
                    origin: _lib.util.getDomain(window),
                    source: window,
                    data: JSON.stringify(message)
                });
            }
            if (win === window) {
                throw new Error("Attemping to send message to self");
            }
            if ((0, _lib.isWindowClosed)(win)) {
                throw new Error("Window is closed");
            }
            _lib.log.debug("Running send message strategies", message);
            var messages = [];
            return _lib.promise.map(Object.keys(_strategies.SEND_MESSAGE_STRATEGIES), function(strategyName) {
                return _lib.promise.run(function() {
                    if (!_conf.CONFIG.ALLOWED_POST_MESSAGE_METHODS[strategyName]) {
                        throw new Error("Strategy disallowed: " + strategyName);
                    }
                    return _strategies.SEND_MESSAGE_STRATEGIES[strategyName](win, message, domain);
                }).then(function() {
                    messages.push(strategyName + ": success");
                    return true;
                }, function(err) {
                    messages.push(strategyName + ": " + err.message);
                    return false;
                });
            }).then(function(results) {
                var success = _lib.util.some(results);
                var status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                _lib.log.debug(status);
                if (!success) {
                    throw new Error(status);
                }
            });
        });
    }
}, /*!*****************************************************!*\
  !*** ./~/post-robot/src/drivers/send/strategies.js ***!
  \*****************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.SEND_MESSAGE_STRATEGIES = undefined;
    var _SEND_MESSAGE_STRATEG;
    var _conf = __webpack_require__(/*! ../../conf */ 12);
    var _lib = __webpack_require__(/*! ../../lib */ 17);
    var _compat = __webpack_require__(/*! ../../compat */ 27);
    var _bridge = __webpack_require__(/*! ../../bridge */ 32);
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    var SEND_MESSAGE_STRATEGIES = exports.SEND_MESSAGE_STRATEGIES = (_SEND_MESSAGE_STRATEG = {}, 
    _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, function(win, message, domain) {
        (0, _compat.emulateIERestrictions)(window, win);
        if (domain && domain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
            domain = win.location.protocol + "//" + win.location.host;
        }
        if (domain && domain.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) === 0) {
            domain = "*";
        }
        return win.postMessage(JSON.stringify(message, 0, 2), domain);
    }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.BRIDGE, function(win, message, domain) {
        if ((0, _lib.isSameDomain)(win)) {
            throw new Error("Post message through bridge disabled between same domain windows");
        }
        if ((0, _lib.isSameTopWindow)(window, win) !== false) {
            throw new Error("Can only use bridge to communicate between two different windows, not between frames");
        }
        return (0, _bridge.sendBridgeMessage)(win, JSON.stringify(message, 0, 2), domain);
    }), _SEND_MESSAGE_STRATEG);
}, /*!******************************************!*\
  !*** ./~/post-robot/src/bridge/index.js ***!
  \******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
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
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    exports.sendBridgeMessage = sendBridgeMessage;
    exports.linkUrl = linkUrl;
    exports.openTunnelToOpener = openTunnelToOpener;
    exports.bridgeRequired = bridgeRequired;
    exports.openBridge = openBridge;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _lib = __webpack_require__(/*! ../lib */ 17);
    var _global = __webpack_require__(/*! ../global */ 24);
    var _interface = __webpack_require__(/*! ../interface */ 10);
    var _drivers = __webpack_require__(/*! ../drivers */ 15);
    function getBridgeName(domain) {
        domain = domain || _lib.util.getDomainFromUrl(domain);
        var sanitizedDomain = domain.replace(/[^a-zA-Z0-9]+/g, "_");
        var id = _conf.CONSTANTS.BRIDGE_NAME_PREFIX + "_" + sanitizedDomain;
        return id;
    }
    function documentReady() {
        return new _lib.promise.Promise(function(resolve) {
            if (window.document && window.document.body) {
                return resolve(window.document);
            }
            window.document.addEventListener("DOMContentLoaded", function(event) {
                return resolve(window.document);
            });
        });
    }
    function getRemoteBridgeForWindow(win) {
        try {
            var frames = (0, _lib.getFrames)(win);
            if (!frames || !frames.length) {
                return;
            }
            for (var i = 0; i < frames.length; i++) {
                try {
                    var frame = frames[i];
                    if (frame && frame !== window && (0, _lib.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                        return frame;
                    }
                } catch (err) {
                    continue;
                }
            }
        } catch (err) {}
    }
    _global.global.remoteWindows = _global.global.remoteWindows || [];
    function registerRemoteWindow(win) {
        var timeout = arguments.length <= 1 || arguments[1] === undefined ? _conf.CONFIG.BRIDGE_TIMEOUT : arguments[1];
        var sendMessagePromise = new _lib.promise.Promise();
        _global.global.remoteWindows.push({
            win: win,
            sendMessagePromise: sendMessagePromise
        });
    }
    function registerRemoteSendMessage(win, domain, sendMessage) {
        for (var _iterator = _global.global.remoteWindows, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var remoteWindow = _ref;
            if (remoteWindow.win === win) {
                var sendMessageWrapper = function sendMessageWrapper(remoteWin, message, remoteDomain) {
                    if (remoteWin !== win) {
                        throw new Error("Remote window does not match window");
                    }
                    if (remoteDomain !== "*" && remoteDomain !== domain) {
                        throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
                    }
                    sendMessage(message);
                };
                remoteWindow.sendMessagePromise.resolve(sendMessageWrapper);
                remoteWindow.sendMessagePromise = _lib.promise.Promise.resolve(sendMessageWrapper);
                return;
            }
        }
        throw new Error("Window not found to register sendMessage to");
    }
    function rejectRemoteSendMessage(win, err) {
        for (var _iterator2 = _global.global.remoteWindows, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }
            var remoteWindow = _ref2;
            if (remoteWindow.win === win) {
                return remoteWindow.sendMessagePromise.reject(err);
            }
        }
        throw new Error("Window not found on which to reject sendMessage");
    }
    function sendBridgeMessage(win, message, domain) {
        var messagingChild = (0, _lib.isOpener)(window, win);
        var messagingParent = (0, _lib.isOpener)(win, window);
        if (!messagingChild && !messagingParent) {
            throw new Error("Can only send messages to and from parent and popup windows");
        }
        for (var _iterator3 = _global.global.remoteWindows, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
            var _ref3;
            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }
            var remoteWindow = _ref3;
            if (remoteWindow.win === win) {
                return remoteWindow.sendMessagePromise.then(function(sendMessage) {
                    return sendMessage(win, message, domain);
                });
            }
        }
        throw new Error("Window not found to send message to");
    }
    _global.global.popupWindows = _global.global.popupWindows || {};
    var windowOpen = window.open;
    window.open = function(url, name, options, last) {
        var domain = url;
        if (url && url.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
            var _url$split = url.split("|");
            var _url$split2 = _slicedToArray(_url$split, 2);
            domain = _url$split2[0];
            url = _url$split2[1];
        }
        if (domain) {
            domain = _lib.util.getDomainFromUrl(domain);
        }
        var win = windowOpen.call(this, url, name, options, last);
        if (url) {
            registerRemoteWindow(win);
        }
        if (name) {
            _global.global.popupWindows[name] = {
                win: win,
                domain: domain
            };
        }
        return win;
    };
    function linkUrl(win, url) {
        for (var _iterator4 = Object.keys(_global.global.popupWindows), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
            var _ref4;
            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
            }
            var name = _ref4;
            var winOptions = _global.global.popupWindows[name];
            if (winOptions.win === win) {
                winOptions.domain = _lib.util.getDomainFromUrl(url);
                registerRemoteWindow(win);
                break;
            }
        }
    }
    function listenForRegister(source, domain) {
        (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
            source: source,
            domain: domain
        }, function(_ref5) {
            var origin = _ref5.origin;
            var data = _ref5.data;
            if (origin !== domain) {
                throw new Error("Domain " + domain + " does not match origin " + origin);
            }
            if (!data.name) {
                throw new Error("Register window expected to be passed window name");
            }
            if (!data.sendMessage) {
                throw new Error("Register window expected to be passed sendMessage method");
            }
            var winDetails = _global.global.popupWindows[data.name];
            if (!winDetails) {
                throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
            }
            if (!winDetails.domain) {
                throw new Error("We do not have a registered domain for window " + data.name);
            }
            if (winDetails.domain !== origin) {
                throw new Error("Message origin " + origin + " does not matched registered window origin " + winDetails.domain);
            }
            registerRemoteSendMessage(winDetails.win, domain, data.sendMessage);
            return {
                sendMessage: function sendMessage(message) {
                    if (!window || window.closed) {
                        return;
                    }
                    (0, _drivers.receiveMessage)({
                        data: message,
                        origin: winDetails.domain,
                        source: winDetails.win
                    });
                }
            };
        });
    }
    _global.global.openTunnel = function openTunnel(remoteWindow, _ref6) {
        var name = _ref6.name;
        var _sendMessage = _ref6.sendMessage;
        if (!remoteWindow) {
            throw new Error("No window found to open tunnel to");
        }
        return (0, _interface.send)(remoteWindow, _conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
            name: name,
            sendMessage: function sendMessage() {
                return _sendMessage.apply(this, arguments);
            }
        }, {
            domain: "*"
        });
    };
    function openTunnelToOpener() {
        var opener = (0, _lib.getOpener)(window);
        if (!opener) {
            return;
        }
        registerRemoteWindow(opener);
        var bridge = getRemoteBridgeForWindow(opener);
        if (!bridge) {
            return rejectRemoteSendMessage(opener, new Error("Can not register with opener: no bridge found in opener"));
        }
        if (!window.name) {
            return rejectRemoteSendMessage(opener, new Error("Can not register with opener: window does not have a name"));
        }
        bridge[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].openTunnel(opener, {
            name: window.name,
            sendMessage: function sendMessage(message) {
                if (!window || window.closed) {
                    return;
                }
                (0, _drivers.receiveMessage)({
                    data: message,
                    origin: this.origin,
                    source: this.source
                });
            }
        }).then(function(_ref7) {
            var source = _ref7.source;
            var origin = _ref7.origin;
            var data = _ref7.data;
            if (source !== opener) {
                throw new Error("Source does not match opener");
            }
            registerRemoteSendMessage(source, origin, data.sendMessage);
        })["catch"](function(err) {
            rejectRemoteSendMessage(opener, err);
            throw err;
        });
    }
    function openBridgeFrame(name, url) {
        _lib.log.debug("Opening bridge:", name, url);
        var iframe = document.createElement("iframe");
        iframe.setAttribute("name", name);
        iframe.setAttribute("id", name);
        iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("border", "0");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("allowTransparency", "true");
        iframe.setAttribute("tabindex", "-1");
        iframe.setAttribute("hidden", "true");
        iframe.setAttribute("title", "");
        iframe.setAttribute("role", "presentation");
        iframe.src = url;
        return iframe;
    }
    function bridgeRequired(url, domain) {
        domain = domain || _lib.util.getDomainFromUrl(url);
        if (_lib.util.getDomain() === domain) {
            return false;
        }
        return true;
    }
    _global.global.bridges = _global.global.bridges || {};
    function openBridge(url, domain) {
        domain = domain || _lib.util.getDomainFromUrl(url);
        if (_global.global.bridges[domain]) {
            return _global.global.bridges[domain];
        }
        _global.global.bridges[domain] = _lib.promise.run(function() {
            if (_lib.util.getDomain() === domain) {
                throw new Error("Can not open bridge on the same domain as current domain: " + domain);
            }
            var name = getBridgeName(domain);
            var frame = (0, _lib.getFrameByName)(window, name);
            if (frame) {
                throw new Error("Frame with name " + name + " already exists on page");
            }
            var iframe = openBridgeFrame(name, url);
            return documentReady().then(function(document) {
                document.body.appendChild(iframe);
                var bridge = iframe.contentWindow;
                listenForRegister(bridge, domain);
                return new _lib.promise.Promise(function(resolve, reject) {
                    iframe.onload = resolve;
                    iframe.onerror = reject;
                }).then(function() {
                    return (0, _lib.onWindowReady)(bridge, _conf.CONFIG.BRIDGE_TIMEOUT, "Bridge " + url);
                }).then(function() {
                    return bridge;
                });
            });
        });
        return _global.global.bridges[domain];
    }
}, /*!***********************************************!*\
  !*** ./~/post-robot/src/drivers/listeners.js ***!
  \***********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.listeners = undefined;
    exports.resetListeners = resetListeners;
    exports.getRequestListener = getRequestListener;
    exports.removeRequestListener = removeRequestListener;
    exports.addRequestListener = addRequestListener;
    var _global = __webpack_require__(/*! ../global */ 24);
    _global.global.listeners = _global.global.listeners || {
        request: [],
        response: []
    };
    var listeners = exports.listeners = _global.global.listeners;
    function resetListeners() {
        _global.global.listeners.request = [];
        _global.global.listeners.response = [];
    }
    function getRequestListener(name, win) {
        for (var _iterator = _global.global.listeners.request, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var requestListener = _ref;
            if (requestListener.name !== name) {
                continue;
            }
            if (!requestListener.win || requestListener.win === "*") {
                return requestListener.options;
            }
            if (win && win === requestListener.win) {
                return requestListener.options;
            }
        }
    }
    function removeRequestListener(options) {
        var listener = void 0;
        for (var _iterator2 = _global.global.listeners.request, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }
            var requestListener = _ref2;
            if (requestListener.options === options) {
                listener = requestListener;
                break;
            }
        }
        if (listener) {
            _global.global.listeners.request.splice(_global.global.listeners.request.indexOf(listener), 1);
        }
    }
    function addRequestListener(name, win, options, override) {
        var listener = getRequestListener(name, win);
        if (listener) {
            if (override) {
                removeRequestListener(listener);
            } else {
                throw new Error("Request listener already exists for " + name);
            }
        }
        listeners.request.push({
            name: name,
            win: win,
            options: options
        });
    }
}, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/server.js ***!
  \**********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.on = undefined;
    exports.listen = listen;
    exports.once = once;
    exports.listener = listener;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    var _lib = __webpack_require__(/*! ../lib */ 17);
    var _drivers = __webpack_require__(/*! ../drivers */ 15);
    function listen(options) {
        if (!options.name) {
            throw new Error("Expected options.name");
        }
        options.handler = options.handler || _lib.util.noop;
        options.errorHandler = options.errorHandler || function(err) {
            throw err;
        };
        if (options.once) {
            (function() {
                var handler = options.handler;
                options.handler = _lib.util.once(function() {
                    (0, _drivers.removeRequestListener)(options);
                    return handler.apply(this, arguments);
                });
            })();
        }
        var override = options.override || _conf.CONFIG.MOCK_MODE;
        if (options.source) {
            options.window = options.source;
        }
        options.domain = options.domain || "*";
        (0, _drivers.addRequestListener)(options.name, options.window, options, override);
        options.handleError = function(err) {
            options.errorHandler(err);
        };
        if (options.window && options.errorOnClose) {
            (function() {
                var interval = _lib.util.safeInterval(function() {
                    if ((0, _lib.isWindowClosed)(options.window)) {
                        interval.cancel();
                        options.handleError(new Error("Post message target window is closed"));
                    }
                }, 50);
            })();
        }
        return {
            cancel: function cancel() {
                (0, _drivers.removeRequestListener)(options);
            }
        };
    }
    function _on(name, options, handler, errorHandler) {
        if (typeof options === "function") {
            errorHandler = handler;
            handler = options;
            options = {};
        }
        options = options || {};
        options.name = name;
        options.handler = handler || options.handler;
        options.errorHandler = errorHandler || options.errorHandler;
        return listen(options);
    }
    exports.on = _on;
    function once(name, options, handler, errorHandler) {
        if (typeof options === "function") {
            errorHandler = handler;
            handler = options;
            options = {};
        }
        options = options || {};
        options.name = name;
        options.handler = handler || options.handler;
        options.errorHandler = errorHandler || options.errorHandler;
        options.once = true;
        var prom = new _lib.promise.Promise(function(resolve, reject) {
            options.handler = options.handler || function(event) {
                return resolve(event);
            };
            options.errorHandler = options.errorHandler || reject;
        });
        var myListener = listen(options);
        _lib.util.extend(prom, myListener);
        return prom;
    }
    function listener() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        return {
            on: function on(name, handler, errorHandler) {
                return _on(name, options, handler, errorHandler);
            }
        };
    }
}, /*!**********************************************!*\
  !*** ./~/post-robot/src/interface/config.js ***!
  \**********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CONSTANTS = exports.CONFIG = undefined;
    exports.enableMockMode = enableMockMode;
    exports.disableMockMode = disableMockMode;
    var _conf = __webpack_require__(/*! ../conf */ 12);
    Object.defineProperty(exports, "CONFIG", {
        enumerable: true,
        get: function get() {
            return _conf.CONFIG;
        }
    });
    Object.defineProperty(exports, "CONSTANTS", {
        enumerable: true,
        get: function get() {
            return _conf.CONSTANTS;
        }
    });
    exports.disable = disable;
    var _drivers = __webpack_require__(/*! ../drivers */ 15);
    function enableMockMode() {
        _conf.CONFIG.MOCK_MODE = true;
    }
    function disableMockMode() {
        _conf.CONFIG.MOCK_MODE = false;
    }
    function disable() {
        delete window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
        window.removeEventListener("message", _drivers.messageListener);
    }
}, /*!***************************************!*\
  !*** ./~/xcomponent/src/lib/index.js ***!
  \***************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _dom = __webpack_require__(/*! ./dom */ 37);
    Object.keys(_dom).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _dom[key];
            }
        });
    });
    var _fn = __webpack_require__(/*! ./fn */ 38);
    Object.keys(_fn).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _fn[key];
            }
        });
    });
    var _promise = __webpack_require__(/*! ./promise */ 40);
    Object.keys(_promise).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _promise[key];
            }
        });
    });
    var _util = __webpack_require__(/*! ./util */ 39);
    Object.keys(_util).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _util[key];
            }
        });
    });
    var _logger = __webpack_require__(/*! ./logger */ 41);
    Object.keys(_logger).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _logger[key];
            }
        });
    });
}, /*!*************************************!*\
  !*** ./~/xcomponent/src/lib/dom.js ***!
  \*************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.parseQuery = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
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
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    exports.getElement = getElement;
    exports.popup = popup;
    exports.iframe = iframe;
    exports.isWindowClosed = isWindowClosed;
    exports.onCloseWindow = onCloseWindow;
    exports.addEventListener = addEventListener;
    exports.getParentNode = getParentNode;
    exports.scanForJavascript = scanForJavascript;
    exports.createElement = createElement;
    exports.addEventToClass = addEventToClass;
    exports.template = template;
    exports.getQueryParam = getQueryParam;
    exports.getDomain = getDomain;
    exports.getDomainFromUrl = getDomainFromUrl;
    exports.formatQuery = formatQuery;
    exports.extendQuery = extendQuery;
    exports.extendUrl = extendUrl;
    exports.getOpener = getOpener;
    exports.getParent = getParent;
    exports.getParentWindow = getParentWindow;
    exports.getCurrentDimensions = getCurrentDimensions;
    exports.changeStyle = changeStyle;
    exports.setOverflow = setOverflow;
    exports.onDimensionsChange = onDimensionsChange;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _fn = __webpack_require__(/*! ./fn */ 38);
    var _util = __webpack_require__(/*! ./util */ 39);
    function getElement(id) {
        if (id instanceof window.Element) {
            return id;
        }
        if (typeof id === "string") {
            var element = document.getElementById(id);
            if (element) {
                return element;
            }
            if (document.querySelector) {
                return document.querySelector(id);
            }
        }
    }
    function popup(url, options) {
        var params = Object.keys(options).map(function(key) {
            if (options[key]) {
                return key + "=" + options[key];
            }
        }).filter(Boolean).join(",");
        var win = window.open(url, options.name, params, true);
        return win;
    }
    function iframe(container, url, options) {
        container = getElement(container);
        var frame = document.createElement("iframe");
        for (var _iterator = Object.keys(options), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var key = _ref;
            frame[key] = options[key];
        }
        frame.frameBorder = "0";
        frame.allowTransparency = "true";
        container.appendChild(frame);
        return frame;
    }
    function isWindowClosed(win) {
        try {
            return !win || win.closed;
        } catch (err) {
            return true;
        }
    }
    function onCloseWindow(win, callback) {
        callback = (0, _fn.once)(callback);
        var isFunction = win instanceof Function;
        var interval = void 0;
        var checkWindowClosed = function checkWindowClosed() {
            var myWin = void 0;
            try {
                myWin = isFunction ? win() : win;
            } catch (err) {}
            if (isWindowClosed(myWin)) {
                clearInterval(interval);
                return callback();
            }
        };
        interval = (0, _util.safeInterval)(checkWindowClosed, 50);
        checkWindowClosed();
        return {
            cancel: function cancel() {
                interval.cancel();
                callback = _fn.noop;
            }
        };
    }
    function addEventListener(obj, event, handler) {
        obj.addEventListener(event, handler);
        return {
            cancel: function cancel() {
                obj.removeEventListener(event, handler);
            }
        };
    }
    function getParentNode(el, tag) {
        tag = tag.toLowerCase();
        while (el.parentNode) {
            el = el.parentNode;
            if (el.tagName.toLowerCase() === tag) {
                return el;
            }
        }
    }
    function scanForJavascript(str) {
        if (!str) {
            return str;
        }
        if (str.match(/<script|on\w+\s*=|javascript:|expression\s*\(|eval\(|new\s*Function/)) {
            throw new Error("HTML contains potential javascript: " + str);
        }
        return str;
    }
    function createElement() {
        var tag = arguments.length <= 0 || arguments[0] === undefined ? "div" : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var container = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
        var element = document.createElement(tag);
        if (options.style) {
            (0, _util.extend)(element.style, options.style);
        }
        if (options.html) {
            element.innerHTML = options.html;
        }
        if (options["class"]) {
            element.className = options["class"].join(" ");
        }
        if (options.attributes) {
            for (var _iterator2 = Object.keys(options.attributes), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var key = _ref2;
                element.setAttribute(key, options.attributes[key]);
            }
        }
        if (options.styleSheet) {
            if (element.styleSheet) {
                element.styleSheet.cssText = options.styleSheet;
            } else {
                element.appendChild(document.createTextNode(options.styleSheet));
            }
        }
        return element;
    }
    function addEventToClass(element, className, eventName, handler) {
        for (var _iterator3 = Array.prototype.slice.call(element.getElementsByClassName(className)), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
            var _ref3;
            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }
            var el = _ref3;
            el.addEventListener(eventName, function(event) {
                event.preventDefault();
                event.stopPropagation();
                handler();
            });
        }
    }
    function template(html, context) {
        return html.replace(/\{([\w_\.]+)\}/g, function(variable) {
            return (0, _util.get)(context, variable.slice(1, variable.length - 1), "");
        });
    }
    var parseQuery = exports.parseQuery = (0, _fn.memoize)(function(queryString) {
        var params = {};
        if (!queryString) {
            return params;
        }
        if (queryString.indexOf("=") === -1) {
            throw new Error("Can not parse query string params: " + queryString);
        }
        for (var _iterator4 = queryString.split("&"), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
            var _ref4;
            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
            }
            var pair = _ref4;
            pair = pair.split("=");
            if (pair[0] && pair[1]) {
                params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
        }
        return params;
    });
    function getQueryParam(name) {
        return parseQuery(window.location.search.slice(1))[name];
    }
    function getDomain(win) {
        win = win || window;
        if (win.mockDomain && win.mockDomain.indexOf("mock://") === 0) {
            return win.mockDomain;
        }
        return win.location.protocol + "//" + win.location.host;
    }
    function getDomainFromUrl(url) {
        var domain = void 0;
        if (url.match(/^(https?|mock|file):\/\//)) {
            domain = url;
        } else {
            return getDomain(window);
        }
        domain = domain.split("/").slice(0, 3).join("/");
        return domain;
    }
    function formatQuery() {
        var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        return Object.keys(obj).map(function(key) {
            return (0, _util.urlEncode)(key) + "=" + (0, _util.urlEncode)(obj[key]);
        }).join("&");
    }
    function extendQuery(originalQuery) {
        var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        if (!props || !Object.keys(props).length) {
            return originalQuery;
        }
        return formatQuery(_extends({}, parseQuery(originalQuery), props));
    }
    function extendUrl(url) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var query = options.query || {};
        var hash = options.hash || {};
        var originalUrl = void 0;
        var originalQuery = void 0;
        var originalHash = void 0;
        var _url$split = url.split("#");
        var _url$split2 = _slicedToArray(_url$split, 2);
        originalUrl = _url$split2[0];
        originalHash = _url$split2[1];
        var _originalUrl$split = originalUrl.split("?");
        var _originalUrl$split2 = _slicedToArray(_originalUrl$split, 2);
        originalUrl = _originalUrl$split2[0];
        originalQuery = _originalUrl$split2[1];
        var queryString = extendQuery(originalQuery, query);
        var hashString = extendQuery(originalHash, hash);
        if (queryString) {
            originalUrl = originalUrl + "?" + queryString;
        }
        if (hashString) {
            originalUrl = originalUrl + "#" + hashString;
        }
        return originalUrl;
    }
    function getOpener(win) {
        if (!win) {
            return;
        }
        try {
            return win.opener;
        } catch (err) {
            return;
        }
    }
    function getParent(win) {
        if (!win) {
            return;
        }
        try {
            if (win.parent && win.parent !== win) {
                return win.parent;
            }
        } catch (err) {
            return;
        }
    }
    function getParentWindow(win) {
        win = win || window;
        var opener = getOpener(win);
        if (opener) {
            return opener;
        }
        var parent = getParent(win);
        if (parent) {
            return parent;
        }
    }
    function getCurrentDimensions(el) {
        return {
            width: el.offsetWidth,
            height: el.offsetHeight
        };
    }
    function changeStyle(el, styles) {
        return new _promise.SyncPromise(function(resolve) {
            for (var _iterator5 = Object.keys(styles), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                var _ref5;
                if (_isArray5) {
                    if (_i5 >= _iterator5.length) break;
                    _ref5 = _iterator5[_i5++];
                } else {
                    _i5 = _iterator5.next();
                    if (_i5.done) break;
                    _ref5 = _i5.value;
                }
                var key = _ref5;
                el.style[key] = styles[key];
            }
            setTimeout(resolve, 1);
        });
    }
    function setOverflow(el) {
        var overflow = arguments.length <= 1 || arguments[1] === undefined ? "auto" : arguments[1];
        var dimensions = getCurrentDimensions(el);
        if (window.innerHeight < dimensions.height) {
            el.style.overflowY = overflow;
        } else {
            el.style.overflowY = "hidden";
        }
        if (window.innerWidth < dimensions.width) {
            el.style.overflowX = overflow;
        } else {
            el.style.overflowX = "hidden";
        }
    }
    function onDimensionsChange(el) {
        var delay = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
        var threshold = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
        var dimensionsChanged = function dimensionsChanged(one, two) {
            return Math.abs(one.height - two.height) > threshold || Math.abs(one.width - two.width) > threshold;
        };
        return new _promise.SyncPromise(function(resolve) {
            var currentDimensions = getCurrentDimensions(el);
            var interval = setInterval(function() {
                var newDimensions = getCurrentDimensions(el);
                if (dimensionsChanged(currentDimensions, newDimensions)) {
                    var _ret = function() {
                        var _el$style = el.style;
                        var overflow = _el$style.overflow;
                        var overflowX = _el$style.overflowX;
                        var overflowY = _el$style.overflowY;
                        if (overflow === "hidden" || overflowX === overflowY === "hidden") {
                            clearInterval(interval);
                            return {
                                v: resolve(newDimensions)
                            };
                        }
                        return {
                            v: changeStyle(el, {
                                overflow: "hidden",
                                overflowX: "hidden",
                                overflowY: "hidden"
                            }).then(function() {
                                var noOverflowDimensions = getCurrentDimensions(el);
                                return changeStyle(el, {
                                    overflow: overflow,
                                    overflowX: overflowX,
                                    overflowY: overflowY
                                }).then(function() {
                                    if (dimensionsChanged(currentDimensions, noOverflowDimensions)) {
                                        clearInterval(interval);
                                        return resolve(noOverflowDimensions);
                                    }
                                });
                            })
                        };
                    }();
                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                }
            }, delay);
        });
    }
}, /*!************************************!*\
  !*** ./~/xcomponent/src/lib/fn.js ***!
  \************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.noop = noop;
    exports.once = once;
    exports.memoize = memoize;
    exports.debounce = debounce;
    function noop() {}
    function once(method) {
        var called = false;
        return function() {
            if (!called) {
                called = true;
                return method.apply(this, arguments);
            }
        };
    }
    function memoize(method) {
        var results = {};
        return function() {
            var args = void 0;
            try {
                args = JSON.stringify(Array.prototype.slice.call(arguments));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
            if (!results.hasOwnProperty(args)) {
                results[args] = method.apply(this, arguments);
            }
            return results[args];
        };
    }
    function debounce(method) {
        var time = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
        var timeout = void 0;
        return function() {
            var _this = this, _arguments = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                return method.apply(_this, _arguments);
            }, time);
        };
    }
}, /*!**************************************!*\
  !*** ./~/xcomponent/src/lib/util.js ***!
  \**************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.urlEncode = urlEncode;
    exports.camelToDasherize = camelToDasherize;
    exports.dasherizeToCamel = dasherizeToCamel;
    exports.extend = extend;
    exports.values = values;
    exports.uniqueID = uniqueID;
    exports.stringifyWithFunctions = stringifyWithFunctions;
    exports.safeGet = safeGet;
    exports.capitalizeFirstLetter = capitalizeFirstLetter;
    exports.get = get;
    exports.safeInterval = safeInterval;
    exports.safeTimeout = safeTimeout;
    exports.each = each;
    exports.replaceObject = replaceObject;
    exports.copyProp = copyProp;
    function urlEncode(str) {
        return str.replace(/\?/g, "%3F").replace(/\&/g, "%26").replace(/#/g, "%23");
    }
    function camelToDasherize(string) {
        return string.replace(/([A-Z])/g, function(g) {
            return "-" + g.toLowerCase();
        });
    }
    function dasherizeToCamel(string) {
        return string.replace(/-([a-z])/g, function(g) {
            return g[1].toUpperCase();
        });
    }
    function extend(obj, source) {
        if (!source) {
            return obj;
        }
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                obj[key] = source[key];
            }
        }
        return obj;
    }
    function values(obj) {
        var results = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                results.push(obj[key]);
            }
        }
        return results;
    }
    function uniqueID() {
        var chars = "0123456789abcdef";
        return "xxxxxxxxxx".replace(/./g, function() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        });
    }
    function stringifyWithFunctions(obj) {
        return JSON.stringify(obj, function(key, val) {
            if (typeof val === "function") {
                return val.toString();
            }
            return val;
        });
    }
    function safeGet(obj, prop) {
        var result = void 0;
        try {
            result = obj[prop];
        } catch (err) {}
        return result;
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    function get(item, path, def) {
        if (!path) {
            return def;
        }
        path = path.split(".");
        for (var i = 0; i < path.length; i++) {
            if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                item = item[path[i]];
            } else {
                return def;
            }
        }
        return item === undefined ? def : item;
    }
    function safeInterval(method, time) {
        var timeout = void 0;
        function runInterval() {
            timeout = setTimeout(runInterval, time);
            method.call();
        }
        timeout = setTimeout(runInterval, time);
        return {
            cancel: function cancel() {
                clearTimeout(timeout);
            }
        };
    }
    function safeTimeout(method, time) {
        var interval = safeInterval(function() {
            time -= 100;
            if (time <= 0) {
                interval.cancel();
                method();
            }
        }, 100);
    }
    function each(item, callback) {
        if (!item) {
            return;
        }
        if (item instanceof Array) {
            var len = item.length;
            for (var i = 0; i < len; i++) {
                callback(item[i], i);
            }
        } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
            var keys = Object.keys(item);
            var _len = keys.length;
            for (var _i = 0; _i < _len; _i++) {
                var key = keys[_i];
                callback(item[key], key);
            }
        }
    }
    function replaceObject(obj, callback) {
        var parentKey = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];
        var newobj = obj instanceof Array ? [] : {};
        each(obj, function(item, key) {
            var fullKey = parentKey ? parentKey + "." + key : key;
            var result = callback(item, key, fullKey);
            if (result !== undefined) {
                newobj[key] = result;
            } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                newobj[key] = replaceObject(item, callback, fullKey);
            } else {
                newobj[key] = item;
            }
        });
        return newobj;
    }
    function copyProp(source, target, name, def) {
        if (source.hasOwnProperty(name)) {
            var descriptor = Object.getOwnPropertyDescriptor(source, name);
            Object.defineProperty(target, name, descriptor);
        } else {
            target[name] = def;
        }
    }
}, /*!*****************************************!*\
  !*** ./~/xcomponent/src/lib/promise.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.denodeify = denodeify;
    exports.promisify = promisify;
    exports.getter = getter;
    exports.delay = delay;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    function denodeify(method) {
        return function() {
            var self = this;
            var args = Array.prototype.slice.call(arguments);
            if (args.length >= method.length) {
                return _promise.SyncPromise.resolve(method.apply(self, args));
            }
            return new _promise.SyncPromise(function(resolve, reject) {
                args.push(function(err, result) {
                    if (err && !(err instanceof Error)) {
                        throw new Error("Passed non-Error object in callback: [ " + err + " ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).");
                    }
                    return err ? reject(err) : resolve(result);
                });
                return method.apply(self, args);
            });
        };
    }
    function promisify(method) {
        var prom = _promise.SyncPromise.resolve();
        return function() {
            var _this = this, _arguments = arguments;
            return prom.then(function() {
                return method.apply(_this, _arguments);
            });
        };
    }
    function getter(method) {
        var prom = void 0;
        return function() {
            var _this2 = this;
            prom = prom || new _promise.SyncPromise(function(resolve, reject) {
                var result = method.call(_this2, resolve, reject);
                if (result && result.then instanceof Function) {
                    return result.then(resolve, reject);
                }
                if (method.length === 0 || result !== undefined) {
                    return resolve(result);
                }
            });
            return prom;
        };
    }
    function delay(time) {
        return new _promise.SyncPromise(function(resolve) {
            setTimeout(resolve, time);
        });
    }
}, /*!****************************************!*\
  !*** ./~/xcomponent/src/lib/logger.js ***!
  \****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.logger = undefined;
    exports.registerLogger = registerLogger;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var customLogger = void 0;
    function registerLogger(newLogger) {
        customLogger = newLogger;
    }
    var logger = exports.logger = {
        debug: function debug(event, payload) {
            return customLogger ? customLogger.debug(event, payload) : window.console && window.console.debug && window.console.debug(event, payload);
        },
        info: function info(event, payload) {
            return customLogger ? customLogger.info(event, payload) : window.console && window.console.info && window.console.info(event, payload);
        },
        warn: function warn(event, payload) {
            return customLogger ? customLogger.warn(event, payload) : window.console && window.console.warn && window.console.warn(event, payload);
        },
        error: function error(event, payload) {
            return customLogger ? customLogger.error(event, payload) : window.console && window.console.error && window.console.error(event, payload);
        },
        flush: function flush() {
            if (customLogger && customLogger.flush) {
                return customLogger.flush();
            }
            return _promise.SyncPromise.resolve();
        }
    };
}, /*!***************************************************!*\
  !*** ./~/xcomponent/src/component/child/index.js ***!
  \***************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ChildComponent = undefined;
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _base = __webpack_require__(/*! ../base */ 8);
    var _window = __webpack_require__(/*! ../window */ 43);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    var _props = __webpack_require__(/*! ./props */ 46);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ChildComponent = exports.ChildComponent = function(_BaseComponent) {
        _inherits(ChildComponent, _BaseComponent);
        function ChildComponent(component) {
            _classCallCheck(this, ChildComponent);
            var _this = _possibleConstructorReturn(this, (ChildComponent.__proto__ || Object.getPrototypeOf(ChildComponent)).call(this, component));
            _this.component = component;
            _this.component.log("construct_child");
            _this.onPropHandlers = [];
            _this.setProps(_this.getInitialProps());
            _this.component.log("init_child");
            _this.setWindows();
            _this.onInit = _this.sendToParent(_constants.POST_MESSAGE.INIT, {
                exports: _this.exports()
            }).then(function(_ref) {
                var data = _ref.data;
                _this.context = data.context;
                _this.props = {};
                _this.setProps(data.props);
                if (_this.component.autoResize) {
                    _this.watchForResize();
                }
                return _this;
            });
            return _this;
        }
        _createClass(ChildComponent, [ {
            key: "init",
            value: function init() {
                return this.onInit;
            }
        }, {
            key: "onProps",
            value: function onProps(handler) {
                this.onPropHandlers.push(handler);
            }
        }, {
            key: "getInitialProps",
            value: function getInitialProps() {
                var componentMeta = (0, _window.getComponentMeta)();
                var self = this;
                if (componentMeta) {
                    return (0, _lib.replaceObject)(componentMeta.props, function(value, key, fullKey) {
                        if (value && value.__type__ === "__function__") {
                            return function() {
                                var _this2 = this, _arguments = arguments;
                                return self.onInit.then(function() {
                                    var original = (0, _lib.get)(self.props, fullKey);
                                    return original.apply(_this2, _arguments);
                                });
                            };
                        }
                    });
                }
            }
        }, {
            key: "setProps",
            value: function setProps() {
                var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                this.props = this.props || {};
                (0, _lib.extend)(this.props, (0, _props.normalizeChildProps)(this.component, props));
                for (var _iterator = this.onPropHandlers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref2 = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref2 = _i.value;
                    }
                    var handler = _ref2;
                    handler.call(this, this.props);
                }
            }
        }, {
            key: "sendToParent",
            value: function sendToParent(name, data) {
                var parentWindow = (0, _window.getParentComponentWindow)();
                if (!parentWindow) {
                    throw new Error("Can not find parent component window to message");
                }
                this.component.log("send_to_parent_" + name);
                return _src2["default"].send((0, _window.getParentComponentWindow)(), name, data, {
                    domain: (0, _window.getParentDomain)()
                });
            }
        }, {
            key: "setWindows",
            value: function setWindows() {
                if (window.__activeXComponent__) {
                    throw new Error("[" + this.component.tag + "] Can not attach multiple components to the same window");
                }
                window.__activeXComponent__ = this;
                if (!(0, _window.getParentComponentWindow)()) {
                    throw new Error("[" + this.component.tag + "] Can not find parent window");
                }
                var componentMeta = (0, _window.getComponentMeta)();
                if (componentMeta.tag !== this.component.tag) {
                    throw new Error("[" + this.component.tag + "] Parent is " + componentMeta.tag + " - can not attach " + this.component.tag);
                }
                this.watchForClose();
            }
        }, {
            key: "watchForClose",
            value: function watchForClose() {
                var _this3 = this;
                (0, _lib.onCloseWindow)(_window.getParentComponentWindow, function() {
                    _this3.component.log("parent_window_closed");
                    if (_this3.context === _constants.CONTEXT_TYPES.POPUP) {
                        _this3.destroy();
                    }
                });
            }
        }, {
            key: "watchForResize",
            value: function watchForResize() {
                var _this4 = this;
                if (!this.component.dimensions) {
                    return;
                }
                if (this.context === _constants.CONTEXT_TYPES.POPUP) {
                    return;
                }
                var el = document.body;
                (0, _lib.setOverflow)(el);
                var watcher = function watcher() {
                    (0, _lib.onDimensionsChange)(el).then(function(dimensions) {
                        return _this4.resize(dimensions.width, dimensions.height);
                    }).then(function() {
                        (0, _lib.setOverflow)(el);
                        watcher();
                    });
                };
                watcher();
            }
        }, {
            key: "exports",
            value: function exports() {
                var _this5 = this;
                return {
                    updateProps: function updateProps(props) {
                        return _this5.setProps(props);
                    },
                    close: function close() {
                        return _this5.destroy();
                    }
                };
            }
        }, {
            key: "resize",
            value: function resize(width, height) {
                var _this6 = this;
                return _promise.SyncPromise.resolve().then(function() {
                    _this6.component.log("resize", {
                        width: width,
                        height: height
                    });
                    if (_this6.context === _constants.CONTEXT_TYPES.POPUP) {
                        return;
                    }
                    return _this6.sendToParent(_constants.POST_MESSAGE.RESIZE, {
                        width: width,
                        height: height
                    });
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                return this.sendToParent(_constants.POST_MESSAGE.HIDE);
            }
        }, {
            key: "userClose",
            value: function userClose() {
                return this.close(_constants.CLOSE_REASONS.USER_CLOSED);
            }
        }, {
            key: "close",
            value: function close() {
                var reason = arguments.length <= 0 || arguments[0] === undefined ? _constants.CLOSE_REASONS.CHILD_CALL : arguments[0];
                this.component.log("close_child");
                this.sendToParent(_constants.POST_MESSAGE.CLOSE, {
                    reason: reason
                }, {
                    fireAndForget: true
                });
            }
        }, {
            key: "destroy",
            value: function destroy() {
                _lib.logger.flush().then(function() {
                    window.close();
                });
            }
        }, {
            key: "focus",
            value: function focus() {
                this.component.log("focus");
                window.focus();
            }
        }, {
            key: "error",
            value: function error(err) {
                this.component.log("error", {
                    error: err.stack || err.toString()
                });
                return this.sendToParent(_constants.POST_MESSAGE.ERROR, {
                    error: err.stack ? err.message + "\n" + err.stack : err.toString()
                });
            }
        } ]);
        return ChildComponent;
    }(_base.BaseComponent);
}, /*!**********************************************!*\
  !*** ./~/xcomponent/src/component/window.js ***!
  \**********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getParentComponentWindow = exports.getParentWindow = exports.isXComponentWindow = exports.getComponentMeta = undefined;
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
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
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    exports.buildChildWindowName = buildChildWindowName;
    exports.getParentDomain = getParentDomain;
    exports.getPosition = getPosition;
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _hiBase = __webpack_require__(/*! hi-base32 */ 44);
    var _hiBase2 = _interopRequireDefault(_hiBase);
    var _lib = __webpack_require__(/*! ../lib */ 36);
    var _constants = __webpack_require__(/*! ../constants */ 45);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function normalize(str) {
        return str && str.replace(/^[^a-z0-9A-Z]+|[^a-z0-9A-Z]+$/g, "").replace(/[^a-z0-9A-Z]+/g, "_");
    }
    function buildChildWindowName(name, version) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        options.id = (0, _lib.uniqueID)();
        options.domain = (0, _lib.getDomain)(window);
        var encodedName = normalize(name);
        var encodedVersion = normalize(version);
        var encodedOptions = _hiBase2["default"].encode(JSON.stringify(options)).replace(/\=/g, "").toLowerCase();
        if (!encodedName) {
            throw new Error("Invalid name: " + name + " - must contain alphanumeric characters");
        }
        if (!encodedVersion) {
            throw new Error("Invalid version: " + version + " - must contain alphanumeric characters");
        }
        return [ _constants.XCOMPONENT, encodedName, encodedVersion, encodedOptions ].join("__");
    }
    var getComponentMeta = exports.getComponentMeta = (0, _lib.memoize)(function() {
        if (!window.name) {
            return;
        }
        var _window$name$split = window.name.split("__");
        var _window$name$split2 = _slicedToArray(_window$name$split, 4);
        var xcomp = _window$name$split2[0];
        var name = _window$name$split2[1];
        var version = _window$name$split2[2];
        var encodedOptions = _window$name$split2[3];
        if (xcomp !== _constants.XCOMPONENT) {
            return;
        }
        var componentMeta = void 0;
        try {
            componentMeta = JSON.parse(_hiBase2["default"].decode(encodedOptions.toUpperCase()));
        } catch (err) {
            return;
        }
        componentMeta.name = name;
        componentMeta.version = version.replace(/_/g, ".");
        return componentMeta;
    });
    function getParentDomain() {
        return getComponentMeta().domain;
    }
    var isXComponentWindow = exports.isXComponentWindow = (0, _lib.memoize)(function() {
        return Boolean(getComponentMeta());
    });
    var getParentWindow = exports.getParentWindow = (0, _lib.memoize)(function() {
        if (window.opener) {
            return window.opener;
        } else if (window.parent && window.parent !== window) {
            return window.parent;
        }
        throw new Error("Can not find parent window");
    });
    var getParentComponentWindow = exports.getParentComponentWindow = (0, _lib.memoize)(function() {
        var componentMeta = getComponentMeta();
        if (!componentMeta) {
            throw new Error("Can not get parent component window - window not rendered by xcomponent");
        }
        var parentWindow = getParentWindow();
        if (parentWindow && componentMeta.parent) {
            var parentFrame = _src2["default"].winutil.getFrameByName(parentWindow, componentMeta.parent);
            if (parentFrame) {
                return parentFrame;
            }
        }
        return parentWindow;
    });
    function getPosition(options) {
        var left = void 0;
        var top = void 0;
        var width = options.width;
        var height = options.height;
        if (window.outerWidth) {
            left = Math.round((window.outerWidth - width) / 2) + window.screenX;
            top = Math.round((window.outerHeight - height) / 2) + window.screenY;
        } else if (window.screen.width) {
            left = Math.round((window.screen.width - width) / 2);
            top = Math.round((window.screen.height - height) / 2);
        }
        return {
            x: left,
            y: top
        };
    }
}, /*!***********************************!*\
  !*** ./~/hi-base32/src/base32.js ***!
  \***********************************/
function(module, exports) {
    (function(global) {
        "use strict";
        (function(root, undefined) {
            "use strict";
            var NODE_JS = typeof module != "undefined";
            if (NODE_JS) {
                root = global;
            }
            var BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
            var BASE32_DECODE_CHAR = {
                A: 0,
                B: 1,
                C: 2,
                D: 3,
                E: 4,
                F: 5,
                G: 6,
                H: 7,
                I: 8,
                J: 9,
                K: 10,
                L: 11,
                M: 12,
                N: 13,
                O: 14,
                P: 15,
                Q: 16,
                R: 17,
                S: 18,
                T: 19,
                U: 20,
                V: 21,
                W: 22,
                X: 23,
                Y: 24,
                Z: 25,
                "2": 26,
                "3": 27,
                "4": 28,
                "5": 29,
                "6": 30,
                "7": 31
            };
            var blocks = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
            var toUtf8String = function toUtf8String(bytes) {
                var str = "", length = bytes.length, i = 0, followingChars = 0, b, c;
                while (i < length) {
                    b = bytes[i++];
                    if (b <= 127) {
                        str += String.fromCharCode(b);
                        continue;
                    } else if (b > 191 && b <= 223) {
                        c = b & 31;
                        followingChars = 1;
                    } else if (b <= 239) {
                        c = b & 15;
                        followingChars = 2;
                    } else if (b <= 247) {
                        c = b & 7;
                        followingChars = 3;
                    } else {
                        throw "not a UTF-8 string";
                    }
                    for (var j = 0; j < followingChars; ++j) {
                        b = bytes[i++];
                        if (b < 128 || b > 191) {
                            throw "not a UTF-8 string";
                        }
                        c <<= 6;
                        c += b & 63;
                    }
                    if (c >= 55296 && c <= 57343) {
                        throw "not a UTF-8 string";
                    }
                    if (c > 1114111) {
                        throw "not a UTF-8 string";
                    }
                    if (c <= 65535) {
                        str += String.fromCharCode(c);
                    } else {
                        c -= 65536;
                        str += String.fromCharCode((c >> 10) + 55296);
                        str += String.fromCharCode((c & 1023) + 56320);
                    }
                }
                return str;
            };
            var decodeAsBytes = function decodeAsBytes(base32Str) {
                base32Str = base32Str.replace(/=/g, "");
                var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;
                for (var i = 0, count = length >> 3 << 3; i < count; ) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                    bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                    bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                    bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
                    bytes[index++] = (v7 << 5 | v8) & 255;
                }
                var remain = length - count;
                if (remain == 2) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                } else if (remain == 4) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                    bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                } else if (remain == 5) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                    bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                    bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                } else if (remain == 7) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                    bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                    bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                    bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
                }
                return bytes;
            };
            var encodeAscii = function encodeAscii(str) {
                var v1, v2, v3, v4, v5, base32Str = "", length = str.length;
                for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
                    v1 = str.charCodeAt(i++);
                    v2 = str.charCodeAt(i++);
                    v3 = str.charCodeAt(i++);
                    v4 = str.charCodeAt(i++);
                    v5 = str.charCodeAt(i++);
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                }
                var remain = length - count;
                if (remain == 1) {
                    v1 = str.charCodeAt(i);
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                } else if (remain == 2) {
                    v1 = str.charCodeAt(i++);
                    v2 = str.charCodeAt(i);
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                } else if (remain == 3) {
                    v1 = str.charCodeAt(i++);
                    v2 = str.charCodeAt(i++);
                    v3 = str.charCodeAt(i);
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                } else if (remain == 4) {
                    v1 = str.charCodeAt(i++);
                    v2 = str.charCodeAt(i++);
                    v3 = str.charCodeAt(i++);
                    v4 = str.charCodeAt(i);
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                }
                return base32Str;
            };
            var encodeUtf8 = function encodeUtf8(str) {
                var v1, v2, v3, v4, v5, code, end = false, base32Str = "", index = 0, i, start = 0, bytes = 0, length = str.length;
                do {
                    blocks[0] = blocks[5];
                    blocks[1] = blocks[6];
                    blocks[2] = blocks[7];
                    for (i = start; index < length && i < 5; ++index) {
                        code = str.charCodeAt(index);
                        if (code < 128) {
                            blocks[i++] = code;
                        } else if (code < 2048) {
                            blocks[i++] = 192 | code >> 6;
                            blocks[i++] = 128 | code & 63;
                        } else if (code < 55296 || code >= 57344) {
                            blocks[i++] = 224 | code >> 12;
                            blocks[i++] = 128 | code >> 6 & 63;
                            blocks[i++] = 128 | code & 63;
                        } else {
                            code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++index) & 1023);
                            blocks[i++] = 240 | code >> 18;
                            blocks[i++] = 128 | code >> 12 & 63;
                            blocks[i++] = 128 | code >> 6 & 63;
                            blocks[i++] = 128 | code & 63;
                        }
                    }
                    bytes += i - start;
                    start = i - 5;
                    if (index == length) {
                        ++index;
                    }
                    if (index > length && i < 6) {
                        end = true;
                    }
                    v1 = blocks[0];
                    if (i > 4) {
                        v2 = blocks[1];
                        v3 = blocks[2];
                        v4 = blocks[3];
                        v5 = blocks[4];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                    } else if (i == 1) {
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                    } else if (i == 2) {
                        v2 = blocks[1];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                    } else if (i == 3) {
                        v2 = blocks[1];
                        v3 = blocks[2];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                    } else if (i == 4) {
                        v2 = blocks[1];
                        v3 = blocks[2];
                        v4 = blocks[3];
                        base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                    }
                } while (!end);
                return base32Str;
            };
            var encodeBytes = function encodeBytes(bytes) {
                var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length;
                for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
                    v1 = bytes[i++];
                    v2 = bytes[i++];
                    v3 = bytes[i++];
                    v4 = bytes[i++];
                    v5 = bytes[i++];
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                }
                var remain = length - count;
                if (remain == 1) {
                    v1 = bytes[i];
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                } else if (remain == 2) {
                    v1 = bytes[i++];
                    v2 = bytes[i];
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                } else if (remain == 3) {
                    v1 = bytes[i++];
                    v2 = bytes[i++];
                    v3 = bytes[i];
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                } else if (remain == 4) {
                    v1 = bytes[i++];
                    v2 = bytes[i++];
                    v3 = bytes[i++];
                    v4 = bytes[i];
                    base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                }
                return base32Str;
            };
            var encode = function encode(input, asciiOnly) {
                var notString = typeof input != "string";
                if (notString && input.constructor == ArrayBuffer) {
                    input = new Uint8Array(input);
                }
                if (notString) {
                    return encodeBytes(input);
                } else if (asciiOnly) {
                    return encodeAscii(input);
                } else {
                    return encodeUtf8(input);
                }
            };
            var decode = function decode(base32Str, asciiOnly) {
                if (!asciiOnly) {
                    return toUtf8String(decodeAsBytes(base32Str));
                }
                var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
                if (length == -1) {
                    length = base32Str.length;
                }
                for (var i = 0, count = length >> 3 << 3; i < count; ) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) + String.fromCharCode((v7 << 5 | v8) & 255);
                }
                var remain = length - count;
                if (remain == 2) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
                } else if (remain == 4) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
                } else if (remain == 5) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
                } else if (remain == 7) {
                    v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                    str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
                }
                return str;
            };
            decode.asBytes = decodeAsBytes;
            var exports = {
                encode: encode,
                decode: decode
            };
            if (root.HI_BASE32_TEST) {
                exports.toUtf8String = toUtf8String;
            }
            if (!root.HI_BASE32_TEST && NODE_JS) {
                module.exports = exports;
            } else if (root) {
                root.base32 = exports;
            }
        })(undefined);
    }).call(exports, function() {
        return this;
    }());
}, /*!***************************************!*\
  !*** ./~/xcomponent/src/constants.js ***!
  \***************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DELEGATE = exports.PROP_DEFER_TO_URL = exports.CONTEXT_TYPES_LIST = exports.CLOSE_REASONS = exports.EVENT_NAMES = exports.CLASS_NAMES = exports.CONTEXT_TYPES = exports.PROP_TYPES_LIST = exports.PROP_TYPES = exports.POST_MESSAGE = exports.XCOMPONENT = undefined;
    var _lib = __webpack_require__(/*! ./lib */ 36);
    var XCOMPONENT = exports.XCOMPONENT = "xcomponent";
    var POST_MESSAGE = exports.POST_MESSAGE = {
        INIT: XCOMPONENT + "_init",
        PROPS: XCOMPONENT + "_props",
        PROP_CALLBACK: XCOMPONENT + "_prop_callback",
        CLOSE: XCOMPONENT + "_close",
        REDIRECT: XCOMPONENT + "_redirect",
        RESIZE: XCOMPONENT + "_resize",
        DELEGATE: XCOMPONENT + "_delegate",
        ERROR: XCOMPONENT + "_error",
        HIDE: XCOMPONENT + "_hide",
        SUBMIT_CONTAINER_FORM: XCOMPONENT + "_submit_container_form"
    };
    var PROP_TYPES = exports.PROP_TYPES = {
        STRING: "string",
        OBJECT: "object",
        FUNCTION: "function",
        BOOLEAN: "boolean",
        NUMBER: "number"
    };
    var PROP_TYPES_LIST = exports.PROP_TYPES_LIST = (0, _lib.values)(PROP_TYPES);
    var CONTEXT_TYPES = exports.CONTEXT_TYPES = {
        IFRAME: "iframe",
        LIGHTBOX: "lightbox",
        POPUP: "popup"
    };
    var CLASS_NAMES = exports.CLASS_NAMES = {
        XCOMPONENT: "" + XCOMPONENT,
        COMPONENT: XCOMPONENT + "-component",
        CLOSE: XCOMPONENT + "-close",
        FOCUS: XCOMPONENT + "-focus",
        ELEMENT: XCOMPONENT + "-element",
        IFRAME: XCOMPONENT + "-iframe",
        LIGHTBOX: XCOMPONENT + "-lightbox",
        POPUP: XCOMPONENT + "-popup",
        CLOSING: XCOMPONENT + "-closing",
        AUTOCLOSE: XCOMPONENT + "-autoclose"
    };
    var EVENT_NAMES = exports.EVENT_NAMES = {
        CLICK: "click"
    };
    var CLOSE_REASONS = exports.CLOSE_REASONS = {
        PARENT_CALL: "parent_call",
        CHILD_CALL: "child_call",
        AUTOCLOSE: "autoclose",
        CLOSE_DETECTED: "close_detected",
        USER_CLOSED: "user_closed",
        PARENT_CLOSE_DETECTED: "parent_close_detected"
    };
    var CONTEXT_TYPES_LIST = exports.CONTEXT_TYPES_LIST = (0, _lib.values)(CONTEXT_TYPES);
    var PROP_DEFER_TO_URL = exports.PROP_DEFER_TO_URL = "xcomponent_prop_defer_to_url";
    var DELEGATE = exports.DELEGATE = {
        CALL_ORIGINAL: "call_original",
        CALL_DELEGATE: "call_delegate"
    };
}, /*!***************************************************!*\
  !*** ./~/xcomponent/src/component/child/props.js ***!
  \***************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.normalizeChildProps = normalizeChildProps;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    function normalizeChildProps(component, props) {
        var result = {};
        var _loop = function _loop() {
            if (_isArray) {
                if (_i >= _iterator.length) return "break";
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) return "break";
                _ref = _i.value;
            }
            var key = _ref;
            var prop = component.props[key];
            var value = props[key];
            var queryParam = typeof prop.queryParam === "string" ? prop.queryParam : key;
            if (value === _constants.PROP_DEFER_TO_URL) {
                (function() {
                    var actualValue = (0, _lib.getQueryParam)(queryParam);
                    if (prop.getter) {
                        value = function value() {
                            return _promise.SyncPromise.resolve(actualValue);
                        };
                    } else {
                        value = actualValue;
                    }
                })();
            } else if (prop.getter && value) {
                (function() {
                    var val = value;
                    value = function value() {
                        return val().then(function(res) {
                            if (res === _constants.PROP_DEFER_TO_URL) {
                                return (0, _lib.getQueryParam)(queryParam);
                            }
                            return res;
                        });
                    };
                })();
            }
            result[key] = value;
        };
        for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            var _ret = _loop();
            if (_ret === "break") break;
        }
        return result;
    }
}, /*!****************************************************!*\
  !*** ./~/xcomponent/src/component/parent/index.js ***!
  \****************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ParentComponent = undefined;
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
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
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    exports.destroyAll = destroyAll;
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _base = __webpack_require__(/*! ../base */ 8);
    var _window = __webpack_require__(/*! ../window */ 43);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    var _drivers = __webpack_require__(/*! ./drivers */ 48);
    var _validate = __webpack_require__(/*! ./validate */ 50);
    var _props = __webpack_require__(/*! ./props */ 51);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var activeComponents = [];
    var ParentComponent = exports.ParentComponent = function(_BaseComponent) {
        _inherits(ParentComponent, _BaseComponent);
        function ParentComponent(component) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            _classCallCheck(this, ParentComponent);
            var _this = _possibleConstructorReturn(this, (ParentComponent.__proto__ || Object.getPrototypeOf(ParentComponent)).call(this, component, options));
            (0, _validate.validate)(component, options);
            _this.component = component;
            if (component.singleton && activeComponents.some(function(comp) {
                return comp.component === component;
            })) {
                throw new Error(component.tag + " is a singleton, and an only be instantiated once");
            }
            _this.registerActiveComponent();
            _this.setProps(options.props || {});
            _this.childWindowName = options.childWindowName || _this.buildChildWindowName();
            _this.component.log("construct_parent");
            _this.onInit = new _promise.SyncPromise();
            _this.registerForCleanup(function() {
                _this.onInit = new _promise.SyncPromise();
            });
            _this.onInit["catch"](function(err) {
                _this.error(err);
            });
            return _this;
        }
        _createClass(ParentComponent, [ {
            key: "registerActiveComponent",
            value: function registerActiveComponent() {
                var _this2 = this;
                activeComponents.push(this);
                this.registerForCleanup(function() {
                    activeComponents.splice(activeComponents.indexOf(_this2), 1);
                });
            }
        }, {
            key: "buildChildWindowName",
            value: function buildChildWindowName() {
                var props = (0, _lib.replaceObject)(this.getPropsForChild(), function(value, key, fullKey) {
                    if (value instanceof Function) {
                        return {
                            __type__: "__function__"
                        };
                    }
                });
                return (0, _window.buildChildWindowName)(this.component.name, this.component.version, {
                    tag: this.component.tag,
                    parent: window.name,
                    props: props
                });
            }
        }, {
            key: "sendToParent",
            value: function sendToParent(name, data) {
                var parentWindow = (0, _window.getParentComponentWindow)();
                if (!parentWindow) {
                    throw new Error("Can not find parent component window to message");
                }
                this.component.log("send_to_parent_" + name);
                return _src2["default"].send((0, _window.getParentComponentWindow)(), name, data, {
                    domain: (0, _window.getParentDomain)()
                });
            }
        }, {
            key: "setProps",
            value: function setProps() {
                var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                var required = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                this.props = this.props || {};
                props.version = this.component.version;
                (0, _validate.validateProps)(this.component, props, required);
                if (this.component.validateProps) {
                    this.component.validateProps(this.component, props, required);
                }
                (0, _lib.extend)(this.props, (0, _props.normalizeParentProps)(this.component, this, props, required));
            }
        }, {
            key: "buildUrl",
            value: function buildUrl() {
                var _this3 = this;
                return (0, _props.propsToQuery)(this.component.props, this.props).then(function(queryProps) {
                    queryProps[_constants.XCOMPONENT] = "1";
                    return _promise.SyncPromise.resolve().then(function() {
                        if (_this3.props.url) {
                            return _this3.props.url;
                        }
                    }).then(function(url) {
                        if (!url) {
                            if (_this3.props.env && _this3.component.envUrls) {
                                url = _this3.component.envUrls[_this3.props.env];
                            } else if (_this3.component.defaultEnv && _this3.component.envUrls) {
                                url = _this3.component.envUrls[_this3.component.defaultEnv];
                            } else if (_this3.component.buildUrl) {
                                url = _this3.component.buildUrl(_this3);
                            } else {
                                url = _this3.component.url;
                            }
                        }
                        return (0, _lib.extendUrl)(url, {
                            query: queryProps
                        });
                    });
                });
            }
        }, {
            key: "getDomain",
            value: function getDomain() {
                if (this.component.domain) {
                    return this.component.domain;
                }
                if (this.component.domains && this.props.env && this.component.domains[this.props.env]) {
                    return this.component.domains[this.props.env];
                }
                if (this.component.envUrls && this.props.env && this.component.envUrls[this.props.env]) {
                    return (0, _lib.getDomainFromUrl)(this.component.envUrls[this.props.env]);
                }
                if (this.component.envUrls && this.component.defaultEnv && this.component.envUrls[this.component.defaultEnv]) {
                    return (0, _lib.getDomainFromUrl)(this.component.envUrls[this.component.defaultEnv]);
                }
                if (this.component.buildUrl) {
                    return (0, _lib.getDomainFromUrl)(this.component.buildUrl(this));
                }
                if (this.component.url) {
                    return (0, _lib.getDomainFromUrl)(this.component.url);
                }
                throw new Error("Can not determine domain for component");
            }
        }, {
            key: "getPropsForChild",
            value: function getPropsForChild(props) {
                props = props || this.props;
                var result = {};
                for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var key = _ref;
                    if (this.component.props[key].sendToChild !== false) {
                        result[key] = props[key];
                    }
                }
                return result;
            }
        }, {
            key: "updateProps",
            value: function updateProps() {
                var _this4 = this;
                var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                return _promise.SyncPromise.resolve().then(function() {
                    var changed = false;
                    for (var _iterator2 = Object.keys(props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref2;
                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref2 = _i2.value;
                        }
                        var key = _ref2;
                        if (props[key] !== _this4.props[key]) {
                            changed = true;
                            break;
                        }
                    }
                    if (!changed) {
                        return;
                    }
                    _this4.setProps(props, false);
                    return _this4.onInit.then(function() {
                        return _this4.childExports.updateProps(_this4.getPropsForChild(props));
                    });
                });
            }
        }, {
            key: "getRenderContext",
            value: function getRenderContext(el, context) {
                if (el) {
                    if (context && context !== _constants.CONTEXT_TYPES.IFRAME) {
                        throw new Error("[" + this.component.tag + "] " + context + " context can not be rendered into element");
                    }
                    context = _constants.CONTEXT_TYPES.IFRAME;
                }
                if (context) {
                    if (!this.component.contexts[context]) {
                        throw new Error("[" + this.component.tag + "] " + context + " context not allowed by component");
                    }
                    return context;
                }
                if (this.component.defaultContext) {
                    return this.component.defaultContext;
                }
                var _arr = [ _constants.CONTEXT_TYPES.LIGHTBOX, _constants.CONTEXT_TYPES.POPUP ];
                for (var _i3 = 0; _i3 < _arr.length; _i3++) {
                    var renderContext = _arr[_i3];
                    if (this.component.contexts[renderContext]) {
                        return renderContext;
                    }
                }
                throw new Error("[" + this.component.tag + "] No context options available for render");
            }
        }, {
            key: "validateRender",
            value: function validateRender(element, context) {
                context = this.getRenderContext(element, context);
                if (this.window) {
                    throw new Error("[" + this.component.tag + "] Can not render: component is already rendered");
                }
                if (_drivers.RENDER_DRIVERS[context].requiresElement && !element) {
                    throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
                }
                return context;
            }
        }, {
            key: "render",
            value: function render(element, context) {
                var _this5 = this;
                return this.tryInit(function() {
                    context = _this5.validateRender(element, context);
                    _this5.component.log("render_" + context, {
                        context: context,
                        element: element
                    });
                    return _this5.preRender(element, context).then(function() {
                        return _this5.postRender(element, context);
                    });
                });
            }
        }, {
            key: "openBridge",
            value: function openBridge(context) {
                return _drivers.RENDER_DRIVERS[context].openBridge.call(this);
            }
        }, {
            key: "open",
            value: function open(element, context) {
                var _this6 = this;
                return _promise.SyncPromise.resolve().then(function() {
                    _this6.component.log("open_" + context, {
                        element: element,
                        windowName: _this6.childWindowName
                    });
                    return _drivers.RENDER_DRIVERS[context].open.call(_this6, element);
                });
            }
        }, {
            key: "preRender",
            value: function preRender(element, context) {
                var _this7 = this;
                return _promise.SyncPromise.resolve().then(function() {
                    context = _this7.getRenderContext(element, context);
                    _this7.setForCleanup("context", context);
                    if (_drivers.RENDER_DRIVERS[context].renderedIntoParentTemplate) {
                        return _this7.createParentTemplate(context).then(function() {
                            return _this7.open(element, context);
                        });
                    }
                    return _promise.SyncPromise.all([ _this7.open(element, context), _this7.createParentTemplate(context) ]);
                }).then(function() {
                    _this7.watchForClose();
                    _this7.createComponentTemplate();
                    _this7.listen(_this7.window, _this7.getDomain());
                });
            }
        }, {
            key: "postRender",
            value: function postRender(element, context) {
                var _this8 = this;
                return _promise.SyncPromise.all([ this.openBridge(context), this.buildUrl() ]).then(function(_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2);
                    var bridge = _ref4[0];
                    var url = _ref4[1];
                    _this8.loadUrl(context, url);
                    _this8.runTimeout();
                });
            }
        }, {
            key: "validateRenderToParent",
            value: function validateRenderToParent(element, context) {
                context = this.getRenderContext(element, context);
                var parentWindow = (0, _window.getParentComponentWindow)();
                if (!parentWindow) {
                    throw new Error("[" + this.component.tag + "] Can not render to parent - no parent exists");
                }
                if (!(0, _window.isXComponentWindow)()) {
                    throw new Error("[" + this.component.tag + "] Can not render to parent - not in a child component window");
                }
                return context;
            }
        }, {
            key: "delegateToParent",
            value: function delegateToParent(element, context) {
                var _this9 = this;
                this.component.log("delegate_" + context + "_to_parent", {
                    element: element,
                    context: context
                });
                var delegate = this.sendToParent(_constants.POST_MESSAGE.DELEGATE, {
                    context: context,
                    tag: this.component.tag,
                    options: {
                        context: context,
                        childWindowName: this.childWindowName,
                        props: {
                            uid: this.props.uid,
                            dimensions: this.props.dimensions
                        },
                        overrides: {
                            focus: function focus() {
                                return _this9.focus();
                            },
                            userClose: function userClose() {
                                return _this9.userClose();
                            }
                        }
                    }
                }).then(function(_ref5) {
                    var data = _ref5.data;
                    _this9.registerForCleanup(data.destroy);
                    return data;
                });
                var overrides = _drivers.RENDER_DRIVERS[context].renderToParentOverrides;
                var _loop = function _loop() {
                    if (_isArray3) {
                        if (_i4 >= _iterator3.length) return "break";
                        _ref6 = _iterator3[_i4++];
                    } else {
                        _i4 = _iterator3.next();
                        if (_i4.done) return "break";
                        _ref6 = _i4.value;
                    }
                    var key = _ref6;
                    var val = overrides[key];
                    if (val === _constants.DELEGATE.CALL_ORIGINAL) {
                        return "continue";
                    }
                    var original = _this9[key];
                    _this9[key] = function() {
                        var _this10 = this, _arguments = arguments;
                        return delegate.then(function(data) {
                            var override = data.overrides[key];
                            if (val === _constants.DELEGATE.CALL_DELEGATE) {
                                return override.apply(_this10, _arguments);
                            }
                            if (val instanceof Function) {
                                return val(original, override).apply(_this10, _arguments);
                            }
                            throw new Error("Expected delgate to be CALL_ORIGINAL, CALL_DELEGATE, or factory method");
                        });
                    };
                };
                _loop2: for (var _iterator3 = Object.keys(overrides), _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                    var _ref6;
                    var _ret = _loop();
                    switch (_ret) {
                      case "break":
                        break _loop2;

                      case "continue":
                        continue;
                    }
                }
            }
        }, {
            key: "renderToParent",
            value: function renderToParent(element, context) {
                var _this11 = this;
                var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                return this.tryInit(function() {
                    context = _this11.validateRenderToParent(element, context);
                    _this11.component.log("render_" + context + "_to_parent", {
                        element: element,
                        context: context
                    });
                    _this11.delegateToParent(element, context);
                    return _this11.render(element, context);
                });
            }
        }, {
            key: "watchForClose",
            value: function watchForClose() {
                var _this12 = this;
                this.closeWindowListener = (0, _lib.onCloseWindow)(this.window, function() {
                    _this12.component.log("detect_close_child");
                    _this12.props.onClose(_constants.CLOSE_REASONS.CLOSE_DETECTED)["finally"](function() {
                        _this12.destroy();
                    });
                });
                this.unloadListener = (0, _lib.addEventListener)(window, "beforeunload", function() {
                    _this12.component.log("navigate_away");
                    _lib.logger.flush();
                    if (_this12.context === _constants.CONTEXT_TYPES.POPUP) {
                        _this12.destroy();
                    }
                });
                this.registerForCleanup(function() {
                    if (_this12.closeWindowListener) {
                        _this12.closeWindowListener.cancel();
                        delete _this12.closeWindowListener;
                    }
                    if (_this12.unloadListener) {
                        _this12.unloadListener.cancel();
                        delete _this12.unloadListener;
                    }
                });
            }
        }, {
            key: "loadUrl",
            value: function loadUrl(context, url) {
                this.component.log("load_url");
                if (window.location.href.split("#")[0] === url.split("#")[0]) {
                    url = (0, _lib.extendUrl)(url, {
                        query: _defineProperty({}, (0, _lib.uniqueID)(), "1")
                    });
                }
                _src2["default"].linkUrl(this.window, url);
                return _drivers.RENDER_DRIVERS[context].loadUrl.call(this, url);
            }
        }, {
            key: "renderHijack",
            value: function renderHijack(targetElement, element, context) {
                var _this13 = this;
                return this.tryInit(function() {
                    context = _this13.validateRender(element, context);
                    _this13.component.log("render_hijack_" + context);
                    targetElement.target = _this13.childWindowName;
                    return _this13.preRender(element, context).then(function() {
                        _this13.runTimeout();
                    });
                });
            }
        }, {
            key: "hijackSubmitParentForm",
            value: function hijackSubmitParentForm(element, context) {
                var _this14 = this;
                return this.tryInit(function() {
                    context = _this14.validateRenderToParent(element, context);
                    _this14.component.log("hijack_submit_parent_form_" + context);
                    _this14.delegateToParent(element, context);
                    return _this14.preRender(element, context).then(function() {
                        _this14.runTimeout();
                        return _this14.submitParentContainerForm(_this14.childWindowName);
                    });
                });
            }
        }, {
            key: "getContainerForm",
            value: function getContainerForm() {
                if (!this.iframe) {
                    throw new Error("Can not do hijack submit without iframe based component");
                }
                var form = (0, _lib.getParentNode)(this.iframe, "form");
                if (!form) {
                    throw new Error("Can not find form as a parent of iframe");
                }
                return form;
            }
        }, {
            key: "submitContainerForm",
            value: function submitContainerForm(target) {
                var form = this.getContainerForm();
                form.setAttribute("target", target);
                form.submit();
            }
        }, {
            key: "submitParentContainerForm",
            value: function submitParentContainerForm(target) {
                return this.sendToParent(_constants.POST_MESSAGE.SUBMIT_CONTAINER_FORM, {
                    target: target
                });
            }
        }, {
            key: "runTimeout",
            value: function runTimeout() {
                var _this15 = this;
                if (this.props.timeout) {
                    setTimeout(function() {
                        var error = new Error("[" + _this15.component.tag + "] Loading component " + _this15.component.tag + " timed out after " + _this15.props.timeout + " milliseconds");
                        _this15.onInit.reject(error)["catch"](function(err) {
                            return _this15.props.onTimeout(err)["finally"](function() {
                                _this15.component.log("timed_out", {
                                    timeout: _this15.props.timeout
                                });
                            });
                        });
                    }, this.props.timeout);
                }
            }
        }, {
            key: "listeners",
            value: function listeners() {
                var _ref7;
                return _ref7 = {}, _defineProperty(_ref7, _constants.POST_MESSAGE.INIT, function(source, data) {
                    var _this16 = this;
                    this.childExports = data.exports;
                    this.onInit.resolve(this);
                    return this.props.onEnter().then(function() {
                        _lib.logger.flush();
                        return {
                            props: _this16.getPropsForChild(),
                            context: _this16.context
                        };
                    });
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.CLOSE, function(source, data) {
                    this.close(data.reason);
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.DELEGATE, function(source, data) {
                    var component = this.component.getByTag(data.tag);
                    var delegate = component.delegate(data.options);
                    return {
                        overrides: delegate.getOverrides(data.context),
                        destroy: function destroy() {
                            return delegate.cleanup();
                        }
                    };
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.RESIZE, function(source, data) {
                    if (this.context === _constants.CONTEXT_TYPES.POPUP) {
                        return;
                    }
                    return this.resize(data.width, data.height);
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.HIDE, function(source, data) {
                    this.hide();
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.ERROR, function(source, data) {
                    this.error(new Error(data.error));
                }), _defineProperty(_ref7, _constants.POST_MESSAGE.SUBMIT_CONTAINER_FORM, function(source, data) {
                    this.submitContainerForm(data.target);
                }), _ref7;
            }
        }, {
            key: "resize",
            value: function resize(width, height) {
                this.component.log("resize", {
                    height: height,
                    width: width
                });
                _drivers.RENDER_DRIVERS[this.context].resize.call(this, width, height);
                if (this.component.resizeDelay) {
                    return (0, _lib.delay)(this.component.resizeDelay);
                }
            }
        }, {
            key: "restyle",
            value: function restyle() {
                return _drivers.RENDER_DRIVERS[this.context].restyle.call(this);
            }
        }, {
            key: "hide",
            value: function hide() {
                if (this.parentTemplate) {
                    this.parentTemplate.style.display = "none";
                }
                return _drivers.RENDER_DRIVERS[this.context].hide.call(this);
            }
        }, {
            key: "userClose",
            value: function userClose() {
                return this.close(_constants.CLOSE_REASONS.USER_CLOSED);
            }
        }, {
            key: "close",
            value: function close() {
                var _this17 = this;
                var reason = arguments.length <= 0 || arguments[0] === undefined ? _constants.CLOSE_REASONS.PARENT_CALL : arguments[0];
                if (this.closePromise) {
                    return this.closePromise;
                }
                this.component.log("close", {
                    reason: reason
                });
                if (this.closeWindowListener) {
                    this.closeWindowListener.cancel();
                }
                if (this.unloadListener) {
                    this.unloadListener.cancel();
                }
                this.addCloseClasses();
                var closePromise = _promise.SyncPromise.resolve().then(function() {
                    if (_this17.component.closeDelay && _this17.context !== _constants.CONTEXT_TYPES.POPUP) {
                        return (0, _lib.delay)(_this17.component.closeDelay);
                    }
                }).then(function() {
                    if (_this17.childExports && !(0, _lib.isWindowClosed)(_this17.window)) {}
                    _this17.destroy();
                    return _this17.props.onClose(reason);
                });
                this.setForCleanup("closePromise", closePromise);
                return closePromise;
            }
        }, {
            key: "addCloseClasses",
            value: function addCloseClasses() {
                if (this.parentTemplate) {
                    this.parentTemplate.className += " " + _constants.CLASS_NAMES.CLOSING;
                    if (this.component.autocloseParentTemplate) {
                        this.parentTemplate.className += " " + _constants.CLASS_NAMES.AUTOCLOSE;
                    }
                }
            }
        }, {
            key: "focus",
            value: function focus() {
                if (this.window) {
                    this.component.log("focus");
                    this.window.focus();
                } else {
                    throw new Error("No window to focus");
                }
            }
        }, {
            key: "createComponentTemplate",
            value: function createComponentTemplate() {
                var componentTemplate = this.component.componentTemplate instanceof Function ? this.component.componentTemplate() : this.component.componentTemplate;
                var html = (0, _lib.template)(componentTemplate, {
                    id: _constants.CLASS_NAMES.XCOMPONENT + "-" + this.props.uid,
                    CLASS: _constants.CLASS_NAMES
                });
                try {
                    this.window.document.open();
                    this.window.document.write(html);
                    this.window.document.close();
                } catch (err) {
                    try {
                        this.window.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                    } catch (err2) {}
                }
            }
        }, {
            key: "createParentTemplate",
            value: function createParentTemplate(context) {
                var _this18 = this;
                return _promise.SyncPromise.resolve().then(function() {
                    if (!_drivers.RENDER_DRIVERS[context].parentTemplate) {
                        return;
                    }
                    var parentTemplate = _this18.component.parentTemplate;
                    if (!parentTemplate) {
                        return;
                    }
                    _this18.parentTemplate = (0, _lib.createElement)("div", {
                        html: (0, _lib.template)(parentTemplate, {
                            id: _constants.CLASS_NAMES.XCOMPONENT + "-" + _this18.props.uid,
                            CLASS: _constants.CLASS_NAMES
                        }),
                        attributes: {
                            id: _constants.CLASS_NAMES.XCOMPONENT + "-" + _this18.props.uid
                        },
                        "class": [ _constants.CLASS_NAMES.XCOMPONENT, _constants.CLASS_NAMES.XCOMPONENT + "-" + _this18.context ]
                    });
                    document.body.appendChild(_this18.parentTemplate);
                    if (_drivers.RENDER_DRIVERS[context].focusable) {
                        (0, _lib.addEventToClass)(_this18.parentTemplate, _constants.CLASS_NAMES.FOCUS, _constants.EVENT_NAMES.CLICK, function(event) {
                            return _this18.focus();
                        });
                    }
                    (0, _lib.addEventToClass)(_this18.parentTemplate, _constants.CLASS_NAMES.CLOSE, _constants.EVENT_NAMES.CLICK, function(event) {
                        return _this18.userClose();
                    });
                    _this18.registerForCleanup(function(err) {
                        if (err || _this18.component.autocloseParentTemplate && _this18.parentTemplate) {
                            _this18.closeParentTemplate();
                        }
                    });
                });
            }
        }, {
            key: "closeParentTemplate",
            value: function closeParentTemplate() {
                if (this.parentTemplate) {
                    document.body.removeChild(this.parentTemplate);
                    delete this.parentTemplate;
                }
            }
        }, {
            key: "destroy",
            value: function destroy(err) {
                if (this.hasCleanupTasks()) {
                    this.component.log("destroy");
                    _lib.logger.flush();
                    this.cleanup(err);
                }
            }
        }, {
            key: "tryInit",
            value: function tryInit(method) {
                var _this19 = this;
                return _promise.SyncPromise.resolve().then(method)["catch"](function(err) {
                    _this19.onInit.reject(err);
                    throw err;
                }).then(function() {
                    return _this19.onInit;
                });
            }
        }, {
            key: "error",
            value: function error(err) {
                this.component.logError("error", {
                    error: err.stack || err.toString()
                });
                this.onInit.reject(err);
                this.destroy(err);
                return this.props.onError(err);
            }
        } ]);
        return ParentComponent;
    }(_base.BaseComponent);
    var _loop3 = function _loop3() {
        if (_isArray4) {
            if (_i5 >= _iterator4.length) return "break";
            _ref8 = _iterator4[_i5++];
        } else {
            _i5 = _iterator4.next();
            if (_i5.done) return "break";
            _ref8 = _i5.value;
        }
        var context = _ref8;
        var contextName = (0, _lib.capitalizeFirstLetter)(context);
        ParentComponent.prototype["render" + contextName] = function(element) {
            return this.render(element, context);
        };
        ParentComponent.prototype["render" + contextName + "ToParent"] = function(element) {
            return this.renderToParent(element, context);
        };
    };
    for (var _iterator4 = _constants.CONTEXT_TYPES_LIST, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
        var _ref8;
        var _ret2 = _loop3();
        if (_ret2 === "break") break;
    }
    function destroyAll() {
        while (activeComponents.length) {
            activeComponents[0].destroy();
        }
    }
}, /*!******************************************************!*\
  !*** ./~/xcomponent/src/component/parent/drivers.js ***!
  \******************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.RENDER_DRIVERS = undefined;
    var _RENDER_DRIVERS;
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _error = __webpack_require__(/*! ../../error */ 49);
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    var _window = __webpack_require__(/*! ../window */ 43);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    var RENDER_DRIVERS = exports.RENDER_DRIVERS = (_RENDER_DRIVERS = {}, _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.IFRAME, {
        parentTemplate: false,
        requiresElement: true,
        renderedIntoParentTemplate: false,
        open: function open(element) {
            var _this = this;
            if (!element) {
                throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
            }
            if (!(0, _lib.getElement)(element)) {
                throw new Error("[" + this.component.tag + "] Can not find element " + element);
            }
            this.iframe = (0, _lib.iframe)(element, null, {
                name: this.childWindowName,
                scrolling: this.component.scrolling === false ? "no" : "yes"
            });
            var dimensions = this.props.dimensions || this.component.dimensions || {};
            this.resize(dimensions.width, dimensions.height);
            this.restyle();
            this.window = this.iframe.contentWindow;
            this.registerForCleanup(function() {
                _this.window.close();
                delete _this.window;
                if (_this.iframe) {
                    if (_this.iframe.parentNode) {
                        _this.iframe.parentNode.removeChild(_this.iframe);
                    }
                    delete _this.iframe;
                }
            });
        },
        openBridge: function openBridge() {},
        renderToParentOverrides: {
            createParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            closeParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            createComponentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            addCloseClasses: _constants.DELEGATE.CALL_DELEGATE,
            hide: _constants.DELEGATE.CALL_DELEGATE,
            resize: _constants.DELEGATE.CALL_DELEGATE,
            restyle: _constants.DELEGATE.CALL_DELEGATE,
            loadUrl: _constants.DELEGATE.CALL_DELEGATE,
            hijackSubmit: _constants.DELEGATE.CALL_DELEGATE,
            open: function open(original, override) {
                return function() {
                    var _this2 = this;
                    return override.apply(this, arguments).then(function() {
                        _this2.window = _src2["default"].winutil.getFrameByName((0, _window.getParentWindow)(), _this2.childWindowName);
                        if (!_this2.window) {
                            throw new Error("Unable to find parent component iframe window");
                        }
                    });
                };
            }
        },
        resize: function resize(width, height) {
            this.iframe.style.width = width + "px";
            this.iframe.style.height = height + "px";
        },
        hide: function hide() {
            this.iframe.style.display = "none";
        },
        restyle: function restyle() {
            this.iframe.style.backgroundColor = "transparent";
        },
        renderToParent: function renderToParent(element, options) {
            if (!element) {
                throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
            }
            return this.renderToParentRemote(element, _constants.CONTEXT_TYPES.IFRAME, options);
        },
        loadUrl: function loadUrl(url) {
            this.iframe.src = url;
        }
    }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.POPUP, {
        parentTemplate: true,
        focusable: true,
        requiresElement: false,
        renderedIntoParentTemplate: false,
        open: function open() {
            var _this3 = this;
            var dimensions = this.props.dimensions || this.component.dimensions || {};
            var pos = (0, _window.getPosition)({
                x: dimensions.x,
                y: dimensions.y,
                width: dimensions.width,
                height: dimensions.height
            });
            this.window = (0, _lib.popup)("", {
                name: this.childWindowName,
                width: dimensions.width,
                height: dimensions.height,
                top: pos.y,
                left: pos.x,
                location: 1,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
            });
            this.registerForCleanup(function() {
                if (_this3.window) {
                    _this3.window.close();
                    delete _this3.window;
                }
            });
            if ((0, _lib.isWindowClosed)(this.window)) {
                var err = new _error.PopupOpenError("[" + this.component.tag + "] Can not open popup window - blocked");
                throw err;
            }
            this.resize(dimensions.width, dimensions.height);
        },
        openBridge: function openBridge() {
            var bridgeUrl = this.component.bridgeUrl;
            if (!bridgeUrl && this.component.bridgeUrls && this.props.env) {
                bridgeUrl = this.component.bridgeUrls[this.props.env];
            }
            if (bridgeUrl) {
                if ((0, _lib.getDomainFromUrl)(bridgeUrl) === (0, _lib.getDomain)(window)) {
                    return;
                }
                return _src2["default"].openBridge(bridgeUrl);
            }
        },
        resize: function resize(width, height) {
            if (width && height) {}
        },
        hide: function hide() {
            throw new Error("Can not hide popup");
        },
        restyle: function restyle() {},
        renderToParentOverrides: {
            createParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            closeParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            addCloseClasses: _constants.DELEGATE.CALL_DELEGATE,
            hide: _constants.DELEGATE.CALL_DELEGATE,
            open: _constants.DELEGATE.CALL_ORIGINAL,
            loadUrl: _constants.DELEGATE.CALL_ORIGINAL,
            createComponentTemplate: _constants.DELEGATE.CALL_ORIGINAL,
            resize: _constants.DELEGATE.CALL_ORIGINAL,
            restyle: _constants.DELEGATE.CALL_ORIGINAL
        },
        loadUrl: function loadUrl(url) {
            this.window.location = url;
        }
    }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.LIGHTBOX, {
        parentTemplate: true,
        requiresElement: false,
        renderedIntoParentTemplate: true,
        renderToParentOverrides: {
            createParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            closeParentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            createComponentTemplate: _constants.DELEGATE.CALL_DELEGATE,
            addCloseClasses: _constants.DELEGATE.CALL_DELEGATE,
            hide: _constants.DELEGATE.CALL_DELEGATE,
            resize: _constants.DELEGATE.CALL_DELEGATE,
            restyle: _constants.DELEGATE.CALL_DELEGATE,
            loadUrl: _constants.DELEGATE.CALL_DELEGATE,
            open: function open(original, override) {
                return function() {
                    var _this4 = this;
                    return override.apply(this, arguments).then(function() {
                        _this4.window = _src2["default"].winutil.getFrameByName((0, _window.getParentWindow)(), _this4.childWindowName);
                        if (!_this4.window) {
                            throw new Error("Unable to find parent component iframe window");
                        }
                    });
                };
            }
        },
        open: function open() {
            var element = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || document.body;
            return RENDER_DRIVERS[_constants.CONTEXT_TYPES.IFRAME].open.call(this, element);
        },
        openBridge: function openBridge() {},
        resize: function resize(width, height) {
            width = Math.min(width, window.innerWidth - 20);
            height = Math.min(height, window.innerHeight - 20);
            var container = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || this.iframe;
            container.style.position = "fixed";
            this.iframe.style.width = "100%";
            this.iframe.style.height = "100%";
            if (width) {
                this.parentTemplate.className += " set-width";
                container.style.width = width + "px";
                container.style.left = "50%";
                container.style.marginLeft = "-" + Math.floor(width / 2) + "px";
            } else {
                this.parentTemplate.className += " max-width";
                container.style.width = "100%";
                container.style.left = 0;
                container.style.marginLeft = 0;
                container.width = "100%";
            }
            if (height) {
                this.parentTemplate.className += " set-height";
                container.style.height = height + "px";
                container.style.top = "50%";
                container.style.marginTop = "-" + Math.floor(height / 2) + "px";
            } else {
                this.parentTemplate.className += " max-height";
                container.style.height = "100%";
                container.style.top = 0;
                container.style.marginTop = 0;
                container.height = "100%";
            }
        },
        hide: function hide() {
            this.iframe.style.display = "none";
        },
        restyle: function restyle() {},
        loadUrl: function loadUrl(url) {
            this.iframe.src = url;
        }
    }), _RENDER_DRIVERS);
}, /*!***********************************!*\
  !*** ./~/xcomponent/src/error.js ***!
  \***********************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PopupOpenError = PopupOpenError;
    exports.IntegrationError = IntegrationError;
    function PopupOpenError(message) {
        this.message = message;
    }
    PopupOpenError.prototype = Object.create(Error.prototype);
    function IntegrationError(message) {
        this.message = message;
    }
    IntegrationError.prototype = Object.create(Error.prototype);
}, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/parent/validate.js ***!
  \*******************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.validateProp = validateProp;
    exports.validateProps = validateProps;
    exports.validate = validate;
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    function validateProp(prop, key, value) {
        var required = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
        var hasProp = value !== null && value !== undefined && value !== "";
        if (!hasProp) {
            if (required && prop.required !== false && !prop.hasOwnProperty("def")) {
                throw new Error("Prop is required: " + key);
            }
            return;
        }
        if (value === _constants.PROP_DEFER_TO_URL) {
            return;
        }
        if (value.then && prop.promise) {
            return;
        }
        if (prop.type === "function") {
            if (!(value instanceof Function)) {
                throw new Error("Prop is not of type function: " + key);
            }
        } else if (prop.type === "string") {
            if (typeof value !== "string") {
                if (!(prop.getter && (value instanceof Function || value && value.then))) {
                    throw new Error("Prop is not of type string: " + key);
                }
            }
        } else if (prop.type === "object") {
            try {
                JSON.stringify(value);
            } catch (err) {
                throw new Error("Unable to serialize prop: " + key);
            }
        } else if (prop.type === "number") {
            if (isNaN(parseInt(value, 10))) {
                throw new Error("Prop is not a number: " + key);
            }
        }
    }
    function validateProps(component, props) {
        var required = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
        props = props || {};
        for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var key = _ref;
            if (!component.props.hasOwnProperty(key)) {
                throw new Error("[" + component.tag + "] Invalid prop: " + key);
            }
        }
        for (var _iterator2 = Object.keys(component.props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }
            var _key = _ref2;
            var prop = component.props[_key];
            var value = props[_key];
            validateProp(prop, _key, value, required);
        }
    }
    function validate(component, options) {
        var props = options.props || {};
        if (props.env && component.envUrls && !component.envUrls[props.env]) {
            throw new Error("Invalid env: " + props.env);
        }
    }
}, /*!****************************************************!*\
  !*** ./~/xcomponent/src/component/parent/props.js ***!
  \****************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.propsToQuery = propsToQuery;
    exports.normalizeParentProps = normalizeParentProps;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _validate = __webpack_require__(/*! ./validate */ 50);
    var _props = __webpack_require__(/*! ../props */ 52);
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    function propsToQuery(propsDef, props) {
        var params = {};
        return _promise.SyncPromise.all(Object.keys(props).map(function(key) {
            var prop = propsDef[key];
            var queryParam = key;
            if (typeof prop.queryParam === "string") {
                queryParam = prop.queryParam;
            }
            return _promise.SyncPromise.resolve().then(function() {
                var value = props[key];
                if (!value) {
                    return;
                }
                if (prop.queryParam === false) {
                    return;
                }
                if (value === _constants.PROP_DEFER_TO_URL) {
                    return;
                }
                if (prop.getter) {
                    return value.call().then(function(result) {
                        (0, _validate.validateProp)(prop, key, result);
                        return result;
                    });
                }
                return value;
            }).then(function(value) {
                if (!value) {
                    return;
                }
                var result = void 0;
                if (typeof value === "boolean") {
                    result = "1";
                } else if (typeof value === "string") {
                    result = value.toString();
                } else if (typeof value === "function") {
                    return;
                } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                    result = JSON.stringify(value);
                } else if (typeof value === "number") {
                    result = value.toString();
                }
                params[queryParam] = result;
            });
        })).then(function() {
            return params;
        });
    }
    function normalizeParentProps(component, instance, props) {
        var required = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
        props = (0, _props.normalizeProps)(component, instance, props, required);
        var _loop = function _loop() {
            if (_isArray) {
                if (_i >= _iterator.length) return "break";
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) return "break";
                _ref = _i.value;
            }
            var key = _ref;
            var value = props[key];
            if (value) {
                var prop = component.props[key];
                if (prop.autoClose) {
                    props[key] = function() {
                        instance.component.log("autoclose", {
                            prop: key
                        });
                        var result = _promise.SyncPromise.resolve(value.apply(this, arguments));
                        return _promise.SyncPromise.all([ result, instance.close(_constants.CLOSE_REASONS.AUTOCLOSE) ]).then(function() {
                            return result;
                        });
                    };
                }
            }
        };
        for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            var _ret = _loop();
            if (_ret === "break") break;
        }
        return props;
    }
}, /*!*********************************************!*\
  !*** ./~/xcomponent/src/component/props.js ***!
  \*********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.normalizeProp = normalizeProp;
    exports.normalizeProps = normalizeProps;
    var _lib = __webpack_require__(/*! ../lib */ 36);
    var _constants = __webpack_require__(/*! ../constants */ 45);
    function normalizeProp(component, instance, props, key, value) {
        var prop = component.props[key];
        var hasProp = props.hasOwnProperty(key) && value !== null && value !== undefined && value !== "";
        if (!hasProp && prop.def) {
            value = prop.def instanceof Function ? prop.def.call(component, props) : prop.def;
        }
        if (prop.decorate) {
            value = prop.decorate(value);
        }
        if (value === _constants.PROP_DEFER_TO_URL) {
            return value;
        }
        if (prop.getter) {
            if (!value) {
                return;
            }
            return (0, _lib.getter)((value instanceof Function ? value : function() {
                return value;
            }).bind(instance));
        }
        if (prop.type === "boolean") {
            value = Boolean(value);
        } else if (prop.type === "function") {
            if (!value) {
                if (!value && prop.noop) {
                    value = _lib.noop;
                    if (prop.denodeify) {
                        value = (0, _lib.denodeify)(value);
                    }
                    if (prop.promisify) {
                        value = (0, _lib.promisify)(value);
                    }
                }
            } else {
                (function() {
                    value = value.bind(instance);
                    if (prop.denodeify) {
                        value = (0, _lib.denodeify)(value);
                    }
                    if (prop.promisify) {
                        value = (0, _lib.promisify)(value);
                    }
                    var original = value;
                    value = function value() {
                        component.log("call_prop_" + key);
                        return original.apply(this, arguments);
                    };
                    if (prop.once) {
                        value = (0, _lib.once)(value);
                    }
                    if (prop.memoize) {
                        value = (0, _lib.memoize)(value);
                    }
                })();
            }
        } else if (prop.type === "string") {} else if (prop.type === "object") {} else if (prop.type === "number") {
            if (value !== undefined) {
                value = parseInt(value, 10);
            }
        }
        return value;
    }
    function normalizeProps(component, instance, props) {
        var required = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
        props = props || {};
        var result = {};
        for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var key = _ref;
            if (required || props.hasOwnProperty(key)) {
                result[key] = normalizeProp(component, instance, props, key, props[key]);
            }
        }
        return result;
    }
}, /*!******************************************************!*\
  !*** ./~/xcomponent/src/component/delegate/index.js ***!
  \******************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DelegateComponent = undefined;
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _base = __webpack_require__(/*! ../base */ 8);
    var _parent = __webpack_require__(/*! ../parent */ 47);
    var _drivers = __webpack_require__(/*! ../parent/drivers */ 48);
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DelegateComponent = exports.DelegateComponent = function(_BaseComponent) {
        _inherits(DelegateComponent, _BaseComponent);
        function DelegateComponent(component) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            _classCallCheck(this, DelegateComponent);
            var _this = _possibleConstructorReturn(this, (DelegateComponent.__proto__ || Object.getPrototypeOf(DelegateComponent)).call(this, component, options));
            _this.component = component;
            _this.context = options.context;
            _this.props = options.props;
            _this.focus = options.overrides.focus;
            _this.userClose = options.overrides.userClose;
            var renderToParentOverrides = _drivers.RENDER_DRIVERS[options.context].renderToParentOverrides;
            for (var _iterator = Object.keys(renderToParentOverrides), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                _this[key] = _parent.ParentComponent.prototype[key];
            }
            _this.childWindowName = options.childWindowName;
            _parent.ParentComponent.prototype.registerActiveComponent.call(_this);
            return _this;
        }
        _createClass(DelegateComponent, [ {
            key: "getOverrides",
            value: function getOverrides(context) {
                var renderToParentOverrides = _drivers.RENDER_DRIVERS[context].renderToParentOverrides;
                var overrides = {};
                var self = this;
                var _loop = function _loop() {
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) return "break";
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) return "break";
                        _ref2 = _i2.value;
                    }
                    var key = _ref2;
                    overrides[key] = function() {
                        return _parent.ParentComponent.prototype[key].apply(self, arguments);
                    };
                };
                for (var _iterator2 = Object.keys(renderToParentOverrides), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    var _ret = _loop();
                    if (_ret === "break") break;
                }
                return overrides;
            }
        }, {
            key: "destroy",
            value: function destroy() {
                this.cleanup();
            }
        } ]);
        return DelegateComponent;
    }(_base.BaseComponent);
}, /*!*******************************************************!*\
  !*** ./~/xcomponent/src/component/component/props.js ***!
  \*******************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.internalProps = undefined;
    var _lib = __webpack_require__(/*! ../../lib */ 36);
    var internalProps = exports.internalProps = {
        uid: {
            type: "string",
            def: function def() {
                return (0, _lib.uniqueID)();
            }
        },
        url: {
            type: "string",
            required: false,
            queryParam: false,
            promise: true,
            sendToChild: false
        },
        env: {
            type: "string",
            required: false,
            def: function def() {
                return this.defaultEnv;
            }
        },
        version: {
            type: "string",
            required: false
        },
        dimensions: {
            type: "object",
            required: false
        },
        timeout: {
            type: "number",
            required: false,
            queryParam: false
        },
        onEnter: {
            type: "function",
            required: false,
            noop: true,
            promisify: true
        },
        onClose: {
            type: "function",
            required: false,
            noop: true,
            memoize: true,
            promisify: true
        },
        onTimeout: {
            type: "function",
            required: false,
            memoize: true,
            autoClose: true,
            promisify: true,
            def: function def() {
                return function(err) {
                    return this.props.onError(err);
                };
            }
        },
        onError: {
            type: "function",
            required: false,
            promisify: true,
            def: function def() {
                return function(err) {
                    console.error(err.message, "\n", err.stack || err.toString());
                };
            },
            once: true
        }
    };
}, /*!**********************************************************!*\
  !*** ./~/xcomponent/src/component/component/validate.js ***!
  \**********************************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.validate = validate;
    var _constants = __webpack_require__(/*! ../../constants */ 45);
    function validateProps(options) {
        if (options.props && !(_typeof(options.props) === "object")) {
            throw new Error("[" + options.tag + "] Expected options.props to be an object");
        }
        if (options.props) {
            for (var _iterator = Object.keys(options.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }
                var key = _ref;
                var prop = options.props[key];
                if (!prop || !((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object")) {
                    throw new Error("[" + options.tag + "] Expected options.props." + key + " to be an object");
                }
                if (!prop.type) {
                    throw new Error("[" + options.tag + "] Expected prop.type");
                }
                if (_constants.PROP_TYPES_LIST.indexOf(prop.type) === -1) {
                    throw new Error("[" + options.tag + "] Expected prop.type to be one of " + _constants.PROP_TYPES_LIST.join(", "));
                }
                if (prop.required && prop.def) {
                    throw new Error("[" + options.tag + "] Required prop can not have a default value");
                }
            }
        }
    }
    function validate(options) {
        if (!options.tag || !options.tag.match(/^[a-z0-9-]+$/)) {
            throw new Error("Invalid options.tag: " + options.tag);
        }
        validateProps(options);
        if (options.dimensions) {
            if (typeof options.dimensions.width !== "number") {
                throw new Error("[" + options.tag + "] Expected options.dimensions.width to be a number");
            }
            if (typeof options.dimensions.height !== "number") {
                throw new Error("[" + options.tag + "] Expected options.dimensions.height to be a number");
            }
        }
        if (options.contexts) {
            var anyEnabled = false;
            for (var _iterator2 = Object.keys(options.contexts), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                var _ref2;
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    _ref2 = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    _ref2 = _i2.value;
                }
                var context = _ref2;
                if (_constants.CONTEXT_TYPES_LIST.indexOf(context) === -1) {
                    throw new Error("[" + options.tag + "] Unsupported context type: " + context);
                }
                if (options.contexts[context] || options.contexts[context] === undefined) {
                    anyEnabled = true;
                }
            }
            if (!anyEnabled) {
                throw new Error("[" + options.tag + "] No context type is enabled");
            }
            if (options.contexts.iframe !== false) {
                if (!options.dimensions) {
                    throw new Error("[" + options.tag + "] dimesions.width and dimensions.height required for rendering to iframe");
                }
            }
        }
        if (options.defaultContext) {
            if (_constants.CONTEXT_TYPES_LIST.indexOf(options.defaultContext) === -1) {
                throw new Error("[" + options.tag + "] Unsupported context type: " + options.defaultContext);
            }
            if (options.contexts && !options.contexts[options.defaultContext]) {
                throw new Error("[" + options.tag + "] Disallowed default context type: " + options.defaultContext);
            }
        }
        if (options.envUrls) {
            for (var _iterator3 = Object.keys(options.envUrls), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref3;
                if (_isArray3) {
                    if (_i3 >= _iterator3.length) break;
                    _ref3 = _iterator3[_i3++];
                } else {
                    _i3 = _iterator3.next();
                    if (_i3.done) break;
                    _ref3 = _i3.value;
                }
                var env = _ref3;
                if (!options.envUrls[env]) {
                    throw new Error("[" + options.tag + "] No url specified for env: " + env);
                }
            }
        }
        if (options.defaultEnv && !options.envUrls) {
            throw new Error("[" + options.tag + "] options.envUrls must be set if passing in a defaultEnv");
        }
        if (options.defaultEnv && !options.envUrls[options.defaultEnv]) {
            throw new Error("[" + options.tag + "] Invalid default env: " + options.defaultEnv);
        }
        if ((!options.url || !(typeof options.url === "string")) && !options.buildUrl) {
            if (!options.defaultEnv || typeof options.defaultEnv !== "string") {
                if (options.envUrls) {
                    throw new Error("[" + options.tag + "] Expected options.defaultEnv to be a string");
                } else {
                    throw new Error("[" + options.tag + "] Expected options.url to be a string");
                }
            }
        }
    }
}, /*!*******************************************************************!*\
  !*** ./~/xcomponent/src/component/component/templates/parent.htm ***!
  \*******************************************************************/
function(module, exports) {
    module.exports = '<div class="{CLASS.XCOMPONENT}-overlay {CLASS.FOCUS}">\n    <a href="#{CLASS.CLOSE}" class="{CLASS.CLOSE}"></a>\n\n    <div class="{CLASS.ELEMENT}"></div>\n</div>\n\n<style>\n    #{id} .{CLASS.XCOMPONENT}-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n\n    #{id}.{CLASS.POPUP} .{CLASS.XCOMPONENT}-overlay {\n        cursor: pointer;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .{CLASS.ELEMENT} {\n        box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);\n    }\n\n    #{id} .{CLASS.CLOSE} {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n    }\n\n    #{id} .{CLASS.CLOSE}:hover {\n        opacity: 1;\n    }\n\n    #{id} .{CLASS.CLOSE}:before, .{CLASS.CLOSE}:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 16px;\n        width: 2px;\n        background-color: white;\n    }\n\n    #{id} .{CLASS.CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #{id} .{CLASS.CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n</style>';
}, /*!**********************************************************************!*\
  !*** ./~/xcomponent/src/component/component/templates/component.htm ***!
  \**********************************************************************/
function(module, exports) {
    module.exports = "";
}, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/index.js ***!
  \*******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _script = __webpack_require__(/*! ./script */ 59);
    Object.keys(_script).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _script[key];
            }
        });
    });
    var _react = __webpack_require__(/*! ./react */ 60);
    Object.keys(_react).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _react[key];
            }
        });
    });
    var _angular = __webpack_require__(/*! ./angular */ 61);
    Object.keys(_angular).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _angular[key];
            }
        });
    });
    var _ember = __webpack_require__(/*! ./ember */ 62);
    Object.keys(_ember).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _ember[key];
            }
        });
    });
}, /*!********************************************!*\
  !*** ./~/xcomponent/src/drivers/script.js ***!
  \********************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var htmlComponent = exports.htmlComponent = {
        isActive: function isActive() {
            return true;
        },
        register: function register(component) {
            function render(element) {
                if (!element || !element.tagName || element.tagName.toLowerCase() !== "script") {
                    return;
                }
                if (!element.attributes.type || element.attributes.type.value !== "application/x-component") {
                    return;
                }
                if (!element.attributes["data-component"] || element.attributes["data-component"].value !== component.tag) {
                    return;
                }
                component.log("instantiate_script_component");
                var props = void 0;
                eval("props = " + element.innerText);
                var container = document.createElement("div");
                element.parentNode.replaceChild(container, element);
                component.init(props).render(container);
            }
            function scan() {
                var scriptTags = Array.prototype.slice.call(document.getElementsByTagName("script"));
                for (var _iterator = scriptTags, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var element = _ref;
                    render(element);
                }
            }
            scan();
            document.addEventListener("DOMContentLoaded", scan);
            window.addEventListener("load", scan);
            document.addEventListener("DOMNodeInserted", function(event) {
                render(event.target);
            });
        }
    };
}, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/react.js ***!
  \*******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.react = undefined;
    var _lib = __webpack_require__(/*! ../lib */ 36);
    var react = exports.react = {
        isActive: function isActive() {
            return Boolean(window.React);
        },
        register: function register(component) {
            component.react = window.React.createClass({
                render: function render() {
                    return window.React.createElement("div", null);
                },
                componentDidMount: function componentDidMount() {
                    component.log("instantiate_react_component");
                    var parent = component.init((0, _lib.extend)({}, this.props));
                    this.setState({
                        parent: parent
                    });
                    parent.renderIframe(window.ReactDOM.findDOMNode(this));
                },
                componentDidUpdate: function componentDidUpdate() {
                    if (this.state && this.state.parent) {
                        this.state.parent.updateProps((0, _lib.extend)({}, this.props));
                    }
                }
            });
        }
    };
}, /*!*********************************************!*\
  !*** ./~/xcomponent/src/drivers/angular.js ***!
  \*********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.angular = undefined;
    var _lib = __webpack_require__(/*! ../lib */ 36);
    var angular = exports.angular = {
        isActive: function isActive() {
            return Boolean(window.angular);
        },
        register: function register(component) {
            window.angular.module(component.tag, []).directive((0, _lib.dasherizeToCamel)(component.tag), function() {
                var scope = {};
                for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var _key = _ref;
                    var prop = component.props[_key];
                    if (prop.type === "function" || prop.type === "object") {
                        scope[_key] = "=";
                    } else if (prop.type === "string" || prop.type === "boolean" || prop.type === "number") {
                        scope[_key] = "@";
                    } else {
                        throw new Error("Unrecognized prop type: " + prop.type);
                    }
                }
                return {
                    scope: scope,
                    restrict: "E",
                    controller: function controller($scope, $element) {
                        component.log("instantiate_angular_component");
                        function getProps() {
                            var instanceProps = {};
                            var _loop = function _loop() {
                                if (_isArray2) {
                                    if (_i2 >= _iterator2.length) return "break";
                                    _ref2 = _iterator2[_i2++];
                                } else {
                                    _i2 = _iterator2.next();
                                    if (_i2.done) return "break";
                                    _ref2 = _i2.value;
                                }
                                var key = _ref2;
                                var prop = component.props[key];
                                var value = prop.type === "function" ? $scope[key] && function() {
                                    var result = $scope[key].apply(this, arguments);
                                    $scope.$apply();
                                    return result;
                                } : $scope[key];
                                instanceProps[key] = value;
                            };
                            for (var _iterator2 = Object.keys(scope), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                                var _ref2;
                                var _ret = _loop();
                                if (_ret === "break") break;
                            }
                            return instanceProps;
                        }
                        var parent = component.init(getProps());
                        parent.render($element[0]);
                        $scope.$watch(function() {
                            parent.updateProps(getProps());
                        });
                    }
                };
            });
        }
    };
}, /*!*******************************************!*\
  !*** ./~/xcomponent/src/drivers/ember.js ***!
  \*******************************************/
function(module, exports) {
    "use strict";
}, /*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var config = exports.config = {
        scriptUrl: "//www.paypalobjects.com/api/" + "paypal.checkout.v4.0.12.js",
        legacyScriptUrl: "//www.paypalobjects.com/api/checkout.js",
        ppobjects: false,
        cors: true,
        env: "production",
        state: "paypal_xcomponent",
        locale: {
            country: "US",
            lang: "en"
        },
        enableBridge: true,
        stage: "msmaster",
        SUPPORTED_AGENTS: {
            Chrome: 27,
            IE: 9,
            MSIE: 9,
            Firefox: 30,
            Safari: 5.1,
            Opera: 23
        },
        get apiStage() {
            return config.stage;
        },
        get paypalUrls() {
            return {
                local: "http://localhost.paypal.com:8000",
                stage: "https://www." + config.stage + ".qa.paypal.com",
                sandbox: "https://www.sandbox.paypal.com",
                production: "https://www.paypal.com",
                test: window.location.protocol + "//" + window.location.host
            };
        },
        get apiUrls() {
            return {
                local: "https://" + config.apiStage + ".qa.paypal.com:11888",
                stage: "https://" + config.apiStage + ".qa.paypal.com:11888",
                sandbox: "https://cors.api.sandbox.paypal.com",
                production: "https://cors.api.paypal.com"
            };
        },
        checkoutUris: {
            local: "/webapps/hermes?ul=0",
            stage: "/webapps/hermes",
            sandbox: "/checkoutnow",
            production: "/checkoutnow",
            test: "/base/test/child.htm"
        },
        billingUris: {
            local: "/webapps/hermes/agreements?ul=0",
            stage: "/webapps/hermes/agreements",
            sandbox: "/agreements/approve",
            production: "/agreements/approve",
            test: "/base/test/child.htm"
        },
        buttonUris: {
            local: "/webapps/hermes/button",
            stage: "/webapps/hermes/button",
            sandbox: "/webapps/hermes/button",
            production: "/webapps/hermes/button",
            test: "/base/test/child.htm"
        },
        loggerUri: "/webapps/hermes/api/logger",
        get bridgeUri() {
            return "/webapps/hermes/component-meta?xcomponent=1&version=" + (config.ppobjects ? "4.0.12" : "4.0.12");
        },
        authApiUri: "/v1/oauth2/token",
        paymentApiUri: "/v1/payments/payment",
        billingApiUri: "/v1/billing-agreements/agreement-tokens",
        get checkoutUrls() {
            return {
                local: "" + config.paypalUrls.local + config.checkoutUris.local,
                stage: "" + config.paypalUrls.stage + config.checkoutUris.stage,
                sandbox: "" + config.paypalUrls.sandbox + config.checkoutUris.sandbox,
                production: "" + config.paypalUrls.production + config.checkoutUris.production,
                test: "" + config.paypalUrls.test + config.checkoutUris.test
            };
        },
        get billingUrls() {
            return {
                local: "" + config.paypalUrls.local + config.billingUris.local,
                stage: "" + config.paypalUrls.stage + config.billingUris.stage,
                sandbox: "" + config.paypalUrls.sandbox + config.billingUris.sandbox,
                production: "" + config.paypalUrls.production + config.billingUris.production,
                test: "" + config.paypalUrls.test + config.billingUris.test
            };
        },
        get buttonUrls() {
            return {
                local: "" + config.paypalUrls.local + config.buttonUris.local,
                stage: "" + config.paypalUrls.stage + config.buttonUris.stage,
                sandbox: "" + config.paypalUrls.sandbox + config.buttonUris.sandbox,
                production: "" + config.paypalUrls.production + config.buttonUris.production,
                test: "" + config.paypalUrls.test + config.buttonUris.test
            };
        },
        get bridgeUrls() {
            return {
                local: "" + config.paypalUrls.local + config.bridgeUri + "&env=local",
                stage: "" + config.paypalUrls.stage + config.bridgeUri + "&env=stage&stage=" + config.stage,
                sandbox: "" + config.paypalUrls.sandbox + config.bridgeUri + "&env=sandbox",
                production: "" + config.paypalUrls.production + config.bridgeUri + "&env=production",
                test: "" + config.paypalUrls.test + config.bridgeUri + "&env=test"
            };
        },
        get authApiUrls() {
            return {
                local: "" + config.apiUrls.local + config.authApiUri,
                stage: "" + config.apiUrls.stage + config.authApiUri,
                sandbox: "" + config.apiUrls.sandbox + config.authApiUri,
                production: "" + config.apiUrls.production + config.authApiUri,
                test: "" + config.apiUrls.test + config.authApiUri
            };
        },
        get paymentApiUrls() {
            return {
                local: "" + config.apiUrls.local + config.paymentApiUri,
                stage: "" + config.apiUrls.stage + config.paymentApiUri,
                sandbox: "" + config.apiUrls.sandbox + config.paymentApiUri,
                production: "" + config.apiUrls.production + config.paymentApiUri,
                test: "" + config.apiUrls.test + config.paymentApiUri
            };
        },
        get billingApiUrls() {
            return {
                local: "" + config.apiUrls.local + config.billingApiUri,
                stage: "" + config.apiUrls.stage + config.billingApiUri,
                sandbox: "" + config.apiUrls.sandbox + config.billingApiUri,
                production: "" + config.apiUrls.production + config.billingApiUri,
                test: "" + config.apiUrls.test + config.billingApiUri
            };
        },
        get paypalUrl() {
            return config.paypalUrls[config.env];
        },
        get apiUrl() {
            return config.apiUrls[config.env];
        },
        get checkoutUrl() {
            return "" + config.paypalUrl + config.checkoutUris[config.env];
        },
        get billingUrl() {
            return "" + config.paypalUrl + config.billingUris[config.env];
        },
        get buttonUrl() {
            return "" + config.paypalUrl + config.buttonUris[config.env];
        },
        get bridgeUrl() {
            return config.paypalUrl + "/webapps/hermes/component-meta?xcomponent=1&version=" + (config.ppobjects ? "4.0.12" : "4.0.12") + "&env=" + config.env;
        },
        get loggerUrl() {
            return "" + config.paypalUrl + config.loggerUri;
        },
        get authApiUrl() {
            return config.apiUrl + "/v1/oauth2/token";
        },
        get paymentApiUrl() {
            return config.apiUrl + "/v1/payments/payment";
        },
        get billingApiUrl() {
            return config.apiUrl + "/v1/billing-agreements/agreement-tokens";
        },
        locales: {
            AD: [ "zh", "es", "fr", "en" ],
            AE: [ "ar", "zh", "es", "fr", "en" ],
            AG: [ "zh", "es", "fr", "en" ],
            AI: [ "zh", "es", "fr", "en" ],
            AL: [ "en" ],
            AM: [ "zh", "es", "fr", "en" ],
            AN: [ "zh", "es", "fr", "en" ],
            AO: [ "zh", "es", "fr", "en" ],
            AR: [ "en", "es" ],
            AT: [ "de", "en" ],
            AU: [ "en" ],
            AW: [ "zh", "es", "fr", "en" ],
            AZ: [ "zh", "es", "fr", "en" ],
            BA: [ "en" ],
            BB: [ "zh", "es", "fr", "en" ],
            BE: [ "nl", "fr", "en" ],
            BF: [ "zh", "es", "en", "fr" ],
            BG: [ "en" ],
            BH: [ "zh", "es", "fr", "en", "ar" ],
            BI: [ "zh", "es", "en", "fr" ],
            BJ: [ "zh", "es", "en", "fr" ],
            BM: [ "zh", "es", "fr", "en" ],
            BN: [ "en" ],
            BO: [ "zh", "fr", "en", "es" ],
            BR: [ "pt", "en" ],
            BS: [ "zh", "es", "fr", "en" ],
            BT: [ "en" ],
            BW: [ "zh", "es", "fr", "en" ],
            BY: [ "en" ],
            BZ: [ "zh", "fr", "en", "es" ],
            C2: [ "zh", "en" ],
            CA: [ "fr", "en" ],
            CD: [ "zh", "es", "en", "fr" ],
            CG: [ "zh", "es", "fr", "en" ],
            CH: [ "fr", "en", "de" ],
            CI: [ "en", "fr" ],
            CK: [ "zh", "es", "fr", "en" ],
            CL: [ "zh", "fr", "en", "es" ],
            CM: [ "en", "fr" ],
            CN: [ "zh" ],
            CO: [ "zh", "fr", "en", "es" ],
            CR: [ "zh", "fr", "en", "es" ],
            CV: [ "zh", "es", "fr", "en" ],
            CY: [ "en" ],
            CZ: [ "zh", "fr", "es", "en" ],
            DE: [ "en", "de" ],
            DJ: [ "zh", "es", "en", "fr" ],
            DK: [ "en", "da" ],
            DM: [ "zh", "es", "fr", "en" ],
            DO: [ "zh", "fr", "en", "es" ],
            DZ: [ "zh", "es", "fr", "en", "ar" ],
            EC: [ "zh", "fr", "en", "es" ],
            EE: [ "zh", "ru", "fr", "es", "en" ],
            EG: [ "zh", "es", "fr", "en", "ar" ],
            ER: [ "zh", "es", "fr", "en" ],
            ES: [ "es", "en" ],
            ET: [ "zh", "es", "fr", "en" ],
            FI: [ "zh", "fr", "es", "en" ],
            FJ: [ "zh", "es", "fr", "en" ],
            FK: [ "zh", "es", "fr", "en" ],
            FM: [ "en" ],
            FO: [ "zh", "es", "fr", "en", "da" ],
            FR: [ "fr", "en" ],
            GA: [ "zh", "es", "en", "fr" ],
            GB: [ "fr", "en" ],
            GD: [ "zh", "es", "fr", "en" ],
            GE: [ "zh", "es", "fr", "en" ],
            GF: [ "zh", "es", "fr", "en" ],
            GI: [ "zh", "es", "fr", "en" ],
            GL: [ "zh", "es", "fr", "en", "da" ],
            GM: [ "zh", "es", "fr", "en" ],
            GN: [ "zh", "es", "en", "fr" ],
            GP: [ "zh", "es", "fr", "en" ],
            GR: [ "zh", "fr", "es", "en" ],
            GT: [ "zh", "fr", "en", "es" ],
            GW: [ "zh", "es", "fr", "en" ],
            GY: [ "zh", "es", "fr", "en" ],
            HK: [ "zh", "en" ],
            HN: [ "zh", "fr", "en", "es" ],
            HR: [ "en" ],
            HU: [ "zh", "fr", "es", "en" ],
            ID: [ "id", "en" ],
            IE: [ "zh", "fr", "es", "en" ],
            IL: [ "he", "en" ],
            IN: [ "en" ],
            IS: [ "en" ],
            IT: [ "it", "en" ],
            JM: [ "zh", "fr", "en", "es" ],
            JO: [ "zh", "es", "fr", "en", "ar" ],
            JP: [ "ja", "en" ],
            KE: [ "zh", "es", "fr", "en" ],
            KG: [ "zh", "es", "fr", "en" ],
            KH: [ "en" ],
            KI: [ "zh", "es", "fr", "en" ],
            KM: [ "zh", "es", "en", "fr" ],
            KN: [ "zh", "es", "fr", "en" ],
            KR: [ "ko", "en" ],
            KW: [ "zh", "es", "fr", "en", "ar" ],
            KY: [ "zh", "es", "fr", "en" ],
            KZ: [ "zh", "es", "fr", "en" ],
            LA: [ "en" ],
            LC: [ "zh", "es", "fr", "en" ],
            LI: [ "zh", "es", "fr", "en" ],
            LK: [ "en" ],
            LS: [ "zh", "es", "fr", "en" ],
            LT: [ "zh", "ru", "fr", "es", "en" ],
            LU: [ "zh", "fr", "es", "en", "de" ],
            LV: [ "zh", "ru", "fr", "es", "en" ],
            MA: [ "zh", "es", "fr", "en", "ar" ],
            MC: [ "en", "fr" ],
            MD: [ "en" ],
            ME: [ "en" ],
            MG: [ "zh", "es", "fr", "en" ],
            MH: [ "zh", "es", "fr", "en" ],
            MK: [ "en" ],
            ML: [ "zh", "es", "en", "fr" ],
            MN: [ "en" ],
            MQ: [ "zh", "es", "fr", "en" ],
            MR: [ "zh", "es", "fr", "en" ],
            MS: [ "zh", "es", "fr", "en" ],
            MT: [ "en" ],
            MU: [ "zh", "es", "fr", "en" ],
            MV: [ "en" ],
            MW: [ "zh", "es", "fr", "en" ],
            MX: [ "es", "en" ],
            MY: [ "en" ],
            MZ: [ "zh", "es", "fr", "en" ],
            NA: [ "zh", "es", "fr", "en" ],
            NC: [ "zh", "es", "fr", "en" ],
            NE: [ "zh", "es", "en", "fr" ],
            NF: [ "zh", "es", "fr", "en" ],
            NG: [ "en" ],
            NI: [ "zh", "fr", "en", "es" ],
            NL: [ "nl", "en" ],
            NO: [ "no", "en" ],
            NP: [ "en" ],
            NR: [ "zh", "es", "fr", "en" ],
            NU: [ "zh", "es", "fr", "en" ],
            NZ: [ "zh", "fr", "es", "en" ],
            OM: [ "zh", "es", "fr", "en", "ar" ],
            PA: [ "zh", "fr", "en", "es" ],
            PE: [ "zh", "fr", "en", "es" ],
            PF: [ "zh", "es", "fr", "en" ],
            PG: [ "zh", "es", "fr", "en" ],
            PH: [ "en" ],
            PL: [ "pl", "en" ],
            PM: [ "zh", "es", "fr", "en" ],
            PN: [ "zh", "es", "fr", "en" ],
            PT: [ "pt", "en" ],
            PW: [ "zh", "es", "fr", "en" ],
            PY: [ "en", "es" ],
            QA: [ "ar", "zh", "es", "fr", "en" ],
            RE: [ "zh", "es", "fr", "en" ],
            RO: [ "zh", "fr", "es", "en" ],
            RS: [ "zh", "es", "fr", "en" ],
            RU: [ "ru", "en" ],
            RW: [ "zh", "es", "en", "fr" ],
            SA: [ "zh", "es", "fr", "en", "ar" ],
            SB: [ "zh", "es", "fr", "en" ],
            SC: [ "zh", "es", "en", "fr" ],
            SE: [ "sv", "en" ],
            SG: [ "en" ],
            SH: [ "zh", "es", "fr", "en" ],
            SI: [ "zh", "fr", "es", "en" ],
            SJ: [ "zh", "es", "fr", "en" ],
            SK: [ "zh", "fr", "es", "en" ],
            SL: [ "zh", "es", "fr", "en" ],
            SM: [ "zh", "es", "fr", "en" ],
            SN: [ "zh", "es", "en", "fr" ],
            SO: [ "zh", "es", "fr", "en" ],
            SR: [ "zh", "es", "fr", "en" ],
            ST: [ "zh", "es", "fr", "en" ],
            SV: [ "zh", "fr", "en", "es" ],
            SZ: [ "zh", "es", "fr", "en" ],
            TC: [ "zh", "es", "fr", "en" ],
            TD: [ "zh", "es", "en", "fr" ],
            TG: [ "zh", "es", "en", "fr" ],
            TH: [ "th", "en" ],
            TJ: [ "zh", "es", "fr", "en" ],
            TM: [ "zh", "es", "fr", "en" ],
            TN: [ "zh", "es", "fr", "en", "ar" ],
            TO: [ "en" ],
            TR: [ "tr", "en" ],
            TT: [ "zh", "es", "fr", "en" ],
            TV: [ "zh", "es", "fr", "en" ],
            TW: [ "zh", "en" ],
            TZ: [ "zh", "es", "fr", "en" ],
            UA: [ "zh", "ru", "fr", "es", "en" ],
            UG: [ "zh", "es", "fr", "en" ],
            US: [ "zh", "fr", "es", "en" ],
            UY: [ "zh", "fr", "en", "es" ],
            VA: [ "zh", "es", "fr", "en" ],
            VC: [ "zh", "es", "fr", "en" ],
            VE: [ "zh", "fr", "en", "es" ],
            VG: [ "zh", "es", "fr", "en" ],
            VN: [ "en" ],
            VU: [ "zh", "es", "fr", "en" ],
            WF: [ "zh", "es", "fr", "en" ],
            WS: [ "en" ],
            YE: [ "zh", "es", "fr", "en", "ar" ],
            YT: [ "zh", "es", "fr", "en" ],
            ZA: [ "zh", "es", "fr", "en" ],
            ZM: [ "zh", "es", "fr", "en" ],
            ZW: [ "en" ]
        }
    };
}, /*!*********************!*\
  !*** ./src/rest.js ***!
  \*********************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    exports.createAccessToken = createAccessToken;
    exports.createCheckoutToken = createCheckoutToken;
    exports.createBillingToken = createBillingToken;
    var _config = __webpack_require__(/*! ./config */ 63);
    var _lib = __webpack_require__(/*! ./lib */ 65);
    var _bridge = __webpack_require__(/*! ./bridge */ 79);
    function createAccessToken(env, clientID) {
        if (!_config.config.cors && !(0, _lib.isPayPalDomain)()) {
            return (0, _bridge.messageBridge)("createAccessToken", {
                clientID: clientID
            });
        }
        var basicAuth = window.btoa(clientID + ":");
        return (0, _lib.request)({
            method: "post",
            url: _config.config.authApiUrls[env],
            headers: {
                Authorization: "Basic " + basicAuth
            },
            body: {
                grant_type: "client_credentials"
            }
        }).then(function(res) {
            if (!res || !res.access_token) {
                throw new Error("Auth Api response error:\n\n" + JSON.stringify(res, 0, 4));
            }
            return res.access_token;
        });
    }
    function createCheckoutToken(env, clientID, paymentDetails) {
        if (!_config.config.cors && !(0, _lib.isPayPalDomain)()) {
            return (0, _bridge.messageBridge)("createCheckoutToken", {
                clientID: clientID,
                paymentDetails: paymentDetails
            });
        }
        paymentDetails = _extends({}, paymentDetails);
        paymentDetails.intent = paymentDetails.intent || "sale";
        paymentDetails.redirect_urls = paymentDetails.redirect_urls || {};
        paymentDetails.redirect_urls.return_url = paymentDetails.redirect_urls.return_url || window.location.protocol + "//" + window.location.host;
        paymentDetails.redirect_urls.cancel_url = paymentDetails.redirect_urls.cancel_url || window.location.protocol + "//" + window.location.host;
        paymentDetails.payer = paymentDetails.payer || {};
        paymentDetails.payer.payment_method = paymentDetails.payer.payment_method || "paypal";
        return createAccessToken(env, clientID).then(function(accessToken) {
            return (0, _lib.request)({
                method: "post",
                url: _config.config.paymentApiUrls[env],
                headers: {
                    Authorization: "Bearer " + accessToken
                },
                json: paymentDetails
            });
        }).then(function(res) {
            if (res && res.links && res.links.length) {
                var links = res.links;
                for (var i = 0, len = links.length; i < len; i++) {
                    if (links[i].method === "REDIRECT") {
                        var match = links[i].href.match(/token=((EC-)?[A-Z0-9]{17})/);
                        if (match) {
                            return match[1];
                        }
                        break;
                    }
                }
            }
            throw new Error("Payment Api response error:\n\n" + JSON.stringify(res, 0, 4));
        });
    }
    function createBillingToken(env, clientID, billingDetails) {
        if (!_config.config.cors && !(0, _lib.isPayPalDomain)()) {
            return (0, _bridge.messageBridge)("createBillingToken", {
                clientID: clientID,
                billingDetails: billingDetails
            });
        }
        billingDetails = _extends({}, billingDetails);
        billingDetails.plan = billingDetails.plan || {};
        billingDetails.plan.merchant_preferences = billingDetails.plan.merchant_preferences || {};
        billingDetails.plan.merchant_preferences.return_url = billingDetails.plan.merchant_preferences.return_url || window.location.protocol + "//" + window.location.host;
        billingDetails.plan.merchant_preferences.cancel_url = billingDetails.plan.merchant_preferences.cancel_url || window.location.protocol + "//" + window.location.host;
        billingDetails.payer = billingDetails.payer || {};
        billingDetails.payer.payment_method = billingDetails.payer.payment_method || "paypal";
        return createAccessToken(env, clientID).then(function(accessToken) {
            return (0, _lib.request)({
                method: "post",
                url: _config.config.billingApiUrls[env],
                headers: {
                    Authorization: "Bearer " + accessToken
                },
                json: billingDetails
            });
        }).then(function(res) {
            if (res && res.token_id) {
                return res.token_id;
            }
            throw new Error("Billing Api response error:\n\n" + JSON.stringify(res, 0, 4));
        });
    }
}, /*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _device = __webpack_require__(/*! ./device */ 66);
    Object.keys(_device).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _device[key];
            }
        });
    });
    var _util = __webpack_require__(/*! ./util */ 67);
    Object.keys(_util).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _util[key];
            }
        });
    });
    var _logger = __webpack_require__(/*! ./logger */ 68);
    Object.keys(_logger).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _logger[key];
            }
        });
    });
}, /*!***************************!*\
  !*** ./src/lib/device.js ***!
  \***************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getUserAgent = getUserAgent;
    exports.isDevice = isDevice;
    exports.isWebView = isWebView;
    exports.getAgent = getAgent;
    function getUserAgent() {
        return window.navigator.mockUserAgent || window.navigator.userAgent;
    }
    function isDevice() {
        var userAgent = getUserAgent();
        if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
            return true;
        }
        return false;
    }
    function isWebView() {
        var userAgent = getUserAgent();
        return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
    }
    function getAgent(agent) {
        var ua = getUserAgent();
        var tem = void 0;
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return [ "IE", tem[1] || "" ];
        }
        if (M[1] === "Chrome") {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem !== null) {
                return [ "Opera", tem[1] ];
            }
        }
        M = M[2] ? [ M[1], M[2] ] : [ window.navigator.appName, window.navigator.appVersion, "-?" ];
        if ((tem = ua.match(/version\/(\d+(\.\d{1,2}))/i)) !== null) {
            M.splice(1, 1, tem[1]);
        }
        return M;
    }
}, /*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.loadScript = loadScript;
    exports.extend = extend;
    exports.merge = merge;
    exports.request = request;
    exports.isPayPalDomain = isPayPalDomain;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    function loadScript(src, timeout) {
        return new _promise.SyncPromise(function(resolve, reject) {
            var script = document.createElement("script");
            script.onload = function() {
                resolve();
            };
            script.onreadystatechange = function() {
                if (this.readyState === "complete" || this.readyState === "loaded") {
                    resolve();
                }
            };
            var scriptLoadError = new Error("script_loading_error");
            script.onerror = function(event) {
                return reject(scriptLoadError);
            };
            if (timeout) {
                setTimeout(function() {
                    return reject(new Error("script_loading_timed_out"));
                }, timeout);
            }
            script.setAttribute("src", src);
            document.body.appendChild(script);
        });
    }
    function extend(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }
            }
        }
        return target;
    }
    function merge() {
        return extend.apply(undefined, [ {} ].concat(Array.prototype.slice.call(arguments)));
    }
    function request(config) {
        return new _promise.SyncPromise(function(resolve, reject) {
            config.method = config.method || "get";
            var headers = config.headers || {};
            if (config.json) {
                headers["Content-Type"] = headers["Content-Type"] || "application/json";
            } else if (config.body) {
                headers["Content-Type"] = headers["Content-Type"] || "application/x-www-form-urlencoded; charset=utf-8";
            }
            headers.Accept = headers.Accept || "application/json";
            var xhr = new window.XMLHttpRequest();
            xhr.addEventListener("load", function() {
                resolve(JSON.parse(this.responseText));
            }, false);
            xhr.addEventListener("error", function(evt) {
                reject(new Error("Request to " + config.method.toLowerCase() + " " + config.url + " failed: " + evt.toString()));
            }, false);
            xhr.open(config.method, config.url, true);
            if (headers) {
                for (var key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
            if (config.json && !config.body) {
                config.body = JSON.stringify(config.json);
            }
            if (config.body && _typeof(config.body) === "object") {
                config.body = Object.keys(config.body).map(function(key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(config.body[key]);
                }).join("&");
            }
            xhr.send(config.body);
        });
    }
    request.get = function(url) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var method = "get";
        return request(_extends({
            method: method,
            url: url
        }, options));
    };
    request.post = function(url, body) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var method = "post";
        return request(_extends({
            method: method,
            url: url,
            body: body
        }, options));
    };
    function isPayPalDomain() {
        return Boolean(window.location.hostname.match(/\.paypal\.com$/));
    }
}, /*!***************************!*\
  !*** ./src/lib/logger.js ***!
  \***************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initLogger = initLogger;
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _src = __webpack_require__(/*! xcomponent/src */ 5);
    var _src2 = _interopRequireDefault(_src);
    var _config = __webpack_require__(/*! ../config */ 63);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function initLogger() {
        _src2["default"].registerLogger(_client2["default"]);
        _client2["default"].addPayloadBuilder(function() {
            return {
                host: window.location.host,
                path: window.location.pathname,
                env: _config.config.env,
                country: _config.config.locale.country,
                lang: _config.config.locale.lang
            };
        });
        _client2["default"].addMetaBuilder(function() {
            return {
                state: _config.config.state
            };
        });
        _client2["default"].init({
            uri: _config.config.loggerUrl,
            heartbeat: false,
            logPerformance: false
        });
    }
}, /*!*****************************************!*\
  !*** ./~/beaver-logger/client/index.js ***!
  \*****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _logger = __webpack_require__(/*! ./logger */ 70);
    Object.keys(_logger).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _logger[key];
            }
        });
    });
    var _init = __webpack_require__(/*! ./init */ 76);
    Object.keys(_init).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _init[key];
            }
        });
    });
    var _transitions = __webpack_require__(/*! ./transitions */ 78);
    Object.keys(_transitions).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _transitions[key];
            }
        });
    });
    var _builders = __webpack_require__(/*! ./builders */ 74);
    Object.keys(_builders).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _builders[key];
            }
        });
    });
    exports["default"] = module.exports;
}, /*!******************************************!*\
  !*** ./~/beaver-logger/client/logger.js ***!
  \******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.flush = exports.tracking = exports.buffer = undefined;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.print = print;
    exports.immediateFlush = immediateFlush;
    exports.log = log;
    exports.debug = debug;
    exports.info = info;
    exports.warn = warn;
    exports.error = error;
    exports.track = track;
    var _util = __webpack_require__(/*! ./util */ 71);
    var _builders = __webpack_require__(/*! ./builders */ 74);
    var _config = __webpack_require__(/*! ./config */ 75);
    var buffer = exports.buffer = [];
    var tracking = exports.tracking = {};
    if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
        [ "log", "info", "warn", "error" ].forEach(function(method) {
            console[method] = this.bind(console[method], console);
        }, Function.prototype.call);
    }
    function print(level, event, payload) {
        if (!window.console || !window.console.log) {
            return;
        }
        payload = payload || {};
        var args = [ event ];
        args.push(payload);
        if (payload.error || payload.warning) {
            args.push("\n\n", payload.error || payload.warning);
        }
        if (window.console) {
            if (window.console[level] && window.console[level].apply) {
                window.console[level].apply(window.console, args);
            } else if (window.console.log && window.console.log.apply) {
                window.console.log.apply(window.console, args);
            }
        }
    }
    function immediateFlush() {
        var async = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
        if (!_config.config.uri) {
            return;
        }
        var hasBuffer = buffer.length;
        var hasTracking = Object.keys(tracking).length;
        if (!hasBuffer && !hasTracking) {
            return;
        }
        if (hasTracking) {
            print("info", "tracking", tracking);
        }
        var meta = {};
        for (var _iterator = _builders.metaBuilders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var builder = _ref;
            try {
                (0, _util.extend)(meta, builder(), false);
            } catch (err) {
                console.error("Error in custom meta builder:", err.stack || err.toString());
            }
        }
        for (var _iterator2 = _builders.trackingBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }
            var _builder = _ref2;
            try {
                (0, _util.extend)(tracking, _builder(), false);
            } catch (err) {
                console.error("Error in custom tracking builder:", err.stack || err.toString());
            }
        }
        var headers = {};
        for (var _iterator3 = _builders.headerBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
            var _ref3;
            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }
            var _builder2 = _ref3;
            try {
                (0, _util.extend)(headers, _builder2(), false);
            } catch (err) {
                console.error("Error in custom header builder:", err.stack || err.toString());
            }
        }
        var events = buffer;
        var req = (0, _util.ajax)("post", _config.config.uri, headers, {
            events: events,
            meta: meta,
            tracking: tracking
        }, async);
        exports.buffer = buffer = [];
        exports.tracking = tracking = {};
        return req;
    }
    var flush = exports.flush = (0, _util.promiseDebounce)(immediateFlush, _config.config.debounceInterval);
    function enqueue(level, event, payload) {
        buffer.push({
            level: level,
            event: event,
            payload: payload
        });
        if (_config.config.autoLog.indexOf(level) > -1) {
            flush();
        }
    }
    function log(level, event, payload) {
        payload = payload || {};
        if (typeof payload === "string") {
            payload = {
                message: payload
            };
        } else if (payload instanceof Error) {
            payload = {
                error: payload.stack || payload.toString()
            };
        }
        payload.timestamp = Date.now();
        for (var _iterator4 = _builders.payloadBuilders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
            var _ref4;
            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
            }
            var builder = _ref4;
            try {
                (0, _util.extend)(payload, builder(), false);
            } catch (err) {
                console.error("Error in custom payload builder:", err.stack || err.toString());
            }
        }
        print(level, event, payload);
        if (buffer.length === _config.config.sizeLimit) {
            enqueue("info", "logger_max_buffer_length");
        } else if (buffer.length < _config.config.sizeLimit) {
            enqueue(level, event, payload);
        }
    }
    function debug(event, payload) {
        return log("debug", event, payload);
    }
    function info(event, payload) {
        return log("info", event, payload);
    }
    function warn(event, payload) {
        return log("warn", event, payload);
    }
    function error(event, payload) {
        return log("error", event, payload);
    }
    function track(payload) {
        (0, _util.extend)(tracking, payload || {}, false);
    }
}, /*!****************************************!*\
  !*** ./~/beaver-logger/client/util.js ***!
  \****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.windowReady = undefined;
    exports.extend = extend;
    exports.isSameProtocol = isSameProtocol;
    exports.isSameDomain = isSameDomain;
    exports.ajax = ajax;
    exports.promiseDebounce = promiseDebounce;
    exports.safeInterval = safeInterval;
    exports.uniqueID = uniqueID;
    var _es6PromiseMin = __webpack_require__(/*! es6-promise-min */ 72);
    function extend(dest, src) {
        var over = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
        dest = dest || {};
        src = src || {};
        for (var i in src) {
            if (src.hasOwnProperty(i)) {
                if (over || !dest.hasOwnProperty(i)) {
                    dest[i] = src[i];
                }
            }
        }
        return dest;
    }
    function isSameProtocol(url) {
        return window.location.protocol === url.split("/")[0];
    }
    function isSameDomain(url) {
        var match = url.match(/https?:\/\/[^\/]+/);
        if (!match) {
            return true;
        }
        return match[0] === window.location.protocol + "//" + window.location.host;
    }
    function ajax(method, url) {
        var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
        var async = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];
        return new _es6PromiseMin.Promise(function(resolve) {
            var XRequest = window.XMLHttpRequest || window.ActiveXObject;
            if (window.XDomainRequest && !isSameDomain(url)) {
                if (!isSameProtocol(url)) {
                    return resolve();
                }
                XRequest = window.XDomainRequest;
            }
            var req = new XRequest("MSXML2.XMLHTTP.3.0");
            req.open(method.toUpperCase(), url, async);
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/json");
            for (var headerName in headers) {
                if (headers.hasOwnProperty(headerName)) {
                    req.setRequestHeader(headerName, headers[headerName]);
                }
            }
            req.onreadystatechange = function() {
                if (req.readyState > 3) {
                    resolve();
                }
            };
            req.send(JSON.stringify(data).replace(/&/g, "%26"));
        });
    }
    function promiseDebounce(method, interval) {
        var debounce = {};
        return function() {
            var args = arguments;
            if (debounce.timeout) {
                clearTimeout(debounce.timeout);
                delete debounce.timeout;
            }
            debounce.timeout = setTimeout(function() {
                var resolver = debounce.resolver;
                var rejector = debounce.rejector;
                delete debounce.promise;
                delete debounce.resolver;
                delete debounce.rejector;
                delete debounce.timeout;
                return _es6PromiseMin.Promise.resolve().then(function() {
                    return method.apply(null, args);
                }).then(resolver, rejector);
            }, interval);
            debounce.promise = debounce.promise || new _es6PromiseMin.Promise(function(resolver, rejector) {
                debounce.resolver = resolver;
                debounce.rejector = rejector;
            });
            return debounce.promise;
        };
    }
    var windowReady = exports.windowReady = new _es6PromiseMin.Promise(function(resolve) {
        if (document.readyState === "complete") {
            resolve();
        }
        window.addEventListener("load", resolve);
    });
    function safeInterval(method, time) {
        var timeout = void 0;
        function loop() {
            timeout = setTimeout(function() {
                method();
                loop();
            }, time);
        }
        loop();
        return {
            cancel: function cancel() {
                clearTimeout(timeout);
            }
        };
    }
    function uniqueID() {
        var chars = "0123456789abcdef";
        return "xxxxxxxxxx".replace(/./g, function() {
            return chars.charAt(Math.floor(Math.random() * chars.length));
        });
    }
}, /*!***************************************************!*\
  !*** ./~/es6-promise-min/dist/es6-promise.min.js ***!
  \***************************************************/
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function(process, global) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
        };
        /*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.0.1
	 */
        (function() {
            function r(a, b) {
                n[l] = a;
                n[l + 1] = b;
                l += 2;
                2 === l && A();
            }
            function s(a) {
                return "function" === typeof a;
            }
            function F() {
                return function() {
                    process.nextTick(t);
                };
            }
            function G() {
                var a = 0, b = new B(t), c = document.createTextNode("");
                b.observe(c, {
                    characterData: !0
                });
                return function() {
                    c.data = a = ++a % 2;
                };
            }
            function H() {
                var a = new MessageChannel();
                a.port1.onmessage = t;
                return function() {
                    a.port2.postMessage(0);
                };
            }
            function I() {
                return function() {
                    setTimeout(t, 1);
                };
            }
            function t() {
                for (var a = 0; a < l; a += 2) {
                    (0, n[a])(n[a + 1]), n[a] = void 0, n[a + 1] = void 0;
                }
                l = 0;
            }
            function p() {}
            function J(a, b, c, d) {
                try {
                    a.call(b, c, d);
                } catch (e) {
                    return e;
                }
            }
            function K(a, b, c) {
                r(function(a) {
                    var e = !1, f = J(c, b, function(c) {
                        e || (e = !0, b !== c ? q(a, c) : m(a, c));
                    }, function(b) {
                        e || (e = !0, g(a, b));
                    });
                    !e && f && (e = !0, g(a, f));
                }, a);
            }
            function L(a, b) {
                1 === b.a ? m(a, b.b) : 2 === a.a ? g(a, b.b) : u(b, void 0, function(b) {
                    q(a, b);
                }, function(b) {
                    g(a, b);
                });
            }
            function q(a, b) {
                if (a === b) g(a, new TypeError("You cannot resolve a promise with itself")); else if ("function" === typeof b || "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
                    if (b.constructor === a.constructor) L(a, b); else {
                        var c;
                        try {
                            c = b.then;
                        } catch (d) {
                            v.error = d, c = v;
                        }
                        c === v ? g(a, v.error) : void 0 === c ? m(a, b) : s(c) ? K(a, b, c) : m(a, b);
                    }
                } else m(a, b);
            }
            function M(a) {
                a.f && a.f(a.b);
                x(a);
            }
            function m(a, b) {
                void 0 === a.a && (a.b = b, a.a = 1, 0 !== a.e.length && r(x, a));
            }
            function g(a, b) {
                void 0 === a.a && (a.a = 2, a.b = b, r(M, a));
            }
            function u(a, b, c, d) {
                var e = a.e, f = e.length;
                a.f = null;
                e[f] = b;
                e[f + 1] = c;
                e[f + 2] = d;
                0 === f && a.a && r(x, a);
            }
            function x(a) {
                var b = a.e, c = a.a;
                if (0 !== b.length) {
                    for (var d, e, f = a.b, g = 0; g < b.length; g += 3) {
                        d = b[g], e = b[g + c], d ? C(c, d, e, f) : e(f);
                    }
                    a.e.length = 0;
                }
            }
            function D() {
                this.error = null;
            }
            function C(a, b, c, d) {
                var e = s(c), f, k, h, l;
                if (e) {
                    try {
                        f = c(d);
                    } catch (n) {
                        y.error = n, f = y;
                    }
                    f === y ? (l = !0, k = f.error, f = null) : h = !0;
                    if (b === f) {
                        g(b, new TypeError("A promises callback cannot return that same promise."));
                        return;
                    }
                } else f = d, h = !0;
                void 0 === b.a && (e && h ? q(b, f) : l ? g(b, k) : 1 === a ? m(b, f) : 2 === a && g(b, f));
            }
            function N(a, b) {
                try {
                    b(function(b) {
                        q(a, b);
                    }, function(b) {
                        g(a, b);
                    });
                } catch (c) {
                    g(a, c);
                }
            }
            function k(a, b, c, d) {
                this.n = a;
                this.c = new a(p, d);
                this.i = c;
                this.o(b) ? (this.m = b, this.d = this.length = b.length, this.l(), 0 === this.length ? m(this.c, this.b) : (this.length = this.length || 0, 
                this.k(), 0 === this.d && m(this.c, this.b))) : g(this.c, this.p());
            }
            function h(a) {
                O++;
                this.b = this.a = void 0;
                this.e = [];
                if (p !== a) {
                    if (!s(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                    if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    N(this, a);
                }
            }
            var E = Array.isArray ? Array.isArray : function(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            }, l = 0, w = "undefined" !== typeof window ? window : {}, B = w.MutationObserver || w.WebKitMutationObserver, w = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel, n = Array(1e3), A;
            A = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? F() : B ? G() : w ? H() : I();
            var v = new D(), y = new D();
            k.prototype.o = function(a) {
                return E(a);
            };
            k.prototype.p = function() {
                return Error("Array Methods must be provided an Array");
            };
            k.prototype.l = function() {
                this.b = Array(this.length);
            };
            k.prototype.k = function() {
                for (var a = this.length, b = this.c, c = this.m, d = 0; void 0 === b.a && d < a; d++) {
                    this.j(c[d], d);
                }
            };
            k.prototype.j = function(a, b) {
                var c = this.n;
                "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a ? a.constructor === c && void 0 !== a.a ? (a.f = null, 
                this.g(a.a, b, a.b)) : this.q(c.resolve(a), b) : (this.d--, this.b[b] = this.h(a));
            };
            k.prototype.g = function(a, b, c) {
                var d = this.c;
                void 0 === d.a && (this.d--, this.i && 2 === a ? g(d, c) : this.b[b] = this.h(c));
                0 === this.d && m(d, this.b);
            };
            k.prototype.h = function(a) {
                return a;
            };
            k.prototype.q = function(a, b) {
                var c = this;
                u(a, void 0, function(a) {
                    c.g(1, b, a);
                }, function(a) {
                    c.g(2, b, a);
                });
            };
            var O = 0;
            h.all = function(a, b) {
                return new k(this, a, (!0), b).c;
            };
            h.race = function(a, b) {
                function c(a) {
                    q(e, a);
                }
                function d(a) {
                    g(e, a);
                }
                var e = new this(p, b);
                if (!E(a)) return g(e, new TypeError("You must pass an array to race.")), e;
                for (var f = a.length, h = 0; void 0 === e.a && h < f; h++) {
                    u(this.resolve(a[h]), void 0, c, d);
                }
                return e;
            };
            h.resolve = function(a, b) {
                if (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this) return a;
                var c = new this(p, b);
                q(c, a);
                return c;
            };
            h.reject = function(a, b) {
                var c = new this(p, b);
                g(c, a);
                return c;
            };
            h.prototype = {
                constructor: h,
                then: function then(a, b) {
                    var c = this.a;
                    if (1 === c && !a || 2 === c && !b) return this;
                    var d = new this.constructor(p), e = this.b;
                    if (c) {
                        var f = arguments[c - 1];
                        r(function() {
                            C(c, d, f, e);
                        });
                    } else u(this, d, a, b);
                    return d;
                },
                "catch": function _catch(a) {
                    return this.then(null, a);
                }
            };
            var z = {
                Promise: h,
                polyfill: function polyfill() {
                    var a;
                    a = "undefined" !== typeof global ? global : "undefined" !== typeof window && window.document ? window : self;
                    "Promise" in a && "resolve" in a.Promise && "reject" in a.Promise && "all" in a.Promise && "race" in a.Promise && function() {
                        var b;
                        new a.Promise(function(a) {
                            b = a;
                        });
                        return s(b);
                    }() || (a.Promise = h);
                }
            };
            true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return z;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = z : "undefined" !== typeof this && (this.ES6Promise = z);
        }).call(undefined);
    }).call(exports, __webpack_require__(/*! ./~/process/browser.js */ 73), function() {
        return this;
    }());
}, /*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
function(module, exports) {
    "use strict";
    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    (function() {
        try {
            if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }
    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    process.title = "browser";
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = "";
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.binding = function(name) {
        throw new Error("process.binding is not supported");
    };
    process.cwd = function() {
        return "/";
    };
    process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    };
    process.umask = function() {
        return 0;
    };
}, /*!********************************************!*\
  !*** ./~/beaver-logger/client/builders.js ***!
  \********************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.addPayloadBuilder = addPayloadBuilder;
    exports.addMetaBuilder = addMetaBuilder;
    exports.addTrackingBuilder = addTrackingBuilder;
    exports.addHeaderBuilder = addHeaderBuilder;
    var payloadBuilders = exports.payloadBuilders = [];
    var metaBuilders = exports.metaBuilders = [];
    var trackingBuilders = exports.trackingBuilders = [];
    var headerBuilders = exports.headerBuilders = [];
    function addPayloadBuilder(builder) {
        payloadBuilders.push(builder);
    }
    function addMetaBuilder(builder) {
        metaBuilders.push(builder);
    }
    function addTrackingBuilder(builder) {
        trackingBuilders.push(builder);
    }
    function addHeaderBuilder(builder) {
        headerBuilders.push(builder);
    }
}, /*!******************************************!*\
  !*** ./~/beaver-logger/client/config.js ***!
  \******************************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var config = exports.config = {
        uri: "",
        initial_state_name: "init",
        flushInterval: 10 * 60 * 1e3,
        debounceInterval: 10,
        sizeLimit: 300,
        heartbeat: true,
        heartbeatConsoleLog: true,
        heartbeatInterval: 5e3,
        hearbeatMaxThreshold: 50,
        heartbeatTooBusyThreshold: 1e4,
        autoLog: [ "warn", "error" ],
        logUnload: true,
        logUnloadSync: false,
        logPerformance: true
    };
}, /*!****************************************!*\
  !*** ./~/beaver-logger/client/init.js ***!
  \****************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.init = init;
    var _config = __webpack_require__(/*! ./config */ 75);
    var _util = __webpack_require__(/*! ./util */ 71);
    var _performance = __webpack_require__(/*! ./performance */ 77);
    var _logger = __webpack_require__(/*! ./logger */ 70);
    var initiated = false;
    function init(conf) {
        (0, _util.extend)(_config.config, conf || {});
        if (initiated) {
            return;
        }
        initiated = true;
        if (_config.config.logPerformance) {
            (0, _performance.initPerformance)();
        }
        if (_config.config.heartbeat) {
            (0, _performance.initHeartBeat)();
        }
        if (_config.config.logUnload) {
            (function() {
                var async = !_config.config.logUnloadSync;
                window.addEventListener("beforeunload", function() {
                    (0, _logger.info)("window_beforeunload");
                    (0, _logger.immediateFlush)(async);
                });
                window.addEventListener("unload", function() {
                    (0, _logger.info)("window_unload");
                    (0, _logger.immediateFlush)(async);
                });
            })();
        }
        if (_config.config.flushInterval) {
            setInterval(_logger.flush, _config.config.flushInterval);
        }
        if (window.beaverLogQueue) {
            window.beaverLogQueue.forEach(function(payload) {
                (0, _logger.log)(payload.level, payload.event, payload);
            });
            delete window.beaverLogQueue;
        }
    }
}, /*!***********************************************!*\
  !*** ./~/beaver-logger/client/performance.js ***!
  \***********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reqTimer = exports.clientTimer = undefined;
    exports.now = now;
    exports.reqStartElapsed = reqStartElapsed;
    exports.initHeartBeat = initHeartBeat;
    exports.initPerformance = initPerformance;
    var _config = __webpack_require__(/*! ./config */ 75);
    var _logger = __webpack_require__(/*! ./logger */ 70);
    var _builders = __webpack_require__(/*! ./builders */ 74);
    var _util = __webpack_require__(/*! ./util */ 71);
    var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;
    function now() {
        if (enablePerformance) {
            return performance.now();
        } else {
            return Date.now();
        }
    }
    function timer(startTime) {
        startTime = startTime !== undefined ? startTime : now();
        return {
            startTime: startTime,
            elapsed: function elapsed() {
                return parseInt(now() - startTime, 10);
            },
            reset: function reset() {
                startTime = now();
            }
        };
    }
    function reqStartElapsed() {
        if (enablePerformance) {
            var timing = window.performance.timing;
            return parseInt(timing.connectEnd - timing.navigationStart, 10);
        }
    }
    var clientTimer = exports.clientTimer = timer();
    var reqTimer = exports.reqTimer = timer(reqStartElapsed());
    function initHeartBeat() {
        var heartBeatTimer = timer();
        var heartbeatCount = 0;
        (0, _util.safeInterval)(function() {
            if (!_logger.buffer.length || _logger.buffer[_logger.buffer.length - 1].event !== "heartbeat") {
                heartbeatCount = 0;
            }
            if (!_logger.buffer.length || heartbeatCount > _config.config.hearbeatMaxThreshold) {
                return;
            }
            heartbeatCount += 1;
            var elapsed = heartBeatTimer.elapsed();
            var lag = elapsed - _config.config.heartbeatInterval;
            if (lag >= _config.config.heartbeatTooBusyThreshold) {
                (0, _logger.info)("toobusy", {
                    count: heartbeatCount,
                    elapsed: elapsed,
                    lag: lag
                }, {
                    noConsole: !_config.config.heartbeatConsoleLog
                });
            }
            (0, _logger.info)("heartbeat", {
                count: heartbeatCount,
                elapsed: elapsed,
                lag: lag
            }, {
                noConsole: !_config.config.heartbeatConsoleLog
            });
        }, _config.config.heartbeatInterval);
    }
    function initPerformance() {
        if (!enablePerformance) {
            return (0, _logger.info)("no_performance_data");
        }
        (0, _builders.addPayloadBuilder)(function() {
            var payload = {};
            payload.client_elapsed = clientTimer.elapsed();
            if (enablePerformance) {
                payload.req_elapsed = reqTimer.elapsed();
            }
            return payload;
        });
        _util.windowReady.then(function() {
            var keys = [ "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart" ];
            var timing = {};
            keys.forEach(function(key) {
                timing[key] = parseInt(window.performance.timing[key], 10) || 0;
            });
            var offset = timing.connectEnd - timing.navigationStart;
            if (timing.connectEnd) {
                Object.keys(timing).forEach(function(name) {
                    var time = timing[name];
                    if (time) {
                        (0, _logger.info)("timing_" + name, {
                            client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                            req_elapsed: parseInt(time - timing.connectEnd, 10)
                        });
                    }
                });
            }
            (0, _logger.info)("timing", timing);
            (0, _logger.info)("memory", window.performance.memory);
            (0, _logger.info)("navigation", window.performance.navigation);
            if (window.performance.getEntries) {
                window.performance.getEntries().forEach(function(resource) {
                    if ([ "link", "script", "img", "css" ].indexOf(resource.initiatorType) > -1) {
                        (0, _logger.info)(resource.initiatorType, resource);
                    }
                });
            }
        });
    }
}, /*!***********************************************!*\
  !*** ./~/beaver-logger/client/transitions.js ***!
  \***********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.startTransition = startTransition;
    exports.endTransition = endTransition;
    exports.transition = transition;
    var _performance = __webpack_require__(/*! ./performance */ 77);
    var _logger = __webpack_require__(/*! ./logger */ 70);
    var _builders = __webpack_require__(/*! ./builders */ 74);
    var _util = __webpack_require__(/*! ./util */ 71);
    var _config = __webpack_require__(/*! ./config */ 75);
    var windowID = (0, _util.uniqueID)();
    var pageID = (0, _util.uniqueID)();
    var currentState = _config.config.initial_state_name;
    var startTime = void 0;
    function startTransition() {
        startTime = (0, _performance.now)();
    }
    function endTransition(toState) {
        startTime = startTime || (0, _performance.reqStartElapsed)();
        var currentTime = (0, _performance.now)();
        var elapsedTime = void 0;
        if (startTime !== undefined) {
            elapsedTime = parseInt(currentTime - startTime, 0);
        }
        var transitionName = "transition_" + currentState + "_to_" + toState;
        (0, _logger.info)(transitionName, {
            duration: elapsedTime
        });
        (0, _logger.track)({
            transition: transitionName,
            transition_time: elapsedTime
        });
        (0, _logger.immediateFlush)();
        startTime = currentTime;
        currentState = toState;
        pageID = (0, _util.uniqueID)();
    }
    function transition(toState) {
        startTransition();
        endTransition(toState);
    }
    (0, _builders.addPayloadBuilder)(function() {
        return {
            windowID: windowID,
            pageID: pageID
        };
    });
    (0, _builders.addMetaBuilder)(function() {
        return {
            state: "ui_" + currentState
        };
    });
}, /*!***********************!*\
  !*** ./src/bridge.js ***!
  \***********************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.bridge = undefined;
    exports.setupBridge = setupBridge;
    exports.messageBridge = messageBridge;
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _components = __webpack_require__(/*! ./components */ 2);
    var _config = __webpack_require__(/*! ./config */ 63);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    var bridge = exports.bridge = new _promise.SyncPromise();
    _src2["default"].on("meta", function(_ref) {
        var source = _ref.source;
        var data = _ref.data;
        if (data.iframeEligible) {
            _components.Checkout.contexts.lightbox = true;
        }
        _client2["default"].info(data.iframeEligible ? "paypal_lightbox_eligible_" + data.iframeEligibleReason : "paypal_lightbox_ineligible_" + data.iframeEligibleReason);
        if (_config.config.locales[data.locale.country] && !_config.config.customCountry) {
            _config.config.locale.country = data.locale.country;
            if (_config.config.locales[data.locale.country].indexOf(data.locale.lang) !== -1) {
                _config.config.locale.lang = data.locale.lang;
            } else {
                _config.config.locale.lang = _config.config.locales[data.locale.country][0];
            }
        }
    });
    function setupBridge(env, bridgeUrl) {
        if (!_src2["default"].bridgeRequired(bridgeUrl)) {
            return _client2["default"].debug("paypal_bridge_not_required", {
                env: env
            });
        }
        _client2["default"].debug("paypal_setup_bridge", {
            env: env
        });
        var openBridge = _src2["default"].openBridge(bridgeUrl);
        openBridge.then(function(win) {
            bridge.resolve(win);
        }, function(err) {
            bridge.reject(err);
        });
        return openBridge;
    }
    function messageBridge(name) {
        var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        return bridge.then(function(bridgeWindow) {
            return _src2["default"].send(bridgeWindow, name, data);
        });
    }
}, /*!******************************************!*\
  !*** ./src/components/checkout/index.js ***!
  \******************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _component = __webpack_require__(/*! ./component */ 81);
    Object.keys(_component).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function get() {
                return _component[key];
            }
        });
    });
}, /*!**********************************************!*\
  !*** ./src/components/checkout/component.js ***!
  \**********************************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.PayPalCheckout = exports.Checkout = undefined;
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _src = __webpack_require__(/*! xcomponent/src */ 5);
    var _src2 = _interopRequireDefault(_src);
    var _parentTemplate = __webpack_require__(/*! ./parentTemplate.htm */ 82);
    var _parentTemplate2 = _interopRequireDefault(_parentTemplate);
    var _componentTemplate = __webpack_require__(/*! ./componentTemplate.htm */ 83);
    var _componentTemplate2 = _interopRequireDefault(_componentTemplate);
    var _lib = __webpack_require__(/*! ../../lib */ 65);
    var _config = __webpack_require__(/*! ../../config */ 63);
    var _common = __webpack_require__(/*! ../common */ 84);
    var _rest = __webpack_require__(/*! ../../rest */ 64);
    var _content = __webpack_require__(/*! ./content */ 85);
    var _content2 = _interopRequireDefault(_content);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    var content = JSON.parse(_content2["default"]);
    var Checkout = exports.Checkout = _src2["default"].create({
        tag: "paypal-checkout",
        name: "ppcheckout",
        buildUrl: function buildUrl(instance) {
            var env = instance.props.env || _config.config.env;
            if (instance.props.paymentToken || instance.props.paymentDetails) {
                return _config.config.checkoutUrls[env];
            }
            if (instance.props.billingToken || instance.props.billingDetails) {
                return _config.config.billingUrls[env];
            }
        },
        bridgeUrls: _config.config.bridgeUrls,
        contexts: {
            iframe: false,
            lightbox: false,
            popup: true
        },
        get version() {
            return _config.config.ppobjects ? "4.0.12" : "4.0.12";
        },
        validateProps: function validateProps(component, props) {
            var required = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
            if (required) {
                return (0, _common.validateProps)(props);
            }
        },
        get componentTemplate() {
            return _componentTemplate2["default"];
        },
        get parentTemplate() {
            var template = _parentTemplate2["default"];
            var localeContent = content[_config.config.locale.country][_config.config.locale.lang];
            template = template.replace("#windowMessage", localeContent.windowMessage);
            template = template.replace("#continue", localeContent["continue"]);
            return template;
        },
        props: {
            env: {
                type: "string",
                required: false,
                def: function def() {
                    return _config.config.env;
                }
            },
            stage: {
                type: "string",
                required: false,
                def: function def() {
                    return _config.config.stage;
                }
            },
            clientID: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            paymentToken: {
                type: "string",
                required: false,
                getter: true,
                queryParam: "token",
                def: function def(props) {
                    if (props.billingToken || props.billingDetails) {
                        return;
                    }
                    return function() {
                        var env = props.env || _config.config.env;
                        return (0, _rest.createCheckoutToken)(env, this.props.clientID[env], this.props.paymentDetails);
                    };
                }
            },
            paymentDetails: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            billingToken: {
                type: "string",
                required: false,
                getter: true,
                queryParam: "ba_token",
                def: function def(props) {
                    if (props.paymentToken || props.paymentDetails) {
                        return;
                    }
                    return function() {
                        var env = props.env || _config.config.env;
                        return (0, _rest.createBillingToken)(env, this.props.clientID[env], this.props.billingDetails);
                    };
                }
            },
            billingDetails: {
                type: "object",
                required: false,
                sendToChild: false,
                queryParam: false
            },
            autoExecute: {
                type: "boolean",
                required: false,
                sendToChild: true
            },
            onPaymentAuthorize: {
                type: "function",
                required: false,
                once: true,
                autoClose: true,
                decorate: function decorate(original) {
                    if (original) {
                        return function(data) {
                            Checkout.contexts.lightbox = true;
                            try {
                                var currentDomain = (window.location.protocol + "//" + window.location.host).toLowerCase();
                                var returnUrl = data.returnUrl.toLowerCase();
                                if (returnUrl.indexOf(currentDomain) === 0) {
                                    _client2["default"].info("return_url_domain_match");
                                } else {
                                    _client2["default"].info("return_url_domain_mismatch", {
                                        returnUrl: data.returnUrl,
                                        currentDomain: currentDomain
                                    });
                                }
                                var currentHost = currentDomain.replace(/^https?/, "");
                                var returnHost = returnUrl.replace(/^https?/, "");
                                if (returnHost.indexOf(currentHost) === 0) {
                                    _client2["default"].info("return_url_host_match");
                                } else {
                                    _client2["default"].info("return_url_host_mismatch", {
                                        returnUrl: data.returnUrl,
                                        currentDomain: currentDomain
                                    });
                                }
                                var currentTLD = currentHost.replace(/^www\./, "");
                                var returnTLD = returnHost.replace(/^www\./, "");
                                if (returnTLD.indexOf(currentTLD) === 0) {
                                    _client2["default"].info("return_url_tld_match");
                                } else {
                                    _client2["default"].info("return_url_tld_mismatch", {
                                        returnUrl: data.returnUrl,
                                        currentDomain: currentDomain
                                    });
                                }
                            } catch (err) {}
                            return original.apply(this, arguments);
                        };
                    }
                }
            },
            onPaymentComplete: {
                type: "function",
                required: false,
                once: true,
                autoClose: true,
                decorate: function decorate(original) {
                    if (original) {
                        return function() {
                            Checkout.contexts.lightbox = true;
                            return original.apply(this, arguments);
                        };
                    }
                }
            },
            onPaymentCancel: {
                type: "function",
                required: false,
                once: true,
                autoClose: true
            },
            init: {
                type: "function",
                required: false,
                once: true,
                def: function def() {
                    return function(data) {
                        this.paymentToken = data.paymentToken;
                        this.cancelUrl = data.cancelUrl;
                        try {
                            var currentDomain = (window.location.protocol + "//" + window.location.host).toLowerCase();
                            var cancelUrl = data.cancelUrl.toLowerCase();
                            if (currentDomain === "https://www.paypal.com") {
                                return;
                            }
                            if (cancelUrl.indexOf(currentDomain) === 0) {
                                _client2["default"].info("cancel_url_domain_match");
                            } else {
                                _client2["default"].info("cancel_url_domain_mismatch", {
                                    cancelUrl: data.cancelUrl,
                                    currentDomain: currentDomain
                                });
                            }
                            var currentHost = currentDomain.replace(/^https?/, "");
                            var cancelHost = cancelUrl.replace(/^https?/, "");
                            if (cancelHost.indexOf(currentHost) === 0) {
                                _client2["default"].info("cancel_url_host_match");
                            } else {
                                _client2["default"].info("cancel_url_host_mismatch", {
                                    cancelUrl: data.cancelUrl,
                                    currentDomain: currentDomain
                                });
                            }
                            var currentTLD = currentHost.replace(/^www\./, "");
                            var cancelTLD = cancelHost.replace(/^www\./, "");
                            if (cancelTLD.indexOf(currentTLD) === 0) {
                                _client2["default"].info("cancel_url_tld_match");
                            } else {
                                _client2["default"].info("cancel_url_tld_mismatch", {
                                    cancelUrl: data.cancelUrl,
                                    currentDomain: currentDomain
                                });
                            }
                        } catch (err) {}
                        if (window.ppCheckpoint) {
                            window.ppCheckpoint("flow_initial_message");
                        }
                    };
                }
            },
            onClose: {
                type: "function",
                required: false,
                memoize: true,
                promisify: true,
                def: function def() {
                    return function(reason) {
                        var CLOSE_REASONS = _src2["default"].CONSTANTS.CLOSE_REASONS;
                        if (this.props.onPaymentCancel && this.paymentToken && this.cancelUrl && [ CLOSE_REASONS.CLOSE_DETECTED, CLOSE_REASONS.USER_CLOSED ].indexOf(reason) !== -1) {
                            return this.props.onPaymentCancel({
                                paymentToken: this.paymentToken,
                                cancelUrl: this.cancelUrl
                            });
                        }
                    };
                }
            },
            fallback: {
                type: "function",
                required: false,
                once: true,
                def: function def() {
                    return function(url) {
                        if (window.onLegacyPaymentAuthorize) {
                            window.onLegacyPaymentAuthorize(this.props.onPaymentAuthorize);
                        } else {
                            window.location = url;
                        }
                    };
                }
            }
        },
        autoResize: true,
        closeDelay: 1e3,
        resizeDelay: 700,
        get dimensions() {
            if ((0, _lib.isDevice)()) {
                return;
            }
            if (this.contexts.lightbox) {
                return {
                    width: 450,
                    height: 300
                };
            }
            return {
                width: 450,
                height: 535
            };
        }
    });
    var PayPalCheckout = exports.PayPalCheckout = Checkout;
}, /*!****************************************************!*\
  !*** ./src/components/checkout/parentTemplate.htm ***!
  \****************************************************/
function(module, exports) {
    module.exports = '\n<div class="paypal-checkout-overlay {CLASS.FOCUS}">\n    <a href="#{CLASS.CLOSE}" class="{CLASS.CLOSE}"></a>\n    <div class="paypal-checkout-modal">\n        <div class="paypal-checkout-logo"></div>\n        <div class="paypal-checkout-message" >\n            #windowMessage\n        </div>\n        <div class="paypal-checkout-continue">\n            <a href="#{CLASS.FOCUS}" class="{CLASS.FOCUS}">#continue</a>\n        </div>\n        <div class="paypal-checkout-loading">\n            <div class="paypal-spinner"></div>\n        </div>\n    </div>\n\n    <div class="{CLASS.ELEMENT} paypal-checkout-lightbox-wrapper"></div>\n</div>\n\n<style>\n\n    #{id}.{CLASS.POPUP}, #{id}.{CLASS.LIGHTBOX} {\n        position: fixed;\n        z-index: 2147483647;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    #{id} .paypal-checkout-overlay {\n\n        position: absolute;\n\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n\n        background-color: black;\n\n        background-color: rgba(0, 0, 0, 0.8);\n\n        background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n        background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n        background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n        background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n        -webkit-animation-duration: 0.5s;\n        animation-duration: 0.5s;\n        -webkit-animation-name: fadeIn;\n        animation-name: fadeIn;\n\n        -webkit-transform: translate3d(0, 0, 0);\n        -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n        -o-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n    }\n\n    #{id}.{CLASS.POPUP} .paypal-checkout-overlay {\n        cursor: pointer;\n    }\n\n    #{id}.{CLASS.CLOSING}.{CLASS.AUTOCLOSE} .paypal-checkout-overlay {\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-name: fadeOut;\n        animation-name: fadeOut;\n\n        animation-fill-mode:forwards;\n        animation-iteration-count: 1;\n\n        -webkit-animation-fill-mode:forwards;\n        -webkit-animation-iteration-count: 1;\n    }\n\n    #{id}.{CLASS.POPUP} .paypal-checkout-overlay {\n        cursor: pointer;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal {\n        font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n        font-size: 14px;\n        text-align: center;\n        color: #fff;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 350px;\n        top: 50%;\n        left: 50%;\n        position: fixed;\n        margin-left: -165px;\n        margin-top: -80px;\n        cursor: pointer;\n        text-align: center;\n    }\n\n    #{id}.{CLASS.CLOSING} .paypal-checkout-message, #{id}.{CLASS.CLOSING} .paypal-checkout-continue {\n        display: none;\n    }\n\n    .paypal-checkout-loading {\n        display: none;\n    }\n\n    #{id}.{CLASS.CLOSING} .paypal-checkout-loading {\n        display: block;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {\n        background: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite.png") no-repeat -18px -16px;\n        width: 132px;\n        height: 36px;\n        cursor: pointer;\n        margin-bottom: 30px;\n        display: inline-block;\n    }\n\n    @media only screen and (-webkit-min-device-pixel-ratio: 2), not all, not all, only screen and (min-resolution: 2dppx), only screen and (min-resolution: 192dpi) {\n        #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {\n            background-image: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite_2x.png");\n            background-size: 200px 200px;\n        }\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-message {\n        font-size: 15px;\n        line-height: 1.5;\n        padding: 10px 0;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .paypal-checkout-message, #{id}.{CLASS.LIGHTBOX} .paypal-checkout-continue {\n        display: none;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.max-width.max-height .{CLASS.CLOSE} {\n        display: none;\n    }\n\n    #{id} .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-continue {\n        font-size: 15px;\n        line-height: 1.35;\n        padding: 10px 0;\n        text-decoration: underline;\n        font-weight: bold;\n    }\n\n    #{id} .{CLASS.CLOSE} {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n    }\n\n    #{id}.{CLASS.CLOSING} .{CLASS.CLOSE} {\n        display: none;\n    }\n\n    #{id} .{CLASS.CLOSE}:hover {\n        opacity: 1;\n    }\n\n    #{id} .{CLASS.CLOSE}:before, .{CLASS.CLOSE}:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 16px;\n        width: 2px;\n        background-color: white;\n    }\n\n    #{id} .{CLASS.CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #{id} .{CLASS.CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n\n    #{id} a {\n        color: white;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.set-width.set-height .paypal-checkout-lightbox-wrapper {\n        overflow: hidden;\n        border-radius: 10px;\n    }\n\n    #{id} .paypal-checkout-lightbox-wrapper {\n        display: none;\n        background-color: white;\n\n        -webkit-transition: all 0.6s ease;\n        -moz-transition: all 0.6s ease;\n        -ms-transition: all 0.6s ease;\n        -o-transition: all 0.6 ease;\n        transition: all 0.6s ease;\n\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        -webkit-animation-fill-mode: both;\n        animation-fill-mode: both;\n\n        -webkit-animation-name: bounceInUp;\n        animation-name: bounceInUp;\n    }\n\n    #{id}.{CLASS.LIGHTBOX}.{CLASS.CLOSING} .paypal-checkout-lightbox-wrapper {\n\n        -webkit-animation-name: bounceOutDown;\n        animation-name: bounceOutDown;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .paypal-checkout-lightbox-wrapper {\n        display: block;\n    }\n\n\n\n    /*!\n     * animate.css -http://daneden.me/animate\n     * Version - 3.5.1\n     * Licensed under the MIT license - http://opensource.org/licenses/MIT\n     *\n     * Copyright (c) 2016 Daniel Eden\n     */\n\n    @-webkit-keyframes bounceInUp {\n        from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n        }\n\n        from {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n        }\n\n        60% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        75% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        90% {\n            -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n        }\n\n        to {\n            -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n    }\n\n    @keyframes bounceInUp {\n        from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n        }\n\n        from {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 3000px, 0);\n            transform: translate3d(0, 3000px, 0);\n        }\n\n        60% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        75% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        90% {\n            -webkit-transform: translate3d(0, -5px, 0);\n            transform: translate3d(0, -5px, 0);\n        }\n\n        to {\n            -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n    }\n\n    @-webkit-keyframes bounceOutDown {\n        20% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        40%, 45% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        to {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n        }\n    }\n\n    @keyframes bounceOutDown {\n        20% {\n            -webkit-transform: translate3d(0, 10px, 0);\n            transform: translate3d(0, 10px, 0);\n        }\n\n        40%, 45% {\n            opacity: 1;\n            -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n        }\n\n        to {\n            opacity: 0;\n            -webkit-transform: translate3d(0, 2000px, 0);\n            transform: translate3d(0, 2000px, 0);\n        }\n    }\n\n    @-webkit-keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeIn {\n        from {\n            opacity: 0;\n        }\n\n        to {\n            opacity: 1;\n        }\n    }\n\n    @-webkit-keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        50% {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n    @keyframes fadeOut {\n        from {\n            opacity: 1;\n        }\n\n        50% {\n            opacity: 1;\n        }\n\n        to {\n            opacity: 0;\n        }\n    }\n\n\n\n    .paypal-spinner {\n        height: 30px;\n        width: 30px;\n        display: inline-block;\n        box-sizing: content-box;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        -webkit-animation: rotation .7s infinite linear;\n        -moz-animation: rotation .7s infinite linear;\n        -o-animation: rotation .7s infinite linear;\n        animation: rotation .7s infinite linear;\n        border-left: 8px solid rgba(0, 0, 0, .2);\n        border-right: 8px solid rgba(0, 0, 0, .2);\n        border-bottom: 8px solid rgba(0, 0, 0, .2);\n        border-top: 8px solid #fff;\n        border-radius: 100%\n    }\n\n    @-webkit-keyframes rotation {\n        from {\n            -webkit-transform: rotate(0deg)\n        }\n        to {\n            -webkit-transform: rotate(359deg)\n        }\n    }\n    @-moz-keyframes rotation {\n        from {\n            -moz-transform: rotate(0deg)\n        }\n        to {\n            -moz-transform: rotate(359deg)\n        }\n    }\n    @-o-keyframes rotation {\n        from {\n            -o-transform: rotate(0deg)\n        }\n        to {\n            -o-transform: rotate(359deg)\n        }\n    }\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n</style>\n';
}, /*!*******************************************************!*\
  !*** ./src/components/checkout/componentTemplate.htm ***!
  \*******************************************************/
function(module, exports) {
    module.exports = '\n<!DOCTYPE html>\n\n<head>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    <title>PayPal</title>\n\n    <style>\n        body {\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            position: fixed;\n            top: 0;\n            left: 0;\n            margin: 0;\n        }\n\n        .spinner {\n            height: 100%;\n            width: 100%;\n            position: absolute;\n            z-index: 10\n        }\n\n        .spinner .spinWrap {\n            width: 200px;\n            height: 100px;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin-left: -100px;\n            margin-top: -50px\n        }\n\n        .spinner .loader,\n        .spinner .spinnerImage {\n            height: 100px;\n            width: 100px;\n            position: absolute;\n            top: 0;\n            left: 50%;\n            opacity: 1;\n            filter: alpha(opacity=100)\n        }\n\n        .spinner .spinnerImage {\n            margin: 28px 0 0 -25px;\n            background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n        }\n\n        .spinner .loader {\n            margin: 0 0 0 -55px;\n            background-color: transparent;\n            -webkit-animation: rotation .7s infinite linear;\n            -moz-animation: rotation .7s infinite linear;\n            -o-animation: rotation .7s infinite linear;\n            animation: rotation .7s infinite linear;\n            border-left: 5px solid #cbcbca;\n            border-right: 5px solid #cbcbca;\n            border-bottom: 5px solid #cbcbca;\n            border-top: 5px solid #2380be;\n            border-radius: 100%\n        }\n\n        @-webkit-keyframes rotation {\n            from {\n                -webkit-transform: rotate(0deg)\n            }\n            to {\n                -webkit-transform: rotate(359deg)\n            }\n        }\n        @-moz-keyframes rotation {\n            from {\n                -moz-transform: rotate(0deg)\n            }\n            to {\n                -moz-transform: rotate(359deg)\n            }\n        }\n        @-o-keyframes rotation {\n            from {\n                -o-transform: rotate(0deg)\n            }\n            to {\n                -o-transform: rotate(359deg)\n            }\n        }\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    </style>\n\n</head>\n\n<body>\n    <div id="preloaderSpinner" class="preloader spinner">\n        <div class="spinWrap">\n            <p class="spinnerImage"></p>\n            <p class="loader"></p>\n        </div>\n    </div>\n</body>\n';
}, /*!**********************************!*\
  !*** ./src/components/common.js ***!
  \**********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.validateProps = validateProps;
    var _config = __webpack_require__(/*! ../config */ 63);
    function validateProps(props) {
        if (props.env && !_config.config.paypalUrls[props.env]) {
            throw new Error("Invalid env: " + props.env);
        }
        var env = props.env || _config.config.env;
        var isCheckout = props.paymentToken || props.paymentDetails;
        var isBilling = props.billingToken || props.billingDetails;
        if (isCheckout && isBilling) {
            throw new Error("Can not provide both payment and billing props");
        }
        if (!isCheckout && !isBilling && !props.submitForm) {
            throw new Error("Must provide either payment or billing props");
        }
        if (props.submitForm && (isCheckout || isBilling)) {
            throw new Error("Can not provide payment or billing token or details when using submitForm");
        }
        if (props.paymentToken && props.paymentDetails) {
            throw new Error("Can not provide both paymentToken and paymentDetails");
        }
        if (props.billingToken && props.billingDetails) {
            throw new Error("Can not provide both billingToken and billingDetails");
        }
        if (props.paymentDetails && (!props.clientID || !props.clientID[env])) {
            throw new Error("Must specify clientID for " + env + " along with paymentDetails");
        }
        if (props.billingDetails && (!props.clientID || !props.clientID[env])) {
            throw new Error("Must specify clientID for " + env + " along with billingDetails");
        }
        if (!props.onPaymentAuthorize && !props.onPaymentComplete) {
            throw new Error("Must specify either onPaymentAuthorize or onPaymentComplete callback - neither passed");
        }
        if (props.onPaymentAuthorize && props.onPaymentComplete) {
            throw new Error("Must specify either onPaymentAuthorize or onPaymentComplete callback - both passed");
        }
        if (props.onPaymentComplete && !props.autoExecute) {
            throw new Error("Must specify autoExecute as true in order to use onPaymentComplete callback");
        }
        if (props.onPaymentAuthorize && props.autoExecute) {
            throw new Error("Can not specify autoExecute as true along with onPaymentAuthorize callback");
        }
        if (props.paymentDetails && props.paymentDetails.intent && props.paymentDetails.intent !== "sale" && props.autoExecute) {
            throw new Error("Can not autoExecute when paymentDetails.intent is " + props.paymentDetails.intent);
        }
    }
}, /*!**********************************************!*\
  !*** ./src/components/checkout/content.json ***!
  \**********************************************/
function(module, exports) {
    module.exports = '\n{\n    "AT": {\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZW": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "YT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "YE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "WS": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "WF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "VU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "VG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "VE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "VC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "VA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "UY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "UG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "TT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "TO": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "TN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "TM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "TD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "TC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "SZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "ST": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "SO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "SM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "SB": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "SA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "RW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "RS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "RE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "QA": {\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        },\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PY": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "PW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "PA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "OM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "NU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NP": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "NG": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "NC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MV": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "MU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MT": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "MR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MQ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "ML": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "MK": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "MG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ME": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MD": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MC": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "MA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "LS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LK": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "LI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "LA": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "KW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "KN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "KM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "KI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KH": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "JO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "JM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "IS": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HR": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "GY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "GP": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "GM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "GI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "FO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "FM": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "FK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "FJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "ET": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ER": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "EG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "EC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "DZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "DO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "DM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "DJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CY": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CM": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CI": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "BY": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BT": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "BS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "BN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "BM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "BG": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BB": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BA": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AL": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AE": {\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        },\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        }\n    },\n    "GB": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\'ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AR": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "US": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "VN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.  ",\n            "continue": "Continue"\n        }\n    },\n    "UA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TW": {\n        "zh": {\n            "windowMessage": "\\u770B\\u4E0D\\u5230\\u5B89\\u5168\\u9023\\u7DDA\\u7684 PayPal \\u700F\\u89BD\\u5668\\uFF1F\\u6211\\u5011\\u5C07\\u6703\\u91CD\\u65B0\\u555F\\u52D5\\u8996\\u7A97\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7E7C\\u7E8C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TR": {\n        "tr": {\n            "windowMessage": "G\\u00FCvenli PayPal taray\\u0131c\\u0131s\\u0131n\\u0131 g\\u00F6rm\\u00FCyor musunuz? Al\\u0131\\u015Fveri\\u015Finizi tamamlamak i\\u00E7in pencereyi yeniden ba\\u015Flatman\\u0131za yard\\u0131mc\\u0131 olaca\\u011F\\u0131z.\\u00A0 ",\n            "continue": "Devam"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TH": {\n        "th": {\n            "windowMessage": "\\u0E16\\u0E49\\u0E32\\u0E04\\u0E38\\u0E13\\u0E44\\u0E21\\u0E48\\u0E40\\u0E2B\\u0E47\\u0E19\\u0E40\\u0E1A\\u0E23\\u0E32\\u0E27\\u0E4C\\u0E40\\u0E0B\\u0E2D\\u0E23\\u0E4C\\u0E17\\u0E35\\u0E48\\u0E21\\u0E35\\u0E23\\u0E30\\u0E1A\\u0E1A\\u0E04\\u0E27\\u0E32\\u0E21\\u0E1B\\u0E25\\u0E2D\\u0E14\\u0E20\\u0E31\\u0E22\\u0E02\\u0E2D\\u0E07 PayPal \\u0E40\\u0E23\\u0E32\\u0E08\\u0E30\\u0E0A\\u0E48\\u0E27\\u0E22\\u0E04\\u0E38\\u0E13\\u0E40\\u0E1B\\u0E34\\u0E14\\u0E2B\\u0E19\\u0E49\\u0E32\\u0E15\\u0E48\\u0E32\\u0E07\\u0E2D\\u0E35\\u0E01\\u0E04\\u0E23\\u0E31\\u0E49\\u0E07\\u0E40\\u0E1E\\u0E37\\u0E48\\u0E2D\\u0E0A\\u0E33\\u0E23\\u0E30\\u0E40\\u0E07\\u0E34\\u0E19\\u0E43\\u0E2B\\u0E49\\u0E40\\u0E23\\u0E35\\u0E22\\u0E1A\\u0E23\\u0E49\\u0E2D\\u0E22 ",\n            "continue": "\\u0E14\\u0E33\\u0E40\\u0E19\\u0E34\\u0E19\\u0E01\\u0E32\\u0E23\\u0E15\\u0E48\\u0E2D"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SG": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SE": {\n        "sv": {\n            "windowMessage": "Ser du inte den s\\u00E4kra PayPal-webbl\\u00E4saren? Vi hj\\u00E4lper dig att starta om f\\u00F6nstret f\\u00F6r att slutf\\u00F6ra ditt k\\u00F6p. ",\n            "continue": "Forts\\u00E4tt"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "RU": {\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "RO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PT": {\n        "pt": {\n            "windowMessage": "N\\u00E3o v\\u00EA a indica\\u00E7\\u00E3o de sess\\u00E3o segura PayPal no browser? Vamos ajudar a reabrir a janela para que possa concluir a sua compra.",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PL": {\n        "pl": {\n            "windowMessage": "Nie widzisz bezpiecznej przegl\\u0105darki PayPal? Pomo\\u017Cemy Ci ponownie uruchomi\\u0107 to okno w celu dokonania zakupu.\\u00A0 ",\n            "continue": "Kontynuuj"\n        },\n        "en": {\n            "windowMessage": "You don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PH": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre paiement.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su pago.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NO": {\n        "no": {\n            "windowMessage": "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med \\u00E5 starte vinduet p\\u00E5 nytt s\\u00E5 du kan fullf\\u00F8re kj\\u00F8pet.\\u00A0 ",\n            "continue": "Fortsett"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NL": {\n        "nl": {\n            "windowMessage": "Ziet u geen beveiligde PayPal-browser? We helpen u het venster opnieuw te openen om uw aankoop te voltooien.\\u00A0 ",\n            "continue": "Doorgaan"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MY": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MX": {\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "LV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Das PayPal-Fenster wird nicht angezeigt?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "LT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KR": {\n        "ko": {\n            "windowMessage": "\\uBCF4\\uC548 PayPal \\uBE0C\\uB77C\\uC6B0\\uC800\\uAC00 \\uBCF4\\uC774\\uC9C0 \\uC54A\\uC73C\\uC2E0\\uAC00\\uC694? \\uCC3D\\uC744 \\uB2E4\\uC2DC \\uC2E4\\uD589\\uD558\\uC5EC \\uACB0\\uC81C\\uB97C \\uC644\\uB8CC\\uD560 \\uC218 \\uC788\\uB3C4\\uB85D \\uB3C4\\uC640\\uB4DC\\uB9AC\\uACA0\\uC2B5\\uB2C8\\uB2E4.\\u00A0 ",\n            "continue": "\\uACC4\\uC18D"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "JP": {\n        "ja": {\n            "windowMessage": "\\u30BB\\u30AD\\u30E5\\u30A2\\u306A\\u30D6\\u30E9\\u30A6\\u30B6\\u304C\\u8868\\u793A\\u3055\\u308C\\u306A\\u3044\\u5834\\u5408\\u306F\\u3001\\u30A6\\u30A3\\u30F3\\u30C9\\u30A6\\u3092\\u518D\\u8D77\\u52D5\\u3057\\u3066\\u3001\\u652F\\u6255\\u3044\\u3092\\u5B8C\\u4E86\\u3067\\u304D\\u308B\\u3088\\u3046\\u304A\\u624B\\u4F1D\\u3044\\u3044\\u305F\\u3057\\u307E\\u3059\\u3002",\n            "continue": "\\u7D9A\\u884C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.  ",\n            "continue": "Continue"\n        }\n    },\n    "IT": {\n        "it": {\n            "windowMessage": "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l\'acquisto.\\u00A0 ",\n            "continue": "Continua"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IL": {\n        "he": {\n            "windowMessage": "\\u05DC\\u05D0 \\u05E8\\u05D5\\u05D0\\u05D4 \\u05D0\\u05EA \\u05D3\\u05E4\\u05D3\\u05E4\\u05DF PayPal \\u05D4\\u05DE\\u05D0\\u05D5\\u05D1\\u05D8\\u05D7? \\u05E0\\u05E2\\u05D6\\u05D5\\u05E8 \\u05DC\\u05DA \\u05DC\\u05E4\\u05EA\\u05D5\\u05D7 \\u05DE\\u05D7\\u05D3\\u05E9 \\u05D0\\u05EA \\u05D4\\u05D7\\u05DC\\u05D5\\u05DF \\u05DB\\u05D3\\u05D9 \\u05DC\\u05D4\\u05E9\\u05DC\\u05D9\\u05DD \\u05D0\\u05EA \\u05D4\\u05E7\\u05E0\\u05D9\\u05D9\\u05D4 \\u05E9\\u05DC\\u05DA.\\u00A0 ",\n            "continue": "\\u05D4\\u05DE\\u05E9\\u05DA"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ID": {\n        "id": {\n            "windowMessage": "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda.\\u00A0 ",\n            "continue": "Lanjutkan"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HK": {\n        "zh": {\n            "windowMessage": "\\u770B\\u4E0D\\u5230\\u5B89\\u5168\\u7684 PayPal \\u700F\\u89BD\\u5668\\u8996\\u7A97\\uFF1F\\u6211\\u5011\\u6703\\u52A9\\u4F60\\u91CD\\u65B0\\u958B\\u555F\\u8996\\u7A97\\uFF0C\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002",\n            "continue": "\\u7E7C\\u7E8C"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GROUP-LATAM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GROUP-EMEA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "pt": {\n            "windowMessage": "N\\u00E3o v\\u00EA a indica\\u00E7\\u00E3o de sess\\u00E3o segura PayPal no browser? Vamos ajudar a reabrir a janela para que possa concluir a sua compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "GROUP-APAC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ko": {\n            "windowMessage": "\\uBCF4\\uC548 PayPal \\uBE0C\\uB77C\\uC6B0\\uC800\\uAC00 \\uBCF4\\uC774\\uC9C0 \\uC54A\\uC73C\\uC2E0\\uAC00\\uC694? \\uCC3D\\uC744 \\uB2E4\\uC2DC \\uC2E4\\uD589\\uD558\\uC5EC \\uAD6C\\uB9E4\\uB97C \\uC644\\uB8CC\\uD560 \\uC218 \\uC788\\uB3C4\\uB85D \\uB3C4\\uC640\\uB4DC\\uB9AC\\uACA0\\uC2B5\\uB2C8\\uB2E4. ",\n            "continue": "\\uACC4\\uC18D"\n        },\n        "id": {\n            "windowMessage": "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembelian Anda. ",\n            "continue": "Lanjutkan"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "GR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "FR": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ES": {\n        "es": {\n            "windowMessage": "\\u00BFNo ve el s\\u00EDmbolo de navegaci\\u00F3n segura de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar la compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "FI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "EE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "DK": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "CZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "DE": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "CH": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "CA": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 de PayPal\\u00A0? Nous vous aiderons \\u00E0 relancer la fen\\u00EAtre afin d\'effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you relaunch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "C2": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BE": {\n        "nl": {\n            "windowMessage": "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien.\\u00A0 ",\n            "continue": "Doorgaan"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BR": {\n        "pt": {\n            "windowMessage": "N\\u00E3o est\\u00E1 vendo o navegador seguro do PayPal? Ajudaremos voc\\u00EA a reabrir a janela para concluir a compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AU": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\'ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    }\n}\n';
}, /*!*****************************************************!*\
  !*** ./src/components/button/componentTemplate.htm ***!
  \*****************************************************/
function(module, exports) {
    module.exports = "<style>\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10;\n    }\n    .spinner .loader {\n        height: 20px;\n        width: 20px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -14px 0 0 -14px;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        -webkit-animation: rotation .7s infinite linear;\n        -moz-animation: rotation .7s infinite linear;\n        -o-animation: rotation .7s infinite linear;\n        animation: rotation .7s infinite linear;\n        border-left: 4px solid rgba(0, 0, 0, .2);\n        border-right: 4px solid rgba(0, 0, 0, .2);\n        border-bottom: 4px solid rgba(0, 0, 0, .2);\n        border-top: 4px solid rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n    }\n\n    @-webkit-keyframes rotation {\n        from {\n            -webkit-transform: rotate(0deg)\n        }\n        to {\n            -webkit-transform: rotate(359deg)\n        }\n    }\n    @-moz-keyframes rotation {\n        from {\n            -moz-transform: rotate(0deg)\n        }\n        to {\n            -moz-transform: rotate(359deg)\n        }\n    }\n    @-o-keyframes rotation {\n        from {\n            -o-transform: rotate(0deg)\n        }\n        to {\n            -o-transform: rotate(359deg)\n        }\n    }\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n</style>\n\n<div class=\"spinner\">\n    <p id=\"loader\" class=\"loader\"></p>\n</div>\n\n<script>\n    (function() {\n\n        var loader = document.getElementById('loader');\n\n        var size   = Math.round(document.documentElement.scrollHeight * 0.4);\n        var border = Math.round(size * 0.2);\n        var margin = Math.round(border + (size / 2));\n\n        loader.style.height = loader.style.width = size + 'px';\n        loader.style.borderWidth = border + 'px';\n        loader.style.marginTop = loader.style.marginLeft = '-' + margin + 'px';\n\n    })();\n</script>\n";
}, /*!*********************************!*\
  !*** ./src/legacy/interface.js ***!
  \*********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.apps = exports.checkout = undefined;
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
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
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var _src = __webpack_require__(/*! xcomponent/src */ 5);
    var _src2 = _interopRequireDefault(_src);
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    var _components = __webpack_require__(/*! ../components */ 2);
    var _eligibility = __webpack_require__(/*! ./eligibility */ 88);
    var _config = __webpack_require__(/*! ../config */ 63);
    var _bridge = __webpack_require__(/*! ../bridge */ 79);
    var _util = __webpack_require__(/*! ./util */ 89);
    var _button = __webpack_require__(/*! ./button */ 92);
    var _log = __webpack_require__(/*! ./log */ 90);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    var urlPrefix = _config.config.checkoutUrl + "?token=";
    if (window.xchild && !window.paypalCheckout) {
        window.paypalCheckout = window.xchild;
    }
    var redirected = false;
    function redirect(location) {
        if (redirected) {
            (0, _log.logWarning)("multiple_redirects");
        }
        redirected = true;
        if (window.ppCheckpoint) {
            if (location && location.match(/^https:\/\/www\.paypal\.com/)) {
                window.ppCheckpoint("flow_fullpage_redirect");
            } else if (location && (location.match(/PayerID=/) || location.match(/ba_token=/))) {
                window.ppCheckpoint("flow_complete");
            } else {
                window.ppCheckpoint("flow_cancel");
            }
        }
        setTimeout(function() {
            (0, _util.redirect)(location);
        }, 500);
        _client2["default"].flush();
    }
    function parseToken(token) {
        if (!token) {
            return;
        }
        if (token.match(/^(EC-)?[A-Z0-9]{17}$/)) {
            return token;
        }
        var match = token.match(/token=((EC-)?[A-Z0-9]{17})/);
        if (match) {
            return match[1];
        }
        match = token.match(/(EC-[A-Z0-9]{17})/);
        if (match) {
            return match[1];
        }
    }
    function getFullpageRedirectUrl(token) {
        if (!token) {
            throw new Error("Can not get redirect url - token is blank");
        }
        if (token.match(/^https?:\/\//)) {
            return token;
        }
        var ecToken = parseToken(token);
        if (!ecToken) {
            throw new Error("Can not match token in " + token);
        }
        return _config.config.checkoutUrl + "?token=" + ecToken;
    }
    function matchUrlAndPaymentToken(item) {
        if (!item || !item.trim()) {
            (0, _log.logError)("startflow_no_url_or_token", {
                item: item
            });
            throw new Error("startflow_no_url_or_token");
        }
        var paymentToken = item && parseToken(item);
        var url = item && item !== paymentToken ? item : null;
        if (url && !url.match(/^https?:\/\/|^\//)) {
            (0, _log.logWarning)("startflow_relative_url", {
                url: url
            });
        }
        if (url && paymentToken) {
            (0, _log.logDebug)("startflow_url_with_token", {
                item: item
            });
        } else if (url) {
            (0, _log.logDebug)("startflow_url_with_no_token", {
                item: item
            });
            paymentToken = _src2["default"].CONSTANTS.PROP_DEFER_TO_URL;
        } else if (paymentToken) {
            (0, _log.logDebug)("startflow_with_token", {
                item: item
            });
            url = getFullpageRedirectUrl(item);
        }
        return {
            paymentToken: paymentToken,
            url: url
        };
    }
    function getPaymentTokenAndUrl() {
        var paymentTokenAndUrl = new _promise.SyncPromise(function(resolve, reject) {
            window.paypal.checkout.startFlow = (0, _util.once)(function(item, opts) {
                (0, _log.logDebug)("gettoken_startflow", {
                    item: item
                });
                if (window.ppCheckpoint) {
                    window.ppCheckpoint("flow_startflow");
                }
                if (opts) {
                    (0, _log.logWarning)("startflow_with_options", {
                        opts: JSON.stringify(opts)
                    });
                }
                return resolve(matchUrlAndPaymentToken(item));
            });
        });
        var url = paymentTokenAndUrl.then(function(result) {
            return result.url;
        });
        var paymentToken = paymentTokenAndUrl.then(function(result) {
            return result.paymentToken;
        });
        return {
            url: url,
            paymentToken: paymentToken
        };
    }
    var paypalCheckoutInited = false;
    function initPayPalCheckout() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        (0, _log.logInfo)("init_checkout");
        if (paypalCheckoutInited) {
            (0, _log.logWarning)("multiple_init_paypal_checkout");
        }
        paypalCheckoutInited = true;
        _components.PayPalCheckout.autocloseParentTemplate = false;
        if (window.ppCheckpoint) {
            window.ppCheckpoint("flow_start");
        }
        var paypalCheckout = _components.PayPalCheckout.init(_extends({
            uid: window.pp_uid,
            onPaymentAuthorize: function onPaymentAuthorize(_ref) {
                var returnUrl = _ref.returnUrl;
                reset();
                (0, _log.logInfo)("payment_authorized");
                if (!(0, _util.urlWillRedirectPage)(returnUrl)) {
                    this.closeParentTemplate();
                }
                return redirect(returnUrl);
            },
            onPaymentCancel: function onPaymentCancel(_ref2) {
                var cancelUrl = _ref2.cancelUrl;
                reset();
                (0, _log.logInfo)("payment_canceled");
                if (!(0, _util.urlWillRedirectPage)(cancelUrl)) {
                    (0, _log.logInfo)("hash_change_close_overlay");
                    this.closeParentTemplate();
                }
                return redirect(cancelUrl);
            },
            onError: function onError() {
                reset();
            }
        }, props));
        window.paypal.checkout.closeFlow = function(closeUrl) {
            (0, _log.logWarning)("closeflow");
            reset();
            try {
                paypalCheckout.destroy(new Error("closeFlow called"));
            } catch (err) {
                console.error(err);
            }
            if (closeUrl) {
                (0, _log.logWarning)("closeflow_with_url", {
                    closeUrl: closeUrl
                });
                return redirect(closeUrl);
            }
        };
        return paypalCheckout;
    }
    function renderPayPalCheckout() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var paypalCheckout = initPayPalCheckout(props);
        return paypalCheckout.render()["catch"](function(err) {
            (0, _log.logError)("error", {
                error: err.stack || err.toString()
            });
            _promise.SyncPromise.all([ props.url, props.paymentToken ]).then(function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2);
                var url = _ref4[0];
                var paymentToken = _ref4[1];
                if (url) {
                    return redirect(url);
                }
                if (paymentToken) {
                    return redirect(getFullpageRedirectUrl(paymentToken));
                }
            });
            throw err;
        });
    }
    function triggerClickHandler(handler, event) {
        if (handler.toString().match(/^function\s*\w*\s*\(err(or)?\)\ *\{/)) {
            (0, _log.logWarning)("click_function_expects_err");
            handler.call(null);
        } else {
            handler.call(null, event);
        }
    }
    function handleClick(env, clickHandler, event) {
        (0, _log.logDebug)("button_click_handler");
        var _getPaymentTokenAndUr = getPaymentTokenAndUrl();
        var url = _getPaymentTokenAndUr.url;
        var paymentToken = _getPaymentTokenAndUr.paymentToken;
        if (!(0, _eligibility.isICEligible)()) {
            url.then(function(redirectUrl) {
                (0, _log.logDebug)("ineligible_startflow", {
                    url: redirectUrl
                });
                return redirect(redirectUrl);
            });
            return triggerClickHandler(clickHandler, event);
        }
        var paymentCancelled = false;
        window.paypal.checkout.initXO = function() {
            (0, _log.logDebug)("initxo_clickhandler");
            if (window.ppCheckpoint) {
                window.ppCheckpoint("flow_initxo");
            }
        };
        window.paypal.checkout.closeFlow = function(closeUrl) {
            (0, _log.logWarning)("closeflow_clickhandler");
            if (closeUrl) {
                (0, _log.logWarning)("closeflow_with_url", {
                    closeUrl: closeUrl
                });
                return redirect(closeUrl);
            }
            paymentCancelled = true;
            reset();
        };
        triggerClickHandler(clickHandler, event);
        if (paymentCancelled) {
            return;
        }
        (0, _log.logInfo)("init_paypal_checkout_click");
        renderPayPalCheckout({
            env: env,
            url: url,
            paymentToken: paymentToken
        });
    }
    function handleClickHijack(env, button) {
        (0, _log.logDebug)("button_click_hijack");
        var targetElement = void 0;
        if (button && button.form) {
            targetElement = button.form;
        } else if (button && button.tagName && button.tagName.toLowerCase() === "a") {
            targetElement = button;
        } else if (button && button.tagName && (button.tagName.toLowerCase() === "img" || button.tagName.toLowerCase() === "button") && button.parentNode.tagName.toLowerCase() === "a") {
            targetElement = button.parentNode;
        } else if (button && button.tagName && button.tagName.toLowerCase() === "button" && button.parentNode.parentNode.tagName.toLowerCase() === "a") {
            targetElement = button.parentNode.parentNode;
        } else if (this && this.hasOwnProperty("target") && typeof this.target !== "undefined") {
            targetElement = this;
        }
        if (!targetElement) {
            (0, _log.logError)("no_target_element");
            return;
        }
        (0, _log.logInfo)("init_paypal_checkout_hijack");
        var paypalCheckout = initPayPalCheckout({
            env: env,
            paymentToken: _src2["default"].CONSTANTS.PROP_DEFER_TO_URL
        });
        paypalCheckout.renderHijack(targetElement);
    }
    function listenClick(env, button, clickHandler, condition) {
        if (window.ppCheckpoint) {
            window.ppCheckpoint("flow_listenclick");
        }
        var isClick = clickHandler instanceof Function;
        if (!(0, _eligibility.isICEligible)() && !isClick) {
            return (0, _log.logDebug)("ineligible_listenclick");
        }
        if (button.hasAttribute("data-paypal-click-listener")) {
            return (0, _log.logWarning)("button_already_has_paypal_click_listener");
        }
        button.setAttribute("data-paypal-click-listener", true);
        if (!(0, _eligibility.isICEligible)() && !isClick) {
            button.addEventListener("click", function(event) {
                if (window.ppCheckpoint) {
                    window.ppCheckpoint("flow_buttonclick");
                }
            });
            return (0, _log.logDebug)("ineligible_listenclick");
        }
        button.addEventListener("click", function(event) {
            if (window.ppCheckpoint) {
                window.ppCheckpoint("flow_buttonclick");
            }
            (0, _log.logInfo)("button_click");
            if (condition instanceof Function) {
                if (condition.call()) {
                    (0, _log.logInfo)("button_click_condition_enabled");
                } else {
                    return (0, _log.logInfo)("button_click_condition_disabled");
                }
            }
            if (isClick) {
                return handleClick(env, clickHandler, event);
            } else {
                return handleClickHijack(env, button);
            }
        });
    }
    var setupCalled = false;
    function setup(id) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        if (window.ppCheckpoint) {
            window.ppCheckpoint("flow_setup");
        }
        id = id || "merchant";
        (0, _log.logInfo)("setup", {
            id: id,
            env: options.environment,
            options: JSON.stringify(options, function(key, val) {
                if (val instanceof Function) {
                    return "<function>";
                }
                return val;
            })
        });
        if (setupCalled) {
            console.warn("setup_called_multiple_times");
        }
        setupCalled = true;
        reset();
        if (window.I10C) {
            (0, _log.logInfo)("instart");
        }
        if (_config.config.paypalUrls[options.environment]) {
            if (options.environment !== _config.config.env) {
                _config.config.env = options.environment;
                (0, _bridge.setupBridge)(_config.config.env, _config.config.bridgeUrl);
            }
        } else {
            options.environment = _config.config.env;
        }
        if (options.locale) {
            var _options$locale$split = options.locale.split("_");
            var _options$locale$split2 = _slicedToArray(_options$locale$split, 2);
            var lang = _options$locale$split2[0];
            var country = _options$locale$split2[1];
            _config.config.customCountry = true;
            if (_config.config.locales[country]) {
                _config.config.locale.country = country;
                if (_config.config.locales[country].indexOf(lang) !== -1) {
                    _config.config.locale.lang = lang;
                } else {
                    (0, _log.logWarning)("invalid_user_lang", {
                        country: country,
                        lang: lang,
                        def: _config.config.locales[country][0]
                    });
                    _config.config.locale.lang = _config.config.locales[country][0];
                }
            } else if (_config.config.locales.US[country]) {
                _config.config.locale.country = "US";
                _config.config.locale.lang = country;
            } else {
                (0, _log.logWarning)("invalid_user_country", {
                    country: country
                });
            }
        }
        if (options.buttons) {
            if ((0, _util.getElements)(options.buttons).length) {
                options.button = options.buttons;
                delete options.buttons;
            } else {
                var buttons = options.buttons.map(function(item) {
                    return item && item.button;
                });
                if ((0, _util.getElements)(buttons).length) {
                    options.button = buttons;
                    delete options.buttons;
                }
            }
        }
        if (options.button && options.button.length !== 0) {
            var buttonElements = (0, _util.getElements)(options.button);
            if (buttonElements.length) {
                buttonElements.forEach(function(el) {
                    (0, _log.logInfo)("listen_click_custom_button");
                    listenClick(options.environment, el, options.click, options.condition);
                });
            } else {
                (0, _log.logWarning)("button_element_not_found", {
                    element: JSON.stringify(options.button)
                });
            }
        }
        return (0, _button.renderButtons)(id, options).then(function(buttons) {
            buttons.forEach(function(button) {
                (0, _log.logInfo)("listen_click_paypal_button");
                listenClick(options.environment, button.el, button.click, button.condition);
            });
        });
    }
    function initXO() {
        (0, _log.logDebug)("initxo");
        if (window.ppCheckpoint) {
            window.ppCheckpoint("flow_initxo");
        }
        if (!(0, _eligibility.isICEligible)()) {
            return (0, _log.logDebug)("ineligible_initxo");
        }
        reset();
        var _getPaymentTokenAndUr2 = getPaymentTokenAndUrl();
        var url = _getPaymentTokenAndUr2.url;
        var paymentToken = _getPaymentTokenAndUr2.paymentToken;
        (0, _log.logInfo)("init_paypal_checkout_initxo");
        renderPayPalCheckout({
            url: url,
            paymentToken: paymentToken
        });
    }
    function startFlow(item, opts) {
        (0, _log.logDebug)("startflow", {
            item: item
        });
        if (window.ppCheckpoint) {
            window.ppCheckpoint("flow_startflow");
        }
        if (opts) {
            (0, _log.logWarning)("startflow_with_options", {
                opts: JSON.stringify(opts)
            });
        }
        var _matchUrlAndPaymentTo = matchUrlAndPaymentToken(item);
        var paymentToken = _matchUrlAndPaymentTo.paymentToken;
        var url = _matchUrlAndPaymentTo.url;
        if (!(0, _eligibility.isICEligible)()) {
            (0, _log.logDebug)("ineligible_startflow_global", {
                url: url
            });
            return redirect(url);
        }
        (0, _log.logInfo)("init_paypal_checkout_startflow");
        renderPayPalCheckout({
            url: url,
            paymentToken: paymentToken
        });
    }
    function closeFlow(closeUrl) {
        (0, _log.logWarning)("closeflow");
        if (closeUrl) {
            (0, _log.logWarning)("closeflow_with_url", {
                closeUrl: closeUrl
            });
            return redirect(closeUrl);
        }
        console.warn("Checkout is not open, can not be closed");
    }
    function reset() {
        window.paypal.checkout.initXO = initXO;
        window.paypal.checkout.startFlow = startFlow;
        window.paypal.checkout.closeFlow = closeFlow;
    }
    (0, _util.onDocumentReady)(function() {
        var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-paypal-button]"));
        if (buttons && buttons.length) {
            (0, _log.logDebug)("data_paypal_button", {
                number: buttons.length
            });
            for (var _iterator = buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                var _ref5;
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref5 = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref5 = _i.value;
                }
                var button = _ref5;
                var id = button.getAttribute("data-paypal-id");
                var environment = void 0;
                if (button.hasAttribute("data-env")) {
                    environment = button.getAttribute("data-env");
                } else if (button.hasAttribute("data-sandbox")) {
                    environment = "sandbox";
                }
                setup(id, {
                    environment: environment,
                    button: button
                });
            }
        }
        Array.prototype.slice.call(document.getElementsByClassName("paypal-button-hidden")).forEach(function(el) {
            el.className = el.className.replace("paypal-button-hidden", "");
        });
    });
    var checkout = exports.checkout = {
        setup: setup,
        initXO: initXO,
        startFlow: startFlow,
        closeFlow: closeFlow,
        urlPrefix: urlPrefix
    };
    var apps = exports.apps = {
        checkout: checkout,
        Checkout: checkout
    };
    var readyCalled = false;
    function invokeReady(method) {
        if (readyCalled) {
            (0, _log.logWarning)("ready_called_multiple_times");
        }
        if (setupCalled) {
            (0, _log.logWarning)("ready_called_after_setup");
        }
        readyCalled = true;
        (0, _util.onDocumentReady)(function() {
            (0, _log.logDebug)("paypal_checkout_ready");
            method();
        });
    }
    if (window.paypalCheckoutReady instanceof Function) {
        (0, _log.logDebug)("paypal_checkout_ready_preset");
        invokeReady(window.paypalCheckoutReady);
    }
    try {
        delete window.paypalCheckoutReady;
        Object.defineProperty(window, "paypalCheckoutReady", {
            set: function set(method) {
                (0, _log.logDebug)("paypal_checkout_ready_setter");
                invokeReady(method);
            },
            get: function get() {
                (0, _log.logWarning)("paypal_checkout_ready_getter");
            }
        });
    } catch (err) {
        (0, _log.logWarning)("paypal_checkout_ready_setter_error", {
            error: err.stack || err.toString()
        });
    }
}, /*!***********************************!*\
  !*** ./src/legacy/eligibility.js ***!
  \***********************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.isUnsupportedIE = isUnsupportedIE;
    exports.isICEligible = isICEligible;
    var _lib = __webpack_require__(/*! ../lib */ 65);
    var _config = __webpack_require__(/*! ../config */ 63);
    function isUnsupportedIE() {
        return (0, _lib.getUserAgent)().match(/MSIE (5|6|7|8)\./i);
    }
    function isICEligible() {
        var currentAgent = (0, _lib.getAgent)();
        if ((typeof currentAgent === "undefined" ? "undefined" : _typeof(currentAgent)) === "object" && currentAgent.length === 2) {
            if (parseFloat(currentAgent[1]) < _config.config.SUPPORTED_AGENTS[currentAgent[0]]) {
                return false;
            }
        }
        return !((0, _lib.isWebView)() || isUnsupportedIE() || (0, _lib.isDevice)());
    }
}, /*!****************************!*\
  !*** ./src/legacy/util.js ***!
  \****************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.urlWillRedirectPage = urlWillRedirectPage;
    exports.redirect = redirect;
    exports.onDocumentReady = onDocumentReady;
    exports.isNodeList = isNodeList;
    exports.isArray = isArray;
    exports.isElement = isElement;
    exports.getElement = getElement;
    exports.getElements = getElements;
    exports.once = once;
    var _log = __webpack_require__(/*! ./log */ 90);
    var _promise = __webpack_require__(/*! sync-browser-mocks/src/promise */ 19);
    function urlWillRedirectPage(url) {
        if (url.indexOf("#") === -1) {
            return true;
        }
        if (url.split("#")[0] === window.location.href.split("#")[0]) {
            return false;
        }
        return true;
    }
    function redirect(url) {
        (0, _log.logInfo)("redirect", {
            url: url
        });
        window.location = url;
    }
    function isDocumentReady() {
        return document.readyState === "complete";
    }
    var documentReady = new _promise.SyncPromise(function(resolve) {
        if (isDocumentReady()) {
            return resolve();
        }
        var interval = setInterval(function() {
            if (isDocumentReady()) {
                clearInterval(interval);
                return resolve();
            }
        }, 50);
    });
    function onDocumentReady(method) {
        return documentReady.then(method);
    }
    function isNodeList(nodes) {
        var result = Object.prototype.toString.call(nodes);
        if (result === "[object HTMLCollection]" || result === "[object NodeList]") {
            return true;
        }
        return false;
    }
    function isArray(item) {
        return item instanceof Array;
    }
    function isElement(item) {
        return item instanceof window.HTMLElement;
    }
    function getElement(item) {
        if (!item) {
            return;
        }
        if (isElement(item)) {
            return item;
        }
        if (typeof item === "string") {
            var result = document.querySelector && document.querySelector(item);
            if (result) {
                return result;
            }
            return document.getElementById(item);
        }
    }
    function getElements(collection) {
        if (!collection) {
            return [];
        }
        var result = [];
        if (isArray(collection) || isNodeList(collection)) {
            for (var i = 0; i < collection.length; i++) {
                var _el = getElement(collection[i]);
                if (_el) {
                    result.push(_el);
                }
            }
            return result;
        }
        var el = getElement(collection);
        if (el) {
            return [ el ];
        }
        return [];
    }
    function once(method) {
        var called = false;
        return function() {
            if (!called) {
                called = true;
                return method.apply(this, arguments);
            }
        };
    }
}, /*!***************************!*\
  !*** ./src/legacy/log.js ***!
  \***************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.logDebug = logDebug;
    exports.logInfo = logInfo;
    exports.logWarning = logWarning;
    exports.logError = logError;
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _constants = __webpack_require__(/*! ./constants */ 91);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function logDebug(event) {
        var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        _client2["default"].debug(_constants.LOG_PREFIX + "_" + event, payload);
    }
    function logInfo(event) {
        var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        _client2["default"].info(_constants.LOG_PREFIX + "_" + event, payload);
    }
    function logWarning(event) {
        var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        _client2["default"].warn(_constants.LOG_PREFIX + "_" + event, payload);
    }
    function logError(event) {
        var payload = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        _client2["default"].error(_constants.LOG_PREFIX + "_" + event, payload);
    }
}, /*!*********************************!*\
  !*** ./src/legacy/constants.js ***!
  \*********************************/
function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var LOG_PREFIX = exports.LOG_PREFIX = "paypal_legacy";
    var BUTTON_JS_URL = exports.BUTTON_JS_URL = "//www.paypalobjects.com/api/button.js";
}, /*!******************************!*\
  !*** ./src/legacy/button.js ***!
  \******************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.renderButtons = renderButtons;
    var _config = __webpack_require__(/*! ../config */ 63);
    var _lib = __webpack_require__(/*! ../lib */ 65);
    var _constants = __webpack_require__(/*! ./constants */ 91);
    var _log = __webpack_require__(/*! ./log */ 90);
    var _util = __webpack_require__(/*! ./util */ 89);
    var buttonJS = void 0;
    function loadButtonJS() {
        if (buttonJS) {
            return buttonJS;
        }
        (0, _log.logDebug)("buttonjs_load");
        buttonJS = (0, _lib.loadScript)(_constants.BUTTON_JS_URL)["catch"](function(err) {
            (0, _log.logInfo)("buttonjs_load_error_retry", {
                error: err.stack || err.toString()
            });
            return (0, _lib.loadScript)(_constants.BUTTON_JS_URL);
        }).then(function(result) {
            (0, _log.logDebug)("buttonjs_load_success");
            return result;
        })["catch"](function(err) {
            (0, _log.logError)("buttonjs_load_error", {
                error: err.stack || err.toString()
            });
            throw err;
        });
        return buttonJS;
    }
    function renderButton(id, container, options, label) {
        var lc = options.locale || _config.config.locale.lang + "_" + _config.config.locale.country;
        var color = options.color || "gold";
        var shape = options.shape || "pill";
        var size = options.size || "small";
        var type = "button";
        label = label || "checkout";
        (0, _log.logDebug)("render_button_lc_" + lc);
        (0, _log.logDebug)("render_button_color_" + color);
        (0, _log.logDebug)("render_button_shape_" + shape);
        (0, _log.logDebug)("render_button_size_" + size);
        (0, _log.logDebug)("render_button_label_" + label);
        var buttonDom = window.paypal.button.create(id, {
            lc: lc,
            color: color,
            shape: shape,
            size: size
        }, {
            type: type,
            label: label
        });
        container.appendChild(buttonDom.el);
        return buttonDom.el.childNodes[0];
    }
    function renderButtons(id, options) {
        return loadButtonJS().then(function() {
            var buttons = [];
            if (options.buttons instanceof Array) {
                if (options.container) {
                    for (var _iterator = options.buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var button = _ref;
                        if (button.container && button.container !== options.container) {
                            (0, _log.logWarning)("mismatched_container_and_button_passed", {
                                options: options.container,
                                button: button.container
                            });
                        }
                    }
                }
                var _loop = function _loop() {
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) return "break";
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) return "break";
                        _ref2 = _i2.value;
                    }
                    var button = _ref2;
                    if (button) {
                        button.click = button.click || options.click;
                        button.condition = button.condition || options.condition;
                        if (button.container && button.container.length !== 0) {
                            var buttonContainerElements = (0, _util.getElements)(button.container);
                            if (buttonContainerElements.length) {
                                buttonContainerElements.forEach(function(container) {
                                    if (container.tagName && container.tagName.toLowerCase() === "a") {
                                        (0, _log.logWarning)("container_a_tag");
                                    }
                                    buttons.push({
                                        el: renderButton(id, container, button, button.type),
                                        click: button.click,
                                        condition: button.condition
                                    });
                                });
                            } else {
                                (0, _log.logWarning)("button_container_not_found", {
                                    container: JSON.stringify(button.container)
                                });
                            }
                        } else {
                            (0, _log.logWarning)("button_container_not_passed", {
                                button: JSON.stringify(button)
                            });
                        }
                    }
                };
                for (var _iterator2 = options.buttons, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    var _ret = _loop();
                    if (_ret === "break") break;
                }
            } else if (options.container && options.container.length !== 0) {
                (function() {
                    var labels = void 0;
                    if (typeof options.type === "string") {
                        labels = [ options.type ];
                    } else if (options.type instanceof Array) {
                        labels = options.type;
                    } else {
                        labels = [];
                    }
                    var containerElements = (0, _util.getElements)(options.container);
                    if (containerElements.length) {
                        containerElements.forEach(function(container, i) {
                            if (container.tagName && container.tagName.toLowerCase() === "a") {
                                (0, _log.logWarning)("container_a_tag");
                            }
                            buttons.push({
                                el: renderButton(id, container, options, labels[i]),
                                click: options.click,
                                condition: options.condition
                            });
                        });
                    } else {
                        (0, _log.logWarning)("button_container_not_found", {
                            container: JSON.stringify(options.container)
                        });
                    }
                })();
            }
            return buttons;
        });
    }
}, /*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setup = setup;
    var _client = __webpack_require__(/*! beaver-logger/client */ 69);
    var _client2 = _interopRequireDefault(_client);
    var _config = __webpack_require__(/*! ./config */ 63);
    var _bridge = __webpack_require__(/*! ./bridge */ 79);
    var _lib = __webpack_require__(/*! ./lib */ 65);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function domainToEnv(domain) {
        for (var _iterator = Object.keys(_config.config.paypalUrls), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
            var _ref;
            if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
            }
            var env = _ref;
            if (_config.config.paypalUrls[env] === domain) {
                return env;
            }
        }
    }
    function setDomainEnv(domain) {
        var currentDomainEnv = domainToEnv(domain);
        if (currentDomainEnv && currentDomainEnv !== "test") {
            _config.config.env = currentDomainEnv;
        }
    }
    setDomainEnv(window.location.protocol + "//" + window.location.host);
    function setup() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        if (options.env) {
            if (!_config.config.paypalUrls[options.env]) {
                throw new Error("Invalid env: " + options.env);
            }
            delete _config.config.env;
            _config.config.env = options.env;
        }
        if (options.stage) {
            delete _config.config.stage;
            _config.config.stage = options.stage;
            if (!options.env) {
                delete _config.config.env;
                _config.config.env = "stage";
            }
        }
        if (options.apiStage) {
            delete _config.config.apiStage;
            _config.config.apiStage = options.apiStage;
        }
        if (options.paypalUrl) {
            delete _config.config.paypalUrl;
            _config.config.paypalUrl = options.paypalUrl;
            setDomainEnv(_config.config.paypalUrl);
        }
        if (options.state) {
            delete _config.config.state;
            _config.config.state = options.state;
        }
        if (options.noBridge) {
            delete _config.config.enableBridge;
            _config.config.enableBridge = false;
        }
        if (options.ppobjects) {
            _config.config.ppobjects = true;
        }
        _client2["default"].info("paypal_setup_" + _config.config.env);
        if (_config.config.enableBridge) {
            (0, _bridge.setupBridge)(_config.config.env, _config.config.bridgeUrl);
        }
        (0, _lib.initLogger)();
    }
    function getCurrentScript() {
        var scripts = Array.prototype.slice.call(document.getElementsByTagName("script"));
        for (var _iterator2 = scripts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
            var _ref2;
            if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
            }
            var script = _ref2;
            if (script.src && script.src.replace(/^https?:/, "") === _config.config.scriptUrl || script.hasAttribute("data-paypal-checkout")) {
                return script;
            }
        }
    }
    var currentScript = getCurrentScript();
    if (currentScript) {
        setup({
            env: currentScript.getAttribute("data-env"),
            stage: currentScript.getAttribute("data-stage"),
            apiStage: currentScript.getAttribute("data-api-stage"),
            paypalUrl: currentScript.getAttribute("data-paypal-url"),
            noBridge: currentScript.hasAttribute("data-no-bridge"),
            state: currentScript.getAttribute("data-state"),
            ppobjects: true
        });
    } else {
        _client2["default"].debug("paypal_no_current_script");
    }
}, /*!****************************!*\
  !*** ./src/eligibility.js ***!
  \****************************/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    exports.isEligible = isEligible;
    var _lib = __webpack_require__(/*! ./lib */ 65);
    var _config = __webpack_require__(/*! ./config */ 63);
    function isEligible() {
        var currentAgent = (0, _lib.getAgent)();
        if ((typeof currentAgent === "undefined" ? "undefined" : _typeof(currentAgent)) === "object" && currentAgent.length === 2) {
            if (parseFloat(currentAgent[1]) < _config.config.SUPPORTED_AGENTS[currentAgent[0]]) {
                return false;
            }
        }
        return !(0, _lib.isWebView)();
    }
}, /*!*************************!*\
  !*** ./src/fallback.js ***!
  \*************************/
function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _src = __webpack_require__(/*! post-robot/src */ 9);
    var _src2 = _interopRequireDefault(_src);
    var _bridge = __webpack_require__(/*! ./bridge */ 79);
    var _lib = __webpack_require__(/*! ./lib */ 65);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            "default": obj
        };
    }
    function match(str, pattern) {
        var regmatch = str.match(pattern);
        if (regmatch) {
            return regmatch[1];
        }
    }
    window.onLegacyPaymentAuthorize = function(method) {
        _bridge.bridge.then(function(bridgeWindow) {
            _src2["default"].send(bridgeWindow, "onLegacyPaymentAuthorize", {
                method: method
            });
        });
    };
    function onLegacyFallback(win) {
        var onLegacyPaymentAuthorize = void 0;
        window.onLegacyPaymentAuthorize = function(method) {
            onLegacyPaymentAuthorize = method;
        };
        _src2["default"].once("onLegacyPaymentAuthorize", {
            window: window.parent
        }).then(function(_ref) {
            var data = _ref.data;
            onLegacyPaymentAuthorize = data.method;
        });
        var interval = setInterval(function() {
            try {
                var _ret = function() {
                    var isLegacy = win.document.body.innerHTML.indexOf("merchantpaymentweb") !== -1 || win.document.body.innerHTML.indexOf("wapapp") !== -1;
                    if (!isLegacy) {
                        return {
                            v: void 0
                        };
                    }
                    clearInterval(interval);
                    var send = win.XMLHttpRequest.prototype.send;
                    win.XMLHttpRequest.prototype.send = function() {
                        if (this._patched) {
                            return send.apply(this, arguments);
                        }
                        this._patched = true;
                        var self = this;
                        var onload = this.onload;
                        function listener() {
                            if (self.readyState === self.DONE && self.status === 200 && self.responseText) {
                                try {
                                    var response = JSON.parse(self.responseText.replace("while (1);", ""));
                                    if (response.type === "redirect" && response.url && onLegacyPaymentAuthorize) {
                                        var url = response.url;
                                        onLegacyPaymentAuthorize({
                                            returnUrl: url,
                                            paymentToken: match(url, /token=((EC-)?[A-Z0-9]+)/),
                                            billingToken: match(url, /ba_token=((BA-)?[A-Z0-9]+)/),
                                            payerID: match(url, /PayerID=([A-Z0-9]+)/),
                                            paymentID: match(url, /paymentId=((PAY-)?[A-Z0-9]+)/)
                                        });
                                        if (win.PAYPAL && win.PAYPAL.Checkout && win.PAYPAL.Checkout.XhrResponse && win.PAYPAL.Checkout.XhrResponse.RESPONSE_TYPES) {
                                            Object.defineProperty(win.PAYPAL.Checkout.XhrResponse.RESPONSE_TYPES, "Redirect", {
                                                get: function get() {
                                                    return Math.random();
                                                }
                                            });
                                        }
                                        if (win.mob && win.mob.Xhr && win.mob.Xhr.prototype._xhrOnReady) {
                                            win.mob.Xhr.prototype._xhrOnReady = function() {};
                                        }
                                        setTimeout(function() {
                                            if (!win.closed) {
                                                win.close();
                                            }
                                        }, 500);
                                        return;
                                    }
                                } catch (err) {
                                    return;
                                }
                            }
                            if (onload) {
                                return onload.apply(this, arguments);
                            }
                        }
                        if (this.onload !== listener) {
                            try {
                                delete this.onload;
                                this.onload = listener;
                                Object.defineProperty(this, "onload", {
                                    get: function get() {
                                        return listener;
                                    },
                                    set: function set(handler) {
                                        onload = handler;
                                    }
                                });
                            } catch (err) {}
                        }
                        return send.apply(this, arguments);
                    };
                }();
                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            } catch (err) {}
        }, 1e3);
    }
    if ((0, _lib.isPayPalDomain)()) {
        window.onLegacyFallback = onLegacyFallback;
    }
} ]);