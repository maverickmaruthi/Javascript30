const timeNodes = document.querySelectorAll('li[data-time]');

const seconds = [...timeNodes].map(node => node.dataset.time)
  .map(time => {
    const [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((acc, secs) => acc += secs, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const videoRunTime = document.getElementById('runTime');
videoRunTime.innerHTML = `${hours}hrs ${minutes}mins ${secondsLeft}secs`;