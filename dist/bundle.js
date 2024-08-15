/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    user-select: none;\r\n}\r\n\r\n*:not(i) {\r\n    font-family: \"Poppins\";\r\n    color: grey;\r\n}\r\n\r\n:root {\r\n    \r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.game-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.battlefield {\r\n    opacity: 0.6;\r\n    transform: scale(0.98);\r\n\r\n    transition: 100ms;\r\n}\r\n\r\n.battlefield.active {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.board-row {\r\n    counter-increment: row;\r\n}\r\n\r\n.board-row::before {\r\n    display: block;\r\n    content: counter(row);\r\n    text-align: center;\r\n    font-size: 0.75rem;\r\n    margin-right: 0.25rem;\r\n}\r\n\r\n.board-row:last-child .board-element {\r\n    counter-increment: column;\r\n}\r\n\r\n.board-row:last-child .board-element::after {\r\n    display: block;\r\n    content: counter(column, upper-latin);\r\n    text-align: center;\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.board-cell {\r\n    background-color: #f1f1f1;\r\n    width: 1.75rem;\r\n    height: 1.75rem;\r\n    border: 1px solid grey;\r\n    transition: 100ms;\r\n}\r\n\r\n.board-cell:not(.ship-hit, .miss):hover {\r\n    transform: scale(1.25);\r\n    box-shadow: 0px 0px 5px 0px black;\r\n}\r\n\r\n.board-cell.ship {\r\n    background-color: darkgrey;\r\n}\r\n\r\n.board-cell.ship-hit {\r\n    background-color: lightcoral;\r\n}\r\n\r\n.board-cell.miss {\r\n    background-color: lightblue;\r\n}\r\n\r\n.ship-wrapper {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.d-ship {\r\n    z-index: 100;\r\n    transform-origin: center;\r\n    \r\n}\r\n.d-ship.rotated {\r\n    transform: rotate(90deg);\r\n    transform-origin: top left;\r\n}\r\n\r\n.ship-cell {\r\n    background-color: darkgrey;\r\n    width: 1.75rem;\r\n    height: 1.75rem;\r\n    border: 1px solid grey;\r\n    transition: 100ms;\r\n}\r\n\r\nbutton {\r\n    height: 2rem;\r\n    width: 8rem;\r\n    border-radius: 4px;\r\n    border: 1px solid grey;\r\n    transition: 300ms;\r\n}\r\n\r\nbutton:hover {\r\n    filter: brightness(95%);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _Drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drag */ \"./src/Drag.js\");\n\r\n\r\n\r\nconst sizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\r\n\r\nclass Board {\r\n  constructor(element, player, gameLogic) {\r\n    this.element = element;\r\n    this.player = player;\r\n    this.grid = [...Array(10)].map(() => Array(10).fill(null));\r\n    this.ships = [];\r\n\r\n    // this.populate();\r\n    // console.log(this.grid);\r\n\r\n    for (let y = 0; y < 10; y++) {\r\n      const row = document.createElement('tr');\r\n      row.className = 'board-row';\r\n      this.element.querySelector('tbody').append(row);\r\n\r\n      for (let x = 0; x < 10; x++) {\r\n        const td = document.createElement('td');\r\n        td.className = 'board-element';\r\n        row.append(td);\r\n\r\n        const cell = document.createElement('div');\r\n        cell.className = 'board-cell';\r\n        cell.dataset.x = x;\r\n        cell.dataset.y = y;\r\n        td.append(cell);\r\n\r\n        cell.addEventListener('click', () => {\r\n          if (gameLogic.turn === this.player) return;\r\n          if (this.grid[y][x] === false) return;\r\n          if (this.grid[y][x] !== null && this.grid[y][x].isHit(x, y)) return;\r\n          gameLogic.fireAt(x, y);\r\n        });\r\n\r\n        cell.addEventListener('mousedown', (e) => {\r\n          if (player.type !== 'you') return;\r\n\r\n          const ship = this.grid[y][x];\r\n          if (ship === null || ship === false) return;\r\n\r\n          this.setTo(ship.pos[0], ship.pos[1], ship.size, ship.rotated, null);\r\n          this.renderShips();\r\n\r\n          const shipClone = document.querySelector(`.d-ship.s${ship.size}`).cloneNode(true);\r\n          document.body.appendChild(shipClone);\r\n          (0,_Drag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n            shipClone,\r\n            e,\r\n            (endE, rot) => {\r\n              const overlaps = document.elementsFromPoint(endE.pageX, endE.pageY);\r\n              const cell = overlaps.find((el) => el.className === 'board-cell');\r\n              const curX = cell ? parseInt(cell.dataset.x) : undefined;\r\n              const curY = cell ? parseInt(cell.dataset.y) : undefined;\r\n\r\n              if (cell && this.isPosValid(curX, curY, ship.size, rot)) {\r\n                this.placeShip(curX, curY, ship.size, rot, ship);\r\n                ship.pos = [curX, curY];\r\n                ship.rotated = rot;\r\n              } else {\r\n                this.placeShip(ship.pos[0], ship.pos[1], ship.size, ship.rotated, ship);\r\n              }\r\n              this.renderShips();\r\n              document.body.removeChild(shipClone);\r\n            },\r\n            ship.rotated,\r\n          );\r\n        })\r\n      }\r\n    }\r\n  }\r\n\r\n  reset() {\r\n    this.grid = [...Array(10)].map(() => Array(10).fill(null));\r\n    this.ships = [];\r\n    // this.populate();\r\n  }\r\n\r\n  show() {\r\n    this.element.querySelector('.battlefield').classList.add(\"active\");\r\n  }\r\n\r\n  hide() {\r\n    this.element.querySelector('.battlefield').classList.remove(\"active\");\r\n  }\r\n\r\n  clearAround(ship) {\r\n    const shipParts = [];\r\n    for (let i = 0; i < ship.size; i++) {\r\n      shipParts.push([ship.rotated ? ship.pos[0] : ship.pos[0] + i, ship.rotated ? ship.pos[1] + i : ship.pos[1]]);\r\n    }\r\n    shipParts.forEach((part) => {\r\n      const adjacent = this.getAdjacent(part[0], part[1]);\r\n      adjacent.forEach((pos) => {\r\n        if (this.grid[pos[1]][pos[0]] === null) this.grid[pos[1]][pos[0]] = false;\r\n      });\r\n    });\r\n  }\r\n\r\n  setTo(x, y, size, rotated, to) {\r\n    for (let i = 0; i < size; i++) {\r\n      this.grid[rotated ? y + i : y][rotated ? x : x + i] = to;\r\n    }\r\n  }\r\n\r\n  placeShip(x, y, size, rotated, oldShip) {\r\n    const ship = oldShip || new _Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, size, rotated);\r\n    this.setTo(x, y, size, rotated, ship);\r\n    this.ships.push(ship);\r\n  }\r\n\r\n  isPosValid(x, y, size, rotated) {\r\n    if (!rotated && x + size - 1 > 9) return false;\r\n    if (rotated && y + size - 1 > 9) return false;\r\n    for (let i = 0; i < size; i++) {\r\n      const xNew = rotated ? x : x + i;\r\n      const yNew = rotated ? y + i : y;\r\n      if (this.grid[yNew][xNew] !== null) return false;\r\n      if (!this.getAdjacent(xNew, yNew).every((pos) => this.grid[pos[1]][pos[0]] === null)) return false;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  getAdjacent(x, y) {\r\n    let posList = [];\r\n    for (let yo of [-1, 0, 1]) {\r\n      for (let xo of [-1, 0, 1]) {\r\n        if (x + xo < 0 || x + xo > 9 || y + yo < 0 || y + yo > 9 || (xo === 0 && yo === 0)) continue;\r\n        posList.push([x + xo, y + yo]);\r\n      }\r\n    }\r\n    return posList;\r\n  }\r\n\r\n  populate() {\r\n    sizes.forEach((size) => {\r\n      let pos = null;\r\n      let rotated = false;\r\n      while (pos === null || !this.isPosValid(pos[0], pos[1], size, rotated)) {\r\n        pos = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];\r\n        rotated = Math.random() < 0.6 ? true : false;\r\n      }\r\n      this.placeShip(pos[0], pos[1], size, rotated);\r\n    });\r\n  }\r\n\r\n  renderShips(hidden = false) {\r\n    //hidden = false;\r\n    for (let y = 0; y < 10; y++) {\r\n      for (let x = 0; x < 10; x++) {\r\n        const ship = this.grid[y][x];\r\n        const cell = this.element.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\r\n        cell.className = 'board-cell';\r\n        if (ship === false) {\r\n          cell.classList.add('miss');\r\n        } else if (ship !== null) {\r\n          if (!hidden) cell.classList.add('ship');\r\n          if (ship.isHit(x, y)) cell.classList.add('ship-hit');\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  isDead() {\r\n    return this.ships.every((ship) => ship.isDead());\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://webpack-template/./src/Board.js?");

