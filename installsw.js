// function openPage(pageName, elmnt, color) {
//   // Hide all elements with class="tabcontent" by default */
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Remove the background color of all tablinks/buttons
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }

//   // Show the specific tab content
//   document.getElementById(pageName).style.display = "block";

//   // Add the specific color to the button used to open the tab content
//   elmnt.style.backgroundColor = color;
// }

function calculateBestFuel() {
  let alcohol = Number.parseFloat(document.getElementById("alcohol").value);
  let gasoline = Number.parseFloat(document.getElementById("gasoline").value);
  let result = document.getElementById("fuel-result");

  result.textContent = (alcohol / gasoline > 0.7) ? "Gasolina" : "Álcool";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click(); 

