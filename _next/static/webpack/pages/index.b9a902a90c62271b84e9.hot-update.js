self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; },
/* harmony export */   "Link": function() { return /* binding */ Link; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";flex-wrap:", ";padding:", ";margin:0 auto;max-width:1040px;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px;}@media ", "{padding:", ";width:100%;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.wrap ? "wrap" : "nowrap";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,", " 18.77%,", " 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "72px" : "67px";
}, function (props) {
  return props.theme.colors.headerText;
}, function (props) {
  return props.theme.colors.headerText2;
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:", ";@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.colors.textPrimary;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? "24px" : "16px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? "16px" : "8px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? "0" : "8px";
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? "32px" : "24px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? "16px" : "24px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? "32px" : "16px";
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "GlobalComponents__Link",
  componentId: "sc-6qzy6y-10"
})(["color:", ";"], function (props) {
  return props.theme.colors.link;
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJ3cmFwIiwibm9wYWRkaW5nIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJTZWN0aW9uVGl0bGUiLCJtYWluIiwiY29sb3JzIiwiaGVhZGVyVGV4dCIsImhlYWRlclRleHQyIiwiU2VjdGlvblRleHQiLCJ0ZXh0UHJpbWFyeSIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiIsIkxpbmsiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLHlPQUNQLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWxDO0FBQUEsQ0FETyxFQUVBLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQWhDO0FBQUEsQ0FGQSxFQUdMLFVBQUNGLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLElBQU4sR0FBYSxNQUFiLEdBQXNCLFFBQWxDO0FBQUEsQ0FISyxFQUlQLFVBQUNILEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNJLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsV0FBcEM7QUFBQSxDQUpPLEVBV1QsVUFBQ0osS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFu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LENBQW5CO0FBcUJBLElBQU1DLFdBQVcsR0FBRzdCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaO0FBQUEsTUFBRzRCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQWpDO0FBQUEsQ0FGWSxFQUliLFVBQUMzQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FKYSxFQUtWO0FBQUEsTUFBR3NCLEdBQUgsVUFBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBN0I7QUFBQSxDQUxVLEVBUWIsVUFBQzdCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQVJhLEVBU1Y7QUFBQSxNQUFHbUIsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZ0JBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBakM7QUFBQSxDQVRVLENBQWpCO0FBYUEsSUFBTUcsSUFBSSxHQUFHL0IsbUVBQUg7QUFBQTtBQUFBO0FBQUEsb0JBQ04sVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZTSxNQUFaLENBQW1Cb0IsSUFBOUI7QUFBQSxDQURNLENBQVYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjlhOTAyYTkwYzYyMjcxYjg0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuZ3JpZCA/IFwiZ3JpZFwiIDogXCJmbGV4XCIpfTtcclxuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IChwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIil9O1xyXG4gIGZsZXgtd3JhcDogJHsocHJvcHMpID0+IChwcm9wcy53cmFwID8gXCJ3cmFwXCIgOiBcIm5vd3JhcFwiKX07XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4XCIpfTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDI0cHggNDhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweFwiKX07XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI2NXB4XCIgOiBcIjU2cHhcIil9O1xyXG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjcycHhcIiA6IFwiNjdweFwiKX07XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxMjEuNTdkZWcsXHJcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhlYWRlclRleHR9IDE4Ljc3JSxcclxuICAgICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuaGVhZGVyVGV4dDJ9IDYwLjE1JVxyXG4gICk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1OHB4IDAgMTZweFwiIDogXCIwXCIpfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjU2cHhcIiA6IFwiNDhweFwiKX07XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNDBweCAwIDEycHhcIiA6IFwiMFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIyOHB4XCIgOiBcIjMycHhcIil9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMzJweFwiIDogXCI0MHB4XCIpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMTZweCAwIDhweFwiIDogXCIwXCIpfTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dFByaW1hcnl9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5jb2xvckFsdFxyXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXHJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJ9O1xyXG5cclxuICBtYXJnaW46ICR7KHByb3BzKSA9PiAocHJvcHMuZGl2aWRlciA/IFwiNHJlbSAwXCIgOiBcIlwiKX07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25TdWJUZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGYxNjI0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjI2MnB4XCIpfTtcclxuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNjRweFwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMjRweFwiKX07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0gPyBcIjBcIiA6IFwiMCAwIDgwcHhcIil9O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XHJcbiAgICBhbHRcclxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSlcIlxyXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKVwifTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjE4NHB4XCIpfTtcclxuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI0OHB4XCIpfTtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiNjRweFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiMzJweFwiKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT5cclxuICAgIGFsdFxyXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXHJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJ9O1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjI0cHhcIil9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PlxyXG4gICAgZGlzYWJsZWRcclxuICAgICAgPyBcImluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKVwiXHJcbiAgICAgIDogXCJub25lXCJ9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwZGJkOCAwJSwgI2IxMzNmZiAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIyNHB4XCIgOiBcIjE2cHhcIil9O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIxNnB4XCIgOiBcIjhweFwiKX07XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMFwiIDogXCI4cHhcIil9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjI0cHhcIil9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IChuYXYgPyBcIjE2cHhcIiA6IFwiMjRweFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjE2cHhcIil9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlua307XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=