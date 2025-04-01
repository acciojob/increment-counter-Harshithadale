//your JS code here. If required.
let pointer = 0
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.onclick=()=>{
	alert(pointer)
	pointer = pointer+1
	counter.textContent= pointer;
};
