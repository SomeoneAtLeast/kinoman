import {createElement} from "../utils.js";

const createCommentsContainerTemplate = (commNumb) => {
    return (
        `<div class="form-details__bottom-container">
            <section class="film-details__comments-wrap">
                <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commNumb}</span></h3>
                <ul class="film-details__comments-list">
                </ul>
            </section>
        </div>`
    )
};

export default class CommentsContainer {
    constructor(commNumb) {
      this._commNumb = commNumb;
      this._element = null;
    }
  
    getTemplate() {
      return createCommentsContainerTemplate(this._commNumb);
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