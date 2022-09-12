import {  
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  sliderForest,
  sliderRain,
  sliderCoffeShop,
  sliderFire,
  lightMode,
  darkMode,
  body,
} from "./elements.js"

import Sounds from "./sounds.js"
const sound = Sounds() 

export default function Events({ timer, controls }) {
  
  // Botões Timer
  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    controls.soundButtonall()
  })
    
  buttonStop.addEventListener('click', function() {
    timer.updateDisplay()
    timer.timeOut()
    controls.soundButtonall()
  })
    
  buttonMore.addEventListener('click', function() {
    timer.more()
    timer.updateDisplay()
    controls.soundButtonall()
  })
    
  buttonLess.addEventListener('click', function() {
    timer.less()
    timer.updateDisplay()
    controls.soundButtonall()
  })
  
  // Botões de musicas ambiente
  
  buttonForest.addEventListener('click' , function() {
    controls.soundPlayForest()
    controls.soundStopRain()
    controls.soundStopCoffeShop()
    controls.soundStopFire()
  })
  
  sliderForest.addEventListener('input', function(){
    controls.setVolumeForest() 
  })
  
  buttonRain.addEventListener('click' , function () {
    controls.soundPlayRain()
    controls.soundStopForest()
    controls.soundStopCoffeShop()
    controls.soundStopFire()
  })

  sliderRain.addEventListener('input' , function() {
    controls.setVolumeRain()
  })
 

  buttonCoffeShop.addEventListener('click' , function() {
    controls.soundPlayCoffeShop()
    controls.soundStopFire()
    controls.soundStopForest()
    controls.soundStopRain()
  })

  sliderCoffeShop.addEventListener('input' , function() {
    controls.setVolumeCoffeShop()
  })

  buttonFire.addEventListener('click' , function() {
    controls.soundPlayFire()
    controls.soundStopCoffeShop()
    controls.soundStopForest()
    controls.soundStopRain()
  })

  sliderFire.addEventListener('input' , function() {
    controls.setVolumeFire()
  })

  lightMode.addEventListener('click' , function(){
    controls.buttonlight()
  })

  darkMode.addEventListener('click' , function(){
    controls.buttondark()
  })
 
}