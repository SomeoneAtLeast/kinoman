const createProfileMarkap = (profileData) => {
  const {rating, avatar} = profileData;
    return (
        `<section class="header__profile profile">
        <p class="profile__rating">${rating}</p>
        <img class="profile__avatar" src="images/${avatar}" alt="Avatar" width="35" height="35">
      </section>`
    )
};

export const createProfileTemplate = (profilesData) => {
  const ProfileMarkap = profilesData.map((it) => createProfileMarkap(it)).join(`\n`);

  return ProfileMarkap
};
