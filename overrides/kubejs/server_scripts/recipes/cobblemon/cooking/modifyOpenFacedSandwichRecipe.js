/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyOpenFacedSandwichRecipe.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Open-Faced Sandwich Recipe Modify                                     │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-03-17                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyOpenFacedSandwichRecipe.js");

ServerEvents.recipes(event => {
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { tag: "c:foods/bread" },
    { tag: "c:eggs" },
    { tag: "c:foods/raw_meat" },
    { tag: "c:foods/leafy_green" }
  ]
  const recipeOutput = "cobblemon:open_faced_sandwich"
  // const containerId = ""
  // function to concatenate ingredients and container for cobblemon campfire pot
  // function withContainer(ingredients, containerId) {return ingredients.concat([{ item: containerId }])}
  // const campfirePotIngredients = withContainer(recipeIngredients, containerId)
  // Remove existing recipe output
  event.remove({ output: recipeOutput });
  // Cobblemon Cooking Pot
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: recipeIngredients,
    result: { id: recipeOutput, count: 1 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });

  // Farmers Delight Cooking
  event.recipes.farmersdelight.cooking(
    "meals",
    recipeIngredients,
    recipeOutput,
    10,
    10
    // containerId
  );
});