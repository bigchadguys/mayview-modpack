/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyLavaCookieRecipe.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Lava Cookie Recipe                                     │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyLavaCookieRecipe.js");

ServerEvents.recipes(event => {
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { tag: "c:grains" },
    { tag: "c:grains" },
    { item: "minecraft:dried_kelp" },
    { item: "minecraft:magma_cream" }
  ]
  const recipeOutput = "cobblemon:lava_cookie"
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
    result: { id: recipeOutput, count: 4 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });

  // Farmers Delight Cooking
  event.recipes.farmersdelight.cooking(
    "meals",
    recipeIngredients,
    Item.of(recipeOutput,4),
    10,
    10
    //containerId
  );

});