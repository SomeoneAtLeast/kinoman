import AbstarctComponent from "./abstract-comp.js";


const createSortContainerTemplate = () => {
    return (
        `<ul class="sort">
      </ul>`
    )
};

export default class SortContainer extends AbstarctComponent {
  getTemplate() {
    return createSortContainerTemplate();
  };
};