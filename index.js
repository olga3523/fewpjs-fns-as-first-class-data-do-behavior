/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( time ) {
  if (time == "8:40") return "Good Morning";
  if (time == "14:21") return "Good Afternoon";
  if (time == "19:00") return "Good Evening";
}

function displayMessage(){
  document.getElementById('greeting').innerHTML = "TEST";
}
