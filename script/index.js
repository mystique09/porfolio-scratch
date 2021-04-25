/*function translate(sentence) {
  const rev = sentence.split(' ');
  const capAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if (rev.length >= 2) {
    return rev.map((word, index)=> {
      word = word.split('');
      let isCapital = capAlphabet.includes(word[0]);
      word.push(word.shift());
      word[0] = isCapital & word[0] .toLocaleUpperCase();
      word[word.length-1] = word[word.length - 1].toLocaleLowerCase();
      return word.join('') + 'ay';
    }).join(' ');
  } else {
    let word = rev[0].split(''),
    isCapital = capAlphabet.includes(word[0]);
    word.push(word.shift());
    word[0] = isCapital & word[0].toLocaleUpperCase();
    return word.join('') + 'ay';
  }
}

console.log(translate('Hello World'))
*/

let numbers = []

for(let i = 1; i <= 100; i++){
  numbers.push(i);
}

numbers.pop();