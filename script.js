//your JS code here. If required.
let pointer = 0
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.onclick=()=>{
	pointer = pointer+1
	alert(pointer)
	counter.textContent= pointer;
};
