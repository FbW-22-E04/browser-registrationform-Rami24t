const checkInputs = fatherDivID => Array.from(document.getElementById(fatherDivID).querySelectorAll("input")).reduce((acc, input) => acc && input.checkValidity(), true);

function previous(element) {
  let fatherDiv = element.parentNode.id;
//  if (checkInputs(fatherDiv))
  switch (fatherDiv) {
    case "addressDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "block";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "block";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "resultDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "block";
      break;
  }
}

function nextDiv(element) {
  let fatherDiv = element.parentNode.id;
  if (checkInputs(fatherDiv))
    switch (fatherDiv) {
      case "personalDiv":
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "block";
        document.getElementById("profileDiv").style.display = "none";
        break;
      case "addressDiv":
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("profileDiv").style.display = "block";
        document.getElementById("resultDiv").style.display = "none";
      break;
      case "profileDiv":
        element.parentNode.style.display = "none";
        document.getElementById("personalDiv").style.display = "none";
        document.getElementById("addressDiv").style.display = "none";
        document.getElementById("resultDiv").style.display = "block";
        checkInputs(element.parentNode.id);
        break;
    default:
      break;
  }
  else
    alert("Please check and fill all required fields with valid input before proceeding.")
}

function showData() {

}