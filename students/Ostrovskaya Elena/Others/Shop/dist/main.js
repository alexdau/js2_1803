/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/Cart.js":
/*!*******************************!*\
  !*** ./src/public/js/Cart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/public/js/List.js\");\n\r\n\r\nclass Cart extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(url, container) {\r\n        super(url = '/getBasket.json', container = '.cart-items');\r\n        this.total = 0;\r\n        this.sum = 0;\r\n        this.quantityBlock = document.querySelector ('#quantity');\r\n        this.priceBlock = document.querySelector ('#price');\r\n    }\r\n\r\n    /**\r\n     *Обработчик события - нажатие на кнопку удалить продукта в корзине\r\n     *\r\n     */\r\n    _handleEvents () {\r\n        this.container.addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'del-btn') {\r\n                this.deleteProduct (evt.target)\r\n            }\r\n        })\r\n    }\r\n\r\n    handlerCatalogClick(evt){\r\n        if (evt.target.name === 'buy-btn') {\r\n            this.addProduct(evt.target)\r\n        }\r\n    }\r\n\r\n\r\n    /**\r\n     *Создаем каталог\r\n     */\r\n    _init () { \r\n        this.getData(this.url)\r\n            .then(data => {this.items = data.contents})\r\n            .then(() => {this.changeCart()})\r\n            .finally(() => {\r\n                this._handleEvents()\r\n            })\r\n    }\r\n\r\n    /**\r\n     *Удаляет выбранный продукт\r\n     */\r\n    deleteProduct (product) {\r\n        let id = +product.dataset['id'];\r\n        let find = this.items.find(product => product.id_product === id);\r\n        if (find.quantity > 1) {\r\n            find.quantity--;\r\n        } else {\r\n            this.items.splice (this.items.indexOf(find), 1);\r\n        }\r\n        this.changeCart() \r\n        \r\n    }\r\n\r\n    changeCart(){\r\n        this._checkTotalAndSum ();\r\n        this.render ();\r\n        this.quantityBlock.innerText = this.total\r\n        this.priceBlock.innerText = this.sum\r\n    }\r\n\r\n    \r\n    \r\n    /**\r\n     *Считает общую сумму товаров\r\n     */\r\n    _checkTotalAndSum () {\r\n        let qua = 0;\r\n        let pr = 0;\r\n        this.items.forEach (item => {\r\n            qua += item.quantity;\r\n            pr += item.price * item.quantity;\r\n        })\r\n        this.total = qua;\r\n        this.sum = pr;\r\n    }\r\n\r\n    /**\r\n     *Добавляет товар в корзину\r\n     */\r\n    addProduct (product) {\r\n        let id = +product.dataset['id'];\r\n        let find = this.items.find (product => product.id_product === id);\r\n        if (find) {\r\n            find.quantity++;\r\n        } else {\r\n            let prod = this._createNewProduct (product);\r\n            this.items.push (prod);\r\n        }      \r\n        this.changeCart() \r\n    }\r\n\r\n    /**\r\n     *Возвращает массив с параметрами товара\r\n     *\r\n     */\r\n    _createNewProduct (prod) {\r\n        return {\r\n            product_name: prod.dataset['name'],\r\n            price: prod.dataset['price'],\r\n            id_product: prod.dataset['id'],\r\n            quantity: 1\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/public/js/Cart.js?");

/***/ }),

/***/ "./src/public/js/CartItems.js":
/*!************************************!*\
  !*** ./src/public/js/CartItems.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItems; });\n/* harmony import */ var _ListItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItems.js */ \"./src/public/js/ListItems.js\");\n\r\n\r\nclass CartItems extends _ListItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(item) {\r\n        super(item);\r\n        this.img =\"https://placehold.it/100x80\"\r\n    }\r\n    getProductHTML(){\r\n        return `<div class=\"cart-item\" data-id=\"${this.item.id_product}\">\r\n                    <img src=\"${this.img}\" alt=\"${this.item.product_name}\">\r\n                    <div class=\"product-desc\">\r\n                        <p class=\"product-title\">${this.item.product_name}</p>\r\n                        <p class=\"product-quantity\">${this.item.quantity}</p>\r\n                        <p class=\"product-single-price\">${this.item.price}</p>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${this.item.id_product}\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/CartItems.js?");

