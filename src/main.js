`use strict`

import Profile from "./components/profile.js";
import {profileData} from "./mock/profiles-data.js";
import MainNavigation from "./components/main-navigation.js";
import {generateNav} from "./mock/nav-data.js";
import SortContainer from "./components/sort-container.js";
import {sortData} from "./mock/sort-data.js";
import Sort from "./components/sort.js";
import FilmCardContainer from "./components/film-card-container.js";
import FilmCard from "./components/film-card.js";
import {generateFilmsCards} from "./mock/film-card.js";
import ShowMoreBtn from "./components/show-more-btn.js";
import TopRated from "./components/top-rated.js";
import FilmDetails from "./components/film-details.js";
import FilmControls from "./components/film-controls.js";
import {managingAMoviesData} from "./mock/managing-a-movie.js";
import CommentsContainer from "./components/comments-container.js";
import {generateComments} from "./mock/comment.js";
import Comment from "./components/comment.js";
import NewComentContainer from "./components/new-comment-container.js";
import {generateCommentsEmojis} from "./mock/comments-emojis.js";
import CommetEmoji from "./components/comment-emoji.js";
import FilmsInside from "./components/films-inside.js";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";

const FILM_COUNT = 23;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

// Профиль

const userProfileContainer = document.querySelector(`.header`);

const profilesData = profileData();

renderElement(userProfileContainer, new Profile(profilesData[0]).getElement(), RenderPosition.BEFOREEND);

// Навигация

const siteMain = document.querySelector(`.main`);

const navDatas = generateNav();

renderElement(siteMain, new MainNavigation(navDatas).getElement(), RenderPosition.BEFOREEND);

// Сортировка

renderElement(siteMain, new SortContainer().getElement(), RenderPosition.BEFOREEND);

const createSortContainer = document.querySelector(`.sort`);;

const sortDatas = sortData();

for (let i = 0; i < 3; i++) {
  renderElement(createSortContainer, new Sort(sortDatas[i], (i === 0) ? true: 0).getElement(), RenderPosition.BEFOREEND);
};


// Фильмы

renderElement(siteMain, new FilmCardContainer().getElement(), RenderPosition.BEFOREEND);

const filmsListContainer = document.querySelector(`.films-list__container`);

const filmCards = generateFilmsCards(FILM_COUNT);

let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;

for (let i = 0; i < showingFilmsCount; i++) {
  renderElement(filmsListContainer, new FilmCard(filmCards[i]).getElement(), RenderPosition.BEFOREEND);
};

// Загрузка следующих фильмов

const filmsList = document.querySelector(`.films-list`);

renderElement(filmsList, new ShowMoreBtn().getElement(), RenderPosition.BEFOREEND);

const showMoreBtn = document.querySelector(`.films-list__show-more`);

showMoreBtn.addEventListener(`click`, () => {
  const prevFilmsCount = showingFilmsCount;
  showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;

  filmCards.slice(prevFilmsCount, showingFilmsCount)
    .forEach((filmCards) => renderElement(filmsListContainer, new FilmCard(filmCards).getElement(), RenderPosition.BEFOREEND));

  if (showingFilmsCount >= filmCards.length) {
    showMoreBtn.remove();
  };
});

// Самые рейтинговые и самые комментируемые 

const films = document.querySelector(`.films`);

for (let i = 0; i < 2; i++) {
    renderElement(films, new TopRated().getElement(), RenderPosition.BEFOREEND)
}

const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 2; i++) {
      renderElement(extraFilmsListContainer[i], new FilmCard(filmCards[i]).getElement(), RenderPosition.BEFOREEND);
  }; 
};

// Подробная информация о фильме

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

      renderElement(siteMain, new FilmDetails(filmCards[num]).getElement(), RenderPosition.BEFOREEND);
      
     // Рендер кнопок управления

      const ControlsData = managingAMoviesData();
      const formDetailsTopContainer = document.querySelector(`.form-details__top-container`);
      
      renderElement(formDetailsTopContainer, new FilmControls(ControlsData[0], ControlsData[1], ControlsData[2]).getElement(), RenderPosition.BEFOREEND);

     // Рендер комментариев

      const COMMENT_COUNT = 4;
      const CommentsData = generateComments(COMMENT_COUNT);
      const filmDetalsInner = document.querySelector(`.film-details__inner`);
      
      renderElement(filmDetalsInner, new CommentsContainer(COMMENT_COUNT).getElement(), RenderPosition.BEFOREEND);


      const CommentsWrap = document.querySelector(`.film-details__comments-wrap`);
      const CommentsList = document.querySelector(`.film-details__comments-list`);

      for (let i = 0; i < CommentsData.length; i++) {
        renderElement(CommentsList, new Comment(CommentsData[i]).getElement(), RenderPosition.BEFOREEND);
      };

      // Рендер поля ввода нового комментария

      renderElement(CommentsWrap, new NewComentContainer().getElement(), RenderPosition.BEFOREEND);

      // Рендер смайлов

      const CommentsEmojiList = document.querySelector(`.film-details__emoji-list`);
      const EMOJI_COUNT = 4;
      const CommentsEmojisData = generateCommentsEmojis(EMOJI_COUNT);

      for (let i = 0; i < CommentsEmojisData.length; i++) {
        renderElement(CommentsEmojiList, new CommetEmoji(CommentsEmojisData[i]).getElement(), RenderPosition.BEFOREEND);
      };
    };
  });
};

const showAndClosePopup = function () {

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      siteMain.removeChild(filmDetals);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  // Открытие

  const filmDetals = document.querySelector(`.film-details`);

  filmDetals.classList.remove(`popup-close`);

  document.addEventListener(`keydown`, onEscKeyDown);

  // Закрытие попапа

  const filmDetalsEcsBtn = document.querySelector(`.film-details__close-btn`);

  filmDetalsEcsBtn.addEventListener(`click`, function () {
    siteMain.removeChild(filmDetals);
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

};

filmsListContainer.addEventListener(`click`, function () {
  OnCatchAClick();
  showAndClosePopup();
});

// Рендер нижнего блока с количеством фильмов

const footerStatistics = document.querySelector(`.footer__statistics`);

renderElement(footerStatistics, new FilmsInside().getElement(), RenderPosition.BEFOREEND);
