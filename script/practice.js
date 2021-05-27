
function guessMe(code){
  let guessN = [];
  let correct = 0, wrong = 0;
  for(let i = 0; i < 4; i++)guessN.push(Math.floor(Math.random() * 10));
  
  for(let i = 0; i < code.length; i++){
    let digit = parseInt(code[i]);
    if(digit === guessN[i])correct++;
    if(digit !== guessN[i] && guessN.indexOf(digit) > -1)wrong++;
  }
  return {guessN, code, correct, wrong};
}
const guessInit = guessMe('0000');

for(let i = 0; i < 12; i++){
  let input = [];
  for(let i = 0; i < 4; i++)input.push(Math.floor(Math.random() * 10));
  console.log(guessInit.guessN. join('') === input.join('') ? `You won ${guessInit.guessN.join('')} ${input.join('')}`: `Lose ${guessInit.guessN.join('')} ${input.join('')}`);
}