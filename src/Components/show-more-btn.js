import AbstarctComponent from "./abstract-comp.js";

const createShowMoreBtnTemplate = () => {
    return (
        `<button class="films-list__show-more">Show more</button>`
    )
};

export default class ShowMoreBtn extends AbstarctComponent { 
  getTemplate() {
    return createShowMoreBtnTemplate();
  };

  onSetClick (hendler) {
    this.getElement().addEventListener(`click`, hendler);
  }
};