export const createSortTemplate = (sortBtn, isActive) => {
    return (
        `<ul class="sort">
        <li><a href="#" class="sort__button ${isActive ? `sort__button--active` : ``}">${sortBtn}</a></li>
      </ul>`
    )
};
