import AbstarctComponent from "./abstract-comp.js";

const createNoMoviesTemplate = () => {
    return (
        `<h2 class="films-list__title">There are no movies in our database</h2>`
    )
};


export default class NoMovies extends AbstarctComponent {
    getTemplate() {
      return createNoMoviesTemplate();
    };
};