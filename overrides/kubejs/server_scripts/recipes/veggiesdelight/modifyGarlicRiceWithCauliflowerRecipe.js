/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyGarlicRiceWithCauliflowerRecipe.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Garlic Rice with Cauliflower Recipe                                     │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyGarlicRiceWithCauliflowerRecipe.js");

ServerEvents.recipes(event => {
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { item: "veggiesdelight:roasted_garlic_clove" },
    { item: "veggiesdelight:roasted_cauliflower_floret" },
    { item: "veggiesdelight:roasted_cauliflower_floret" },
    { item: "farmersdelight:cooked_rice" }
  ]
  const recipeOutput = "veggiesdelight:garlic_rice_with_cauliflower"
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