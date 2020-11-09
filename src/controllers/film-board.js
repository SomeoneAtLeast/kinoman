import FilmCard from "../components/film-card.js";
import {generateFilmsCards} from "../mock/film-card.js";
import ShowMoreBtn from "../components/show-more-btn.js";
import TopRated from "../components/top-rated.js";
import FilmDetails from "../components/film-details.js";
import FilmControls from "../components/film-controls.js";
import {managingAMoviesData} from "../mock/managing-a-movie.js";
import CommentsContainer from "../components/comments-container.js";
import {generateComments} from "../mock/comment.js";
import Comment from "../components/comment.js";
import NewComentContainer from "../components/new-comment-container.js";
import {generateCommentsEmojis} from "../mock/comments-emojis.js";
import CommetEmoji from "../components/comment-Emoji.js";
import NoMovies from "../components/no-movies.js";
import {render, RenderPosition, remove} from "../utils/render.js";

const FILM_COUNT = 25;
const SHOWING_FILMS_COUNT_ON_START = 5;
const SHOWING_FILMS_COUNT_BY_BUTTON = 5;

// Фильмы


export default class FilmBoardController {
    constructor (filmsListContainer, filmsList) {
        this._filmsListConatiner = filmsListContainer;
        this._filmsList = filmsList;
        this._noMovies = new NoMovies();
        this._showMore = new ShowMoreBtn();
    };

    render() {
        const filmCards = generateFilmsCards(FILM_COUNT);
        
        const fimsListEmpty = filmCards.length === 0;
        const filmsListContainer = this._filmsListConatiner;
        const filmsList = this._filmsList;
        
        if (fimsListEmpty) {
          render(filmsListContainer, this._noMovies, RenderPosition.BEFOREEND);
      
          return
        }
      
        let showingFilmsCount = SHOWING_FILMS_COUNT_ON_START;
        
        for (let i = 0; i < showingFilmsCount; i++) {
          render(filmsListContainer, new FilmCard(filmCards[i]), RenderPosition.BEFOREEND);
        };
        
        // Загрузка следующих фильмов
        
      
        const ShowMoreBtnComponent = this._showMore;
      
        if (FILM_COUNT > 5) {
          render(filmsList, ShowMoreBtnComponent, RenderPosition.BEFOREEND);
        }
        
        ShowMoreBtnComponent.onSetClick(() => {
          const prevFilmsCount = showingFilmsCount;
          showingFilmsCount = showingFilmsCount + SHOWING_FILMS_COUNT_BY_BUTTON;
        
          filmCards.slice(prevFilmsCount, showingFilmsCount)
            .forEach((filmCards) => render(filmsListContainer, new FilmCard(filmCards), RenderPosition.BEFOREEND));
        
          if (showingFilmsCount >= filmCards.length) {
            remove(ShowMoreBtnComponent);
          };
        });
        
        // Самые рейтинговые и самые комментируемые 
        
        const films = document.querySelector(`.films`);
        
        for (let i = 0; i < 2; i++) {
            render(films, new TopRated(), RenderPosition.BEFOREEND)
        }
        
        const extraFilmsListContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);
        
        for (let i = 0; i < 2; i++) {
            for (let i = 0; i < 2; i++) {
              render(extraFilmsListContainer[i], new FilmCard(filmCards[i]), RenderPosition.BEFOREEND);
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
        
              render(siteMain, new FilmDetails(filmCards[num]), RenderPosition.BEFOREEND);
              
             // Рендер кнопок управления
        
              const ControlsData = managingAMoviesData();
              const formDetailsTopContainer = document.querySelector(`.form-details__top-container`);
              
              render(formDetailsTopContainer, new FilmControls(ControlsData[0], ControlsData[1], ControlsData[2]), RenderPosition.BEFOREEND);
        
             // Рендер комментариев
        
              const COMMENT_COUNT = 4;
              const CommentsData = generateComments(COMMENT_COUNT);
              const filmDetalsInner = document.querySelector(`.film-details__inner`);
              
              render(filmDetalsInner, new CommentsContainer(COMMENT_COUNT), RenderPosition.BEFOREEND);
        
        
              const CommentsWrap = document.querySelector(`.film-details__comments-wrap`);
              const CommentsList = document.querySelector(`.film-details__comments-list`);
        
              for (let i = 0; i < CommentsData.length; i++) {
                render(CommentsList, new Comment(CommentsData[i]), RenderPosition.BEFOREEND);
              };
        
              // Рендер поля ввода нового комментария
        
              render(CommentsWrap, new NewComentContainer(), RenderPosition.BEFOREEND);
        
              // Рендер смайлов
        
              const CommentsEmojiList = document.querySelector(`.film-details__emoji-list`);
              const EMOJI_COUNT = 4;
              const CommentsEmojisData = generateCommentsEmojis(EMOJI_COUNT);
        
              for (let i = 0; i < CommentsEmojisData.length; i++) {
                render(CommentsEmojiList, new CommetEmoji(CommentsEmojisData[i]), RenderPosition.BEFOREEND);
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
      };
};