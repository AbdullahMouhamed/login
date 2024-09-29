// ! variables
var signUpanchor = document.querySelector('.sign-up-a');
var signInanchor = document.querySelector('.sign-in-a');
var signIn = document.querySelector(".sign-in");
var signUp = document.querySelector(".sign-up");
var userName = document.querySelector(".user-name")
var email = document.querySelector(".email")
var password = document.querySelector(".password")
var signUpButton = document.querySelector(".sign-up-button")
var signInButton = document.querySelector(".sign-in-button")
var success = document.querySelector(".success")
var failed = document.querySelector(".failed")
var users = JSON.parse(localStorage.getItem("usersData")) || []
var signInEmail = document.querySelector(".sign-in-email")
var signInPassword = document.querySelector(".sign-in-password")
var home = document.querySelector(".home")
var valid = document.querySelector(".valid")
var required = document.querySelector(".req")
var helloUser = document.querySelector(".hello-user")
var out = document.querySelector(".out")
// ? events
signInanchor.addEventListener('click', function () {
    signIn.classList.replace("hide", "show")
    signUp.classList.replace("show", "hide")
})
signUpanchor.addEventListener('click', function () {
    signUp.classList.replace("hide", "show")
    signIn.classList.replace("show", "hide")
})
signUpButton.addEventListener("click", function () {
    if (userName.value == "") {
        failed.classList.remove("d-none");
        success.classList.add("d-none")
    }
    else if (password.value == "") {
        failed.classList.remove("d-none");
        success.classList.add("d-none")
    }
    else if (email.value == "") {
        failed.classList.remove("d-none");
        success.classList.add("d-none")
    }
    else {
        var userData = {
            Name: userName.value,
            Email: email.value,
            Password: password.value,
        }
        users.push(userData)
        localStorage.setItem("usersData", JSON.stringify(users))
        userName.value = ""
        email.value = ""
        password.value = ""
        success.classList.remove("d-none")
        failed.classList.add("d-none")
    }

})
signInButton.addEventListener("click", function () {
    if (
        signInEmail.value == ""
    ) {
        required.classList.remove("d-none")
        valid.classList.add("d-none")
    } else if (
        signInPassword.value == ""
    ) {
        required.classList.remove("d-none")
        valid.classList.add("d-none")
    }
    for (var i = 0; i < users.length; i++) {
        if (
            users[i].Email == signInEmail.value &&
            users[i].Password == signInPassword.value
        ) {
            home.classList.replace("hide", "show")
            signIn.classList.replace("show", "hide")
            helloUser.innerHTML = users[i].Name
        } else if (
            users[i].Email !== signInEmail.value &&
            users[i].Password !== signInPassword.value
        ) {
            valid.classList.remove("d-none")
            required.classList.add("d-none")
        }
    }
})
out.addEventListener("click", function () {
    home.classList.replace("show", "hide")
    signIn.classList.replace("hide", "show")
    valid.classList.add("d-none")
    required.classList.add("d-none")
    signInEmail.value = ''
    signInPassword.value = ''
})

