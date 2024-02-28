const contentUser = document.querySelector(".content-user");

const userProfileImg = document.createElement("img");

userProfileImg.src = "https://avatars.githubusercontent.com/u/62728162?v=4";

userProfileImg.classList.add("logo");

const firstH1 = contentUser.querySelector("h1:first-child");

contentUser.insertBefore(userProfileImg, firstH1);
