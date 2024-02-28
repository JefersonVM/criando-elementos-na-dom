const select = document.querySelector("select");
const input = document.querySelector("input");
const button = document.querySelector("button");
const contentTags = document.querySelector(".content-tags");

let currentSelected = "";
select.addEventListener("change", () => {
  currentSelected = select.options[select.selectedIndex].value;

  if (!currentSelected) {
    input.style.display = "none";
    button.style.display = "none";
    return;
  }
  input.style.display = "block";
  input.placeholder = `Informe o texto da sua tag`;
  button.style.display = "flex";

  if (currentSelected === "img") {
    input.placeholder = `Informe a URL da imagem`;
  }
});

const resetApp = () => {
  select.value = "";
  input.value = "";
};

button.addEventListener("click", () => {
  if (!input.value.trim()) {
    return;
  }

  const newElement = document.createElement(currentSelected);

  if (currentSelected === "img") {
    newElement.src = input.value;
    contentTags.appendChild(newElement);
    resetApp();
    return;
  }

  newElement.textContent = input.value;
  contentTags.appendChild(newElement);
  resetApp();
});
