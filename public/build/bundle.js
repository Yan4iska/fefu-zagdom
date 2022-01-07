/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scripts/main.js":
/*!***********************************!*\
  !*** ./resources/scripts/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit */ "./resources/scripts/uikit.js");

console.log('hello, world!');

/***/ }),

/***/ "./resources/scripts/uikit.js":
/*!************************************!*\
  !*** ./resources/scripts/uikit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit-core */ "./node_modules/uikit/dist/js/uikit-core.js");
/* harmony import */ var uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/dist/js/components/lightbox */ "./node_modules/uikit/dist/js/components/lightbox.js");
/* harmony import */ var uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1__);


uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default().compponent('lightbox', (uikit_dist_js_components_lightbox__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((uikit_dist_js_uikit_core__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./resources/styles/main.scss":
/*!************************************!*\
  !*** ./resources/styles/main.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uikit/dist/js/components/lightbox.js":
/*!***********************************************************!*\
  !*** ./node_modules/uikit/dist/js/components/lightbox.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! UIkit 3.9.4 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory(__webpack_require__(/*! uikit-util */ "./node_modules/uikit/src/js/util/index.js")) :
    0;
})(this, (function (uikitUtil) { 'use strict';

    var Animations$1 = {

        slide: {

            show: function(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function(current) {
                return translated(current);
            },

            translate: function(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        }

    };

    function translated(el) {
        return Math.abs(uikitUtil.css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {
        if ( value === void 0 ) value = 0;
        if ( unit === void 0 ) unit = '%';

        value += value ? unit : '';
        return uikitUtil.isIE ? ("translateX(" + value + ")") : ("translate3d(" + value + ", 0, 0)"); // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
    }

    function scale3d(value) {
        return ("scale3d(" + value + ", " + value + ", 1)");
    }

    var Animations = uikitUtil.assign({}, Animations$1, {

        fade: {

            show: function() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function(current) {
                return 1 - uikitUtil.css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function(current) {
                return 1 - uikitUtil.css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && uikitUtil.$(container);
            }

        }

    };

    var Class = {

        connected: function() {
            !uikitUtil.hasClass(this.$el, this.$name) && uikitUtil.addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            clsEnter: 'uk-togglabe-enter',
            clsLeave: 'uk-togglabe-leave',

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, toggle, animate) {
                var this$1$1 = this;

                return new uikitUtil.Promise(function (resolve) { return uikitUtil.Promise.all(uikitUtil.toNodes(targets).map(function (el) {

                        var show = uikitUtil.isBoolean(toggle) ? toggle : !this$1$1.isToggled(el);

                        if (!uikitUtil.trigger(el, ("before" + (show ? 'show' : 'hide')), [this$1$1])) {
                            return uikitUtil.Promise.reject();
                        }

                        var promise = (
                            uikitUtil.isFunction(animate)
                                ? animate
                                : animate === false || !this$1$1.hasAnimation
                                ? this$1$1._toggle
                                : this$1$1.hasTransition
                                    ? toggleHeight(this$1$1)
                                    : toggleAnimation(this$1$1)
                        )(el, show);

                        var cls = show ? this$1$1.clsEnter : this$1$1.clsLeave;

                        uikitUtil.addClass(el, cls);

                        uikitUtil.trigger(el, show ? 'show' : 'hide', [this$1$1]);

                        var done = function () {
                            uikitUtil.removeClass(el, cls);
                            uikitUtil.trigger(el, show ? 'shown' : 'hidden', [this$1$1]);
                            this$1$1.$update(el);
                        };

                        return promise ? promise.then(done, function () {
                            uikitUtil.removeClass(el, cls);
                            return uikitUtil.Promise.reject();
                        }) : done();

                    })).then(resolve, uikitUtil.noop); }
                );
            },

            isToggled: function(el) {
                var assign;

                if ( el === void 0 ) el = this.$el;
                (assign = uikitUtil.toNodes(el), el = assign[0]);
                return uikitUtil.hasClass(el, this.clsEnter)
                    ? true
                    : uikitUtil.hasClass(el, this.clsLeave)
                        ? false
                        : this.cls
                            ? uikitUtil.hasClass(el, this.cls.split(' ')[0])
                            : uikitUtil.isVisible(el);
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = uikitUtil.includes(this.cls, ' ') || toggled !== uikitUtil.hasClass(el, this.cls);
                    changed && uikitUtil.toggleClass(el, this.cls, uikitUtil.includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === el.hidden;
                    changed && (el.hidden = !toggled);
                }

                uikitUtil.$$('[autofocus]', el).some(function (el) { return uikitUtil.isVisible(el) ? el.focus() || true : el.blur(); });

                if (changed) {
                    uikitUtil.trigger(el, 'toggled', [toggled, this]);
                    this.$update(el);
                }
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = uikitUtil.Transition.inProgress(el);
            var inner = el.hasChildNodes ? uikitUtil.toFloat(uikitUtil.css(el.firstElementChild, 'marginTop')) + uikitUtil.toFloat(uikitUtil.css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = uikitUtil.isVisible(el) ? uikitUtil.height(el) + (inProgress ? 0 : inner) : 0;

            uikitUtil.Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            uikitUtil.height(el, '');

            // Update child components first
            uikitUtil.fastdom.flush();

            var endHeight = uikitUtil.height(el) + (inProgress ? 0 : inner);
            uikitUtil.height(el, currentHeight);

            return (show
                ? uikitUtil.Transition.start(el, uikitUtil.assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                : uikitUtil.Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return uikitUtil.css(el, initProps); });

        };
    }

    function toggleAnimation(cmp) {
        return function (el, show) {

            uikitUtil.Animation.cancel(el);

            var animation = cmp.animation;
            var duration = cmp.duration;
            var _toggle = cmp._toggle;

            if (show) {
                _toggle(el, true);
                return uikitUtil.Animation.in(el, animation[0], duration, cmp.origin);
            }

            return uikitUtil.Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () { return _toggle(el, false); });
        };
    }

    var active = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return uikitUtil.$(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (uikitUtil.includes(active, this)) {
                this.toggleElement(this.$el, false, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();

                    if (this.isToggled() === uikitUtil.includes(active, this)) {
                        this.toggle();
                    }
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (uikitUtil.includes(active, this)) {
                        return false;
                    }

                    if (!this.stack && active.length) {
                        uikitUtil.Promise.all(active.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1$1 = this;


                    var docEl = document.documentElement;

                    if (uikitUtil.width(window) > docEl.clientWidth && this.overlay) {
                        uikitUtil.css(document.body, 'overflowY', 'scroll');
                    }

                    if (this.stack) {
                        uikitUtil.css(this.$el, 'zIndex', uikitUtil.toFloat(uikitUtil.css(this.$el, 'zIndex')) + active.length);
                    }

                    uikitUtil.addClass(docEl, this.clsPage);

                    if (this.bgClose) {
                        uikitUtil.once(this.$el, 'hide', uikitUtil.on(document, uikitUtil.pointerDown, function (ref) {
                            var target = ref.target;


                            if (uikitUtil.last(active) !== this$1$1 || this$1$1.overlay && !uikitUtil.within(target, this$1$1.$el) || uikitUtil.within(target, this$1$1.panel)) {
                                return;
                            }

                            uikitUtil.once(document, (uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " scroll"), function (ref) {
                                var defaultPrevented = ref.defaultPrevented;
                                var type = ref.type;
                                var newTarget = ref.target;

                                if (!defaultPrevented && type === uikitUtil.pointerUp && target === newTarget) {
                                    this$1$1.hide();
                                }
                            }, true);

                        }), {self: true});
                    }

                    if (this.escClose) {
                        uikitUtil.once(this.$el, 'hide', uikitUtil.on(document, 'keydown', function (e) {
                            if (e.keyCode === 27 && uikitUtil.last(active) === this$1$1) {
                                this$1$1.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {
                name: 'shown',

                self: true,

                handler: function() {
                    if (!uikitUtil.isFocusable(this.$el)) {
                        uikitUtil.attr(this.$el, 'tabindex', '-1');
                    }

                    if (!uikitUtil.$(':focus', this.$el)) {
                        this.$el.focus();
                    }
                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1$1 = this;


                    if (uikitUtil.includes(active, this)) {
                        active.splice(active.indexOf(this), 1);
                    }

                    if (!active.length) {
                        uikitUtil.css(document.body, 'overflowY', '');
                    }

                    uikitUtil.css(this.$el, 'zIndex', '');

                    if (!active.some(function (modal) { return modal.clsPage === this$1$1.clsPage; })) {
                        uikitUtil.removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1$1 = this;

                if (this.container && uikitUtil.parent(this.$el) !== this.container) {
                    uikitUtil.append(this.container, this.$el);
                    return new uikitUtil.Promise(function (resolve) { return requestAnimationFrame(function () { return this$1$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate(this));
            }

        }

    };

    function animate(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new uikitUtil.Promise(function (resolve, reject) { return uikitUtil.once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = uikitUtil.once(transitionElement, 'transitionstart', function () {
                        uikitUtil.once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, uikitUtil.toMs(uikitUtil.css(transitionElement, 'transitionDuration')));

                }); }
            ).then(function () { return delete el._reject; }); };
    }

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = uikitUtil.noop;
        var props = show(dir);
        var deferred = new uikitUtil.Deferred();

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                var this$1$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * uikitUtil.clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                uikitUtil.Promise.all([
                    uikitUtil.Transition.start(next, props[1], duration, timing),
                    uikitUtil.Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1$1.reset();
                    deferred.resolve();
                }, uikitUtil.noop);

                return deferred.promise;
            },

            cancel: function() {
                uikitUtil.Transition.cancel([next, prev]);
            },

            reset: function() {
                for (var prop in props[0]) {
                    uikitUtil.css([next, prev], prop, '');
                }
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                uikitUtil.Transition.cancel([next, prev]);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                this.reset();

                var props = translate(percent, dir);
                uikitUtil.css(next, props[1]);
                uikitUtil.css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function() {
                return percent(prev || next, next, dir);
            },

            getDistance: function() {
                return prev && prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        uikitUtil.trigger(el, uikitUtil.createEvent(type, false, false, data));
    }

    var SliderAutoplay = {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        data: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function() {
            this.autoplay && this.startAutoplay();
        },

        disconnected: function() {
            this.stopAutoplay();
        },

        update: function() {
            uikitUtil.attr(this.slides, 'tabindex', '-1');
        },

        events: [

            {

                name: 'visibilitychange',

                el: function() {
                    return document;
                },

                filter: function() {
                    return this.autoplay;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            }

        ],

        methods: {

            startAutoplay: function() {
                var this$1$1 = this;


                this.stopAutoplay();

                this.interval = setInterval(
                    function () { return (!this$1$1.draggable || !uikitUtil.$(':focus', this$1$1.$el))
                        && (!this$1$1.pauseOnHover || !uikitUtil.matches(this$1$1.$el, ':hover'))
                        && !this$1$1.stack.length
                        && this$1$1.show('next'); },
                    this.autoplayInterval
                );

            },

            stopAutoplay: function() {
                this.interval && clearInterval(this.interval);
            }

        }

    };

    var SliderDrag = {

        props: {
            draggable: Boolean
        },

        data: {
            draggable: true,
            threshold: 10
        },

        created: function() {
            var this$1$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1$1[key];
                this$1$1[key] = function (e) {

                    var pos = uikitUtil.getEventPos(e).x * (uikitUtil.isRtl ? -1 : 1);

                    this$1$1.prevPos = pos !== this$1$1.pos ? this$1$1.pos : this$1$1.prevPos;
                    this$1$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: uikitUtil.pointerDown,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (!this.draggable
                        || !uikitUtil.isTouch(e) && hasTextNodesOnly(e.target)
                        || uikitUtil.closest(e.target, uikitUtil.selInput)
                        || e.button > 0
                        || this.length < 2
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {
                name: 'dragstart',

                handler: function(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function() {

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.cancel();
                    this._transitioner.translate(this.percent);

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                uikitUtil.on(document, uikitUtil.pointerMove, this.move, {passive: false});

                // 'input' event is triggered by video controls
                uikitUtil.on(document, (uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " input"), this.end, true);

                uikitUtil.css(this.list, 'userSelect', 'none');

            },

            move: function(e) {
                var this$1$1 = this;


                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                // prevent click event
                uikitUtil.css(this.list, 'pointerEvents', 'none');

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown;

                [this.index, this.prevIndex].filter(function (i) { return !uikitUtil.includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    uikitUtil.trigger(slides[i], 'itemhidden', [this$1$1]);

                    if (edge) {
                        itemShown = true;
                        this$1$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    uikitUtil.trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && uikitUtil.trigger(prev, 'beforeitemhide', [this]);
                    uikitUtil.trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && uikitUtil.trigger(prev, 'itemhide', [this]);
                    uikitUtil.trigger(next, 'itemshow', [this]);
                }

            },

            end: function() {

                uikitUtil.off(document, uikitUtil.pointerMove, this.move, {passive: false});
                uikitUtil.off(document, (uikitUtil.pointerUp + " " + uikitUtil.pointerCancel + " input"), this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (uikitUtil.isRtl ? this.dir * (uikitUtil.isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                }

                uikitUtil.css(this.list, {userSelect: '', pointerEvents: ''});

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {

        data: {
            selNav: false
        },

        computed: {

            nav: function(ref, $el) {
                var selNav = ref.selNav;

                return uikitUtil.$(selNav, $el);
            },

            selNavItem: function(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function(_, $el) {
                return uikitUtil.$$(this.selNavItem, $el);
            }

        },

        update: {

            write: function() {
                var this$1$1 = this;


                if (this.nav && this.length !== this.nav.children.length) {
                    uikitUtil.html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1$1.attrItem) + "=\"" + i + "\"><a href></a></li>"); }).join(''));
                }

                this.navItems.concat(this.nav).forEach(function (el) { return el && (el.hidden = !this$1$1.maxIndex); });

                this.updateNav();

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selNavItem;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(uikitUtil.data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function() {
                var this$1$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = uikitUtil.data(el, this$1$1.attrItem);

                    uikitUtil.toggleClass(el, this$1$1.clsActive, uikitUtil.toNumber(cmd) === i);
                    uikitUtil.toggleClass(el, 'uk-invisible', this$1$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1$1.maxIndex));
                });

            }

        }

    };

    var Slider = {

        mixins: [SliderAutoplay, SliderDrag, SliderNav],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },

        data: function () { return ({
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        }); },

        connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.$props.index);
            this.stack = [];
        },

        disconnected: function() {
            uikitUtil.removeClass(this.slides, this.clsActive);
        },

        computed: {

            duration: function(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            list: function(ref, $el) {
                var selList = ref.selList;

                return uikitUtil.$(selList, $el);
            },

            maxIndex: function() {
                return this.length - 1;
            },

            selSlides: function(ref) {
                var selList = ref.selList;
                var selSlides = ref.selSlides;

                return (selList + " " + (selSlides || '> *'));
            },

            slides: {

                get: function() {
                    return uikitUtil.$$(this.selSlides, this.$el);
                },

                watch: function() {
                    this.$reset();
                }

            },

            length: function() {
                return this.slides.length;
            }

        },

        events: {

            itemshown: function() {
                this.$update(this.list);
            }

        },

        methods: {

            show: function(index, force) {
                var this$1$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.getIndex(this.index);
                var prev = uikitUtil.hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                if (prev && !uikitUtil.trigger(prev, 'beforeitemhide', [this])
                    || !uikitUtil.trigger(next, 'beforeitemshow', [this, prev])
                ) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && uikitUtil.trigger(prev, 'itemhidden', [this$1$1]);
                    uikitUtil.trigger(next, 'itemshown', [this$1$1]);

                    return new uikitUtil.Promise(function (resolve) {
                        uikitUtil.fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1$1.show(stack.shift(), true);
                            } else {
                                this$1$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && uikitUtil.trigger(prev, 'itemhide', [this]);
                uikitUtil.trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return uikitUtil.clamp(uikitUtil.getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    uikitUtil.assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._translate(1);
                    return uikitUtil.Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function(prev, next) {
                return this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    uikitUtil.isNumber(prev) ? this.slides[prev] : prev,
                    uikitUtil.isNumber(next) ? this.slides[next] : next,
                    dir * (uikitUtil.isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

    function speedUp(x) {
        return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {

        mixins: [Slider],

        props: {
            animation: String
        },

        data: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations$1,
            Transitioner: Transitioner
        },

        computed: {

            animation: function(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return uikitUtil.assign(Animations[animation] || Animations.slide, {name: animation});
            },

            transitionOptions: function() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function(ref) {
                var target = ref.target;

                this.$update(target);
            },

            beforeitemshow: function(ref) {
                var target = ref.target;

                uikitUtil.addClass(target, this.clsActive);
            },

            itemshown: function(ref) {
                var target = ref.target;

                uikitUtil.addClass(target, this.clsActivated);
            },

            itemhidden: function(ref) {
                var target = ref.target;

                uikitUtil.removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

    var LightboxPanel = {

        mixins: [Container, Modal, Togglable, Slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        data: function () { return ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            selCaption: '.uk-lightbox-caption',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        }); },

        created: function() {

            var $el = uikitUtil.$(this.template);
            var list = uikitUtil.$(this.selList, $el);
            this.items.forEach(function () { return uikitUtil.append(list, '<li>'); });

            this.$mount(uikitUtil.append(this.container, $el));

        },

        computed: {

            caption: function(ref, $el) {
                var selCaption = ref.selCaption;

                return uikitUtil.$(selCaption, $el);
            }

        },

        events: [

            {

                name: (uikitUtil.pointerMove + " " + uikitUtil.pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: function() {
                    this.showControls();
                }

            },

            {

                name: 'hide',

                self: true,

                handler: function() {

                    this.hideControls();

                    uikitUtil.removeClass(this.slides, this.clsActive);
                    uikitUtil.Transition.stop(this.slides);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    this.$destroy(true);
                }

            },

            {

                name: 'keyup',

                el: function() {
                    return document;
                },

                handler: function(e) {

                    if (!this.isToggled(this.$el) || !this.draggable) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'beforeitemshow',

                handler: function(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.draggable = false;

                    e.preventDefault();

                    this.toggleElement(this.$el, true, false);

                    this.animation = Animations['scale'];
                    uikitUtil.removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function() {

                    uikitUtil.html(this.caption, this.getItem().caption || '');

                    for (var j = -this.preload; j <= this.preload; j++) {
                        this.loadItem(this.index + j);
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function() {
                    this.draggable = this.$props.draggable;
                }

            },

            {

                name: 'itemload',

                handler: function(_, item) {
                    var this$1$1 = this;


                    var src = item.source;
                    var type = item.type;
                    var alt = item.alt; if ( alt === void 0 ) alt = '';
                    var poster = item.poster;
                    var attrs = item.attrs; if ( attrs === void 0 ) attrs = {};

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!src) {
                        return;
                    }

                    var matches;
                    var iframeAttrs = {
                        frameborder: '0',
                        allow: 'autoplay',
                        allowfullscreen: '',
                        style: 'max-width: 100%; box-sizing: border-box;',
                        'uk-responsive': '',
                        'uk-video': ("" + (this.videoAutoplay))
                    };

                    // Image
                    if (type === 'image' || src.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) {

                        uikitUtil.getImage(src, attrs.srcset, attrs.size).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                return this$1$1.setItem(item, createEl('img', uikitUtil.assign({src: src, width: width, height: height, alt: alt}, attrs)));
                        },
                            function () { return this$1$1.setError(item); }
                        );

                    // Video
                    } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {

                        var video = createEl('video', uikitUtil.assign({
                            src: src,
                            poster: poster,
                            controls: '',
                            playsinline: '',
                            'uk-video': ("" + (this.videoAutoplay))
                        }, attrs));

                        uikitUtil.on(video, 'loadedmetadata', function () {
                            uikitUtil.attr(video, {width: video.videoWidth, height: video.videoHeight});
                            this$1$1.setItem(item, video);
                        });
                        uikitUtil.on(video, 'error', function () { return this$1$1.setError(item); });

                    // Iframe
                    } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {

                        this.setItem(item, createEl('iframe', uikitUtil.assign({
                            src: src,
                            frameborder: '0',
                            allowfullscreen: '',
                            class: 'uk-lightbox-iframe'
                        }, attrs)));

                    // YouTube
                    } else if ((matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))) {

                        this.setItem(item, createEl('iframe', uikitUtil.assign({
                            src: ("https://www.youtube" + (matches[1] || '') + ".com/embed/" + (matches[2]) + (matches[3] ? ("?" + (matches[3])) : '')),
                            width: 1920,
                            height: 1080
                        }, iframeAttrs, attrs)));

                    // Vimeo
                    } else if ((matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))) {

                        uikitUtil.ajax(("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(src))), {
                            responseType: 'json',
                            withCredentials: false
                        }).then(
                            function (ref) {
                                var ref_response = ref.response;
                                var height = ref_response.height;
                                var width = ref_response.width;

                                return this$1$1.setItem(item, createEl('iframe', uikitUtil.assign({
                                src: ("https://player.vimeo.com/video/" + (matches[1]) + (matches[2] ? ("?" + (matches[2])) : '')),
                                width: width,
                                height: height
                            }, iframeAttrs, attrs)));
                        },
                            function () { return this$1$1.setError(item); }
                        );

                    }

                }

            }

        ],

        methods: {

            loadItem: function(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (!this.getSlide(item).childElementCount) {
                    uikitUtil.trigger(this.$el, 'itemload', [item]);
                }
            },

            getItem: function(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[uikitUtil.getIndex(index, this.slides)];
            },

            setItem: function(item, content) {
                uikitUtil.trigger(this.$el, 'itemloaded', [this, uikitUtil.html(this.getSlide(item), content) ]);
            },

            getSlide: function(item) {
                return this.slides[this.items.indexOf(item)];
            },

            setError: function(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                uikitUtil.addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function() {
                uikitUtil.removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    };

    function createEl(tag, attrs) {
        var el = uikitUtil.fragment(("<" + tag + ">"));
        uikitUtil.attr(el, attrs);
        return el;
    }

    var Component = {

        install: install,

        props: {toggle: String},

        data: {toggle: 'a'},

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return uikitUtil.$$(toggle, $el);
                },

                watch: function() {
                    this.hide();
                }

            }

        },

        disconnected: function() {
            this.hide();
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            }

        ],

        methods: {

            show: function(index) {
                var this$1$1 = this;


                var items = uikitUtil.uniqueBy(this.toggles.map(toItem), 'source');

                if (uikitUtil.isElement(index)) {
                    var ref = toItem(index);
                    var source = ref.source;
                    index = uikitUtil.findIndex(items, function (ref) {
                        var src = ref.source;

                        return source === src;
                    });
                }

                this.panel = this.panel || this.$create('lightboxPanel', uikitUtil.assign({}, this.$props, {items: items}));

                uikitUtil.on(this.panel.$el, 'hidden', function () { return this$1$1.panel = false; });

                return this.panel.show(index);

            },

            hide: function() {

                return this.panel && this.panel.hide();

            }

        }

    };

    function install(UIkit, Lightbox) {

        if (!UIkit.lightboxPanel) {
            UIkit.component('lightboxPanel', LightboxPanel);
        }

        uikitUtil.assign(
            Lightbox.props,
            UIkit.component('lightboxPanel').options.props
        );

    }

    function toItem(el) {

        var item = {};

        ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
            item[attr === 'href' ? 'source' : attr] = uikitUtil.data(el, attr);
        });

        item.attrs = uikitUtil.parseOptions(item.attrs);

        return item;
    }

    if (typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.component('lightbox', Component);
    }

    return Component;

}));


/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit-core.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit-core.js ***!
  \**************************************************/
/***/ (function(module) {

/*! UIkit 3.9.4 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateRe = /\B([A-Z])/g;

    var hyphenate = memoize(function (str) { return str
        .replace(hyphenateRe, '-$1')
        .toLowerCase(); }
    );

    var camelizeRe = /-(\w)/g;

    var camelize = memoize(function (str) { return str.replace(camelizeRe, toUpper); }
    );

    var ucfirst = memoize(function (str) { return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''; }
    );

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return !!~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    var toString = objPrototype.toString;
    function isPlainObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return nodeType(obj) === 9;
    }

    function isNode(obj) {
        return nodeType(obj) >= 1;
    }

    function isElement(obj) {
        return nodeType(obj) === 1;
    }

    function nodeType(obj) {
        return !isWindow(obj) && isObject(obj) && obj.nodeType;
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isNumber(value) {
        return typeof value === 'number';
    }

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
    }

    function toBoolean(value) {
        return isBoolean(value)
            ? value
            : value === 'true' || value === '1' || value === ''
                ? true
                : value === 'false' || value === '0'
                    ? false
                    : value;
    }

    function toNumber(value) {
        var number = Number(value);
        return !isNaN(number) ? number : false;
    }

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    var toArray = Array.from || (function (value) { return arrPrototype.slice.call(value); });

    function toNode(element) {
        return toNodes(element)[0];
    }

    function toNodes(element) {
        return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
    }

    function toWindow(element) {
        if (isWindow(element)) {
            return element;
        }

        element = toNode(element);

        return element
            ? (isDocument(element)
                ? element
                : element.ownerDocument
            ).defaultView
            : window;
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(
            new RegExp((a + "|" + b), 'g'),
            function (match) { return match === a ? b : a; }
        );
    }

    var assign = Object.assign || function (target) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        target = Object(target);
        for (var i = 0; i < args.length; i++) {
            var source = args[i];
            if (source !== null) {
                for (var key in source) {
                    if (hasOwn(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy$1(array, prop) {
        return array.slice().sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect() {
        var rects = [], len = arguments.length;
        while ( len-- ) rects[ len ] = arguments[ len ];

        return [['bottom', 'top'], ['right', 'left']].every(function (ref) {
                var minProp = ref[0];
                var maxProp = ref[1];

                return Math.min.apply(Math, rects.map(function (ref) {
                var min = ref[minProp];

                return min;
                })) - Math.max.apply(Math, rects.map(function (ref) {
                var max = ref[maxProp];

                return max;
                })) > 0;
        }
        );
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function getIndex(i, elements, current, finite) {
        if ( current === void 0 ) current = 0;
        if ( finite === void 0 ) finite = false;


        elements = toNodes(elements);

        var length = elements.length;

        i = isNumeric(i)
            ? toNumber(i)
            : i === 'next'
                ? current + 1
                : i === 'previous'
                    ? current - 1
                    : elements.indexOf(toNode(i));

        if (finite) {
            return clamp(i, 0, length - 1);
        }

        i %= length;

        return i < 0 ? i + length : i;
    }

    function memoize(fn) {
        var cache = Object.create(null);
        return function (key) { return cache[key] || (cache[key] = fn(key)); };
    }

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var inBrowser = typeof window !== 'undefined';
    var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = inBrowser && 'ontouchstart' in window;
    var hasPointerEvents = inBrowser && window.PointerEvent;
    var hasTouch = inBrowser && (hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints); // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    var voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    function isVoidElement(element) {
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    var selFocusable = selInput + ",a[href],[tabindex]";
    function isFocusable(element) {
        return matches(element, selFocusable);
    }

    function parent(element) {
        element = toNode(element);
        return element && isElement(element.parentNode) && element.parentNode;
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    var elProto = inBrowser ? Element.prototype : {};
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

        } while ((ancestor = parent(ancestor)));
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isElement(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || !!closest(element, selector);
    }

    function parents(element, selector) {
        var elements = [];

        while ((element = parent(element))) {
            if (!selector || matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    function children(element, selector) {
        element = toNode(element);
        var children = element ? toNodes(element.children) : [];
        return selector ? filter(children, selector) : children;
    }

    function index(element, ref) {
        return ref
            ? toNodes(element).indexOf(toNode(ref))
            : children(parent(element)).indexOf(element);
    }

    function query(selector, context) {
        return find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        return findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isString(selector) && isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return selector;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        if (isContextSelector(selector)) {

            selector = splitSelector(selector).map(function (selector) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(parent(context), selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                return ((domPath(ctx)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    var isContextSelector = memoize(function (selector) { return selector.match(contextSelectorRe); });

    var selectorRe = /.*?[^\\](?:,|$)/g;

    var splitSelector = memoize(function (selector) { return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); }
        ); }
    );

    function domPath(element) {
        var names = [];
        while (element.parentNode) {
            if (element.id) {
                names.unshift(("#" + (escape(element.id))));
                break;
            } else {
                var tagName = element.tagName;
                if (tagName !== 'HTML') {
                    tagName += ":nth-child(" + (index(element) + 1) + ")";
                }
                names.unshift(tagName);
                element = element.parentNode;
            }
        }
        return names.join(' > ');
    }

    var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        if (selector) {
            listener = delegate(selector, listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(selector, listener) {
        var this$1$1 = this;

        return function (e) {

            var current = selector[0] === '>'
                ? findAll(selector, e.currentTarget).reverse().filter(function (element) { return within(e.target, element); })[0]
                : closest(e.target, selector);

            if (current) {
                e.current = current;
                listener.call(this$1$1, e);
            }

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [ e ].concat( e.detail )) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
            ? target.map(toEventTarget).filter(Boolean)
            : isString(target)
                ? findAll(target)
                : isEventTarget(target)
                    ? [target]
                    : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e) {
        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref.clientX;
        var y = ref.clientY;

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise$1 = inBrowser && window.Promise || PromiseFn;

    var Deferred = function() {
        var this$1$1 = this;

        this.promise = new Promise$1(function (resolve, reject) {
            this$1$1.reject = reject;
            this$1$1.resolve = resolve;
        });
    };

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0;
    var REJECTED = 1;
    var PENDING = 2;

    var async = inBrowser && window.setImmediate || setTimeout;

    function PromiseFn(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.deferred = [];

        var promise = this;

        try {
            executor(
                function (x) {
                    promise.resolve(x);
                },
                function (r) {
                    promise.reject(r);
                }
            );
        } catch (e) {
            promise.reject(e);
        }
    }

    PromiseFn.reject = function (r) {
        return new PromiseFn(function (resolve, reject) {
            reject(r);
        });
    };

    PromiseFn.resolve = function (x) {
        return new PromiseFn(function (resolve, reject) {
            resolve(x);
        });
    };

    PromiseFn.all = function all(iterable) {
        return new PromiseFn(function (resolve, reject) {
            var result = [];
            var count = 0;

            if (iterable.length === 0) {
                resolve(result);
            }

            function resolver(i) {
                return function (x) {
                    result[i] = x;
                    count += 1;

                    if (count === iterable.length) {
                        resolve(result);
                    }
                };
            }

            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
        });
    };

    PromiseFn.race = function race(iterable) {
        return new PromiseFn(function (resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
        });
    };

    var p = PromiseFn.prototype;

    p.resolve = function resolve(x) {
        var promise = this;

        if (promise.state === PENDING) {
            if (x === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            var called = false;

            try {
                var then = x && x.then;

                if (x !== null && isObject(x) && isFunction(then)) {
                    then.call(
                        x,
                        function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;
                        },
                        function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        }
                    );
                    return;
                }
            } catch (e) {
                if (!called) {
                    promise.reject(e);
                }
                return;
            }

            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
        }
    };

    p.reject = function reject(reason) {
        var promise = this;

        if (promise.state === PENDING) {
            if (reason === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
        }
    };

    p.notify = function notify() {
        var this$1$1 = this;

        async(function () {
            if (this$1$1.state !== PENDING) {
                while (this$1$1.deferred.length) {
                    var ref = this$1$1.deferred.shift();
                    var onResolved = ref[0];
                    var onRejected = ref[1];
                    var resolve = ref[2];
                    var reject = ref[3];

                    try {
                        if (this$1$1.state === RESOLVED) {
                            if (isFunction(onResolved)) {
                                resolve(onResolved.call(undefined, this$1$1.value));
                            } else {
                                resolve(this$1$1.value);
                            }
                        } else if (this$1$1.state === REJECTED) {
                            if (isFunction(onRejected)) {
                                resolve(onRejected.call(undefined, this$1$1.value));
                            } else {
                                reject(this$1$1.value);
                            }
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        });
    };

    p.then = function then(onResolved, onRejected) {
        var this$1$1 = this;

        return new PromiseFn(function (resolve, reject) {
            this$1$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1$1.notify();
        });
    };

    p.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };

    function ajax(url, options) {

        var env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        return Promise$1.resolve()
            .then(function () { return env.beforeSend(env); })
            .then(function () { return send(url, env); });
    }

    function send(url, env) {
        return new Promise$1(function (resolve, reject) {
            var xhr = env.xhr;

            for (var prop in env) {
                if (prop in xhr) {
                    try {

                        xhr[prop] = env[prop];

                    } catch (e) {}
                }
            }

            xhr.open(env.method.toUpperCase(), url);

            for (var header in env.headers) {
                xhr.setRequestHeader(header, env.headers[header]);
            }

            on(xhr, 'load', function () {

                if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {

                    // IE 11 does not support responseType 'json'
                    if (env.responseType === 'json' && isString(xhr.response)) {
                        xhr = assign(copyXhr(xhr), {response: JSON.parse(xhr.response)});
                    }

                    resolve(xhr);

                } else {
                    reject(assign(Error(xhr.statusText), {
                        xhr: xhr,
                        status: xhr.status
                    }));
                }

            });

            on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
            on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

            xhr.send(env.data);
        });
    }

    function getImage(src, srcset, sizes) {

        return new Promise$1(function (resolve, reject) {
            var img = new Image();

            img.onerror = function (e) { return reject(e); };
            img.onload = function () { return resolve(img); };

            sizes && (img.sizes = sizes);
            srcset && (img.srcset = srcset);
            img.src = src;
        });

    }

    function copyXhr(source) {
        var target = {};
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }

    function ready(fn) {

        if (document.readyState !== 'loading') {
            fn();
            return;
        }

        var unbind = on(document, 'DOMContentLoaded', function () {
            unbind();
            fn();
        });
    }

    function empty(element) {
        element = $(element);
        element.innerHTML = '';
        return element;
    }

    function html(parent, html) {
        parent = $(parent);
        return isUndefined(html)
            ? parent.innerHTML
            : append(parent.hasChildNodes() ? empty(parent) : parent, html);
    }

    function prepend(parent, element) {

        parent = $(parent);

        if (!parent.hasChildNodes()) {
            return append(parent, element);
        } else {
            return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
        }
    }

    function append(parent, element) {
        parent = $(parent);
        return insertNodes(element, function (element) { return parent.appendChild(element); });
    }

    function before(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
    }

    function after(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.nextSibling
            ? before(ref.nextSibling, element)
            : append(ref.parentNode, element); }
        );
    }

    function insertNodes(element, fn) {
        element = isString(element) ? fragment(element) : element;
        return element
            ? 'length' in element
                ? toNodes(element).map(fn)
                : fn(element)
            : null;
    }

    function remove$1(element) {
        toNodes(element).forEach(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
    }

    function wrapAll(element, structure) {

        structure = toNode(before(element, structure));

        while (structure.firstChild) {
            structure = structure.firstChild;
        }

        append(structure, element);

        return structure;
    }

    function wrapInner(element, structure) {
        return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
        ));
    }

    function unwrap(element) {
        toNodes(element)
            .map(parent)
            .filter(function (value, index, self) { return self.indexOf(value) === index; })
            .forEach(function (parent) {
                before(parent, parent.childNodes);
                remove$1(parent);
            });
    }

    var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {

        var matches = singleTagRe.exec(html);
        if (matches) {
            return document.createElement(matches[1]);
        }

        var container = document.createElement('div');
        if (fragmentRe.test(html)) {
            container.insertAdjacentHTML('beforeend', html.trim());
        } else {
            container.textContent = html;
        }

        return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

    }

    function apply$1(node, fn) {

        if (!isElement(node)) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply$1(node, fn);
            node = next;
        }
    }

    function $(selector, context) {
        return isHtml(selector)
            ? toNode(fragment(selector))
            : find(selector, context);
    }

    function $$(selector, context) {
        return isHtml(selector)
            ? toNodes(fragment(selector))
            : findAll(selector, context);
    }

    function isHtml(str) {
        return isString(str) && (str[0] === '<' || str.match(/^\s*</));
    }

    function addClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply(element, args, 'add');
    }

    function removeClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply(element, args, 'remove');
    }

    function removeClasses(element, cls) {
        attr(element, 'class', function (value) { return (value || '').replace(new RegExp(("\\b" + cls + "\\b"), 'g'), ''); });
    }

    function replaceClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        args[0] && removeClass(element, args[0]);
        args[1] && addClass(element, args[1]);
    }

    function hasClass(element, cls) {
        var assign;

        (assign = getClasses(cls), cls = assign[0]);
        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            if (cls && nodes[n].classList.contains(cls)) {
                return true;
            }
        }
        return false;
    }

    function toggleClass(element, cls, force) {

        cls = getClasses(cls);

        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            var list = nodes[n].classList;
            for (var i = 0; i < cls.length; i++) {
                if (isUndefined(force)) {
                    list.toggle(cls[i]);
                } else if (supports.Force) {
                    list.toggle(cls[i], !!force);
                } else {
                    list[force ? 'add' : 'remove'](cls[i]);
                }
            }
        }
    }

    function apply(element, args, fn) {
        var ref;


        args = args.reduce(function (args, arg) { return args.concat(getClasses(arg)); }, []);

        var nodes = toNodes(element);
        var loop = function ( n ) {
            if (supports.Multiple) {
                (ref = nodes[n].classList)[fn].apply(ref, args);
            } else {
                args.forEach(function (cls) { return nodes[n].classList[fn](cls); });
            }
        };

        for (var n = 0; n < nodes.length; n++) loop( n );
    }

    function getClasses(str) {
        return String(str).split(/\s|,/).filter(Boolean);
    }

    // IE 11
    var supports = {

        get Multiple() {
            return this.get('Multiple');
        },

        get Force() {
            return this.get('Force');
        },

        get: function(key) {

            var ref = document.createElement('_');
            var classList = ref.classList;
            classList.add('a', 'b');
            classList.toggle('c', false);
            supports = {
                Multiple: classList.contains('b'),
                Force: !classList.contains('c')
            };

            return supports[key];
        }

    };

    var cssNumber = {
        'animation-iteration-count': true,
        'column-count': true,
        'fill-opacity': true,
        'flex-grow': true,
        'flex-shrink': true,
        'font-weight': true,
        'line-height': true,
        'opacity': true,
        'order': true,
        'orphans': true,
        'stroke-dasharray': true,
        'stroke-dashoffset': true,
        'widows': true,
        'z-index': true,
        'zoom': true
    };

    function css(element, property, value, priority) {
        if ( priority === void 0 ) priority = '';


        return toNodes(element).map(function (element) {

            if (isString(property)) {

                property = propName(property);

                if (isUndefined(value)) {
                    return getStyle(element, property);
                } else if (!value && !isNumber(value)) {
                    element.style.removeProperty(property);
                } else {
                    element.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? (value + "px") : value, priority);
                }

            } else if (isArray(property)) {

                var styles = getStyles(element);

                return property.reduce(function (props, property) {
                    props[property] = styles[propName(property)];
                    return props;
                }, {});

            } else if (isObject(property)) {
                priority = value;
                each(property, function (value, property) { return css(element, property, value, priority); });
            }

            return element;

        })[0];

    }

    function getStyles(element, pseudoElt) {
        return toWindow(element).getComputedStyle(element, pseudoElt);
    }

    function getStyle(element, property, pseudoElt) {
        return getStyles(element, pseudoElt)[property];
    }

    var parseCssVar = memoize(function (name) {
        /* usage in css: .uk-name:before { content:"xyz" } */

        var element = append(document.documentElement, fragment('<div>'));

        addClass(element, ("uk-" + name));

        var value = getStyle(element, 'content', ':before');

        remove$1(element);

        return value;
    });

    var propertyRe = /^\s*(["'])?(.*?)\1\s*$/;
    function getCssVar(name) {
        return (isIE
            ? parseCssVar(name)
            : getStyles(document.documentElement).getPropertyValue(("--uk-" + name))
        ).replace(propertyRe, '$2');
    }

    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
    var propName = memoize(function (name) { return vendorPropName(name); });

    var cssPrefixes = ['webkit', 'moz', 'ms'];

    function vendorPropName(name) {

        name = hyphenate(name);

        var ref = document.documentElement;
        var style = ref.style;

        if (name in style) {
            return name;
        }

        var i = cssPrefixes.length, prefixedName;

        while (i--) {
            prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
            if (prefixedName in style) {
                return prefixedName;
            }
        }
    }

    function transition(element, props, duration, timing) {
        if ( duration === void 0 ) duration = 400;
        if ( timing === void 0 ) timing = 'linear';


        return Promise$1.all(toNodes(element).map(function (element) { return new Promise$1(function (resolve, reject) {

                for (var name in props) {
                    var value = css(element, name);
                    if (value === '') {
                        css(element, name, value);
                    }
                }

                var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

                once(element, 'transitionend transitioncanceled', function (ref) {
                    var type = ref.type;

                    clearTimeout(timer);
                    removeClass(element, 'uk-transition');
                    css(element, {
                        transitionProperty: '',
                        transitionDuration: '',
                        transitionTimingFunction: ''
                    });
                    type === 'transitioncanceled' ? reject() : resolve(element);
                }, {self: true});

                addClass(element, 'uk-transition');
                css(element, assign({
                    transitionProperty: Object.keys(props).map(propName).join(','),
                    transitionDuration: (duration + "ms"),
                    transitionTimingFunction: timing
                }, props));

            }); }
        ));

    }

    var Transition = {

        start: transition,

        stop: function(element) {
            trigger(element, 'transitionend');
            return Promise$1.resolve();
        },

        cancel: function(element) {
            trigger(element, 'transitioncanceled');
        },

        inProgress: function(element) {
            return hasClass(element, 'uk-transition');
        }

    };

    var animationPrefix = 'uk-animation-';

    function animate$1(element, animation, duration, origin, out) {
        if ( duration === void 0 ) duration = 200;


        return Promise$1.all(toNodes(element).map(function (element) { return new Promise$1(function (resolve, reject) {

                trigger(element, 'animationcanceled');
                var timer = setTimeout(function () { return trigger(element, 'animationend'); }, duration);

                once(element, 'animationend animationcanceled', function (ref) {
                    var type = ref.type;


                    clearTimeout(timer);

                    type === 'animationcanceled' ? reject() : resolve(element);

                    css(element, 'animationDuration', '');
                    removeClasses(element, (animationPrefix + "\\S*"));

                }, {self: true});

                css(element, 'animationDuration', (duration + "ms"));
                addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

                if (startsWith(animation, animationPrefix)) {
                    origin && addClass(element, ("uk-transform-origin-" + origin));
                    out && addClass(element, (animationPrefix + "reverse"));
                }

            }); }
        ));

    }

    var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
    var Animation = {

        in: animate$1,

        out: function(element, animation, duration, origin) {
            return animate$1(element, animation, duration, origin, true);
        },

        inProgress: function(element) {
            return inProgress.test(attr(element, 'class'));
        },

        cancel: function(element) {
            trigger(element, 'animationcanceled');
        }

    };

    var dirs$1 = {
        width: ['left', 'right'],
        height: ['top', 'bottom']
    };

    function dimensions(element) {

        var rect = isElement(element)
            ? toNode(element).getBoundingClientRect()
            : {height: height(element), width: width(element), top: 0, left: 0};

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
            bottom: rect.top + rect.height,
            right: rect.left + rect.width
        };
    }

    function offset(element, coordinates) {

        var currentOffset = dimensions(element);

        if (element) {
            var ref = toWindow(element);
            var pageYOffset = ref.pageYOffset;
            var pageXOffset = ref.pageXOffset;
            var offsetBy = {height: pageYOffset, width: pageXOffset};

            for (var dir in dirs$1) {
                for (var i in dirs$1[dir]) {
                    currentOffset[dirs$1[dir][i]] += offsetBy[dir];
                }
            }
        }

        if (!coordinates) {
            return currentOffset;
        }

        var pos = css(element, 'position');

        each(css(element, ['left', 'top']), function (value, prop) { return css(element, prop, coordinates[prop]
                - currentOffset[prop]
                + toFloat(pos === 'absolute' && value === 'auto'
                    ? position(element)[prop]
                    : value)
            ); }
        );
    }

    function position(element) {

        var ref = offset(element);
        var top = ref.top;
        var left = ref.left;

        var ref$1 = toNode(element);
        var ref$1_ownerDocument = ref$1.ownerDocument;
        var body = ref$1_ownerDocument.body;
        var documentElement = ref$1_ownerDocument.documentElement;
        var offsetParent = ref$1.offsetParent;
        var parent = offsetParent || documentElement;

        while (parent && (parent === body || parent === documentElement) && css(parent, 'position') === 'static') {
            parent = parent.parentNode;
        }

        if (isElement(parent)) {
            var parentOffset = offset(parent);
            top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
            left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
        }

        return {
            top: top - toFloat(css(element, 'marginTop')),
            left: left - toFloat(css(element, 'marginLeft'))
        };
    }

    function offsetPosition(element) {
        var offset = [0, 0];

        element = toNode(element);

        do {

            offset[0] += element.offsetTop;
            offset[1] += element.offsetLeft;

            if (css(element, 'position') === 'fixed') {
                var win = toWindow(element);
                offset[0] += win.pageYOffset;
                offset[1] += win.pageXOffset;
                return offset;
            }

        } while ((element = element.offsetParent));

        return offset;
    }

    var height = dimension('height');
    var width = dimension('width');

    function dimension(prop) {
        var propName = ucfirst(prop);
        return function (element, value) {

            if (isUndefined(value)) {

                if (isWindow(element)) {
                    return element[("inner" + propName)];
                }

                if (isDocument(element)) {
                    var doc = element.documentElement;
                    return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)]);
                }

                element = toNode(element);

                value = css(element, prop);
                value = value === 'auto' ? element[("offset" + propName)] : toFloat(value) || 0;

                return value - boxModelAdjust(element, prop);

            } else {

                return css(element, prop, !value && value !== 0
                    ? ''
                    : +value + boxModelAdjust(element, prop) + 'px'
                );

            }

        };
    }

    function boxModelAdjust(element, prop, sizing) {
        if ( sizing === void 0 ) sizing = 'border-box';

        return css(element, 'boxSizing') === sizing
            ? dirs$1[prop].map(ucfirst).reduce(function (value, prop) { return value
                + toFloat(css(element, ("padding" + prop)))
                + toFloat(css(element, ("border" + prop + "Width"))); }
                , 0)
            : 0;
    }

    function flipPosition(pos) {
        for (var dir in dirs$1) {
            for (var i in dirs$1[dir]) {
                if (dirs$1[dir][i] === pos) {
                    return dirs$1[dir][1 - i];
                }
            }
        }
        return pos;
    }

    function toPx(value, property, element) {
        if ( property === void 0 ) property = 'width';
        if ( element === void 0 ) element = window;

        return isNumeric(value)
            ? +value
            : endsWith(value, 'vh')
                ? percent(height(toWindow(element)), value)
                : endsWith(value, 'vw')
                    ? percent(width(toWindow(element)), value)
                    : endsWith(value, '%')
                        ? percent(dimensions(element)[property], value)
                        : toFloat(value);
    }

    function percent(base, value) {
        return base * toFloat(value) / 100;
    }

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    var fastdom = {

        reads: [],
        writes: [],

        read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
        },

        write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
        },

        clear: function(task) {
            remove(this.reads, task);
            remove(this.writes, task);
        },

        flush: flush

    };

    function flush(recursion) {
        if ( recursion === void 0 ) recursion = 1;

        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0));

        fastdom.scheduled = false;

        if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(recursion + 1);
        }
    }

    var RECURSION_LIMIT = 4;
    function scheduleFlush(recursion) {

        if (fastdom.scheduled) {
            return;
        }

        fastdom.scheduled = true;
        if (recursion && recursion < RECURSION_LIMIT) {
            Promise$1.resolve().then(function () { return flush(recursion); });
        } else {
            requestAnimationFrame(function () { return flush(); });
        }

    }

    function runTasks(tasks) {
        var task;
        while ((task = tasks.shift())) {
            try {
                task();
            } catch (e) {
                console.error(e);
            }
        }
    }

    function remove(array, item) {
        var index = array.indexOf(item);
        return ~index && array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {

        positions: [],

        init: function() {
            var this$1$1 = this;


            this.positions = [];

            var position;
            this.unbind = on(document, 'mousemove', function (e) { return position = getEventPos(e); });
            this.interval = setInterval(function () {

                if (!position) {
                    return;
                }

                this$1$1.positions.push(position);

                if (this$1$1.positions.length > 5) {
                    this$1$1.positions.shift();
                }
            }, 50);

        },

        cancel: function() {
            this.unbind && this.unbind();
            this.interval && clearInterval(this.interval);
        },

        movesTo: function(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = target.getBoundingClientRect();
            var left = p.left;
            var right = p.right;
            var top = p.top;
            var bottom = p.bottom;

            var ref = this.positions;
            var prevPosition = ref[0];
            var position = last(this.positions);
            var path = [prevPosition, position];

            if (pointInRect(position, p)) {
                return false;
            }

            var diagonals = [[{x: left, y: top}, {x: right, y: bottom}], [{x: left, y: bottom}, {x: right, y: top}]];

            return diagonals.some(function (diagonal) {
                var intersection = intersect(path, diagonal);
                return intersection && pointInRect(intersection, p);
            });
        }

    };

    // Inspired by http://paulbourke.net/geometry/pointlineplane/
    function intersect(ref, ref$1) {
        var ref_0 = ref[0];
        var x1 = ref_0.x;
        var y1 = ref_0.y;
        var ref_1 = ref[1];
        var x2 = ref_1.x;
        var y2 = ref_1.y;
        var ref$1_0 = ref$1[0];
        var x3 = ref$1_0.x;
        var y3 = ref$1_0.y;
        var ref$1_1 = ref$1[1];
        var x4 = ref$1_1.x;
        var y4 = ref$1_1.y;


        var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

        // Lines are parallel
        if (denominator === 0) {
            return false;
        }

        var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

        if (ua < 0) {
            return false;
        }

        // Return an object with the x and y coordinates of the intersection
        return {x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1)};
    }

    var strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy = concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
        return sortBy$1(concatStrat(parentVal, isFunction(childVal) ? {read: childVal} : childVal), 'order');
    };

    // property strategy
    strats.props = function (parentVal, childVal) {

        if (isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed =
    strats.methods = function (parentVal, childVal) {
        return childVal
            ? parentVal
                ? assign({}, parentVal, childVal)
                : childVal
            : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {

        if (!vm) {

            if (!childVal) {
                return parentVal;
            }

            if (!parentVal) {
                return childVal;
            }

            return function (vm) {
                return mergeFnData(parentVal, childVal, vm);
            };

        }

        return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(
            isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal,
            isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal
        );
    }

    // concat strategy
    function concatStrat(parentVal, childVal) {

        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {

        var options = {};

        if (isFunction(child)) {
            child = child.options;
        }

        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }

        for (var key in parent) {
            mergeKey(key);
        }

        for (var key$1 in child) {
            if (!hasOwn(parent, key$1)) {
                mergeKey(key$1);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
        }

        return options;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.*)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && !isUndefined(value)) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    function play(el) {

        if (isIFrame(el)) {
            call(el, {func: 'playVideo', method: 'play'});
        }

        if (isHTML5(el)) {
            try {
                el.play().catch(noop);
            } catch (e) {}
        }

    }

    function pause(el) {

        if (isIFrame(el)) {
            call(el, {func: 'pauseVideo', method: 'pause'});
        }

        if (isHTML5(el)) {
            el.pause();
        }

    }

    function mute(el) {

        if (isIFrame(el)) {
            call(el, {func: 'mute', method: 'setVolume', value: 0});
        }

        if (isHTML5(el)) {
            el.muted = true;
        }

    }

    function isVideo(el) {
        return isHTML5(el) || isIFrame(el);
    }

    function isHTML5(el) {
        return el && el.tagName === 'VIDEO';
    }

    function isIFrame(el) {
        return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
    }

    function isYoutube(el) {
        return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }

    function isVimeo(el) {
        return !!el.src.match(/vimeo\.com\/video\/.*/);
    }

    function call(el, cmd) {
        enableApi(el).then(function () { return post(el, cmd); });
    }

    function post(el, cmd) {
        try {
            el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
        } catch (e) {}
    }

    var stateKey$1 = '_ukPlayer';
    var counter = 0;
    function enableApi(el) {

        if (el[stateKey$1]) {
            return el[stateKey$1];
        }

        var youtube = isYoutube(el);
        var vimeo = isVimeo(el);

        var id = ++counter;
        var poller;

        return el[stateKey$1] = new Promise$1(function (resolve) {

            youtube && once(el, 'load', function () {
                var listener = function () { return post(el, {event: 'listening', id: id}); };
                poller = setInterval(listener, 100);
                listener();
            });

            once(window, 'message', resolve, false, function (ref) {
                var data = ref.data;


                try {
                    data = JSON.parse(data);
                    return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
                } catch (e) {}

            });

            el.src = "" + (el.src) + (includes(el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id));

        }).then(function () { return clearInterval(poller); });
    }

    function isInView(element, offsetTop, offsetLeft) {
        if ( offsetTop === void 0 ) offsetTop = 0;
        if ( offsetLeft === void 0 ) offsetLeft = 0;


        if (!isVisible(element)) {
            return false;
        }

        return intersectRect.apply(void 0, scrollParents(element).map(function (parent) {

            var ref = offset(getViewport$1(parent));
            var top = ref.top;
            var left = ref.left;
            var bottom = ref.bottom;
            var right = ref.right;

            return {
                top: top - offsetTop,
                left: left - offsetLeft,
                bottom: bottom + offsetTop,
                right: right + offsetLeft
            };
        }).concat(offset(element)));
    }

    function scrollTop(element, top) {

        if (isWindow(element) || isDocument(element)) {
            element = getScrollingElement(element);
        } else {
            element = toNode(element);
        }

        element.scrollTop = top;
    }

    function scrollIntoView(element, ref) {
        if ( ref === void 0 ) ref = {};
        var offsetBy = ref.offset; if ( offsetBy === void 0 ) offsetBy = 0;


        var parents = isVisible(element) ? scrollParents(element) : [];
        return parents.reduce(function (fn, scrollElement, i) {

            var scrollTop = scrollElement.scrollTop;
            var scrollHeight = scrollElement.scrollHeight;
            var offsetHeight = scrollElement.offsetHeight;
            var maxScroll = scrollHeight - getViewportClientHeight(scrollElement);
            var ref = offset(parents[i - 1] || element);
            var elHeight = ref.height;
            var elTop = ref.top;

            var top = Math.ceil(
                elTop
                - offset(getViewport$1(scrollElement)).top
                - offsetBy
                + scrollTop
            );

            if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
                top += offsetBy;
            } else {
                offsetBy = 0;
            }

            if (top > maxScroll) {
                offsetBy -= top - maxScroll;
                top = maxScroll;
            } else if (top < 0) {
                offsetBy -= top;
                top = 0;
            }

            return function () { return scrollTo(scrollElement, top - scrollTop).then(fn); };

        }, function () { return Promise$1.resolve(); })();

        function scrollTo(element, top) {
            return new Promise$1(function (resolve) {

                var scroll = element.scrollTop;
                var duration = getDuration(Math.abs(top));
                var start = Date.now();

                (function step() {

                    var percent = ease(clamp((Date.now() - start) / duration));

                    scrollTop(element, scroll + top * percent);

                    // scroll more if we have not reached our destination
                    if (percent !== 1) {
                        requestAnimationFrame(step);
                    } else {
                        resolve();
                    }

                })();
            });
        }

        function getDuration(dist) {
            return 40 * Math.pow(dist, .375);
        }

        function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }

    }

    function scrolledOver(element, heightOffset) {
        if ( heightOffset === void 0 ) heightOffset = 0;


        if (!isVisible(element)) {
            return 0;
        }

        var ref = scrollParents(element, /auto|scroll/, true);
        var scrollElement = ref[0];
        var scrollHeight = scrollElement.scrollHeight;
        var scrollTop = scrollElement.scrollTop;
        var clientHeight = getViewportClientHeight(scrollElement);
        var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
        var viewportDist = Math.min(clientHeight, viewportTop + scrollTop);

        var top = viewportTop - viewportDist;
        var dist = Math.min(
            element.offsetHeight + heightOffset + viewportDist,
            scrollHeight - (viewportTop + scrollTop),
            scrollHeight - clientHeight
        );

        return clamp(-1 * top / dist);
    }

    function scrollParents(element, overflowRe, scrollable) {
        if ( overflowRe === void 0 ) overflowRe = /auto|scroll|hidden/;
        if ( scrollable === void 0 ) scrollable = false;

        var scrollEl = getScrollingElement(element);

        var ancestors = parents(element).reverse();
        ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

        var fixedIndex = findIndex(ancestors, function (el) { return css(el, 'position') === 'fixed'; });
        if (~fixedIndex) {
            ancestors = ancestors.slice(fixedIndex);
        }

        return [scrollEl].concat(ancestors.filter(function (parent) { return overflowRe.test(css(parent, 'overflow')) && (!scrollable || parent.scrollHeight > getViewportClientHeight(parent)); })
        ).reverse();
    }

    function getViewport$1(scrollElement) {
        return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
    }

    // iOS 12 returns <body> as scrollingElement
    function getViewportClientHeight(scrollElement) {
        return (scrollElement === getScrollingElement(scrollElement) ? document.documentElement : scrollElement).clientHeight;
    }

    function getScrollingElement(element) {
        var ref = toWindow(element);
        var document = ref.document;
        return document.scrollingElement || document.documentElement;
    }

    var dirs = {
        width: ['x', 'left', 'right'],
        height: ['y', 'top', 'bottom']
    };

    function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

        elAttach = getPos(elAttach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: elAttach, target: targetAttach};

        if (!element || !target) {
            return flipped;
        }

        var dim = offset(element);
        var targetDim = offset(target);
        var position = targetDim;

        moveTo(position, elAttach, dim, -1);
        moveTo(position, targetAttach, targetDim, 1);

        elOffset = getOffsets(elOffset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        elOffset['x'] += targetOffset['x'];
        elOffset['y'] += targetOffset['y'];

        position.left += elOffset['x'];
        position.top += elOffset['y'];

        if (flip) {

            var boundaries = scrollParents(element).map(getViewport$1);

            if (boundary && !includes(boundaries, boundary)) {
                boundaries.unshift(boundary);
            }

            boundaries = boundaries.map(function (el) { return offset(el); });

            each(dirs, function (ref, prop) {
                var dir = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || includes(flip, dir))) {
                    return;
                }

                boundaries.some(function (boundary) {

                    var elemOffset = elAttach[dir] === align
                        ? -dim[prop]
                        : elAttach[dir] === alignFlip
                            ? dim[prop]
                            : 0;

                    var targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                    if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                        var centerOffset = dim[prop] / 2;
                        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                        return elAttach[dir] === 'center' && (
                            apply(centerOffset, centerTargetOffset)
                            || apply(-centerOffset, -centerTargetOffset)
                        ) || apply(elemOffset, targetOffset);

                    }

                    function apply(elemOffset, targetOffset) {

                        var newVal = toFloat((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

                        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                            position[align] = newVal;

                            ['element', 'target'].forEach(function (el) {
                                flipped[el][dir] = !elemOffset
                                    ? flipped[el][dir]
                                    : flipped[el][dir] === dirs[prop][1]
                                        ? dirs[prop][2]
                                        : dirs[prop][1];
                            });

                            return true;
                        }

                    }

                });

            });
        }

        offset(element, position);

        return flipped;
    }

    function moveTo(position, attach, dim, factor) {
        each(dirs, function (ref, prop) {
            var dir = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];

            if (attach[dir] === alignFlip) {
                position[align] += dim[prop] * factor;
            } else if (attach[dir] === 'center') {
                position[align] += dim[prop] * factor / 2;
            }
        });
    }

    function getPos(pos) {

        var x = /left|center|right/;
        var y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat('center')
                : y.test(pos[0])
                    ? ['center'].concat(pos)
                    : ['center', 'center'];
        }

        return {
            x: x.test(pos[0]) ? pos[0] : 'center',
            y: y.test(pos[1]) ? pos[1] : 'center'
        };
    }

    function getOffsets(offsets, width, height) {

        var ref = (offsets || '').split(' ');
        var x = ref[0];
        var y = ref[1];

        return {
            x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
        };
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate$1,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        dimensions: dimensions,
        offset: offset,
        position: position,
        offsetPosition: offsetPosition,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        toPx: toPx,
        ready: ready,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove$1,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply$1,
        $: $,
        $$: $$,
        inBrowser: inBrowser,
        isIE: isIE,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        selFocusable: selFocusable,
        isFocusable: isFocusable,
        parent: parent,
        filter: filter,
        matches: matches,
        closest: closest,
        within: within,
        parents: parents,
        children: children,
        index: index,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isNode: isNode,
        isElement: isElement,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toArray: toArray,
        toNode: toNode,
        toNodes: toNodes,
        toWindow: toWindow,
        toMs: toMs,
        isEqual: isEqual,
        swap: swap,
        assign: assign,
        last: last,
        each: each,
        sortBy: sortBy$1,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        getIndex: getIndex,
        memoize: memoize,
        MouseTracker: MouseTracker,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        play: play,
        pause: pause,
        mute: mute,
        isVideo: isVideo,
        positionAt: positionAt,
        Promise: Promise$1,
        Deferred: Deferred,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        escape: escape,
        css: css,
        getCssVar: getCssVar,
        propName: propName,
        isInView: isInView,
        scrollTop: scrollTop,
        scrollIntoView: scrollIntoView,
        scrolledOver: scrolledOver,
        scrollParents: scrollParents,
        getViewport: getViewport$1,
        getViewportClientHeight: getViewportClientHeight
    });

    function globalAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.use = function (plugin) {

            if (plugin.installed) {
                return;
            }

            plugin.call(null, this);
            plugin.installed = true;

            return this;
        };

        UIkit.mixin = function (mixin, component) {
            component = (isString(component) ? UIkit.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this;
            var Sub = function UIkitComponent(options) {
                this._init(options);
            };

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);

            Sub.super = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (element, e) {

            element = element ? toNode(element) : document.body;

            parents(element).reverse().forEach(function (element) { return update(element[DATA], e); });
            apply$1(element, function (element) { return update(element[DATA], e); });

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function() {
                return container || document.body;
            },

            set: function(element) {
                container = $(element);
            }

        });

        function update(data, e) {

            if (!data) {
                return;
            }

            for (var name in data) {
                if (data[name]._connected) {
                    data[name]._callUpdate(e);
                }
            }

        }
    }

    function hooksAPI (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) { return handler.call(this$1$1); });
            }
        };

        UIkit.prototype._callConnected = function () {

            if (this._connected) {
                return;
            }

            this._data = {};
            this._computeds = {};

            this._initProps();

            this._callHook('beforeConnect');
            this._connected = true;

            this._initEvents();
            this._initObservers();

            this._callHook('connected');
            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            this._callHook('beforeDisconnect');
            this._disconnectObservers();
            this._unbindEvents();
            this._callHook('disconnected');

            this._connected = false;
            delete this._watch;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1$1 = this;
            if ( e === void 0 ) e = 'update';


            if (!this._connected) {
                return;
            }

            if (e === 'update' || e === 'resize') {
                this._callWatches();
            }

            if (!this.$options.update) {
                return;
            }

            if (!this._updates) {
                this._updates = new Set();
                fastdom.read(function () {
                    if (this$1$1._connected) {
                        runUpdates.call(this$1$1, this$1$1._updates);
                    }
                    delete this$1$1._updates;
                });
            }

            this._updates.add(e.type || e);
        };

        UIkit.prototype._callWatches = function () {
            var this$1$1 = this;


            if (this._watch) {
                return;
            }

            var initial = !hasOwn(this, '_watch');

            this._watch = fastdom.read(function () {
                if (this$1$1._connected) {
                    runWatches.call(this$1$1, initial);
                }
                this$1$1._watch = null;

            });

        };

        function runUpdates(types) {
            var this$1$1 = this;


            var updates = this.$options.update;

            var loop = function ( i ) {
                var ref = updates[i];
                var read = ref.read;
                var write = ref.write;
                var events = ref.events;

                if (!types.has('update') && (!events || !events.some(function (type) { return types.has(type); }))) {
                    return;
                }

                var result = (void 0);
                if (read) {

                    result = read.call(this$1$1, this$1$1._data, types);

                    if (result && isPlainObject(result)) {
                        assign(this$1$1._data, result);
                    }
                }

                if (write && result !== false) {
                    fastdom.write(function () { return write.call(this$1$1, this$1$1._data, types); });
                }

            };

            for (var i = 0; i < updates.length; i++) loop( i );
        }

        function runWatches(initial) {

            var ref = this;
            var computed = ref.$options.computed;
            var _computeds = ref._computeds;

            for (var key in computed) {

                var hasPrev = hasOwn(_computeds, key);
                var prev = _computeds[key];

                delete _computeds[key];

                var ref$1 = computed[key];
                var watch = ref$1.watch;
                var immediate = ref$1.immediate;
                if (watch && (
                    initial && immediate
                    || hasPrev && !isEqual(prev, this[key])
                )) {
                    watch.call(this, this[key], prev);
                }

            }
        }
    }

    function stateAPI (UIkit) {

        var uid = 0;

        UIkit.prototype._init = function (options) {

            options = options || {};
            options.data = normalizeData(options, this.constructor.options);

            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};

            this._uid = uid++;
            this._initData();
            this._initMethods();
            this._initComputeds();
            this._callHook('created');

            if (options.el) {
                this.$mount(options.el);
            }
        };

        UIkit.prototype._initData = function () {

            var ref = this.$options;
            var data = ref.data; if ( data === void 0 ) data = {};

            for (var key in data) {
                this.$props[key] = this[key] = data[key];
            }
        };

        UIkit.prototype._initMethods = function () {

            var ref = this.$options;
            var methods = ref.methods;

            if (methods) {
                for (var key in methods) {
                    this[key] = methods[key].bind(this);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {

            var ref = this.$options;
            var computed = ref.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this, key, computed[key]);
                }
            }
        };

        UIkit.prototype._initProps = function (props) {

            var key;

            props = props || getProps(this.$options, this.$name);

            for (key in props) {
                if (!isUndefined(props[key])) {
                    this.$props[key] = props[key];
                }
            }

            var exclude = [this.$options.computed, this.$options.methods];
            for (key in this.$props) {
                if (key in props && notIn(exclude, key)) {
                    this[key] = this.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function () {
            var this$1$1 = this;


            this._events = [];

            var ref = this.$options;
            var events = ref.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1$1, event[key], key);
                        }
                    } else {
                        registerEvent(this$1$1, event);
                    }

                });
            }
        };

        UIkit.prototype._unbindEvents = function () {
            this._events.forEach(function (unbind) { return unbind(); });
            delete this._events;
        };

        UIkit.prototype._initObservers = function () {
            this._observers = [
                initChildListObserver(this),
                initPropsObserver(this)
            ];
        };

        UIkit.prototype._disconnectObservers = function () {
            this._observers.forEach(function (observer) { return observer && observer.disconnect(); }
            );
        };

        function getProps(opts, name) {

            var data$1 = {};
            var args = opts.args; if ( args === void 0 ) args = [];
            var props = opts.props; if ( props === void 0 ) props = {};
            var el = opts.el;

            if (!props) {
                return data$1;
            }

            for (var key in props) {
                var prop = hyphenate(key);
                var value = data(el, prop);

                if (isUndefined(value)) {
                    continue;
                }

                value = props[key] === Boolean && value === ''
                    ? true
                    : coerce(props[key], value);

                if (prop === 'target' && (!value || startsWith(value, '_'))) {
                    continue;
                }

                data$1[key] = value;
            }

            var options = parseOptions(data(el, name), args);

            for (var key$1 in options) {
                var prop$1 = camelize(key$1);
                if (props[prop$1] !== undefined) {
                    data$1[prop$1] = coerce(props[prop$1], options[key$1]);
                }
            }

            return data$1;
        }

        function registerComputed(component, key, cb) {
            Object.defineProperty(component, key, {

                enumerable: true,

                get: function() {

                    var _computeds = component._computeds;
                    var $props = component.$props;
                    var $el = component.$el;

                    if (!hasOwn(_computeds, key)) {
                        _computeds[key] = (cb.get || cb).call(component, $props, $el);
                    }

                    return _computeds[key];
                },

                set: function(value) {

                    var _computeds = component._computeds;

                    _computeds[key] = cb.set ? cb.set.call(component, value) : value;

                    if (isUndefined(_computeds[key])) {
                        delete _computeds[key];
                    }
                }

            });
        }

        function registerEvent(component, event, key) {

            if (!isPlainObject(event)) {
                event = ({name: key, handler: event});
            }

            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate = event.delegate;
            var filter = event.filter;
            var self = event.self;
            el = isFunction(el)
                ? el.call(component)
                : el || component.$el;

            if (isArray(el)) {
                el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
                return;
            }

            if (!el || filter && !filter.call(component)) {
                return;
            }

            component._events.push(
                on(
                    el,
                    name,
                    !delegate
                        ? null
                        : isString(delegate)
                            ? delegate
                            : delegate.call(component),
                    isString(handler) ? component[handler] : handler.bind(component),
                    {passive: passive, capture: capture, self: self}
                )
            );

        }

        function notIn(options, key) {
            return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
        }

        function coerce(type, value) {

            if (type === Boolean) {
                return toBoolean(value);
            } else if (type === Number) {
                return toNumber(value);
            } else if (type === 'list') {
                return toList(value);
            }

            return type ? type(value) : value;
        }

        function toList(value) {
            return isArray(value)
                ? value
                : isString(value)
                    ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                        ? toNumber(value)
                        : toBoolean(value.trim()); })
                    : [value];
        }

        function normalizeData(ref, ref$1) {
            var data = ref.data;
            var args = ref$1.args;
            var props = ref$1.props; if ( props === void 0 ) props = {};

            data = isArray(data)
                ? !isEmpty(args)
                    ? data.slice(0, args.length).reduce(function (data, value, index) {
                        if (isPlainObject(value)) {
                            assign(data, value);
                        } else {
                            data[args[index]] = value;
                        }
                        return data;
                    }, {})
                    : undefined
                : data;

            if (data) {
                for (var key in data) {
                    if (isUndefined(data[key])) {
                        delete data[key];
                    } else {
                        data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
                    }
                }
            }

            return data;
        }

        function initChildListObserver(component) {
            var ref = component.$options;
            var el = ref.el;

            var observer = new MutationObserver(function () { return component.$emit(); });
            observer.observe(el, {
                childList: true,
                subtree: true
            });

            return observer;
        }

        function initPropsObserver(component) {

            var $name = component.$name;
            var $options = component.$options;
            var $props = component.$props;
            var attrs = $options.attrs;
            var props = $options.props;
            var el = $options.el;

            if (!props || attrs === false) {
                return;
            }

            var attributes = isArray(attrs) ? attrs : Object.keys(props);
            var filter = attributes.map(function (key) { return hyphenate(key); }).concat($name);

            var observer = new MutationObserver(function (records) {
                var data = getProps($options, $name);
                if (records.some(function (ref) {
                    var attributeName = ref.attributeName;

                    var prop = attributeName.replace('data-', '');
                    return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some(function (prop) { return !isUndefined(data[prop]) && data[prop] !== $props[prop]; }
                    );
                })) {
                    component.$reset();
                }
            });

            observer.observe(el, {
                attributes: true,
                attributeFilter: filter.concat(filter.map(function (key) { return ("data-" + key); }))
            });

            return observer;
        }
    }

    function instanceAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$create = function (component, element, data) {
            return UIkit[component](element, data);
        };

        UIkit.prototype.$mount = function (el) {

            var ref = this.$options;
            var name = ref.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                return;
            }

            el[DATA][name] = this;

            this.$el = this.$options.el = this.$options.el || el;

            if (within(el, document)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$reset = function () {
            this._callDisconnected();
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (removeEl) {
            if ( removeEl === void 0 ) removeEl = false;


            var ref = this.$options;
            var el = ref.el;
            var name = ref.name;

            if (el) {
                this._callDisconnected();
            }

            this._callHook('destroy');

            if (!el || !el[DATA]) {
                return;
            }

            delete el[DATA][name];

            if (!isEmpty(el[DATA])) {
                delete el[DATA];
            }

            if (removeEl) {
                remove$1(this.$el);
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$update = function (element, e) {
            if ( element === void 0 ) element = this.$el;

            UIkit.update(element, e);
        };

        UIkit.prototype.$getComponent = UIkit.getComponent;

        var componentName = memoize(function (name) { return UIkit.prefix + hyphenate(name); });
        Object.defineProperties(UIkit.prototype, {

            $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

            $name: {

                get: function() {
                    return componentName(this.$options.name);
                }

            }

        });

    }

    function componentAPI (UIkit) {

        var DATA = UIkit.data;

        var components = {};

        UIkit.component = function (name, options) {

            var id = hyphenate(name);

            name = camelize(id);

            if (!options) {

                if (isPlainObject(components[name])) {
                    components[name] = UIkit.extend(components[name]);
                }

                return components[name];

            }

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while ( i-- ) argsArray[i] = arguments[i];


                var component = UIkit.component(name);

                return component.options.functional
                    ? new component({data: isPlainObject(element) ? element : [].concat( argsArray )})
                    : !element ? init(element) : $$(element).map(init)[0];

                function init(element) {

                    var instance = UIkit.getComponent(element, name);

                    if (instance) {
                        if (!data) {
                            return instance;
                        } else {
                            instance.$destroy();
                        }
                    }

                    return new component({el: element, data: data});

                }

            };

            var opt = isPlainObject(options) ? assign({}, options) : options.options;

            opt.name = name;

            if (opt.install) {
                opt.install(UIkit, opt, name);
            }

            if (UIkit._initialized && !opt.functional) {
                fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
            }

            return components[name] = isPlainObject(options) ? opt : options;
        };

        UIkit.getComponents = function (element) { return element && element[DATA] || {}; };
        UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

        UIkit.connect = function (node) {

            if (node[DATA]) {
                for (var name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                var name$1 = getComponentName(node.attributes[i].name);

                if (name$1 && name$1 in components) {
                    UIkit[name$1](node);
                }

            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    }

    var getComponentName = memoize(function (attribute) {
        return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
            ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
            : false;
    });

    var UIkit = function (options) {
        this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};
    UIkit.version = '3.9.4';

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    function Core (UIkit) {

        if (!inBrowser) {
            return;
        }

        // throttle 'resize'
        var pendingResize;
        var handleResize = function () {
            if (pendingResize) {
                return;
            }
            pendingResize = true;
            fastdom.write(function () { return pendingResize = false; });
            UIkit.update(null, 'resize');
        };

        on(window, 'load resize', handleResize);
        on(document, 'loadedmetadata load', handleResize, true);

        if ('ResizeObserver' in window) {
            (new ResizeObserver(handleResize)).observe(document.documentElement);
        }

        // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)
        var pending;
        on(window, 'scroll', function (e) {

            if (pending) {
                return;
            }
            pending = true;
            fastdom.write(function () { return pending = false; });

            UIkit.update(null, e.type);

        }, {passive: true, capture: true});

        var started = 0;
        on(document, 'animationstart', function (ref) {
            var target = ref.target;

            if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                started++;
                css(document.documentElement, 'overflowX', 'hidden');
                setTimeout(function () {
                    if (!--started) {
                        css(document.documentElement, 'overflowX', '');
                    }
                }, toMs(css(target, 'animationDuration')) + 100);
            }
        }, true);

        on(document, pointerDown, function (e) {

            if (!isTouch(e)) {
                return;
            }

            // Handle Swipe Gesture
            var pos = getEventPos(e);
            var target = 'tagName' in e.target ? e.target : parent(e.target);
            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (e) {

                var ref = getEventPos(e);
                var x = ref.x;
                var y = ref.y;

                // swipe
                if (e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {

                    setTimeout(function () {
                        trigger(target, 'swipe');
                        trigger(target, ("swipe" + (swipeDirection(pos.x, pos.y, x, y))));
                    });

                }

            });

        }, {passive: true});

    }

    function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    function boot (UIkit) {

        var connect = UIkit.connect;
        var disconnect = UIkit.disconnect;

        if (!inBrowser || !window.MutationObserver) {
            return;
        }

        fastdom.read(function () {

            if (document.body) {
                apply$1(document.body, connect);
            }

            new MutationObserver(function (records) { return records.forEach(applyChildListMutation); }
            ).observe(document, {
                childList: true,
                subtree: true
            });

            new MutationObserver(function (records) { return records.forEach(applyAttributeMutation); }
            ).observe(document, {
                attributes: true,
                subtree: true
            });

            UIkit._initialized = true;
        });

        function applyChildListMutation(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;

            for (var i = 0; i < addedNodes.length; i++) {
                apply$1(addedNodes[i], connect);
            }

            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
                apply$1(removedNodes[i$1], disconnect);
            }
        }

        function applyAttributeMutation(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;


            var name = getComponentName(attributeName);

            if (!name || !(name in UIkit)) {
                return;
            }

            if (hasAttr(target, attributeName)) {
                UIkit[name](target);
                return;
            }

            var component = UIkit.getComponent(target, name);

            if (component) {
                component.$destroy();
            }

        }

    }

    var Class = {

        connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            clsEnter: 'uk-togglabe-enter',
            clsLeave: 'uk-togglabe-leave',

            initProps: {
                overflow: '',
                height: '',
                paddingTop: '',
                paddingBottom: '',
                marginTop: '',
                marginBottom: ''
            },

            hideProps: {
                overflow: 'hidden',
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }

        },

        computed: {

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, toggle, animate) {
                var this$1$1 = this;

                return new Promise$1(function (resolve) { return Promise$1.all(toNodes(targets).map(function (el) {

                        var show = isBoolean(toggle) ? toggle : !this$1$1.isToggled(el);

                        if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this$1$1])) {
                            return Promise$1.reject();
                        }

                        var promise = (
                            isFunction(animate)
                                ? animate
                                : animate === false || !this$1$1.hasAnimation
                                ? this$1$1._toggle
                                : this$1$1.hasTransition
                                    ? toggleHeight(this$1$1)
                                    : toggleAnimation(this$1$1)
                        )(el, show);

                        var cls = show ? this$1$1.clsEnter : this$1$1.clsLeave;

                        addClass(el, cls);

                        trigger(el, show ? 'show' : 'hide', [this$1$1]);

                        var done = function () {
                            removeClass(el, cls);
                            trigger(el, show ? 'shown' : 'hidden', [this$1$1]);
                            this$1$1.$update(el);
                        };

                        return promise ? promise.then(done, function () {
                            removeClass(el, cls);
                            return Promise$1.reject();
                        }) : done();

                    })).then(resolve, noop); }
                );
            },

            isToggled: function(el) {
                var assign;

                if ( el === void 0 ) el = this.$el;
                (assign = toNodes(el), el = assign[0]);
                return hasClass(el, this.clsEnter)
                    ? true
                    : hasClass(el, this.clsLeave)
                        ? false
                        : this.cls
                            ? hasClass(el, this.cls.split(' ')[0])
                            : isVisible(el);
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
                    changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === el.hidden;
                    changed && (el.hidden = !toggled);
                }

                $$('[autofocus]', el).some(function (el) { return isVisible(el) ? el.focus() || true : el.blur(); });

                if (changed) {
                    trigger(el, 'toggled', [toggled, this]);
                    this.$update(el);
                }
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                ? Transition.start(el, assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return css(el, initProps); });

        };
    }

    function toggleAnimation(cmp) {
        return function (el, show) {

            Animation.cancel(el);

            var animation = cmp.animation;
            var duration = cmp.duration;
            var _toggle = cmp._toggle;

            if (show) {
                _toggle(el, true);
                return Animation.in(el, animation[0], duration, cmp.origin);
            }

            return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () { return _toggle(el, false); });
        };
    }

    var Accordion = {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },

        data: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease',
            offset: 0
        },

        computed: {

            items: {

                get: function(ref, $el) {
                    var targets = ref.targets;

                    return $$(targets, $el);
                },

                watch: function(items, prev) {
                    var this$1$1 = this;


                    items.forEach(function (el) { return hide($(this$1$1.content, el), !hasClass(el, this$1$1.clsOpen)); });

                    if (prev || hasClass(items, this.clsOpen)) {
                        return;
                    }

                    var active = this.active !== false && items[Number(this.active)]
                        || !this.collapsible && items[0];

                    if (active) {
                        this.toggle(active, false);
                    }

                },

                immediate: true

            },

            toggles: function(ref) {
                var toggle = ref.toggle;

                return this.items.map(function (item) { return $(toggle, item); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function(e) {
                    e.preventDefault();
                    this.toggle(index(this.toggles, e.current));
                }

            }

        ],

        methods: {

            toggle: function(item, animate) {
                var this$1$1 = this;


                var items = [this.items[getIndex(item, this.items)]];
                var activeItems = filter(this.items, ("." + (this.clsOpen)));

                if (!this.multiple && !includes(activeItems, items[0])) {
                    items = items.concat(activeItems);
                }

                if (!this.collapsible && activeItems.length < 2 && !filter(items, (":not(." + (this.clsOpen) + ")")).length) {
                    return;
                }

                items.forEach(function (el) { return this$1$1.toggleElement(el, !hasClass(el, this$1$1.clsOpen), function (el, show) {

                    toggleClass(el, this$1$1.clsOpen, show);
                    attr($(this$1$1.$props.toggle, el), 'aria-expanded', show);

                    var content = $(("" + (el._wrapper ? '> * ' : '') + (this$1$1.content)), el);

                    if (animate === false || !this$1$1.hasTransition) {
                        hide(content, !show);
                        return;
                    }

                    if (!el._wrapper) {
                        el._wrapper = wrapAll(content, ("<div" + (show ? ' hidden' : '') + ">"));
                    }

                    hide(content, false);
                    return toggleHeight(this$1$1)(el._wrapper, show).then(function () {
                        hide(content, !show);
                        delete el._wrapper;
                        unwrap(content);

                        if (show) {
                            var toggle = $(this$1$1.$props.toggle, el);
                            if (!isInView(toggle)) {
                                scrollIntoView(toggle, {offset: this$1$1.offset});
                            }
                        }
                    });
                }); });
            }

        }

    };

    function hide(el, hide) {
        el && (el.hidden = hide);
    }

    var alert = {

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        data: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.data.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function() {
                var this$1$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1$1.$destroy(true); });
            }

        }

    };

    var Video = {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        data: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        connected: function() {

            if (this.inView && !hasAttr(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }

            if (this.automute) {
                mute(this.$el);
            }

        },

        update: {

            read: function() {

                if (!isVideo(this.$el)) {
                    return false;
                }

                return {
                    visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                    inView: this.inView && isInView(this.$el)
                };
            },

            write: function(ref) {
                var visible = ref.visible;
                var inView = ref.inView;


                if (!visible || this.inView && !inView) {
                    pause(this.$el);
                } else if (this.autoplay === true || this.inView && inView) {
                    play(this.$el);
                }

            },

            events: ['resize', 'scroll']

        }

    };

    var cover = {

        mixins: [Class, Video],

        props: {
            width: Number,
            height: Number
        },

        data: {
            automute: true
        },

        update: {

            read: function() {

                var el = this.$el;
                var ref = getPositionedParent(el) || parent(el);
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;
                var dim = Dimensions.cover(
                    {
                        width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                        height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                );

                if (!dim.width || !dim.height) {
                    return false;
                }

                return dim;
            },

            write: function(ref) {
                var height = ref.height;
                var width = ref.width;

                css(this.$el, {height: height, width: width});
            },

            events: ['resize']

        }

    };

    function getPositionedParent(el) {
        while ((el = parent(el))) {
            if (css(el, 'position') !== 'static') {
                return el;
            }
        }
    }

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && $(container);
            }

        }

    };

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        data: {
            pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function(ref) {
                var pos = ref.pos;

                return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
            },

            dir: function() {
                return this.pos[0];
            },

            align: function() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function(element, target, boundary) {

                removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));

                var ref = this;
                var offset$1 = ref.offset;
                var axis = this.getAxis();

                if (!isNumeric(offset$1)) {
                    var node = $(offset$1);
                    offset$1 = node
                        ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                        : 0;
                }

                var ref$1 = positionAt(
                    element,
                    target,
                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -offset$1 : offset$1)) : (" " + (this.dir === 'top' ? -offset$1 : offset$1)),
                    null,
                    this.flip,
                    boundary
                ).target;
                var x = ref$1.x;
                var y = ref$1.y;

                this.dir = axis === 'x' ? x : y;
                this.align = axis === 'x' ? y : x;

                toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var active$1;

    var drop = {

        mixins: [Container, Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        data: {
            mode: ['click', 'hover'],
            toggle: '- *',
            boundary: true,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            animation: ['uk-animation-fade'],
            cls: 'uk-open',
            container: false
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;

                return boundary === true ? window : query(boundary, $el);
            },

            clsDrop: function(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function() {
                return this.clsDrop;
            }

        },

        created: function() {
            this.tracker = new MouseTracker();
        },

        connected: function() {

            addClass(this.$el, this.clsDrop);

            if (this.toggle && !this.target) {
                this.target = this.$create('toggle', query(this.toggle, this.$el), {
                    target: this.$el,
                    mode: this.mode
                });
            }

        },

        disconnected: function() {
            if (this.isActive()) {
                active$1 = null;
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var defaultPrevented = ref.defaultPrevented;
                    var hash = ref.current.hash;

                    if (!defaultPrevented && hash && !within(hash, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle.$el, false);
                    }
                }

            },

            {

                name: 'toggleshow',

                self: true,

                handler: function(e, toggle) {
                    e.preventDefault();
                    this.show(toggle.$el);
                }

            },

            {

                name: 'togglehide',

                self: true,

                handler: function(e) {
                    e.preventDefault();
                    if (!matches(this.$el, ':focus,:hover')) {
                        this.hide();
                    }
                }

            },

            {

                name: (pointerEnter + " focusin"),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.clearTimers();
                    }
                }

            },

            {

                name: (pointerLeave + " focusout"),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e) && e.relatedTarget) {
                        this.hide();
                    }
                }

            },

            {

                name: 'toggled',

                self: true,

                handler: function(e, toggled) {

                    if (!toggled) {
                        return;
                    }

                    this.clearTimers();
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1$1 = this;


                    active$1 = this;

                    this.tracker.init();

                    once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;

                            return !within(target, this$1$1.$el) && once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                            var defaultPrevented = ref.defaultPrevented;
                            var type = ref.type;
                            var newTarget = ref.target;

                            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1$1.target && within(target, this$1$1.target))) {
                                this$1$1.hide(false);
                            }
                        }, true);
                    }
                    ), {self: true});

                    once(this.$el, 'hide', on(document, 'keydown', function (e) {
                        if (e.keyCode === 27) {
                            this$1$1.hide(false);
                        }
                    }), {self: true});

                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active$1 = active$1 === null && within(target, this.$el) && this.isToggled() ? this : active$1;
                        return;
                    }

                    active$1 = this.isActive() ? null : active$1;
                    this.tracker.cancel();
                }

            }

        ],

        update: {

            write: function() {

                if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function(target, delay) {
                var this$1$1 = this;
                if ( target === void 0 ) target = this.target;
                if ( delay === void 0 ) delay = true;


                if (this.isToggled() && target && this.target && target !== this.target) {
                    this.hide(false);
                }

                this.target = target;

                this.clearTimers();

                if (this.isActive()) {
                    return;
                }

                if (active$1) {

                    if (delay && active$1.isDelaying) {
                        this.showTimer = setTimeout(this.show, 10);
                        return;
                    }

                    var prev;
                    while (active$1 && prev !== active$1 && !within(this.$el, active$1.$el)) {
                        prev = active$1;
                        active$1.hide(false);
                    }

                }

                if (this.container && parent(this.$el) !== this.container) {
                    append(this.container, this.$el);
                }

                this.showTimer = setTimeout(function () { return this$1$1.toggleElement(this$1$1.$el, true); }, delay && this.delayShow || 0);

            },

            hide: function(delay) {
                var this$1$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1$1.toggleElement(this$1$1.$el, false, false); };

                this.clearTimers();

                this.isDelaying = getPositionedElements(this.$el).some(function (el) { return this$1$1.tracker.movesTo(el); });

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, 50);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function() {
                return active$1 === this;
            },

            position: function() {

                removeClass(this.$el, ((this.clsDrop) + "-stack"));
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.target);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.boundary && this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.target, this.boundary);

            }

        }

    };

    function getPositionedElements(el) {
        var result = [];
        apply$1(el, function (el) { return css(el, 'position') !== 'static' && result.push(el); });
        return result;
    }

    var formCustom = {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        data: {
            target: false
        },

        computed: {

            input: function(_, $el) {
                return $(selInput, $el);
            },

            state: function() {
                return this.input.nextElementSibling;
            },

            target: function(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && parent(this.input) === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;
            var prop = isInput(target) ? 'value' : 'textContent';
            var prev = target[prop];
            var value = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0]) // eslint-disable-line prefer-destructuring
                    ? option.textContent
                    : input.value;

            if (prev !== value) {
                target[prop] = value;
            }

        },

        events: [

            {
                name: 'change',

                handler: function() {
                    this.$update();
                }
            },

            {
                name: 'reset',

                el: function() {
                    return closest(this.$el, 'form');
                },

                handler: function() {
                    this.$update();
                }
            }

        ]

    };

    // Deprecated
    var gif = {

        update: {

            read: function(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function() {
                this.$el.src = '' + this.$el.src; // force self-assign
            },

            events: ['scroll', 'resize']
        }

    };

    var Margin = {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        data: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function() {

                var rows = getRows(this.$el.children);

                return {
                    rows: rows,
                    columns: getColumns(rows)
                };
            },

            write: function(ref) {
                var columns = ref.columns;
                var rows = ref.rows;

                for (var i = 0; i < rows.length; i++) {
                    for (var j = 0; j < rows[i].length; j++) {
                        toggleClass(rows[i][j], this.margin, i !== 0);
                        toggleClass(rows[i][j], this.firstColumn, !!~columns[0].indexOf(rows[i][j]));
                    }
                }
            },

            events: ['resize']

        }

    };

    function getRows(items) {
        return sortBy(items, 'top', 'bottom');
    }

    function getColumns(rows) {

        var columns = [];

        for (var i = 0; i < rows.length; i++) {
            var sorted = sortBy(rows[i], 'left', 'right');
            for (var j = 0; j < sorted.length; j++) {
                columns[j] = !columns[j] ? sorted[j] : columns[j].concat(sorted[j]);
            }
        }

        return isRtl
            ? columns.reverse()
            : columns;
    }

    function sortBy(items, startProp, endProp) {

        var sorted = [[]];

        for (var i = 0; i < items.length; i++) {

            var el = items[i];

            if (!isVisible(el)) {
                continue;
            }

            var dim = getOffset(el);

            for (var j = sorted.length - 1; j >= 0; j--) {

                var current = sorted[j];

                if (!current[0]) {
                    current.push(el);
                    break;
                }

                var startDim = (void 0);
                if (current[0].offsetParent === el.offsetParent) {
                    startDim = getOffset(current[0]);
                } else {
                    dim = getOffset(el, true);
                    startDim = getOffset(current[0], true);
                }

                if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
                    sorted.push([el]);
                    break;
                }

                if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
                    current.push(el);
                    break;
                }

                if (j === 0) {
                    sorted.unshift([el]);
                    break;
                }

            }

        }

        return sorted;
    }

    function getOffset(element, offset) {
        var assign;

        if ( offset === void 0 ) offset = false;

        var offsetTop = element.offsetTop;
        var offsetLeft = element.offsetLeft;
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth;

        if (offset) {
            (assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1]);
        }

        return {
            top: offsetTop,
            left: offsetLeft,
            bottom: offsetTop + offsetHeight,
            right: offsetLeft + offsetWidth
        };
    }

    var grid = {

        extends: Margin,

        mixins: [Class],

        name: 'grid',

        props: {
            masonry: Boolean,
            parallax: Number
        },

        data: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack',
            masonry: false,
            parallax: 0
        },

        connected: function() {
            this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
        },

        update: [

            {

                write: function(ref) {
                    var columns = ref.columns;

                    toggleClass(this.$el, this.clsStack, columns.length < 2);
                },

                events: ['resize']

            },

            {

                read: function(data) {

                    var columns = data.columns;
                    var rows = data.rows;

                    // Filter component makes elements positioned absolute
                    if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
                        data.translates = false;
                        return false;
                    }

                    var translates = false;

                    var nodes = children(this.$el);
                    var columnHeights = getColumnHeights(columns);
                    var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
                    var elHeight = Math.max.apply(Math, columnHeights) + margin;

                    if (this.masonry) {
                        columns = columns.map(function (column) { return sortBy$1(column, 'offsetTop'); });
                        translates = getTranslates(rows, columns);
                    }

                    var padding = Math.abs(this.parallax);
                    if (padding) {
                        padding = columnHeights.reduce(function (newPadding, hgt, i) { return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight); }
                            , 0);
                    }

                    return {padding: padding, columns: columns, translates: translates, height: translates ? elHeight : ''};

                },

                write: function(ref) {
                    var height = ref.height;
                    var padding = ref.padding;


                    css(this.$el, 'paddingBottom', padding || '');
                    height !== false && css(this.$el, 'height', height);

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var height$1 = ref.height;


                    if (positionedAbsolute(this.$el)) {
                        return false;
                    }

                    return {
                        scrolled: this.parallax
                            ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax)
                            : false
                    };
                },

                write: function(ref) {
                    var columns = ref.columns;
                    var scrolled = ref.scrolled;
                    var translates = ref.translates;


                    if (scrolled === false && !translates) {
                        return;
                    }

                    columns.forEach(function (column, i) { return column.forEach(function (el, j) { return css(el, 'transform', !scrolled && !translates ? '' : ("translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    function positionedAbsolute(el) {
        return children(el).some(function (el) { return css(el, 'position') === 'absolute'; });
    }

    function getTranslates(rows, columns) {

        var rowHeights = rows.map(function (row) { return Math.max.apply(Math, row.map(function (el) { return el.offsetHeight; })); }
        );

        return columns.map(function (elements) {
            var prev = 0;
            return elements.map(function (element, row) { return prev += row
                    ? rowHeights[row - 1] - elements[row - 1].offsetHeight
                    : 0; }
            );
        });
    }

    function getMarginTop(nodes, cls) {

        var ref = nodes.filter(function (el) { return hasClass(el, cls); });
        var node = ref[0];

        return toFloat(node
            ? css(node, 'marginTop')
            : css(nodes[0], 'paddingLeft'));
    }

    function getColumnHeights(columns) {
        return columns.map(function (column) { return column.reduce(function (sum, el) { return sum + el.offsetHeight; }, 0); }
        );
    }

    // IE 11 fix (min-height on a flex container won't apply to its flex items)
    var FlexBug = isIE ? {

        props: {
            selMinHeight: String
        },

        data: {
            selMinHeight: false,
            forceHeight: false
        },

        computed: {

            elements: function(ref, $el) {
                var selMinHeight = ref.selMinHeight;

                return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }

        },

        update: [

            {

                read: function() {
                    css(this.elements, 'height', '');
                },

                order: -5,

                events: ['resize']

            },

            {

                write: function() {
                    var this$1$1 = this;

                    this.elements.forEach(function (el) {
                        var height = toFloat(css(el, 'minHeight'));
                        if (height && (this$1$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
                            css(el, 'height', height);
                        }
                    });
                },

                order: 5,

                events: ['resize']

            }

        ]

    } : {};

    var heightMatch = {

        mixins: [FlexBug],

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        data: {
            target: '> *',
            row: true,
            forceHeight: true
        },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function() {
                return {
                    rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
                };
            },

            write: function(ref) {
                var rows = ref.rows;

                rows.forEach(function (ref) {
                        var heights = ref.heights;
                        var elements = ref.elements;

                        return elements.forEach(function (el, i) { return css(el, 'minHeight', heights[i]); }
                    );
                }
                );
            },

            events: ['resize']

        }

    };

    function match(elements) {

        if (elements.length < 2) {
            return {heights: [''], elements: elements};
        }

        var heights = elements.map(getHeight);
        var max = Math.max.apply(Math, heights);
        var hasMinHeight = elements.some(function (el) { return el.style.minHeight; });
        var hasShrunk = elements.some(function (el, i) { return !el.style.minHeight && heights[i] < max; });

        if (hasMinHeight && hasShrunk) {
            css(elements, 'minHeight', '');
            heights = elements.map(getHeight);
            max = Math.max.apply(Math, heights);
        }

        heights = elements.map(function (el, i) { return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max; }
        );

        return {heights: heights, elements: elements};
    }

    function getHeight(element) {

        var style = false;
        if (!isVisible(element)) {
            style = element.style.display;
            css(element, 'display', 'block', 'important');
        }

        var height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');

        if (style !== false) {
            css(element, 'display', style);
        }

        return height;
    }

    var heightViewport = {

        mixins: [FlexBug],

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            read: function(ref) {
                var prev = ref.minHeight;


                if (!isVisible(this.$el)) {
                    return false;
                }

                var minHeight = '';
                var box = boxModelAdjust(this.$el, 'height', 'content-box');

                if (this.expand) {

                    minHeight = height(window) - (dimensions(document.documentElement).height - dimensions(this.$el).height) - box || '';

                } else {

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = 'calc(100vh';

                    if (this.offsetTop) {

                        var ref$1 = offset(this.$el);
                        var top = ref$1.top;
                        minHeight += top > 0 && top < height(window) / 2 ? (" - " + top + "px") : '';

                    }

                    if (this.offsetBottom === true) {

                        minHeight += " - " + (dimensions(this.$el.nextElementSibling).height) + "px";

                    } else if (isNumeric(this.offsetBottom)) {

                        minHeight += " - " + (this.offsetBottom) + "vh";

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        minHeight += " - " + (toFloat(this.offsetBottom)) + "px";

                    } else if (isString(this.offsetBottom)) {

                        minHeight += " - " + (dimensions(query(this.offsetBottom, this.$el)).height) + "px";

                    }

                    minHeight += (box ? (" - " + box + "px") : '') + ")";

                }

                return {minHeight: minHeight, prev: prev};
            },

            write: function(ref) {
                var minHeight = ref.minHeight;
                var prev = ref.prev;


                css(this.$el, {minHeight: minHeight});

                if (minHeight !== prev) {
                    this.$update(this.$el, 'resize');
                }

                if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

            },

            events: ['resize']

        }

    };

    var SVG = {

        args: 'src',

        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean, // IE 11
            attributes: 'list'
        },

        data: {
            ratio: 1,
            include: ['style', 'class', 'focusable'],
            class: '',
            strokeAnimation: false
        },

        beforeConnect: function() {
            this.class += ' uk-svg';
        },

        connected: function() {
            var this$1$1 = this;
            var assign;


            if (!this.icon && includes(this.src, '#')) {
                (assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1]);
            }

            this.svg = this.getSvg().then(function (el) {

                if (this$1$1._connected) {

                    var svg = insertSVG(el, this$1$1.$el);

                    if (this$1$1.svgEl && svg !== this$1$1.svgEl) {
                        remove$1(this$1$1.svgEl);
                    }

                    this$1$1.applyAttributes(svg, el);
                    this$1$1.$emit();
                    return this$1$1.svgEl = svg;
                }

            }, noop);

        },

        disconnected: function() {
            var this$1$1 = this;


            this.svg.then(function (svg) {
                if (!this$1$1._connected) {

                    if (isVoidElement(this$1$1.$el)) {
                        this$1$1.$el.hidden = false;
                    }

                    remove$1(svg);
                    this$1$1.svgEl = null;
                }
            });

            this.svg = null;

        },

        update: {

            read: function() {
                return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },

            write: function() {
                applyAnimation(this.svgEl);
            },

            type: ['resize']

        },

        methods: {

            getSvg: function() {
                var this$1$1 = this;

                return loadSVG(this.src).then(function (svg) { return parseSVG(svg, this$1$1.icon) || Promise$1.reject('SVG not found.'); }
                );
            },

            applyAttributes: function(el, ref) {
                var this$1$1 = this;


                for (var prop in this.$options.props) {
                    if (includes(this.include, prop) && (prop in this)) {
                        attr(el, prop, this[prop]);
                    }
                }

                for (var attribute in this.attributes) {
                    var ref$1 = this.attributes[attribute].split(':', 2);
                    var prop$1 = ref$1[0];
                    var value = ref$1[1];
                    attr(el, prop$1, value);
                }

                if (!this.id) {
                    removeAttr(el, 'id');
                }

                var props = ['width', 'height'];
                var dimensions = props.map(function (prop) { return this$1$1[prop]; });

                if (!dimensions.some(function (val) { return val; })) {
                    dimensions = props.map(function (prop) { return attr(ref, prop); });
                }

                var viewBox = attr(ref, 'viewBox');
                if (viewBox && !dimensions.some(function (val) { return val; })) {
                    dimensions = viewBox.split(' ').slice(2);
                }

                dimensions.forEach(function (val, i) { return attr(el, props[i], toFloat(val) * this$1$1.ratio || null); }
                );

            }

        }

    };

    var loadSVG = memoize(function (src) { return new Promise$1(function (resolve, reject) {

            if (!src) {
                reject();
                return;
            }

            if (startsWith(src, 'data:')) {
                resolve(decodeURIComponent(src.split(',')[1]));
            } else {

                ajax(src).then(
                    function (xhr) { return resolve(xhr.response); },
                    function () { return reject('SVG not found.'); }
                );

            }
        }); }
    );

    function parseSVG(svg, icon) {

        if (icon && includes(svg, '<symbol')) {
            svg = parseSymbols(svg, icon) || svg;
        }

        svg = $(svg.substr(svg.indexOf('<svg')));
        return svg && svg.hasChildNodes() && svg;
    }

    var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            symbolRe.lastIndex = 0;

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

        }

        return symbols[svg][icon];
    }

    function applyAnimation(el) {

        var length = getMaxPathLength(el);

        if (length) {
            el.style.setProperty('--uk-animation-stroke', length);
        }

    }

    function getMaxPathLength(el) {
        return Math.ceil(Math.max.apply(Math, [ 0 ].concat( $$('[stroke]', el).map(function (stroke) {
            try {
                return stroke.getTotalLength();
            } catch (e) {
                return 0;
            }
        }) )));
    }

    function insertSVG(el, root) {

        if (isVoidElement(root) || root.tagName === 'CANVAS') {

            root.hidden = true;

            var next = root.nextElementSibling;
            return equals(el, next)
                ? next
                : after(root, el);

        }

        var last = root.lastElementChild;
        return equals(el, last)
            ? last
            : append(root, el);
    }

    function equals(el, other) {
        return isSVG(el) && isSVG(other) && innerHTML(el) === innerHTML(other);
    }

    function isSVG(el) {
        return el && el.tagName === 'svg';
    }

    function innerHTML(el) {
        return (el.innerHTML || (new XMLSerializer()).serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).replace(/\s/g, '');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    var Icon = {

        install: install$1,

        extends: SVG,

        args: 'icon',

        props: ['icon'],

        data: {
            include: ['focusable']
        },

        isIcon: true,

        beforeConnect: function() {
            addClass(this.$el, 'uk-icon');
        },

        methods: {

            getSvg: function() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return Promise$1.reject('Icon not found.');
                }

                return Promise$1.resolve(icon);
            }

        }

    };

    var IconComponent = {

        args: false,

        extends: Icon,

        data: function (vm) { return ({
            icon: hyphenate(vm.constructor.options.name)
        }); },

        beforeConnect: function() {
            addClass(this.$el, this.$name);
        }

    };

    var Slidenav = {

        extends: IconComponent,

        beforeConnect: function() {
            addClass(this.$el, 'uk-slidenav');
        },

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-slidenav-large')
                    ? (icon + "-large")
                    : icon;
            }

        }

    };

    var Search = {

        extends: IconComponent,

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                    ? 'search-large'
                    : parents($el, '.uk-search-navbar').length
                        ? 'search-navbar'
                        : icon;
            }

        }

    };

    var Close = {

        extends: IconComponent,

        computed: {

            icon: function() {
                return ("close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'));
            }

        }

    };

    var Spinner = {

        extends: IconComponent,

        connected: function() {
            var this$1$1 = this;

            this.svg.then(function (svg) { return svg && this$1$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1$1.ratio); });
        }

    };

    var parsed = {};
    function install$1(UIkit) {
        UIkit.icon.add = function (name, svg) {
            var obj;


            var added = isString(name) ? (( obj = {}, obj[name] = svg, obj )) : name;
            each(added, function (svg, name) {
                icons[name] = svg;
                delete parsed[name];
            });

            if (UIkit._initialized) {
                apply$1(document.body, function (el) { return each(UIkit.getComponents(el), function (cmp) {
                        cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                    }); }
                );
            }
        };
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
        }

        return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
        return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    var img = {

        args: 'dataSrc',

        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },

        data: {
            dataSrc: '',
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: '50vh',
            offsetLeft: '50vw',
            target: false
        },

        computed: {

            cacheKey: function(ref) {
                var dataSrc = ref.dataSrc;

                return ((this.$name) + "." + dataSrc);
            },

            width: function(ref) {
                var width = ref.width;
                var dataWidth = ref.dataWidth;

                return width || dataWidth;
            },

            height: function(ref) {
                var height = ref.height;
                var dataHeight = ref.dataHeight;

                return height || dataHeight;
            },

            sizes: function(ref) {
                var sizes = ref.sizes;
                var dataSizes = ref.dataSizes;

                return sizes || dataSizes;
            },

            isImg: function(_, $el) {
                return isImg($el);
            },

            target: {

                get: function(ref) {
                    var target = ref.target;

                    return [this.$el ].concat( queryAll(target, this.$el));
                },

                watch: function() {
                    this.observe();
                }

            },

            offsetTop: function(ref) {
                var offsetTop = ref.offsetTop;

                return toPx(offsetTop, 'height');
            },

            offsetLeft: function(ref) {
                var offsetLeft = ref.offsetLeft;

                return toPx(offsetLeft, 'width');
            }

        },

        connected: function() {

            if (!window.IntersectionObserver) {
                setSrcAttrs(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
                return;
            }

            if (storage[this.cacheKey]) {
                setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
                setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }

            this.observer = new IntersectionObserver(this.load, {
                rootMargin: ((this.offsetTop) + "px " + (this.offsetLeft) + "px")
            });

            requestAnimationFrame(this.observe);

        },

        disconnected: function() {
            this.observer && this.observer.disconnect();
        },

        update: {

            read: function(ref) {
                var this$1$1 = this;
                var image = ref.image;


                if (!this.observer) {
                    return false;
                }

                if (!image && document.readyState === 'complete') {
                    this.load(this.observer.takeRecords());
                }

                if (this.isImg) {
                    return false;
                }

                image && image.then(function (img) { return img && img.currentSrc !== '' && setSrcAttrs(this$1$1.$el, currentSrc(img)); });

            },

            write: function(data) {

                if (this.dataSrcset && window.devicePixelRatio !== 1) {

                    var bgSize = css(this.$el, 'backgroundSize');
                    if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
                        data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                        css(this.$el, 'backgroundSize', ((data.bgSize) + "px"));
                    }

                }

            },

            events: ['resize']

        },

        methods: {

            load: function(entries) {
                var this$1$1 = this;


                // Old chromium based browsers (UC Browser) did not implement `isIntersecting`
                if (!entries.some(function (entry) { return isUndefined(entry.isIntersecting) || entry.isIntersecting; })) {
                    return;
                }

                this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {

                    setSrcAttrs(this$1$1.$el, currentSrc(img), img.srcset, img.sizes);
                    storage[this$1$1.cacheKey] = currentSrc(img);
                    return img;

                }, function (e) { return trigger(this$1$1.$el, new e.constructor(e.type, e)); });

                this.observer.disconnect();
            },

            observe: function() {
                var this$1$1 = this;

                if (this._connected && !this._data.image) {
                    this.target.forEach(function (el) { return this$1$1.observer.observe(el); });
                }
            }

        }

    };

    function setSrcAttrs(el, src, srcset, sizes) {

        if (isImg(el)) {
            var set = function (prop, val) { return val && val !== el[prop] && (el[prop] = val); };
            set('sizes', sizes);
            set('srcset', srcset);
            set('src', src);
        } else if (src) {

            var change = !includes(el.style.backgroundImage, src);
            if (change) {
                css(el, 'backgroundImage', ("url(" + (escape(src)) + ")"));
                trigger(el, createEvent('load', false));
            }

        }

    }

    function getPlaceholderImage(width, height, sizes) {
        var assign;


        if (sizes) {
            ((assign = Dimensions.ratio({width: width, height: height}, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height));
        }

        return ("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>");
    }

    var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function sizesToPixel(sizes) {
        var matches;

        sizesRe.lastIndex = 0;

        while ((matches = sizesRe.exec(sizes))) {
            if (!matches[1] || window.matchMedia(matches[1]).matches) {
                matches = evaluateSize(matches[2]);
                break;
            }
        }

        return matches || '100vw';
    }

    var sizeRe = /\d+(?:\w+|%)/g;
    var additionRe = /[+-]?(\d+)/g;
    function evaluateSize(size) {
        return startsWith(size, 'calc')
            ? size
                .slice(5, -1)
                .replace(sizeRe, function (size) { return toPx(size); })
                .replace(/ /g, '')
                .match(additionRe)
                .reduce(function (a, b) { return a + +b; }, 0)
            : size;
    }

    var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
    function getSourceSize(srcset, sizes) {
        var srcSize = toPx(sizesToPixel(sizes));
        var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) { return a - b; });

        return descriptors.filter(function (size) { return size >= srcSize; })[0] || descriptors.pop() || '';
    }

    function isImg(el) {
        return el.tagName === 'IMG';
    }

    function currentSrc(el) {
        return el.currentSrc || el.src;
    }

    var key = '__test__';
    var storage;

    // workaround for Safari's private browsing mode and accessing sessionStorage in Blink
    try {
        storage = window.sessionStorage || {};
        storage[key] = 1;
        delete storage[key];
    } catch (e) {
        storage = {};
    }

    var Media = {

        props: {
            media: Boolean
        },

        data: {
            media: false
        },

        computed: {

            matchMedia: function() {
                var media = toMedia(this.media);
                return !media || window.matchMedia(media).matches;
            }

        }

    };

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "breakpoint-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    var leader = {

        mixins: [Class, Media],

        props: {
            fill: String
        },

        data: {
            fill: '',
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill-content');
            }

        },

        connected: function() {
            var assign;

            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function() {
            unwrap(this.wrapper.childNodes);
        },

        update: {

            read: function(ref) {
                var changed = ref.changed;
                var width = ref.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    fill: this.fill,
                    changed: changed || prev !== width,
                    hide: !this.matchMedia
                };
            },

            write: function(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
                }

            },

            events: ['resize']

        }

    };

    var active = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return $(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (includes(active, this)) {
                this.toggleElement(this.$el, false, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();

                    if (this.isToggled() === includes(active, this)) {
                        this.toggle();
                    }
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (includes(active, this)) {
                        return false;
                    }

                    if (!this.stack && active.length) {
                        Promise$1.all(active.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1$1 = this;


                    var docEl = document.documentElement;

                    if (width(window) > docEl.clientWidth && this.overlay) {
                        css(document.body, 'overflowY', 'scroll');
                    }

                    if (this.stack) {
                        css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active.length);
                    }

                    addClass(docEl, this.clsPage);

                    if (this.bgClose) {
                        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;


                            if (last(active) !== this$1$1 || this$1$1.overlay && !within(target, this$1$1.$el) || within(target, this$1$1.panel)) {
                                return;
                            }

                            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                                var defaultPrevented = ref.defaultPrevented;
                                var type = ref.type;
                                var newTarget = ref.target;

                                if (!defaultPrevented && type === pointerUp && target === newTarget) {
                                    this$1$1.hide();
                                }
                            }, true);

                        }), {self: true});
                    }

                    if (this.escClose) {
                        once(this.$el, 'hide', on(document, 'keydown', function (e) {
                            if (e.keyCode === 27 && last(active) === this$1$1) {
                                this$1$1.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {
                name: 'shown',

                self: true,

                handler: function() {
                    if (!isFocusable(this.$el)) {
                        attr(this.$el, 'tabindex', '-1');
                    }

                    if (!$(':focus', this.$el)) {
                        this.$el.focus();
                    }
                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1$1 = this;


                    if (includes(active, this)) {
                        active.splice(active.indexOf(this), 1);
                    }

                    if (!active.length) {
                        css(document.body, 'overflowY', '');
                    }

                    css(this.$el, 'zIndex', '');

                    if (!active.some(function (modal) { return modal.clsPage === this$1$1.clsPage; })) {
                        removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1$1 = this;

                if (this.container && parent(this.$el) !== this.container) {
                    append(this.container, this.$el);
                    return new Promise$1(function (resolve) { return requestAnimationFrame(function () { return this$1$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate(this));
            }

        }

    };

    function animate(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new Promise$1(function (resolve, reject) { return once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = once(transitionElement, 'transitionstart', function () {
                        once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, toMs(css(transitionElement, 'transitionDuration')));

                }); }
            ).then(function () { return delete el._reject; }); };
    }

    var modal = {

        install: install,

        mixins: [Modal],

        data: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    };

    function install(ref) {
        var modal = ref.modal;


        modal.dialog = function (content, options) {

            var dialog = modal(
                ("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>"),
                options
            );

            dialog.show();

            on(dialog.$el, 'hidden', function () { return Promise$1.resolve().then(function () { return dialog.$destroy(true); }
                ); }, {self: true}
            );

            return dialog;
        };

        modal.alert = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (labels.ok) + "</button> </div>");
            },
                options,
                function (deferred) { return deferred.resolve(); }
            );
        };

        modal.confirm = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.reject(); }
            );
        };

        modal.prompt = function (message, value, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.resolve(null); },
                function (dialog) { return $('input', dialog.$el).value; }
            );
        };

        modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

        function openDialog(tmpl, options, hideFn, submitFn) {

            options = assign({bgClose: false, escClose: true, labels: modal.labels}, options);

            var dialog = modal.dialog(tmpl(options), options);
            var deferred = new Deferred();

            var resolved = false;

            on(dialog.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                deferred.resolve(submitFn && submitFn(dialog));
                resolved = true;
                dialog.hide();
            });

            on(dialog.$el, 'hide', function () { return !resolved && hideFn(deferred); });

            deferred.promise.dialog = dialog;

            return deferred.promise;
        }

    }

    var nav = {

        extends: Accordion,

        data: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    };

    var navItem = '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle';

    var navbar = {

        mixins: [Class, Container, FlexBug],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },

        data: {
            dropdown: navItem,
            align: !isRtl ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
            forceHeight: true,
            selMinHeight: navItem,
            container: false
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return boundary === true || boundaryAlign ? $el : boundary;
            },

            dropbarAnchor: function(ref, $el) {
                var dropbarAnchor = ref.dropbarAnchor;

                return query(dropbarAnchor, $el);
            },

            pos: function(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            },

            dropbar: {

                get: function(ref) {
                    var dropbar = ref.dropbar;


                    if (!dropbar) {
                        return null;
                    }

                    dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);

                    return dropbar ? dropbar : (this._dropbar = $('<div></div>'));

                },

                watch: function(dropbar) {
                    addClass(dropbar, 'uk-navbar-dropbar');
                },

                immediate: true

            },

            dropContainer: function(_, $el) {
                return this.container || $el;
            },

            dropdowns: {

                get: function(ref, $el) {
                    var this$1$1 = this;
                    var clsDrop = ref.clsDrop;

                    var dropdowns = $$(("." + clsDrop), $el);

                    if (this.dropContainer !== $el) {
                        $$(("." + clsDrop), this.dropContainer).forEach(function (el) {
                            var dropdown = this$1$1.getDropdown(el);
                            if (!includes(dropdowns, el) && dropdown && dropdown.target && within(dropdown.target, this$1$1.$el)) {
                                dropdowns.push(el);
                            }
                        });
                    }

                    return dropdowns;
                },

                watch: function(dropdowns) {
                    var this$1$1 = this;

                    this.$create(
                        'drop',
                        dropdowns.filter(function (el) { return !this$1$1.getDropdown(el); }),
                        assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
                    );
                },

                immediate: true

            },

            toggles: function(ref, $el) {
                var dropdown = ref.dropdown;

                return $$(dropdown, $el);
            }

        },

        disconnected: function() {
            this.dropbar && remove$1(this.dropbar);
            delete this._dropbar;
        },

        events: [

            {
                name: 'mouseover focusin',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && includes(active.mode, 'hover') && active.target && !within(active.target, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'keydown',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(e) {

                    var current = e.current;
                    var keyCode = e.keyCode;
                    var active = this.getActive();

                    if (keyCode === keyMap.DOWN && hasAttr(current, 'aria-expanded')) {

                        e.preventDefault();

                        if (!active || active.target !== current) {
                            current.click();
                            once(this.dropContainer, 'show', function (ref) {
                                var target = ref.target;

                                return focusFirstFocusableElement(target);
                            });
                        } else {
                            focusFirstFocusableElement(active.$el);
                        }

                    }

                    handleNavItemNavigation(e, this.toggles, active);
                }
            },

            {
                name: 'keydown',

                el: function() {
                    return this.dropContainer;
                },

                delegate: function() {
                    return ("." + (this.clsDrop));
                },

                handler: function(e) {

                    var current = e.current;
                    var keyCode = e.keyCode;

                    if (!includes(this.dropdowns, current)) {
                        return;
                    }

                    var active = this.getActive();
                    var elements = $$(selFocusable, current);
                    var i = findIndex(elements, function (el) { return matches(el, ':focus'); });

                    if (keyCode === keyMap.UP) {
                        e.preventDefault();
                        if (i > 0) {
                            elements[i - 1].focus();
                        }
                    }

                    if (keyCode === keyMap.DOWN) {
                        e.preventDefault();
                        if (i < elements.length - 1) {
                            elements[i + 1].focus();
                        }
                    }

                    if (keyCode === keyMap.ESC) {
                        active && active.target && active.target.focus();
                    }

                    handleNavItemNavigation(e, this.toggles, active);
                }
            },

            {
                name: 'mouseleave',

                el: function() {
                    return this.dropbar;
                },

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {
                    var active = this.getActive();

                    if (active && includes(active.mode, 'hover') && !this.dropdowns.some(function (el) { return matches(el, ':hover'); })) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                el: function() {
                    return this.dropContainer;
                },

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {

                    if (!parent(this.dropbar)) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                el: function() {
                    return this.dropContainer;
                },

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;
                    var dir = ref.dir;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    if (this.dropbarMode === 'slide') {
                        addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                    }

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    if (dir === 'bottom') {
                        this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                    }
                }
            },

            {
                name: 'beforehide',

                el: function() {
                    return this.dropContainer;
                },

                filter: function() {
                    return this.dropbar;
                },

                handler: function(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                el: function() {
                    return this.dropContainer;
                },

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function() {
                return active$1 && within(active$1.target, this.$el) && active$1;
            },

            transitionTo: function(newHeight, el) {
                var this$1$1 = this;


                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, 'clip', ("rect(0," + (el.offsetWidth) + "px," + oldHeight + "px,0)"));

                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Promise$1.all([
                    Transition.start(dropbar, {height: newHeight}, this.duration),
                    Transition.start(el, {clip: ("rect(0," + (el.offsetWidth) + "px," + newHeight + "px,0)")}, this.duration)
                ])
                    .catch(noop)
                    .then(function () {
                        css(el, {clip: ''});
                        this$1$1.$update(dropbar);
                    });
            },

            getDropdown: function(el) {
                return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
            }

        }

    };

    function handleNavItemNavigation(e, toggles, active) {

        var current = e.current;
        var keyCode = e.keyCode;
        var target = active && active.target || current;
        var i = toggles.indexOf(target);

        // Left
        if (keyCode === keyMap.LEFT && i > 0) {
            active && active.hide(false);
            toggles[i - 1].focus();
        }

        // Right
        if (keyCode === keyMap.RIGHT && i < toggles.length - 1) {
            active && active.hide(false);
            toggles[i + 1].focus();
        }

        if (keyCode === keyMap.TAB) {
            target.focus();
            active && active.hide(false);
        }
    }

    function focusFirstFocusableElement(el) {
        if (!$(':focus', el)) {
            var focusEl = $(selFocusable, el);
            if (focusEl) {
                focusEl.focus();
            }
        }
    }

    var keyMap = {
        TAB: 9,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    var offcanvas = {

        mixins: [Modal],

        args: 'mode',

        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        data: {
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContainerAnimation: 'uk-offcanvas-container-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close',
            container: false
        },

        computed: {

            clsFlip: function(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContainerAnimation: function(ref) {
                var mode = ref.mode;
                var clsContainerAnimation = ref.clsContainerAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
            },

            transitionElement: function(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? parent(this.panel) : this.panel;
            }

        },

        update: {

            read: function() {
                if (this.isToggled() && !isVisible(this.$el)) {
                    this.hide();
                }
            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var hash = ref.current.hash;
                    var defaultPrevented = ref.defaultPrevented;

                    if (!defaultPrevented && hash && $(hash, document.body)) {
                        this.hide();
                    }
                }

            },

            {
                name: 'touchstart',

                passive: true,

                el: function() {
                    return this.panel;
                },

                handler: function(ref) {
                    var targetTouches = ref.targetTouches;


                    if (targetTouches.length === 1) {
                        this.clientY = targetTouches[0].clientY;
                    }

                }

            },

            {
                name: 'touchmove',

                self: true,
                passive: false,

                filter: function() {
                    return this.overlay;
                },

                handler: function(e) {
                    e.cancelable && e.preventDefault();
                }

            },

            {
                name: 'touchmove',

                passive: false,

                el: function() {
                    return this.panel;
                },

                handler: function(e) {

                    if (e.targetTouches.length !== 1) {
                        return;
                    }

                    var clientY = e.targetTouches[0].clientY - this.clientY;
                    var ref = this.panel;
                    var scrollTop = ref.scrollTop;
                    var scrollHeight = ref.scrollHeight;
                    var clientHeight = ref.clientHeight;

                    if (clientHeight >= scrollHeight
                        || scrollTop === 0 && clientY > 0
                        || scrollHeight - scrollTop <= clientHeight && clientY < 0
                    ) {
                        e.cancelable && e.preventDefault();
                    }

                }

            },

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(parent(this.panel), this.clsMode);
                    }

                    css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
                    addClass(document.body, this.clsContainer, this.clsFlip);
                    css(document.body, 'touch-action', 'pan-y pinch-zoom');
                    css(this.$el, 'display', 'block');
                    addClass(this.$el, this.clsOverlay);
                    addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');

                    height(document.body); // force reflow
                    addClass(document.body, this.clsContainerAnimation);

                    this.clsContainerAnimation && suppressUserScale();


                }
            },

            {
                name: 'hide',

                self: true,

                handler: function() {
                    removeClass(document.body, this.clsContainerAnimation);
                    css(document.body, 'touch-action', '');
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    this.clsContainerAnimation && resumeUserScale();

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(document.body, this.clsContainer, this.clsFlip);

                    css(document.documentElement, 'overflowY', '');

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function(e) {

                    if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
                        this.hide();
                    }

                }
            }

        ]

    };

    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
        getViewport().content += ',user-scalable=0';
    }

    function resumeUserScale() {
        var viewport = getViewport();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var overflowAuto = {

        mixins: [Class],

        props: {
            selContainer: String,
            selContent: String,
            minHeight: Number
        },

        data: {
            selContainer: '.uk-modal',
            selContent: '.uk-modal-dialog',
            minHeight: 150
        },

        computed: {

            container: function(ref, $el) {
                var selContainer = ref.selContainer;

                return closest($el, selContainer);
            },

            content: function(ref, $el) {
                var selContent = ref.selContent;

                return closest($el, selContent);
            }

        },

        connected: function() {
            css(this.$el, 'minHeight', this.minHeight);
        },

        update: {

            read: function() {

                if (!this.content || !this.container || !isVisible(this.$el)) {
                    return false;
                }

                return {
                    current: toFloat(css(this.$el, 'maxHeight')),
                    max: Math.max(this.minHeight, height(this.container) - (dimensions(this.content).height - height(this.$el)))
                };
            },

            write: function(ref) {
                var current = ref.current;
                var max = ref.max;

                css(this.$el, 'maxHeight', max);
                if (Math.round(current) !== Math.round(max)) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['resize']

        }

    };

    var responsive = {

        props: ['width', 'height'],

        connected: function() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(parent(this.$el)), height: this.height}
                    : false;
            },

            write: function(dim) {
                height(this.$el, Dimensions.contain({
                    height: this.height,
                    width: this.width
                }, dim).height);
            },

            events: ['resize']

        }

    };

    var scroll = {

        props: {
            offset: Number
        },

        data: {
            offset: 0
        },

        methods: {

            scrollTo: function(el) {
                var this$1$1 = this;


                el = el && $(el) || document.body;

                if (trigger(this.$el, 'beforescroll', [this, el])) {
                    scrollIntoView(el, {offset: this.offset}).then(function () { return trigger(this$1$1.$el, 'scrolled', [this$1$1, el]); }
                    );
                }

            }

        },

        events: {

            click: function(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(("#" + (escape(decodeURIComponent((this.$el.hash || '').substr(1))))));
            }

        }

    };

    var stateKey = '_ukScrollspy';
    var scrollspy = {

        args: 'cls',

        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        data: function () { return ({
            cls: false,
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        }); },

        computed: {

            elements: {

                get: function(ref, $el) {
                    var target = ref.target;

                    return target ? $$(target, $el) : [$el];
                },

                watch: function(elements) {
                    if (this.hidden) {
                        css(filter(elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                },

                immediate: true

            }

        },

        disconnected: function() {
            var this$1$1 = this;

            this.elements.forEach(function (el) {
                removeClass(el, this$1$1.inViewClass, el[stateKey] ? el[stateKey].cls : '');
                delete el[stateKey];
            });
        },

        update: [

            {

                read: function(data$1) {
                    var this$1$1 = this;


                    // Let child components be applied at least once first
                    if (!data$1.update) {
                        Promise$1.resolve().then(function () {
                            this$1$1.$emit();
                            data$1.update = true;
                        });
                        return false;
                    }

                    this.elements.forEach(function (el) {

                        if (!el[stateKey]) {
                            el[stateKey] = {cls: data(el, 'uk-scrollspy-class') || this$1$1.cls};
                        }

                        el[stateKey].show = isInView(el, this$1$1.offsetTop, this$1$1.offsetLeft);

                    });

                },

                write: function(data) {
                    var this$1$1 = this;


                    this.elements.forEach(function (el) {

                        var state = el[stateKey];

                        if (state.show && !state.inview && !state.queued) {

                            state.queued = true;

                            data.promise = (data.promise || Promise$1.resolve()).then(function () { return new Promise$1(function (resolve) { return setTimeout(resolve, this$1$1.delay); }
                                ); }
                            ).then(function () {
                                this$1$1.toggle(el, true);
                                setTimeout(function () {
                                    state.queued = false;
                                    this$1$1.$emit();
                                }, 300);
                            });

                        } else if (!state.show && state.inview && !state.queued && this$1$1.repeat) {

                            this$1$1.toggle(el, false);

                        }

                    });

                },

                events: ['scroll', 'resize']

            }

        ],

        methods: {

            toggle: function(el, inview) {

                var state = el[stateKey];

                state.off && state.off();

                css(el, 'visibility', !inview && this.hidden ? 'hidden' : '');

                toggleClass(el, this.inViewClass, inview);
                toggleClass(el, state.cls);

                if (/\buk-animation-/.test(state.cls)) {
                    state.off = once(el, 'animationcancel animationend', function () { return removeClasses(el, 'uk-animation-[\\w-]+'); }
                    );
                }

                trigger(el, inview ? 'inview' : 'outview');

                state.inview = inview;

                this.$update(el);
            }

        }

    };

    var scrollspyNav = {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        data: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: {

                get: function(_, $el) {
                    return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
                },

                watch: function(links) {
                    if (this.scroll) {
                        this.$create('scroll', links, {offset: this.offset || 0});
                    }
                },

                immediate: true

            },

            targets: function() {
                return $$(this.links.map(function (el) { return escape(el.hash).substr(1); }).join(','));
            },

            elements: function(ref) {
                var selector = ref.closest;

                return closest(this.links, selector || '*');
            }

        },

        update: [

            {

                read: function() {
                    var this$1$1 = this;


                    var ref = this.targets;
                    var length = ref.length;

                    if (!length || !isVisible(this.$el)) {
                        return false;
                    }

                    var ref$1 = scrollParents(this.targets, /auto|scroll/, true);
                    var scrollElement = ref$1[0];
                    var scrollTop = scrollElement.scrollTop;
                    var scrollHeight = scrollElement.scrollHeight;
                    var max = scrollHeight - getViewportClientHeight(scrollElement);
                    var active = false;

                    if (scrollTop === max) {
                        active = length - 1;
                    } else {

                        this.targets.every(function (el, i) {
                            if (offset(el).top - offset(getViewport$1(scrollElement)).top - this$1$1.offset <= 0) {
                                active = i;
                                return true;
                            }
                        });

                        if (active === false && this.overflow) {
                            active = 0;
                        }
                    }

                    return {active: active};
                },

                write: function(ref) {
                    var active = ref.active;


                    var changed = active !== false && !hasClass(this.elements[active], this.cls);

                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);
                    addClass(this.elements[active], this.cls);

                    if (changed) {
                        trigger(this.$el, 'active', [active, this.elements[active]]);
                    }
                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var sticky = {

        mixins: [Class, Media],

        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },

        data: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            targetOffset: false
        },

        computed: {

            offset: function(ref) {
                var offset = ref.offset;

                return toPx(offset);
            },

            selTarget: function(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            },

            widthElement: function(ref, $el) {
                var widthElement = ref.widthElement;

                return query(widthElement, $el) || this.placeholder;
            },

            isActive: {

                get: function() {
                    return hasClass(this.selTarget, this.clsActive);
                },

                set: function(value) {
                    if (value && !this.isActive) {
                        replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                        trigger(this.$el, 'active');
                    } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                        replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                        trigger(this.$el, 'inactive');
                    }
                }

            }

        },

        connected: function() {
            this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
        },

        disconnected: function() {

            if (this.isFixed) {
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove$1(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        events: [

            {

                name: 'load hashchange popstate',

                el: function() {
                    return window;
                },

                handler: function() {
                    var this$1$1 = this;


                    if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                        return;
                    }

                    var target = $(location.hash);

                    if (target) {
                        fastdom.read(function () {

                            var ref = offset(target);
                            var top = ref.top;
                            var elTop = offset(this$1$1.$el).top;
                            var elHeight = this$1$1.$el.offsetHeight;

                            if (this$1$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                                scrollTop(window, top - elHeight - (isNumeric(this$1$1.targetOffset) ? this$1$1.targetOffset : 0) - this$1$1.offset);
                            }

                        });
                    }

                }

            }

        ],

        update: [

            {

                read: function(ref, types) {
                    var height = ref.height;


                    this.inactive = !this.matchMedia || !isVisible(this.$el);

                    if (this.inactive) {
                        return false;
                    }

                    if (this.isActive && types.has('resize')) {
                        this.hide();
                        height = this.$el.offsetHeight;
                        this.show();
                    }

                    height = !this.isActive ? this.$el.offsetHeight : height;

                    var referenceElement = this.isFixed ? this.placeholder : this.$el;
                    this.topOffset = offset(referenceElement).top;
                    this.bottomOffset = this.topOffset + height;
                    this.offsetParentTop = offset(referenceElement.offsetParent).top;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - this.$el.offsetHeight;
                    this.width = dimensions(isVisible(this.widthElement) ? this.widthElement : this.$el).width;

                    return {
                        height: height,
                        top: offsetPosition(this.placeholder)[0],
                        margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    };
                },

                write: function(ref) {
                    var height = ref.height;
                    var margins = ref.margins;


                    var ref$1 = this;
                    var placeholder = ref$1.placeholder;

                    css(placeholder, assign({height: height}, margins));

                    if (!within(placeholder, document)) {
                        after(this.$el, placeholder);
                        placeholder.hidden = true;
                    }

                    this.isActive = !!this.isActive; // force self-assign

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var scroll = ref.scroll; if ( scroll === void 0 ) scroll = 0;


                    this.scroll = window.pageYOffset;

                    return {
                        dir: scroll <= this.scroll ? 'down' : 'up',
                        scroll: this.scroll
                    };
                },

                write: function(data, types) {
                    var this$1$1 = this;


                    var now = Date.now();
                    var isScrollUpdate = types.has('scroll');
                    var initTimestamp = data.initTimestamp; if ( initTimestamp === void 0 ) initTimestamp = 0;
                    var dir = data.dir;
                    var lastDir = data.lastDir;
                    var lastScroll = data.lastScroll;
                    var scroll = data.scroll;
                    var top = data.top;

                    data.lastScroll = scroll;

                    if (scroll < 0 || scroll === lastScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                        return;
                    }

                    if (now - initTimestamp > 300 || dir !== lastDir) {
                        data.initScroll = scroll;
                        data.initTimestamp = now;
                    }

                    data.lastDir = dir;

                    if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' && isScrollUpdate || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isFixed) {

                            if (Animation.inProgress(this.$el) && top > scroll) {
                                Animation.cancel(this.$el);
                                this.hide();
                            }

                            return;
                        }

                        this.isFixed = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isFixed) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['resize', 'scroll']

            }

        ],

        methods: {

            show: function() {

                this.isFixed = true;
                this.update();
                this.placeholder.hidden = false;

            },

            hide: function() {

                this.isActive = false;
                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                this.placeholder.hidden = true;

            },

            update: function() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);
                var position = 'fixed';

                if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.offsetParentTop;
                    position = 'absolute';
                }

                css(this.$el, {
                    position: position,
                    top: (top + "px"),
                    width: this.width
                });

                this.isActive = active;
                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    };

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isString(value) && value.match(/^-?\d/)) {

            return propOffset + toPx(value);

        } else {

            return offset(value === true ? parent($el) : query(value, $el)).bottom;

        }
    }

    var Switcher = {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            itemNav: String,
            active: Number,
            swiping: Boolean
        },

        data: {
            connect: '~.uk-switcher',
            toggle: '> * > :first-child',
            itemNav: false,
            active: 0,
            swiping: true,
            cls: 'uk-active',
            attrItem: 'uk-switcher-item'
        },

        computed: {

            connects: {

                get: function(ref, $el) {
                    var connect = ref.connect;

                    return queryAll(connect, $el);
                },

                watch: function(connects) {
                    var this$1$1 = this;


                    if (this.swiping) {
                        css(connects, 'touch-action', 'pan-y pinch-zoom');
                    }

                    var index = this.index();
                    this.connects.forEach(function (el) { return children(el).forEach(function (child, i) { return toggleClass(child, this$1$1.cls, i === index); }
                        ); }
                    );

                },

                immediate: true

            },

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el).filter(function (el) { return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'); });
                },

                watch: function(toggles) {
                    var active = this.index();
                    this.show(~active ? active : toggles[this.active] || toggles[0]);
                },

                immediate: true

            },

            children: function() {
                var this$1$1 = this;

                return children(this.$el).filter(function (child) { return this$1$1.toggles.some(function (toggle) { return within(toggle, child); }); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.toggle;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            },

            {
                name: 'click',

                el: function() {
                    return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
                },

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function() {
                    return this.swiping;
                },

                el: function() {
                    return this.connects;
                },

                handler: function(ref) {
                    var type = ref.type;

                    this.show(endsWith(type, 'Left') ? 'next' : 'previous');
                }
            }

        ],

        methods: {

            index: function() {
                var this$1$1 = this;

                return findIndex(this.children, function (el) { return hasClass(el, this$1$1.cls); });
            },

            show: function(item) {
                var this$1$1 = this;


                var prev = this.index();
                var next = getIndex(
                    this.children[getIndex(item, this.toggles, prev)],
                    children(this.$el)
                );

                if (prev === next) {
                    return;
                }

                this.children.forEach(function (child, i) {
                    toggleClass(child, this$1$1.cls, next === i);
                    attr(this$1$1.toggles[i], 'aria-expanded', next === i);
                });

                this.connects.forEach(function (ref) {
                        var children = ref.children;

                        return this$1$1.toggleElement(toNodes(children).filter(function (child) { return hasClass(child, this$1$1.cls); }
                    ), false, prev >= 0).then(function () { return this$1$1.toggleElement(children[next], true, prev >= 0); }
                    );
                }
                );
            }

        }

    };

    var tab = {

        mixins: [Class],

        extends: Switcher,

        props: {
            media: Boolean
        },

        data: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        connected: function() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                this.$create('toggle', this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    };

    var toggle = {

        mixins: [Media, Togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            queued: Boolean
        },

        data: {
            href: false,
            target: false,
            mode: 'click',
            queued: true
        },

        connected: function() {
            if (!includes(this.mode, 'media') && !isFocusable(this.$el)) {
                attr(this.$el, 'tabindex', '0');
            }
        },

        computed: {

            target: {

                get: function(ref, $el) {
                    var href = ref.href;
                    var target = ref.target;

                    target = queryAll(target || href, $el);
                    return target.length && target || [$el];
                },

                watch: function() {
                    this.updateAria();
                },

                immediate: true

            }

        },

        events: [

            {
                name: pointerDown,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    var this$1$1 = this;


                    if (!isTouch(e) || this._showState) {
                        return;
                    }

                    // Clicking a button does not give it focus on all browsers and platforms
                    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
                    trigger(this.$el, 'focus');
                    once(document, pointerDown, function () { return trigger(this$1$1.$el, 'blur'); }, true, function (e) { return !within(e.target, this$1$1.$el); });

                    // Prevent initial click to prevent double toggle through focus + click
                    if (includes(this.mode, 'click')) {
                        this._preventClick = true;
                    }
                }
            },

            {

                name: (pointerEnter + " " + pointerLeave + " focus blur"),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (isTouch(e)) {
                        return;
                    }

                    var show = includes([pointerEnter, 'focus'], e.type);
                    var expanded = attr(this.$el, 'aria-expanded');

                    // Skip hide if still hovered or focused
                    if (!show && (
                        e.type === pointerLeave && matches(this.$el, ':focus')
                        || e.type === 'blur' && matches(this.$el, ':hover')
                    )) {
                        return;
                    }

                    // Skip if state does not change e.g. hover + focus received
                    if (this._showState && show === (expanded !== this._showState)) {

                        // Ensure reset if state has changed through click
                        if (!show) {
                            this._showState = null;
                        }
                        return;
                    }

                    this._showState = show ? expanded : null;

                    this.toggle(("toggle" + (show ? 'show' : 'hide')));
                }

            },

            {
                name: 'keydown',

                filter: function() {
                    return includes(this.mode, 'click');
                },

                handler: function(e) {
                    // Space
                    if (e.keyCode === 32) {
                        e.preventDefault();
                        this.$el.click();
                    }
                }
            },

            {

                name: 'click',

                filter: function() {
                    return includes(this.mode, 'click');
                },

                handler: function(e) {

                    if (this._preventClick) {
                        return this._preventClick = null;
                    }

                    var link;
                    if (closest(e.target, 'a[href="#"], a[href=""]')
                        || (link = closest(e.target, 'a[href]')) && (
                            attr(this.$el, 'aria-expanded') !== 'true'
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            },

            {

                name: 'toggled',

                self: true,

                el: function() {
                    return this.target;
                },

                handler: function(e, toggled) {
                    if (e.target === this.target[0]) {
                        this.updateAria(toggled);
                    }
                }
            }

        ],

        update: {

            read: function() {
                return includes(this.mode, 'media') && this.media
                    ? {match: this.matchMedia}
                    : false;
            },

            write: function(ref) {
                var match = ref.match;


                var toggled = this.isToggled(this.target);
                if (match ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['resize']

        },

        methods: {

            toggle: function(type) {
                var this$1$1 = this;


                if (!trigger(this.target, type || 'toggle', [this])) {
                    return;
                }

                if (!this.queued) {
                    return this.toggleElement(this.target);
                }

                var leaving = this.target.filter(function (el) { return hasClass(el, this$1$1.clsLeave); });

                if (leaving.length) {
                    this.target.forEach(function (el) {
                        var isLeaving = includes(leaving, el);
                        this$1$1.toggleElement(el, isLeaving, isLeaving);
                    });
                    return;
                }

                var toggled = this.target.filter(this.isToggled);
                this.toggleElement(toggled, false).then(function () { return this$1$1.toggleElement(this$1$1.target.filter(function (el) { return !includes(toggled, el); }
                    ), true); }
                );

            },

            updateAria: function(toggled) {
                if (includes(this.mode, 'media')) {
                    return;
                }

                attr(this.$el, 'aria-expanded', isBoolean(toggled)
                    ? toggled
                    : this.isToggled(this.target)
                );
            }

        }

    };

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Gif: gif,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Leader: leader,
        Margin: Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Video: Video,
        Close: Close,
        Spinner: Spinner,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
    });

    // register components
    each(components, function (component, name) { return UIkit.component(name, component); }
    );

    // core functionality
    UIkit.use(Core);

    boot(UIkit);

    return UIkit;

}));


