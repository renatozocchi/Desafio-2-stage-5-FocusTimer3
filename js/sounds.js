export default function() {
const soundForest = new Audio('./js/sounds/Floresta.wav')
const soundRain = new Audio('./js/sounds/Chuva.wav')
const soundCoffeShop = new Audio('./js/sounds/Cafeteria.wav')
const soundFire = new Audio('./js/sounds/Lareira.wav')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
soundForest.loop = true
soundRain.loop = true
soundCoffeShop.loop = true
soundFire.loop = true

soundForest.volume = 0.5




return {
  soundForest,
  soundRain,
  soundCoffeShop,
  soundFire,
  buttonPressAudio,
  kitchenTimer,
}

}