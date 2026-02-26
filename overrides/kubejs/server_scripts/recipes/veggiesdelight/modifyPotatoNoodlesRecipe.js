/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyPotatoNoodlesRecipe.js                            │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Potato Noodles Recipe                                   │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyPotatoNoodlesRecipe.js");

ServerEvents.recipes(event => {
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { item: "veggiesdelight:potato_noodle" },
    { item: "veggiesdelight:potato_noodle" },
    { tag: "c:crops/garlic" },
    { tag: "c:crops/onion" }
  ]
  const recipeOutput = "veggiesdelight:potato_noodles"
  const containerId = "minecraft:bowl"
  // function to concatenate ingredients and container for cobblemon campfire pot
  function withContainer(ingredients, containerId) {return ingredients.concat([{ item: containerId }])}
  const campfirePotIngredients = withContainer(recipeIngredients, containerId)
  // Remove existing recipe output
  event.remove({ output: recipeOutput });
  // Cobblemon Cooking Pot
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: campfirePotIngredients,
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
    10,
    containerId
  );

  // Farm & Charm Pot Cooking
  event.custom({
    type: "farm_and_charm:pot_cooking",
    ingredients: recipeIngredients,
    requireContainer: true,
    container: {id: containerId, count: 1},
    result: {id: recipeOutput, count: 1},
    requiresLearning: false
  });
});