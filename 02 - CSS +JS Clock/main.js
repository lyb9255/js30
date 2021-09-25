const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.sec-hand')

function setDate() {
  const time = new Date()
  const hours = time.getHours()
  const mins = time.getMinutes()
  const secs = time.getSeconds()

  let hourDeg = 90 + (hours * 30)
  hourHand.style.transform = `rotate(${hourDeg}deg)`
  let minDeg = 90 + (mins * 6)
  minHand.style.transform = `rotate(${minDeg}deg)`
  let secDeg = 90 + (secs * 6)
  secHand.style.transform = `rotate(${secDeg}deg)`

  
}

setInterval(setDate, 1000)

setDate();