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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/filmCardContainerTemplate.js":
/*!*****************************************************!*\
  !*** ./src/components/filmCardContainerTemplate.js ***!
  \*****************************************************/
/*! exports provided: createFilmCardContainerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardContainerTemplate", function() { return createFilmCardContainerTemplate; });
const createFilmCardContainerTemplate = () => {
    return (
        `<section class="films">
            <section class="films-list">
                <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
                <div class="films-list__container">
                    
                </div>
            </section>        
        </section>`
    )
};

/***/ }),

/***/ "./src/components/filmCardTemplate.js":
/*!********************************************!*\
  !*** ./src/components/filmCardTemplate.js ***!
  \********************************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
const createFilmCardTemplate = () => {
    return (
        `<article class="film-card">
        <h3 class="film-card__title">The Man with the Golden Arm</h3>
        <p class="film-card__rating">9.0</p>
        <p class="film-card__info">
          <span class="film-card__year">1955</span>
          <span class="film-card__duration">1h 59m</span>
          <span class="film-card__genre">Drama</span>
        </p>
        <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
        <a class="film-card__comments">18 comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
    )
};


/***/ }),

/***/ "./src/components/mainNavigationTemplate.js":
/*!**************************************************!*\
  !*** ./src/components/mainNavigationTemplate.js ***!
  \**************************************************/
/*! exports provided: createMainNavigationTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainNavigationTemplate", function() { return createMainNavigationTemplate; });
const createMainNavigationTemplate = () => {
    return (
        `<nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
          <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
          <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
    )
};


/***/ }),

/***/ "./src/components/profileTemplate.js":
/*!*******************************************!*\
  !*** ./src/components/profileTemplate.js ***!
  \*******************************************/
/*! exports provided: createProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileTemplate", function() { return createProfileTemplate; });
const createProfileTemplate = () => {
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    )
};

/***/ }),

/***/ "./src/components/showMoreBtnTemplate.js":
/*!***********************************************!*\
  !*** ./src/components/showMoreBtnTemplate.js ***!
  \***********************************************/
/*! exports provided: createShowMoreBtnTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreBtnTemplate", function() { return createShowMoreBtnTemplate; });
const createShowMoreBtnTemplate = () => {
    return (
        `<button class="films-list__show-more">Show more</button>`
    )
};

/***/ }),

/***/ "./src/components/sortTemplate.js":
/*!****************************************!*\
  !*** ./src/components/sortTemplate.js ***!
  \****************************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
const createSortTemplate = () => {
    return (
        `<ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>`
    )
};

/***/ }),

/***/ "./src/components/topRatedTemplate.js":
/*!********************************************!*\
  !*** ./src/components/topRatedTemplate.js ***!
  \********************************************/
/*! exports provided: createTopRatedTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRatedTemplate", function() { return createTopRatedTemplate; });
const createTopRatedTemplate = () => {
    return (
        `<section class="films-list--extra">
            <h2 class="films-list__title">Top rated</h2>
            <div class="films-list__container">
            </div>
        <section>`
    )
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_profileTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profileTemplate.js */ "./src/components/profileTemplate.js");
/* harmony import */ var _components_mainNavigationTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainNavigationTemplate.js */ "./src/components/mainNavigationTemplate.js");
/* harmony import */ var _components_sortTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sortTemplate.js */ "./src/components/sortTemplate.js");
/* harmony import */ var _components_filmCardContainerTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filmCardContainerTemplate.js */ "./src/components/filmCardContainerTemplate.js");
/* harmony import */ var _components_filmCardTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filmCardTemplate.js */ "./src/components/filmCardTemplate.js");
/* harmony import */ var _components_showMoreBtnTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/showMoreBtnTemplate.js */ "./src/components/showMoreBtnTemplate.js");
/* harmony import */ var _components_topRatedTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topRatedTemplate.js */ "./src/components/topRatedTemplate.js");









const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template)
};

const userProfileContainer = document.querySelector(`.header`);

render (userProfileContainer, Object(_components_profileTemplate_js__WEBPACK_IMPORTED_MODULE_0__["createProfileTemplate"])(), `beforeend`);

const siteMain = document.querySelector(`.main`);

render (siteMain, Object(_components_mainNavigationTemplate_js__WEBPACK_IMPORTED_MODULE_1__["createMainNavigationTemplate"])(), `beforeend`);

render (siteMain, Object(_components_sortTemplate_js__WEBPACK_IMPORTED_MODULE_2__["createSortTemplate"])(), `beforeend`);

render (siteMain, Object(_components_filmCardContainerTemplate_js__WEBPACK_IMPORTED_MODULE_3__["createFilmCardContainerTemplate"])(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < 5; i++) {
    render (filmsListContainer, Object(_components_filmCardTemplate_js__WEBPACK_IMPORTED_MODULE_4__["createFilmCardTemplate"])(), `beforeend`)
};

const filmsList = document.querySelector(`.films-list`);

render (filmsList, Object(_components_showMoreBtnTemplate_js__WEBPACK_IMPORTED_MODULE_5__["createShowMoreBtnTemplate"])(), `beforeend`);


const films = document.querySelector(`.films`);

for (let i = 0; i < 2; i++) {
    render (films  , Object(_components_topRatedTemplate_js__WEBPACK_IMPORTED_MODULE_6__["createTopRatedTemplate"])(), `beforeend`);
}

const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

console.log(extraFilmsListContainer);

for (let i = 0; i < 2; i++) {

    for (let i = 0; i < 2; i++) {
        render (extraFilmsListContainer[i], Object(_components_filmCardTemplate_js__WEBPACK_IMPORTED_MODULE_4__["createFilmCardTemplate"])(), `beforeend`)
    };

};

/***/ })

/******/ });
//# sourceMappingURL=bandle.js.map