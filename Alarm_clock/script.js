let audio = new Audio(
  "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
);
let intervalId;
setInterval(() => {
let d = new Date().toTimeString();
currTime.innerHTML = d;
});
time.innerHTML = `
<div class="set-time">
<input type="time" id="timeInput" required>
<input type="submit" value="Set Alarm" id="btn" class="button">
<input type="submit" value="Stop" id="stp" class="button">
</div>
`;

let button = document.getElementById("btn");
let timeInput = document.getElementById("timeInput");

button.addEventListener("click", function () {
let timeValue = timeInput.value;
let inputHours = timeValue.split(":")[0];
let inputMin = timeValue.split(":")[1];
alert(`Your Alarm is set for ${inputHours}:${inputMin}`);


intervalId=setInterval(() => {
  let d = new Date();
  let currHours = d.getHours();
  let currMin = d.getMinutes();

  if (currHours == inputHours && currMin == inputMin) {
    audio.play();
  }
}, 1000);
});
let stop = document.getElementById("stp");
stop.addEventListener('click', function(){
    audio.pause();
  audio.currentTime = 0;
clearInterval(intervalId);
})