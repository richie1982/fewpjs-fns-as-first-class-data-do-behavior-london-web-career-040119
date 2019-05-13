/* Given Code, don't edit */
/* End Given Code, don't edit above here...*/

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  time = parseInt(timeString.split(".")[0]);
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time >= 12 && time < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(greeting) {
  document.getElementById('greeting').textContent = greeting;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