/***/ }),

/***/ "./node_modules/uikit/src/js/util/ajax.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/ajax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "getImage": () => (/* binding */ getImage)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function ajax(url, options) {

    const env = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)({
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: _lang__WEBPACK_IMPORTED_MODULE_0__.noop,
        responseType: ''
    }, options);

    return _promise__WEBPACK_IMPORTED_MODULE_1__.Promise.resolve()
        .then(() => env.beforeSend(env))
        .then(() => send(url, env));
}

function send(url, env) {
    return new _promise__WEBPACK_IMPORTED_MODULE_1__.Promise((resolve, reject) => {
        let {xhr} = env;

        for (const prop in env) {
            if (prop in xhr) {
                try {

                    xhr[prop] = env[prop];

                } catch (e) {}
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (const header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        (0,_event__WEBPACK_IMPORTED_MODULE_2__.on)(xhr, 'load', () => {

            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {

                // IE 11 does not support responseType 'json'
                if (env.responseType === 'json' && (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(xhr.response)) {
                    xhr = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(copyXhr(xhr), {response: JSON.parse(xhr.response)});
                }

                resolve(xhr);

            } else {
                reject((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error(xhr.statusText), {
                    xhr,
                    status: xhr.status
                }));
            }

        });

        (0,_event__WEBPACK_IMPORTED_MODULE_2__.on)(xhr, 'error', () => reject((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error('Network Error'), {xhr})));
        (0,_event__WEBPACK_IMPORTED_MODULE_2__.on)(xhr, 'timeout', () => reject((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)(Error('Network Timeout'), {xhr})));

        xhr.send(env.data);
    });
}

function getImage(src, srcset, sizes) {

    return new _promise__WEBPACK_IMPORTED_MODULE_1__.Promise((resolve, reject) => {
        const img = new Image();

        img.onerror = e => reject(e);
        img.onload = () => resolve(img);

        sizes && (img.sizes = sizes);
        srcset && (img.srcset = srcset);
        img.src = src;
    });

}

function copyXhr(source) {
    const target = {};
    for (const key in source) {
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/animation.js":
/*!*****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/animation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "Animation": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class */ "./node_modules/uikit/src/js/util/class.js");







function transition(element, props, duration = 400, timing = 'linear') {

    return _promise__WEBPACK_IMPORTED_MODULE_0__.Promise.all((0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).map(element =>
        new _promise__WEBPACK_IMPORTED_MODULE_0__.Promise((resolve, reject) => {

            for (const name in props) {
                const value = (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, name);
                if (value === '') {
                    (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, name, value);
                }
            }

            const timer = setTimeout(() => (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'transitionend'), duration);

            (0,_event__WEBPACK_IMPORTED_MODULE_3__.once)(element, 'transitionend transitioncanceled', ({type}) => {
                clearTimeout(timer);
                (0,_class__WEBPACK_IMPORTED_MODULE_4__.removeClass)(element, 'uk-transition');
                (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, {
                    transitionProperty: '',
                    transitionDuration: '',
                    transitionTimingFunction: ''
                });
                type === 'transitioncanceled' ? reject() : resolve(element);
            }, {self: true});

            (0,_class__WEBPACK_IMPORTED_MODULE_4__.addClass)(element, 'uk-transition');
            (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, (0,_lang__WEBPACK_IMPORTED_MODULE_1__.assign)({
                transitionProperty: Object.keys(props).map(_style__WEBPACK_IMPORTED_MODULE_2__.propName).join(','),
                transitionDuration: `${duration}ms`,
                transitionTimingFunction: timing
            }, props));

        })
    ));

}

const Transition = {

    start: transition,

    stop(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'transitionend');
        return _promise__WEBPACK_IMPORTED_MODULE_0__.Promise.resolve();
    },

    cancel(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'transitioncanceled');
    },

    inProgress(element) {
        return (0,_class__WEBPACK_IMPORTED_MODULE_4__.hasClass)(element, 'uk-transition');
    }

};

const animationPrefix = 'uk-animation-';

function animate(element, animation, duration = 200, origin, out) {

    return _promise__WEBPACK_IMPORTED_MODULE_0__.Promise.all((0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).map(element =>
        new _promise__WEBPACK_IMPORTED_MODULE_0__.Promise((resolve, reject) => {

            (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'animationcanceled');
            const timer = setTimeout(() => (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'animationend'), duration);

            (0,_event__WEBPACK_IMPORTED_MODULE_3__.once)(element, 'animationend animationcanceled', ({type}) => {

                clearTimeout(timer);

                type === 'animationcanceled' ? reject() : resolve(element);

                (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, 'animationDuration', '');
                (0,_class__WEBPACK_IMPORTED_MODULE_4__.removeClasses)(element, `${animationPrefix}\\S*`);

            }, {self: true});

            (0,_style__WEBPACK_IMPORTED_MODULE_2__.css)(element, 'animationDuration', `${duration}ms`);
            (0,_class__WEBPACK_IMPORTED_MODULE_4__.addClass)(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.startsWith)(animation, animationPrefix)) {
                origin && (0,_class__WEBPACK_IMPORTED_MODULE_4__.addClass)(element, `uk-transform-origin-${origin}`);
                out && (0,_class__WEBPACK_IMPORTED_MODULE_4__.addClass)(element, `${animationPrefix}reverse`);
            }

        })
    ));

}

const inProgress = new RegExp(`${animationPrefix}(enter|leave)`);
const Animation = {

    in: animate,

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return inProgress.test((0,_attr__WEBPACK_IMPORTED_MODULE_5__.attr)(element, 'class'));
    },

    cancel(element) {
        (0,_event__WEBPACK_IMPORTED_MODULE_3__.trigger)(element, 'animationcanceled');
    }

};


/***/ }),

