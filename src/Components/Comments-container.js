import AbstarctComponent from "./abstract-comp.js";

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

export default class CommentsContainer extends AbstarctComponent {
    constructor(commNumb) {
      super();

      this._commNumb = commNumb;
    };
  
    getTemplate() {
      return createCommentsContainerTemplate(this._commNumb);
    };
};