import AbstarctComponent from "./abstract-comp.js";

export const SortType = {
  BY_DEFAULT: `Sort by default`,
  BY_DATE: `Sort by date`,
  BY_RATING: `Sort by rating`,
};

export const createSortTemplate = (sortBtn, isActive) => {
    const active = isActive ? `sort__button--active` : ``;
    return (
        `<ul class="sort">
        <li><a href="#" class="sort__button ${active}">${SortType.BY_DEFAULT}</a></li>
        <li><a href="#" class="sort__button">${SortType.BY_DATE}</a></li>
        <li><a href="#" class="sort__button">${SortType.BY_RATING}</a></li>
      </ul>`
    )
};

export default class Sort extends AbstarctComponent {
  constructor(targetBlock, sortBtn, isActive) {
    super();

    this._currenSortType = SortType.BY_DEFAULT;
    this._sortBtn = sortBtn;
    this._isActive = isActive;
    this._targetBlock = targetBlock;
  };

  getTemplate() {
    return createSortTemplate(this._sortBtn, this._isActive);
  };

  getSortType() {
    return this._currenSortType;
  };

  setSortTypeChangeHandler(hendler) {
    this._targetBlock.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      
      if (evt.target.tagName !== `A`) {
        return
      }

      // const sortType = evt.target.dataset.sortType;

      // if (this._currenSortType === sortType) {
      //   return;
      // }

      // this._currenSortType = sortType;

      // hendler(this._currenSortType);
    });
  };

};