/***/ }),

/***/ "./src/Drag.js":
/*!*********************!*\
  !*** ./src/Drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction drag(obj, initialE, onEnd, rotated = false) {\r\n  function setPos(x, y) {\r\n    obj.style.position = 'absolute';\r\n    obj.style.left = `${x}px`;\r\n    obj.style.top = `${y}px`;\r\n  }\r\n\r\n  const offsetX = 0 //initialE.pageX - obj.offsetLeft;\r\n  const offsetY = 0 //initialE.pageY - obj.offsetTop;\r\n\r\n  if (rotated) obj.classList.add('rotated');\r\n\r\n  setPos(initialE.pageX - offsetX, initialE.pageY - offsetY);\r\n\r\n  document.onmousemove = (e) => {\r\n    setPos(e.pageX - offsetX, e.pageY - offsetY);\r\n  }\r\n\r\n  document.onkeydown = (e) => {\r\n    if (e.key !== 'r') return;\r\n    rotated = !rotated;\r\n    obj.classList.toggle('rotated');\r\n  }\r\n  \r\n  document.onmouseup = (e) => {\r\n    onEnd(e, rotated);\r\n\r\n    document.onmousemove = undefined;\r\n    document.onkeydown = undefined;\r\n    document.onmouseup = undefined;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drag);\n\n//# sourceURL=webpack://webpack-template/./src/Drag.js?");

/***/ }),

