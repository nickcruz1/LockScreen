function lockscreen() {
  let background = document.querySelector("body");
  let lockModal = document.getElementById("lockscreenModal");


  lockModal.style.display = "block";
}

enterPasscode = () => {
  const passcode = document.querySelectorAll(".passcode")
  let lockModal = document.getElementById("lockscreenModal");
 
  alert("Thank you! Passcode has been submitted and screen has now been unlocked. ")
   lockModal.style.display = "none";
  
  
  // Later on add some code that checks for the numbers in passcode before closing modal
  // Add a blur effect for the background. 
 
// for (let i = 0; i < passcode.length; i++) {
  
//    if(passcode.value == "") {
//     alert("No Passcode Entered");
//   }  else {
//     return false;
//     alert("Passcode has been accepted. Lockscreen has been opened");
//     lockModal.style.display = "none";
//   }
  
// 
  
 
  
}


// For Testing Purposes
hi = () => {
  alert("Hi");
};

theTest = () => {
  console.log("testing");
};

function theOldWay() {
  console.log("The old way of writing functions");
}



