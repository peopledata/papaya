"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[122],{19593:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Page; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(24047);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14557);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(39712);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(64698);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(62898);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(40507);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Loader/Loader.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Loadermodules = ({"loader":"loader___ByXzM","fullScreen":"fullScreen___eeL05","wrapper":"wrapper___CPniw","inner":"inner___e4ZQz","spinner":"spinner___sVfw4","text":"text___RSLx5","hidden":"hidden___RY1rR"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
;// CONCATENATED MODULE: ./src/components/Loader/Loader.jsx







var Loader = function Loader(_ref) {
  var _classNames;
  var _ref$spinning = _ref.spinning,
    spinning = _ref$spinning === void 0 ? false : _ref$spinning,
    fullScreen = _ref.fullScreen;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()(Loadermodules.loader, (_classNames = {}, defineProperty_default()(_classNames, Loadermodules.hidden, !spinning), defineProperty_default()(_classNames, Loadermodules.fullScreen, fullScreen), _classNames)),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Loadermodules.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: Loadermodules.inner
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: Loadermodules.text,
        children: "\\u52A0\\u8F7D\\u4E2D"
      })]
    })
  });
};
Loader.propTypes = {
  spinning: (prop_types_default()).bool,
  fullScreen: (prop_types_default()).bool
};
/* harmony default export */ var Loader_Loader = (Loader);
;// CONCATENATED MODULE: ./src/components/Page/Page.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Pagemodules = ({"contentInner":"contentInner___mxbv3"});
;// CONCATENATED MODULE: ./src/components/Page/Page.js












var Page = /*#__PURE__*/function (_Component) {
  inherits_default()(Page, _Component);
  var _super = createSuper_default()(Page);
  function Page() {
    classCallCheck_default()(this, Page);
    return _super.apply(this, arguments);
  }
  createClass_default()(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        _this$props$loading = _this$props.loading,
        loading = _this$props$loading === void 0 ? false : _this$props$loading,
        _this$props$inner = _this$props.inner,
        inner = _this$props$inner === void 0 ? false : _this$props$inner;
      var loadingStyle = {
        height: "calc(100vh - 184px)",
        overflow: "hidden"
      };
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(className, defineProperty_default()({}, Pagemodules.contentInner, inner)),
        style: loading ? loadingStyle : null,
        children: [loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(Loader_Loader, {
          spinning: true
        }) : "", children]
      });
    }
  }]);
  return Page;
}(react.Component);

Page.propTypes = {
  className: (prop_types_default()).string,
  children: (prop_types_default()).node,
  loading: (prop_types_default()).bool,
  inner: (prop_types_default()).bool
};

//# sourceURL=webpack:///./src/components/Page/Page.js_+_3_modules?`)},57800:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ $id; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14557);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(39712);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(64698);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(62898);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/path-to-regexp@6.2.1/node_modules/path-to-regexp/dist.es2015/index.js
var dist_es2015 = __webpack_require__(20388);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(40507);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(63539);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/button/index.js + 14 modules
var es_button = __webpack_require__(31972);
// EXTERNAL MODULE: ./src/components/Page/Page.js + 3 modules
var Page = __webpack_require__(19593);
;// CONCATENATED MODULE: ./src/pages/market/$id/index.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var $idmodules = ({"ui":"ui___pDGu0","layout__container":"layout__container___ZJkYM","header":"header___iYck4","header__background":"header__background___hBohi","header__content":"header__content___yTggA","header__content__body":"header__content__body___a2QSB","header__content__logo":"header__content__logo___cJ0tj","providedBy":"providedBy___qcGlL","providedLink":"providedLink___xTltb","header__content__description":"header__content__description___ONTIk","header__content__actions":"header__content__actions___nzOEY","jumpBar":"jumpBar___hF7m5","jumpBar__active":"jumpBar__active___Xi_Vb","jumpBar__tabs":"jumpBar__tabs___rK502","jumpBar__button":"jumpBar__button___q6xl3","content__container":"content__container___OIiOc","content__container__header":"content__container__header___rWEo5","content__container__main":"content__container__main___vmJkK"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
;// CONCATENATED MODULE: ./src/pages/market/$id/index.jsx













