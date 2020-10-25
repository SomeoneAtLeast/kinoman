import {createElement} from "../utils.js";

export const createSortTemplate = (sortBtn, isActive) => {
    const active = isActive ? `sort__button--active` : ``;
    return (
        `<ul class="sort">
        <li><a href="#" class="sort__button ${active}">${sortBtn}</a></li>
      </ul>`
    )
};

export default class Sort {
  constructor(sortBtn, isActive) {
    this._sortBtn = sortBtn;
    this._isActive = isActive;
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate(this._sortBtn, this._isActive);
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