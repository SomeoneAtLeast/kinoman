import {createElement} from "../utils.js";

const createFilmControlsTemplate = (watchlistBtn, watchedBtn, favoriteBtn) => {
    
    return (
        `<section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">${watchlistBtn}</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">${watchedBtn}</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">${favoriteBtn}</label>
        </section>`
    )
};

export default class FilmControls {
    constructor(watchlistBtn, watchedBtn, favoriteBtn) {
      this._watchlistBtn = watchlistBtn;
      this._watchedBtn = watchedBtn;
      this._favoriteBtn = favoriteBtn;
      this._element = null;
    }
  
    getTemplate() {
      return createFilmControlsTemplate(this._watchlistBtn, this._watchedBtn, this._favoriteBtn);
    }
  
    getElement() {
      if (!this._element) {
        this._element = createElement(this.getTemplate());
      }
  
      return this._element;
    }
  
    removeElement() {
      this._element = null;
    }
  };