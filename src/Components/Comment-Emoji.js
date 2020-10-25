import {createElement} from "../utils.js";

const createCommetEmojiTemplate = (emojisData) => {
  const {emoji} = emojisData;
    return (
        `<label class="film-details__emoji-label" for="emoji-${emoji}">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
            <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
         </label>`
    )
};

export default class CommetEmoji {
  constructor(emojisData) {
    this._emojisData = emojisData;
    this._element = null;
  }

  getTemplate() {
    return createCommetEmojiTemplate(this._emojisData);
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