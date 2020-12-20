import AbstarctComponent from "./abstract-comp.js";

const createCommetEmojiTemplate = (emojisData) => {
  const {emoji} = emojisData;
    return (
        `<label class="film-details__emoji-label" for="emoji-${emoji}">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
            <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
         </label>`
    )
};

export default class CommetEmoji extends AbstarctComponent {
  constructor(emojisData) {
    super();

    this._emojisData = emojisData;
  };

  getTemplate() {
    return createCommetEmojiTemplate(this._emojisData);
  };
};