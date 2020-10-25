import {createElement} from "../utils.js";

const createSortContainerTemplate = () => {
    return (
        `<ul class="sort">
      </ul>`
    )
};

export default class SortContainer {
  constructor(navData) {

    this._element = null;
  }

  getTemplate() {
    return createSortContainerTemplate();
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