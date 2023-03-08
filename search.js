const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte parini.kala kala sada sada';

const searchString = 'Paki';
// const doesExist = lyrics.includes('pakhi');

// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const  doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExist);

//-----------------------------------
//indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'))

//

if(lyrics.indexOf('sada') !== -1){
    console.log('exist inside the string')
}
else{
    console.log('Can not fine it');
} 

//strats with
console.log(lyrics.startsWith('2mi'));

//endsWith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');