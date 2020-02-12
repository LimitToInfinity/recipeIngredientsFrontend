const recipesURL = "http://localhost:3000/recipes";
const ingredientsURL = "http://localhost:3000/ingredients";

const newRecipeForm = document.querySelector("form");

fetch(recipesURL)
    .then(parseJSON)
    .then(displayRecipes);

fetch(ingredientsURL)
    .then(parseJSON)
    .then(createIngredientOptions);

function createIngredientOptions(ingredients) {

    ingredients.forEach(ingredient => {
        const ingredientCheckbox = document.createElement("input");
        ingredientCheckbox.type = "checkbox";
        ingredientCheckbox.name = "ingredient_ids[]";
        ingredientCheckbox.value = ingredient.id;
        ingredientCheckbox.id = ingredient.id;

        const ingredientLabel = document.createElement("label");
        ingredientLabel.htmlFor = ingredient.id;
        ingredientLabel.textContent = ingredient.name;

        newRecipeForm.append(ingredientLabel, ingredientCheckbox);
    })
}

function displayRecipes(recipes) {

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        
        const recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipe.title;
        recipeCard.append(recipeTitle);

        recipe.ingredients.map(ingredient => {
            const ingredientName = document.createElement("p");
            ingredientName.textContent = ingredient.name;
            recipeCard.append(ingredientName);
        })

        document.body.append(recipeCard);
    })
}

function parseJSON(response) {
    return response.json();
}