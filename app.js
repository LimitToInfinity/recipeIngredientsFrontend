const recipesURL = "http://localhost:3000/recipes";
const ingredientsURL = "http://localhost:3000/ingredients";

const ingredientsSelect = document.querySelector("select[name=ingredient_id]");

console.log(ingredientsSelect);

fetch(recipesURL)
    .then(parseJSON)
    .then(displayRecipes);

fetch(ingredientsURL)
    .then(parseJSON)
    .then(createIngredientOptions);

function createIngredientOptions(ingredients) {

    ingredients.map(ingredient => {
        const ingredientOption = document.createElement("option");
        ingredientOption.value = ingredient.id;
        ingredientOption.textContent = ingredient.name;

        ingredientsSelect.append(ingredientOption);
    })
}

function displayRecipes(recipes) {
    console.log(recipes);

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