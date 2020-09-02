

// FAQ section

// Get the container element
var btnContainer = document.getElementById("nav-tabs");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("tabs-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-tab");
    current[0].className = current[0].className.replace(" active-tab", "");
    this.className += " active-tab";
  });
}


