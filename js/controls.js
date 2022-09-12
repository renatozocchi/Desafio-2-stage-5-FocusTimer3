import Sounds from "./sounds.js"
const sound = Sounds() 

export default function Controls({  
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  svgForestSecundary,
  svgRainSecundary,
  svgCoffeShopSecundary,
  svgFireSecundary,
  sliderForest,
  sliderRain,
  sliderCoffeShop,
  sliderFire,
  lightMode,
  darkMode,
  body,
}) {


  function soundPlayForest() {
    buttonForest.classList.add('bbsecundary')
    buttonForest.classList.add('sliderclick')
    svgForestSecundary.classList.add('svgsecundary')
    sound.soundForest.play()
  }

  
  function soundPlayRain() {
    buttonRain.classList.add('bbsecundary')
    buttonRain.classList.add('sliderclick')
    svgRainSecundary.classList.add('svgsecundary')
    sound.soundRain.play()
  }
  
  function soundPlayCoffeShop() {
    buttonCoffeShop.classList.add('bbsecundary')
    buttonCoffeShop.classList.add('sliderclick')
    svgCoffeShopSecundary.classList.add('svgsecundary')
    sound.soundCoffeShop.play()
  }
  
  function soundPlayFire() {
    buttonFire.classList.add('bbsecundary')
    buttonFire.classList.add('sliderclick')
    svgFireSecundary.classList.add('svgsecundary')
    sound.soundFire.play()
  }
  
  function soundStopForest() {
    buttonForest.classList.remove('bbsecundary')
    buttonForest.classList.remove('sliderclick')
    svgForestSecundary.classList.remove('svgsecundary')
    sound.soundForest.pause()
  }
  
  function soundStopRain() {
    buttonRain.classList.remove('bbsecundary')
    buttonRain.classList.remove('sliderclick')
    svgRainSecundary.classList.remove('svgsecundary')
    sound.soundRain.pause()
  }
  
  function soundStopCoffeShop() {
    buttonCoffeShop.classList.remove('bbsecundary')
    buttonCoffeShop.classList.remove('sliderclick')
    svgCoffeShopSecundary.classList.remove('svgsecundary')
    sound.soundCoffeShop.pause()
  }
  
  function soundStopFire() {
    buttonFire.classList.remove('bbsecundary')
    buttonFire.classList.remove('sliderclick')
    svgFireSecundary.classList.remove('svgsecundary')
    sound.soundFire.pause()
  }

  function soundButtonall() {
    sound.buttonPressAudio.play()
  }

  function soundAlarm() {
    sound.kitchenTimer.play()
  }

  function setVolumeForest() {
    let audio = sound.soundForest
    let volume = sliderForest.value
    audio.volume = volume / 100
  }

  function setVolumeRain() {
    let audio = sound.soundRain
    let volume = sliderRain.value
    audio.volume = volume / 100
  }

  function setVolumeCoffeShop() {
    let audio = sound.soundCoffeShop
    let volume = sliderCoffeShop.value
    audio.volume = volume / 100
  }

  function setVolumeFire() {
    let audio = sound.soundFire
    let volume = sliderFire.value
    audio.volume = volume / 100
  }

  function buttonlight() {
    darkMode.classList.toggle('hide')
    lightMode.classList.toggle('hide')
    body.classList.remove('ligth')
    body.classList.add('dark')
  }

  function buttondark() {
    lightMode.classList.remove('hide')
    darkMode.classList.add('hide')
    body.classList.remove('dark')
    body.classList.add('ligth')
  }


  return {
    soundPlayForest,
    soundPlayRain,
    soundPlayCoffeShop,
    soundPlayFire,
    soundStopForest,
    soundStopRain,
    soundStopCoffeShop,
    soundStopFire,
    soundAlarm,
    soundButtonall,
    setVolumeForest,
    setVolumeRain,
    setVolumeCoffeShop,
    setVolumeFire,
    buttonlight,
    buttondark,
  }

}