globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as jsxRuntimeExports } from './Base_Cv2x7S9T.mjs';
import { b as requireReact, a as reactExports } from './_@astro-renderers_xLXolORG.mjs';
import { g as getDefaultExportFromCjs } from './astro/server_C4_Pur0B.mjs';

var build = {};

var countUp_umd$1 = {exports: {}};

var countUp_umd = countUp_umd$1.exports;

var hasRequiredCountUp_umd;

function requireCountUp_umd () {
	if (hasRequiredCountUp_umd) return countUp_umd$1.exports;
	hasRequiredCountUp_umd = 1;
	(function (module, exports) {
		!function(t,i){i(exports);}(countUp_umd,(function(t){var i=function(){return i=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var e in i=arguments[n])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t},i.apply(this,arguments)},n=function(){function t(t,n,s){var e=this;this.endVal=n,this.options=s,this.version="2.9.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:true,useGrouping:true,useIndianSeparators:false,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:false,scrollSpyDelay:200,scrollSpyOnce:false},this.finalEndVal=null,this.useEasing=true,this.countDown=false,this.error="",this.startVal=0,this.paused=true,this.once=false,this.count=function(t){e.startTime||(e.startTime=t);var i=t-e.startTime;e.remaining=e.duration-i,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(i,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(i,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(i/e.duration);var n=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=n?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),i<e.duration?e.rAF=requestAnimationFrame(e.count):null!==e.finalEndVal?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback();},this.formatNumber=function(t){var i,n,s,a,o=t<0?"-":"";i=Math.abs(t).toFixed(e.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?e.options.decimal+r[1]:"",e.options.useGrouping){a="";for(var l=3,u=0,h=0,p=n.length;h<p;++h)e.options.useIndianSeparators&&4===h&&(l=2,u=1),0!==h&&u%l==0&&(a=e.options.separator+a),u++,a=n[p-h-1]+a;n=a;}return e.options.numerals&&e.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]}))),o+e.options.prefix+n+s+e.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=i(i({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.el="string"==typeof t?document.getElementById(t):t,n=null==n?this.parse(this.el.innerHTML):n,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=false),this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return e.handleScroll(e)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}));},this.handleScroll(this)));}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,e=n.top+n.height+window.pageYOffset;e<i&&e>window.scrollY&&t.paused?(t.paused=false,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=true)):(window.scrollY>e||s>i)&&!t.paused&&t.reset();}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2;}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=false:this.useEasing=this.options.useEasing;},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=false,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal));},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused;},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=true,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal);},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count));},t.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else "text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n;}},t.prototype.ensureNumber=function(t){return "number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration;},t.prototype.parse=function(t){var i=function(t){return t.replace(/([.,'  ])/g,"\\$1")},n=i(this.options.separator),s=i(this.options.decimal),e=t.replace(new RegExp(n,"g"),"").replace(new RegExp(s,"g"),".");return parseFloat(e)},t}();t.CountUp=n;})); 
	} (countUp_umd$1, countUp_umd$1.exports));
	return countUp_umd$1.exports;
}

var hasRequiredBuild;

function requireBuild () {
	if (hasRequiredBuild) return build;
	hasRequiredBuild = 1;

	Object.defineProperty(build, '__esModule', { value: true });

	var React = requireReact();
	var countup_js = requireCountUp_umd();

	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = true,
	      o = false;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = true, n = r;
	    } finally {
	      try {
	        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}
	function ownKeys(e, r) {
	  var t = Object.keys(e);
	  if (Object.getOwnPropertySymbols) {
	    var o = Object.getOwnPropertySymbols(e);
	    r && (o = o.filter(function (r) {
	      return Object.getOwnPropertyDescriptor(e, r).enumerable;
	    })), t.push.apply(t, o);
	  }
	  return t;
	}
	function _objectSpread2(e) {
	  for (var r = 1; r < arguments.length; r++) {
	    var t = null != arguments[r] ? arguments[r] : {};
	    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
	      _defineProperty(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
	      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
	    });
	  }
	  return e;
	}
	function _toPrimitive(t, r) {
	  if ("object" != typeof t || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r);
	    if ("object" != typeof i) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}
	function _toPropertyKey(t) {
	  var i = _toPrimitive(t, "string");
	  return "symbol" == typeof i ? i : String(i);
	}
	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
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
	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
	  return _extends.apply(this, arguments);
	}
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}
	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	  return target;
	}
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
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
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	/**
	 * Silence SSR Warnings.
	 * Borrowed from Formik v2.1.1, Licensed MIT.
	 *
	 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
	 */
	var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

	/* eslint-disable @typescript-eslint/no-explicit-any */

	/**
	 * Create a stable reference to a callback which is updated after each render is committed.
	 * Typed version borrowed from Formik v2.2.1. Licensed MIT.
	 *
	 * https://github.com/formium/formik/blob/9316a864478f8fcd4fa99a0735b1d37afdf507dc/LICENSE
	 */
	function useEventCallback(fn) {
	  var ref = React.useRef(fn);

	  // we copy a ref to the callback scoped to the current state/props on each render
	  useIsomorphicLayoutEffect(function () {
	    ref.current = fn;
	  });
	  return React.useCallback(function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    return ref.current.apply(void 0, args);
	  }, []);
	}

	var createCountUpInstance = function createCountUpInstance(el, props) {
	  var decimal = props.decimal,
	    decimals = props.decimals,
	    duration = props.duration,
	    easingFn = props.easingFn,
	    end = props.end,
	    formattingFn = props.formattingFn,
	    numerals = props.numerals,
	    prefix = props.prefix,
	    separator = props.separator,
	    start = props.start,
	    suffix = props.suffix,
	    useEasing = props.useEasing,
	    useGrouping = props.useGrouping,
	    useIndianSeparators = props.useIndianSeparators,
	    enableScrollSpy = props.enableScrollSpy,
	    scrollSpyDelay = props.scrollSpyDelay,
	    scrollSpyOnce = props.scrollSpyOnce,
	    plugin = props.plugin;
	  return new countup_js.CountUp(el, end, {
	    startVal: start,
	    duration: duration,
	    decimal: decimal,
	    decimalPlaces: decimals,
	    easingFn: easingFn,
	    formattingFn: formattingFn,
	    numerals: numerals,
	    separator: separator,
	    prefix: prefix,
	    suffix: suffix,
	    plugin: plugin,
	    useEasing: useEasing,
	    useIndianSeparators: useIndianSeparators,
	    useGrouping: useGrouping,
	    enableScrollSpy: enableScrollSpy,
	    scrollSpyDelay: scrollSpyDelay,
	    scrollSpyOnce: scrollSpyOnce
	  });
	};

	var _excluded$1 = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"];
	var DEFAULTS = {
	  decimal: '.',
	  separator: ',',
	  delay: null,
	  prefix: '',
	  suffix: '',
	  duration: 2,
	  start: 0,
	  decimals: 0,
	  startOnMount: true,
	  enableReinitialize: true,
	  useEasing: true,
	  useGrouping: true,
	  useIndianSeparators: false
	};
	var useCountUp = function useCountUp(props) {
	  var filteredProps = Object.fromEntries(Object.entries(props).filter(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	      value = _ref2[1];
	    return value !== undefined;
	  }));
	  var _useMemo = React.useMemo(function () {
	      return _objectSpread2(_objectSpread2({}, DEFAULTS), filteredProps);
	    }, [props]),
	    ref = _useMemo.ref,
	    startOnMount = _useMemo.startOnMount,
	    enableReinitialize = _useMemo.enableReinitialize,
	    delay = _useMemo.delay,
	    onEnd = _useMemo.onEnd,
	    onStart = _useMemo.onStart,
	    onPauseResume = _useMemo.onPauseResume,
	    onReset = _useMemo.onReset,
	    onUpdate = _useMemo.onUpdate,
	    instanceProps = _objectWithoutProperties(_useMemo, _excluded$1);
	  var countUpRef = React.useRef();
	  var timerRef = React.useRef();
	  var isInitializedRef = React.useRef(false);
	  var createInstance = useEventCallback(function () {
	    return createCountUpInstance(typeof ref === 'string' ? ref : ref.current, instanceProps);
	  });
	  var getCountUp = useEventCallback(function (recreate) {
	    var countUp = countUpRef.current;
	    if (countUp && !recreate) {
	      return countUp;
	    }
	    var newCountUp = createInstance();
	    countUpRef.current = newCountUp;
	    return newCountUp;
	  });
	  var start = useEventCallback(function () {
	    var run = function run() {
	      return getCountUp(true).start(function () {
	        onEnd === null || onEnd === void 0 || onEnd({
	          pauseResume: pauseResume,
	          reset: reset,
	          start: restart,
	          update: update
	        });
	      });
	    };
	    if (delay && delay > 0) {
	      timerRef.current = setTimeout(run, delay * 1000);
	    } else {
	      run();
	    }
	    onStart === null || onStart === void 0 || onStart({
	      pauseResume: pauseResume,
	      reset: reset,
	      update: update
	    });
	  });
	  var pauseResume = useEventCallback(function () {
	    getCountUp().pauseResume();
	    onPauseResume === null || onPauseResume === void 0 || onPauseResume({
	      reset: reset,
	      start: restart,
	      update: update
	    });
	  });
	  var reset = useEventCallback(function () {
	    // Quick fix for https://github.com/glennreyes/react-countup/issues/736 - should be investigated
	    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
	    // @ts-ignore
	    if (getCountUp().el) {
	      timerRef.current && clearTimeout(timerRef.current);
	      getCountUp().reset();
	      onReset === null || onReset === void 0 || onReset({
	        pauseResume: pauseResume,
	        start: restart,
	        update: update
	      });
	    }
	  });
	  var update = useEventCallback(function (newEnd) {
	    getCountUp().update(newEnd);
	    onUpdate === null || onUpdate === void 0 || onUpdate({
	      pauseResume: pauseResume,
	      reset: reset,
	      start: restart
	    });
	  });
	  var restart = useEventCallback(function () {
	    reset();
	    start();
	  });
	  var maybeInitialize = useEventCallback(function (shouldReset) {
	    if (startOnMount) {
	      if (shouldReset) {
	        reset();
	      }
	      start();
	    }
	  });
	  React.useEffect(function () {
	    if (!isInitializedRef.current) {
	      isInitializedRef.current = true;
	      maybeInitialize();
	    } else if (enableReinitialize) {
	      maybeInitialize(true);
	    }
	  }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.formattingFn]);
	  React.useEffect(function () {
	    return function () {
	      reset();
	    };
	  }, [reset]);
	  return {
	    start: restart,
	    pauseResume: pauseResume,
	    reset: reset,
	    update: update,
	    getCountUp: getCountUp
	  };
	};

	var _excluded = ["className", "redraw", "containerProps", "children", "style"];
	var CountUp = function CountUp(props) {
	  var className = props.className,
	    redraw = props.redraw,
	    containerProps = props.containerProps,
	    children = props.children,
	    style = props.style,
	    useCountUpProps = _objectWithoutProperties(props, _excluded);
	  var containerRef = React.useRef(null);
	  var isInitializedRef = React.useRef(false);
	  var _useCountUp = useCountUp(_objectSpread2(_objectSpread2({}, useCountUpProps), {}, {
	      ref: containerRef,
	      startOnMount: typeof children !== 'function' || props.delay === 0,
	      // component manually restarts
	      enableReinitialize: false
	    })),
	    start = _useCountUp.start,
	    reset = _useCountUp.reset,
	    updateCountUp = _useCountUp.update,
	    pauseResume = _useCountUp.pauseResume,
	    getCountUp = _useCountUp.getCountUp;
	  var restart = useEventCallback(function () {
	    start();
	  });
	  var update = useEventCallback(function (end) {
	    if (!props.preserveValue) {
	      reset();
	    }
	    updateCountUp(end);
	  });
	  var initializeOnMount = useEventCallback(function () {
	    if (typeof props.children === 'function') {
	      // Warn when user didn't use containerRef at all
	      if (!(containerRef.current instanceof Element)) {
	        console.error("Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an Element, eg. <span ref={containerRef} />.");
	        return;
	      }
	    }

	    // unlike the hook, the CountUp component initializes on mount
	    getCountUp();
	  });
	  React.useEffect(function () {
	    initializeOnMount();
	  }, [initializeOnMount]);
	  React.useEffect(function () {
	    if (isInitializedRef.current) {
	      update(props.end);
	    }
	  }, [props.end, update]);
	  var redrawDependencies = redraw && props;

	  // if props.redraw, call this effect on every props change
	  React.useEffect(function () {
	    if (redraw && isInitializedRef.current) {
	      restart();
	    }
	  }, [restart, redraw, redrawDependencies]);

	  // if not props.redraw, call this effect only when certain props are changed
	  React.useEffect(function () {
	    if (!redraw && isInitializedRef.current) {
	      restart();
	    }
	  }, [restart, redraw, props.start, props.suffix, props.prefix, props.duration, props.separator, props.decimals, props.decimal, props.className, props.formattingFn]);
	  React.useEffect(function () {
	    isInitializedRef.current = true;
	  }, []);
	  if (typeof children === 'function') {
	    // TypeScript forces functional components to return JSX.Element | null.
	    return children({
	      countUpRef: containerRef,
	      start: start,
	      reset: reset,
	      update: updateCountUp,
	      pauseResume: pauseResume,
	      getCountUp: getCountUp
	    });
	  }
	  return /*#__PURE__*/React.createElement("span", _extends({
	    className: className,
	    ref: containerRef,
	    style: style
	  }, containerProps), typeof props.start !== 'undefined' ? getCountUp().formattingFn(props.start) : '');
	};

	build.default = CountUp;
	build.useCountUp = useCountUp;
	return build;
}

var buildExports = requireBuild();
const CountUp = /*@__PURE__*/getDefaultExportFromCjs(buildExports);

// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root) return "0";
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  const id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  const callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = reactExports.useState(null);
  const callback = reactExports.useRef(onChange);
  const [state, setState] = reactExports.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  reactExports.useEffect(
    () => {
      if (skip || !ref) return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current) callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = reactExports.useRef(void 0);
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

const Counter = ({
  count,
  suffix,
  prefix,
  duration,
  start: initialStart,
  end: initialEnd
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const [start, setStart] = reactExports.useState(initialStart);
  const [end, setEnd] = reactExports.useState(initialEnd);
  reactExports.useEffect(() => {
    if (inView) {
      setStart(initialStart);
      setEnd(initialEnd);
    } else {
      setStart(initialEnd);
      setEnd(initialStart);
    }
  }, [inView, initialStart, initialEnd]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: inView && /* @__PURE__ */ jsxRuntimeExports.jsx(
    CountUp,
    {
      ...duration && { duration },
      prefix,
      className: "js",
      end: count ? +count : end,
      suffix,
      start
    }
  ) });
};

export { Counter as C };
