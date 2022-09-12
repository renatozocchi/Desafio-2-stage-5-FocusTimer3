export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  
  function updateDisplay(newMinutes , seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function() {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      clearTimeout(timerTimeOut)
  
      updateDisplay(minutes, 0)
  
      if (isFinished) {
        controls.soundAlarm()
        updateDisplay()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown()
  
    }, 1000)
  }
  
  function more() {
    minutes = minutes + 5
  }
  
  function less() {
    if(minutes <= 5) {
      minutes = 0
    } else {
      minutes = minutes - 5
    }
  }

  function timeOut() {
    clearTimeout(timerTimeOut)
  }

  return {
    updateDisplay,
    countdown,
    more,
    less,
    timeOut,
  }
} 



