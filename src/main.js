import {createProfileTemplate} from "./components/Profile-Template.js";
import {createMainNavigationTemplate} from "./components/Main-Navigation-Template.js";
import {createSortTemplate} from "./components/Sort-Template.js";
import {createFilmCardContainerTemplate} from "./components/Film-Card-Container-Template.js";
import {createFilmCardTemplate} from "./components/Film-Card-Template.js";
import {createShowMoreBtnTemplate} from "./components/Show-More-Btn-Template.js";
import {createTopRatedTemplate} from "./components/Top-Rated-Template.js";
import {createFilmDetailsTemplate} from "./components/Film-details.js";
import {generateFilmsCards} from "./mock/Film-Card.js";


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

const filmCards = generateFilmsCards();

render (filmsListContainer, createFilmCardTemplate(filmCards), `beforeend`)


const filmsList = document.querySelector(`.films-list`);

render (filmsList, createShowMoreBtnTemplate(), `beforeend`);


const film = document.querySelector(`.films`);

for (let i = 0; i < 2; i++) {
    render (film, createTopRatedTemplate(), `beforeend`);
}

const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
        render (extraFilmsListContainer[i], createFilmCardTemplate(filmCards), `beforeend`)
};

render (siteMain, createFilmDetailsTemplate(filmCards[0].name), `beforeend`);

// Открытие и закрытие попапа
const filmDetals = document.querySelector(`.film-details`);
const filmDetalsEcsBtn = document.querySelector(`.film-details__close-btn`);
const films = document.querySelectorAll(`.films`);

films.forEach(function(i) {
    i.addEventListener(`click`, function () {
        filmDetals.classList.remove(`popup-close`);

        if (true) {

        };
      });
});

filmDetalsEcsBtn.addEventListener(`click`, function () {
  filmDetals.classList.add(`popup-close`);
});

