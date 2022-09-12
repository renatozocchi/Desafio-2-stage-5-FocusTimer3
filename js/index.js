import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import Controls from "./controls.js"
import {  
  minutesDisplay,
  secondsDisplay,
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
} from "./elements.js"

  // Controls
  const controls = Controls({
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
  })

// Timer
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
})

// Events
Events({ timer, controls })








