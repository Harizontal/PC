function getTimeRemaining(endtime) {
  let time = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(endtime) {
  let daysSpan = document.querySelector('.days');
  let hoursSpan = document.querySelector('.hours');
  let minutesSpan = document.querySelector('.minutes');
  let secondsSpan = document.querySelector('.seconds');
 
  function updateClock() {
    let time = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
 
    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
 
let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock(deadline);