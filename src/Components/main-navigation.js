import AbstarctComponent from "./abstract-comp.js";

const createMainNavigationItemTemplate = (navData) => {
  const {name, navFilmsCount} = navData;
    return (
        `<a href="#watchlist" class="main-navigation__item">${name}<span class="main-navigation__item-count">${navFilmsCount}</span></a>`
    );
};


export const createMainNavigationTemplate = (navDatas) => {
  const navMarkup = navDatas.map((navData, i) =>
  createMainNavigationItemTemplate(navData, i === 0)).join(``);

  return `<nav class="main-navigation">
            <div class="main-navigation__items">
            <a href="#watchlist" class="main-navigation__item main-navigation__item--active">All movies</a>
            ${navMarkup}
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
          </nav>`
};

export default class MainNavigation extends AbstarctComponent {
  constructor(navData) {
    super();

    this._navData = navData;
  };

  getTemplate() {
    return createMainNavigationTemplate(this._navData);
  };
};