"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85],{62085:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_select; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15882);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(94100);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(24255);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(56453);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(6614);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(87906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(54465);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/hooks/useEvent.js

function useEvent(callback) {
  var fnRef = react.useRef();
  fnRef.current = callback;
  var memoFn = react.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(56863);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/hooks/useLayoutEffect.js



/**
 * Wrap \`React.useLayoutEffect\` which will not throw warning message in test env
 */
var useLayoutEffect =  true && (0,canUseDom/* default */.Z)() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ var hooks_useLayoutEffect = (useLayoutEffect);
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = react.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);

  // We tell react that first mount has passed
  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(85942);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/hooks/useMergedState.js




/** We only think \`undefined\` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to \`useState\` but will use props value if provided.
 * Note that internal use rc-util \`useState\` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0,useState/* default */.Z)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = useEvent(onChange);
  var _useState3 = (0,useState/* default */.Z)([mergedValue]),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to \`undefined\` when it from control to un-control
  useLayoutUpdateEffect(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = useEvent(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(27524);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/isMobile.js
/* harmony default export */ var isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ var es_KeyCode = (KeyCode);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(46088);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useBaseProps.js
/**
 * BaseSelect provide some parsed data into context.
 * You can use this hooks to get them.
 */

var BaseSelectContext = /*#__PURE__*/react.createContext(null);
function useBaseProps() {
  return react.useContext(BaseSelectContext);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useDelayReset.js


/**
 * Similar with \`useLock\`, but this hook will always execute last value.
 * When set to \`true\`, it will keep \`true\` for a short time even if \`false\` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = react.useRef(null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  react.useEffect(function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useLock.js

/**
 * Locker return cached mark.
 * If set to \`true\`, will return \`true\` in a short time even if set \`false\`.
 * If set to \`false\` and then set to \`true\`, will change to \`true\`.
 * And after time duration, it will back to \`null\` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react.useRef(null);
  var timeoutRef = react.useRef(null); // Clean up

  react.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useSelectTriggerControl.js

function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = react.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen,
    customizedTrigger: customizedTrigger
  };
  react.useEffect(function () {
    function onGlobalMouseDown(event) {
      var _propsRef$current;

      // If trigger is customized, Trigger will take control of popupVisible
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }

      var target = event.target;

      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }

      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\\n    charSet checked classID className colSpan cols content contentEditable contextMenu\\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\\n    mediaGroup method min minLength multiple muted name noValidate nonce open\\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\\s\\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,objectSpread2/* default */.Z)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__(20764);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(7058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/resize-observer-polyfill@1.5.1/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**\r
 * A collection of shims that provide minimal functionality of the ES6 collections.\r
 *\r
 * These implementations are not meant to be used outside of the ResizeObserver\r
 * modules as they cover only a limited range of use cases.\r
 */\r
/* eslint-disable require-jsdoc, valid-jsdoc */\r
var MapShim = (function () {\r
    if (typeof Map !== 'undefined') {\r
        return Map;\r
    }\r
    /**\r
     * Returns index in provided array that matches the specified key.\r
     *\r
     * @param {Array<Array>} arr\r
     * @param {*} key\r
     * @returns {number}\r
     */\r
    function getIndex(arr, key) {\r
        var result = -1;\r
        arr.some(function (entry, index) {\r
            if (entry[0] === key) {\r
                result = index;\r
                return true;\r
            }\r
            return false;\r
        });\r
        return result;\r
    }\r
    return /** @class */ (function () {\r
        function class_1() {\r
            this.__entries__ = [];\r
        }\r
        Object.defineProperty(class_1.prototype, "size", {\r
            /**\r
             * @returns {boolean}\r
             */\r
            get: function () {\r
                return this.__entries__.length;\r
            },\r
            enumerable: true,\r
            configurable: true\r
        });\r
        /**\r
         * @param {*} key\r
         * @returns {*}\r
         */\r
        class_1.prototype.get = function (key) {\r
            var index = getIndex(this.__entries__, key);\r
            var entry = this.__entries__[index];\r
            return entry && entry[1];\r
        };\r
        /**\r
         * @param {*} key\r
         * @param {*} value\r
         * @returns {void}\r
         */\r
        class_1.prototype.set = function (key, value) {\r
            var index = getIndex(this.__entries__, key);\r
            if (~index) {\r
                this.__entries__[index][1] = value;\r
            }\r
            else {\r
                this.__entries__.push([key, value]);\r
            }\r
        };\r
        /**\r
         * @param {*} key\r
         * @returns {void}\r
         */\r
        class_1.prototype.delete = function (key) {\r
            var entries = this.__entries__;\r
            var index = getIndex(entries, key);\r
            if (~index) {\r
                entries.splice(index, 1);\r
            }\r
        };\r
        /**\r
         * @param {*} key\r
         * @returns {void}\r
         */\r
        class_1.prototype.has = function (key) {\r
            return !!~getIndex(this.__entries__, key);\r
        };\r
        /**\r
         * @returns {void}\r
         */\r
        class_1.prototype.clear = function () {\r
            this.__entries__.splice(0);\r
        };\r
        /**\r
         * @param {Function} callback\r
         * @param {*} [ctx=null]\r
         * @returns {void}\r
         */\r
        class_1.prototype.forEach = function (callback, ctx) {\r
            if (ctx === void 0) { ctx = null; }\r
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {\r
                var entry = _a[_i];\r
                callback.call(ctx, entry[1], entry[0]);\r
            }\r
        };\r
        return class_1;\r
    }());\r
})();

/**\r
 * Detects whether window and document objects are available in current environment.\r
 */\r
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.\r
var global$1 = (function () {\r
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {\r
        return __webpack_require__.g;\r
    }\r
    if (typeof self !== 'undefined' && self.Math === Math) {\r
        return self;\r
    }\r
    if (typeof window !== 'undefined' && window.Math === Math) {\r
        return window;\r
    }\r
    // eslint-disable-next-line no-new-func\r
    return Function('return this')();\r
})();

/**\r
 * A shim for the requestAnimationFrame which falls back to the setTimeout if\r
 * first one is not supported.\r
 *\r
 * @returns {number} Requests' identifier.\r
 */\r
var requestAnimationFrame$1 = (function () {\r
    if (typeof requestAnimationFrame === 'function') {\r
        // It's required to use a bounded function because IE sometimes throws\r
        // an "Invalid calling object" error if rAF is invoked without the global\r
        // object on the left hand side.\r
        return requestAnimationFrame.bind(global$1);\r
    }\r
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };\r
})();

// Defines minimum timeout before adding a trailing call.\r
var trailingTimeout = 2;\r
/**\r
 * Creates a wrapper function which ensures that provided callback will be\r
 * invoked only once during the specified delay period.\r
 *\r
 * @param {Function} callback - Function to be invoked after the delay period.\r
 * @param {number} delay - Delay after which to invoke callback.\r
 * @returns {Function}\r
 */\r
function throttle (callback, delay) {\r
    var leadingCall = false, trailingCall = false, lastCallTime = 0;\r
    /**\r
     * Invokes the original callback function and schedules new invocation if\r
     * the "proxy" was called during current request.\r
     *\r
     * @returns {void}\r
     */\r
    function resolvePending() {\r
        if (leadingCall) {\r
            leadingCall = false;\r
            callback();\r
        }\r
        if (trailingCall) {\r
            proxy();\r
        }\r
    }\r
    /**\r
     * Callback invoked after the specified delay. It will further postpone\r
     * invocation of the original function delegating it to the\r
     * requestAnimationFrame.\r
     *\r
     * @returns {void}\r
     */\r
    function timeoutCallback() {\r
        requestAnimationFrame$1(resolvePending);\r
    }\r
    /**\r
     * Schedules invocation of the original function.\r
     *\r
     * @returns {void}\r
     */\r
    function proxy() {\r
        var timeStamp = Date.now();\r
        if (leadingCall) {\r
            // Reject immediately following calls.\r
            if (timeStamp - lastCallTime < trailingTimeout) {\r
                return;\r
            }\r
            // Schedule new call to be in invoked when the pending one is resolved.\r
            // This is important for "transitions" which never actually start\r
            // immediately so there is a chance that we might miss one if change\r
            // happens amids the pending invocation.\r
            trailingCall = true;\r
        }\r
        else {\r
            leadingCall = true;\r
            trailingCall = false;\r
            setTimeout(timeoutCallback, delay);\r
        }\r
        lastCallTime = timeStamp;\r
    }\r
    return proxy;\r
}

// Minimum delay before invoking the update of observers.\r
var REFRESH_DELAY = 20;\r
// A list of substrings of CSS properties used to find transition events that\r
// might affect dimensions of observed elements.\r
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];\r
// Check if MutationObserver is available.\r
var mutationObserverSupported = typeof MutationObserver !== 'undefined';\r
/**\r
 * Singleton controller class which handles updates of ResizeObserver instances.\r
 */\r
var ResizeObserverController = /** @class */ (function () {\r
    /**\r
     * Creates a new instance of ResizeObserverController.\r
     *\r
     * @private\r
     */\r
    function ResizeObserverController() {\r
        /**\r
         * Indicates whether DOM listeners have been added.\r
         *\r
         * @private {boolean}\r
         */\r
        this.connected_ = false;\r
        /**\r
         * Tells that controller has subscribed for Mutation Events.\r
         *\r
         * @private {boolean}\r
         */\r
        this.mutationEventsAdded_ = false;\r
        /**\r
         * Keeps reference to the instance of MutationObserver.\r
         *\r
         * @private {MutationObserver}\r
         */\r
        this.mutationsObserver_ = null;\r
        /**\r
         * A list of connected observers.\r
         *\r
         * @private {Array<ResizeObserverSPI>}\r
         */\r
        this.observers_ = [];\r
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);\r
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);\r
    }\r
    /**\r
     * Adds observer to observers list.\r
     *\r
     * @param {ResizeObserverSPI} observer - Observer to be added.\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.addObserver = function (observer) {\r
        if (!~this.observers_.indexOf(observer)) {\r
            this.observers_.push(observer);\r
        }\r
        // Add listeners if they haven't been added yet.\r
        if (!this.connected_) {\r
            this.connect_();\r
        }\r
    };\r
    /**\r
     * Removes observer from observers list.\r
     *\r
     * @param {ResizeObserverSPI} observer - Observer to be removed.\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.removeObserver = function (observer) {\r
        var observers = this.observers_;\r
        var index = observers.indexOf(observer);\r
        // Remove observer if it's present in registry.\r
        if (~index) {\r
            observers.splice(index, 1);\r
        }\r
        // Remove listeners if controller has no connected observers.\r
        if (!observers.length && this.connected_) {\r
            this.disconnect_();\r
        }\r
    };\r
    /**\r
     * Invokes the update of observers. It will continue running updates insofar\r
     * it detects changes.\r
     *\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.refresh = function () {\r
        var changesDetected = this.updateObservers_();\r
        // Continue running updates if changes have been detected as there might\r
        // be future ones caused by CSS transitions.\r
        if (changesDetected) {\r
            this.refresh();\r
        }\r
    };\r
    /**\r
     * Updates every observer from observers list and notifies them of queued\r
     * entries.\r
     *\r
     * @private\r
     * @returns {boolean} Returns "true" if any observer has detected changes in\r
     *      dimensions of it's elements.\r
     */\r
    ResizeObserverController.prototype.updateObservers_ = function () {\r
        // Collect observers that have active observations.\r
        var activeObservers = this.observers_.filter(function (observer) {\r
            return observer.gatherActive(), observer.hasActive();\r
        });\r
        // Deliver notifications in a separate cycle in order to avoid any\r
        // collisions between observers, e.g. when multiple instances of\r
        // ResizeObserver are tracking the same element and the callback of one\r
        // of them changes content dimensions of the observed target. Sometimes\r
        // this may result in notifications being blocked for the rest of observers.\r
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });\r
        return activeObservers.length > 0;\r
    };\r
    /**\r
     * Initializes DOM listeners.\r
     *\r
     * @private\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.connect_ = function () {\r
        // Do nothing if running in a non-browser environment or if listeners\r
        // have been already added.\r
        if (!isBrowser || this.connected_) {\r
            return;\r
        }\r
        // Subscription to the "Transitionend" event is used as a workaround for\r
        // delayed transitions. This way it's possible to capture at least the\r
        // final state of an element.\r
        document.addEventListener('transitionend', this.onTransitionEnd_);\r
        window.addEventListener('resize', this.refresh);\r
        if (mutationObserverSupported) {\r
            this.mutationsObserver_ = new MutationObserver(this.refresh);\r
            this.mutationsObserver_.observe(document, {\r
                attributes: true,\r
                childList: true,\r
                characterData: true,\r
                subtree: true\r
            });\r
        }\r
        else {\r
            document.addEventListener('DOMSubtreeModified', this.refresh);\r
            this.mutationEventsAdded_ = true;\r
        }\r
        this.connected_ = true;\r
    };\r
    /**\r
     * Removes DOM listeners.\r
     *\r
     * @private\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.disconnect_ = function () {\r
        // Do nothing if running in a non-browser environment or if listeners\r
        // have been already removed.\r
        if (!isBrowser || !this.connected_) {\r
            return;\r
        }\r
        document.removeEventListener('transitionend', this.onTransitionEnd_);\r
        window.removeEventListener('resize', this.refresh);\r
        if (this.mutationsObserver_) {\r
            this.mutationsObserver_.disconnect();\r
        }\r
        if (this.mutationEventsAdded_) {\r
            document.removeEventListener('DOMSubtreeModified', this.refresh);\r
        }\r
        this.mutationsObserver_ = null;\r
        this.mutationEventsAdded_ = false;\r
        this.connected_ = false;\r
    };\r
    /**\r
     * "Transitionend" event handler.\r
     *\r
     * @private\r
     * @param {TransitionEvent} event\r
     * @returns {void}\r
     */\r
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {\r
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;\r
        // Detect whether transition may affect dimensions of an element.\r
        var isReflowProperty = transitionKeys.some(function (key) {\r
            return !!~propertyName.indexOf(key);\r
        });\r
        if (isReflowProperty) {\r
            this.refresh();\r
        }\r
    };\r
    /**\r
     * Returns instance of the ResizeObserverController.\r
     *\r
     * @returns {ResizeObserverController}\r
     */\r
    ResizeObserverController.getInstance = function () {\r
        if (!this.instance_) {\r
            this.instance_ = new ResizeObserverController();\r
        }\r
        return this.instance_;\r
    };\r
    /**\r
     * Holds reference to the controller's instance.\r
     *\r
     * @private {ResizeObserverController}\r
     */\r
    ResizeObserverController.instance_ = null;\r
    return ResizeObserverController;\r
}());

/**\r
 * Defines non-writable/enumerable properties of the provided target object.\r
 *\r
 * @param {Object} target - Object for which to define properties.\r
 * @param {Object} props - Properties to be defined.\r
 * @returns {Object} Target object.\r
 */\r
var defineConfigurable = (function (target, props) {\r
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {\r
        var key = _a[_i];\r
        Object.defineProperty(target, key, {\r
            value: props[key],\r
            enumerable: false,\r
            writable: false,\r
            configurable: true\r
        });\r
    }\r
    return target;\r
});

/**\r
 * Returns the global object associated with provided element.\r
 *\r
 * @param {Object} target\r
 * @returns {Object}\r
 */\r
var getWindowOf = (function (target) {\r
    // Assume that the element is an instance of Node, which means that it\r
    // has the "ownerDocument" property from which we can retrieve a\r
    // corresponding global object.\r
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;\r
    // Return the local global object if it's not possible extract one from\r
    // provided element.\r
    return ownerGlobal || global$1;\r
});

// Placeholder of an empty content rectangle.\r
var emptyRect = createRectInit(0, 0, 0, 0);\r
/**\r
 * Converts provided string to a number.\r
 *\r
 * @param {number|string} value\r
 * @returns {number}\r
 */\r
function toFloat(value) {\r
    return parseFloat(value) || 0;\r
}\r
/**\r
 * Extracts borders size from provided styles.\r
 *\r
 * @param {CSSStyleDeclaration} styles\r
 * @param {...string} positions - Borders positions (top, right, ...)\r
 * @returns {number}\r
 */\r
function getBordersSize(styles) {\r
    var positions = [];\r
    for (var _i = 1; _i < arguments.length; _i++) {\r
        positions[_i - 1] = arguments[_i];\r
    }\r
    return positions.reduce(function (size, position) {\r
        var value = styles['border-' + position + '-width'];\r
        return size + toFloat(value);\r
    }, 0);\r
}\r
/**\r
 * Extracts paddings sizes from provided styles.\r
 *\r
 * @param {CSSStyleDeclaration} styles\r
 * @returns {Object} Paddings box.\r
 */\r
function getPaddings(styles) {\r
    var positions = ['top', 'right', 'bottom', 'left'];\r
    var paddings = {};\r
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {\r
        var position = positions_1[_i];\r
        var value = styles['padding-' + position];\r
        paddings[position] = toFloat(value);\r
    }\r
    return paddings;\r
}\r
/**\r
 * Calculates content rectangle of provided SVG element.\r
 *\r
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs\r
 *      to be calculated.\r
 * @returns {DOMRectInit}\r
 */\r
function getSVGContentRect(target) {\r
    var bbox = target.getBBox();\r
    return createRectInit(0, 0, bbox.width, bbox.height);\r
}\r
/**\r
 * Calculates content rectangle of provided HTMLElement.\r
 *\r
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.\r
 * @returns {DOMRectInit}\r
 */\r
function getHTMLElementContentRect(target) {\r
    // Client width & height properties can't be\r
    // used exclusively as they provide rounded values.\r
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;\r
    // By this condition we can catch all non-replaced inline, hidden and\r
    // detached elements. Though elements with width & height properties less\r
    // than 0.5 will be discarded as well.\r
    //\r
    // Without it we would need to implement separate methods for each of\r
    // those cases and it's not possible to perform a precise and performance\r
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter\r
    // gives wrong results for elements with width & height less than 0.5.\r
    if (!clientWidth && !clientHeight) {\r
        return emptyRect;\r
    }\r
    var styles = getWindowOf(target).getComputedStyle(target);\r
    var paddings = getPaddings(styles);\r
    var horizPad = paddings.left + paddings.right;\r
    var vertPad = paddings.top + paddings.bottom;\r
    // Computed styles of width & height are being used because they are the\r
    // only dimensions available to JS that contain non-rounded values. It could\r
    // be possible to utilize the getBoundingClientRect if only it's data wasn't\r
    // affected by CSS transformations let alone paddings, borders and scroll bars.\r
    var width = toFloat(styles.width), height = toFloat(styles.height);\r
    // Width & height include paddings and borders when the 'border-box' box\r
    // model is applied (except for IE).\r
    if (styles.boxSizing === 'border-box') {\r
        // Following conditions are required to handle Internet Explorer which\r
        // doesn't include paddings and borders to computed CSS dimensions.\r
        //\r
        // We can say that if CSS dimensions + paddings are equal to the "client"\r
        // properties then it's either IE, and thus we don't need to subtract\r
        // anything, or an element merely doesn't have paddings/borders styles.\r
        if (Math.round(width + horizPad) !== clientWidth) {\r
            width -= getBordersSize(styles, 'left', 'right') + horizPad;\r
        }\r
        if (Math.round(height + vertPad) !== clientHeight) {\r
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;\r
        }\r
    }\r
    // Following steps can't be applied to the document's root element as its\r
    // client[Width/Height] properties represent viewport area of the window.\r
    // Besides, it's as well not necessary as the <html> itself neither has\r
    // rendered scroll bars nor it can be clipped.\r
    if (!isDocumentElement(target)) {\r
        // In some browsers (only in Firefox, actually) CSS width & height\r
        // include scroll bars size which can be removed at this step as scroll\r
        // bars are the only difference between rounded dimensions + paddings\r
        // and "client" properties, though that is not always true in Chrome.\r
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;\r
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;\r
        // Chrome has a rather weird rounding of "client" properties.\r
        // E.g. for an element with content width of 314.2px it sometimes gives\r
        // the client width of 315px and for the width of 314.7px it may give\r
        // 314px. And it doesn't happen all the time. So just ignore this delta\r
        // as a non-relevant.\r
        if (Math.abs(vertScrollbar) !== 1) {\r
            width -= vertScrollbar;\r
        }\r
        if (Math.abs(horizScrollbar) !== 1) {\r
            height -= horizScrollbar;\r
        }\r
    }\r
    return createRectInit(paddings.left, paddings.top, width, height);\r
}\r
/**\r
 * Checks whether provided element is an instance of the SVGGraphicsElement.\r
 *\r
 * @param {Element} target - Element to be checked.\r
 * @returns {boolean}\r
 */\r
var isSVGGraphicsElement = (function () {\r
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement\r
    // interface.\r
    if (typeof SVGGraphicsElement !== 'undefined') {\r
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };\r
    }\r
    // If it's so, then check that element is at least an instance of the\r
    // SVGElement and that it has the "getBBox" method.\r
    // eslint-disable-next-line no-extra-parens\r
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&\r
        typeof target.getBBox === 'function'); };\r
})();\r
/**\r
 * Checks whether provided element is a document element (<html>).\r
 *\r
 * @param {Element} target - Element to be checked.\r
 * @returns {boolean}\r
 */\r
function isDocumentElement(target) {\r
    return target === getWindowOf(target).document.documentElement;\r
}\r
/**\r
 * Calculates an appropriate content rectangle for provided html or svg element.\r
 *\r
 * @param {Element} target - Element content rectangle of which needs to be calculated.\r
 * @returns {DOMRectInit}\r
 */\r
function getContentRect(target) {\r
    if (!isBrowser) {\r
        return emptyRect;\r
    }\r
    if (isSVGGraphicsElement(target)) {\r
        return getSVGContentRect(target);\r
    }\r
    return getHTMLElementContentRect(target);\r
}\r
/**\r
 * Creates rectangle with an interface of the DOMRectReadOnly.\r
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly\r
 *\r
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.\r
 * @returns {DOMRectReadOnly}\r
 */\r
function createReadOnlyRect(_a) {\r
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;\r
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.\r
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;\r
    var rect = Object.create(Constr.prototype);\r
    // Rectangle's properties are not writable and non-enumerable.\r
    defineConfigurable(rect, {\r
        x: x, y: y, width: width, height: height,\r
        top: y,\r
        right: x + width,\r
        bottom: height + y,\r
        left: x\r
    });\r
    return rect;\r
}\r
/**\r
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.\r
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit\r
 *\r
 * @param {number} x - X coordinate.\r
 * @param {number} y - Y coordinate.\r
 * @param {number} width - Rectangle's width.\r
 * @param {number} height - Rectangle's height.\r
 * @returns {DOMRectInit}\r
 */\r
function createRectInit(x, y, width, height) {\r
    return { x: x, y: y, width: width, height: height };\r
}

/**\r
 * Class that is responsible for computations of the content rectangle of\r
 * provided DOM element and for keeping track of it's changes.\r
 */\r
var ResizeObservation = /** @class */ (function () {\r
    /**\r
     * Creates an instance of ResizeObservation.\r
     *\r
     * @param {Element} target - Element to be observed.\r
     */\r
    function ResizeObservation(target) {\r
        /**\r
         * Broadcasted width of content rectangle.\r
         *\r
         * @type {number}\r
         */\r
        this.broadcastWidth = 0;\r
        /**\r
         * Broadcasted height of content rectangle.\r
         *\r
         * @type {number}\r
         */\r
        this.broadcastHeight = 0;\r
        /**\r
         * Reference to the last observed content rectangle.\r
         *\r
         * @private {DOMRectInit}\r
         */\r
        this.contentRect_ = createRectInit(0, 0, 0, 0);\r
        this.target = target;\r
    }\r
    /**\r
     * Updates content rectangle and tells whether it's width or height properties\r
     * have changed since the last broadcast.\r
     *\r
     * @returns {boolean}\r
     */\r
    ResizeObservation.prototype.isActive = function () {\r
        var rect = getContentRect(this.target);\r
        this.contentRect_ = rect;\r
        return (rect.width !== this.broadcastWidth ||\r
            rect.height !== this.broadcastHeight);\r
    };\r
    /**\r
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data\r
     * from the corresponding properties of the last observed content rectangle.\r
     *\r
     * @returns {DOMRectInit} Last observed content rectangle.\r
     */\r
    ResizeObservation.prototype.broadcastRect = function () {\r
        var rect = this.contentRect_;\r
        this.broadcastWidth = rect.width;\r
        this.broadcastHeight = rect.height;\r
        return rect;\r
    };\r
    return ResizeObservation;\r
}());

var ResizeObserverEntry = /** @class */ (function () {\r
    /**\r
     * Creates an instance of ResizeObserverEntry.\r
     *\r
     * @param {Element} target - Element that is being observed.\r
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.\r
     */\r
    function ResizeObserverEntry(target, rectInit) {\r
        var contentRect = createReadOnlyRect(rectInit);\r
        // According to the specification following properties are not writable\r
        // and are also not enumerable in the native implementation.\r
        //\r
        // Property accessors are not being used as they'd require to define a\r
        // private WeakMap storage which may cause memory leaks in browsers that\r
        // don't support this type of collections.\r
        defineConfigurable(this, { target: target, contentRect: contentRect });\r
    }\r
    return ResizeObserverEntry;\r
}());

var ResizeObserverSPI = /** @class */ (function () {\r
    /**\r
     * Creates a new instance of ResizeObserver.\r
     *\r
     * @param {ResizeObserverCallback} callback - Callback function that is invoked\r
     *      when one of the observed elements changes it's content dimensions.\r
     * @param {ResizeObserverController} controller - Controller instance which\r
     *      is responsible for the updates of observer.\r
     * @param {ResizeObserver} callbackCtx - Reference to the public\r
     *      ResizeObserver instance which will be passed to callback function.\r
     */\r
    function ResizeObserverSPI(callback, controller, callbackCtx) {\r
        /**\r
         * Collection of resize observations that have detected changes in dimensions\r
         * of elements.\r
         *\r
         * @private {Array<ResizeObservation>}\r
         */\r
        this.activeObservations_ = [];\r
        /**\r
         * Registry of the ResizeObservation instances.\r
         *\r
         * @private {Map<Element, ResizeObservation>}\r
         */\r
        this.observations_ = new MapShim();\r
        if (typeof callback !== 'function') {\r
            throw new TypeError('The callback provided as parameter 1 is not a function.');\r
        }\r
        this.callback_ = callback;\r
        this.controller_ = controller;\r
        this.callbackCtx_ = callbackCtx;\r
    }\r
    /**\r
     * Starts observing provided element.\r
     *\r
     * @param {Element} target - Element to be observed.\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.observe = function (target) {\r
        if (!arguments.length) {\r
            throw new TypeError('1 argument required, but only 0 present.');\r
        }\r
        // Do nothing if current environment doesn't have the Element interface.\r
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {\r
            return;\r
        }\r
        if (!(target instanceof getWindowOf(target).Element)) {\r
            throw new TypeError('parameter 1 is not of type "Element".');\r
        }\r
        var observations = this.observations_;\r
        // Do nothing if element is already being observed.\r
        if (observations.has(target)) {\r
            return;\r
        }\r
        observations.set(target, new ResizeObservation(target));\r
        this.controller_.addObserver(this);\r
        // Force the update of observations.\r
        this.controller_.refresh();\r
    };\r
    /**\r
     * Stops observing provided element.\r
     *\r
     * @param {Element} target - Element to stop observing.\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.unobserve = function (target) {\r
        if (!arguments.length) {\r
            throw new TypeError('1 argument required, but only 0 present.');\r
        }\r
        // Do nothing if current environment doesn't have the Element interface.\r
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {\r
            return;\r
        }\r
        if (!(target instanceof getWindowOf(target).Element)) {\r
            throw new TypeError('parameter 1 is not of type "Element".');\r
        }\r
        var observations = this.observations_;\r
        // Do nothing if element is not being observed.\r
        if (!observations.has(target)) {\r
            return;\r
        }\r
        observations.delete(target);\r
        if (!observations.size) {\r
            this.controller_.removeObserver(this);\r
        }\r
    };\r
    /**\r
     * Stops observing all elements.\r
     *\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.disconnect = function () {\r
        this.clearActive();\r
        this.observations_.clear();\r
        this.controller_.removeObserver(this);\r
    };\r
    /**\r
     * Collects observation instances the associated element of which has changed\r
     * it's content rectangle.\r
     *\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.gatherActive = function () {\r
        var _this = this;\r
        this.clearActive();\r
        this.observations_.forEach(function (observation) {\r
            if (observation.isActive()) {\r
                _this.activeObservations_.push(observation);\r
            }\r
        });\r
    };\r
    /**\r
     * Invokes initial callback function with a list of ResizeObserverEntry\r
     * instances collected from active resize observations.\r
     *\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.broadcastActive = function () {\r
        // Do nothing if observer doesn't have active observations.\r
        if (!this.hasActive()) {\r
            return;\r
        }\r
        var ctx = this.callbackCtx_;\r
        // Create ResizeObserverEntry instance for every active observation.\r
        var entries = this.activeObservations_.map(function (observation) {\r
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());\r
        });\r
        this.callback_.call(ctx, entries, ctx);\r
        this.clearActive();\r
    };\r
    /**\r
     * Clears the collection of active observations.\r
     *\r
     * @returns {void}\r
     */\r
    ResizeObserverSPI.prototype.clearActive = function () {\r
        this.activeObservations_.splice(0);\r
    };\r
    /**\r
     * Tells whether observer has active observations.\r
     *\r
     * @returns {boolean}\r
     */\r
    ResizeObserverSPI.prototype.hasActive = function () {\r
        return this.activeObservations_.length > 0;\r
    };\r
    return ResizeObserverSPI;\r
}());

// Registry of internal observers. If WeakMap is not available use current shim\r
// for the Map collection as it has all required methods and because WeakMap\r
// can't be fully polyfilled anyway.\r
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();\r
/**\r
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation\r
 * exposing only those methods and properties that are defined in the spec.\r
 */\r
var ResizeObserver_es_ResizeObserver = /** @class */ (function () {\r
    /**\r
     * Creates a new instance of ResizeObserver.\r
     *\r
     * @param {ResizeObserverCallback} callback - Callback that is invoked when\r
     *      dimensions of the observed elements change.\r
     */\r
    function ResizeObserver(callback) {\r
        if (!(this instanceof ResizeObserver)) {\r
            throw new TypeError('Cannot call a class as a function.');\r
        }\r
        if (!arguments.length) {\r
            throw new TypeError('1 argument required, but only 0 present.');\r
        }\r
        var controller = ResizeObserverController.getInstance();\r
        var observer = new ResizeObserverSPI(callback, controller, this);\r
        observers.set(this, observer);\r
    }\r
    return ResizeObserver;\r
}());\r
// Expose public methods of ResizeObserver.\r
[\r
    'observe',\r
    'unobserve',\r
    'disconnect'\r
].forEach(function (method) {\r
    ResizeObserver_es_ResizeObserver.prototype[method] = function () {\r
        var _a;\r
        return (_a = observers.get(this))[method].apply(_a, arguments);\r
    };\r
});

var index = (function () {\r
    // Export existing implementation if available.\r
    if (typeof global$1.ResizeObserver !== 'undefined') {\r
        return global$1.ResizeObserver;\r
    }\r
    return ResizeObserver_es_ResizeObserver;\r
})();

/* harmony default export */ var ResizeObserver_es = (index);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es(onResize);
// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(83235);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(52113);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(1423);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(55859);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.Z)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-resize-observer/es/SingleObserver/index.js







function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);
  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,es_ref/* supportRef */.Yr)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = react.useMemo(function () {
    return (0,es_ref/* composeRef */.sQ)(originRef, elementRef);
  }, [originRef, elementRef]);
  var getDom = function getDom() {
    return (0,findDOMNode/* default */.Z)(elementRef.current) || (0,findDOMNode/* default */.Z)(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });
  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;
  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use \`boundary\` instead of \`contentRect\` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;
      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);
  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ var es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function es_ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,Children_toArray/* default */.Z)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.Z)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(es_ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ var es = (RefResizeObserver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y/node_modules/rc-overflow/es/Item.js



var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];


 // Use shared variable to save bundle size

var UNDEFINED = undefined;

function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
      invalidate = props.invalidate,
      item = props.item,
      renderItem = props.renderItem,
      responsive = props.responsive,
      responsiveDisabled = props.responsiveDisabled,
      registerSize = props.registerSize,
      itemKey = props.itemKey,
      className = props.className,
      style = props.style,
      children = props.children,
      display = props.display,
      order = props.order,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var mergedHidden = responsive && !display; // ================================ Effect ================================

  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }

  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []); // ================================ Render ================================

  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;

  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }

  var overflowProps = {};

  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }

  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);

  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }

  return itemNode;
}

var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(52032);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y/node_modules/rc-overflow/es/hooks/useBatchFrameState.js




/**
 * State generate. Return a \`setState\` but it will flush all state with one render to save perf.
 * This is not a realization of \`unstable_batchedUpdates\`.
 */

function useBatchFrameState() {
  var _useState = (0,useState/* default */.Z)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var statesRef = (0,react.useRef)([]);
  var walkingIndex = 0;
  var beforeFrameId = 0;

  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1; // Fill value if not exist yet

    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    } // Return filled as \`setState\`


    var value = statesRef.current[myIndex];

    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      raf/* default.cancel */.Z.cancel(beforeFrameId); // Flush with batch

      beforeFrameId = (0,raf/* default */.Z)(function () {
        forceUpdate({}, true);
      });
    }

    return [value, setValue];
  }

  return createState;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y/node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
    _excluded2 = ["className"],
    _excluded3 = ["className"];





var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext); // Render directly when context not provided

  if (!context) {
    var _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _restProps = (0,objectWithoutProperties/* default */.Z)(props, RawItem_excluded);

    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }

  var contextClassName = context.className,
      restContext = (0,objectWithoutProperties/* default */.Z)(context, _excluded2);

  var className = props.className,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded3); // Do not pass context to sub item to avoid multiple measure


  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};

var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y/node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];








var OverflowContext = /*#__PURE__*/react.createContext(null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      renderItem = props.renderItem,
      renderRawItem = props.renderRawItem,
      itemKey = props.itemKey,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
      ssr = props.ssr,
      style = props.style,
      className = props.className,
      maxCount = props.maxCount,
      renderRest = props.renderRest,
      renderRawRest = props.renderRawRest,
      suffix = props.suffix,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      itemComponent = props.itemComponent,
      onVisibleChange = props.onVisibleChange,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Overflow_excluded);

  var createUseState = useBatchFrameState();
  var fullySSR = ssr === 'full';

  var _createUseState = createUseState(null),
      _createUseState2 = (0,slicedToArray/* default */.Z)(_createUseState, 2),
      containerWidth = _createUseState2[0],
      setContainerWidth = _createUseState2[1];

  var mergedContainerWidth = containerWidth || 0;

  var _createUseState3 = createUseState(new Map()),
      _createUseState4 = (0,slicedToArray/* default */.Z)(_createUseState3, 2),
      itemWidths = _createUseState4[0],
      setItemWidths = _createUseState4[1];

  var _createUseState5 = createUseState(0),
      _createUseState6 = (0,slicedToArray/* default */.Z)(_createUseState5, 2),
      prevRestWidth = _createUseState6[0],
      setPrevRestWidth = _createUseState6[1];

  var _createUseState7 = createUseState(0),
      _createUseState8 = (0,slicedToArray/* default */.Z)(_createUseState7, 2),
      restWidth = _createUseState8[0],
      setRestWidth = _createUseState8[1];

  var _createUseState9 = createUseState(0),
      _createUseState10 = (0,slicedToArray/* default */.Z)(_createUseState9, 2),
      suffixWidth = _createUseState10[0],
      setSuffixWidth = _createUseState10[1];

  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      suffixFixedStart = _useState2[0],
      setSuffixFixedStart = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }

    return displayCount || 0;
  }, [displayCount, containerWidth]);

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      restReady = _useState6[0],
      setRestReady = _useState6[1];

  var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

  var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is \`responsive\`, we will always render rest node to get the real width of it for calculation
   */

  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;

    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }

    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }

    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]); // ================================= Item =================================

  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;

    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);

  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take \`mergedData\` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }

    setDisplayCount(count);

    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }

    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  } // ================================= Size =================================


  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }

  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      return clone;
    });
  }

  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }

  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  } // ================================ Effect ================================


  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }

  hooks_useLayoutEffect(function () {
    if (mergedContainerWidth && mergedRestWidth && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

      if (!len) {
        updateDisplayCount(0, null);
        return;
      }

      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i); // Fully will always render

        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        } // Break since data not ready


        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        } // Find best match


        totalWidth += currentItemWidth;

        if ( // Only one means \`totalWidth\` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }

      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};

  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }

  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  }; // >>>>> Choice render fun by \`renderRawItem\`

  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  }; // >>>>> Rest node

  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };

  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }

  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));

  if (isResponsive) {
    overflowNode = /*#__PURE__*/react.createElement(es, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }

  return overflowNode;
}

var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE; // Convert to generic type

/* harmony default export */ var es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.2.8_biqbaboplfbrettd7655fr4n2y/node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = (es_Overflow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/TransBtn.js



var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return /*#__PURE__*/react.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(className.split(/\\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/* harmony default export */ var es_TransBtn = (TransBtn);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Selector/Input.js






var Input = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      activeDescendantId = _ref.activeDescendantId,
      value = _ref.value,
      maxLength = _ref.maxLength,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/react.createElement("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
      onOriginChange = originProps.onChange,
      onOriginMouseDown = originProps.onMouseDown,
      onOriginCompositionStart = originProps.onCompositionStart,
      onOriginCompositionEnd = originProps.onCompositionEnd,
      style = originProps.style;
  (0,es_warning/* warning */.Kp)(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
  inputNode = /*#__PURE__*/react.cloneElement(inputNode, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    type: 'search'
  }, originProps), {}, {
    // Override over origin props
    id: id,
    ref: (0,es_ref/* composeRef */.sQ)(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    autoFocus: autoFocus,
    className: classnames_default()("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': activeDescendantId
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = /*#__PURE__*/react.forwardRef(Input);
RefInput.displayName = 'Input';
/* harmony default export */ var Selector_Input = (RefInput);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/commonUtil.js

function commonUtil_toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var isBrowserClient =  true && isClient;
function commonUtil_hasValue(value) {
  return value !== undefined && value !== null;
}

function isTitleType(title) {
  return ['string', 'number'].includes((0,esm_typeof/* default */.Z)(title));
}

function getTitle(item) {
  var title = undefined;

  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }

  return title;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useLayoutEffect.js
/* eslint-disable react-hooks/rules-of-hooks */


/**
 * Wrap \`React.useLayoutEffect\` which will not throw warning message in test env
 */

function useLayoutEffect_useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient) {
    /* istanbul ignore next */
    react.useLayoutEffect(effect, deps);
  } else {
    react.useEffect(effect, deps);
  }
}
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Selector/MultipleSelector.js












function itemKey(value) {
  var _value$key;

  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}

var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      autoClearSearchValue = props.autoClearSearchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onToggleOpen = props.onToggleOpen,
      onRemove = props.onRemove,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = react.useRef(null);

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused); // We measure width and set to the input immediately

  useLayoutEffect_useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest

  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(selectionPrefixCls, "-item"), (0,defineProperty/* default */.Z)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /*#__PURE__*/react.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\\xD7"));
  }

  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };

    return /*#__PURE__*/react.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }

  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
        label = valueItem.label,
        value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;

    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };

    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }

  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  } // >>> Input Node


  var inputNode = /*#__PURE__*/react.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true)
  }), /*#__PURE__*/react.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\\xA0")); // >>> Selections

  var selectionNode = /*#__PURE__*/react.createElement(rc_overflow_es, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: itemKey,
    maxCount: maxTagCount
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/react.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ var MultipleSelector = (SelectSelector);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Selector/SingleSelector.js






var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      activeDescendantId = props.activeDescendantId,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      maxLength = props.maxLength,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  react.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue; // Get title

  var title = getTitle(item);

  var renderPlaceholder = function renderPlaceholder() {
    if (item) {
      return null;
    }

    var hiddenStyle = hasTextInput ? {
      visibility: 'hidden'
    } : undefined;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/react.createElement(Selector_Input, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    activeDescendantId: activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item && !hasTextInput && /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), renderPlaceholder());
};

/* harmony default export */ var Selector_SingleSelector = (SingleSelector);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/keyUtil.js

/** keyCode Judgment function */

function isValidateOpenKey(currentKeyCode) {
  return ![// System function button
  es_KeyCode.ESC, es_KeyCode.SHIFT, es_KeyCode.BACKSPACE, es_KeyCode.TAB, es_KeyCode.WIN_KEY, es_KeyCode.ALT, es_KeyCode.META, es_KeyCode.WIN_KEY_RIGHT, es_KeyCode.CTRL, es_KeyCode.SEMICOLON, es_KeyCode.EQUALS, es_KeyCode.CAPS_LOCK, es_KeyCode.CONTEXT_MENU, // F1-F12
  es_KeyCode.F1, es_KeyCode.F2, es_KeyCode.F3, es_KeyCode.F4, es_KeyCode.F5, es_KeyCode.F6, es_KeyCode.F7, es_KeyCode.F8, es_KeyCode.F9, es_KeyCode.F10, es_KeyCode.F11, es_KeyCode.F12].includes(currentKeyCode);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Selector/index.js



/**
 * Cursor rule:
 * 1. Only \`showSearch\` enabled
 * 2. Only \`open\` is \`true\`
 * 3. When typing, set \`open\` to \`true\` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */








var Selector = function Selector(props, ref) {
  var inputRef = (0,react.useRef)(null);
  var compositionStatusRef = (0,react.useRef)(false);
  var prefixCls = props.prefixCls,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      autoClearSearchValue = props.autoClearSearchValue,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = useLock(0),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === es_KeyCode.UP || which === es_KeyCode.DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === es_KeyCode.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }

    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use \`findDOMNode\` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = (0,react.useRef)(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false; // Trigger search again to support \`tokenSeparators\` with typewriting

    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\\r\\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\\r\\n]+$/, '').replace(/\\r\\n/g, ' ').replace(/[\\r\\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown(); // when mode is combobox, don't prevent default behavior
    // https://github.com/ant-design/ant-design/issues/37320

    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/react.createElement(MultipleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps)) : /*#__PURE__*/react.createElement(Selector_SingleSelector, (0,esm_extends/* default */.Z)({}, props, sharedProps));
  return /*#__PURE__*/react.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = /*#__PURE__*/react.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ var es_Selector = (ForwardSelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(86027);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(10422);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(8878);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/addEventListener.js

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom.unstable_batchedUpdates ? function run(e) {
    react_dom.unstable_batchedUpdates(cb, e);
  } : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Portal.js



var Portal = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var parentRef = (0,react.useRef)();
  var containerRef = (0,react.useRef)();

  // Ref return nothing, only for wrapper check exist
  (0,react.useImperativeHandle)(ref, function () {
    return {};
  });

  // Create container in client side with sync to avoid useEffect not get ref
  var initRef = (0,react.useRef)(false);
  if (!initRef.current && (0,canUseDom/* default */.Z)()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }

  // [Legacy] Used by \`rc-trigger\`
  (0,react.useEffect)(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  (0,react.useEffect)(function () {
    // Restore container to original place
    // React 18 StrictMode will unmount first and mount back for effect test:
    // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return function () {
      var _containerRef$current, _containerRef$current2;
      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use \`Portal\` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/react_dom.createPortal(children, containerRef.current) : null;
});
/* harmony default export */ var es_Portal = (Portal);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/utils/alignUtil.js


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.6.3_biqbaboplfbrettd7655fr4n2y/node_modules/rc-motion/es/index.js + 11 modules
var rc_motion_es = __webpack_require__(81676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/utils/legacyUtil.js
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/Mask.js






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = (0,objectSpread2/* default */.Z)({
      motionAppear: true
    }, getMotion({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, (0,esm_extends/* default */.Z)({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames_default()("".concat(prefixCls, "-mask"), className)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/dom-align@1.12.4/node_modules/dom-align/dist-web/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function dist_web_typeof(obj) {
  "@babel/helpers - typeof";

  return dist_web_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, dist_web_typeof(obj);
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

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};
function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\\((.*)\\)/;
var matrix3d = /matrix3d\\((.*)\\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\\-+]?(?:\\d*\\.|)\\d+(?:[eE][\\-+]?\\d+|)/.source;
var getComputedStyleX;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}
function css(el, name, v) {
  var value = v;
  if (dist_web_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // \u6839\u636E GBS \u6700\u65B0\u6570\u636E\uFF0CA-Grade Browsers \u90FD\u5DF2\u652F\u6301 getBoundingClientRect \u65B9\u6CD5\uFF0C\u4E0D\u7528\u518D\u8003\u8651\u4F20\u7EDF\u7684\u5B9E\u73B0\u65B9\u5F0F
  box = elem.getBoundingClientRect();

  // \u6CE8\uFF1AjQuery \u8FD8\u8003\u8651\u51CF\u53BB docElem.clientLeft/clientTop
  // \u4F46\u6D4B\u8BD5\u53D1\u73B0\uFF0C\u8FD9\u6837\u53CD\u800C\u4F1A\u5BFC\u81F4\u5F53 html \u548C body \u6709\u8FB9\u8DDD/\u8FB9\u6846\u6837\u5F0F\u65F6\uFF0C\u83B7\u53D6\u7684\u503C\u4E0D\u6B63\u786E
  // \u6B64\u5916\uFF0Cie6 \u4F1A\u5FFD\u7565 html \u7684 margin \u503C\uFF0C\u5E78\u8FD0\u5730\u662F\u6CA1\u6709\u8C01\u4F1A\u53BB\u8BBE\u7F6E html \u7684 margin

  x = Math.floor(box.left);
  y = Math.floor(box.top);

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie \u4E0B\u5E94\u8BE5\u51CF\u53BB\u7A97\u53E3\u7684\u8FB9\u6846\u5427\uFF0C\u6BD5\u7ADF\u9ED8\u8BA4 absolute \u90FD\u662F\u76F8\u5BF9\u7A97\u53E3\u5B9A\u4F4D\u7684
  // \u7A97\u53E3\u8FB9\u6846\u6807\u51C6\u662F\u8BBE documentElement ,quirks \u65F6\u8BBE\u7F6E body
  // \u6700\u597D\u7981\u6B62\u5728 body \u548C html \u4E0A\u8FB9\u6846 \uFF0C\u4F46 ie < 9 html \u9ED8\u8BA4\u6709 2px \uFF0C\u51CF\u53BB
  // \u4F46\u662F\u975E ie \u4E0D\u53EF\u80FD\u8BBE\u7F6E\u7A97\u53E3\u8FB9\u6846\uFF0Cbody html \u4E5F\u4E0D\u662F\u7A97\u53E3 ,ie \u53EF\u4EE5\u901A\u8FC7 html,body \u8BBE\u7F6E
  // \u6807\u51C6 ie \u4E0B docElem.clientTop \u5C31\u662F border-top
  // ie7 html \u5373\u7A97\u53E3\u8FB9\u6846\u6539\u53D8\u4E0D\u4E86\u3002\u6C38\u8FDC\u4E3A 2
  // \u4F46\u6807\u51C6 firefox/chrome/ie9 \u4E0B docElem.clientTop \u662F\u7A97\u53E3\u8FB9\u6846\uFF0C\u5373\u4F7F\u8BBE\u4E86 border-top \u4E5F\u4E3A 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';
function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // \u5F53 width/height \u8BBE\u7F6E\u4E3A\u767E\u5206\u6BD4\u65F6\uFF0C\u901A\u8FC7 pixelLeft \u65B9\u5F0F\u8F6C\u6362\u7684 width/height \u503C
  // \u4E00\u5F00\u59CB\u5C31\u5904\u7406\u4E86! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook \u89E3\u51B3@2011-08-19
  // \u5728 ie \u4E0B\u4E0D\u5BF9\uFF0C\u9700\u8981\u76F4\u63A5\u7528 offset \u65B9\u5F0F
  // borderWidth \u7B49\u503C\u4E5F\u6709\u95EE\u9898\uFF0C\u4F46\u8003\u8651\u5230 borderWidth \u8BBE\u4E3A\u767E\u5206\u6BD4\u7684\u6982\u7387\u5F88\u5C0F\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8003\u8651\u4E86

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// \u8BBE\u7F6E elem \u76F8\u5BF9 elem.ownerDocument \u7684\u5750\u6807
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== 'left') {
    presetH = 999;
  }
  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}
var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)],
    // quirks : documentElement.scrollHeight \u6700\u5927\u7B49\u4E8E\u53EF\u89C6\u7A97\u53E3\u591A\u4E00\u70B9\uFF1F
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };
  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // \u6807\u51C6\u6A21\u5F0F\u53D6 documentElement
    // backcompat \u53D6 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 \u5F97\u5230\u5143\u7D20\u7684\u5927\u5C0F\u4FE1\u606F
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}
each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * \u5F97\u5230\u4F1A\u5BFC\u81F4\u5143\u7D20\u663E\u793A\u4E0D\u5168\u7684\u7956\u5148\u5143\u7D20
 */
var getParent = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie \u8FD9\u4E2A\u4E5F\u4E0D\u662F\u5B8C\u5168\u53EF\u884C
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   \u5143\u7D20 6 \u9AD8 100px \u5BBD 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // \u7EDF\u4E00\u7684 offsetParent \u65B9\u6CD5
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }
  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element);
  // \u4FEE\u590D\u5143\u7D20\u4F4D\u4E8E document.documentElement \u4E0B\u5BFC\u81F4\u5D29\u6E83\u95EE\u9898
  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/**
 * \u83B7\u5F97\u5143\u7D20\u7684\u663E\u793A\u90E8\u5206\u7684\u533A\u57DF
 */
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  }

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // \u4FDD\u8BC1\u5DE6\u8FB9\u754C\u548C\u53EF\u89C6\u533A\u57DF\u5DE6\u8FB9\u754C\u5BF9\u9F50
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // \u4FDD\u8BC1\u4E0A\u8FB9\u754C\u548C\u53EF\u89C6\u533A\u57DF\u4E0A\u8FB9\u754C\u5BF9\u9F50
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * \u83B7\u53D6 node \u4E0A\u7684 align \u5BF9\u9F50\u70B9 \u76F8\u5BF9\u4E8E\u9875\u9762\u7684\u5750\u6807
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;
  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }
  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}
function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}
function convertOffset(str, offsetLen) {
  var n;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}
function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion \u53C2\u7167\u8282\u70B9\u6240\u5360\u7684\u533A\u57DF: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  // \u5F53\u524D\u8282\u70B9\u53EF\u4EE5\u88AB\u653E\u7F6E\u7684\u663E\u793A\u533A\u57DF
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  // \u5F53\u524D\u8282\u70B9\u6240\u5360\u7684\u533A\u57DF, left/top/width/height
  var elRegion = getRegion(source);
  // \u5C06 offset \u8F6C\u6362\u6210\u6570\u503C\uFF0C\u652F\u6301\u767E\u5206\u6BD4
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // \u5F53\u524D\u8282\u70B9\u5C06\u8981\u88AB\u653E\u7F6E\u7684\u4F4D\u7F6E
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
  // \u5F53\u524D\u8282\u70B9\u5C06\u8981\u6240\u5904\u7684\u533A\u57DF
  var newElRegion = utils.merge(elRegion, elFuturePos);

  // \u5982\u679C\u53EF\u89C6\u533A\u57DF\u4E0D\u80FD\u5B8C\u5168\u653E\u7F6E\u5F53\u524D\u8282\u70B9\u65F6\u5141\u8BB8\u8C03\u6574
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // \u5982\u679C\u6A2A\u5411\u4E0D\u80FD\u653E\u4E0B
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // \u5BF9\u9F50\u4F4D\u7F6E\u53CD\u4E0B
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
        // \u504F\u79FB\u91CF\u4E5F\u53CD\u4E0B
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      // \u5982\u679C\u7EB5\u5411\u4E0D\u80FD\u653E\u4E0B
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // \u5BF9\u9F50\u4F4D\u7F6E\u53CD\u4E0B
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
        // \u504F\u79FB\u91CF\u4E5F\u53CD\u4E0B
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // \u5982\u679C\u5931\u8D25\uFF0C\u91CD\u65B0\u8BA1\u7B97\u5F53\u524D\u8282\u70B9\u5C06\u8981\u88AB\u653E\u7F6E\u7684\u4F4D\u7F6E
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // \u68C0\u67E5\u53CD\u4E0B\u540E\u7684\u4F4D\u7F6E\u662F\u5426\u53EF\u4EE5\u653E\u4E0B\u4E86\uFF0C\u5982\u679C\u4ECD\u7136\u653E\u4E0D\u4E0B\uFF1A
    // 1. \u590D\u539F\u4FEE\u6539\u8FC7\u7684\u5B9A\u4F4D\u53C2\u6570
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;

      // \u91CD\u7F6E\u5BF9\u5E94\u90E8\u5206\u7684\u7FFB\u8F6C\u903B\u8F91
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }
      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. \u53EA\u6709\u6307\u5B9A\u4E86\u53EF\u4EE5\u8C03\u6574\u5F53\u524D\u65B9\u5411\u624D\u8C03\u6574
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // \u786E\u5B9E\u8981\u8C03\u6574\uFF0C\u751A\u81F3\u53EF\u80FD\u4F1A\u8C03\u6574\u9AD8\u5EA6\u5BBD\u5EA6
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // \u76F8\u5BF9\u4E8E\u5C4F\u5E55\u4F4D\u7F6E\u6CA1\u53D8\uFF0C\u800C left/top \u53D8\u4E86
  // \u4F8B\u5982 <div 'relative'><el absolute></div>
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - \u4F18\u5316\u667A\u80FD\u5BF9\u9F50\u7B97\u6CD5
 *   - \u614E\u7528 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - \u589E\u52A0\u667A\u80FD\u5BF9\u9F50\uFF0C\u4EE5\u53CA\u5927\u5C0F\u8C03\u6574\u9009\u9879
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * \`tgtPoint\`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points: points
  }), pointInView);
}

/* harmony default export */ var dist_web = ((/* unused pure expression or super */ null && (alignElement)));

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(2341);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(44814);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-align@4.0.15_biqbaboplfbrettd7655fr4n2y/node_modules/rc-align/es/hooks/useBuffer.js

/* harmony default export */ var useBuffer = (function (callback, buffer) {
  var calledRef = react.useRef(false);
  var timeoutRef = react.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    cancelTrigger();

    if (!calledRef.current || force === true) {
      if (callback(force) === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-align@4.0.15_biqbaboplfbrettd7655fr4n2y/node_modules/rc-align/es/util.js



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && (0,contains/* default */.Z)(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new ResizeObserver_es(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-align@4.0.15_biqbaboplfbrettd7655fr4n2y/node_modules/rc-align/es/Align.js



/**
 * Removed props:
 *  - childrenProps
 */










function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if ((0,esm_typeof/* default */.Z)(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react.useRef({});
  /** Popup node ref */

  var nodeRef = react.useRef();
  var childNode = react.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestAlign = _forceAlignPropsRef$c.align,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;
    var source = nodeRef.current;

    if (!latestDisabled && latestTarget && source) {
      var _result;

      var _element = getElement(latestTarget);

      var _point = getPoint(latestTarget);

      cacheRef.current.element = _element;
      cacheRef.current.point = _point;
      cacheRef.current.align = latestAlign; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (_element && (0,isVisible/* default */.Z)(_element)) {
        _result = alignElement(source, _element, latestAlign);
      } else if (_point) {
        _result = alignPoint(source, _point, latestAlign);
      }

      restoreFocus(activeElement, source);

      if (latestOnAlign && _result) {
        latestOnAlign(source, _result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = (0,slicedToArray/* default */.Z)(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Handle props change


  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      element = _React$useState2[0],
      setElement = _React$useState2[1];

  var _React$useState3 = react.useState(),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      point = _React$useState4[0],
      setPoint = _React$useState4[1];

  hooks_useLayoutEffect(function () {
    setElement(getElement(target));
    setPoint(getPoint(target));
  });
  react.useEffect(function () {
    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point) || !(0,isEqual/* default */.Z)(cacheRef.current.align, align)) {
      _forceAlign();
    }
  }); // Watch popup element resize

  react.useEffect(function () {
    var cancelFn = monitorResize(nodeRef.current, _forceAlign);
    return cancelFn;
  }, [nodeRef.current]); // Watch target element resize

  react.useEffect(function () {
    var cancelFn = monitorResize(element, _forceAlign);
    return cancelFn;
  }, [element]); // Listen for disabled change

  react.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  react.useEffect(function () {
    if (monitorWindowResize) {
      var cancelFn = addEventListenerWrap(window, 'resize', _forceAlign);
      return cancelFn.remove;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react.useEffect(function () {
    return function () {
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if ( /*#__PURE__*/react.isValidElement(childNode)) {
    childNode = /*#__PURE__*/react.cloneElement(childNode, {
      ref: (0,es_ref/* composeRef */.sQ)(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RcAlign = /*#__PURE__*/react.forwardRef(Align);
RcAlign.displayName = 'Align';
/* harmony default export */ var es_Align = (RcAlign);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-align@4.0.15_biqbaboplfbrettd7655fr4n2y/node_modules/rc-align/es/index.js
// export this package's api

/* harmony default export */ var rc_align_es = (es_Align);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4321);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(88769);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/useVisibleStatus.js






/**
 * Popup should follow the steps for each component work correctly:
 * measure - check for the current stretch size
 * align - let component align the position
 * aligned - re-align again in case additional className changed the size
 * afterAlign - choice next step is trigger motion or finished
 * beforeMotion - should reset motion to invisible so that CSSMotion can do normal motion
 * motion - play the motion
 * stable - everything is done
 */

var StatusQueue = ['measure', 'alignPre', 'align', null, 'motion'];
/* harmony default export */ var useVisibleStatus = (function (visible, doMeasure) {
  var _useState = (0,useState/* default */.Z)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = (0,react.useRef)();

  function setStatus(nextStatus) {
    setInternalStatus(nextStatus, true);
  }

  function cancelRaf() {
    raf/* default.cancel */.Z.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = (0,raf/* default */.Z)(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  (0,react.useEffect)(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  (0,react.useEffect)(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = (0,raf/* default */.Z)( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var index, nextStatus;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  (0,react.useEffect)(function () {
    return function () {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/useStretchStyle.js


/* harmony default export */ var useStretchStyle = (function (stretch) {
  var _React$useState = react.useState({
    width: 0,
    height: 0
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    var tgtWidth = element.offsetWidth,
        tgtHeight = element.offsetHeight;

    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height; // Rect is more accurate than offset, use if near


    if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
      tgtWidth = width;
      tgtHeight = height;
    }

    setTargetSize({
      width: tgtWidth,
      height: tgtHeight
    });
  } // Merge stretch style


  var style = react.useMemo(function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/PopupInner.js












var PopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      forceRender = props.forceRender,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart,
      onClick = props.onClick;
  var alignRef = (0,react.useRef)();
  var elementRef = (0,react.useRef)();

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = useStretchStyle(stretch),
      _useStretchStyle2 = (0,slicedToArray/* default */.Z)(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
      _useVisibleStatus2 = (0,slicedToArray/* default */.Z)(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================

  /**
   * \`alignedClassName\` may modify \`source\` size,
   * which means one time align may not move to the correct position at once.
   *
   * We will reset \`alignTimes\` for each status switch to \`alignPre\`
   * and let \`rc-align\` to align for multiple times to ensure get final stable place.
   * Currently we mark \`alignTimes < 2\` repeat align, it will increase if user report for align issue.
   * 
   * Update:
   * In React 18. \`rc-align\` effect of align may faster than ref called trigger \`forceAlign\`.
   * We adjust this to \`alignTimes < 2\`.
   * We need refactor \`rc-align\` to support mark of \`forceAlign\` call if this still happen.
   */


  var _useState3 = (0,react.useState)(0),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      alignTimes = _useState4[0],
      setAlignTimes = _useState4[1];

  var prepareResolveRef = (0,react.useRef)();
  hooks_useLayoutEffect(function () {
    if (status === 'alignPre') {
      setAlignTimes(0);
    }
  }, [status]); // \`target\` on \`rc-align\` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);

    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    } // We will retry multi times to make sure that the element has been align in the right position.


    setAlignTimes(function (val) {
      return val + 1;
    });

    if (status === 'align') {
      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // Delay to go to next status


  hooks_useLayoutEffect(function () {
    if (status === 'align') {
      // Repeat until not more align needed
      if (alignTimes < 3) {
        forceAlign();
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }
    }
  }, [alignTimes]); // ======================== Motion ========================

  var motion = (0,objectSpread2/* default */.Z)({}, getMotion(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react.useEffect(function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, stretchStyle), {}, {
    zIndex: zIndex,
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    // Cannot interact with disappearing elements
    // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
    pointerEvents: !visible && status !== 'stable' ? 'none' : undefined
  }, style); // Align status


  var alignDisabled = true;

  if (align !== null && align !== void 0 && align.points && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, (0,esm_extends/* default */.Z)({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender: forceRender
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames_default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react.createElement(rc_align_es, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      onClick: onClick,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ var Popup_PopupInner = (PopupInner);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/MobilePopupInner.js





var MobilePopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender,
      onClick = props.onClick;
  var elementRef = react.useRef(); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,objectSpread2/* default */.Z)({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, (0,esm_extends/* default */.Z)({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames_default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick: onClick,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ var Popup_MobilePopupInner = (MobilePopupInner);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/Popup/index.js




var Popup_excluded = ["visible", "mobile"];






var Popup = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, Popup_excluded);

  var _useState = (0,react.useState)(visible),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set \`innerVisible\` to avoid popup component render flash


  (0,react.useEffect)(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react.createElement(Popup_MobilePopupInner, (0,esm_extends/* default */.Z)({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react.createElement(Popup_PopupInner, (0,esm_extends/* default */.Z)({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ var es_Popup = (Popup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/context.js

var TriggerContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var context = (TriggerContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-trigger@5.3.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-trigger/es/index.js





















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

/**
 * Internal usage. Do not use in your code since this will be removed.
 */
function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(Trigger, _React$Component);

    var _super = (0,createSuper/* default */.Z)(Trigger);

    // ensure \`getContainer\` will be called only once
    function Trigger(props) {
      var _this;

      (0,classCallCheck/* default */.Z)(this, Trigger);

      _this = _super.call(this, props);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "popupRef", /*#__PURE__*/react.createRef());

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "triggerRef", /*#__PURE__*/react.createRef());

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "portalContainer", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "attachId", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "clickOutsideHandler", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "touchOutsideHandler", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "contextMenuOutsideHandler1", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "contextMenuOutsideHandler2", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "mouseDownTimeout", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "focusTime", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "preClickTime", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "preTouchTime", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "delayTimer", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "hasPopupMouseDown", void 0);

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onMouseEnter", function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onMouseMove", function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onMouseLeave", function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onPopupMouseEnter", function () {
        _this.clearDelayTimer();
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onPopupMouseLeave", function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && (0,contains/* default */.Z)((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onFocus", function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onMouseDown", function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onTouchStart", function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onBlur", function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onContextMenu", function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onContextMenuClose", function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onClick", function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onPopupMouseDown", function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onDocumentClick", function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if ( // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!(0,contains/* default */.Z)(root, target) || _this.isContextMenuOnly()) && !(0,contains/* default */.Z)(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getRootDomNode", function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = (0,findDOMNode/* default */.Z)(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom.findDOMNode((0,assertThisInitialized/* default */.Z)(_this));
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getPopupClassNameFromAlign", function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getComponent", function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile,
            forceRender = _this$props2.forceRender,
            onPopupClick = _this$props2.onPopupClick;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react.createElement(es_Popup, (0,esm_extends/* default */.Z)({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile,
          forceRender: forceRender,
          onClick: onPopupClick
        }), typeof popup === 'function' ? popup() : popup);
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "attachParent", function (popupContainer) {
        raf/* default.cancel */.Z.cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need \`domNode\` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = (0,raf/* default */.Z)(function () {
            _this.attachParent(popupContainer);
          });
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getContainer", function () {
        if (!_this.portalContainer) {
          // In React.StrictMode component will call render multiple time in first mount.
          // When you want to refactor with FC, useRef will also init multiple time and
          // point to different useRef instance which will create multiple element
          // (This multiple render will not trigger effect so you can not clean up this
          // in effect). But this is safe with class component since it always point to same class instance.
          var getDocument = _this.props.getDocument;
          var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
          // https://github.com/react-component/trigger/issues/41

          popupContainer.style.position = 'absolute';
          popupContainer.style.top = '0';
          popupContainer.style.left = '0';
          popupContainer.style.width = '100%';
          _this.portalContainer = popupContainer;
        }

        _this.attachParent(_this.portalContainer);

        return _this.portalContainer;
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "setPoint", function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "handlePortalUpdate", function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      });

      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "triggerContextValue", {
        onPopupMouseDown: _this.onPopupMouseDown
      });

      var _popupVisible;

      if ('popupVisible' in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    (0,createClass/* default */.Z)(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to \`mousedown\` or \`touchstart\`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        raf/* default.cancel */.Z.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
    }, {
      key: "setPopupVisible",
      value:
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for \`pointAlign\`
       */
      function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === 'contextMenu' || action.length === 1 && action[0] === 'contextMenu';
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames_default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = (0,objectSpread2/* default */.Z)({}, newChildProps);

        if ((0,es_ref/* supportRef */.Yr)(child)) {
          cloneProps.ref = (0,es_ref/* composeRef */.sQ)(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react.createElement(context.Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react.Component);

  (0,defineProperty/* default */.Z)(Trigger, "contextType", context);

  (0,defineProperty/* default */.Z)(Trigger, "defaultProps", {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  });

  return Trigger;
}
/* harmony default export */ var rc_trigger_es = (generateTrigger(es_Portal));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/SelectTrigger.js




var SelectTrigger_excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];




var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
      disabled = props.disabled,
      visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      placement = props.placement,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      onPopupVisibleChange = props.onPopupVisibleChange,
      onPopupMouseEnter = props.onPopupMouseEnter,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, SelectTrigger_excluded);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = react.useMemo(function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = (0,objectSpread2/* default */.Z)({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return /*#__PURE__*/react.createElement(rc_trigger_es, (0,esm_extends/* default */.Z)({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/react.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames_default()(dropdownClassName, (0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};

var RefSelectTrigger = /*#__PURE__*/react.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ var es_SelectTrigger = (RefSelectTrigger);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(82523);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/valueUtil.js





function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}

function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      options = _ref.options;

  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}
/**
 * Flat options into flatten list.
 * We use \`optionOnly\` here is aim to avoid user use nested option group.
 * Here is simply set \`key\` to the index if not provided.
 */

function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fieldNames = _ref2.fieldNames,
      childrenAsData = _ref2.childrenAsData;

  var flattenList = [];

  var _fillFieldNames = fillFieldNames(fieldNames, false),
      fieldLabel = _fillFieldNames.label,
      fieldValue = _fillFieldNames.value,
      fieldOptions = _fillFieldNames.options;

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data[fieldLabel];

      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue]; // Option

        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: label,
          value: value
        });
      } else {
        var grpLabel = label;

        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        } // Option Group


        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject \`props\` into \`option\` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = (0,objectSpread2/* default */.Z)({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0,es_warning/* default */.ZP)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from \`props\`.');
        return newOption;
      }
    });
  }

  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref3) {
    var _ref4 = (0,esm_toArray/* default */.Z)(_ref3),
        token = _ref4[0],
        restTokens = _ref4.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevList), (0,toConsumableArray/* default */.Z)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/BaseSelect.js







var BaseSelect_excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function BaseSelect_isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;

  var id = props.id,
      prefixCls = props.prefixCls,
      className = props.className,
      showSearch = props.showSearch,
      tagRender = props.tagRender,
      direction = props.direction,
      omitDomProps = props.omitDomProps,
      displayValues = props.displayValues,
      onDisplayValuesChange = props.onDisplayValuesChange,
      emptyOptions = props.emptyOptions,
      _props$notFoundConten = props.notFoundContent,
      notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
      onClear = props.onClear,
      mode = props.mode,
      disabled = props.disabled,
      loading = props.loading,
      getInputElement = props.getInputElement,
      getRawInputElement = props.getRawInputElement,
      open = props.open,
      defaultOpen = props.defaultOpen,
      onDropdownVisibleChange = props.onDropdownVisibleChange,
      activeValue = props.activeValue,
      onActiveValueChange = props.onActiveValueChange,
      activeDescendantId = props.activeDescendantId,
      searchValue = props.searchValue,
      autoClearSearchValue = props.autoClearSearchValue,
      onSearch = props.onSearch,
      onSearchSplit = props.onSearchSplit,
      tokenSeparators = props.tokenSeparators,
      allowClear = props.allowClear,
      showArrow = props.showArrow,
      inputIcon = props.inputIcon,
      clearIcon = props.clearIcon,
      OptionList = props.OptionList,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      _props$showAction = props.showAction,
      showAction = _props$showAction === void 0 ? [] : _props$showAction,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onKeyUp = props.onKeyUp,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, BaseSelect_excluded); // ============================== MISC ==============================


  var multiple = BaseSelect_isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';

  var domProps = (0,objectSpread2/* default */.Z)({}, restProps);

  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  }); // ============================= Mobile =============================

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];

  react.useEffect(function () {
    // Only update on the client side
    setMobile(isMobile());
  }, []); // ============================== Refs ==============================

  var containerRef = react.useRef(null);
  var selectorDomRef = react.useRef(null);
  var triggerRef = react.useRef(null);
  var selectorRef = react.useRef(null);
  var listRef = react.useRef(null);
  /** Used for component focused management */

  var _useDelayReset = useDelayReset(),
      _useDelayReset2 = (0,slicedToArray/* default */.Z)(_useDelayReset, 3),
      mockFocused = _useDelayReset2[0],
      setMockFocused = _useDelayReset2[1],
      cancelSetMockFocused = _useDelayReset2[2]; // =========================== Imperative ===========================


  react.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;

    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;

        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  }); // ========================== Search Value ==========================

  var mergedSearchValue = react.useMemo(function () {
    var _displayValues$;

    if (mode !== 'combobox') {
      return searchValue;
    }

    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]); // ========================== Custom Input ==========================
  // Only works in \`combobox\`

  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null; // Used for customize replacement for \`rc-cascader\`

  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0,es_ref/* useComposeRef */.x1)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref); // ============================== Open ==============================

  var _useMergedState = useMergedState(undefined, {
    defaultValue: defaultOpen,
    value: open
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      innerOpen = _useMergedState2[0],
      setInnerOpen = _useMergedState2[1];

  var mergedOpen = innerOpen; // Not trigger \`open\` in \`combobox\` when \`notFoundContent\` is empty

  var emptyListContent = !notFoundContent && emptyOptions;

  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }

  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = react.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

    if (!disabled) {
      setInnerOpen(nextOpen);

      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]); // ============================= Search =============================

  var tokenWithEnter = react.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\\n', '\\r\\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);

  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null); // Check if match the \`tokenSeparators\`

    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators); // Ignore combobox since it's not split-able

    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels); // Should close when paste finish

      onToggleOpen(false); // Tell Selector that break next actions

      ret = false;
    }

    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }

    return ret;
  }; // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option


  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }

    onSearch(searchText, {
      source: 'submit'
    });
  }; // Close will clean up single mode search text


  react.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]); // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change

  react.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }

    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]); // ============================ Keyboard ============================

  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */

  var _useLock = useLock(),
      _useLock2 = (0,slicedToArray/* default */.Z)(_useLock, 2),
      getClearLock = _useLock2[0],
      setClearLock = _useLock2[1]; // KeyDown


  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;

    if (which === es_KeyCode.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      } // We only manage open state here, close logic should handle by list component


      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }

    setClearLock(!!mergedSearchValue); // Remove value by \`backspace\`

    if (which === es_KeyCode.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0,toConsumableArray/* default */.Z)(displayValues);

      var removedDisplayValue = null;

      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];

        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }

      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current2;

      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  }; // KeyUp


  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    if (mergedOpen && listRef.current) {
      var _listRef$current3;

      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }

    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  }; // ============================ Selector ============================


  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  }; // ========================== Focus / Blur ==========================

  /** Record real focus status */


  var focusRef = react.useRef(false);

  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);

    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      } // \`showAction\` should handle \`focus\` if set


      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }

    focusRef.current = true;
  };

  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });

    if (disabled) {
      return;
    }

    if (mergedSearchValue) {
      // \`tags\` mode should move \`searchValue\` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // \`multiple\` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }

    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  }; // Give focus back of Select


  var activeTimeoutIds = [];
  react.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);

  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;

    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);

        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }

        cancelSetMockFocused();

        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;

          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }

    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  }; // ============================ Dropdown ============================


  var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      containerWidth = _React$useState4[0],
      setContainerWidth = _React$useState4[1];

  var _React$useState5 = react.useState({}),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      forceUpdate = _React$useState6[1]; // We need force update here since popup dom is render async


  function onPopupMouseEnter() {
    forceUpdate({});
  }

  hooks_useLayoutEffect(function () {
    if (triggerOpen) {
      var _containerRef$current;

      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);

      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]); // Used for raw custom input trigger

  var onTriggerVisibleChange;

  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  } // Close when click on non-select element


  useSelectTriggerControl(function () {
    var _triggerRef$current2;

    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement); // ============================ Context =============================

  var baseSelectContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]); // ==================================================================
  // ==                            Render                            ==
  // ==================================================================
  // ============================= Arrow ==============================

  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;

  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: classnames_default()("".concat(prefixCls, "-arrow"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  } // ============================= Clear ==============================


  var clearNode;

  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;

    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };

  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\\xD7");
  } // =========================== OptionList ===========================


  var optionList = /*#__PURE__*/react.createElement(OptionList, {
    ref: listRef
  }); // ============================= Select =============================

  var mergedClassName = classnames_default()(prefixCls, className, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2)); // >>> Selector

  var selectorNode = /*#__PURE__*/react.createElement(es_SelectTrigger, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/react.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/react.createElement(es_Selector, (0,esm_extends/* default */.Z)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  }))); // >>> Render

  var renderNode; // Render raw

  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
          value = _ref.value;
      return ['number', 'string'].includes((0,esm_typeof/* default */.Z)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }

  return /*#__PURE__*/react.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
}); // Set display name for dev

if (false) {}

/* harmony default export */ var es_BaseSelect = (BaseSelect);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useCache.js



/**
 * Cache \`value\` related LabeledValue & options.
 */
/* harmony default export */ var useCache = (function (labeledValues, valueOptions) {
  var cacheRef = react.useRef({
    values: new Map(),
    options: new Map()
  });
  var filledLabeledValues = react.useMemo(function () {
    var _cacheRef$current = cacheRef.current,
        prevValueCache = _cacheRef$current.values,
        prevOptionCache = _cacheRef$current.options; // Fill label by cache

    var patchedValues = labeledValues.map(function (item) {
      if (item.label === undefined) {
        var _prevValueCache$get;

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }

      return item;
    }); // Refresh cache

    var valueCache = new Map();
    var optionCache = new Map();
    patchedValues.forEach(function (item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = react.useCallback(function (val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useFilterOptions.js






function includes(test, search) {
  return commonUtil_toArray(test).join('').toUpperCase().includes(search);
}

/* harmony default export */ var useFilterOptions = (function (options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return react.useMemo(function () {
    if (!searchValue || filterOption === false) {
      return options;
    }

    var fieldOptions = fieldNames.options,
        fieldLabel = fieldNames.label,
        fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === 'function';
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function (_, option) {
      // Use provided \`optionFilterProp\`
      if (optionFilterProp) {
        return includes(option[optionFilterProp], upperSearch);
      } // Auto select \`label\` or \`value\` by option type


      if (option[fieldOptions]) {
        // hack \`fieldLabel\` since \`OptionGroup\` children is not \`label\`
        return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
      }

      return includes(option[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function (opt) {
      return injectPropsWithOption(opt);
    } : function (opt) {
      return opt;
    };
    options.forEach(function (item) {
      // Group should check child options
      if (item[fieldOptions]) {
        // Check group first
        var matchGroup = filterFunc(searchValue, wrapOption(item));

        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          // Check option
          var subOptions = item[fieldOptions].filter(function (subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });

          if (subOptions.length) {
            filteredOptions.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, (0,defineProperty/* default */.Z)({}, fieldOptions, subOptions)));
          }
        }

        return;
      }

      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useId.js



var uuid = 0;
/** Is client side and not jsdom */

var useId_isBrowserClient =  true && (0,canUseDom/* default */.Z)();
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (useId_isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  react.useEffect(function () {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/legacyUtil.js


var legacyUtil_excluded = ["children", "value"],
    legacyUtil_excluded2 = ["children"];



function convertNodeToOption(node) {
  var _ref = node,
      key = _ref.key,
      _ref$props = _ref.props,
      children = _ref$props.children,
      value = _ref$props.value,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref$props, legacyUtil_excluded);

  return (0,objectSpread2/* default */.Z)({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function legacyUtil_convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0,Children_toArray/* default */.Z)(nodes).map(function (node, index) {
    if (! /*#__PURE__*/react.isValidElement(node) || !node.type) {
      return null;
    }

    var _ref2 = node,
        isSelectOptGroup = _ref2.type.isSelectOptGroup,
        key = _ref2.key,
        _ref2$props = _ref2.props,
        children = _ref2$props.children,
        restProps = (0,objectWithoutProperties/* default */.Z)(_ref2$props, legacyUtil_excluded2);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: legacyUtil_convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useOptions.js


/**
 * Parse \`children\` to \`options\` if \`options\` is not provided.
 * Then flatten the \`options\`.
 */

function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return react.useMemo(function () {
    var mergedOptions = options;
    var childrenAsData = !options;

    if (childrenAsData) {
      mergedOptions = legacyUtil_convertChildrenToData(children);
    }

    var valueOptions = new Map();
    var labelOptions = new Map();

    var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
      if (key && typeof key === 'string') {
        labelOptionsMap.set(option[key], option);
      }
    };

    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // for loop to speed up collection speed
      for (var i = 0; i < optionList.length; i += 1) {
        var option = optionList[i];

        if (!option[fieldNames.options] || isChildren) {
          valueOptions.set(option[fieldNames.value], option);
          setLabelOptions(labelOptions, option, fieldNames.label); // https://github.com/ant-design/ant-design/issues/35304

          setLabelOptions(labelOptions, option, optionFilterProp);
          setLabelOptions(labelOptions, option, optionLabelProp);
        } else {
          dig(option[fieldNames.options], true);
        }
      }
    }

    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions: valueOptions,
      labelOptions: labelOptions
    };
  }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/hooks/useRefFunc.js

/**
 * Same as \`React.useCallback\` but always return a memoized function
 * but redirect to real function.
 */

function useRefFunc(callback) {
  var funcRef = react.useRef();
  funcRef.current = callback;
  var cacheFn = react.useCallback(function () {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/OptGroup.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;
/* harmony default export */ var es_OptGroup = (OptGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Option.js
/* istanbul ignore file */

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
/* harmony default export */ var es_Option = (Option);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/hooks/useMemo.js
var hooks_useMemo = __webpack_require__(93694);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/omit.js
var es_omit = __webpack_require__(81828);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: innerStyle,
    className: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ var es_Filler = (Filler);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/ScrollBar.js








var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ScrollBar, _React$Component);
  var _super = (0,createSuper/* default */.Z)(ScrollBar);
  function ScrollBar() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ScrollBar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/react.createRef();
    _this.thumbRef = /*#__PURE__*/react.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };
    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function () {
      var _this$scrollbarRef$cu;
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0 ? void 0 : _this$scrollbarRef$cu.removeEventListener('touchstart', _this.onScrollbarTouchStart);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
    };
    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      raf/* default.cancel */.Z.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = (0,raf/* default */.Z)(function () {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    _this.getSpinHeight = function () {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function () {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    _this.showScroll = function () {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  (0,createClass/* default */.Z)(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value:
    // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
        dragging = _this$state2.dragging,
        visible = _this$state2.visible;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      return /*#__PURE__*/react.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/react.createElement("div", {
        ref: this.thumbRef,
        className: classnames_default()("".concat(prefixCls, "-scrollbar-thumb"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);
  return ScrollBar;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/Item.js

function Item_Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item_Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/utils/CacheMap.js


// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0,classCallCheck/* default */.Z)(this, CacheMap);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  (0,createClass/* default */.Z)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ var utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useHeights.js






function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var collectRafRef = (0,react.useRef)();
  function cancelRaf() {
    raf/* default.cancel */.Z.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = (0,raf/* default */.Z)(function () {
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = (0,findDOMNode/* default */.Z)(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      // Always trigger update mark to tell parent that should re-calculate heights when resized
      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useScrollTo.js

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }
    // Normal scroll logic
    raf/* default.cancel */.Z.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0,esm_typeof/* default */.Z)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      // We will retry 3 times in case dynamic height shaking
      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        // Go to next frame if height not exist
        if (height) {
          var mergedAlign = targetAlign || align;
          // Get top & bottom
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          }
          // Scroll to
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;
                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        // We will retry since element may not sync height as it described
        scrollRef.current = (0,raf/* default */.Z)(function () {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2); // Delay 2 to wait for List collect heights
      };

      syncScroll(3);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;
  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }
  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }
  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ var isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }
  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll =
    // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);
  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);
  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(deltaY)) return;
    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = (0,raf/* default */.Z)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);
  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);
  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      // Smooth interval
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  hooks_useLayoutEffect(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/List.js





var List_excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange", "innerProps"];













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, List_excluded);
  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = classnames_default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var scrollBarRef = (0,react.useRef)(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  };
  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = (0,slicedToArray/* default */.Z)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = (0,slicedToArray/* default */.Z)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var item = mergedData[i];
        var key = getKey(item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
        // Check item top in the range
        if (currentItemBottom >= scrollTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }
        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > scrollTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }
      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  // ================================ Scroll ================================
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
      syncScrollTop(function (top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = (0,slicedToArray/* default */.Z)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  hooks_useLayoutEffect(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }
    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      if (componentRef.current) {
        componentRef.current.removeEventListener('wheel', onRawWheel);
        componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
        componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      }
    };
  }, [useVirtual]);
  // ================================= Ref ==================================
  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;
    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  });
  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  hooks_useLayoutEffect(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps
  }, listChildren)), useVirtual && /*#__PURE__*/react.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ var es_List = (List);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-virtual-list@3.4.13_biqbaboplfbrettd7655fr4n2y/node_modules/rc-virtual-list/es/index.js

/* harmony default export */ var rc_virtual_list_es = (es_List);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/SelectContext.js

var SelectContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_SelectContext = (SelectContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/platformUtil.js
/* istanbul ignore file */
function isPlatformMac() {
  return /(mac\\sos|macintosh)/i.test(navigator.appVersion);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/OptionList.js





var OptionList_excluded = ["disabled", "title", "children", "style", "className"];











 // export interface OptionListProps<OptionsType extends object[]> {

function OptionList_isTitleType(content) {
  return typeof content === 'string' || typeof content === 'number';
}
/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */


var OptionList = function OptionList(_, ref) {
  var _useBaseProps = useBaseProps(),
      prefixCls = _useBaseProps.prefixCls,
      id = _useBaseProps.id,
      open = _useBaseProps.open,
      multiple = _useBaseProps.multiple,
      mode = _useBaseProps.mode,
      searchValue = _useBaseProps.searchValue,
      toggleOpen = _useBaseProps.toggleOpen,
      notFoundContent = _useBaseProps.notFoundContent,
      onPopupScroll = _useBaseProps.onPopupScroll;

  var _React$useContext = react.useContext(es_SelectContext),
      flattenOptions = _React$useContext.flattenOptions,
      onActiveValue = _React$useContext.onActiveValue,
      defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
      onSelect = _React$useContext.onSelect,
      menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
      rawValues = _React$useContext.rawValues,
      fieldNames = _React$useContext.fieldNames,
      virtual = _React$useContext.virtual,
      listHeight = _React$useContext.listHeight,
      listItemHeight = _React$useContext.listItemHeight;

  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = (0,hooks_useMemo/* default */.Z)(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = react.useRef(null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === 'number' ? {
        index: args
      } : args);
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = react.useState(function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  (0,react.useEffect)(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // https://github.com/ant-design/ant-design/issues/34975

  var isSelected = react.useCallback(function (value) {
    return rawValues.has(value) && mode !== 'combobox';
  }, [mode, (0,toConsumableArray/* default */.Z)(rawValues).toString(), rawValues.size]); // Auto scroll to item position in single mode

  (0,react.useEffect)(function () {
    /**
     * React will skip \`onChange\` when component update.
     * \`setActive\` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index = memoFlattenOptions.findIndex(function (_ref) {
          var data = _ref.data;
          return data.value === value;
        });

        if (index !== -1) {
          setActive(index);
          scrollIntoView(index);
        }
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      toggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  react.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
            ctrlKey = event.ctrlKey;

        switch (which) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case es_KeyCode.N:
          case es_KeyCode.P:
          case es_KeyCode.UP:
          case es_KeyCode.DOWN:
            {
              var offset = 0;

              if (which === es_KeyCode.UP) {
                offset = -1;
              } else if (which === es_KeyCode.DOWN) {
                offset = 1;
              } else if (isPlatformMac() && ctrlKey) {
                if (which === es_KeyCode.N) {
                  offset = 1;
                } else if (which === es_KeyCode.P) {
                  offset = -1;
                }
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case es_KeyCode.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case es_KeyCode.ESC:
            {
              toggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
    return fieldNames[key];
  });

  var getLabel = function getLabel(item) {
    return item.label;
  };

  function getItemAriaProps(item, index) {
    var group = item.group;
    return {
      role: group ? 'presentation' : 'option',
      id: "".concat(id, "_list_").concat(index)
    };
  }

  var renderItem = function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
    }, attrs, {
      key: index
    }, getItemAriaProps(item, index), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };

  var a11yProps = {
    role: 'listbox',
    id: "".concat(id, "_list")
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, virtual && /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/react.createElement(rc_virtual_list_es, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual: virtual,
    innerProps: virtual ? null : a11yProps
  }, function (item, itemIndex) {
    var _classNames;

    var group = item.group,
        groupOption = item.groupOption,
        data = item.data,
        label = item.label,
        value = item.value;
    var key = data.key; // Group

    if (group) {
      var _data$title;

      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : OptionList_isTitleType(label) ? label.toString() : undefined;
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = (0,objectWithoutProperties/* default */.Z)(data, OptionList_excluded);

    var passedProps = (0,es_omit/* default */.Z)(otherProps, omitFieldNameList); // Option

    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames_default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected; // https://github.com/ant-design/ant-design/issues/34145

    var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = OptionList_isTitleType(content) ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/react.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/react.createElement(es_TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '\u2713' : null));
  }));
};

var RefOptionList = /*#__PURE__*/react.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ var es_OptionList = (RefOptionList);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/utils/warningPropsUtil.js








function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children); // \`tags\` should not set option as disabled

  warning(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // \`combobox\` & \`tags\` should option be \`string\` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning(!hasNumberValue, '\`value\` of Option should not use number type when \`mode\` is \`tags\` or \`combobox\`.');
  } // \`combobox\` should not use \`optionLabelProp\`


  warning(mode !== 'combobox' || !optionLabelProp, '\`combobox\` mode not support \`optionLabelProp\`. Please set \`value\` on Option directly.'); // Only \`combobox\` support \`backfill\`

  warning(mode === 'combobox' || !backfill, '\`backfill\` only works with \`combobox\` mode.'); // Only \`combobox\` support \`getInputElement\`

  warning(mode === 'combobox' || !getInputElement, '\`getInputElement\` only work with \`combobox\` mode.'); // Customize \`getInputElement\` should not use \`allowClear\` & \`placeholder\`

  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize \`getInputElement\` should customize clear and placeholder logic instead of configuring \`allowClear\` and \`placeholder\`.'); // \`onSearch\` should use in \`combobox\` or \`showSearch\`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning(false, '\`onSearch\` should work with \`showSearch\` instead of use alone.');
  }

  noteOnce(!defaultOpen || autoFocus, '\`defaultOpen\` makes Select open without focus which means it will not close by click outside. You can set \`autoFocus\` if needed.');

  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warning(!labelInValue || values.every(function (val) {
      return _typeof(val) === 'object' && ('key' in val || 'value' in val);
    }), '\`value\` should in shape of \`{ value: string | number, label?: ReactNode }\` when you set \`labelInValue\` to \`true\`');
    warning(!multiple || Array.isArray(value), '\`value\` should be array when \`mode\` is \`multiple\` or \`tags\`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }

      var _ref = node,
          type = _ref.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      warning(false, "\`children\` should be \`Select.Option\` or \`Select.OptGroup\` instead of \`".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "\`."));
    }

    warning(inputValue === undefined, '\`inputValue\` is deprecated, please use \`searchValue\` instead.');
  }
} // value in Select option should not be null
// note: OptGroup has options too


function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];

        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning(false, '\`value\` in Select options should not be \`null\`.');
          return true;
        }

        if (!inGroup && Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)) {
          break;
        }
      }
    };

    recursiveOptions(options);
  }
}
/* harmony default export */ var warningPropsUtil = ((/* unused pure expression or super */ null && (warningProps)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/Select.js







var Select_excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];

/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set \`tabIndex\` to avoid \`onBlur\` sequence problem.
 * For focused select, we set \`aria-live="polite"\` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - \`backfill\` only support \`combobox\` mode
 * - \`combobox\` mode not support \`labelInValue\` since it's meaningless
 * - \`getInputElement\` only support \`combobox\` mode
 * - \`onChange\` return OptionData instead of ReactNode
 * - \`filterOption\` \`onChange\` \`onSelect\` accept OptionData instead of ReactNode
 * - \`combobox\` mode trigger \`onChange\` will get \`undefined\` if no \`value\` match in Option
 * - \`combobox\` mode not support \`optionLabelProp\`
 */
















var OMIT_DOM_PROPS = ['inputValue'];

function isRawValue(value) {
  return !value || (0,esm_typeof/* default */.Z)(value) !== 'object';
}

var Select = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var id = props.id,
      mode = props.mode,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
      backfill = props.backfill,
      fieldNames = props.fieldNames,
      inputValue = props.inputValue,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      _props$autoClearSearc = props.autoClearSearchValue,
      autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      filterOption = props.filterOption,
      filterSort = props.filterSort,
      optionFilterProp = props.optionFilterProp,
      optionLabelProp = props.optionLabelProp,
      options = props.options,
      children = props.children,
      defaultActiveFirstOption = props.defaultActiveFirstOption,
      menuItemSelectedIcon = props.menuItemSelectedIcon,
      virtual = props.virtual,
      _props$listHeight = props.listHeight,
      listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
      _props$listItemHeight = props.listItemHeight,
      listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
      value = props.value,
      defaultValue = props.defaultValue,
      labelInValue = props.labelInValue,
      onChange = props.onChange,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Select_excluded);

  var mergedId = useId(id);
  var multiple = BaseSelect_isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = react.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }

    return filterOption;
  }, [filterOption, mode]); // ========================= FieldNames =========================

  var mergedFieldNames = react.useMemo(function () {
    return fillFieldNames(fieldNames, childrenAsData);
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [// We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */
  ); // =========================== Search ===========================

  var _useMergedState = useMergedState('', {
    value: searchValue !== undefined ? searchValue : inputValue,
    postState: function postState(search) {
      return search || '';
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedSearchValue = _useMergedState2[0],
      setSearchValue = _useMergedState2[1]; // =========================== Option ===========================


  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
      labelOptions = parsedOptions.labelOptions,
      mergedOptions = parsedOptions.options; // ========================= Wrap Value =========================

  var convert2LabelValues = react.useCallback(function (draftValues) {
    // Convert to array
    var valueList = commonUtil_toArray(draftValues); // Convert to labelInValue type

    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle; // Fill label & value

      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;

        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }

      var option = valueOptions.get(rawValue);

      if (option) {
        var _option$key;

        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title; // Warning if label not same as provided

        if (false) { var optionLabel; }
      }

      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]); // =========================== Values ===========================

  var _useMergedState3 = useMergedState(defaultValue, {
    value: value
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      internalValue = _useMergedState4[0],
      setInternalValue = _useMergedState4[1]; // Merged value with LabelValueType


  var rawLabeledValues = react.useMemo(function () {
    var _values$;

    var values = convert2LabelValues(internalValue); // combobox no need save value when it's no value

    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }

    return values;
  }, [internalValue, convert2LabelValues, mode]); // Fill label with cache to avoid option remove

  var _useCache = useCache(rawLabeledValues, valueOptions),
      _useCache2 = (0,slicedToArray/* default */.Z)(_useCache, 2),
      mergedValues = _useCache2[0],
      getMixedOption = _useCache2[1];

  var displayValues = react.useMemo(function () {
    // \`null\` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];

      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }

    return mergedValues.map(function (item) {
      var _item$label;

      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);
  /** Convert \`displayValues\` to raw value type set */

  var rawValues = react.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  react.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;

      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(commonUtil_hasValue(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]); // ======================= Display Option =======================
  // Create a placeholder item if not exist in \`options\`

  var createTagOption = useRefFunc(function (val, label) {
    var _ref;

    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.value, val), (0,defineProperty/* default */.Z)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  }); // Fill tag as option if mode is \`tags\`

  var filledTagOptions = react.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    } // >>> Tag mode


    var cloneOptions = (0,toConsumableArray/* default */.Z)(mergedOptions); // Check if value exist in options (include new patch item)


    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    }; // Fill current value as option


    (0,toConsumableArray/* default */.Z)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;

      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });

    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp); // Fill options with search value if needed

  var filledSearchOptions = react.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    } // Fill search value as option


    return [createTagOption(mergedSearchValue)].concat((0,toConsumableArray/* default */.Z)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = react.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }

    return (0,toConsumableArray/* default */.Z)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = react.useMemo(function () {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]); // =========================== Change ===========================

  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);

    if (onChange && ( // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;

      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange( // Value
      multiple ? returnValues : returnValues[0], // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  }; // ======================= Accessibility ========================


  var _React$useState = react.useState(null),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      activeValue = _React$useState2[0],
      setActiveValue = _React$useState2[1];

  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      accessibilityIndex = _React$useState4[0],
      setAccessibilityIndex = _React$useState4[1];

  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = react.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$source = _ref2.source,
        source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;

    setAccessibilityIndex(index);

    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]); // ========================= OptionList =========================

  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;

      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option)];
    };

    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
          _getSelectEnt2 = (0,slicedToArray/* default */.Z)(_getSelectEnt, 2),
          wrappedValue = _getSelectEnt2[0],
          _option = _getSelectEnt2[1];

      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
          _getSelectEnt4 = (0,slicedToArray/* default */.Z)(_getSelectEnt3, 2),
          _wrappedValue = _getSelectEnt4[0],
          _option2 = _getSelectEnt4[1];

      onDeselect(_wrappedValue, _option2);
    }
  }; // Used for OptionList selection


  var onInternalSelect = useRefFunc(function (val, info) {
    var cloneValues; // Single mode always trigger select only with option list

    var mergedSelect = multiple ? info.selected : true;

    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0,toConsumableArray/* default */.Z)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }

    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect); // Clean search value if single or configured

    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!BaseSelect_isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  }); // ======================= Display Change =======================
  // BaseSelect display values change

  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
        values = info.values;

    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  }; // =========================== Search ===========================


  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null); // [Submit] Tag mode should flush input

    if (info.source === 'submit') {
      var formatted = (searchText || '').trim(); // prevent empty tags from appearing when you click the Enter button

      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }

      return;
    }

    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }

      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };

  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;

    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }

    var newRawValues = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(rawValues), (0,toConsumableArray/* default */.Z)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  }; // ========================== Context ===========================


  var selectContext = react.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]); // ========================== Warning ===========================

  if (false) {} // ==============================================================
  // ==                          Render                          ==
  // ==============================================================


  return /*#__PURE__*/react.createElement(es_SelectContext.Provider, {
    value: selectContext
  }, /*#__PURE__*/react.createElement(es_BaseSelect, (0,esm_extends/* default */.Z)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth // >>> OptionList
    ,
    OptionList: es_OptionList,
    emptyOptions: !displayOptions.length // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});

if (false) {}

var TypedSelect = Select;
TypedSelect.Option = es_Option;
TypedSelect.OptGroup = es_OptGroup;
/* harmony default export */ var es_Select = (TypedSelect);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-select@14.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-select/es/index.js






/* harmony default export */ var rc_select_es = (es_Select);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(93666);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/locale/context.js

const context_LocaleContext = /*#__PURE__*/(0,react.createContext)(undefined);
/* harmony default export */ var locale_context = (context_LocaleContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-pagination@3.2.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-pagination/es/locale/en_US.js
/* harmony default export */ var en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-picker@3.1.5_mlnkrlbros4rghcauwy625gk7y/node_modules/rc-picker/es/locale/en_US.js
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ var locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/time-picker/locale/en_US.js
const en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ var time_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/date-picker/locale/en_US.js


// Merge into a locale object
const locale_en_US_locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: Object.assign({}, time_picker_locale_en_US)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ var date_picker_locale_en_US = (locale_en_US_locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/locale/en_US.js
/* eslint-disable no-template-curly-in-string */




const typeTemplate = '\${label} is not a valid \${type}';
const localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for \${label}',
      required: 'Please enter \${label}',
      enum: '\${label} must be one of [\${enum}]',
      whitespace: '\${label} cannot be a blank character',
      date: {
        format: '\${label} date format is invalid',
        parse: '\${label} cannot be converted to a date',
        invalid: '\${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '\${label} must be \${len} characters',
        min: '\${label} must be at least \${min} characters',
        max: '\${label} must be up to \${max} characters',
        range: '\${label} must be between \${min}-\${max} characters'
      },
      number: {
        len: '\${label} must be equal to \${len}',
        min: '\${label} must be minimum \${min}',
        max: '\${label} must be maximum \${max}',
        range: '\${label} must be between \${min}-\${max}'
      },
      array: {
        len: 'Must be \${len} \${label}',
        min: 'At least \${min} \${label}',
        max: 'At most \${max} \${label}',
        range: 'The amount of \${label} must be between \${min}-\${max}'
      },
      pattern: {
        mismatch: '\${label} does not match the pattern \${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh'
  }
};
/* harmony default export */ var es_locale_en_US = (localeValues);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/locale/LocaleReceiver.js



const LocaleReceiver = props => {
  const {
    componentName = 'global',
    defaultLocale,
    children
  } = props;
  const antLocale = react.useContext(locale_context);
  const getLocale = react.useMemo(() => {
    var _a;
    const locale = defaultLocale || es_locale_en_US[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  const getLocaleCode = react.useMemo(() => {
    const localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return es_locale_en_US.locale;
    }
    return localeCode;
  }, [antLocale]);
  return children(getLocale, getLocaleCode, antLocale);
};
/* harmony default export */ var locale_LocaleReceiver = (LocaleReceiver);
const useLocaleReceiver = (componentName, defaultLocale) => {
  const antLocale = React.useContext(LocaleContext);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || defaultLocaleData[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [getLocale];
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99590);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/theme/internal.js + 14 modules
var internal = __webpack_require__(44788);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/empty/empty.js



const Empty = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const bgColor = new dist_module/* TinyColor */.C(token.colorBgBase);
  let themeStyle = {};
  // Dark Theme need more dark of this
  if (bgColor.toHsl().l < 0.5) {
    themeStyle = {
      opacity: 0.65
    };
  }
  return /*#__PURE__*/react.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
if (false) {}
/* harmony default export */ var empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/empty/simple.js




const Simple = () => {
  const [, token] = (0,internal/* useToken */.dQ)();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = (0,react.useMemo)(() => ({
    borderColor: new dist_module/* TinyColor */.C(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new dist_module/* TinyColor */.C(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new dist_module/* TinyColor */.C(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /*#__PURE__*/react.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /*#__PURE__*/react.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
/* harmony default export */ var simple = (Simple);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(61165);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/empty/style/index.js

// ============================== Shared ==============================
const genSharedEmptyStyle = token => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: 'center',
      // \u539F\u6765 &-image \u6CA1\u6709\u7236\u5B50\u7ED3\u6784\uFF0C\u73B0\u5728\u4E3A\u4E86\u5916\u5C42\u627F\u62C5\u6211\u4EEC\u7684hashId\uFF0C\u6539\u6210\u7236\u5B50\u7ED3\u679C
      [\`\${componentCls}-image\`]: {
        height: token.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token.opacityImage,
        img: {
          height: '100%'
        },
        svg: {
          height: '100%',
          margin: 'auto'
        }
      },
      [\`\${componentCls}-description\`]: {
        color: token.colorText
      },
      // \u539F\u6765 &-footer \u6CA1\u6709\u7236\u5B50\u7ED3\u6784\uFF0C\u73B0\u5728\u4E3A\u4E86\u5916\u5C42\u627F\u62C5\u6211\u4EEC\u7684hashId\uFF0C\u6539\u6210\u7236\u5B50\u7ED3\u679C
      [\`\${componentCls}-footer\`]: {
        marginTop: margin
      },
      '&-normal': {
        marginBlock: marginXL,
        color: token.colorTextDisabled,
        [\`\${componentCls}-description\`]: {
          color: token.colorTextDisabled
        },
        [\`\${componentCls}-image\`]: {
          height: token.emptyImgHeightMD
        }
      },
      '&-small': {
        marginBlock: marginXS,
        color: token.colorTextDisabled,
        [\`\${componentCls}-image\`]: {
          height: token.emptyImgHeightSM
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Empty', token => {
  const {
    componentCls,
    controlHeightLG
  } = token;
  const emptyToken = (0,statistic/* merge */.TS)(token, {
    emptyImgCls: \`\${componentCls}-img\`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/empty/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const defaultEmptyImg = /*#__PURE__*/react.createElement(empty, null);
const simpleEmptyImg = /*#__PURE__*/react.createElement(simple, null);
const empty_Empty = _a => {
  var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle
    } = _a,
    restProps = __rest(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = style(prefixCls);
  return wrapSSR( /*#__PURE__*/react.createElement(locale_LocaleReceiver, {
    componentName: "Empty"
  }, locale => {
    const des = typeof description !== 'undefined' ? description : locale.description;
    const alt = typeof des === 'string' ? des : 'empty';
    let imageNode = null;
    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/react.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return /*#__PURE__*/react.createElement("div", Object.assign({
      className: classnames_default()(hashId, prefixCls, {
        [\`\${prefixCls}-normal\`]: image === simpleEmptyImg,
        [\`\${prefixCls}-rtl\`]: direction === 'rtl'
      }, className, rootClassName)
    }, restProps), /*#__PURE__*/react.createElement("div", {
      className: \`\${prefixCls}-image\`,
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/react.createElement("div", {
      className: \`\${prefixCls}-description\`
    }, des), children && /*#__PURE__*/react.createElement("div", {
      className: \`\${prefixCls}-footer\`
    }, children));
  }));
};
empty_Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
empty_Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (false) {}
/* harmony default export */ var es_empty = (empty_Empty);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/defaultRenderEmpty.js



const DefaultRenderEmpty = props => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = (0,react.useContext)(config_provider_context/* ConfigContext */.E_);
  const prefix = getPrefixCls('empty');
  switch (componentName) {
    case 'Table':
    case 'List':
      return /*#__PURE__*/react.createElement(es_empty, {
        image: es_empty.PRESENTED_IMAGE_SIMPLE
      });
    case 'Select':
    case 'TreeSelect':
    case 'Cascader':
    case 'Transfer':
    case 'Mentions':
      return /*#__PURE__*/react.createElement(es_empty, {
        image: es_empty.PRESENTED_IMAGE_SIMPLE,
        className: \`\${prefix}-small\`
      });
    /* istanbul ignore next */
    default:
      // Should never hit if we take all the component into consider.
      return /*#__PURE__*/react.createElement(es_empty, null);
  }
};
/* harmony default export */ var defaultRenderEmpty = (DefaultRenderEmpty);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(47067);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(19455);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/FieldContext.js


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
  (0,es_warning/* default */.ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ var FieldContext = (Context);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/typeUtil.js
function typeUtil_toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js
/* provided dependency */ var process = __webpack_require__(14224);
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var dist_web_warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_PATH":"/"}) && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = (function () {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)){3}';
  var v6seg = '[a-fA-F\\\\d]{1,4}';
  var v6 = ("\\n(?:\\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\\n").replace(/\\s*\\/\\/.*$/gm, '').replace(/\\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\\\S+(?::\\\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\\\u00a1-\\\\uffff0-9][-_]*)*[a-z\\\\u00a1-\\\\uffff0-9]+)";
  var domain = "(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*";
  var tld = "(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,}))";
  var port = '(?::\\\\d{2,5})?';
  var path = '(?:[/?#][^\\\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
});

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+\\.)+[a-zA-Z\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\\\S+(?::\\\\S*)?@)?(?:(?:(?:[1-9]\\\\d?|1\\\\d\\\\d|2[01]\\\\d|22[0-3])(?:\\\\.(?:1?\\\\d{1,2}|2[0-4]\\\\d|25[0-5])){2}(?:\\\\.(?:[0-9]\\\\d?|1\\\\d\\\\d|2[0-4]\\\\d|25[0-4]))|(?:(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,})))|localhost)(?::\\\\d{2,5})?(?:(/|\\\\?|#)[^\\\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // \u6B63\u5219\u5339\u914D\u7801\u70B9\u8303\u56F4\u4ECEU+010000\u4E00\u76F4\u5230U+10FFFF\u7684\u6587\u5B57\uFF08\u8865\u5145\u5E73\u9762Supplementary Plane\uFF09

  var spRegexp = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // \u5904\u7406\u7801\u70B9\u5927\u4E8EU+010000\u7684\u6587\u5B57length\u5C5E\u6027\u4E0D\u51C6\u786E\u7684bug\uFF0C\u5982"\u{20BB7}\u{20BB7}\u{20BB7}".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset \`lastIndex\` in case its \`global\`
      // flag is accidentally set to \`true\`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = dist_web_warning;
Schema.messages = messages;
Schema.validators = validators;


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/messages.js
var messages_typeTemplate = "'\${name}' is not a valid \${type}";
var defaultValidateMessages = {
  default: "Validation error on field '\${name}'",
  required: "'\${name}' is required",
  enum: "'\${name}' must be one of [\${enum}]",
  whitespace: "'\${name}' cannot be empty",
  date: {
    format: "'\${name}' is invalid for format date",
    parse: "'\${name}' could not be parsed as date",
    invalid: "'\${name}' is invalid date"
  },
  types: {
    string: messages_typeTemplate,
    method: messages_typeTemplate,
    array: messages_typeTemplate,
    object: messages_typeTemplate,
    number: messages_typeTemplate,
    date: messages_typeTemplate,
    boolean: messages_typeTemplate,
    integer: messages_typeTemplate,
    float: messages_typeTemplate,
    regexp: messages_typeTemplate,
    email: messages_typeTemplate,
    url: messages_typeTemplate,
    hex: messages_typeTemplate
  },
  string: {
    len: "'\${name}' must be exactly \${len} characters",
    min: "'\${name}' must be at least \${min} characters",
    max: "'\${name}' cannot be longer than \${max} characters",
    range: "'\${name}' must be between \${min} and \${max} characters"
  },
  number: {
    len: "'\${name}' must equal \${len}",
    min: "'\${name}' cannot be less than \${min}",
    max: "'\${name}' cannot be greater than \${max}",
    range: "'\${name}' must be between \${min} and \${max}"
  },
  array: {
    len: "'\${name}' must be exactly \${len} in length",
    min: "'\${name}' cannot be less than \${min} in length",
    max: "'\${name}' cannot be greater than \${max} in length",
    range: "'\${name}' must be between \${min} and \${max} in length"
  },
  pattern: {
    mismatch: "'\${name}' does not match pattern \${pattern}"
  }
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/utils/get.js
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/utils/set.js




function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = (0,esm_toArray/* default */.Z)(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = (0,toConsumableArray/* default */.Z)(entity);
  } else {
    clone = (0,objectSpread2/* default */.Z)({}, entity);
  }

  // Delete prop if \`removeIfUndefined\` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if \`removeIfUndefined\` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/cloneDeep.js

function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if ((0,esm_typeof/* default */.Z)(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }
  return val;
}
function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};
    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val) {
  return val.map(function (item) {
    return cloneDeep(item);
  });
}
/* harmony default export */ var utils_cloneDeep = (cloneDeep);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/valueUtil.js







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like \`a.b.c\` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return typeUtil_toArray(path);
}
function valueUtil_getValue(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = valueUtil_getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}
function isObject(obj) {
  return (0,esm_typeof/* default */.Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */
function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? (0,toConsumableArray/* default */.Z)(store) : (0,objectSpread2/* default */.Z)({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key];
    // If both are object (but target is not array), we use recursion to set deep value
    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : utils_cloneDeep(value); // Clone deep for arrays
  });

  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || (0,esm_typeof/* default */.Z)(source) !== 'object' || (0,esm_typeof/* default */.Z)(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return (0,toConsumableArray/* default */.Z)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && (0,esm_typeof/* default */.Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function valueUtil_move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, toIndex)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, length)));
  }
  if (diff < 0) {
    // move right
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex + 1, length)));
  }
  return array;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/validateUtil.js










// Remove incorrect original ts define
var AsyncValidator = Schema;
/**
 * Replace with template.
 *   \`I'm \${name}\` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\\$\\{\\w+\\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use \`async-validator\` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function _validateRule() {
  _validateRule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = (0,objectSpread2/* default */.Z)({}, rule); // Bug of \`async-validator\`
          // https://github.com/react-component/field-form/issues/316
          // https://github.com/react-component/field-form/issues/313
          delete cloneRule.ruleIndex;
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function () {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }
          // We should special handle array validate
          subRuleField = null;
          if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator((0,defineProperty/* default */.Z)({}, name, [cloneRule]));
          messages = setValues({}, defaultValidateMessages, options.validateMessages);
          validator.messages(messages);
          result = [];
          _context2.prev = 9;
          _context2.next = 12;
          return Promise.resolve(validator.validate((0,defineProperty/* default */.Z)({}, name, value), (0,objectSpread2/* default */.Z)({}, options)));
        case 12:
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](9);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function (_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
              return /*#__PURE__*/react.isValidElement(mergedMessage) ?
              /*#__PURE__*/
              // Wrap ReactNode with \`key\`
              react.cloneElement(mergedMessage, {
                key: "error_".concat(index)
              }) : mergedMessage;
            });
          }
        case 17:
          if (!(!result.length && subRuleField)) {
            _context2.next = 22;
            break;
          }
          _context2.next = 20;
          return Promise.all(value.map(function (subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 20:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
            return [].concat((0,toConsumableArray/* default */.Z)(prev), (0,toConsumableArray/* default */.Z)(errors));
          }, []));
        case 22:
          // Replace message with variables
          kv = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rule), {}, {
            name: name,
            enum: (rule.enum || []).join(', ')
          }, messageVariables);
          fillVariableResult = result.map(function (error) {
            if (typeof error === 'string') {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 25:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');
  // Fill rule with context
  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    });
    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false;
        // Wrap callback only accept when promise not provided
        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0,es_warning/* default */.ZP)(!hasPromise, 'Your validator function has already return a promise. \`callback\` will be ignored.');
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };
        // Get promise
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        (0,es_warning/* default */.ZP)(hasPromise, '\`callback\` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
      i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
      i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  // Do validate rules
  var summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors: errors,
                rule: rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              /* eslint-enable */
              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }
  // Internal catch error to avoid console error log.
  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3(rulePromises) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, (0,toConsumableArray/* default */.Z)(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(rulePromises) {
    var count;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function (resolve) {
            rulePromises.forEach(function (promise) {
              promise.then(function (ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/Field.js










var Field_excluded = ["name"];







var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
// We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Field, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Field);
  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */

  /**
   * Mark when touched & validated. Currently only used for \`dependencies\`.
   * Note that we do not think field with \`initialValue\` is dirty
   * but this will be by \`isFieldDirty\` func.
   */

  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Field);
    _this = _super.call(this, props);
    // Register on init
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;
    _this.cancelRegister = function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    };
    _this.getNamePath = function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(prefixName), (0,toConsumableArray/* default */.Z)(name)) : [];
    };
    _this.getRules = function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    };
    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */
      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };
    _this.triggerMetaEvent = function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getMeta()), {}, {
        destroy: destroy
      }));
    };
    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      // \`setFieldsValue\` is a quick access to update related status
      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 ? void 0 : onReset();
            _this.refresh();
            return;
          }
          break;
        /**
         * In case field with \`preserve = false\` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;
              if ('touched' in data) {
                _this.touched = data.touched;
              }
              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            }
            // Handle update by \`setField\` with \`shouldUpdate\`
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked \`dependencies\` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath);
            // No need for \`namePathMath\` check and \`shouldUpdate\` check, since \`valueUpdate\` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering
            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
        default:
          // 1. If \`namePath\` exists in \`namePathList\`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If \`namePathList\` is [['list']] (List value update), Field should be updated
          //      If \`namePathList\` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If \`dependencies\` is set, \`name\` is not set and \`shouldUpdate\` is not set,
          //       don't use \`shouldUpdate\`. \`dependencies\` is view as a shortcut if \`shouldUpdate\`
          //       is not provided
          //   2.2 If \`shouldUpdate\` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    };
    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      // Force change to async to avoid rule OOD under renderProps field
      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }
        var _this$props5 = _this.props,
          _this$props5$validate = _this$props5.validateFirst,
          validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
          messageVariables = _this$props5.messageVariables;
        var _ref2 = options || {},
          triggerName = _ref2.triggerName;
        var filteredRules = _this.getRules();
        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            return rule;
          }).filter(function (rule) {
            var validateTrigger = rule.validateTrigger;
            if (!validateTrigger) {
              return true;
            }
            var triggerList = typeUtil_toArray(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }
        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
          if (_this.validatePromise === rootPromise) {
            var _ruleErrors$forEach;
            _this.validatePromise = null;
            // Get errors & warnings
            var nextErrors = [];
            var nextWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                _ref3$errors = _ref3.errors,
                errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
              if (warningOnly) {
                nextWarnings.push.apply(nextWarnings, (0,toConsumableArray/* default */.Z)(errors));
              } else {
                nextErrors.push.apply(nextErrors, (0,toConsumableArray/* default */.Z)(errors));
              }
            });
            _this.errors = nextErrors;
            _this.warnings = nextWarnings;
            _this.triggerMetaEvent();
            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();
      // Force trigger re-render since we need sync renderProps with new meta
      _this.reRender();
      return rootPromise;
    };
    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };
    _this.isFieldTouched = function () {
      return _this.touched;
    };
    _this.isFieldDirty = function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      }
      // Form set initialValue
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }
      return false;
    };
    _this.getErrors = function () {
      return _this.errors;
    };
    _this.getWarnings = function () {
      return _this.warnings;
    };
    _this.isListField = function () {
      return _this.props.isListField;
    };
    _this.isList = function () {
      return _this.props.isList;
    };
    _this.isPreserve = function () {
      return _this.props.preserve;
    };
    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };
    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }
      // Filed element only
      var childList = (0,Children_toArray/* default */.Z)(children);
      if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    };
    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return valueUtil_getValue(store || getFieldsValue(true), namePath);
    };
    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function (val) {
        return (0,defineProperty/* default */.Z)({}, valuePropName, val);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var originTriggerFunc = childProps[trigger];
      var control = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, childProps), mergedGetValueProps(value));
      // Add trigger
      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };
      // Add validateTrigger
      var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];
        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
          // Always use latest rules
          var rules = _this.props.rules;
          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };
    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue((0,assertThisInitialized/* default */.Z)(_this));
    }
    return _this;
  }
  (0,createClass/* default */.Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        shouldUpdate = _this$props7.shouldUpdate,
        fieldContext = _this$props7.fieldContext;
      this.mounted = true;
      // Register on init
      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
          registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }
      // One more render for component in case fields not ready
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children),
        child = _this$getOnlyChild.child,
        isFunction = _this$getOnlyChild.isFunction;
      // Not need to \`cloneElement\` since user can handle this in render function self
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,es_warning/* default */.ZP)(!child, '\`children\` of Field is not validate ReactElement.');
        returnChildNode = child;
      }
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field;
}(react.Component);
Field.contextType = FieldContext;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};
function WrapperField(_ref5) {
  var name = _ref5.name,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref5, Field_excluded);
  var fieldContext = react.useContext(FieldContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';
  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  }
  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (false) {}
  return /*#__PURE__*/react.createElement(Field, (0,esm_extends/* default */.Z)({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}
/* harmony default export */ var es_Field = (WrapperField);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/ListContext.js

var ListContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_ListContext = (ListContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/List.js








var List_List = function List(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger;
  var context = react.useContext(FieldContext);
  var keyRef = react.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat((0,toConsumableArray/* default */.Z)(parentPrefixName), (0,toConsumableArray/* default */.Z)(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]);
  // List context
  var listContext = react.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);
  // User should not pass \`children\` as other type.
  if (typeof children !== 'function') {
    (0,es_warning/* default */.ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by \`form\` api.
     */
    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys.slice(0, index)), [keyManager.id], (0,toConsumableArray/* default */.Z)(keyManager.keys.slice(index)));
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue.slice(0, index)), [defaultValue], (0,toConsumableArray/* default */.Z)(newValue.slice(index))));
        } else {
          if (false) {}
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        });
        // Trigger store change
        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }
        var newValue = getNewValue();
        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = valueUtil_move(keyManager.keys, from, to);
        // Trigger store change
        onChange(valueUtil_move(newValue, from, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (false) {}
    }
    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
};
/* harmony default export */ var rc_field_form_es_List = (List_List);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/utils/NameMap.js





var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,esm_typeof/* default */.Z)(cell), ":").concat(cell);
  })
  // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a \`Map\` but accepts \`string[]\` as key.
 */
var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0,classCallCheck/* default */.Z)(this, NameMap);
    this.kvs = new Map();
  }
  (0,createClass/* default */.Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);
      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return (0,toConsumableArray/* default */.Z)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
              _cell$match2 = (0,slicedToArray/* default */.Z)(_cell$match, 3),
              type = _cell$match2[1],
              unit = _cell$match2[2];
            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
          value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap;
}();
/* harmony default export */ var utils_NameMap = (NameMap);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/useForm.js






var useForm_excluded = ["name", "errors"];








var FormStore = /*#__PURE__*/(0,createClass/* default */.Z)(function FormStore(forceRootUpdate) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, FormStore);
  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;
  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };
  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    (0,es_warning/* default */.ZP)(false, '\`getInternalHooks\` is internal usage. Should not call directly.');
    return null;
  };
  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  this.prevWithoutPreserves = null;
  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = setValues({}, initialValues, _this.store);
      // We will take consider prev form unmount fields.
      // When the field is not \`preserve\`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = setValue(nextStore, namePath, valueUtil_getValue(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  };
  this.destroyForm = function () {
    var prevWithoutPreserves = new utils_NameMap();
    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  };
  this.getInitialValue = function (namePath) {
    var initValue = valueUtil_getValue(_this.initialValues, namePath);
    // Not cloneDeep when without \`namePath\`
    return namePath.length ? utils_cloneDeep(initValue) : initValue;
  };
  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };
  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };
  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  };
  this.watchList = [];
  this.registerWatch = function (callback) {
    _this.watchList.push(callback);
    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  };
  this.notifyWatch = function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      _this.watchList.forEach(function (callback) {
        callback(values, namePath);
      });
    }
  };
  this.timeoutId = null;
  this.warningUnhooked = function () {
    if (false) {}
  };
  this.updateStore = function (nextStore) {
    _this.store = nextStore;
  };
  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };
  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new utils_NameMap();
    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  };
  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };
  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();
    if (nameList === true && !filterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }
      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };
  this.getFieldValue = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return valueUtil_getValue(_this.store, namePath);
  };
  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };
  this.getFieldError = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  };
  this.getFieldWarning = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  };
  this.isFieldsTouched = function () {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    };
    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }
    // Generate a nest tree for validate
    var map = new utils_NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath();
      // Find matched entity and put into list
      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0,toConsumableArray/* default */.Z)(list), [field]);
          });
        }
      });
    });
    // Check if NameMap value is touched
    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };
  this.isFieldTouched = function (name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  };
  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };
  this.isFieldValidating = function (name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  };
  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new utils_NameMap();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();
      // Record only if has \`initialValue\`
      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    // Reset
    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== undefined) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,es_warning/* default */.ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set \`initialValue\`and do not modify value
              (0,es_warning/* default */.ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              // Set \`initialValue\`
              if (!info.skipExist || originValue === undefined) {
                _this.updateStore(setValue(_this.store, namePath, (0,toConsumableArray/* default */.Z)(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0,toConsumableArray/* default */.Z)((0,toConsumableArray/* default */.Z)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  };
  this.resetFields = function (nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(setValues({}, _this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }
    // Reset by \`nameList\`
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(setValue(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  };
  this.setFields = function (fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
        errors = fieldData.errors,
        data = (0,objectWithoutProperties/* default */.Z)(fieldData, useForm_excluded);
      var namePath = getNamePath(name);
      namePathList.push(namePath);
      // Value
      if ('value' in data) {
        _this.updateStore(setValue(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  };
  this.getFields = function () {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };
  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = valueUtil_getValue(_this.store, namePath);
      if (prevValue === undefined) {
        _this.updateStore(setValue(_this.store, namePath, initialValue));
      }
    }
  };
  this.isMergedPreserve = function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  };
  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);
    // Set initial values
    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }
    // un-register field callback
    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });
      // Clean up store value if not preserve
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore(setValue(_prevStore, namePath, defaultValue, true));
          // Notify that field is unmount
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });
          // Dependencies update
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  };
  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
            value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          var _namePath = action.namePath,
            triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName: triggerName
          });
          break;
        }
      default:
      // Currently we don't have other action. Do nothing.
    }
  };
  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function (_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };
  this.triggerDependenciesUpdate = function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields))
    });
    return childrenFields;
  };
  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(setValue(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);
    // Dependencies update
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
    // trigger callback function
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields)));
  };
  this.setFieldsValue = function (store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = setValues(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  };
  this.setFieldValue = function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  };
  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new utils_NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  };
  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since \`fields\` may be replaced by controlled fields
       */
      if (filedErrors) {
        var cache = new utils_NameMap();
        filedErrors.forEach(function (_ref4) {
          var name = _ref4.name,
            errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function (_ref5) {
        var fieldName = _ref5.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };
  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];
    // Collect result in promise list
    var promiseList = [];
    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide \`nameList\`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */
      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();
        if (
        // nameList[i] === undefined \u8BF4\u660E\u662F\u4EE5 nameList \u5F00\u5934\u7684
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      }
      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      // Add field validate rule in to promise list
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules((0,objectSpread2/* default */.Z)({
          validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultValidateMessages), _this.validateMessages)
        }, options));
        // Wrap promise with field
        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
            var warningOnly = _ref6.rule.warningOnly,
              errors = _ref6.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0,toConsumableArray/* default */.Z)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0,toConsumableArray/* default */.Z)(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;
    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });
    // Do not throw in console
    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };
  this.submit = function () {
    _this.warningUnhooked();
    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user \`onFinish\` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = react.useRef();
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
/* harmony default export */ var es_useForm = (useForm);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/FormContext.js



var FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext), {}, {
      validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formsRef.current), {}, (0,defineProperty/* default */.Z)({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,objectSpread2/* default */.Z)({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

/* harmony default export */ var es_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/Form.js




var Form_excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];





var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Form_excluded);
  var formContext = react.useContext(es_FormContext);
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var _useForm = es_useForm(form),
    _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
    formInstance = _useForm2[0];
  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _formInstance$getInte.useSubscribe,
    setInitialValues = _formInstance$getInte.setInitialValues,
    setCallbacks = _formInstance$getInte.setCallbacks,
    setValidateMessages = _formInstance$getInte.setValidateMessages,
    setPreserve = _formInstance$getInte.setPreserve,
    destroyForm = _formInstance$getInte.destroyForm;
  // Pass ref with form instance
  react.useImperativeHandle(ref, function () {
    return formInstance;
  });
  // Register form into Context
  react.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  // Pass props to store
  setValidateMessages((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve);
  // Set initial value, init store value when first mount
  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  react.useEffect(function () {
    return destroyForm;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  // Prepare children by \`children\` type
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }
  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);
  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  var prevFieldsRef = react.useRef();
  react.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode);
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
/* harmony default export */ var es_Form = (Form);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/useWatch.js






function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning =  false ? 0 : function () {};
function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _args$ = args[0],
    dependencies = _args$ === void 0 ? [] : _args$,
    form = args[1];
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = (0,react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react.useContext)(FieldContext);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;
  // Warning if not exist form instance
  if (false) {}
  var namePath = getNamePath(dependencies);
  var namePathRef = (0,react.useRef)(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  (0,react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    var getFieldsValue = formInstance.getFieldsValue,
      getInternalHooks = formInstance.getInternalHooks;
    var _getInternalHooks = getInternalHooks(HOOK_MARK),
      registerWatch = _getInternalHooks.registerWatch;
    var cancelRegister = registerWatch(function (store) {
      var newValue = valueUtil_getValue(store, namePathRef.current);
      var nextValueStr = stringify(newValue);
      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    });
    // TODO: We can improve this perf in future
    var initialValue = valueUtil_getValue(getFieldsValue(), namePathRef.current);
    setValue(initialValue);
    return cancelRegister;
  },
  // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}
/* harmony default export */ var es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-field-form@1.27.4_biqbaboplfbrettd7655fr4n2y/node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = rc_field_form_es_List;
RefForm.useForm = es_useForm;
RefForm.useWatch = es_useWatch;

/* harmony default export */ var rc_field_form_es = ((/* unused pure expression or super */ null && (RefForm)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/form/context.js




const context_FormContext = /*#__PURE__*/react.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: () => {}
});
const NoStyleItemContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
const context_FormProvider = props => {
  const providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, Object.assign({}, providerProps));
};
const FormItemPrefixContext = /*#__PURE__*/react.createContext({
  prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/react.createContext({});
const NoFormStyle = _ref => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = useContext(FormItemInputContext);
  const newFormItemInputContext = useMemo(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/React.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/_util/motion.js
// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = node => ({
  height: node ? node.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function () {
  let rootCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant';
  return {
    motionName: \`\${rootCls}-motion-collapse\`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
const SelectPlacements = (/* unused pure expression or super */ null && (['bottomLeft', 'bottomRight', 'topLeft', 'topRight']));
const getTransitionDirection = placement => {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return \`slide-down\`;
  }
  return \`slide-up\`;
};
const motion_getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return \`\${rootPrefixCls}-\${motion}\`;
};

/* harmony default export */ var motion = ((/* unused pure expression or super */ null && (initCollapseMotion)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/_util/statusUtils.js

const InputStatuses = (/* unused pure expression or super */ null && (['warning', 'error', '']));
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classnames_default()({
    [\`\${prefixCls}-status-success\`]: status === 'success',
    [\`\${prefixCls}-status-warning\`]: status === 'warning',
    [\`\${prefixCls}-status-error\`]: status === 'error',
    [\`\${prefixCls}-status-validating\`]: status === 'validating',
    [\`\${prefixCls}-has-feedback\`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ var asn_CheckOutlined = (CheckOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(58649);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/CheckOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CheckOutlined_CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CheckOutlined
  }));
};
CheckOutlined_CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ var icons_CheckOutlined = (/*#__PURE__*/react.forwardRef(CheckOutlined_CheckOutlined));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js
// This icon file is generated automatically.
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" } }] }, "name": "close-circle", "theme": "filled" };
/* harmony default export */ var asn_CloseCircleFilled = (CloseCircleFilled);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CloseCircleFilled_CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseCircleFilled
  }));
};
CloseCircleFilled_CloseCircleFilled.displayName = 'CloseCircleFilled';
/* harmony default export */ var icons_CloseCircleFilled = (/*#__PURE__*/react.forwardRef(CloseCircleFilled_CloseCircleFilled));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
// This icon file is generated automatically.
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
/* harmony default export */ var asn_CloseOutlined = (CloseOutlined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/CloseOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CloseOutlined_CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseOutlined
  }));
};
CloseOutlined_CloseOutlined.displayName = 'CloseOutlined';
/* harmony default export */ var icons_CloseOutlined = (/*#__PURE__*/react.forwardRef(CloseOutlined_CloseOutlined));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
/* harmony default export */ var asn_DownOutlined = (DownOutlined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/DownOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DownOutlined_DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DownOutlined
  }));
};
DownOutlined_DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ var icons_DownOutlined = (/*#__PURE__*/react.forwardRef(DownOutlined_DownOutlined));
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(60956);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
// This icon file is generated automatically.
var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
/* harmony default export */ var asn_SearchOutlined = (SearchOutlined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/icons/SearchOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SearchOutlined_SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SearchOutlined
  }));
};
SearchOutlined_SearchOutlined.displayName = 'SearchOutlined';
/* harmony default export */ var icons_SearchOutlined = (/*#__PURE__*/react.forwardRef(SearchOutlined_SearchOutlined));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/utils/iconUtil.js







function getIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading,
    multiple,
    hasFeedback,
    prefixCls,
    showArrow,
    feedbackIcon
  } = _ref;
  // Clear Icon
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/react.createElement(icons_CloseCircleFilled, null);
  // Validation Feedback Icon
  const getSuffixIconNode = arrowIcon => /*#__PURE__*/react.createElement(react.Fragment, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      spin: true
    }));
  } else {
    const iconCls = \`\${prefixCls}-suffix\`;
    mergedSuffixIcon = _ref2 => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode( /*#__PURE__*/react.createElement(icons_SearchOutlined, {
          className: iconCls
        }));
      }
      return getSuffixIconNode( /*#__PURE__*/react.createElement(icons_DownOutlined, {
        className: iconCls
      }));
    };
  }
  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/react.createElement(icons_CheckOutlined, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/react.createElement(icons_CloseOutlined, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(16274);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.5.6_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/cssinjs/es/index.js + 27 modules
var cssinjs_es = __webpack_require__(24567);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@ant-design/icons/es/components/Context.js
var components_Context = __webpack_require__(35807);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/modal/locale.js

let runtimeLocale = Object.assign({}, es_locale_en_US.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = Object.assign(Object.assign({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = Object.assign({}, es_locale_en_US.Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/locale/index.js




const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) {}
  react.useEffect(() => {
    changeConfirmLocale(locale && locale.Modal);
    return () => {
      changeConfirmLocale();
    };
  }, [locale]);
  const getMemoizedContextValue = react.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/react.createElement(locale_context.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) {}
/* harmony default export */ var es_locale = (LocaleProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(13822);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js + 1 modules
var colors_es = __webpack_require__(81548);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(80460);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/cssVariables.js
/* eslint-disable import/prefer-default-export, prefer-destructuring */





const dynamicStyleMark = \`-ant-\${Date.now()}-\${Math.random()}\`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new dist_module/* TinyColor */.C(colorVal);
    const colorPalettes = (0,colors_es/* generate */.R_)(baseColor.toRgbString());
    variables[\`\${type}-color\`] = formatColor(baseColor);
    variables[\`\${type}-color-disabled\`] = colorPalettes[1];
    variables[\`\${type}-color-hover\`] = colorPalettes[4];
    variables[\`\${type}-color-active\`] = colorPalettes[6];
    variables[\`\${type}-color-outline\`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[\`\${type}-color-deprecated-bg\`] = colorPalettes[0];
    variables[\`\${type}-color-deprecated-border\`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new dist_module/* TinyColor */.C(theme.primaryColor);
    const primaryColors = (0,colors_es/* generate */.R_)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[\`primary-\${index + 1}\`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new dist_module/* TinyColor */.C(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => \`--\${globalPrefixCls}-\${key}: \${variables[key]};\`);
  return \`
  :root {
    \${cssList.join('\\n')}
  }
  \`.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0,canUseDom/* default */.Z)()) {
    (0,dynamicCSS/* updateCSS */.hq)(style, \`\${dynamicStyleMark}-dynamic-theme\`);
  } else {
     false ? 0 : void 0;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/hooks/useTheme.js



function useTheme(theme, parentTheme) {
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? internal/* defaultConfig */.u_ : parentTheme;
  const mergedTheme = (0,hooks_useMemo/* default */.Z)(() => {
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0,isEqual/* default */.Z)(prevTheme, nextTheme, true);
  }));
  return mergedTheme;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/style/index.js
var es_style = __webpack_require__(71433);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/style/index.js



const useStyle = iconPrefixCls => {
  const [theme, token] = (0,internal/* useToken */.dQ)();
  // Generate style for icons
  return (0,cssinjs_es/* useStyleRegister */.xy)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls]
  }, () => [{
    [\`.\${iconPrefixCls}\`]: Object.assign(Object.assign({}, (0,es_style/* resetIcon */.Ro)()), {
      [\`.\${iconPrefixCls} .\${iconPrefixCls}-icon\`]: {
        display: 'block'
      }
    })
  }]);
};
/* harmony default export */ var config_provider_style = (useStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/config-provider/index.js
var config_provider_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


















const configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader']));
// These props is used by \`useContext\` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select'];
const defaultPrefixCls = 'ant';
let globalPrefixCls;
let globalIconPrefixCls;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
const setGlobalConfig = _ref => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    registerTheme(getGlobalPrefixCls(), theme);
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? \`\${getGlobalPrefixCls()}-\${suffixCls}\` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  }
});
const ProviderChildren = props => {
  var _a, _b;
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled
  } = props;
  const getPrefixCls = react.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) return customizePrefixCls;
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? \`\${mergedPrefixCls}-\${suffixCls}\` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || config_provider_context/* defaultIconPrefixCls */.oR;
  const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const wrapSSR = config_provider_style(iconPrefixCls);
  const mergedTheme = useTheme(theme, parentContext.theme);
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by \`useContext\` directly with child component.
  // These props should merged into \`config\`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,hooks_useMemo/* default */.Z)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = react.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = shouldWrapSSR ? wrapSSR(children) : children;
  // Additional Form provider
  let validateMessages = {};
  if (locale) {
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = es_locale_en_US.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }
  if (form && form.validateMessages) {
    validateMessages = Object.assign(Object.assign({}, validateMessages), form.validateMessages);
  }
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(FormProvider, {
      validateMessages: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/react.createElement(es_locale, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react.createElement(components_Context/* default.Provider */.Z.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
      size: componentSize
    }, childNode);
  }
  // ================================ Dynamic theme ================================
  const memoTheme = react.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token
      } = _a,
      rest = config_provider_rest(_a, ["algorithm", "token"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,cssinjs_es/* createTheme */.jG)(algorithm) : undefined;
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: Object.assign(Object.assign({}, seed/* default */.Z), token)
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/react.createElement(internal/* DesignTokenContext.Provider */.Mj.Provider, {
      value: memoTheme
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react.createElement(config_provider_context/* ConfigContext.Provider */.E_.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => /*#__PURE__*/react.createElement(locale_LocaleReceiver, null, (_, __, legacyLocale) => /*#__PURE__*/react.createElement(config_provider_context/* ConfigConsumer */.C, null, context => /*#__PURE__*/react.createElement(ProviderChildren, Object.assign({
  parentContext: context,
  legacyLocale: legacyLocale
}, props))));
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.E_;
ConfigProvider.SizeContext = SizeContext/* default */.Z;
ConfigProvider.config = setGlobalConfig;
if (false) {}
/* harmony default export */ var config_provider = (ConfigProvider);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/_util/PurePanel.js



/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls) {
  return function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react.useRef(null);
    const [popupHeight, setPopupHeight] = react.useState(0);
    const [popupWidth, setPopupWidth] = react.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react.useContext(config_provider_context/* ConfigContext */.E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? \`.\${getDropdownCls(prefixCls)}\` : \`.\${prefixCls}-dropdown\`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    return /*#__PURE__*/react.createElement(config_provider, {
      theme: {
        token: {
          motionDurationFast: '0.01s',
          motionDurationMid: '0.01s',
          motionDurationSlow: '0.01s'
        }
      }
    }, /*#__PURE__*/react.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        width: 'fit-content',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/react.createElement(Component, Object.assign({}, props, {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open: open,
      visible: open,
      getPopupContainer: () => holderRef.current
    }))));
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/style/motion/motion.js
const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [\`
      \${sameLevelPrefix}\${motionCls}-enter,
      \${sameLevelPrefix}\${motionCls}-appear
    \`]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [\`\${sameLevelPrefix}\${motionCls}-leave\`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [\`
      \${sameLevelPrefix}\${motionCls}-enter\${motionCls}-enter-active,
      \${sameLevelPrefix}\${motionCls}-appear\${motionCls}-appear-active
    \`]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [\`\${sameLevelPrefix}\${motionCls}-leave\${motionCls}-leave-active\`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/style/motion/slide.js


const slideUpIn = new cssinjs_es/* Keyframes */.E4('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new cssinjs_es/* Keyframes */.E4('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new cssinjs_es/* Keyframes */.E4('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new cssinjs_es/* Keyframes */.E4('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new cssinjs_es/* Keyframes */.E4('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new cssinjs_es/* Keyframes */.E4('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new cssinjs_es/* Keyframes */.E4('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new cssinjs_es/* Keyframes */.E4('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = \`\${antCls}-\${motionName}\`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [\`
      \${motionCls}-enter,
      \${motionCls}-appear
    \`]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [\`\${motionCls}-leave\`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/style/motion/move.js


const moveDownIn = new cssinjs_es/* Keyframes */.E4('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = new cssinjs_es/* Keyframes */.E4('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = new cssinjs_es/* Keyframes */.E4('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = new cssinjs_es/* Keyframes */.E4('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = new cssinjs_es/* Keyframes */.E4('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = new cssinjs_es/* Keyframes */.E4('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = new cssinjs_es/* Keyframes */.E4('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = new cssinjs_es/* Keyframes */.E4('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = \`\${antCls}-\${motionName}\`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [\`
        \${motionCls}-enter,
        \${motionCls}-appear
      \`]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [\`\${motionCls}-leave\`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/style/dropdown.js


const genItemStyle = token => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: \`\${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px \${controlPaddingHorizontal}px\`,
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
const genSingleStyle = token => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = \`\${componentCls}-item\`;
  return [{
    [\`\${componentCls}-dropdown\`]: Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      zIndex: token.zIndexPopup,
      boxSizing: 'border-box',
      padding: token.paddingXXS,
      overflow: 'hidden',
      fontSize: token.fontSize,
      // Fix select render lag of long text in chrome
      // https://github.com/ant-design/ant-design/issues/11456
      // https://github.com/ant-design/ant-design/issues/11843
      fontVariant: 'initial',
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      outline: 'none',
      boxShadow: token.boxShadowSecondary,
      [\`
            &\${antCls}-slide-up-enter\${antCls}-slide-up-enter-active\${componentCls}-dropdown-placement-bottomLeft,
            &\${antCls}-slide-up-appear\${antCls}-slide-up-appear-active\${componentCls}-dropdown-placement-bottomLeft
          \`]: {
        animationName: slideUpIn
      },
      [\`
            &\${antCls}-slide-up-enter\${antCls}-slide-up-enter-active\${componentCls}-dropdown-placement-topLeft,
            &\${antCls}-slide-up-appear\${antCls}-slide-up-appear-active\${componentCls}-dropdown-placement-topLeft
          \`]: {
        animationName: slideDownIn
      },
      [\`&\${antCls}-slide-up-leave\${antCls}-slide-up-leave-active\${componentCls}-dropdown-placement-bottomLeft\`]: {
        animationName: slideUpOut
      },
      [\`&\${antCls}-slide-up-leave\${antCls}-slide-up-leave-active\${componentCls}-dropdown-placement-topLeft\`]: {
        animationName: slideDownOut
      },
      '&-hidden': {
        display: 'none'
      },
      '&-empty': {
        color: token.colorTextDisabled
      },
      // ========================= Options =========================
      [\`\${selectItemCls}-empty\`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        color: token.colorTextDisabled
      }),
      [\`\${selectItemCls}\`]: Object.assign(Object.assign({}, genItemStyle(token)), {
        cursor: 'pointer',
        transition: \`background \${token.motionDurationSlow} ease\`,
        borderRadius: token.borderRadiusSM,
        // =========== Group ============
        '&-group': {
          color: token.colorTextDescription,
          fontSize: token.fontSizeSM,
          cursor: 'default'
        },
        // =========== Option ===========
        '&-option': {
          display: 'flex',
          '&-content': Object.assign({
            flex: 'auto'
          }, es_style/* textEllipsis */.vS),
          '&-state': {
            flex: 'none'
          },
          [\`&-active:not(\${selectItemCls}-option-disabled)\`]: {
            backgroundColor: token.controlItemBgHover
          },
          [\`&-selected:not(\${selectItemCls}-option-disabled)\`]: {
            color: token.colorText,
            fontWeight: token.fontWeightStrong,
            backgroundColor: token.controlItemBgActive,
            [\`\${selectItemCls}-option-state\`]: {
              color: token.colorPrimary
            }
          },
          '&-disabled': {
            [\`&\${selectItemCls}-option-selected\`]: {
              backgroundColor: token.colorBgContainerDisabled
            },
            color: token.colorTextDisabled,
            cursor: 'not-allowed'
          },
          '&-grouped': {
            paddingInlineStart: token.controlPaddingHorizontal * 2
          }
        }
      }),
      // =========================== RTL ===========================
      '&-rtl': {
        direction: 'rtl'
      }
    })
  },
  // Follow code may reuse in other components
  initSlideMotion(token, 'slide-up'), initSlideMotion(token, 'slide-down'), initMoveMotion(token, 'move-up'), initMoveMotion(token, 'move-down')];
};
/* harmony default export */ var dropdown = (genSingleStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/style/multiple.js


const FIXED_ITEM_MARGIN = 2;
function getSelectItemStyle(_ref) {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
}
function genSizeStyle(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = \`\${componentCls}-selection-overflow\`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? \`\${componentCls}-\${suffix}\` : '';
  return {
    [\`\${componentCls}-multiple\${suffixCls}\`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge \`height\` & \`line-height\` under style with \`selection\` & \`search\`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex'
        }
      },
      // ========================= Selector =========================
      [\`\${componentCls}-selector\`]: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // Multiple is little different that horizontal is follow the vertical
        padding: \`\${selectItemDist - FIXED_ITEM_MARGIN}px \${FIXED_ITEM_MARGIN * 2}px\`,
        borderRadius: token.borderRadius,
        [\`\${componentCls}-show-search&\`]: {
          cursor: 'text'
        },
        [\`\${componentCls}-disabled&\`]: {
          background: token.colorBgContainerDisabled,
          cursor: 'not-allowed'
        },
        '&:after': {
          display: 'inline-block',
          width: 0,
          margin: \`\${FIXED_ITEM_MARGIN}px 0\`,
          lineHeight: \`\${selectItemHeight}px\`,
          content: '"\\\\a0"'
        }
      },
      [\`
        &\${componentCls}-show-arrow \${componentCls}-selector,
        &\${componentCls}-allow-clear \${componentCls}-selector
      \`]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [\`\${componentCls}-selection-item\`]: {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: \`\${selectItemHeight - token.lineWidth * 2}px\`,
        background: token.colorFillSecondary,
        border: \`\${token.lineWidth}px solid \${token.colorSplit}\`,
        borderRadius: token.borderRadiusSM,
        cursor: 'default',
        transition: \`font-size \${token.motionDurationSlow}, line-height \${token.motionDurationSlow}, height \${token.motionDurationSlow}\`,
        userSelect: 'none',
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [\`\${componentCls}-disabled&\`]: {
          color: token.colorTextDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed'
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        '&-content': {
          display: 'inline-block',
          marginInlineEnd: token.paddingXS / 2,
          overflow: 'hidden',
          whiteSpace: 'pre',
          textOverflow: 'ellipsis'
        },
        '&-remove': Object.assign(Object.assign({}, (0,es_style/* resetIcon */.Ro)()), {
          display: 'inline-block',
          color: token.colorIcon,
          fontWeight: 'bold',
          fontSize: 10,
          lineHeight: 'inherit',
          cursor: 'pointer',
          [\`> \${iconCls}\`]: {
            verticalAlign: '-0.2em'
          },
          '&:hover': {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [\`\${selectOverflowPrefixCls}-item + \${selectOverflowPrefixCls}-item\`]: {
        [\`\${componentCls}-selection-search\`]: {
          marginInlineStart: 0
        }
      },
      [\`\${componentCls}-selection-search\`]: {
        display: 'inline-flex',
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [\`
          &-input,
          &-mirror
        \`]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: \`\${selectItemHeight}px\`,
          transition: \`all \${token.motionDurationSlow}\`
        },
        '&-input': {
          width: '100%',
          minWidth: 4.1 // fix search cursor missing
        },

        '&-mirror': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: 'auto',
          zIndex: 999,
          whiteSpace: 'pre',
          visibility: 'hidden'
        }
      },
      // ======================= Placeholder =======================
      [\`\${componentCls}-selection-placeholder \`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: 'translateY(-50%)',
        transition: \`all \${token.motionDurationSlow}\`
      }
    }
  };
}
function genMultipleStyle(token) {
  const {
    componentCls
  } = token;
  const smallToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle(smallToken, 'sm'),
  // Padding
  {
    [\`\${componentCls}-multiple\${componentCls}-sm\`]: {
      [\`\${componentCls}-selection-placeholder\`]: {
        insetInline: token.controlPaddingHorizontalSM - token.lineWidth
      },
      // https://github.com/ant-design/ant-design/issues/29559
      [\`\${componentCls}-selection-search\`]: {
        marginInlineStart: smSelectItemMargin
      }
    }
  },
  // ======================== Large ========================
  // Shared
  genSizeStyle((0,statistic/* merge */.TS)(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    controlHeightSM: token.controlHeight,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  }), 'lg')];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/style/single.js


function single_genSizeStyle(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? \`\${componentCls}-\${suffix}\` : '';
  return {
    [\`\${componentCls}-single\${suffixCls}\`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [\`\${componentCls}-selector\`]: Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), {
        display: 'flex',
        borderRadius,
        [\`\${componentCls}-selection-search\`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          '&-input': {
            width: '100%'
          }
        },
        [\`
          \${componentCls}-selection-item,
          \${componentCls}-selection-placeholder
        \`]: {
          padding: 0,
          lineHeight: \`\${selectHeightWithoutBorder}px\`,
          transition: \`all \${token.motionDurationSlow}\`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          '@supports (-moz-appearance: meterbar)': {
            lineHeight: \`\${selectHeightWithoutBorder}px\`
          }
        },
        [\`\${componentCls}-selection-item\`]: {
          position: 'relative',
          userSelect: 'none'
        },
        [\`\${componentCls}-selection-placeholder\`]: {
          transition: 'none',
          pointerEvents: 'none'
        },
        // For common baseline align
        [['&:after', /* For '' value baseline align */
        \`\${componentCls}-selection-item:after\`, /* For undefined value baseline align */
        \`\${componentCls}-selection-placeholder:after\`].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\\\a0"'
        }
      }),
      [\`
        &\${componentCls}-show-arrow \${componentCls}-selection-item,
        &\${componentCls}-show-arrow \${componentCls}-selection-placeholder
      \`]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [\`&\${componentCls}-open \${componentCls}-selection-item\`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by \`combobox\` mode.
      // Not customize
      [\`&:not(\${componentCls}-customize-input)\`]: {
        [\`\${componentCls}-selector\`]: {
          width: '100%',
          height: token.controlHeight,
          padding: \`0 \${inputPaddingHorizontalBase}px\`,
          [\`\${componentCls}-selection-search-input\`]: {
            height: selectHeightWithoutBorder
          },
          '&:after': {
            lineHeight: \`\${selectHeightWithoutBorder}px\`
          }
        }
      },
      [\`&\${componentCls}-customize-input\`]: {
        [\`\${componentCls}-selector\`]: {
          '&:after': {
            display: 'none'
          },
          [\`\${componentCls}-selection-search\`]: {
            position: 'static',
            width: '100%'
          },
          [\`\${componentCls}-selection-placeholder\`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: \`0 \${inputPaddingHorizontalBase}px\`,
            '&:after': {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
function single_genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [single_genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    borderRadius: token.borderRadiusSM
  }), 'sm'),
  // padding
  {
    [\`\${componentCls}-single\${componentCls}-sm\`]: {
      [\`&:not(\${componentCls}-customize-input)\`]: {
        [\`\${componentCls}-selection-search\`]: {
          insetInlineStart: inputPaddingHorizontalSM,
          insetInlineEnd: inputPaddingHorizontalSM
        },
        [\`\${componentCls}-selector\`]: {
          padding: \`0 \${inputPaddingHorizontalSM}px\`
        },
        // With arrow should provides \`padding-right\` to show the arrow
        [\`&\${componentCls}-show-arrow \${componentCls}-selection-search\`]: {
          insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
        },
        [\`
            &\${componentCls}-show-arrow \${componentCls}-selection-item,
            &\${componentCls}-show-arrow \${componentCls}-selection-placeholder
          \`]: {
          paddingInlineEnd: token.fontSize * 1.5
        }
      }
    }
  },
  // ======================== Large ========================
  // Shared
  single_genSizeStyle((0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  }), 'lg')];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(83635);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/style/index.js






// ============================= Selector =============================
const genSelectorStyle = token => {
  const {
    componentCls
  } = token;
  return {
    position: 'relative',
    backgroundColor: token.colorBgContainer,
    border: \`\${token.lineWidth}px \${token.lineType} \${token.colorBorder}\`,
    transition: \`all \${token.motionDurationMid} \${token.motionEaseInOut}\`,
    input: {
      cursor: 'pointer'
    },
    [\`\${componentCls}-show-search&\`]: {
      cursor: 'text',
      input: {
        cursor: 'auto',
        color: 'inherit'
      }
    },
    [\`\${componentCls}-disabled&\`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: 'not-allowed',
      [\`\${componentCls}-multiple&\`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: 'not-allowed'
      }
    }
  };
};
// ============================== Status ==============================
const genStatusStyle = function (rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [\`\${componentCls}-selector\`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [\`&:not(\${componentCls}-disabled):not(\${componentCls}-customize-input):not(\${antCls}-pagination-size-changer)\`]: Object.assign(Object.assign({}, overwriteStyle), {
        [\`\${componentCls}-focused& \${componentCls}-selector\`]: {
          borderColor: borderHoverColor,
          boxShadow: \`0 0 0 \${token.controlOutlineWidth}px \${outlineColor}\`,
          outline: 0
        },
        [\`&:hover \${componentCls}-selector\`]: {
          borderColor: borderHoverColor
        }
      })
    }
  };
};
// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [\`\${componentCls}-selection-search-input\`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none'
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,es_style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      [\`&:not(\${componentCls}-customize-input) \${componentCls}-selector\`]: Object.assign(Object.assign({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [\`&:not(&-disabled):hover \${selectCls}-selector\`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [\`\${componentCls}-selection-item\`]: Object.assign({
        flex: 1,
        fontWeight: 'normal'
      }, es_style/* textEllipsis */.vS),
      // ======================= Placeholder =======================
      [\`\${componentCls}-selection-placeholder\`]: Object.assign(Object.assign({}, es_style/* textEllipsis */.vS), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none'
      }),
      // ========================== Arrow ==========================
      [\`\${componentCls}-arrow\`]: Object.assign(Object.assign({}, (0,es_style/* resetIcon */.Ro)()), {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        [iconCls]: {
          verticalAlign: 'top',
          transition: \`transform \${token.motionDurationSlow}\`,
          '> svg': {
            verticalAlign: 'top'
          },
          [\`&:not(\${componentCls}-suffix)\`]: {
            pointerEvents: 'auto'
          }
        },
        [\`\${componentCls}-disabled &\`]: {
          cursor: 'not-allowed'
        },
        '> *:not(:last-child)': {
          marginInlineEnd: 8 // FIXME: magic
        }
      }),

      // ========================== Clear ==========================
      [\`\${componentCls}-clear\`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        background: token.colorBgContainer,
        cursor: 'pointer',
        opacity: 0,
        transition: \`color \${token.motionDurationMid} ease, opacity \${token.motionDurationSlow} ease\`,
        textRendering: 'auto',
        '&:before': {
          display: 'block'
        },
        '&:hover': {
          color: token.colorTextTertiary
        }
      },
      '&:hover': {
        [\`\${componentCls}-clear\`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [\`\${componentCls}-has-feedback\`]: {
      [\`\${componentCls}-clear\`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
      }
    }
  };
};
// ============================== Styles ==============================
const genSelectStyle = token => {
  const {
    componentCls
  } = token;
  return [{
    [componentCls]: {
      // ==================== BorderLess ====================
      [\`&-borderless \${componentCls}-selector\`]: {
        backgroundColor: \`transparent !important\`,
        borderColor: \`transparent !important\`,
        boxShadow: \`none !important\`
      },
      // ==================== In Form ====================
      [\`&\${componentCls}-in-form-item\`]: {
        width: '100%'
      }
    }
  },
  // =====================================================
  // ==                       LTR                       ==
  // =====================================================
  // Base
  genBaseStyle(token),
  // Single
  single_genSingleStyle(token),
  // Multiple
  genMultipleStyle(token),
  // Dropdown
  dropdown(token),
  // =====================================================
  // ==                       RTL                       ==
  // =====================================================
  {
    [\`\${componentCls}-rtl\`]: {
      direction: 'rtl'
    }
  },
  // =====================================================
  // ==                     Status                      ==
  // =====================================================
  genStatusStyle(componentCls, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorPrimaryHover,
    outlineColor: token.controlOutline
  })), genStatusStyle(\`\${componentCls}-status-error\`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorErrorHover,
    outlineColor: token.colorErrorOutline
  }), true), genStatusStyle(\`\${componentCls}-status-warning\`, (0,statistic/* merge */.TS)(token, {
    borderHoverColor: token.colorWarningHover,
    outlineColor: token.colorWarningOutline
  }), true),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(token, {
    borderElCls: \`\${componentCls}-selector\`,
    focusElCls: \`\${componentCls}-focused\`
  })];
};
// ============================== Export ==============================
/* harmony default export */ var select_style = ((0,genComponentStyleHook/* default */.Z)('Select', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = (0,statistic/* merge */.TS)(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/index.js
var select_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
// TODO: 4.0 - codemod should help to change \`filterOption\` to support node props.
















const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
const InternalSelect = (_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      className,
      rootClassName,
      getPopupContainer,
      popupClassName,
      dropdownClassName,
      listHeight = 256,
      placement,
      listItemHeight = 24,
      size: customizeSize,
      disabled: customDisabled,
      notFoundContent,
      status: customStatus,
      showArrow
    } = _a,
    props = select_rest(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction,
    virtual,
    dropdownMatchSelectWidth,
    select
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const size = react.useContext(SizeContext/* default */.Z);
  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const [wrapSSR, hashId] = select_style(prefixCls);
  const mode = react.useMemo(() => {
    const {
      mode: m
    } = props;
    if (m === 'combobox') {
      return undefined;
    }
    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }
    return m;
  }, [props.mode]);
  const isMultiple = mode === 'multiple' || mode === 'tags';
  const mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !(isMultiple || mode === 'combobox');
  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = react.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  // ===================== Empty =====================
  let mergedNotFound;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Select')) || /*#__PURE__*/react.createElement(defaultRenderEmpty, {
      componentName: "Select"
    });
  }
  // ===================== Icons =====================
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = getIcons(Object.assign(Object.assign({}, props), {
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showArrow: mergedShowArrow,
    prefixCls
  }));
  const selectProps = (0,es_omit/* default */.Z)(props, ['suffixIcon', 'itemIcon']);
  const rcSelectRtlDropdownClassName = classnames_default()(popupClassName || dropdownClassName, {
    [\`\${prefixCls}-dropdown-\${direction}\`]: direction === 'rtl'
  }, rootClassName, hashId);
  const mergedSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classnames_default()({
    [\`\${prefixCls}-lg\`]: mergedSize === 'large',
    [\`\${prefixCls}-sm\`]: mergedSize === 'small',
    [\`\${prefixCls}-rtl\`]: direction === 'rtl',
    [\`\${prefixCls}-borderless\`]: !bordered,
    [\`\${prefixCls}-in-form-item\`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, hashId);
  // ===================== Placement =====================
  const getPlacement = () => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  // ====================== Warning ======================
  if (false) {}
  // ====================== Render =======================
  return wrapSSR( /*#__PURE__*/react.createElement(rc_select_es, Object.assign({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    transitionName: motion_getTransitionName(rootPrefixCls, getTransitionDirection(placement), props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    placement: getPlacement(),
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropdownClassName,
    showArrow: hasFeedback || showArrow,
    disabled: mergedDisabled
  })));
};
if (false) {}
const select_Select = /*#__PURE__*/react.forwardRef(InternalSelect);
// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(select_Select);
select_Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
select_Select.Option = es_Option;
select_Select.OptGroup = es_OptGroup;
select_Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
/* harmony default export */ var es_select = (select_Select);

//# sourceURL=webpack:///./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/index.js_+_138_modules?`)}}]);