var MarketDetail = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(MarketDetail, _PureComponent);
  var _super = createSuper_default()(MarketDetail);
  function MarketDetail() {
    classCallCheck_default()(this, MarketDetail);
    return _super.apply(this, arguments);
  }
  createClass_default()(MarketDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        dispatch = _this$props.dispatch,
        location = _this$props.location;
      var match = (0,dist_es2015/* pathToRegexp */.Bo)("/market/:id").exec(location.pathname);
      console.log(match);
      if (match) {
        dispatch({
          type: "marketDetail/query",
          payload: {
            id: match[1]
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        marketDetail = _this$props2.marketDetail,
        loading = _this$props2.loading;
      var data = marketDetail.data;
      var isLoading = loading.effects["marketDetail/query"];
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default */.Z, {
        inner: true,
        isLoading: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: $idmodules.ui,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: $idmodules.header,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: $idmodules.header__background,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: $idmodules.layout__container,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
                  className: $idmodules.header__content,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: $idmodules.header__content__logo,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                      src: "https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/1676898362086.jpg",
                      alt: "\\u534E\\u6CF0\\u8BC1\\u5238"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: $idmodules.header__content__description,
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
                      children: data.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h5", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                        className: $idmodules.providedBy,
                        children: "Provided By:\\xA0"
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                        href: "/marketplace/seller-profile?id=1b3bcad1-0703-485b-ba73-e122fce8f979",
                        target: "_blank",
                        className: $idmodules.providedLink,
                        children: "\\u534E\\u6CF0"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                      children: data.brief
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: $idmodules.header__content__actions,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                      type: "primary",
                      danger: true,
                      onClick: function onClick() {
                        return _umi_production_exports.history.push("/".concat(data.category));
                      },
                      children: "\\u6388\\u6743"
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: $idmodules.jumpBar,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: $idmodules.layout__container,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
                  className: $idmodules.jumpBar__tabs,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
                    className: $idmodules.jumpBar__active,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                        className: $idmodules.jumpBar__button,
                        role: "tab",
                        "aria-selected": "false",
                        children: "\\u6982\\u8FF0"
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                        className: $idmodules.jumpBar__button,
                        role: "tab",
                        "aria-selected": "false",
                        children: "\\u6570\\u636E\\u96C6"
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                        className: $idmodules.jumpBar__button,
                        role: "tab",
                        "aria-selected": "false",
                        children: "\\u4F7F\\u7528\\u4FE1\\u606F"
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                        className: $idmodules.jumpBar__button,
                        role: "tab",
                        "aria-selected": "false",
                        children: "\\u652F\\u6301"
                      })
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                        className: $idmodules.jumpBar__button,
                        role: "tab",
                        "aria-selected": "false",
                        children: "\\u5408\\u7EA6"
                      })
                    })
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: $idmodules.content,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: $idmodules.layout__container,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: $idmodules.content__container,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: $idmodules.content__container__header,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
                  children: "\\u6982\\u8FF0"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: $idmodules.content__container__main,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: data.purpose
                  }
                })
              })]
            })
          })
        })]
      });
    }
  }]);
  return MarketDetail;
}(react.PureComponent);
MarketDetail.propTypes = {
  marketDetail: (prop_types_default()).object,
  location: (prop_types_default()).object,
  dispatch: (prop_types_default()).func,
  loading: (prop_types_default()).object
};
/* harmony default export */ var $id = ((0,_umi_production_exports.withRouter)((0,_umi_production_exports.connect)(function (_ref) {
  var marketDetail = _ref.marketDetail,
    loading = _ref.loading;
  return {
    marketDetail: marketDetail,
    loading: loading
  };
})(MarketDetail)));

//# sourceURL=webpack:///./src/pages/market/$id/index.jsx_+_1_modules?`)}}]);
