const player = require('play-sound')(opts = {})

module.exports = async function (rhythmSequence, tempo) {
  if (!rhythmSequence) return;
  if (!tempo) tempo = 120;

  const clipLength = Math.floor(((1/(tempo / 60))/8)*1000);
  let audio;
  for (let rhythm of rhythmSequence) {
    for (let type of rhythm) {
      if (audio) {
        audio.kill();
        audio = null;
      }
      switch (type) {
        case 'X':
          audio = player.play('beat.wav', () => {});
          break;
        case 'x':
          audio = player.play('offbeat.wav', () => {});
          break;
        case '_':
          audio = player.play('empty.wav', () => {});
          break;
      }
      await sleep(clipLength)
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
