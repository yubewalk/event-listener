// Tell the current date and time on button click event
  function tellDate(){
    document.getElementById('demo').innerHTML=Date();
  }

//   Change button text onclick and change back when click again
  function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === 'My Old Text') element.innerHTML = 'My New Text';
        else {
            element.innerHTML = 'My Old Text';
        }
    }
}

// Change button colore according to the class name
var buttons = document.getElementsByClassName("my-button");

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  // Add an onclick event listener to the button
  button.addEventListener("click", function() {
    // Check the class name of the button and set the color accordingly
    if (this.classList.contains("red")) {
      this.style.backgroundColor = "red";
    } else if (this.classList.contains("yellow")) {
        this.style.backgroundColor = "yellow";
    } else if (this.classList.contains("blue")) {
      this.style.backgroundColor = "blue";
    } else if (this.classList.contains("green")) {
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "gray"; // Default color
    }
  });
}






