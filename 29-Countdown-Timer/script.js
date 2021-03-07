let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timerEnd = document.querySelector('.display__end-time');
const timerBtns = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + (seconds * 1000);
  
  displayEndTime(then);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
    
  }, 1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const reminderSecs = seconds % 60;
  const display = `${mins}:${reminderSecs < 10 ? '0' : ''}${reminderSecs}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHrs = `${hours > 12 ? hours-12 : hours}`;
  timerEnd.innerText = `Be back at ${adjustedHrs}: ${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = this.dataset.time;
  timer(seconds);
}

timerBtns.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});