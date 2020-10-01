const filmNames = [
  `The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`,
];

const getRandomInRange = function (min, max) {
  return min + Math.floor(Math.random() * (max - min));
};

const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`];

const descriptions = [
  `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
  `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`,
];

const posters = [ 
  `the-dance-of-life.jpg`,
  `sagebrush-trail.jpg`,
  `the-man-with-the-golden-arm.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `popeye-meets-sinbad.png`,
];

const directors = [
  `John Cromwell`,
  `Jack Cromwell`,
  `Jin Cromwell`,
  `Jizz Cromwell`,
  `Jimbo Cromwell`,
];

const writers = [
  `Anna Kek`,
  `Anna Kok`,
  `Anna Kak`,
  `Anna Kuk`,
  `Anna Kik`,
];

const actors = [
  `Allan Grek`,
  `Allan Grik`,
  `Allan Grok`,
  `Allan Greek`,
  `Allan Griik`,
];

const countrys = [
  `USO`,
  `USI`,
  `USE`,
  `USJ`,
  `USG`,
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInRange (0, array.length);

  return array[randomIndex];
};

const generateFilmsCard = () => {
    return {
      name: getRandomArrayItem(filmNames),
      rating: getRandomInRange(1, 10),
      year: getRandomInRange(1900, 1976),
      duration: `${getRandomInRange(1, 2)}h ${getRandomInRange(1, 60)}m`,
      genre: getRandomArrayItem(genres),
      description: getRandomArrayItem(descriptions),
      poster: getRandomArrayItem(posters),
      commentsNumber: getRandomInRange(1, 10),
      director: getRandomArrayItem(directors),
      writers: getRandomArrayItem(writers),
      actors: getRandomArrayItem(actors),
      country: getRandomArrayItem(countrys),
      age: `${getRandomInRange(6, 18)}+`,
    };
};

const generateFilmsCards = (count) => {
  return new Array(count)
    .fill('')
    .map(generateFilmsCard);
}

export {generateFilmsCard, generateFilmsCards};