/***/ }),

/***/ "./src/public/js/Catalog.js":
/*!**********************************!*\
  !*** ./src/public/js/Catalog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Catalog; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/public/js/List.js\");\n\r\n\r\nclass Catalog  extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(cart, url, container){\r\n        super(url = '/catalogData.json', container = '.products');\r\n        this.cart = cart;\r\n    }\r\n\r\n    /**\r\n     *Создаем каталог\r\n     */\r\n    _init () { \r\n        this.getData(this.url)\r\n            .then(data => {this.items = data})\r\n            .then(() => {this.render()})\r\n            .finally(() => {\r\n                this._handleEvents()\r\n            })\r\n    }\r\n\r\n\r\n     /**\r\n     *Обработчик события - нажатия на кнопку Купить\r\n     */\r\n    _handleEvents () {\r\n        this.container.addEventListener ('click', this.cart.handlerCatalogClick.bind(this.cart));\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/public/js/Catalog.js?");

/***/ }),

/***/ "./src/public/js/CatalogItems.js":
/*!***************************************!*\
  !*** ./src/public/js/CatalogItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItems; });\n/* harmony import */ var _ListItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItems.js */ \"./src/public/js/ListItems.js\");\n\r\n\r\nclass CartItems extends _ListItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(item) {\r\n        super(item);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/CatalogItems.js?");

/***/ }),

/***/ "./src/public/js/List.js":
/*!*******************************!*\
  !*** ./src/public/js/List.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _CatalogItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogItems.js */ \"./src/public/js/CatalogItems.js\");\n/* harmony import */ var _CartItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItems.js */ \"./src/public/js/CartItems.js\");\nlet API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; \r\n\r\n\r\n\r\n\r\nlet lists = {\r\n    Catalog: _CatalogItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    Cart: _CartItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n}\r\n\r\nclass List{\r\n    constructor(url, container){\r\n        this.url = url;\r\n        this.container = document.querySelector(container);\r\n        this.items = [];\r\n        this._init();\r\n    }\r\n\r\n    _init(){\r\n        return false;\r\n    }\r\n\r\n    async getData(){\r\n        const res = await fetch(API + this.url);\r\n        return await res.json();\r\n    }\r\n\r\n    /**\r\n     *Вставляет HTML- разметку товара каталога\r\n     */\r\n    render(){\r\n        let str = '';\r\n        this.items.forEach (item => {\r\n            str += new lists[this.constructor.name](item).getProductHTML();\r\n        })  \r\n        this.container.innerHTML = str;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/List.js?");

/***/ }),

/***/ "./src/public/js/ListItems.js":
/*!************************************!*\
  !*** ./src/public/js/ListItems.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItems; });\nclass ListItems{\r\n    constructor(item){\r\n        this.item = item;\r\n        this.img = 'https://placehold.it/300x200'\r\n    }\r\n    getProductHTML(){\r\n        return `<div class=\"product-item\">\r\n                    <img src=\"${this.img}\" alt=\"${this.item.product_name}\">\r\n                    <div class=\"desc\">\r\n                        <h1>${this.item.product_name}</h1>\r\n                        <p>${this.item.price}</p>\r\n                        <button \r\n                        class=\"buy-btn\" \r\n                        name=\"buy-btn\"\r\n                        data-name=\"${this.item.product_name}\"\r\n                        data-price=\"${this.item.price}\"\r\n                        data-id=\"${this.item.id_product}\"\r\n                        >Купить</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/ListItems.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.js */ \"./src/public/js/Cart.js\");\n/* harmony import */ var _Catalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog.js */ \"./src/public/js/Catalog.js\");\n\r\n\r\n //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА\r\n\r\n\r\n window.addEventListener('load', function () {\r\n   let cart = new _Cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ();\r\n   let catalog = new _Catalog_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cart);\r\n})\r\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });