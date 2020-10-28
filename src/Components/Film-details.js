import AbstarctComponent from "./abstract-comp.js";

const createFilmDetailsTemplate = (filmDetalsData) => {
  const {name, rating, director, writers, actors, year, duration, country, genre, poster, description, age} = filmDetalsData;
    return (
        `<section class="film-details popup-close">
        <form class="film-details__inner" action="" method="get">
          <div class="form-details__top-container">
            <div class="film-details__close">
              <button class="film-details__close-btn" type="button">close</button>
            </div>
            <div class="film-details__info-wrap">
              <div class="film-details__poster">
                <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
      
                <p class="film-details__age">${age}</p>
              </div>
      
              <div class="film-details__info">
                <div class="film-details__info-head">
                  <div class="film-details__title-wrap">
                    <h3 class="film-details__title">${name}</h3>
                    <p class="film-details__title-original">Original: ${name}</p>
                  </div>
      
                  <div class="film-details__rating">
                    <p class="film-details__total-rating">${rating}</p>
                  </div>
                </div>
      
                <table class="film-details__table">
                  <tr class="film-details__row">
                    <td class="film-details__term">Director</td>
                    <td class="film-details__cell">${director}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Writers</td>
                    <td class="film-details__cell">${writers}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Actors</td>
                    <td class="film-details__cell">${actors}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Release Date</td>
                    <td class="film-details__cell">${year}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${duration}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Country</td>
                    <td class="film-details__cell">${country}</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Genres</td>
                    <td class="film-details__cell">
                      <span class="film-details__genre">${genre}</span>
                      <span class="film-details__genre">${genre}</span>
                      <span class="film-details__genre">${genre}</span></td>
                  </tr>
                </table>
                <p class="film-details__film-description">
                  ${description}
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>`
    )
};

export default class FilmDetals extends AbstarctComponent {
  constructor(filmDetalsData) {
    super();

    this._filmDetalsData = filmDetalsData;
  };

  getTemplate() {
    return createFilmDetailsTemplate(this._filmDetalsData);
  };
};