/***/ "./node_modules/uikit/src/js/util/attr.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/attr.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "hasAttr": () => (/* binding */ hasAttr),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


function attr(element, name, value) {

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isObject)(name)) {
        for (const key in name) {
            attr(element, key, name[key]);
        }
        return;
    }

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
        element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
        return element && element.getAttribute(name);
    } else {
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).forEach(element => {

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
                value = value.call(element, attr(element, name));
            }

            if (value === null) {
                removeAttr(element, name);
            } else {
                element.setAttribute(name, value);
            }
        });
    }

}

function hasAttr(element, name) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(element => element.hasAttribute(name));
}

function removeAttr(element, name) {
    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element);
    name.split(' ').forEach(name =>
        element.forEach(element =>
            element.hasAttribute(name) && element.removeAttribute(name)
        )
    );
}

function data(element, attribute) {
    for (let i = 0, attrs = [attribute, `data-${attribute}`]; i < attrs.length; i++) {
        if (hasAttr(element, attrs[i])) {
            return attr(element, attrs[i]);
        }
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/class.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/class.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeClasses": () => (/* binding */ removeClasses),
/* harmony export */   "replaceClass": () => (/* binding */ replaceClass),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



function addClass(element, ...args) {
    apply(element, args, 'add');
}

function removeClass(element, ...args) {
    apply(element, args, 'remove');
}

function removeClasses(element, cls) {
    (0,_attr__WEBPACK_IMPORTED_MODULE_0__.attr)(element, 'class', value => (value || '').replace(new RegExp(`\\b${cls}\\b`, 'g'), ''));
}

function replaceClass(element, ...args) {
    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
}

function hasClass(element, cls) {
    [cls] = getClasses(cls);
    const nodes = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element);
    for (let n = 0; n < nodes.length; n++) {
        if (cls && nodes[n].classList.contains(cls)) {
            return true;
        }
    }
    return false;
}

function toggleClass(element, cls, force) {

    cls = getClasses(cls);

    const nodes = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element);
    for (let n = 0; n < nodes.length; n++) {
        const list = nodes[n].classList;
        for (let i = 0; i < cls.length; i++) {
            if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(force)) {
                list.toggle(cls[i]);
            } else if (supports.Force) {
                list.toggle(cls[i], !!force);
            } else {
                list[force ? 'add' : 'remove'](cls[i]);
            }
        }
    }
}

