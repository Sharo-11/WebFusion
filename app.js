const min = document.querySelector(".min .numb");
const sec = document.querySelector(".sec .numb");
var timer = setInterval(()=>{
  var currentDate = new Date().getTime();
  var launchDate = new Date('sept 15, 2025 13:30:00').getTime();
  var duration = launchDate - currentDate;

  var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((duration % (1000 * 60)) / 1000);

  min.innerHTML = minutes;
  sec.innerHTML = seconds;

  if(minutes < 10){
    min.innerHTML = '0' + minutes;
  }
  if(seconds < 10){
    sec.innerHTML = '0' + seconds;
  }
  if(duration < 0){
    clearInterval(timer);
  }
}, 1000);

function checkCode() {
    console.log(codeInput.value)
if (codeInput.value === '1234') { 
clearInterval(timer);
min.innerHTML = minutes;
sec.innerHTML = seconds;
} else {
alert('Incorrect code. Try again.');
}
}
