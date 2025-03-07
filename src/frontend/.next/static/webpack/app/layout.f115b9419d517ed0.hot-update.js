"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/layout/NavbarLinks.tsx":
/*!*******************************************!*\
  !*** ./components/layout/NavbarLinks.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAuth */ \"(app-pages-browser)/./hooks/useAuth.ts\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Button */ \"(app-pages-browser)/./components/ui/Button.tsx\");\n// components/layout/NavbarLinks.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavbarLinks = ()=>{\n    _s();\n    const { isAuthenticated, user, logout } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    // Determinar en qué página estamos\n    const isHomePage = pathname === \"/\" || pathname === \"\";\n    const isDashboardPage = pathname === \"/dashboard\";\n    const isLoginPage = pathname === \"/login\";\n    const isSignupPage = pathname === \"/signup\";\n    // Efecto para debug\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"NavbarLinks.useEffect\": ()=>{\n            console.log(\"NavbarLinks - Render con:\", {\n                isAuthenticated,\n                pathname\n            });\n        }\n    }[\"NavbarLinks.useEffect\"], [\n        isAuthenticated,\n        pathname\n    ]);\n    /**\r\n   * Renderiza la navegación según el estado de autenticación y la página actual\r\n   */ const renderNavigation = ()=>{\n        // Usuario no autenticado\n        if (!isAuthenticated) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    !isHomePage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: \"transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white\",\n                        children: \"Inicio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    !isLoginPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        className: \"transition-all ease-smooth hover:scale-hover\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"outline\",\n                            size: \"sm\",\n                            children: \"Iniciar Sesi\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    !isSignupPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/signup\",\n                        className: \"transition-all ease-smooth hover:scale-hover\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"primary\",\n                            size: \"sm\",\n                            children: \"Registrarse\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n        // Usuario autenticado en la página principal\n        if (isHomePage) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-800 dark:text-white font-medium\",\n                        children: [\n                            \"Hola \",\n                            user === null || user === void 0 ? void 0 : user.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/dashboard\",\n                        className: \"transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white\",\n                        children: \"\\xc1rea Privada\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        onClick: ()=>{\n                            console.log(\"Click en Cerrar Sesión\");\n                            logout();\n                        },\n                        className: \"transition-all ease-smooth hover:scale-hover\",\n                        children: \"Cerrar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n        // Usuario autenticado en el dashboard\n        if (isDashboardPage) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-800 dark:text-white font-medium\",\n                        children: [\n                            \"Hola \",\n                            user === null || user === void 0 ? void 0 : user.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        className: \"transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white\",\n                        children: \"Inicio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"outline\",\n                        size: \"sm\",\n                        onClick: ()=>{\n                            console.log(\"Click en Cerrar Sesión\");\n                            logout();\n                        },\n                        className: \"transition-all ease-smooth hover:scale-hover\",\n                        children: \"Cerrar Sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n        // Usuario autenticado en otras páginas (login, signup, etc.)\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-gray-800 dark:text-white font-medium\",\n                    children: [\n                        \"Hola \",\n                        user === null || user === void 0 ? void 0 : user.username\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white\",\n                    children: \"Inicio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined),\n                !isDashboardPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/dashboard\",\n                    className: \"transition-all ease-smooth hover:scale-hover text-gray-800 dark:text-white\",\n                    children: \"\\xc1rea Privada\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"outline\",\n                    size: \"sm\",\n                    onClick: ()=>{\n                        console.log(\"Click en Cerrar Sesión\");\n                        logout();\n                    },\n                    className: \"transition-all ease-smooth hover:scale-hover\",\n                    children: \"Cerrar Sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:flex items-center space-x-6\",\n        children: renderNavigation()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nelson\\\\Desktop\\\\PROYECTOS\\\\starter-template\\\\src\\\\frontend\\\\components\\\\layout\\\\NavbarLinks.tsx\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavbarLinks, \"qK8e8GcmwIZAFZKdF/Rq4QAR8cE=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__.useAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavbarLinks;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarLinks);\nvar _c;\n$RefreshReg$(_c, \"NavbarLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhckxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7OztBQUdLO0FBQ1o7QUFDaUI7QUFDQTtBQUNaO0FBRWxDLE1BQU1NLGNBQXdCOztJQUM1QixNQUFNLEVBQUVDLGVBQWUsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBR0wsdURBQU9BO0lBQ2pELE1BQU1NLFdBQVdQLDREQUFXQTtJQUU1QixtQ0FBbUM7SUFDbkMsTUFBTVEsYUFBYUQsYUFBYSxPQUFPQSxhQUFhO0lBQ3BELE1BQU1FLGtCQUFrQkYsYUFBYTtJQUNyQyxNQUFNRyxjQUFjSCxhQUFhO0lBQ2pDLE1BQU1JLGVBQWVKLGFBQWE7SUFFbEMsb0JBQW9CO0lBQ3BCVCxnREFBU0E7aUNBQUM7WUFDUmMsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QjtnQkFBRVQ7Z0JBQWlCRztZQUFTO1FBQ3ZFO2dDQUFHO1FBQUNIO1FBQWlCRztLQUFTO0lBRTlCOztHQUVDLEdBQ0QsTUFBTU8sbUJBQW1CO1FBQ3ZCLHlCQUF5QjtRQUN6QixJQUFJLENBQUNWLGlCQUFpQjtZQUNwQixxQkFDRTs7b0JBRUcsQ0FBQ0ksNEJBQ0EsOERBQUNULGtEQUFJQTt3QkFBQ2dCLE1BQUs7d0JBQUlDLFdBQVU7a0NBQTZFOzs7Ozs7b0JBTXZHLENBQUNOLDZCQUNBLDhEQUFDWCxrREFBSUE7d0JBQUNnQixNQUFLO3dCQUFTQyxXQUFVO2tDQUM1Qiw0RUFBQ2Qsa0RBQU1BOzRCQUFDZSxTQUFROzRCQUFVQyxNQUFLO3NDQUFLOzs7Ozs7Ozs7OztvQkFLdkMsQ0FBQ1AsOEJBQ0EsOERBQUNaLGtEQUFJQTt3QkFBQ2dCLE1BQUs7d0JBQVVDLFdBQVU7a0NBQzdCLDRFQUFDZCxrREFBTUE7NEJBQUNlLFNBQVE7NEJBQVVDLE1BQUs7c0NBQUs7Ozs7Ozs7Ozs7Ozs7UUFLOUM7UUFFQSw2Q0FBNkM7UUFDN0MsSUFBSVYsWUFBWTtZQUNkLHFCQUNFOztrQ0FFRSw4REFBQ1c7d0JBQUtILFdBQVU7OzRCQUE0Qzs0QkFDcERYLGlCQUFBQSwyQkFBQUEsS0FBTWUsUUFBUTs7Ozs7OztrQ0FJdEIsOERBQUNyQixrREFBSUE7d0JBQUNnQixNQUFLO3dCQUFhQyxXQUFVO2tDQUE2RTs7Ozs7O2tDQUsvRyw4REFBQ2Qsa0RBQU1BO3dCQUNMZSxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMRyxTQUFTOzRCQUNQVCxRQUFRQyxHQUFHLENBQUM7NEJBQ1pQO3dCQUNGO3dCQUNBVSxXQUFVO2tDQUNYOzs7Ozs7OztRQUtQO1FBRUEsc0NBQXNDO1FBQ3RDLElBQUlQLGlCQUFpQjtZQUNuQixxQkFDRTs7a0NBRUUsOERBQUNVO3dCQUFLSCxXQUFVOzs0QkFBNEM7NEJBQ3BEWCxpQkFBQUEsMkJBQUFBLEtBQU1lLFFBQVE7Ozs7Ozs7a0NBSXRCLDhEQUFDckIsa0RBQUlBO3dCQUFDZ0IsTUFBSzt3QkFBSUMsV0FBVTtrQ0FBNkU7Ozs7OztrQ0FLdEcsOERBQUNkLGtEQUFNQTt3QkFDTGUsU0FBUTt3QkFDUkMsTUFBSzt3QkFDTEcsU0FBUzs0QkFDUFQsUUFBUUMsR0FBRyxDQUFDOzRCQUNaUDt3QkFDRjt3QkFDQVUsV0FBVTtrQ0FDWDs7Ozs7Ozs7UUFLUDtRQUVBLDZEQUE2RDtRQUM3RCxxQkFDRTs7OEJBRUUsOERBQUNHO29CQUFLSCxXQUFVOzt3QkFBNEM7d0JBQ3BEWCxpQkFBQUEsMkJBQUFBLEtBQU1lLFFBQVE7Ozs7Ozs7OEJBSXRCLDhEQUFDckIsa0RBQUlBO29CQUFDZ0IsTUFBSztvQkFBSUMsV0FBVTs4QkFBNkU7Ozs7OztnQkFLckcsQ0FBQ1AsaUNBQ0EsOERBQUNWLGtEQUFJQTtvQkFBQ2dCLE1BQUs7b0JBQWFDLFdBQVU7OEJBQTZFOzs7Ozs7OEJBTWpILDhEQUFDZCxrREFBTUE7b0JBQ0xlLFNBQVE7b0JBQ1JDLE1BQUs7b0JBQ0xHLFNBQVM7d0JBQ1BULFFBQVFDLEdBQUcsQ0FBQzt3QkFDWlA7b0JBQ0Y7b0JBQ0FVLFdBQVU7OEJBQ1g7Ozs7Ozs7O0lBS1A7SUFFQSxxQkFDRSw4REFBQ007UUFBSU4sV0FBVTtrQkFDWkY7Ozs7OztBQUdQO0dBcEpNWDs7UUFDc0NGLG1EQUFPQTtRQUNoQ0Qsd0RBQVdBOzs7S0FGeEJHO0FBc0pOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE5lbHNvblxcRGVza3RvcFxcUFJPWUVDVE9TXFxzdGFydGVyLXRlbXBsYXRlXFxzcmNcXGZyb250ZW5kXFxjb21wb25lbnRzXFxsYXlvdXRcXE5hdmJhckxpbmtzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2xheW91dC9OYXZiYXJMaW5rcy50c3hcclxuXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91aS9CdXR0b25cIjtcclxuXHJcbmNvbnN0IE5hdmJhckxpbmtzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIFxyXG4gIC8vIERldGVybWluYXIgZW4gcXXDqSBww6FnaW5hIGVzdGFtb3NcclxuICBjb25zdCBpc0hvbWVQYWdlID0gcGF0aG5hbWUgPT09IFwiL1wiIHx8IHBhdGhuYW1lID09PSBcIlwiO1xyXG4gIGNvbnN0IGlzRGFzaGJvYXJkUGFnZSA9IHBhdGhuYW1lID09PSBcIi9kYXNoYm9hcmRcIjtcclxuICBjb25zdCBpc0xvZ2luUGFnZSA9IHBhdGhuYW1lID09PSBcIi9sb2dpblwiO1xyXG4gIGNvbnN0IGlzU2lnbnVwUGFnZSA9IHBhdGhuYW1lID09PSBcIi9zaWdudXBcIjtcclxuXHJcbiAgLy8gRWZlY3RvIHBhcmEgZGVidWdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJOYXZiYXJMaW5rcyAtIFJlbmRlciBjb246XCIsIHsgaXNBdXRoZW50aWNhdGVkLCBwYXRobmFtZSB9KTtcclxuICB9LCBbaXNBdXRoZW50aWNhdGVkLCBwYXRobmFtZV0pO1xyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJpemEgbGEgbmF2ZWdhY2nDs24gc2Vnw7puIGVsIGVzdGFkbyBkZSBhdXRlbnRpY2FjacOzbiB5IGxhIHDDoWdpbmEgYWN0dWFsXHJcbiAgICovXHJcbiAgY29uc3QgcmVuZGVyTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIFVzdWFyaW8gbm8gYXV0ZW50aWNhZG9cclxuICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiBJbmljaW8gLSBzb2xvIG1vc3RyYXIgc2kgTk8gZXN0YW1vcyBlbiBsYSBww6FnaW5hIHByaW5jaXBhbCAqL31cclxuICAgICAgICAgIHshaXNIb21lUGFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZWFzZS1zbW9vdGggaG92ZXI6c2NhbGUtaG92ZXIgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIEluaWNpYXIgU2VzacOzbiAtIG5vIG1vc3RyYXIgc2kgZXN0YW1vcyBlbiBsb2dpbiAqL31cclxuICAgICAgICAgIHshaXNMb2dpblBhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZWFzZS1zbW9vdGggaG92ZXI6c2NhbGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCI+SW5pY2lhciBTZXNpw7NuPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiBSZWdpc3RyYXJzZSAtIG5vIG1vc3RyYXIgc2kgZXN0YW1vcyBlbiBzaWdudXAgKi99XHJcbiAgICAgICAgICB7IWlzU2lnbnVwUGFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZWFzZS1zbW9vdGggaG92ZXI6c2NhbGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cInNtXCI+UmVnaXN0cmFyc2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBsYSBww6FnaW5hIHByaW5jaXBhbFxyXG4gICAgaWYgKGlzSG9tZVBhZ2UpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgey8qIFNhbHVkbyBwZXJzb25hbGl6YWRvICovfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgSG9sYSB7dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiDDgXJlYSBQcml2YWRhICovfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBlYXNlLXNtb290aCBob3ZlcjpzY2FsZS1ob3ZlciB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDDgXJlYSBQcml2YWRhXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHsvKiBDZXJyYXIgU2VzacOzbiAqL31cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGljayBlbiBDZXJyYXIgU2VzacOzblwiKTtcclxuICAgICAgICAgICAgICBsb2dvdXQoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZWFzZS1zbW9vdGggaG92ZXI6c2NhbGUtaG92ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDZXJyYXIgU2VzacOzblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVzdWFyaW8gYXV0ZW50aWNhZG8gZW4gZWwgZGFzaGJvYXJkXHJcbiAgICBpZiAoaXNEYXNoYm9hcmRQYWdlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsvKiBTYWx1ZG8gcGVyc29uYWxpemFkbyAqL31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIEhvbGEge3VzZXI/LnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7LyogSW5pY2lvICovfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBlYXNlLXNtb290aCBob3ZlcjpzY2FsZS1ob3ZlciB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIENlcnJhciBTZXNpw7NuICovfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrIGVuIENlcnJhciBTZXNpw7NuXCIpO1xyXG4gICAgICAgICAgICAgIGxvZ291dCgpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBlYXNlLXNtb290aCBob3ZlcjpzY2FsZS1ob3ZlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENlcnJhciBTZXNpw7NuXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXN1YXJpbyBhdXRlbnRpY2FkbyBlbiBvdHJhcyBww6FnaW5hcyAobG9naW4sIHNpZ251cCwgZXRjLilcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIFNhbHVkbyBwZXJzb25hbGl6YWRvICovfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICBIb2xhIHt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIEluaWNpbyAqL31cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGVhc2Utc21vb3RoIGhvdmVyOnNjYWxlLWhvdmVyIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICBJbmljaW9cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIMOBcmVhIFByaXZhZGEgKi99XHJcbiAgICAgICAgeyFpc0Rhc2hib2FyZFBhZ2UgJiYgKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBlYXNlLXNtb290aCBob3ZlcjpzY2FsZS1ob3ZlciB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICDDgXJlYSBQcml2YWRhXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgICB7LyogQ2VycmFyIFNlc2nDs24gKi99XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGljayBlbiBDZXJyYXIgU2VzacOzblwiKTtcclxuICAgICAgICAgICAgbG9nb3V0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZWFzZS1zbW9vdGggaG92ZXI6c2NhbGUtaG92ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIENlcnJhciBTZXNpw7NuXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC02XCI+XHJcbiAgICAgIHtyZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyTGlua3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlQXV0aCIsIkJ1dHRvbiIsIk5hdmJhckxpbmtzIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsImxvZ291dCIsInBhdGhuYW1lIiwiaXNIb21lUGFnZSIsImlzRGFzaGJvYXJkUGFnZSIsImlzTG9naW5QYWdlIiwiaXNTaWdudXBQYWdlIiwiY29uc29sZSIsImxvZyIsInJlbmRlck5hdmlnYXRpb24iLCJocmVmIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInNpemUiLCJzcGFuIiwidXNlcm5hbWUiLCJvbkNsaWNrIiwiZGl2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/layout/NavbarLinks.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"4adcb2e3c97f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTmVsc29uXFxEZXNrdG9wXFxQUk9ZRUNUT1NcXHN0YXJ0ZXItdGVtcGxhdGVcXHNyY1xcZnJvbnRlbmRcXHN0eWxlc1xcZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0YWRjYjJlM2M5N2ZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ })

});