function apply(element, args, fn) {

    args = args.reduce((args, arg) => args.concat(getClasses(arg)), []);

    const nodes = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element);
    for (let n = 0; n < nodes.length; n++) {
        if (supports.Multiple) {
            nodes[n].classList[fn](...args);
        } else {
            args.forEach(cls => nodes[n].classList[fn](cls));
        }
    }
}

function getClasses(str) {
    return String(str).split(/\s|,/).filter(Boolean);
}

// IE 11
let supports = {

    get Multiple() {
        return this.get('Multiple');
    },

    get Force() {
        return this.get('Force');
    },

    get(key) {

        const {classList} = document.createElement('_');
        classList.add('a', 'b');
        classList.toggle('c', false);
        supports = {
            Multiple: classList.contains('b'),
            Force: !classList.contains('c')
        };

        return supports[key];
    }

};


/***/ }),

/***/ "./node_modules/uikit/src/js/util/dimensions.js":
/*!******************************************************!*\
  !*** ./node_modules/uikit/src/js/util/dimensions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dimensions": () => (/* binding */ dimensions),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "offsetPosition": () => (/* binding */ offsetPosition),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "width": () => (/* binding */ width),
/* harmony export */   "boxModelAdjust": () => (/* binding */ boxModelAdjust),
/* harmony export */   "flipPosition": () => (/* binding */ flipPosition),
/* harmony export */   "toPx": () => (/* binding */ toPx)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