/***/ "./src/GameLogic.js":
/*!**************************!*\
  !*** ./src/GameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drag */ \"./src/Drag.js\");\n\r\n\r\n\r\nconst sleep = (ms) => {\r\n  return new Promise(resolve => setTimeout(resolve, ms));\r\n}\r\n\r\nconst draggableShips = document.querySelector('.draggable-ships');\r\nconst startBtn = document.querySelector('.start');\r\nconst randomiseBtn = document.querySelector('.randomise')\r\n\r\nclass GameLogic {\r\n  constructor() {\r\n    this.type = 'bot';\r\n    this.player1 = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('you', this);\r\n    this.player2 = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('bot', this);\r\n    this.turn = this.player1;\r\n    this.availableShips = undefined;\r\n\r\n    this.canFire = true;\r\n\r\n    this.reset();\r\n\r\n    randomiseBtn.addEventListener('click', () => {\r\n      this.availableShips  = {'4': 0, '3': 0, '2': 0, '1': 0};\r\n      this.updateShipCount();\r\n      this.player1.board.reset();\r\n      this.player1.board.populate();\r\n      this.player1.board.renderShips();\r\n    });\r\n\r\n    startBtn.addEventListener('click', () => {\r\n      if (Object.values(this.availableShips).some((value) => value !== 0)) return;\r\n\r\n      draggableShips.classList.add('invisible');\r\n      randomiseBtn.classList.add('invisible');\r\n      startBtn.classList.add('invisible');\r\n      this.player2.board.element.classList.remove('invisible');\r\n      this.player1.board.hide();\r\n    })\r\n\r\n    document.querySelectorAll('.d-ship').forEach((ship) => {\r\n      ship.addEventListener('mousedown', (e) => {\r\n        if (this.availableShips[ship.dataset.size] <= 0) return;\r\n\r\n        const shipClone = ship.cloneNode(true);\r\n        document.body.appendChild(shipClone);\r\n        (0,_Drag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n          shipClone,\r\n          e,\r\n          (endE, rot) => {\r\n            const overlaps = document.elementsFromPoint(endE.pageX, endE.pageY);\r\n            const cell = overlaps.find((el) => el.className === 'board-cell');\r\n            const curX = cell ? parseInt(cell.dataset.x) : undefined;\r\n            const curY = cell ? parseInt(cell.dataset.y) : undefined;\r\n\r\n            if (cell && this.player1.board.isPosValid(curX, curY, parseInt(ship.dataset.size), rot)) {\r\n              this.player1.board.placeShip(curX, curY, parseInt(ship.dataset.size), rot);\r\n              this.player1.board.renderShips();\r\n              this.availableShips[ship.dataset.size] -= 1;\r\n              this.updateShipCount();\r\n            }\r\n            document.body.removeChild(shipClone);\r\n          },\r\n        );\r\n      })\r\n    });\r\n  }\r\n\r\n  reset() {\r\n    this.availableShips  = {'4': 1, '3': 2, '2': 3, '1': 4};\r\n    this.updateShipCount();\r\n\r\n    this.player1.board.reset();\r\n    this.player2.board.reset();\r\n    this.player2.board.populate();\r\n    this.turn = this.player1;\r\n\r\n    this.canFire = true;\r\n\r\n    this.player1.board.renderShips();\r\n    this.player2.board.renderShips(true);\r\n\r\n    this.getEnemy().board.show();\r\n\r\n    this.turn.board.show();\r\n    draggableShips.classList.remove('invisible');\r\n    randomiseBtn.classList.remove('invisible');\r\n    startBtn.classList.remove('invisible');\r\n    this.player2.board.element.classList.add('invisible');\r\n  }\r\n\r\n  updateShipCount() {\r\n    for (let size in this.availableShips) {\r\n      document.querySelector(`[data-size=\"${size}\"]`).parentNode.querySelector('.amount').textContent = `x${this.availableShips[size]}`;\r\n    }\r\n  }\r\n\r\n  getEnemy() {\r\n    return this.turn === this.player1 ? this.player2 : this.player1;\r\n  }\r\n\r\n  getBotMove() {\r\n    const grid = this.player1.board.grid;\r\n    const moves = [];\r\n    for (let y = 0; y < 10; y++) {\r\n      for (let x = 0; x < 10; x++) {\r\n        if (grid[y][x] === false) continue;\r\n        if (grid[y][x] !== null && grid[y][x].isHit(x, y)) continue;\r\n        moves.push([x, y]);\r\n      }\r\n    }\r\n    return moves[Math.floor(Math.random()*moves.length)];\r\n  }\r\n\r\n  botMove() {\r\n    const pos = this.getBotMove();\r\n    this.fireAt(pos[0], pos[1]);\r\n  }\r\n\r\n  fireAt(x, y) {\r\n    if (!this.canFire) return;\r\n\r\n    this.turn.board.hide();\r\n\r\n    this.canFire = false;\r\n\r\n    const board = this.turn === this.player1 ? this.player2.board : this.player1.board;\r\n\r\n    const ship = board.grid[y][x];\r\n    let hit = false;\r\n    if (ship !== null) {\r\n      ship.hit(x, y);\r\n      hit = true;\r\n      if (ship.isDead()) {\r\n        board.clearAround(ship);\r\n      }\r\n      this.turn.shipHits.push([x, y]);\r\n    } else {\r\n      board.grid[y][x] = false;\r\n    }\r\n\r\n    if (board.isDead()) {\r\n      this.victory();\r\n      return;\r\n    }\r\n      \r\n\r\n    if (!hit) this.turn = this.turn === this.player1 ? this.player2 : this.player1;\r\n    this.turn.board.hide();\r\n    this.getEnemy().board.show();\r\n\r\n    board.renderShips(board.player !== this.player1);\r\n\r\n    if (this.turn === this.player2) {\r\n      sleep(Math.floor(Math.max(Math.random(), 0.5)*200)).then(() => {\r\n        this.canFire = true;\r\n        this.botMove();\r\n      });\r\n    } else {\r\n      this.canFire = true\r\n    }\r\n  }\r\n\r\n  victory() {\r\n    console.log(this.turn.type, 'won!');\r\n    this.reset();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLogic);\n\n//# sourceURL=webpack://webpack-template/./src/GameLogic.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n\r\n\r\nclass Player {\r\n  constructor(type, gameLogic) {\r\n    this.type = type;\r\n    this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector(`.board#${type}`), this, gameLogic);\r\n    this.shipHits = [];\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://webpack-template/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n  constructor(x, y, size, rotated) {\r\n    this.pos = [x, y];\r\n    this.hits = Array(size).fill(false);\r\n    this.rotated = rotated;\r\n    this.size = size;\r\n  }\r\n\r\n  hit(x, y) {\r\n    this.hits[this.rotated ? y - this.pos[1] : x - this.pos[0]] = true;\r\n  }\r\n\r\n  isHit(x, y) {\r\n    return this.hits[this.rotated ? y - this.pos[1] : x - this.pos[0]];\r\n  }\r\n\r\n  isDead() {\r\n    return this.hits.every((hit) => hit);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://webpack-template/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _GameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameLogic */ \"./src/GameLogic.js\");\n\r\n\r\n\r\nconst game = new _GameLogic__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;