console.log("Hello World");

var search = document.querySelector("form");
var input = document.querySelector("#myInput");
var url = "http://www.recipepuppy.com/?q=";
var recipeSearch = search.addEventListener("submit", e => {
  e.preventDefault();
  fetch(url + input.value)
    .then(res => res.json())
    .then(res => {
      res.forEach(res => {
        recipeSearch = res;
      });
    })
    .catch(err => console.log(err));
});
