# Planning

## What I'm Building

This is a recipe app. It has the following features:

* Create a recipe and save it to the database
* Edit recipes
* Delete Recipes
* Search through recipes
* Authorization - recipes/username correlation
* View page for recipes/recipe

## User Stories

* As a User, I want to view recipes, so that I can make food when I am hungry
* As a User, I want to edit recipes, so that I can remove items that are not necessary
* As a user, I want to create recipes, so that I can share delicious foods with the world
* As a user, I want to view multiple recipes on one page, so that I can compare what I could make

## MVP

* ability to view single/multiple recipes
* ability to Create new Recipes

## Bronze

* ability to search for recipes
* ability to sign in and sign up
* ability to edit recipes

## Silver

* ability to delete jokes
* create a user profile/bio
* ability to search for recipes by ingredients

## Gold

* ability to comment on recipes
* ability to see recent recipes made

## Model Outline

```js
var recipeSchema = new mongoose.Schema({
[
{
recipeName:
{ type : String
required: true;
},
url:
{ type : String
required: true;
},
image:
{ type : String
required: true;
},
ingredients:
{ type :
{
[type: String],
required: true;
},
}
]
});

var Recipe = mongoose.model("Recipe", recipeSchema);
```
