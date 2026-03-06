document.getElementById("portfolioForm").addEventListener("submit", function(e){

e.preventDefault();

/* Save text inputs */

localStorage.setItem("name", document.getElementById("name").value);
localStorage.setItem("dob", document.getElementById("dob").value);
localStorage.setItem("education", document.getElementById("education").value);
localStorage.setItem("skills", document.getElementById("skills").value);

localStorage.setItem("mainskills", document.getElementById("mainskills").value);
localStorage.setItem("profile", document.getElementById("profile").value);

localStorage.setItem("phone", document.getElementById("phone").value);
localStorage.setItem("email", document.getElementById("email").value);
localStorage.setItem("address", document.getElementById("address").value);

localStorage.setItem("experience", document.getElementById("experience").value);
localStorage.setItem("eduDetails", document.getElementById("eduDetails").value);

localStorage.setItem("project1", document.getElementById("project1").value);
localStorage.setItem("project2", document.getElementById("project2").value);
localStorage.setItem("project3", document.getElementById("project3").value);

localStorage.setItem("linkedin", document.getElementById("linkedin").value);
localStorage.setItem("github", document.getElementById("github").value);


/* Handle profile photo upload */

const file = document.getElementById("photo").files[0];

if(file){

const reader = new FileReader();

reader.onload = function(){

localStorage.setItem("photo", reader.result);

/* Redirect to portfolio page */

window.location.href = "portfolio.html";

};

reader.readAsDataURL(file);

}

});