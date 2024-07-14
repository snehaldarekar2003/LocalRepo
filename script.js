// Example data for recipes (can be fetched from a server in a real application)
const recipes = [
    { id: 1, title: 'Pasta Carbonara', ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan Cheese', 'Black Pepper'], instructions: 'Cook spaghetti, fry bacon, mix eggs and cheese, combine all with pepper.' },
    { id: 2, title: 'Chocolate Cake', ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Baking Powder', 'Butter', 'Eggs', 'Milk'], instructions: 'Mix dry ingredients, add wet ingredients, bake in oven.' },
    { id: 3, title: 'Caesar Salad', ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'], instructions: 'Chop lettuce, add croutons, cheese, and dressing, toss well.' }
];

// Function to display recipes on the page
function displayRecipes() {
    const recipesSection = document.getElementById('recipes');
    recipesSection.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        const instructions = document.createElement('p');
        instructions.textContent = recipe.instructions;

        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(ingredientsList);
        recipeDiv.appendChild(instructions);

        recipesSection.appendChild(recipeDiv);
    });
}

// Initial display of recipes
displayRecipes();