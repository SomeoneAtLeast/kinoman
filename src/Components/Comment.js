import AbstarctComponent from "./abstract-comp.js";

const createCommentTemplate = (commentData) => {
  const {img, comment, name, date} = commentData;
    return (
        `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${img}" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${name}</span>
            <span class="film-details__comment-day">${date}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`
    )
};

export default class Comment extends AbstarctComponent {
  constructor(commentData) {
    super();
    
    this._commentData = commentData;
  };

  getTemplate() {
    return createCommentTemplate(this._commentData);
  };
};