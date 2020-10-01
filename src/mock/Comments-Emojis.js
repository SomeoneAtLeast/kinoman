const emojis = [
    `smile`,
    `sleeping`,
    `puke`,
    `angry`,
];

const getRandomInRange = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
    const randomIndex = getRandomInRange (0, array.length);
  
    return array[randomIndex];
};
  
const generateCommentsEmoji = () => {
    return {
        emoji: getRandomArrayItem(emojis),
    };
};

const generateCommentsEmojis = (count) => {
    return new Array(count)
      .fill('')
      .map(generateCommentsEmoji);
  };

export {generateCommentsEmojis, generateCommentsEmoji};
