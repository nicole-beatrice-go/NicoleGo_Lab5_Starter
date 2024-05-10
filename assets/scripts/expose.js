// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const currImage = document.querySelector("img");
  hornSelect.addEventListener("change", function() {
    if (hornSelect.value == "air-horn") {
      currImage.src = "assets/images/air-horn.svg";
    }
    if (hornSelect.value == "car-horn") {
      currImage.src = "assets/images/car-horn.svg";;
    }
    if (hornSelect.value == "party-horn") {
      currImage.src = "assets/images/party-horn.svg";;
    }
  })

  const volumeInput = document.querySelector("input");
  const volumeDiv = document.getElementById("volume-controls");
  const volumeImg = volumeDiv.querySelector("img");
  volumeInput.addEventListener("input", function() {
    if (volumeInput.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg"
     }
     if (volumeInput.value >= 1 && volumeInput.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg"
     }
     if (volumeInput.value >= 33 && volumeInput.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg"
     }
     if (volumeInput.value >= 67) {
      volumeImg.src = "assets/icons/volume-level-3.svg"
     }
  })
  const jsConfetti = new JSConfetti();
  const soundButton = document.querySelector("button");
  const sound = document.querySelector("audio");
  soundButton.addEventListener("click", function() {
    if (hornSelect.value == "air-horn" && (volumeInput.value >= 1 && volumeInput.value < 33)) {
      sound.src = "assets/audio/air-horn.mp3";
      sound.volume = 0.33
      sound.play();
    }
    if (hornSelect.value == "air-horn" && (volumeInput.value >= 33 && volumeInput.value < 67)) {
      sound.src = "assets/audio/air-horn.mp3";
      sound.volume = 0.66
      sound.play();
    }
    if (hornSelect.value == "air-horn" && (volumeInput.value >= 67)) {
      sound.src = "assets/audio/air-horn.mp3";
      sound.volume = 0.99
      sound.play();
    }
    if (hornSelect.value == "car-horn" && (volumeInput.value >= 1 && volumeInput.value < 33)) {
      sound.src = "assets/audio/car-horn.mp3";
      sound.volume = 0.33
      sound.play();
    }
    if (hornSelect.value == "car-horn" && (volumeInput.value >= 33 && volumeInput.value < 67)) {
      sound.src = "assets/audio/car-horn.mp3";
      sound.volume = 0.66
      sound.play();
    }
    if (hornSelect.value == "car-horn" && (volumeInput.value >= 67)) {
      sound.src = "assets/audio/car-horn.mp3";
      sound.volume = 0.99
      sound.play();
    }
    if (hornSelect.value == "party-horn" && (volumeInput.value >= 1 && volumeInput.value < 33)) {
      sound.src = "assets/audio/party-horn.mp3";
      sound.volume = 0.33
      sound.play();
      jsConfetti.addConfetti();
    }
    if (hornSelect.value == "party-horn" && (volumeInput.value >= 33 && volumeInput.value < 67)) {
      sound.src = "assets/audio/party-horn.mp3";
      sound.volume = 0.66
      sound.play();
      jsConfetti.addConfetti();
    }
    if (hornSelect.value == "party-horn" && (volumeInput.value >= 67)) {
      sound.src = "assets/audio/party-horn.mp3";
      sound.volume = 0.99
      sound.play();
      jsConfetti.addConfetti();
    }
  })
}
