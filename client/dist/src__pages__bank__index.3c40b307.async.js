"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[503],{19593:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
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

//# sourceURL=webpack:///./src/components/Page/Page.js_+_3_modules?`)},83259:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ bank; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(58357);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(71977);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14557);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(39712);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(89617);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(64698);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(62898);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.7/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(24047);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(63539);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(40507);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/button/index.js + 14 modules
var es_button = __webpack_require__(31972);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/antd/es/select/index.js + 138 modules
var es_select = __webpack_require__(62085);
// EXTERNAL MODULE: ./src/components/Page/Page.js + 3 modules
var Page = __webpack_require__(19593);
;// CONCATENATED MODULE: ./src/pages/bank/index.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var bankmodules = ({"bank-table-header":"bank-table-header___Ud6Bb","bank-header":"bank-header___OU4GL","nft-box":"nft-box___bpvHa","nft-container":"nft-container___gwT1R","nft-item":"nft-item___LOMg3","contractList":"contractList___t80pc","nftAction":"nftAction___kWTV4"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
;// CONCATENATED MODULE: ./src/pages/bank/index.jsx


















var Bank = /*#__PURE__*/function (_PureComponent) {
  inherits_default()(Bank, _PureComponent);
  var _super = createSuper_default()(Bank);
  function Bank() {
    var _this;
    classCallCheck_default()(this, Bank);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    defineProperty_default()(assertThisInitialized_default()(_this), "mintNFT", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var dispatch;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch = _this.props.dispatch;
            _context.next = 3;
            return dispatch({
              type: "bank/mintNFT"
            });
          case 3:
            dispatch({
              type: "bank/queryNftBalance"
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    defineProperty_default()(assertThisInitialized_default()(_this), "handleChange", /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(value) {
        var _this$props, bank, dispatch, contractDemands, selectDemand;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this$props = _this.props, bank = _this$props.bank, dispatch = _this$props.dispatch;
              contractDemands = bank.contractDemands;
              selectDemand = contractDemands.find(function (item) {
                return item.demand_id === value;
              }); // \u4F7F\u7528 await \u4FDD\u8BC1\u5148\u6267\u884C\u540E\u672C\u6B21\u5206\u53D1\u540E\u518D\u6267\u884C\u7B2C\u4E8C\u6B21 dispatch
              _context2.next = 5;
              return dispatch({
                type: "bank/updateState",
                payload: {
                  selectDemand: selectDemand
                }
              });
            case 5:
              dispatch({
                type: "bank/queryNftBalance"
              });
              dispatch({
                type: "bank/getTransferHistory"
              });
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    return _this;
  }
  createClass_default()(Bank, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
        dispatch = _this$props2.dispatch,
        location = _this$props2.location,
        marketDetail = _this$props2.marketDetail;
      var data = marketDetail.data;
      // \u67E5\u8BE2\u94F6\u884C\u6570\u636E
      dispatch({
        type: "bank/query"
      });
      // \u67E5\u8BE2\u5F53\u524D\u5206\u7C7B\u4E0B\u7684\u53EF\u9009\u62E9\u7684\u5408\u7EA6\u5217\u8868
      dispatch({
        type: "bank/queryContracts",
        payload: {
          category: location.pathname.replace(/\\//g, ""),
          current_demand_id: data.demand_id
        }
      });

      // \u68C0\u67E5\u662F\u5426\u8FDE\u63A5\u4E86\u94B1\u5305
      dispatch({
        type: "bank/checkIfWalletConnected"
      });
      // \u5982\u679C\u9009\u62E9\u4E86\u5408\u7EA6\uFF0C\u5219\u67E5\u8BE2NFT\u4F59\u989D
      dispatch({
        type: "bank/queryNftBalance"
      });
      // \u67E5\u8BE2transfer\u8BB0\u5F55
      dispatch({
        type: "bank/getTransferHistory"
      });
    }
  }, {
    key: "connectWallet",
    value: function connectWallet() {
      var dispatch = this.props.dispatch;
      dispatch({
        type: "bank/connectWallet"
      });
      // todo\uFF1A\u63D0\u793A\u4FE1\u606F
    }
  }, {
    key: "transferNFT",
    value: function () {
      var _transferNFT = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        var dispatch;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              dispatch = this.props.dispatch;
              _context3.next = 3;
              return dispatch({
                type: "bank/transferNFT"
              });
            case 3:
              console.log("\u6388\u6743NFT\u7ED9\u9700\u6C42\u65B9\u4F7F\u7528");
              dispatch({
                type: "bank/watchTransfers"
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function transferNFT() {
        return _transferNFT.apply(this, arguments);
      }
      return transferNFT;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        bank = _this$props3.bank,
        loading = _this$props3.loading,
        dispatch = _this$props3.dispatch;
      var isLoading = loading.effects["bank/query"] && loading.effects["bank/queryContracts"];
      var list = bank.list,
        account = bank.account,
        balance = bank.balance,
        contractDemands = bank.contractDemands;
      var renderBankData = function renderBankData() {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "bank-header",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
              children: "\\u6211\\u7684\\u94F6\\u884C\\u6570\\u636E"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "bank-container",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
              className: "bank-table",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                  className: "bank-table-header",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: "\\u8D26\\u6237"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: "\\u59D3\\u540D"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: "\\u94F6\\u884C"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                    children: "\\u4F59\\u989D"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
                children: list.map(function (item, idx) {
                  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: item.account
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: item.name
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: item.bank
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                      children: item.balance
                    })]
                  }, idx);
                })
              })]
            })
          })]
        });
      };
      var renderMintNFT = function renderMintNFT() {
        var bank = _this2.props.bank;
        var selectDemand = bank.selectDemand,
          transferRecords = bank.transferRecords;
        console.log("renderMintNFT.bank=", bank);
        if (account && selectDemand.contract) {
          if (balance > 0) {
            // \u5DF2\u7ECFmint\u8FC7nft\u4E86
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                  children: "\\u63D0\\u793A\\uFF1A"
                }), "\\u4F60\\u5DF2\\u7ECF\\u5C06\\u94F6\\u884C\\u6570\\u636EMint\\u6210\\u4E86NFT\\uFF0C\\u73B0\\u5728\\u53EF\\u4EE5\\u5C06\\u4F60\\u7684NFT\\u6388\\u6743\\u7ED9\\u9700\\u6C42\\u65B9\\u4F7F\\u7528\\u3002", " "]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                type: "primary",
                danger: true,
                onClick: function onClick() {
                  _this2.transferNFT();
                },
                children: "\\u6388\\u6743\\u4F7F\\u7528"
              })]
            });
          } else if (transferRecords.length > 0) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
                  children: "\\u63D0\\u793A\\uFF1A"
                }), "\\u4F60\\u5DF2\\u7ECF\\u5C06\\u4F60\\u7684NFT\\u8D44\\u4EA7\\u6388\\u6743\\u7ED9\\u9700\\u6C42\\u653E\\u4E86\\uFF0C\\u5F53\\u9700\\u6C42\\u65B9\\u4F7F\\u7528\\u5B8C\\u6210\\u540E\\uFF0C\\u4F60\\u53EF\\u4EE5\\u5728\\u300E\\u5408\\u7EA6\\u7BA1\\u7406\\u300F\\u9875\\u9762\\u8FDB\\u884C\\u8D4E\\u56DE\\u64CD\\u4F5C\\u3002"]
              })
            });
          }
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            danger: true,
            onClick: function onClick() {
              _this2.mintNFT();
            },
            children: "Mint NFT"
          });
        }
      };
      var renderMarketContracts = function renderMarketContracts() {
        var _this2$props = _this2.props,
          marketDetail = _this2$props.marketDetail,
          dispatch = _this2$props.dispatch;
        var data = marketDetail.data;
        if (!contractDemands) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "\\u6682\\u65E0\\u53EF\\u7528\\u7684\\u9700\\u6C42"
          });
        }
        var options = contractDemands.map(function (item) {
          return {
            value: item.demand_id,
            label: item.name
          };
        });
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "\\u9700\\u6C42\\uFF1A"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            placeholder: "\\u8BF7\\u5148\\u9009\\u62E9\\u4E00\\u4E2A\\u9700\\u6C42",
            defaultValue: data.demand_id,
            style: {
              width: 240
            },
            options: options,
            onChange: _this2.handleChange
          })]
        });
      };
      var renderNFTAction = function renderNFTAction() {
        if (!account) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            onClick: function onClick() {
              return _this2.connectWallet();
            },
            children: "\\u8FDE\\u63A5\\u94B1\\u5305"
          });
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
            className: "nft-box",
            children: ["\\u94B1\\u5305\\u5730\\u5740\\uFF1A", /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
              children: account
            })]
          })
        });
      };
      var renderRecords = function renderRecords() {
        var bank = _this2.props.bank;
        var transferRecords = bank.transferRecords;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Transaction Hash"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "TokenID"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "From"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "To"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Age"
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: transferRecords.map(function (tx) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: tx.hash
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: tx.tokenID
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: tx.from
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: tx.to
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: tx.timestamp
                })]
              }, tx.hash);
            })
          })]
        });
      };
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
        inner: true,
        loading: isLoading,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bank-list",
          children: [renderBankData(), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: bankmodules.nftAction,
            children: renderNFTAction()
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: bankmodules.contractList,
            children: renderMarketContracts()
          }), renderMintNFT()]
        })
      });
    }
  }]);
  return Bank;
}(react.PureComponent);
Bank.propTypes = {
  bank: (prop_types_default()).object,
  marketDetail: (prop_types_default()).object,
  location: (prop_types_default()).object,
  dispatch: (prop_types_default()).func,
  loading: (prop_types_default()).object
};
/* harmony default export */ var bank = ((0,_umi_production_exports.withRouter)((0,_umi_production_exports.connect)(function (_ref3) {
  var marketDetail = _ref3.marketDetail,
    bank = _ref3.bank,
    loading = _ref3.loading;
  return {
    marketDetail: marketDetail,
    bank: bank,
    loading: loading
  };
})(Bank)));

//# sourceURL=webpack:///./src/pages/bank/index.jsx_+_1_modules?`)}}]);