const dirs = {
    width: ['left', 'right'],
    height: ['top', 'bottom']
};

function dimensions(element) {

    const rect = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)
        ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element).getBoundingClientRect()
        : {height: height(element), width: width(element), top: 0, left: 0};

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        left: rect.left,
        bottom: rect.top + rect.height,
        right: rect.left + rect.width
    };
}

function offset(element, coordinates) {

    const currentOffset = dimensions(element);

    if (element) {
        const {pageYOffset, pageXOffset} = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element);
        const offsetBy = {height: pageYOffset, width: pageXOffset};

        for (const dir in dirs) {
            for (const i in dirs[dir]) {
                currentOffset[dirs[dir][i]] += offsetBy[dir];
            }
        }
    }

    if (!coordinates) {
        return currentOffset;
    }

    const pos = (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'position');

    (0,_lang__WEBPACK_IMPORTED_MODULE_0__.each)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, ['left', 'top']), (value, prop) =>
        (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, prop, coordinates[prop]
            - currentOffset[prop]
            + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(pos === 'absolute' && value === 'auto'
                ? position(element)[prop]
                : value)
        )
    );
}

function position(element) {

    let {top, left} = offset(element);

    const {ownerDocument: {body, documentElement}, offsetParent} = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
    let parent = offsetParent || documentElement;

    while (parent && (parent === body || parent === documentElement) && (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'position') === 'static') {
        parent = parent.parentNode;
    }

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(parent)) {
        const parentOffset = offset(parent);
        top -= parentOffset.top + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'borderTopWidth'));
        left -= parentOffset.left + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(parent, 'borderLeftWidth'));
    }

    return {
        top: top - (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'marginTop')),
        left: left - (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'marginLeft'))
    };
}

