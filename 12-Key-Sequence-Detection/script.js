const secretCode = 'sarath';
const pressedKeys = []

window.addEventListener('keyup', e => {
  pressedKeys.push(e.key);
  pressedKeys.splice(-secretCode.length-1, 
  pressedKeys.length - secretCode.length);
  console.log(pressedKeys);
  if(pressedKeys.join('').includes(secretCode)){
    console.log("Ding Ding!!");
    cornify_add();
  }
});