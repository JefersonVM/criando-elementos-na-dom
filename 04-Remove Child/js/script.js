const contentUser = document.querySelector(".content-user");
const button = document.querySelector("button");
const userProfileImg = document.createElement("img");

const h3 = document.createElement("h3");

h3.textContent = "Meu h3";

userProfileImg.src = "https://avatars.githubusercontent.com/u/62728162?v=4";

userProfileImg.classList.add("logo");

const firstH1 = contentUser.querySelector("h1:first-child");

contentUser.insertBefore(userProfileImg, firstH1);

contentUser.appendChild(h3);

button.addEventListener("click", function () {
  contentUser.removeChild(h3);
});