import {createProfileTemplate} from "./components/profileTemplate.js";
import {createMainNavigationTemplate} from "./components/mainNavigationTemplate.js";
import {createSortTemplate} from "./components/sortTemplate.js";
import {createFilmCardContainerTemplate} from "./components/filmCardContainerTemplate.js";
import {createFilmCardTemplate} from "./components/filmCardTemplate.js";
import {createShowMoreBtnTemplate} from "./components/showMoreBtnTemplate.js";
import {createTopRatedTemplate} from "./components/topRatedTemplate.js";


const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template)
};

const userProfileContainer = document.querySelector(`.header`);

render (userProfileContainer, createProfileTemplate(), `beforeend`);

const siteMain = document.querySelector(`.main`);

render (siteMain, createMainNavigationTemplate(), `beforeend`);

render (siteMain, createSortTemplate(), `beforeend`);

render (siteMain, createFilmCardContainerTemplate(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < 5; i++) {
    render (filmsListContainer, createFilmCardTemplate(), `beforeend`)
};

const filmsList = document.querySelector(`.films-list`);

render (filmsList, createShowMoreBtnTemplate(), `beforeend`);


const films = document.querySelector(`.films`);

for (let i = 0; i < 2; i++) {
    render (films  , createTopRatedTemplate(), `beforeend`);
}

const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

console.log(extraFilmsListContainer);

for (let i = 0; i < 2; i++) {

    for (let i = 0; i < 2; i++) {
        render (extraFilmsListContainer[i], createFilmCardTemplate(), `beforeend`)
    };

};