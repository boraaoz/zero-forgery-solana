"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Generate/Generate.tsx":
/*!**********************************************!*\
  !*** ./src/components/Generate/Generate.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/classnames */ \"./src/functions/classnames.ts\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Generate(param) {\n    var name = param.name, school = param.school, date = param.date, department = param.department, setShow = param.setShow, ID = param.ID;\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    [];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_functions_classnames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"absolute top-0 z-[100] left-0 w-full  h-screen bg-black bg-opacity-40\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-full items-center justify-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            setShow(false);\n                        },\n                        className: \"font-bold absolute z-[200] text-2xl text-black right-0 cursor-pointer top-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-8\",\n                            src: \"/x.svg\"\n                        }, void 0, false, {\n                            fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col text-lg font-bold text-black text-center absolute z-[200] top-6 left-44 space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative text-3xl\",\n                                children: [\n                                    \"CERTIFICATE\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-[110%] absolute left-[-8px] bg-black h-0.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"name\",\n                                children: [\n                                    \"Name: \",\n                                    name ? name : \"Mehmet Alacalı\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"school\",\n                                children: [\n                                    \"School: \",\n                                    school ? school : \"ODT\\xdc\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"date\",\n                                children: [\n                                    \"Date: \",\n                                    date ? date : \"22-01-17\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"department\",\n                                children: [\n                                    \"Department: \",\n                                    department ? department : \"EEE\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"id \",\n                                children: [\n                                    \"ID: \",\n                                    ID ? ID : \"ID\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        className: \"absolute bottom-[-25px] left-[38%] z-[200]\",\n                        ref: canvasRef\n                    }, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \" scale-125\",\n                        src: \"/certf.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/boraoz/Desktop/create-dapp-solana-nextjs-main/src/components/Generate/Generate.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this));\n}\n_s(Generate, \"hw7YJ5TVw+lAu0tRkzoDS8rL7/E=\");\n_c = Generate;\nvar _c;\n$RefreshReg$(_c, \"Generate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HZW5lcmF0ZS9HZW5lcmF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUNHOztTQVkxQ0csUUFBUSxDQUFDLEtBT0gsRUFBRSxDQUFDO1FBTmhCQyxJQUFJLEdBRFksS0FPSCxDQU5iQSxJQUFJLEVBQ0pDLE1BQU0sR0FGVSxLQU9ILENBTGJBLE1BQU0sRUFDTkMsSUFBSSxHQUhZLEtBT0gsQ0FKYkEsSUFBSSxFQUNKQyxVQUFVLEdBSk0sS0FPSCxDQUhiQSxVQUFVLEVBQ1ZDLE9BQU8sR0FMUyxLQU9ILENBRmJBLE9BQU8sRUFDUEMsRUFBRSxHQU5jLEtBT0gsQ0FEYkEsRUFBRTs7SUFFRixHQUFLLENBQUNDLFNBQVMsR0FBR1QsNkNBQU0sQ0FBb0IsSUFBSTtJQUNqRCxDQUFDLENBQUM7SUFFRCxNQUFNLDZFQUNIVSxDQUFHO1FBQ0ZDLFNBQVMsRUFBRVYsaUVBQVUsQ0FDbkIsQ0FBdUU7OEZBR3hFUyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUEwQztrR0FDdERELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFVOztnR0FDdEJELENBQUc7d0JBQ0ZFLE9BQU8sRUFBRSxRQUNyQixHQUQyQixDQUFDOzRCQUNkTCxPQUFPLENBQUMsS0FBSzt3QkFDZixDQUFDO3dCQUNESSxTQUFTLEVBQUMsQ0FBNkU7OEdBQ3RGRSxDQUFHOzRCQUFDRixTQUFTLEVBQUMsQ0FBSzs0QkFBQ0csR0FBRyxFQUFDLENBQVE7Ozs7Ozs7Ozs7O2dHQUdsQ0osQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWlHOzt3R0FDN0dELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFtQjs7b0NBQUMsQ0FFakM7Z0hBQUNELENBQUc7d0NBQUNDLFNBQVMsRUFBQyxDQUE4Qzs7Ozs7Ozs7Ozs7O3dHQUU5REQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQU07O29DQUFDLENBQU07b0NBQUNSLElBQUksR0FBR0EsSUFBSSxHQUFHLENBQWdCOzs7Ozs7O3dHQUN6RE8sQ0FBRTtnQ0FBQ0MsU0FBUyxFQUFDLENBQVE7O29DQUFDLENBQVE7b0NBQUNQLE1BQU0sR0FBR0EsTUFBTSxHQUFHLENBQU07Ozs7Ozs7d0dBQ3hETSxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBTTs7b0NBQUMsQ0FBTTtvQ0FBQ04sSUFBSSxHQUFHQSxJQUFJLEdBQUcsQ0FBVTs7Ozs7Ozt3R0FDcERLLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFZOztvQ0FBQyxDQUNkO29DQUFDTCxVQUFVLEdBQUdBLFVBQVUsR0FBRyxDQUFLOzs7Ozs7O3dHQUU3Q0ksQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQUs7O29DQUFDLENBQUk7b0NBQUNILEVBQUUsR0FBR0EsRUFBRSxHQUFHLENBQUk7Ozs7Ozs7Ozs7Ozs7Z0dBRXpDTyxDQUFNO3dCQUNMSixTQUFTLEVBQUMsQ0FBNkM7d0JBQ3ZESyxHQUFHLEVBQUVQLFNBQVM7Ozs7OztnR0FDZkksQ0FBRzt3QkFBQ0YsU0FBUyxFQUFDLENBQVk7d0JBQUNHLEdBQUcsRUFBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RELENBQUM7R0FoRFFaLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HZW5lcmF0ZS9HZW5lcmF0ZS50c3g/YTRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvY2xhc3NuYW1lc1wiO1xuXG4vL0B0cy1pZ25vcmVcbmludGVyZmFjZSBJQ2VydGlmaWNhdGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNjaG9vbDogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlcGFydG1lbnQ6IHN0cmluZztcbiAgSUQ6IHN0cmluZztcbiAgc2V0U2hvdzogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufVxuXG5mdW5jdGlvbiBHZW5lcmF0ZSh7XG4gIG5hbWUsXG4gIHNjaG9vbCxcbiAgZGF0ZSxcbiAgZGVwYXJ0bWVudCxcbiAgc2V0U2hvdyxcbiAgSUQsXG59OiBJQ2VydGlmaWNhdGUpIHtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgXCJhYnNvbHV0ZSB0b3AtMCB6LVsxMDBdIGxlZnQtMCB3LWZ1bGwgIGgtc2NyZWVuIGJnLWJsYWNrIGJnLW9wYWNpdHktNDBcIixcbiAgICAgICBcbiAgICAgICl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBhYnNvbHV0ZSB6LVsyMDBdIHRleHQtMnhsIHRleHQtYmxhY2sgcmlnaHQtMCBjdXJzb3ItcG9pbnRlciB0b3AtMFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LThcIiBzcmM9XCIveC5zdmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtbGcgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgYWJzb2x1dGUgei1bMjAwXSB0b3AtNiBsZWZ0LTQ0IHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICBDRVJUSUZJQ0FURVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzExMCVdIGFic29sdXRlIGxlZnQtWy04cHhdIGJnLWJsYWNrIGgtMC41XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+TmFtZToge25hbWUgPyBuYW1lIDogXCJNZWhtZXQgQWxhY2FsxLFcIn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nob29sXCI+U2Nob29sOiB7c2Nob29sID8gc2Nob29sIDogXCJPRFTDnFwifTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+RGF0ZToge2RhdGUgPyBkYXRlIDogXCIyMi0wMS0xN1wifTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXBhcnRtZW50XCI+XG4gICAgICAgICAgICAgIERlcGFydG1lbnQ6IHtkZXBhcnRtZW50ID8gZGVwYXJ0bWVudCA6IFwiRUVFXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWQgXCI+SUQ6IHtJRCA/IElEIDogXCJJRFwifTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1bLTI1cHhdICBsZWZ0LVszOCVdIHotWzIwMF1cIlxuICAgICAgICAgICAgcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiIHNjYWxlLTEyNVwiIHNyYz1cIi9jZXJ0Zi5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJjbGFzc25hbWVzIiwiR2VuZXJhdGUiLCJuYW1lIiwic2Nob29sIiwiZGF0ZSIsImRlcGFydG1lbnQiLCJzZXRTaG93IiwiSUQiLCJjYW52YXNSZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiY2FudmFzIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Generate/Generate.tsx\n");

/***/ })

});