import AbstarctComponent from "./abstract-comp.js";

export const createSortTemplate = (sortBtn, isActive) => {
    const active = isActive ? `sort__button--active` : ``;
    return (
        `<ul class="sort">
        <li><a href="#" class="sort__button ${active}">${sortBtn}</a></li>
      </ul>`
    )
};

export default class Sort extends AbstarctComponent {
  constructor(sortBtn, isActive) {
    super();

    this._sortBtn = sortBtn;
    this._isActive = isActive;
  };

  getTemplate() {
    return createSortTemplate(this._sortBtn, this._isActive);
  };
};