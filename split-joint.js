const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini.kala kala sada sada';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
// const char =lyrics = lyrics.split();
// console.log(sentence);

const partial = lyrics.slice(5,8);

const partial2 = lyrics.substring(5, 8);
// console.log(partial);
console.log(partial2);


const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
  'Bosonto kale tomai bolte parini',
  'Kala kala sada sada'
];
const newSong = lines.join(':');
console.log(newSong);