function offsetPosition(element) {
    const offset = [0, 0];

    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);

    do {

        offset[0] += element.offsetTop;
        offset[1] += element.offsetLeft;

        if ((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'position') === 'fixed') {
            const win = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element);
            offset[0] += win.pageYOffset;
            offset[1] += win.pageXOffset;
            return offset;
        }

    } while ((element = element.offsetParent));

    return offset;
}

const height = dimension('height');
const width = dimension('width');

function dimension(prop) {
    const propName = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.ucfirst)(prop);
    return (element, value) => {

        if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isWindow)(element)) {
                return element[`inner${propName}`];
            }

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isDocument)(element)) {
                const doc = element.documentElement;
                return Math.max(doc[`offset${propName}`], doc[`scroll${propName}`]);
            }

            element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);

            value = (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, prop);
            value = value === 'auto' ? element[`offset${propName}`] : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value) || 0;

            return value - boxModelAdjust(element, prop);

        } else {

            return (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, prop, !value && value !== 0
                ? ''
                : +value + boxModelAdjust(element, prop) + 'px'
            );

        }

    };
}

function boxModelAdjust(element, prop, sizing = 'border-box') {
    return (0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, 'boxSizing') === sizing
        ? dirs[prop].map(_lang__WEBPACK_IMPORTED_MODULE_0__.ucfirst).reduce((value, prop) =>
            value
            + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, `padding${prop}`))
            + (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)((0,_style__WEBPACK_IMPORTED_MODULE_1__.css)(element, `border${prop}Width`))
            , 0)
        : 0;
}

function flipPosition(pos) {
    for (const dir in dirs) {
        for (const i in dirs[dir]) {
            if (dirs[dir][i] === pos) {
                return dirs[dir][1 - i];
            }
        }
    }
    return pos;
}

function toPx(value, property = 'width', element = window) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(value)
        ? +value
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.endsWith)(value, 'vh')
            ? percent(height((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element)), value)
            : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.endsWith)(value, 'vw')
                ? percent(width((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element)), value)
                : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.endsWith)(value, '%')
                    ? percent(dimensions(element)[property], value)
                    : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value);
}

function percent(base, value) {
    return base * (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toFloat)(value) / 100;
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/dom.js":
/*!***********************************************!*\
  !*** ./node_modules/uikit/src/js/util/dom.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ready": () => (/* binding */ ready),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "before": () => (/* binding */ before),
/* harmony export */   "after": () => (/* binding */ after),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "wrapAll": () => (/* binding */ wrapAll),
/* harmony export */   "wrapInner": () => (/* binding */ wrapInner),
/* harmony export */   "unwrap": () => (/* binding */ unwrap),
/* harmony export */   "fragment": () => (/* binding */ fragment),
/* harmony export */   "apply": () => (/* binding */ apply),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");





function ready(fn) {

    if (document.readyState !== 'loading') {
        fn();
        return;
    }

    const unbind = (0,_event__WEBPACK_IMPORTED_MODULE_0__.on)(document, 'DOMContentLoaded', function () {
        unbind();
        fn();
    });
}

function empty(element) {
    element = $(element);
    element.innerHTML = '';
    return element;
}

