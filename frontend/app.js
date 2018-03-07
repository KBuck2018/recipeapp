const serverUrl = "http://localhost:3001/recipes";

let recipesList = document.body.querySelector("ul");

function loadData() {
  recipesList.innerHTML = "";
  fetch(serverUrl)
    .then(res => res.json())
    .then(recipes => {
      // Take data in db and for each entry, create a tags and 2 buttons: one for deletion and one for
      // showing the edit/update form
      recipes.forEach(recipes => {
        const listItemContainer = document.createElement("li");
        const listItemLink = document.createElement("a");
        listItemLink.setAttribute("href", recipes.href);
        listItemLink.innerHTML = recipes.title;
        listItemContainer.appendChild(listItemLink);

        const updateLink = document.createElement("button");
        updateLink.setAttribute("class", "update");
        updateLink.setAttribute("data-title", `${recipe.title}`);
        updateLink.innerHTML = "Update";

        const deleteLink = document.createElement("button");
        deleteLink.setAttribute("class", "delete");
        deleteLink.setAttribute("data-title", `${recipe.title}`);
        deleteLink.innerHTML = "Delete";

        listItemContainer.appendChild(updateLink);
        listItemContainer.appendChild(deleteLink);
        recipesList.appendChild(listItemContainer);
      });

      document.body.querySelectorAll("button.update").forEach(button => {
        button.addEventListener("click", e => {
          isUserEditing = !isUserEditing;
          const buttonText = isUserEditing ? "Cancel" : "Update";
          e.target.innerHTML = buttonText;

          document.body.querySelectorAll("form").forEach(form => {
            form.classList.toggle("hidden");
          });

          let currentItem = e.target.parentNode.querySelector("a");
          let currentTitle = currentItem.innerHTML;
          let currentUrl = currentItem.getAttribute("href");

          itemUnderEdit = {
            title: currentTitle,
            url: currentUrl
          };

          updateForm
            .querySelector('[name="title"]')
            .setAttribute("value", currentTitle);
          updateForm
            .querySelector('[name="url"]')
            .setAttribute("value", currentUrl);

          handleUpdate();
        });
      });

      document.querySelectorAll("button .delete").forEach(button => {
        button.addEventListener("click", handleDelete);
      });
    });
}
