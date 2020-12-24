let range = document.querySelector("input[type = 'range']");
let value = document.querySelector(".value");
let footerText =  document.querySelector(".footer-text");

value.innerHTML = "$" + range.value;
value.style.left = -50 + range.value * (120 / 15) +'px';


range.onmousemove = function(){
  value.style.left = -50 + range.value * (120 / 15) +'px';
  value.innerHTML = "$" + range.value;
  footerText.innerHTML = `You need ${range.max - range.value}$ more to reach your target`
  if(range.value == range.max){
    footerText.innerHTML = ' You have reached your target!'
  }
}


