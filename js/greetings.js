const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greetingForm = document.querySelector("#greeting-form"); 
const logout = document.querySelector("#logout-button");
const quoteContainer = document.querySelector("#quote");
const weatherContainer = document.querySelector("#weather");
const todoContainer = document.querySelector("#todoContainer");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    showLogoutBtn();
};


function paintGreetings(username) {
    var date = new Date();
    var nowHours = date.getHours();
    if (nowHours < 12){
        greet = "Good Morning";
    } else if (nowHours >= 12 && nowHours <= 18) {
        greet = "Good Afternoon";
    } else if (nowHours >= 18 && nowHours <= 24) {
        greet = "Good Evening";
    }
    greeting.innerText = `${greet}, ${username}`;
}

function showLoginForm() {
    loginInput.value = "";
    localStorage.clear();
    greetingForm.classList.add(HIDDEN_CLASSNAME);
    quoteContainer.classList.add(HIDDEN_CLASSNAME);
    weatherContainer.classList.add(HIDDEN_CLASSNAME);
    todoContainer.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
};


function showLogoutBtn() {
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
}

logout.addEventListener("click", (e) => {
    greetingForm.classList.remove(HIDDEN_CLASSNAME);
    showLoginForm();
});

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
    paintGreetings(savedUsername);
    showLogoutBtn();
    quoteContainer.classList.remove(HIDDEN_CLASSNAME);
    weatherContainer.classList.remove(HIDDEN_CLASSNAME);
    todoContainer.classList.remove(HIDDEN_CLASSNAME);

} else {
    showLoginForm ();
    loginForm.addEventListener("submit", onLoginSubmit);
};
