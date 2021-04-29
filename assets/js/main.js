// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Accordion
function toggleAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else {
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

function toggleAccordionSmallScreen() {
  var x = document.getElementById("topic-list");
  if (x.className.indexOf("w3-hide-small") == -1) {
    x.className += " w3-hide-small";
  } else {
    x.className = x.className.replace("w3-hide-small", "");
  }
}

// Sidebar
function sidebar_open() {
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("sidebar").style.display = "block";
}
function sidebar_close() {
  document.getElementById("sidebar").style.display = "none";
}

window.onscroll = function () {
  
  // Show "Go to top" button.
  var mybutton = document.getElementById("go-to-top-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}