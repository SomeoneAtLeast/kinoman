const firstNames = [
    `All movies`,
];

const names = [
    `Watchlist`,
    `History`,
    `Favorites`,
];

const getRandomInRange = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};

const generateNav = () => {
    return names.map((it) => {
        return {
            name: it,
            navFilmsCount: getRandomInRange(1, 20),
        };
    });
};

export {generateNav, firstNames};