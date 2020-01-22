/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr){
  let time= timeStr.parseInt();
  if(time<12) return 'Good Morning';
  else if(time>=12 && time<=5) return 'Good Afternoon';
  else return 'Good Evening';
}
/* Write your implementation of displayMessage() */
