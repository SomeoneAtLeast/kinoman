import AbstarctComponent from "./abstract-comp.js";


const createProfileTemplate = (profileData) => {
  const {rating, avatar} = profileData;
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">${rating}</p>
        <img class="profile__avatar" src="images/${avatar}" alt="Avatar" width="35" height="35">
      </section>`
    )
};

export default class Profile extends AbstarctComponent {
  constructor(profileData) {
    super();

    this._profileData = profileData;
  }

  getTemplate() {
    return createProfileTemplate(this._profileData);
  };
};