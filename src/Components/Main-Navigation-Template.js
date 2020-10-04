 const createMainNavigationMarkup = (navData, isActive) => {
  const {name, navFilmsCount} = navData;
    return (
        `<a href="#watchlist" class="main-navigation__item">${name}<span class="main-navigation__item-count">${navFilmsCount}</span></a>`
    );
};


export const createMainNavigationTemplate = (navDatas) => {
  const navMarkup = navDatas.map((it, i) =>
  createMainNavigationMarkup(it, i === 0)).join(`\n`);

  return `<nav class="main-navigation">
            <div class="main-navigation__items">
            <a href="#watchlist" class="main-navigation__item main-navigation__item--active">All movies</a>
            ${navMarkup}
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
          </nav>`
};
