$(document).ready(function(){
  var deadline = "01/26/2019";

  $('.carousel').carousel();

  function getTimeRemaining(deadline) {
    var t = Date.parse(deadline) - Date.parse(new Date()),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60)) % 24 ),
        days = Math.floor( t/(1000*60*60*24) );

    return {
      "total": t,
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  }

  function initializeClock(id, deadline) {
    var clock = document.getElementById(id),
    		daysSpan = clock.querySelector(".days"),
        hoursSpan = clock.querySelector(".hours"),
        minutesSpan = clock.querySelector(".minutes"),
        secondsSpan = clock.querySelector(".seconds"),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(deadline);

  		daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    updateClock(); //helps to avoid delay of clock
  }

  initializeClock("clockDiv", deadline);
});
