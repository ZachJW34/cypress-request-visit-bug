const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const loginStatus = document.getElementById("status");

const isLoggedIn = () => {
  return document.cookie.split(";").some((item) => item.includes("session="));
};

const displayLoggedIn = () => {
  loginStatus.innerHTML = "You're logged in!";
};

const displayLoggedOut = () => {
  loginStatus.innerHTML = "You're logged out!";
};

if (isLoggedIn()) {
  displayLoggedIn();
} else {
  displayLoggedOut();
}

loginButton.addEventListener("click", () => {
  fetch("/api/login", { method: "POST" });
  displayLoggedIn();
});

logoutButton.addEventListener("click", () => {
  document.cookie =
    "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
  displayLoggedOut();
});
