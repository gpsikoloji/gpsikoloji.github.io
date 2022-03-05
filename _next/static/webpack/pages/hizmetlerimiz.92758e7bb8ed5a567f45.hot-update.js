self["webpackHotUpdate_N_E"]("pages/hizmetlerimiz",{

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
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,", " 18.77%,rgba(255,255,255,0.66) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "72px" : "67px";
}, function (props) {
  return props.theme.colors.headerText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJ3cmFwIiwibm9wYWRkaW5nIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJTZWN0aW9uVGl0bGUiLCJtYWluIiwiY29sb3JzIiwiaGVhZGVyVGV4dCIsIlNlY3Rpb25UZXh0IiwidGV4dFByaW1hcnkiLCJTZWN0aW9uRGl2aWRlciIsImNvbG9yQWx0IiwiZGl2aWRlciIsIlNlY3Rpb25TdWJUZXh0IiwiU2Vjb25kYXJ5QnRuIiwiQnV0dG9uQmFjayIsImFsdCIsImZvcm0iLCJkaXNhYmxlZCIsIkJ1dHRvbkZyb250IiwiTGlua0NvbnRhaW5lciIsImxhcmdlIiwiTGlua0ljb25JbWciLCJuYXYiLCJMaW5rIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSx5T0FDUCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBRE8sRUFFQSxVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRSxHQUFOLEdBQVksS0FBWixHQUFvQixRQUFoQztBQUFBLENBRkEsRUFHTCxVQUFDRixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRyxJQUFOLEdBQWEsTUFBYixHQUFzQixRQUFsQztBQUFBLENBSEssRUFJUCxVQUFDSCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDSSxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCLFdBQXBDO0FBQUEsQ0FKTyxFQVdULFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVhTLEVBZVQsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBZlMsRUFnQkwsVUFBQ1IsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0ksU0FBTixHQUFrQixHQUFsQixHQUF3QixXQUFwQztBQUFBLENBaEJLLENBQWI7QUFzQkEsSUFBTUssWUFBWSxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSxxZEFFVixVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDVSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBRlUsRUFHUixVQUFDVixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDVSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBSFEsRUFRbkIsVUFBQ1YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZTSxNQUFaLENBQW1CQyxVQUE5QjtBQUFBLENBUm1CLEVBY1osVUFBQ1osS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ1UsSUFBTixHQUFhLGFBQWIsR0FBNkIsR0FBekM7QUFBQSxDQWRZLEVBZ0JkLFVBQUNWLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQWhCYyxFQWlCUixVQUFDUCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDVSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBakJRLEVBa0JOLFVBQUNWLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNVLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWxDO0FBQUEsQ0FsQk0sRUFvQlYsVUFBQ1YsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ1UsSUFBTixHQUFhLGFBQWIsR0FBNkIsR0FBekM7QUFBQSxDQXBCVSxFQXVCZCxVQUFDVixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0F2QmMsRUEwQlIsVUFBQ1IsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ1UsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUFBbEM7QUFBQSxDQTFCUSxFQTJCTixVQUFDVixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDVSxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBM0JNLEVBNkJWLFVBQUNWLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNVLElBQU4sR0FBYSxZQUFiLEdBQTRCLEdBQXhDO0FBQUEsQ0E3QlUsQ0FBbEI7QUFrQ0EsSUFBTUcsV0FBVyxHQUFHZCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw0UEFNYixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlNLE1BQVosQ0FBbUJHLFdBQTlCO0FBQUEsQ0FOYSxFQVFiLFVBQUNkLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJhLEVBZWIsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBZmEsQ0FBakI7QUFzQkEsSUFBTU8sY0FBYyxHQUFHaEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEtBS1gsVUFBQ0MsS0FBRDtBQUFBLFNBQ1pBLEtBQUssQ0FBQ2dCLFFBQU4sR0FDSSxtREFESixHQUVJLG1EQUhRO0FBQUEsQ0FMVyxFQVVmLFVBQUNoQixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDaUIsT0FBTixHQUFnQixRQUFoQixHQUEyQixFQUF2QztBQUFBLENBVmUsRUFZaEIsVUFBQ2pCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVpnQixFQWlCaEIsVUFBQ1AsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBakJnQixDQUFwQjtBQXNCQSxJQUFNVSxjQUFjLEdBQUduQixtRUFBSDtBQUFBO0FBQUE7QUFBQSxnTkFPaEIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUGdCLEVBYWhCLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQWJnQixDQUFwQjtBQWtCQSxJQUFNVyxZQUFZLEdBQUdwQix3RUFBSDtBQUFBO0FBQUE7QUFBQSwwckJBK0JkLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQS9CYyxFQXdDZCxVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0F4Q2MsQ0FBbEI7QUFrREEsSUFBTVksVUFBVSxHQUFHckIscUVBQUg7QUFBQTtBQUFBO0FBQUEsK1lBQ1o7QUFBQSxNQUFHc0IsR0FBSCxRQUFHQSxHQUFIO0FBQUEsU0FBY0EsR0FBRyxHQUFHLE9BQUgsR0FBYSxPQUE5QjtBQUFBLENBRFksRUFFWDtBQUFBLE1BQUdBLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBN0I7QUFBQSxDQUZXLEVBSVI7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0FKUSxFQVNYO0FBQUEsTUFBR0EsR0FBSCxTQUFHQSxHQUFIO0FBQUEsTUFBUUMsSUFBUixTQUFRQSxJQUFSO0FBQUEsU0FBb0JELEdBQUcsSUFBSUMsSUFBUCxHQUFjLEdBQWQsR0FBb0IsVUFBeEM7QUFBQSxDQVRXLEVBV1A7QUFBQSxNQUFHRCxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUNaQSxHQUFHLEdBQ0MsbURBREQsR0FFQyxtREFIUTtBQUFBLENBWE8sRUFtQlY7QUFBQSxNQUFHRSxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFtQkEsUUFBUSxHQUFHLElBQUgsR0FBVSxHQUFyQztBQUFBLENBbkJVLEVBcUJaLFVBQUN2QixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FyQlksRUFzQlY7QUFBQSxNQUFHYyxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsT0FBSCxHQUFhLE9BQTlCO0FBQUEsQ0F0QlUsRUF1QlQ7QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0F2QlMsRUF3Qk47QUFBQSxNQUFHQSxHQUFILFNBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0F4Qk0sRUF5QkY7QUFBQSxNQUFHQSxHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsR0FBSCxHQUFTLE1BQTFCO0FBQUEsQ0F6QkUsRUE0QlosVUFBQ3JCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQTVCWSxFQWdDRjtBQUFBLE1BQUdhLEdBQUgsVUFBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxHQUFILEdBQVMsTUFBMUI7QUFBQSxDQWhDRSxDQUFoQjtBQW9DQSxJQUFNRyxXQUFXLEdBQUd6Qix3RUFBSDtBQUFBO0FBQUE7QUFBQSxvb0JBVVI7QUFBQSxNQUFHc0IsR0FBSCxVQUFHQSxHQUFIO0FBQUEsU0FDWkEsR0FBRyxHQUNDLG1EQURELEdBRUMsbURBSFE7QUFBQSxDQVZRLEVBY1g7QUFBQSxNQUFHRSxRQUFILFVBQUdBLFFBQUg7QUFBQSxTQUFtQkEsUUFBUSxHQUFHLElBQUgsR0FBVSxHQUFyQztBQUFBLENBZFcsRUFnQlQ7QUFBQSxNQUFHRixHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0FoQlMsRUFxQlI7QUFBQSxNQUFHRSxRQUFILFVBQUdBLFFBQUg7QUFBQSxTQUNaQSxRQUFRLEdBQ0osbUZBREksR0FFSixNQUhRO0FBQUEsQ0FyQlEsRUE2Q2IsVUFBQ3ZCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQTdDYSxFQThDUDtBQUFBLE1BQUdjLEdBQUgsVUFBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBN0I7QUFBQSxDQTlDTyxFQWlEYixVQUFDckIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBakRhLENBQWpCO0FBc0RBLElBQU1pQixhQUFhLEdBQUcxQixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1T0FDVDtBQUFBLE1BQUcyQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFnQkEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUFqQztBQUFBLENBRFMsRUFhZixVQUFDMUIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBYmUsRUFjUDtBQUFBLE1BQUdtQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFnQkEsS0FBSyxHQUFHLE1BQUgsR0FBWSxLQUFqQztBQUFBLENBZE8sRUFnQmYsVUFBQzFCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQWhCZSxFQWlCUDtBQUFBLE1BQUdrQixLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFnQkEsS0FBSyxHQUFHLEdBQUgsR0FBUyxLQUE5QjtBQUFBLENBakJPLENBQW5CO0FBcUJBLElBQU1DLFdBQVcsR0FBRzVCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUVaO0FBQUEsTUFBRzJCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQWpDO0FBQUEsQ0FGWSxFQUliLFVBQUMxQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FKYSxFQUtWO0FBQUEsTUFBR3FCLEdBQUgsVUFBR0EsR0FBSDtBQUFBLFNBQWNBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFBN0I7QUFBQSxDQUxVLEVBUWIsVUFBQzVCLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQVJhLEVBU1Y7QUFBQSxNQUFHa0IsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZ0JBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBakM7QUFBQSxDQVRVLENBQWpCO0FBYUEsSUFBTUcsSUFBSSxHQUFHOUIsbUVBQUg7QUFBQTtBQUFBO0FBQUEsb0JBQ04sVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ssS0FBTixDQUFZTSxNQUFaLENBQW1CbUIsSUFBOUI7QUFBQSxDQURNLENBQVYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGl6bWV0bGVyaW1pei45Mjc1OGU3YmI4ZWQ1YTU2N2Y0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIil9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiKX07XHJcbiAgZmxleC13cmFwOiAkeyhwcm9wcykgPT4gKHByb3BzLndyYXAgPyBcIndyYXBcIiA6IFwibm93cmFwXCIpfTtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIzMnB4IDQ4cHhcIil9O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMjRweCA0OHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4XCIpfTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjY1cHhcIiA6IFwiNTZweFwiKX07XHJcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNzJweFwiIDogXCI2N3B4XCIpfTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEyMS41N2RlZyxcclxuICAgICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuaGVhZGVyVGV4dH0gMTguNzclLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSA2MC4xNSVcclxuICApO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNThweCAwIDE2cHhcIiA6IFwiMFwiKX07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNTZweFwiIDogXCI0OHB4XCIpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjQwcHggMCAxMnB4XCIgOiBcIjBcIil9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMjhweFwiIDogXCIzMnB4XCIpfTtcclxuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjMycHhcIiA6IFwiNDBweFwiKX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjE2cHggMCA4cHhcIiA6IFwiMFwiKX07XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UZXh0ID0gc3R5bGVkLnBgXHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy42cmVtO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHRQcmltYXJ5fTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuY29sb3JBbHRcclxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSlcIlxyXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcclxuXHJcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIil9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzBmMTYyNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTRlYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMDQxNjk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxyXG4gICAgICBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIxNTBweFwiIDogXCIyNjJweFwiKX07XHJcbiAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCI1MnB4XCIgOiBcIjY0cHhcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjI0cHhcIil9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtID8gXCIwXCIgOiBcIjAgMCA4MHB4XCIpfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PlxyXG4gICAgYWx0XHJcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpXCJcclxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSlcIn07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/IFwiLjVcIiA6IFwiMVwiKX07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIxNTBweFwiIDogXCIxODRweFwiKX07XHJcbiAgICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNDhweFwiKX07XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMTZweFwiKX07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIwXCIgOiBcIjY0cHhcIil9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIwXCIgOiBcIjMycHhcIil9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XHJcbiAgICBhbHRcclxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSlcIlxyXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcclxuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/IFwiLjVcIiA6IFwiMVwiKX07XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIyNHB4XCIpfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT5cclxuICAgIGRpc2FibGVkXHJcbiAgICAgID8gXCJpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMylcIlxyXG4gICAgICA6IFwibm9uZVwifTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxyXG4gICAgICBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMGRiZDggMCUsICNiMTMzZmYgMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxyXG4gICAgICBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMTZweFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMjRweFwiIDogXCIxNnB4XCIpfTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMTZweFwiIDogXCI4cHhcIil9O1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyBcIjBcIiA6IFwiOHB4XCIpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0ljb25JbWcgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMzJweFwiIDogXCIyNHB4XCIpfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IG5hdiB9KSA9PiAobmF2ID8gXCIxNnB4XCIgOiBcIjI0cHhcIil9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgaGVpZ2h0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMzJweFwiIDogXCIxNnB4XCIpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGluayA9IHN0eWxlZC5hYFxyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpbmt9O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9