import Profile from "./components/profile.js";
import {profileData} from "./mock/profiles-data.js";
import MainNavigation from "./components/main-navigation.js";
import {generateNav} from "./mock/nav-data.js";
import SortContainer from "./components/sort-container.js";
import {sortData} from "./mock/sort-data.js";
import Sort from "./components/sort.js";
import FilmCardContainer from "./components/film-card-container.js";

import FilmBoardController from "./controllers/film-board.js";

import FilmsInside from "./components/films-inside.js";

import {render, RenderPosition, remove} from "./utils/render.js";

// Профиль

const userProfileContainer = document.querySelector(`.header`);

const profilesData = profileData();

render(userProfileContainer, new Profile(profilesData[0]), RenderPosition.BEFOREEND);

// Навигация

const siteMain = document.querySelector(`.main`);

const navDatas = generateNav();

render(siteMain, new MainNavigation(navDatas), RenderPosition.BEFOREEND);

// Сортировка

render(siteMain, new SortContainer(), RenderPosition.BEFOREEND);

const createSortContainer = document.querySelector(`.sort`);;

// (0 === 0) ? true: 0 - это к активности кнопки.

render(createSortContainer, new Sort((0 === 0) ? true: 0), RenderPosition.BEFOREEND);



// Контейнер для фильмов

render(siteMain, new FilmCardContainer(), RenderPosition.BEFOREEND);

// Фильмы

const filmsList = document.querySelector(`.films-list`);
const filmsListContainer = document.querySelector(`.films-list__container`);
const FilmBoard = new FilmBoardController(filmsListContainer, filmsList);

FilmBoard.render();

// Рендер нижнего блока с количеством фильмов

const footerStatistics = document.querySelector(`.footer__statistics`);

render(footerStatistics, new FilmsInside(), RenderPosition.BEFOREEND);
