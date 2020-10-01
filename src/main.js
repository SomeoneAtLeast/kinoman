`use strict`

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
import {createCommentsContainerTemplate} from "./components/Comments-container.js";
import {generateComments} from "./mock/Comment.js";
import {createCommentTemplate} from "./components/Comment.js";
import {createNewComentContainerTemplate} from "./components/New-Comment-Container.js";
import {generateCommentsEmojis} from "./mock/Comments-Emojis.js";
import {createCommetEmojiTemplate} from "./components/Comment-Emoji.js";
import {createSortContainerTemplate} from "./components/Sort-Container.js";
import {sortData} from "./mock/Sort-Data.js";
import {generateNav} from "./mock/Nav-Data.js";
import {profileData} from "./mock/Profile.js";
import {createFilmsInsideTemplate} from "./components/Films-Inside.js";


const FILM_COUNT = 23;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template)
};

const userProfileContainer = document.querySelector(`.header`);

const profilesData = profileData();

render (userProfileContainer, createProfileTemplate(profilesData), `beforeend`);

const siteMain = document.querySelector(`.main`);

const navDatas = generateNav();

render (siteMain, createMainNavigationTemplate(navDatas), `beforeend`);

render (siteMain, createSortContainerTemplate(), `beforeend`);

const createSortContainer = document.querySelector(`.sort`);;

const sortDatas = sortData();

for (let i = 0; i < 3; i++) {
  render (createSortContainer, createSortTemplate(sortDatas[i], (i === 0) ? true: 0), `beforeend`);
};


render (siteMain, createFilmCardContainerTemplate(), `beforeend`);

const filmsListContainer = document.querySelector(`.films-list__container`);

const filmCards = generateFilmsCards(FILM_COUNT);

const ControlsData = managingAMoviesData();

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

for (let i = 0; i < showingFilmsCount; i++) {
  render (filmsListContainer, createFilmCardTemplate(filmCards[i]), `beforeend`)
}

const filmsList = document.querySelector(`.films-list`);

render (filmsList, createShowMoreBtnTemplate(), `beforeend`);

const showMoreBtn = document.querySelector(`.films-list__show-more`);

showMoreBtn.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  filmCards.slice(prevFilmsCount, showingFilmsCount)
    .forEach((filmCards) => render(filmsListContainer, createFilmCardTemplate(filmCards), `beforeend`));

  if (showingFilmsCount >= filmCards.length) {
    showMoreBtn.remove();
  };
});

const film = document.querySelector(`.films`);

for (let i = 0; i < 2; i++) {
    render (film, createTopRatedTemplate(), `beforeend`);
}

const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 2; i++) {
      render (extraFilmsListContainer[i], createFilmCardTemplate(filmCards[i]), `beforeend`)
      
  };
    
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

      render (siteMain, createFilmDetailsTemplate(filmCards[num]), `beforeend`);
      
     // Рендер кнопок управления

      const formDetailsTopContainer = document.querySelector(`.form-details__top-container`);

      render (formDetailsTopContainer, createFilmControlsTemplate(ControlsData[0], ControlsData[1], ControlsData[2]), `beforeend`);

     // Рендер комментариев

      const COMMENT_COUNT = 4;
      const CommentsData = generateComments(COMMENT_COUNT);
      const filmDetalsInner = document.querySelector(`.film-details__inner`);
      
      render (filmDetalsInner, createCommentsContainerTemplate(4), `beforeend`);

      const CommentsWrap = document.querySelector(`.film-details__comments-wrap`);
      const CommentsList = document.querySelector(`.film-details__comments-list`);

      for (let i = 0; i < CommentsData.length; i++) {
        render (CommentsList, createCommentTemplate(CommentsData[i]), `beforeend`)
      }

      render (CommentsWrap, createNewComentContainerTemplate(), `beforeend`);

      const CommentsEmojiList = document.querySelector(`.film-details__emoji-list`);
      const EMOJI_COUNT = 4;
      const CommentsEmojisData = generateCommentsEmojis(EMOJI_COUNT);

      for (let i = 0; i < CommentsEmojisData.length; i++) {
        render (CommentsEmojiList, createCommetEmojiTemplate(CommentsEmojisData[i]), `beforeend`)
      };
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

const footerStatistics = document.querySelector(`.footer__statistics`);

render (footerStatistics, createFilmsInsideTemplate(), `beforeend`);