function html(parent, html) {
    parent = $(parent);
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(html)
        ? parent.innerHTML
        : append(parent.hasChildNodes() ? empty(parent) : parent, html);
}

function prepend(parent, element) {

    parent = $(parent);

    if (!parent.hasChildNodes()) {
        return append(parent, element);
    } else {
        return insertNodes(element, element => parent.insertBefore(element, parent.firstChild));
    }
}

function append(parent, element) {
    parent = $(parent);
    return insertNodes(element, element => parent.appendChild(element));
}

function before(ref, element) {
    ref = $(ref);
    return insertNodes(element, element => ref.parentNode.insertBefore(element, ref));
}

function after(ref, element) {
    ref = $(ref);
    return insertNodes(element, element => ref.nextSibling
        ? before(ref.nextSibling, element)
        : append(ref.parentNode, element)
    );
}

function insertNodes(element, fn) {
    element = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isString)(element) ? fragment(element) : element;
    return element
        ? 'length' in element
            ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).map(fn)
            : fn(element)
        : null;
}

function remove(element) {
    (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).forEach(element => element.parentNode && element.parentNode.removeChild(element));
}

function wrapAll(element, structure) {

    structure = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(before(element, structure));

    while (structure.firstChild) {
        structure = structure.firstChild;
    }

    append(structure, element);

    return structure;
}

function wrapInner(element, structure) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)((0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element).map(element =>
        element.hasChildNodes ? wrapAll((0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element.childNodes), structure) : append(element, structure)
    ));
}

function unwrap(element) {
    (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(element)
        .map(_filter__WEBPACK_IMPORTED_MODULE_2__.parent)
        .filter((value, index, self) => self.indexOf(value) === index)
        .forEach(parent => {
            before(parent, parent.childNodes);
            remove(parent);
        });
}

const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

function fragment(html) {

    const matches = singleTagRe.exec(html);
    if (matches) {
        return document.createElement(matches[1]);
    }

    const container = document.createElement('div');
    if (fragmentRe.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
    } else {
        container.textContent = html;
    }

    return container.childNodes.length > 1 ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(container.childNodes) : container.firstChild;

}

function apply(node, fn) {

    if (!(0,_lang__WEBPACK_IMPORTED_MODULE_1__.isElement)(node)) {
        return;
    }

    fn(node);
    node = node.firstElementChild;
    while (node) {
        const next = node.nextElementSibling;
        apply(node, fn);
        node = next;
    }
}

function $(selector, context) {
    return isHtml(selector)
        ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(fragment(selector))
        : (0,_selector__WEBPACK_IMPORTED_MODULE_3__.find)(selector, context);
}

function $$(selector, context) {
    return isHtml(selector)
        ? (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNodes)(fragment(selector))
        : (0,_selector__WEBPACK_IMPORTED_MODULE_3__.findAll)(selector, context);
}

function isHtml(str) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isString)(str) && (str[0] === '<' || str.match(/^\s*</));
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/env.js":
/*!***********************************************!*\
  !*** ./node_modules/uikit/src/js/util/env.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inBrowser": () => (/* binding */ inBrowser),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isRtl": () => (/* binding */ isRtl),
/* harmony export */   "hasTouch": () => (/* binding */ hasTouch),
/* harmony export */   "pointerDown": () => (/* binding */ pointerDown),
/* harmony export */   "pointerMove": () => (/* binding */ pointerMove),
/* harmony export */   "pointerUp": () => (/* binding */ pointerUp),
/* harmony export */   "pointerEnter": () => (/* binding */ pointerEnter),
/* harmony export */   "pointerLeave": () => (/* binding */ pointerLeave),
/* harmony export */   "pointerCancel": () => (/* binding */ pointerCancel)
/* harmony export */ });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* global DocumentTouch */


const inBrowser = typeof window !== 'undefined';
const isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
const isRtl = inBrowser && (0,_attr__WEBPACK_IMPORTED_MODULE_0__.attr)(document.documentElement, 'dir') === 'rtl';

const hasTouchEvents = inBrowser && 'ontouchstart' in window;
const hasPointerEvents = inBrowser && window.PointerEvent;
const hasTouch = inBrowser && (hasTouchEvents
    || window.DocumentTouch && document instanceof DocumentTouch
    || navigator.maxTouchPoints); // IE >=11

const pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
const pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
const pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
const pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
const pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
const pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';


/***/ }),

/***/ "./node_modules/uikit/src/js/util/event.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/event.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "createEvent": () => (/* binding */ createEvent),
/* harmony export */   "toEventTargets": () => (/* binding */ toEventTargets),
/* harmony export */   "isTouch": () => (/* binding */ isTouch),
/* harmony export */   "getEventPos": () => (/* binding */ getEventPos)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");





function on(...args) {

    let [targets, type, selector, listener, useCapture] = getArgs(args);

    targets = toEventTargets(targets);

    if (listener.length > 1) {
        listener = detail(listener);
    }

    if (useCapture && useCapture.self) {
        listener = selfFilter(listener);
    }

    if (selector) {
        listener = delegate(selector, listener);
    }

    useCapture = useCaptureFilter(useCapture);

    type.split(' ').forEach(type =>
        targets.forEach(target =>
            target.addEventListener(type, listener, useCapture)
        )
    );
    return () => off(targets, type, listener, useCapture);
}

function off(targets, type, listener, useCapture = false) {
    useCapture = useCaptureFilter(useCapture);
    targets = toEventTargets(targets);
    type.split(' ').forEach(type =>
        targets.forEach(target =>
            target.removeEventListener(type, listener, useCapture)
        )
    );
}

function once(...args) {

    const [element, type, selector, listener, useCapture, condition] = getArgs(args);
    const off = on(element, type, selector, e => {
        const result = !condition || condition(e);
        if (result) {
            off();
            listener(e, result);
        }
    }, useCapture);

    return off;
}

function trigger(targets, event, detail) {
    return toEventTargets(targets).reduce((notCanceled, target) =>
            notCanceled && target.dispatchEvent(createEvent(event, true, true, detail))
        , true);
}

function createEvent(e, bubbles = true, cancelable = false, detail) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(e)) {
        const event = document.createEvent('CustomEvent'); // IE 11
        event.initCustomEvent(e, bubbles, cancelable, detail);
        e = event;
    }

    return e;
}

function getArgs(args) {
    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(args[2])) {
        args.splice(2, 0, false);
    }
    return args;
}

function delegate(selector, listener) {
    return e => {

        const current = selector[0] === '>'
            ? (0,_selector__WEBPACK_IMPORTED_MODULE_1__.findAll)(selector, e.currentTarget).reverse().filter(element => (0,_filter__WEBPACK_IMPORTED_MODULE_2__.within)(e.target, element))[0]
            : (0,_filter__WEBPACK_IMPORTED_MODULE_2__.closest)(e.target, selector);

        if (current) {
            e.current = current;
            listener.call(this, e);
        }

    };
}

function detail(listener) {
    return e => (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(e.detail) ? listener(e, ...e.detail) : listener(e);
}

function selfFilter(listener) {
    return function (e) {
        if (e.target === e.currentTarget || e.target === e.current) {
            return listener.call(null, e);
        }
    };
}

function useCaptureFilter(options) {
    return options && _env__WEBPACK_IMPORTED_MODULE_3__.isIE && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(options)
        ? !!options.capture
        : options;
}

function isEventTarget(target) {
    return target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(target);
}

function toEventTargets(target) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)
        ? target.map(toEventTarget).filter(Boolean)
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(target)
            ? (0,_selector__WEBPACK_IMPORTED_MODULE_1__.findAll)(target)
            : isEventTarget(target)
                ? [target]
                : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(target);
}

function isTouch(e) {
    return e.pointerType === 'touch' || !!e.touches;
}

function getEventPos(e) {
    const {touches, changedTouches} = e;
    const {clientX: x, clientY: y} = touches && touches[0] || changedTouches && changedTouches[0] || e;

    return {x, y};
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/fastdom.js":
/*!***************************************************!*\
  !*** ./node_modules/uikit/src/js/util/fastdom.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fastdom": () => (/* binding */ fastdom)
/* harmony export */ });
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");

/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/

const fastdom = {

    reads: [],
    writes: [],

    read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },

    write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },

    clear(task) {
        remove(this.reads, task);
        remove(this.writes, task);
    },

    flush

};

function flush(recursion = 1) {
    runTasks(fastdom.reads);
    runTasks(fastdom.writes.splice(0));

    fastdom.scheduled = false;

    if (fastdom.reads.length || fastdom.writes.length) {
        scheduleFlush(recursion + 1);
    }
}

const RECURSION_LIMIT = 4;
function scheduleFlush(recursion) {

    if (fastdom.scheduled) {
        return;
    }

    fastdom.scheduled = true;
    if (recursion && recursion < RECURSION_LIMIT) {
        _promise__WEBPACK_IMPORTED_MODULE_0__.Promise.resolve().then(() => flush(recursion));
    } else {
        requestAnimationFrame(() => flush());
    }

}

function runTasks(tasks) {
    let task;
    while ((task = tasks.shift())) {
        try {
            task();
        } catch (e) {
            console.error(e);
        }
    }
}

function remove(array, item) {
    const index = array.indexOf(item);
    return ~index && array.splice(index, 1);
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/filter.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/src/js/util/filter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVoidElement": () => (/* binding */ isVoidElement),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "selInput": () => (/* binding */ selInput),
/* harmony export */   "isInput": () => (/* binding */ isInput),
/* harmony export */   "selFocusable": () => (/* binding */ selFocusable),
/* harmony export */   "isFocusable": () => (/* binding */ isFocusable),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "matches": () => (/* binding */ matches),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "within": () => (/* binding */ within),
/* harmony export */   "parents": () => (/* binding */ parents),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "index": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



const voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
function isVoidElement(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(element => voidElements[element.tagName.toLowerCase()]);
}

function isVisible(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(element => element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}

const selInput = 'input,select,textarea,button';
function isInput(element) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(element => matches(element, selInput));
}

const selFocusable = `${selInput},a[href],[tabindex]`;
function isFocusable(element) {
    return matches(element, selFocusable);
}

function parent(element) {
    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
    return element && (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(element.parentNode) && element.parentNode;
}

function filter(element, selector) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).filter(element => matches(element, selector));
}

const elProto = _env__WEBPACK_IMPORTED_MODULE_1__.inBrowser ? Element.prototype : {};
const matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || _lang__WEBPACK_IMPORTED_MODULE_0__.noop;

function matches(element, selector) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).some(element => matchesFn.call(element, selector));
}

const closestFn = elProto.closest || function (selector) {
    let ancestor = this;

    do {

        if (matches(ancestor, selector)) {
            return ancestor;
        }

    } while ((ancestor = parent(ancestor)));
};

function closest(element, selector) {

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.startsWith)(selector, '>')) {
        selector = selector.slice(1);
    }

    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)
        ? closestFn.call(element, selector)
        : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).map(element => closest(element, selector)).filter(Boolean);
}

function within(element, selector) {
    return !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)
        ? element === selector || ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isDocument)(selector)
            ? selector.documentElement
            : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(selector)).contains((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element)) // IE 11 document does not implement contains
        : matches(element, selector) || !!closest(element, selector);
}

function parents(element, selector) {
    const elements = [];

    while ((element = parent(element))) {
        if (!selector || matches(element, selector)) {
            elements.push(element);
        }
    }

    return elements;
}

function children(element, selector) {
    element = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(element);
    const children = element ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element.children) : [];
    return selector ? filter(children, selector) : children;
}

function index(element, ref) {
    return ref
        ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).indexOf((0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(ref))
        : children(parent(element)).indexOf(element);
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/index.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_0__.ajax),
/* harmony export */   "getImage": () => (/* reexport safe */ _ajax__WEBPACK_IMPORTED_MODULE_0__.getImage),
/* harmony export */   "Animation": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Animation),
/* harmony export */   "Transition": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Transition),
/* harmony export */   "animate": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.animate),
/* harmony export */   "transition": () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.transition),
/* harmony export */   "attr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.attr),
/* harmony export */   "data": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.data),
/* harmony export */   "hasAttr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.hasAttr),
/* harmony export */   "removeAttr": () => (/* reexport safe */ _attr__WEBPACK_IMPORTED_MODULE_2__.removeAttr),
/* harmony export */   "addClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.addClass),
/* harmony export */   "hasClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.hasClass),
/* harmony export */   "removeClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.removeClass),
/* harmony export */   "removeClasses": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.removeClasses),
/* harmony export */   "replaceClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.replaceClass),
/* harmony export */   "toggleClass": () => (/* reexport safe */ _class__WEBPACK_IMPORTED_MODULE_3__.toggleClass),
/* harmony export */   "boxModelAdjust": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.boxModelAdjust),
/* harmony export */   "dimensions": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.dimensions),
/* harmony export */   "flipPosition": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.flipPosition),
/* harmony export */   "height": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.height),
/* harmony export */   "offset": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.offset),
/* harmony export */   "offsetPosition": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.offsetPosition),
/* harmony export */   "position": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.position),
/* harmony export */   "toPx": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.toPx),
/* harmony export */   "width": () => (/* reexport safe */ _dimensions__WEBPACK_IMPORTED_MODULE_4__.width),
/* harmony export */   "$": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "$$": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.$$),
/* harmony export */   "after": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.after),
/* harmony export */   "append": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.append),
/* harmony export */   "apply": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.apply),
/* harmony export */   "before": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.before),
/* harmony export */   "empty": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.empty),
/* harmony export */   "fragment": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.fragment),
/* harmony export */   "html": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.html),
/* harmony export */   "prepend": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.prepend),
/* harmony export */   "ready": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.ready),
/* harmony export */   "remove": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.remove),
/* harmony export */   "unwrap": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.unwrap),
/* harmony export */   "wrapAll": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.wrapAll),
/* harmony export */   "wrapInner": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_5__.wrapInner),
/* harmony export */   "hasTouch": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.hasTouch),
/* harmony export */   "inBrowser": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.inBrowser),
/* harmony export */   "isIE": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.isIE),
/* harmony export */   "isRtl": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.isRtl),
/* harmony export */   "pointerCancel": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerCancel),
/* harmony export */   "pointerDown": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerDown),
/* harmony export */   "pointerEnter": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerEnter),
/* harmony export */   "pointerLeave": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerLeave),
/* harmony export */   "pointerMove": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerMove),
/* harmony export */   "pointerUp": () => (/* reexport safe */ _env__WEBPACK_IMPORTED_MODULE_6__.pointerUp),
/* harmony export */   "createEvent": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.createEvent),
/* harmony export */   "getEventPos": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.getEventPos),
/* harmony export */   "isTouch": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.isTouch),
/* harmony export */   "off": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.off),
/* harmony export */   "on": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.on),
/* harmony export */   "once": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.once),
/* harmony export */   "toEventTargets": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.toEventTargets),
/* harmony export */   "trigger": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_7__.trigger),
/* harmony export */   "fastdom": () => (/* reexport safe */ _fastdom__WEBPACK_IMPORTED_MODULE_8__.fastdom),
/* harmony export */   "children": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.children),
/* harmony export */   "closest": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.closest),
/* harmony export */   "filter": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.filter),
/* harmony export */   "index": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.index),
/* harmony export */   "isFocusable": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isFocusable),
/* harmony export */   "isInput": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isInput),
/* harmony export */   "isVisible": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isVisible),
/* harmony export */   "isVoidElement": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.isVoidElement),
/* harmony export */   "matches": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.matches),
/* harmony export */   "parent": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.parent),
/* harmony export */   "parents": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.parents),
/* harmony export */   "selFocusable": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.selFocusable),
/* harmony export */   "selInput": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.selInput),
/* harmony export */   "within": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_9__.within),
/* harmony export */   "Dimensions": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.Dimensions),
/* harmony export */   "assign": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.assign),
/* harmony export */   "camelize": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.camelize),
/* harmony export */   "clamp": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.clamp),
/* harmony export */   "each": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.each),
/* harmony export */   "endsWith": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.endsWith),
/* harmony export */   "findIndex": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.findIndex),
/* harmony export */   "getIndex": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.getIndex),
/* harmony export */   "hasOwn": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.hasOwn),
/* harmony export */   "hyphenate": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.hyphenate),
/* harmony export */   "includes": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.includes),
/* harmony export */   "intersectRect": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.intersectRect),
/* harmony export */   "isArray": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isArray),
/* harmony export */   "isBoolean": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isBoolean),
/* harmony export */   "isDocument": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isDocument),
/* harmony export */   "isElement": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isElement),
/* harmony export */   "isEmpty": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isEmpty),
/* harmony export */   "isEqual": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isEqual),
/* harmony export */   "isFunction": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isFunction),
/* harmony export */   "isNode": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNode),
/* harmony export */   "isNumber": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNumber),
/* harmony export */   "isNumeric": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isNumeric),
/* harmony export */   "isObject": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isObject),
/* harmony export */   "isPlainObject": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isPlainObject),
/* harmony export */   "isString": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isString),
/* harmony export */   "isUndefined": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isUndefined),
/* harmony export */   "isWindow": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.isWindow),
/* harmony export */   "last": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.last),
/* harmony export */   "memoize": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.memoize),
/* harmony export */   "noop": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.noop),
/* harmony export */   "pointInRect": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.pointInRect),
/* harmony export */   "sortBy": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.sortBy),
/* harmony export */   "startsWith": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.startsWith),
/* harmony export */   "swap": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.swap),
/* harmony export */   "toArray": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toArray),
/* harmony export */   "toBoolean": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toBoolean),
/* harmony export */   "toFloat": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toFloat),
/* harmony export */   "toMs": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toMs),
/* harmony export */   "toNode": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNode),
/* harmony export */   "toNodes": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNodes),
/* harmony export */   "toNumber": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toNumber),
/* harmony export */   "toWindow": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.toWindow),
/* harmony export */   "ucfirst": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.ucfirst),
/* harmony export */   "uniqueBy": () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_10__.uniqueBy),
/* harmony export */   "MouseTracker": () => (/* reexport safe */ _mouse__WEBPACK_IMPORTED_MODULE_11__.MouseTracker),
/* harmony export */   "mergeOptions": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_12__.mergeOptions),
/* harmony export */   "parseOptions": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_12__.parseOptions),
/* harmony export */   "isVideo": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_13__.isVideo),
/* harmony export */   "mute": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_13__.mute),
/* harmony export */   "pause": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_13__.pause),
/* harmony export */   "play": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_13__.play),
/* harmony export */   "positionAt": () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_14__.positionAt),
/* harmony export */   "Deferred": () => (/* reexport safe */ _promise__WEBPACK_IMPORTED_MODULE_15__.Deferred),
/* harmony export */   "Promise": () => (/* reexport safe */ _promise__WEBPACK_IMPORTED_MODULE_15__.Promise),
/* harmony export */   "escape": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.escape),
/* harmony export */   "find": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.find),
/* harmony export */   "findAll": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.findAll),
/* harmony export */   "query": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.query),
/* harmony export */   "queryAll": () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_16__.queryAll),
/* harmony export */   "css": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.css),
/* harmony export */   "getCssVar": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.getCssVar),
/* harmony export */   "propName": () => (/* reexport safe */ _style__WEBPACK_IMPORTED_MODULE_17__.propName),
/* harmony export */   "getViewport": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.getViewport),
/* harmony export */   "getViewportClientHeight": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.getViewportClientHeight),
/* harmony export */   "isInView": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.isInView),
/* harmony export */   "scrollIntoView": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollIntoView),
/* harmony export */   "scrollParents": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollParents),
/* harmony export */   "scrollTop": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrollTop),
/* harmony export */   "scrolledOver": () => (/* reexport safe */ _viewport__WEBPACK_IMPORTED_MODULE_18__.scrolledOver)
/* harmony export */ });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./node_modules/uikit/src/js/util/ajax.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./node_modules/uikit/src/js/util/animation.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attr */ "./node_modules/uikit/src/js/util/attr.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ "./node_modules/uikit/src/js/util/class.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./node_modules/uikit/src/js/util/dom.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _fastdom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fastdom */ "./node_modules/uikit/src/js/util/fastdom.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mouse */ "./node_modules/uikit/src/js/util/mouse.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options */ "./node_modules/uikit/src/js/util/options.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player */ "./node_modules/uikit/src/js/util/player.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position */ "./node_modules/uikit/src/js/util/position.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selector */ "./node_modules/uikit/src/js/util/selector.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./viewport */ "./node_modules/uikit/src/js/util/viewport.js");





















/***/ }),

/***/ "./node_modules/uikit/src/js/util/lang.js":
/*!************************************************!*\
  !*** ./node_modules/uikit/src/js/util/lang.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "ucfirst": () => (/* binding */ ucfirst),
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "endsWith": () => (/* binding */ endsWith),
/* harmony export */   "includes": () => (/* binding */ includes),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isWindow": () => (/* binding */ isWindow),
/* harmony export */   "isDocument": () => (/* binding */ isDocument),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toFloat": () => (/* binding */ toFloat),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "toNode": () => (/* binding */ toNode),
/* harmony export */   "toNodes": () => (/* binding */ toNodes),
/* harmony export */   "toWindow": () => (/* binding */ toWindow),
/* harmony export */   "toMs": () => (/* binding */ toMs),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "last": () => (/* binding */ last),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "sortBy": () => (/* binding */ sortBy),
/* harmony export */   "uniqueBy": () => (/* binding */ uniqueBy),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "intersectRect": () => (/* binding */ intersectRect),
/* harmony export */   "pointInRect": () => (/* binding */ pointInRect),
/* harmony export */   "Dimensions": () => (/* binding */ Dimensions),
/* harmony export */   "getIndex": () => (/* binding */ getIndex),
/* harmony export */   "memoize": () => (/* binding */ memoize)
/* harmony export */ });
const objPrototype = Object.prototype;
const {hasOwnProperty} = objPrototype;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

const hyphenateRe = /\B([A-Z])/g;

const hyphenate = memoize(str => str
    .replace(hyphenateRe, '-$1')
    .toLowerCase()
);

const camelizeRe = /-(\w)/g;

const camelize = memoize(str =>
    str.replace(camelizeRe, toUpper)
);

const ucfirst = memoize(str =>
    str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''
);

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

const strPrototype = String.prototype;
const startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

function startsWith(str, search) {
    return startsWithFn.call(str, search);
}

const endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

function endsWith(str, search) {
    return endsWithFn.call(str, search);
}

const arrPrototype = Array.prototype;

const includesFn = function (search, i) { return !!~this.indexOf(search, i); };
const includesStr = strPrototype.includes || includesFn;
const includesArray = arrPrototype.includes || includesFn;

function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
}

const findIndexFn = arrPrototype.findIndex || function (predicate) {
    for (let i = 0; i < this.length; i++) {
        if (predicate.call(arguments[1], this[i], i, this)) {
            return i;
        }
    }
    return -1;
};

function findIndex(array, predicate) {
    return findIndexFn.call(array, predicate);
}

const {isArray} = Array;

function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

const {toString} = objPrototype;
function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
}

function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
}

function isDocument(obj) {
    return nodeType(obj) === 9;
}

function isNode(obj) {
    return nodeType(obj) >= 1;
}

function isElement(obj) {
    return nodeType(obj) === 1;
}

function nodeType(obj) {
    return !isWindow(obj) && isObject(obj) && obj.nodeType;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
}

function isEmpty(obj) {
    return !(isArray(obj)
        ? obj.length
        : isObject(obj)
            ? Object.keys(obj).length
            : false
    );
}

function isUndefined(value) {
    return value === void 0;
}

function toBoolean(value) {
    return isBoolean(value)
        ? value
        : value === 'true' || value === '1' || value === ''
            ? true
            : value === 'false' || value === '0'
                ? false
                : value;
}

function toNumber(value) {
    const number = Number(value);
    return !isNaN(number) ? number : false;
}

function toFloat(value) {
    return parseFloat(value) || 0;
}

const toArray = Array.from || (value => arrPrototype.slice.call(value));

function toNode(element) {
    return toNodes(element)[0];
}

function toNodes(element) {
    return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
}

function toWindow(element) {
    if (isWindow(element)) {
        return element;
    }

    element = toNode(element);

    return element
        ? (isDocument(element)
            ? element
            : element.ownerDocument
        ).defaultView
        : window;
}

function toMs(time) {
    return !time
        ? 0
        : endsWith(time, 'ms')
            ? toFloat(time)
            : toFloat(time) * 1000;
}

function isEqual(value, other) {
    return value === other
        || isObject(value)
        && isObject(other)
        && Object.keys(value).length === Object.keys(other).length
        && each(value, (val, key) => val === other[key]);
}

function swap(value, a, b) {
    return value.replace(
        new RegExp(`${a}|${b}`, 'g'),
        match => match === a ? b : a
    );
}

