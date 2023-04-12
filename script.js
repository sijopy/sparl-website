var vid = document.getElementById("gossVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
}

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var phone_number = document.forms['form']['phonenumber'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var phone_error = document.getElementById('phone_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);
phone_number.addEventListener('input', phone_Verify);

// function validated() {
//   if (email.value.length < 11) {
// 	email.classList.add("is-invalid");
// 	email.focus();
// 	return false;
//   }
//   if (password.value.length < 6) {
// 	password.classList.add("is-invalid");
// 	password.focus();
// 	return false;
//   }
//   if (phone_number.value.length < 10) {
// 	phone_number.classList.add("is-invalid");
// 	phone_number.focus();
// 	return false;
//   }
// }

function email_Verify() {
  var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.match(email_pattern)) {
	email.classList.remove("is-invalid");
	email.classList.add("is-valid");
	email_error.style.display = "none";
	return true;
  } else {
	email.classList.remove("is-valid");
	email.classList.add("is-invalid");
	email_error.style.display = "block";
	return false;
  }
}

function pass_Verify() {
	var pass_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (password.value.match(pass_pattern)) {
	password.classList.remove("is-invalid");
	password.classList.add("is-valid");
	pass_error.style.display = "none";
	return true;
  } else {
	password.classList.remove("is-valid");
	password.classList.add("is-invalid");
	pass_error.style.display = "block";
	return false;
  }
}

function phone_Verify() {
	if (phone_number.value.length == 10) {
	  phone_number.classList.remove("is-invalid");
	  phone_number.classList.add("is-valid");
	  phone_error.style.display = "none";
	  return true;
	} else {
	  phone_number.classList.remove("is-valid");
	  phone_number.classList.add("is-invalid");
	  phone_error.style.display = "block";
	  return false;
	}
  }

  document.querySelector('form').addEventListener('submit', function(event) {
	if (!email_Verify()) {
	  event.preventDefault(); // prevent form submission if validation fails
	}
  });

  document.querySelector('form').addEventListener('submit', function(event) {
	if (!pass_Verify()) {
	  event.preventDefault(); // prevent form submission if validation fails
	}
  });

  document.querySelector('form').addEventListener('submit', function(event) {
	if (!phone_Verify()) {
	  event.preventDefault(); // prevent form submission if validation fails
	}
  });
  
// function email_Verify() {
// 	var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	if (email.value.trim() === '') {
// 	  email.classList.remove("is-valid");
// 	  email.classList.remove("is-invalid");
// 	  email_error.style.display = "none";
// 	  return false;
// 	} else if (email.value.match(email_pattern)) {
// 	  email.classList.remove("is-invalid");
// 	  email.classList.add("is-valid");
// 	  email_error.style.display = "none";
// 	  return true;
// 	} else {
// 	  email.classList.remove("is-valid");
// 	  email.classList.add("is-invalid");
// 	  email_error.style.display = "block";
// 	  return false;
// 	}
//   }
  
//   function pass_Verify() {
// 	var pass_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// 	if (password.value.trim() === '') {
// 	  password.classList.remove("is-valid");
// 	  password.classList.remove("is-invalid");
// 	  pass_error.style.display = "none";
// 	  return false;
// 	} else if (password.value.match(pass_pattern)) {
// 	  password.classList.remove("is-invalid");
// 	  password.classList.add("is-valid");
// 	  pass_error.style.display = "none";
// 	  return true;
// 	} else {
// 	  password.classList.remove("is-valid");
// 	  password.classList.add("is-invalid");
// 	  pass_error.style.display = "block";
// 	  return false;
// 	}
//   }
  
//   function phone_Verify() {
// 	if (phone_number.value.trim() === '') {
// 	  phone_number.classList.remove("is-valid");
// 	  phone_number.classList.remove("is-invalid");
// 	  phone_error.style.display = "none";
// 	  return false;
// 	} else if (phone_number.value.length == 10) {
// 	  phone_number.classList.remove("is-invalid");
// 	  phone_number.classList.add("is-valid");
// 	  phone_error.style.display = "none";
// 	  return true;
// 	} else {
// 	  phone_number.classList.remove("is-valid");
// 	  phone_number.classList.add("is-invalid");
// 	  phone_error.style.display = "block";
// 	  return false;
// 	}
//   }
  

// const emailInput = document.getElementById("email-input");
// const emailFeedback = document.getElementById("email-feedback");
// const passInput = document.getElementById("pass-input");
// const passFeedback = document.getElementById("pass-feedback");
// const phoneInput = document.getElementById("phone-input");
// const phoneFeedback = document.getElementById("phone-feedback");

// emailInput.addEventListener("blur", function() {
// if (emailInput.checkValidity()) {
// emailInput.classList.remove("is-invalid");
// emailInput.classList.add("is-valid");
// emailFeedback.innerHTML = "";
// } else {
// emailInput.classList.remove("is-valid");
// emailInput.classList.add("is-invalid");
// emailFeedback.innerHTML = "Please fill up your Email or Phone";
// }
// });




// passInput.addEventListener("blur", function() {
// if (passInput.checkValidity()) {
// passInput.classList.remove("is-invalid");
// passInput.classList.add("is-valid");
// passFeedback.innerHTML = "";
// } else {
// passInput.classList.remove("is-valid");
// passInput.classList.add("is-invalid");
// emailFeedback.innerHTML = "Invalid password";
// }
// });


// phoneInput.addEventListener("blur", function() {
// 	if (phoneInput.checkValidity()) {
// 	phoneInput.classList.remove("is-invalid");
// 	phoneInput.classList.add("is-valid");
// 	phoneFeedback.innerHTML = "";
// 	} else {
// 	phoneInput.classList.remove("is-valid");
// 	phoneInput.classList.add("is-invalid");
//     emailFeedback.innerHTML = "Incorrect phone number";
// 	}
// 	});
