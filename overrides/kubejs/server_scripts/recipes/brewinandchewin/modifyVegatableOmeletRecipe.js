/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyVegatableOmeletRecipe.js                                           │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Vegetable Omelet Recipe                                 │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-13                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyVegatableOmeletRecipe.js");

ServerEvents.recipes(event => {
  // Remove existing recipe output
  event.remove({ output: "brewinandchewin:vegetable_omelet" });
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { tag: "brewinandchewin:foods/cheese_wedge" },
    { tag: "c:eggs" },
    { tag: "c:eggs" },
    { tag: "c:crops/onion" },
    { item: "minecraft:carrot" }
  ]
  const recipeOutput = "brewinandchewin:vegetable_omelet"
  const containerId = "minecraft:bowl"

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
