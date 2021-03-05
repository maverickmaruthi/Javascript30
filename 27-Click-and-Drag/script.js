const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function mouseDownHandler(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function mouseLeaveHandler() {
  isDown = false;
  slider.classList.remove('active');
}

function mouseUpHandler() {
  isDown = false;
  slider.classList.remove('active');
}

function mouseMove(e) {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  //console.log({x,startX});
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', mouseDownHandler)
slider.addEventListener('mouseleave', mouseLeaveHandler)
slider.addEventListener('mouseup', mouseUpHandler)
slider.addEventListener('mousemove', mouseMove)