const assign = Object.assign || function (target, ...args) {
    target = Object(target);
    for (let i = 0; i < args.length; i++) {
        const source = args[i];
        if (source !== null) {
            for (const key in source) {
                if (hasOwn(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};

function last(array) {
    return array[array.length - 1];
}

function each(obj, cb) {
    for (const key in obj) {
        if (false === cb(obj[key], key)) {
            return false;
        }
    }
    return true;
}

function sortBy(array, prop) {
    return array.slice().sort(({[prop]: propA = 0}, {[prop]: propB = 0}) =>
        propA > propB
            ? 1
            : propB > propA
                ? -1
                : 0
    );
}

function uniqueBy(array, prop) {
    const seen = new Set();
    return array.filter(({[prop]: check}) => seen.has(check)
        ? false
        : seen.add(check) || true // IE 11 does not return the Set object
    );
}

function clamp(number, min = 0, max = 1) {
    return Math.min(Math.max(toNumber(number) || 0, min), max);
}

function noop() {}

function intersectRect(...rects) {
    return [['bottom', 'top'], ['right', 'left']].every(([minProp, maxProp]) =>
        Math.min(...rects.map(({[minProp]: min}) => min)) - Math.max(...rects.map(({[maxProp]: max}) => max)) > 0
    );
}

function pointInRect(point, rect) {
    return point.x <= rect.right &&
        point.x >= rect.left &&
        point.y <= rect.bottom &&
        point.y >= rect.top;
}

const Dimensions = {

    ratio(dimensions, prop, value) {

        const aProp = prop === 'width' ? 'height' : 'width';

        return {
            [aProp]: dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp],
            [prop]: value
        };
    },

    contain(dimensions, maxDimensions) {
        dimensions = assign({}, dimensions);

        each(dimensions, (_, prop) => dimensions = dimensions[prop] > maxDimensions[prop]
            ? this.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions
        );

        return dimensions;
    },

    cover(dimensions, maxDimensions) {
        dimensions = this.contain(dimensions, maxDimensions);

        each(dimensions, (_, prop) => dimensions = dimensions[prop] < maxDimensions[prop]
            ? this.ratio(dimensions, prop, maxDimensions[prop])
            : dimensions
        );

        return dimensions;
    }

};

function getIndex(i, elements, current = 0, finite = false) {

    elements = toNodes(elements);

    const {length} = elements;

    i = isNumeric(i)
        ? toNumber(i)
        : i === 'next'
            ? current + 1
            : i === 'previous'
                ? current - 1
                : elements.indexOf(toNode(i));

    if (finite) {
        return clamp(i, 0, length - 1);
    }

    i %= length;

    return i < 0 ? i + length : i;
}

function memoize(fn) {
    const cache = Object.create(null);
    return key => cache[key] || (cache[key] = fn(key));
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/mouse.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/mouse.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseTracker": () => (/* binding */ MouseTracker)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");



function MouseTracker() {}

MouseTracker.prototype = {

    positions: [],

    init() {

        this.positions = [];

        let position;
        this.unbind = (0,_event__WEBPACK_IMPORTED_MODULE_0__.on)(document, 'mousemove', e => position = (0,_event__WEBPACK_IMPORTED_MODULE_0__.getEventPos)(e));
        this.interval = setInterval(() => {

            if (!position) {
                return;
            }

            this.positions.push(position);

            if (this.positions.length > 5) {
                this.positions.shift();
            }
        }, 50);

    },

    cancel() {
        this.unbind && this.unbind();
        this.interval && clearInterval(this.interval);
    },

    movesTo(target) {

        if (this.positions.length < 2) {
            return false;
        }

        const p = target.getBoundingClientRect();
        const {left, right, top, bottom} = p;

        const [prevPosition] = this.positions;
        const position = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.last)(this.positions);
        const path = [prevPosition, position];

        if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.pointInRect)(position, p)) {
            return false;
        }

        const diagonals = [[{x: left, y: top}, {x: right, y: bottom}], [{x: left, y: bottom}, {x: right, y: top}]];

        return diagonals.some(diagonal => {
            const intersection = intersect(path, diagonal);
            return intersection && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.pointInRect)(intersection, p);
        });
    }

};

// Inspired by http://paulbourke.net/geometry/pointlineplane/
function intersect([{x: x1, y: y1}, {x: x2, y: y2}], [{x: x3, y: y3}, {x: x4, y: y4}]) {

    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

    // Lines are parallel
    if (denominator === 0) {
        return false;
    }

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

    if (ua < 0) {
        return false;
    }

    // Return an object with the x and y coordinates of the intersection
    return {x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1)};
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/options.js":
/*!***************************************************!*\
  !*** ./node_modules/uikit/src/js/util/options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeOptions": () => (/* binding */ mergeOptions),
/* harmony export */   "parseOptions": () => (/* binding */ parseOptions)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");


const strats = {};

strats.events =
strats.created =
strats.beforeConnect =
strats.connected =
strats.beforeDisconnect =
strats.disconnected =
strats.destroy = concatStrat;

// args strategy
strats.args = function (parentVal, childVal) {
    return childVal !== false && concatStrat(childVal || parentVal);
};

// update strategy
strats.update = function (parentVal, childVal) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.sortBy)(concatStrat(parentVal, (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(childVal) ? {read: childVal} : childVal), 'order');
};

// property strategy
strats.props = function (parentVal, childVal) {

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(childVal)) {
        childVal = childVal.reduce((value, key) => {
            value[key] = String;
            return value;
        }, {});
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed =
strats.methods = function (parentVal, childVal) {
    return childVal
        ? parentVal
            ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)({}, parentVal, childVal)
            : childVal
        : parentVal;
};

// data strategy
strats.data = function (parentVal, childVal, vm) {

    if (!vm) {

        if (!childVal) {
            return parentVal;
        }

        if (!parentVal) {
            return childVal;
        }

        return function (vm) {
            return mergeFnData(parentVal, childVal, vm);
        };

    }

    return mergeFnData(parentVal, childVal, vm);
};

function mergeFnData(parentVal, childVal, vm) {
    return strats.computed(
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(parentVal)
            ? parentVal.call(vm, vm)
            : parentVal,
        (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(childVal)
            ? childVal.call(vm, vm)
            : childVal
    );
}

// concat strategy
function concatStrat(parentVal, childVal) {

    parentVal = parentVal && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(parentVal) ? [parentVal] : parentVal;

    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(childVal)
                ? childVal
                : [childVal]
        : parentVal;
}

// default strategy
function defaultStrat(parentVal, childVal) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(childVal) ? parentVal : childVal;
}

function mergeOptions(parent, child, vm) {

    const options = {};

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isFunction)(child)) {
        child = child.options;
    }

    if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
        for (let i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i], vm);
        }
    }

    for (const key in parent) {
        mergeKey(key);
    }

    for (const key in child) {
        if (!(0,_lang__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(parent, key)) {
            mergeKey(key);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
    }

    return options;
}

function parseOptions(options, args = []) {

    try {

        return !options
            ? {}
            : (0,_lang__WEBPACK_IMPORTED_MODULE_0__.startsWith)(options, '{')
                ? JSON.parse(options)
                : args.length && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.includes)(options, ':')
                    ? ({[args[0]]: options})
                    : options.split(';').reduce((options, option) => {
                        const [key, value] = option.split(/:(.*)/);
                        if (key && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
                            options[key.trim()] = value.trim();
                        }
                        return options;
                    }, {});

    } catch (e) {
        return {};
    }

}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/player.js":
/*!**************************************************!*\
  !*** ./node_modules/uikit/src/js/util/player.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "mute": () => (/* binding */ mute),
/* harmony export */   "isVideo": () => (/* binding */ isVideo)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/uikit/src/js/util/event.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function play(el) {

    if (isIFrame(el)) {
        call(el, {func: 'playVideo', method: 'play'});
    }

    if (isHTML5(el)) {
        try {
            el.play().catch(_lang__WEBPACK_IMPORTED_MODULE_0__.noop);
        } catch (e) {}
    }

}

function pause(el) {

    if (isIFrame(el)) {
        call(el, {func: 'pauseVideo', method: 'pause'});
    }

    if (isHTML5(el)) {
        el.pause();
    }

}

function mute(el) {

    if (isIFrame(el)) {
        call(el, {func: 'mute', method: 'setVolume', value: 0});
    }

    if (isHTML5(el)) {
        el.muted = true;
    }

}

function isVideo(el) {
    return isHTML5(el) || isIFrame(el);
}

function isHTML5(el) {
    return el && el.tagName === 'VIDEO';
}

function isIFrame(el) {
    return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
}

function isYoutube(el) {
    return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
}

function isVimeo(el) {
    return !!el.src.match(/vimeo\.com\/video\/.*/);
}

function call(el, cmd) {
    enableApi(el).then(() => post(el, cmd));
}

function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify((0,_lang__WEBPACK_IMPORTED_MODULE_0__.assign)({event: 'command'}, cmd)), '*');
    } catch (e) {}
}

const stateKey = '_ukPlayer';
let counter = 0;
function enableApi(el) {

    if (el[stateKey]) {
        return el[stateKey];
    }

    const youtube = isYoutube(el);
    const vimeo = isVimeo(el);

    const id = ++counter;
    let poller;

    return el[stateKey] = new _promise__WEBPACK_IMPORTED_MODULE_1__.Promise(resolve => {

        youtube && (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(el, 'load', () => {
            const listener = () => post(el, {event: 'listening', id});
            poller = setInterval(listener, 100);
            listener();
        });

        (0,_event__WEBPACK_IMPORTED_MODULE_2__.once)(window, 'message', resolve, false, ({data}) => {

            try {
                data = JSON.parse(data);
                return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
            } catch (e) {}

        });

        el.src = `${el.src}${(0,_lang__WEBPACK_IMPORTED_MODULE_0__.includes)(el.src, '?') ? '&' : '?'}${youtube ? 'enablejsapi=1' : `api=1&player_id=${id}`}`;

    }).then(() => clearInterval(poller));
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/position.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/position.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positionAt": () => (/* binding */ positionAt)
/* harmony export */ });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport */ "./node_modules/uikit/src/js/util/viewport.js");




const dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
};

function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);

    const flipped = {element: elAttach, target: targetAttach};

    if (!element || !target) {
        return flipped;
    }

    const dim = (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(element);
    const targetDim = (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(target);
    const position = targetDim;

    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);

    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];

    position.left += elOffset['x'];
    position.top += elOffset['y'];

    if (flip) {

        let boundaries = (0,_viewport__WEBPACK_IMPORTED_MODULE_1__.scrollParents)(element).map(_viewport__WEBPACK_IMPORTED_MODULE_1__.getViewport);

        if (boundary && !(0,_lang__WEBPACK_IMPORTED_MODULE_2__.includes)(boundaries, boundary)) {
            boundaries.unshift(boundary);
        }

        boundaries = boundaries.map(el => (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(el));

        (0,_lang__WEBPACK_IMPORTED_MODULE_2__.each)(dirs, ([dir, align, alignFlip], prop) => {

            if (!(flip === true || (0,_lang__WEBPACK_IMPORTED_MODULE_2__.includes)(flip, dir))) {
                return;
            }

            boundaries.some(boundary => {

                const elemOffset = elAttach[dir] === align
                    ? -dim[prop]
                    : elAttach[dir] === alignFlip
                        ? dim[prop]
                        : 0;

                const targetOffset = targetAttach[dir] === align
                    ? targetDim[prop]
                    : targetAttach[dir] === alignFlip
                        ? -targetDim[prop]
                        : 0;

                if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                    const centerOffset = dim[prop] / 2;
                    const centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                    return elAttach[dir] === 'center' && (
                        apply(centerOffset, centerTargetOffset)
                        || apply(-centerOffset, -centerTargetOffset)
                    ) || apply(elemOffset, targetOffset);

                }

                function apply(elemOffset, targetOffset) {

                    const newVal = (0,_lang__WEBPACK_IMPORTED_MODULE_2__.toFloat)((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

                    if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                        position[align] = newVal;

                        ['element', 'target'].forEach(el => {
                            flipped[el][dir] = !elemOffset
                                ? flipped[el][dir]
                                : flipped[el][dir] === dirs[prop][1]
                                    ? dirs[prop][2]
                                    : dirs[prop][1];
                        });

                        return true;
                    }

                }

            });

        });
    }

    (0,_dimensions__WEBPACK_IMPORTED_MODULE_0__.offset)(element, position);

    return flipped;
}

function moveTo(position, attach, dim, factor) {
    (0,_lang__WEBPACK_IMPORTED_MODULE_2__.each)(dirs, ([dir, align, alignFlip], prop) => {
        if (attach[dir] === alignFlip) {
            position[align] += dim[prop] * factor;
        } else if (attach[dir] === 'center') {
            position[align] += dim[prop] * factor / 2;
        }
    });
}

function getPos(pos) {

    const x = /left|center|right/;
    const y = /top|center|bottom/;

    pos = (pos || '').split(' ');

    if (pos.length === 1) {
        pos = x.test(pos[0])
            ? pos.concat('center')
            : y.test(pos[0])
                ? ['center'].concat(pos)
                : ['center', 'center'];
    }

    return {
        x: x.test(pos[0]) ? pos[0] : 'center',
        y: y.test(pos[1]) ? pos[1] : 'center'
    };
}

function getOffsets(offsets, width, height) {

    const [x, y] = (offsets || '').split(' ');

    return {
        x: x ? (0,_lang__WEBPACK_IMPORTED_MODULE_2__.toFloat)(x) * ((0,_lang__WEBPACK_IMPORTED_MODULE_2__.endsWith)(x, '%') ? width / 100 : 1) : 0,
        y: y ? (0,_lang__WEBPACK_IMPORTED_MODULE_2__.toFloat)(y) * ((0,_lang__WEBPACK_IMPORTED_MODULE_2__.endsWith)(y, '%') ? height / 100 : 1) : 0
    };
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/promise.js":
/*!***************************************************!*\
  !*** ./node_modules/uikit/src/js/util/promise.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promise": () => (/* binding */ Promise),
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");
/* global setImmediate */



const Promise = _env__WEBPACK_IMPORTED_MODULE_0__.inBrowser && window.Promise || PromiseFn;

class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject;
            this.resolve = resolve;
        });
    }
}

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

const RESOLVED = 0;
const REJECTED = 1;
const PENDING = 2;

const async = _env__WEBPACK_IMPORTED_MODULE_0__.inBrowser && window.setImmediate || setTimeout;

function PromiseFn(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    const promise = this;

    try {
        executor(
            x => {
                promise.resolve(x);
            },
            r => {
                promise.reject(r);
            }
        );
    } catch (e) {
        promise.reject(e);
    }
}

PromiseFn.reject = function (r) {
    return new PromiseFn((resolve, reject) => {
        reject(r);
    });
};

PromiseFn.resolve = function (x) {
    return new PromiseFn((resolve, reject) => {
        resolve(x);
    });
};

PromiseFn.all = function all(iterable) {
    return new PromiseFn((resolve, reject) => {
        const result = [];
        let count = 0;

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (let i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

PromiseFn.race = function race(iterable) {
    return new PromiseFn((resolve, reject) => {
        for (let i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

const p = PromiseFn.prototype;

p.resolve = function resolve(x) {
    const promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        let called = false;

        try {
            const then = x && x.then;

            if (x !== null && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isObject)(x) && (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isFunction)(then)) {
                then.call(
                    x,
                    x => {
                        if (!called) {
                            promise.resolve(x);
                        }
                        called = true;
                    },
                    r => {
                        if (!called) {
                            promise.reject(r);
                        }
                        called = true;
                    }
                );
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    const promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    async(() => {
        if (this.state !== PENDING) {
            while (this.deferred.length) {
                const [onResolved, onRejected, resolve, reject] = this.deferred.shift();

                try {
                    if (this.state === RESOLVED) {
                        if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onResolved)) {
                            resolve(onResolved.call(undefined, this.value));
                        } else {
                            resolve(this.value);
                        }
                    } else if (this.state === REJECTED) {
                        if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onRejected)) {
                            resolve(onRejected.call(undefined, this.value));
                        } else {
                            reject(this.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    return new PromiseFn((resolve, reject) => {
        this.deferred.push([onResolved, onRejected, resolve, reject]);
        this.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};


/***/ }),

/***/ "./node_modules/uikit/src/js/util/selector.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/selector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "queryAll": () => (/* binding */ queryAll),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findAll": () => (/* binding */ findAll),
/* harmony export */   "escape": () => (/* binding */ escape)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");




function query(selector, context) {
    return find(selector, getContext(selector, context));
}

function queryAll(selector, context) {
    return findAll(selector, getContext(selector, context));
}

function getContext(selector, context = document) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector) && isContextSelector(selector) || (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isDocument)(context)
        ? context
        : context.ownerDocument;
}

function find(selector, context) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNode)(_query(selector, context, 'querySelector'));
}

function findAll(selector, context) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(_query(selector, context, 'querySelectorAll'));
}

function _query(selector, context = document, queryFn) {

    if (!selector || !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(selector)) {
        return selector;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');

    if (isContextSelector(selector)) {

        selector = splitSelector(selector).map(selector => {

            let ctx = context;

            if (selector[0] === '!') {

                const selectors = selector.substr(1).trim().split(' ');
                ctx = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.closest)((0,_filter__WEBPACK_IMPORTED_MODULE_1__.parent)(context), selectors[0]);
                selector = selectors.slice(1).join(' ').trim();

            }

            if (selector[0] === '-') {

                const selectors = selector.substr(1).trim().split(' ');
                const prev = (ctx || context).previousElementSibling;
                ctx = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.matches)(prev, selector.substr(1)) ? prev : null;
                selector = selectors.slice(1).join(' ');

            }

            if (!ctx) {
                return null;
            }

            return `${domPath(ctx)} ${selector}`;

        }).filter(Boolean).join(',');

        context = document;

    }

    try {

        return context[queryFn](selector);

    } catch (e) {

        return null;

    }

}

const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

const isContextSelector = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)(selector => selector.match(contextSelectorRe));

const selectorRe = /.*?[^\\](?:,|$)/g;

const splitSelector = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)(selector =>
    selector.match(selectorRe).map(selector =>
        selector.replace(/,$/, '').trim()
    )
);

function domPath(element) {
    const names = [];
    while (element.parentNode) {
        if (element.id) {
            names.unshift(`#${escape(element.id)}`);
            break;
        } else {
            let {tagName} = element;
            if (tagName !== 'HTML') {
                tagName += `:nth-child(${(0,_filter__WEBPACK_IMPORTED_MODULE_1__.index)(element) + 1})`;
            }
            names.unshift(tagName);
            element = element.parentNode;
        }
    }
    return names.join(' > ');
}

const escapeFn = _env__WEBPACK_IMPORTED_MODULE_2__.inBrowser && window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, match => `\\${match}`); };
function escape(css) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(css) ? escapeFn.call(null, css) : '';
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/style.js":
/*!*************************************************!*\
  !*** ./node_modules/uikit/src/js/util/style.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCssVar": () => (/* binding */ getCssVar),
/* harmony export */   "propName": () => (/* binding */ propName)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ "./node_modules/uikit/src/js/util/env.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./node_modules/uikit/src/js/util/dom.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "./node_modules/uikit/src/js/util/class.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");





const cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'widows': true,
    'z-index': true,
    'zoom': true
};

function css(element, property, value, priority = '') {

    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toNodes)(element).map(element => {

        if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isString)(property)) {

            property = propName(property);

            if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(value)) {
                return getStyle(element, property);
            } else if (!value && !(0,_lang__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
                element.style.removeProperty(property);
            } else {
                element.style.setProperty(property, (0,_lang__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(value) && !cssNumber[property] ? `${value}px` : value, priority);
            }

        } else if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isArray)(property)) {

            const styles = getStyles(element);

            return property.reduce((props, property) => {
                props[property] = styles[propName(property)];
                return props;
            }, {});

        } else if ((0,_lang__WEBPACK_IMPORTED_MODULE_0__.isObject)(property)) {
            priority = value;
            (0,_lang__WEBPACK_IMPORTED_MODULE_0__.each)(property, (value, property) => css(element, property, value, priority));
        }

        return element;

    })[0];

}

function getStyles(element, pseudoElt) {
    return (0,_lang__WEBPACK_IMPORTED_MODULE_0__.toWindow)(element).getComputedStyle(element, pseudoElt);
}

function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
}

const parseCssVar = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)(name => {
    /* usage in css: .uk-name:before { content:"xyz" } */

    const element = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.append)(document.documentElement, (0,_dom__WEBPACK_IMPORTED_MODULE_1__.fragment)('<div>'));

    (0,_class__WEBPACK_IMPORTED_MODULE_2__.addClass)(element, `uk-${name}`);

    const value = getStyle(element, 'content', ':before');

    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.remove)(element);

    return value;
});

const propertyRe = /^\s*(["'])?(.*?)\1\s*$/;
function getCssVar(name) {
    return (_env__WEBPACK_IMPORTED_MODULE_3__.isIE
        ? parseCssVar(name)
        : getStyles(document.documentElement).getPropertyValue(`--uk-${name}`)
    ).replace(propertyRe, '$2');
}

// https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
const propName = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.memoize)(name => vendorPropName(name));

const cssPrefixes = ['webkit', 'moz', 'ms'];

function vendorPropName(name) {

    name = (0,_lang__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(name);

    const {style} = document.documentElement;

    if (name in style) {
        return name;
    }

    let i = cssPrefixes.length, prefixedName;

    while (i--) {
        prefixedName = `-${cssPrefixes[i]}-${name}`;
        if (prefixedName in style) {
            return prefixedName;
        }
    }
}


/***/ }),

/***/ "./node_modules/uikit/src/js/util/viewport.js":
/*!****************************************************!*\
  !*** ./node_modules/uikit/src/js/util/viewport.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInView": () => (/* binding */ isInView),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "scrollIntoView": () => (/* binding */ scrollIntoView),
/* harmony export */   "scrolledOver": () => (/* binding */ scrolledOver),
/* harmony export */   "scrollParents": () => (/* binding */ scrollParents),
/* harmony export */   "getViewport": () => (/* binding */ getViewport),
/* harmony export */   "getViewportClientHeight": () => (/* binding */ getViewportClientHeight)
/* harmony export */ });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./node_modules/uikit/src/js/util/style.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promise */ "./node_modules/uikit/src/js/util/promise.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/uikit/src/js/util/filter.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./node_modules/uikit/src/js/util/dimensions.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./node_modules/uikit/src/js/util/lang.js");






function isInView(element, offsetTop = 0, offsetLeft = 0) {

    if (!(0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element)) {
        return false;
    }

    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.intersectRect)(...scrollParents(element).map(parent => {

        const {top, left, bottom, right} = (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(getViewport(parent));

        return {
            top: top - offsetTop,
            left: left - offsetLeft,
            bottom: bottom + offsetTop,
            right: right + offsetLeft
        };
    }).concat((0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(element)));
}

function scrollTop(element, top) {

    if ((0,_lang__WEBPACK_IMPORTED_MODULE_1__.isWindow)(element) || (0,_lang__WEBPACK_IMPORTED_MODULE_1__.isDocument)(element)) {
        element = getScrollingElement(element);
    } else {
        element = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toNode)(element);
    }

    element.scrollTop = top;
}

function scrollIntoView(element, {offset: offsetBy = 0} = {}) {

    const parents = (0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element) ? scrollParents(element) : [];
    return parents.reduce((fn, scrollElement, i) => {

        const {scrollTop, scrollHeight, offsetHeight} = scrollElement;
        const maxScroll = scrollHeight - getViewportClientHeight(scrollElement);
        const {height: elHeight, top: elTop} = (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(parents[i - 1] || element);

        let top = Math.ceil(
            elTop
            - (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offset)(getViewport(scrollElement)).top
            - offsetBy
            + scrollTop
        );

        if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
            top += offsetBy;
        } else {
            offsetBy = 0;
        }

        if (top > maxScroll) {
            offsetBy -= top - maxScroll;
            top = maxScroll;
        } else if (top < 0) {
            offsetBy -= top;
            top = 0;
        }

        return () => scrollTo(scrollElement, top - scrollTop).then(fn);

    }, () => _promise__WEBPACK_IMPORTED_MODULE_3__.Promise.resolve())();

    function scrollTo(element, top) {
        return new _promise__WEBPACK_IMPORTED_MODULE_3__.Promise(resolve => {

            const scroll = element.scrollTop;
            const duration = getDuration(Math.abs(top));
            const start = Date.now();

            (function step() {

                const percent = ease((0,_lang__WEBPACK_IMPORTED_MODULE_1__.clamp)((Date.now() - start) / duration));

                scrollTop(element, scroll + top * percent);

                // scroll more if we have not reached our destination
                if (percent !== 1) {
                    requestAnimationFrame(step);
                } else {
                    resolve();
                }

            })();
        });
    }

    function getDuration(dist) {
        return 40 * Math.pow(dist, .375);
    }

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }

}

function scrolledOver(element, heightOffset = 0) {

    if (!(0,_filter__WEBPACK_IMPORTED_MODULE_0__.isVisible)(element)) {
        return 0;
    }

    const [scrollElement] = scrollParents(element, /auto|scroll/, true);
    const {scrollHeight, scrollTop} = scrollElement;
    const clientHeight = getViewportClientHeight(scrollElement);
    const viewportTop = (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offsetPosition)(element)[0] - scrollTop - (0,_dimensions__WEBPACK_IMPORTED_MODULE_2__.offsetPosition)(scrollElement)[0];
    const viewportDist = Math.min(clientHeight, viewportTop + scrollTop);

    const top = viewportTop - viewportDist;
    const dist = Math.min(
        element.offsetHeight + heightOffset + viewportDist,
        scrollHeight - (viewportTop + scrollTop),
        scrollHeight - clientHeight
    );

    return (0,_lang__WEBPACK_IMPORTED_MODULE_1__.clamp)(-1 * top / dist);
}

function scrollParents(element, overflowRe = /auto|scroll|hidden/, scrollable = false) {
    const scrollEl = getScrollingElement(element);

    let ancestors = (0,_filter__WEBPACK_IMPORTED_MODULE_0__.parents)(element).reverse();
    ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

    const fixedIndex = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.findIndex)(ancestors, el => (0,_style__WEBPACK_IMPORTED_MODULE_4__.css)(el, 'position') === 'fixed');
    if (~fixedIndex) {
        ancestors = ancestors.slice(fixedIndex);
    }

    return [scrollEl].concat(ancestors.filter(parent =>
        overflowRe.test((0,_style__WEBPACK_IMPORTED_MODULE_4__.css)(parent, 'overflow')) && (!scrollable || parent.scrollHeight > getViewportClientHeight(parent)))
    ).reverse();
}

function getViewport(scrollElement) {
    return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
}

// iOS 12 returns <body> as scrollingElement
function getViewportClientHeight(scrollElement) {
    return (scrollElement === getScrollingElement(scrollElement) ? document.documentElement : scrollElement).clientHeight;
}

function getScrollingElement(element) {
    const {document} = (0,_lang__WEBPACK_IMPORTED_MODULE_1__.toWindow)(element);
    return document.scrollingElement || document.documentElement;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/build/bundle": 0,
/******/ 			"build/bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["build/bundle"], () => (__webpack_require__("./resources/scripts/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["build/bundle"], () => (__webpack_require__("./resources/styles/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;