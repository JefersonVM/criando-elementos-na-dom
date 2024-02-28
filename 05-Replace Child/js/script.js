const contentUser = document.querySelector(".content-user");
const button = document.querySelector("button");
const h1Second = document.querySelector("h1:last-child");
const h1third = document.createElement("h1");

h1third.textContent = "Terceiro H1";

button.addEventListener("click", function () {
  contentUser.replaceChild(h1third, h1Second);
});
