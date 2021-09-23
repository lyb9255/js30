function playSounds(e)  {
  const audio = document.querySelector(`audio[data-key ="${e.code}"]`)
  const border = document.querySelector(`.box[data-key ="${e.code}"]`)
  if(!audio) return
  audio.currentTime = 0
  audio.play()
  border.classList.add('playing')
}

function transitionend(e) {
  if(e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const boxes = document.querySelectorAll('.box')
window.addEventListener('keydown', playSounds)
boxes.forEach(e => e.addEventListener('transitionend', transitionend))