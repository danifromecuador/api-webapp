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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/***** PREREQUISITES *****/\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nul {\\n  padding-inline-start: 0%;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: rgba(9, 9, 9, 0.76);\\n}\\n\\n/***** HEADER SECTION *****/\\n\\n.logo {\\n  width: 8em;\\n  height: 8em;\\n}\\n\\nnav {\\n  width: 70%;\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n#nav-lists {\\n  display: flex;\\n  gap: 3em;\\n  align-items: center;\\n}\\n\\n.nav-list {\\n  position: relative;\\n}\\n\\n.nav-list a:focus {\\n  color: rgb(236, 56, 56);\\n}\\n\\n.nav-list::after {\\n  content: '';\\n  width: 0%;\\n  position: absolute;\\n  display: block;\\n  transition: 0.5s;\\n  background-color: rgb(230, 86, 86);\\n}\\n\\n.nav-list:hover::after {\\n  width: 100%;\\n  height: 2px;\\n}\\n\\n/***** MAIN SECTION *****/\\n\\n#main {\\n  width: 80%;\\n  position: relative;\\n  margin: auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n\\n.episode-img:hover {\\n  cursor: pointer;\\n}\\n\\n.likes {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.episode-txt {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1em;\\n}\\n\\n.like-btn-container {\\n  align-self: flex-end;\\n  width: 2em;\\n  height: 2em;\\n}\\n\\n.like-btn {\\n  width: 100%;\\n  float: right;\\n}\\n\\n.like-btn:hover {\\n  cursor: pointer;\\n}\\n\\n.like-txt {\\n  margin: 0;\\n}\\n\\n.episode-card {\\n  margin-bottom: 2em;\\n  box-shadow: -1px 3px 3px -1px rgba(0, 0, 0, 0.7);\\n}\\n\\n/***** POPUP WINDOW *****/\\n\\n#modal {\\n  display: none;\\n  left: 0;\\n  top: 0;\\n  z-index: 1;\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  overflow: auto;\\n  background-color: rgba(247, 246, 246, 0.796);\\n  backdrop-filter: blur(10px);\\n}\\n\\n#modal::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n#modal-content {\\n  width: 60%;\\n  margin: auto;\\n  padding: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: white;\\n}\\n\\n#close-btn {\\n  display: block;\\n  width: 2em;\\n  align-self: flex-end;\\n}\\n\\n.original-img {\\n  width: 100%;\\n}\\n\\n.episode-name {\\n  text-align: center;\\n  margin: 0;\\n}\\n\\n.episode-num {\\n  text-align: center;\\n  margin: 0;\\n  font-size: 2em;\\n}\\n\\n.info {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.info-left-col,\\n.info-right-col {\\n  width: 50%;\\n}\\n\\n.info-left-col p,\\n.info-right-col p {\\n  margin: 0;\\n  width: 100%;\\n  padding: 0.5em;\\n}\\n\\n.info-left-col p:nth-child(even),\\n.info-right-col p:nth-child(even) {\\n  background-color: rgb(129, 244, 152);\\n}\\n\\n.info-left-col p:nth-child(odd),\\n.info-right-col p:nth-child(odd) {\\n  background-color: rgb(247, 250, 253);\\n}\\n\\n/***** POPUP COMMENTS *****/\\n\\n.comments-header {\\n  text-align: center;\\n  font-weight: 300;\\n}\\n\\n.no-comments {\\n  font-weight: 300;\\n  font-size: 0.8em;\\n}\\n\\n/***** FORM STYLING *****/\\n\\n#add-comment {\\n  border-radius: 10px;\\n  background-color: rgb(247, 250, 253);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 60%;\\n  margin: auto;\\n}\\n\\n#name,\\n#comment-input {\\n  display: block;\\n  border-radius: 5px;\\n  border: solid 1px rgba(0, 0, 0, 0.224);\\n  padding: 0.4em;\\n  margin-bottom: 0.5em;\\n  width: 20em;\\n}\\n\\n.submit {\\n  background-color:  rgb(13, 243, 101);\\n  color: white;\\n  border: none;\\n  border-radius: 4px;\\n  padding: 0.5em;\\n  font-size: 1em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-webapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://api-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-webapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_userInteraction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userInteraction.js */ \"./src/modules/userInteraction.js\");\n\n\n\n\nconst mainBody = document.getElementById('main');\nconst popup = document.getElementById('popup-window');\n\nwindow.addEventListener('load', async () => {\n  const numberOfLikes = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  const epiArray = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.apiGet)();\n  for (let i = 0; i < epiArray.length; i += 1) {\n    if (epiArray[i].season === 1) {\n      mainBody.innerHTML += (0,_modules_userInteraction_js__WEBPACK_IMPORTED_MODULE_2__.generateMovies)(epiArray[i], numberOfLikes[i].likes);\n    }\n  }\n  const likeBtn = document.querySelectorAll('.like-btn');\n  for (let i = 0; i < likeBtn.length; i += 1) {\n    likeBtn[i].addEventListener('click', async () => {\n      mainBody.innerHTML = '';\n      const epiArray = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.apiGet)();\n      await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.sendLike)(epiArray[i].id);\n      window.location.reload();\n    });\n  }\n\n  const episodes = document.body.querySelectorAll('.episode-img');\n  Array.from(episodes).forEach((item, index) => {\n    item.addEventListener('click', async () => {\n      const commentArray = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.involvementApiGet)(index + 1);\n      popup.innerHTML = (0,_modules_userInteraction_js__WEBPACK_IMPORTED_MODULE_2__.generatePopup)(epiArray[index]);\n      document.getElementById('modal').style.display = 'block';\n\n      if (commentArray === null) {\n        const comments = 0;\n        document.getElementById('comments').innerHTML = (0,_modules_userInteraction_js__WEBPACK_IMPORTED_MODULE_2__.generateNoComments)(comments);\n      } else {\n        document.getElementById('comments').innerHTML = `<h2 class = \"comments-header\">Comments(${commentArray.length})</h2>`;\n        commentArray.forEach((item) => {\n          document.getElementById('comments').innerHTML += (0,_modules_userInteraction_js__WEBPACK_IMPORTED_MODULE_2__.generateComments)(item);\n        });\n      }\n\n      document.getElementById('add-comment').addEventListener('submit', async (e) => {\n        e.preventDefault();\n        const username = document.getElementById('name').value;\n        const userComment = document.getElementById('comment-input').value;\n        await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.involvementApiPost)(index + 1, username, userComment);\n        window.location.reload();\n      });\n\n      document.getElementById('close-btn').addEventListener('click', () => {\n        document.getElementById('modal').style.display = 'none';\n      });\n    });\n  });\n});\n\n\n//# sourceURL=webpack://api-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiGet\": () => (/* binding */ apiGet),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"involvementApiGet\": () => (/* binding */ involvementApiGet),\n/* harmony export */   \"involvementApiId\": () => (/* binding */ involvementApiId),\n/* harmony export */   \"involvementApiPost\": () => (/* binding */ involvementApiPost),\n/* harmony export */   \"sendLike\": () => (/* binding */ sendLike)\n/* harmony export */ });\nconst apiGet = async () => {\n  const req = await fetch('https://api.tvmaze.com/shows/4/episodes');\n  const response = await req.json();\n  return response;\n};\n\n// getting the id of the involvment API\nconst involvementApiId = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\n    method: 'POST',\n  });\n  return [response, 'D378r3vCLkaRvnEDLjsU'];\n};\n\n// sending likes to the involvment API using the unique id\nconst sendLike = async (index) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D378r3vCLkaRvnEDLjsU/likes/', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${index}`,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response;\n};\n\n// getting likes from the involvement API\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D378r3vCLkaRvnEDLjsU/likes/', {\n    method: 'GET',\n  });\n  const numberOfLikes = await response.json();\n  return numberOfLikes;\n};\n\nconst involvementApiGet = async (id) => {\n  const req = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments?item_id=item${id}`);\n  const response = await req.json();\n  if (req.status === 400) {\n    return null;\n  }\n  return response;\n};\n\nconst involvementApiPost = async (id, username, comment) => {\n    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1TzK26frOiLTOPOwesN3/comments', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `item${id}`,\n      username,\n      comment,\n    }),\n  });\n};\n\n\n\n//# sourceURL=webpack://api-webapp/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/userInteraction.js":
/*!****************************************!*\
  !*** ./src/modules/userInteraction.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateComments\": () => (/* binding */ generateComments),\n/* harmony export */   \"generateMovies\": () => (/* binding */ generateMovies),\n/* harmony export */   \"generateNoComments\": () => (/* binding */ generateNoComments),\n/* harmony export */   \"generatePopup\": () => (/* binding */ generatePopup)\n/* harmony export */ });\nfunction generatePopup(info) {\n  return `\n    <div id = \"modal\">\n        <div id = \"modal-content\">\n            <img id = \"close-btn\" src = \"../assets/closebtn.png\" alt = \"close button\"/>\n            <img class = \"original-img\" src = \"${info.image.original}\" alt = \"\"/>\n            <p class = \"episode-num\">Episode ${info.number}</p>\n            <p class = \"episode-name\">Episode ${info.name}</p>\n            <div class = \"info\">\n              <div class = \"info-left-col\">\n                <p>type: ${info.type}</p>\n                <p>airdate: ${info.airdate}</p>\n                <p>airtime: ${info.airtime}</p>\n              </div>\n              <div class = \"info-right-col\">\n                <p>airstamp: ${info.airstamp}</p>\n                <p>runtime: ${info.runtime}</p>\n                <p>rating: ${info.rating.average}</p>\n              </div>\n            </div>\n            <div id = \"comments\">\n            </div>\n            <form id = \"add-comment\">\n              <p>Add a Comment</p>\n              <input placeholder = \"Your name\" type = 'text' id = 'name' required/>\n              <input placeholder = \"Your comment\" type = 'text' id = 'comment-input' required/>\n              <button type = 'submit' class = 'submit'>Comment<button/>\n            </form>\n        </div>\n    </div>\n  `;\n}\n\nfunction generateMovies(episode, likes) {\n  return `\n    <div id=\"episode-card-${episode.number}\" class=\"episode-card\">\n      <div class=\"episode-img\" id=\"episode-img-${episode.number}\">\n        <img src=\"${episode.image.medium}\">\n      </div>\n      <div class=\"episode-txt\">\n        <p>Episode ${episode.number}</p>\n        <div class=\"likes\">\n          <div class=\"like-btn-container\">\n            <img class=\"like-btn\" src=\"/assets/liked.png\" alt=\"unliked\">\n          </div>\n          <p class=\"like-txt\">${likes}</p>\n        </div>\n      </div>\n    </div>\n  `;\n}\n\nfunction generateNoComments(comments) {\n  return `\n    <h2 class = \"comments-header\">Comments(${comments})<h2>  \n    <p class = 'no-comments'>no comments</p>\n  `;\n}\n\nfunction generateComments(item) {\n  return `\n    <p class =\"comment\">${item.creation_date} ${item.username}: ${item.comment}</p>\n  `;\n}\n\n\n\n//# sourceURL=webpack://api-webapp/./src/modules/userInteraction.js?");

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