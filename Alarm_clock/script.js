

// let t = new Date();
// console.log(t);

// time.innerHTML = `
// <div class="set-time">
//   <label for="time">Enter the time</label>
//   <input type="time" id="dateInput">
//   <input type="submit" id="btn">
// </div>
// `;

// let dateInput = document.getElementById('dateInput');
// let submit = document.getElementById('btn');

// submit.addEventListener('click', function(){
//     console.log('button clicked');
//     let dateValue = dateInput.value;
//     console.log('Time value:', dateValue);
//     let audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');

//     setInterval(()=>{
//         let currentTime = new Date();
//         let currentHours = currentTime.getHours();
//         let currentMinutes = currentTime.getMinutes();
//         let enteredHours = parseInt(dateValue.split(':')[0]);
//         let enteredMinutes = parseInt(dateValue.split(':')[1]);
        
//         if (enteredHours === currentHours && enteredMinutes === currentMinutes) {
//             audio.play();
//         }
//     }, 1000); // Run the check every second (adjust the interval as desired)
// });
setInterval(()=>{
    let d = new Date().toTimeString();
    currTime.innerHTML = d; 
})
time.innerHTML = `
<div class="set-time">
  <input type="time" id="timeInput">
  <input type="submit" value="Set Alarm" id="btn">
</div>
`;

let button = document.getElementById('btn')
let timeInput = document.getElementById('timeInput')
button.addEventListener('click', function(){
    let timeValue = timeInput.value
    let inputHours = (timeValue.split(':')[0]);
        let inputMin = (timeValue.split(':')[1]);
    alert(`Your Alarm is set for ${inputHours}:${inputMin}`)
    let audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
   
    setInterval(() => {
        let d = new Date();
        let currHours = d.getHours();
        let currMin = d.getMinutes();
        
       
        if(currHours == inputHours && currMin == inputMin){
         audio.play()
        }
    }, 1000);
   
}) 
