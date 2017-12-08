const rhythms = require('./rhythms.json');

module.exports = function (length, onlyRepresentation, onlySyncopation, beatEveryTime) {
  if (!length) length = 32; // 8 bars
  const finalRhythm = [];
  for (let i = 0; i < length; i++) {
    const syncopation = Math.round(Math.random());
    const randomIndex = Math.floor(Math.random()*rhythms.length);
    const randomRhythm = rhythms[randomIndex];
    if (!beatEveryTime) {
      if (onlySyncopation || syncopation) {
        randomRhythm.representation = randomRhythm.representation.replace("X", '_');
      }
    }
    if (onlyRepresentation) finalRhythm.push(randomRhythm.representation);
    else finalRhythm.push(randomRhythm);
  }
  return finalRhythm
}
