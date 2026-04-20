
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
var L_email = document.getElementById("L_email");
var L_password = document.getElementById("L_password");
// var S_username = document.getElementById("S_username");
// var S_email = document.getElementById("S_Email");
// var S_password = document.getElementById("S_password");

function register() {
    var S_username = document.getElementById("S_username");
var S_email = document.getElementById("S_Email");
var S_password = document.getElementById("S_password");
    if (S_email.value == "" || S_password.value == "" || S_username.value == "") {
        alert("Please fill in all fields.");
        return false;
    }
   var getData = JSON.parse(localStorage.getItem("user"));
var storage = []
var user = {
    username: S_username.value,
    email: S_email.value,
    password: S_password.value
}
localStorage.setItem("user", JSON.stringify(user));
storage.push(user);
window.location.href = "./dashboard.html";
}
function login() {
    var getData = JSON.parse(localStorage.getItem("user"));
    if (L_email.value == "" || L_password.value == "") {
        alert("Please fill in all fields.");
        return false;
    }
    if (L_email.value === getData.email && L_password.value === getData.password) {
        alert("Login successful!");
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid email or password.");
    }

}