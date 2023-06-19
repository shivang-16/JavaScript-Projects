const update=()=>{
let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
let mon = a.getMonth();
let y = a.getFullYear();
date.innerHTML = 'Date: ' + d + ' - ' + mon + ' - ' + y;
clock.innerHTML = h + ' : ' + m + ' : ' + s;
setTimeout(update,1000)
}
update();