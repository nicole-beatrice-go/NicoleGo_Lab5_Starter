// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const inputForm = document.querySelector("form");
  const inputTxt = document.querySelector("textarea");
  const talkButton = document.querySelector("button");

  const voiceSelect = document.querySelector("select");
  const pitch = document.querySelector("#pitch");
  const pitchValue = document.querySelector(".pitch-value");
  const rate = document.querySelector("#rate");
  const rateValue = document.querySelector(".rate-value");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", function() {
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    synth.speak(utterThis);
  })
  const expImg = document.querySelector("img");
  //while (synth.speaking) {
   // expImg.src = "assets/images/smiling-open.png"
  //}
  synth.addEventListener("start", function() {
    expImg.src = "assets/images/smiling-open.png";
  })

  synth.addEventListener("end", function() {
    expImg.src = "assets/images/smiling.png";
  })
}
