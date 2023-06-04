const checkInputs = fatherDivID => Array.from(document.getElementById(fatherDivID).querySelectorAll("input")).reduce((acc, input) => {
  if (!(input.checkValidity()))
    alert(`Missing or Invalid input for ${input.name}`);
  return acc && input.checkValidity();
}, true
);

function previous(element) {
  let fatherDiv = element.parentNode.id;
//  if (checkInputs(fatherDiv))
  switch (fatherDiv) {
    case "addressDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "block";
      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      document.getElementById("addressDiv").style.display = "block";
      break;
    case "resultDiv":
      element.parentNode.style.display = "none";
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
        document.getElementById("addressDiv").style.display = "block";
        break;
      case "addressDiv":
        element.parentNode.style.display = "none";
        document.getElementById("profileDiv").style.display = "block";
      break;
      case "profileDiv":
        if (document.getElementsByName('password')[0].value !== document.getElementsByName('password-repeat')[0].value) {
          alert("Password mismatch!");
          break;
        }
        element.parentNode.style.display = "none";
        document.getElementById("resultDiv").style.display = "block";
        showData();
        break;
  }
  else
    alert("Please check and fill all required fields with valid input before proceeding.");
}

function showData() {
  document.getElementById('personalDiv').style.display = "block";
  document.getElementById('nameLabel').innerText = document.getElementsByName('firstName')[0].value + ' ' + document.getElementsByName('lastName')[0].value;
  document.getElementById('birthDateLabel').innerText = document.getElementsByName('birthDate')[0].value;
  document.getElementById('nationalityLabel').innerText = document.getElementsByName('nationality')[0].value;
  document.getElementById('addressLabel').innerText = document.getElementsByName('address')[0].value + ', ' + document.getElementsByName('houseNumber')[0].value + ', ' + document.getElementsByName('zipCode')[0].value;
  document.getElementById('usernameLabel').innerText = document.getElementsByName('username')[0].value;
  document.getElementById('passwordLabel').innerText = document.getElementsByName('password')[0].value;
  let imgSrc = document.getElementsByName('imageFile')[0].value;
  if (imgSrc.includes('C:\\fakepath\\'))
    imgSrc = imgSrc.replace('C:\\fakepath\\', './images/');
  document.getElementById('photoLabel').src = imgSrc;
}