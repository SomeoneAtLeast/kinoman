const smileImgs = [
    `smile.png`,
    `sleeping.png`,
    `puke.png`,
    `angry.png`,
];

const commentTexts = [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`,
];

const autorsNames = [
    `Tim Macoveev`,
    `John Doe`,
];

const dates = [
    `2019/12/31 23:59`,
    `2 days ago`,
];

const getRandomInRange = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
    const randomIndex = getRandomInRange (0, array.length);
  
    return array[randomIndex];
};
  
const generateComment = () => {
    return {
        img: getRandomArrayItem(smileImgs),
        comment: getRandomArrayItem(commentTexts),
        name: getRandomArrayItem(autorsNames),
        date: getRandomArrayItem(dates),
    };
};

const generateComments = (count) => {
    return new Array(count)
      .fill('')
      .map(generateComment);
  }

export {generateComments, generateComment};