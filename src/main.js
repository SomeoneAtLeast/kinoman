import {createProfileTemplate} from "./components/Profile-Template.js";
import {createMainNavigationTemplate} from "./components/Main-Navigation-Template.js";
import {createSortTemplate} from "./components/Sort-Template.js";
import {createFilmCardContainerTemplate} from "./components/Film-Card-Container-Template.js";
import {createFilmCardTemplate} from "./components/Film-Card-Template.js";
import {createShowMoreBtnTemplate} from "./components/Show-More-Btn-Template.js";
import {createTopRatedTemplate} from "./components/Top-Rated-Template.js";
import {createFilmDetailsTemplate} from "./components/Film-details.js";
import {generateFilmsCards} from "./mock/Film-Card.js";
import {managingAMoviesData} from "./mock/Managing-A-movie.js";
import {createFilmControlsTemplate} from "./components/Film-controls.js";

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

const ControlsData = managingAMoviesData();

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

let сlickСaught = false;

const OnCatchAClick = function () {
  const target = event.target;
  const filmCard = event.target.closest('.film-card');
  const filmCardsCollection = document.querySelectorAll(`.film-card`);


  if (!filmCard ||
      target.classList.contains(`film-card__controls-item--add-to-watchlist`) ||
      target.classList.contains(`film-card__controls-item--mark-as-watched`) ||
      target.classList.contains(`film-card__controls-item--favorite`)) {
        return;
      };

  сlickСaught = true;

  let num = -1;

  filmCardsCollection.forEach(function(i) {

    num++

    if (i === filmCard) {

      // Рендер информации о фильме

      render (siteMain, createFilmDetailsTemplate(filmCards[num].name, filmCards[num].rating, filmCards[num].director,
      filmCards[num].writers, filmCards[num].actors, filmCards[num].year, filmCards[num].duration, filmCards[num].country,
      filmCards[num].genre, filmCards[num].poster, filmCards[num].description, filmCards[num].age), `beforeend`);
      
     // Рендер кнопок управления

      const formDetailsTopContainer = document.querySelector(`.form-details__top-container`);

      render (formDetailsTopContainer, createFilmControlsTemplate(ControlsData[0], ControlsData[1], ControlsData[2]), `beforeend`);
    };
  });
};

const showAndClosePopup = function () {

  // Открытие

  const filmDetals = document.querySelector(`.film-details`);

  filmDetals.classList.remove(`popup-close`);

  // Закрытие попапа

  const filmDetalsEcsBtn = document.querySelector(`.film-details__close-btn`);

  filmDetalsEcsBtn.addEventListener(`click`, function () {
    siteMain.removeChild(filmDetals);
  });

};

filmsListContainer.addEventListener(`click`, function () {
  OnCatchAClick();
  showAndClosePopup();
});
