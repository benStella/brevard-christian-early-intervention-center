/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {

  const dropbtn = document.getElementsByClassName('dropbtn')
  const applicantData = document.getElementsByClassName('dropdown-content')

  
  let i
  for(i = 0; i < applicantData.length; i++) {
    console.log(applicantData)
    

    // const x = applicantData[i].map(() => x)
    
    applicantData[i].classList.toggle("show")
      
  }
    
}
  


  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
        }
    }
  }