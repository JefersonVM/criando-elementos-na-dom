const container = document.querySelector(".container");

const fillPostsAndCreateElements = (posts) => {
  for (const post of posts) {
    const divCardpost = document.createElement("div");
    divCardpost.classList.add("card-post");

    container.appendChild(divCardpost);

    const id = document.createElement("h1");
    const title = document.createElement("strong");
    const description = document.createElement("p");

    id.textContent = post.id;
    title.textContent = post.title;
    description.textContent = post.body;

    divCardpost.appendChild(id);
    divCardpost.appendChild(title);
    divCardpost.appendChild(description);
  }
};

async function loadPosts() {
  try {
    const response = await api.get("/posts");

    fillPostsAndCreateElements(response.data);
  } catch (error) {
    console.log(error.response);
  }
}

loadPosts();
