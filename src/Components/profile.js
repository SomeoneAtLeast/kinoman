import {createElement} from "../utils.js";

const createProfileTemplate = (profileData) => {
  const {rating, avatar} = profileData;
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">${rating}</p>
        <img class="profile__avatar" src="images/${avatar}" alt="Avatar" width="35" height="35">
      </section>`
    )
};

export default class Profile {
  constructor(profileData) {
    this._profileData = profileData;
    this._element = null;
  }

  getTemplate() {
    return createProfileTemplate(this._profileData);
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
}