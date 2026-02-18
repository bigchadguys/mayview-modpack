/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCheesyPastaRecipe.js                              │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Cheesy Pasta Recipe                                     │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-13                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCheesyPastaRecipe.js");



ServerEvents.recipes(event => {
  event.remove({ output: "brewinandchewin:cheesy_pasta" });
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { item: "brewinandchewin:flaxen_cheese_wedge" },
    { tag: "c:foods/pasta" },
    { tag: "c:crops/tomato" },
    { tag: "c:foods/safe_raw_fish" }
  ]

  // Cobblemon Cooking Pot
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: recipeIngredients,
    result: { id: "brewinandchewin:cheesy_pasta", count: 1 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });

  // Farmers Delight Cooking
  event.recipes.farmersdelight.cooking(
    "meals",
    recipeIngredients,
    "brewinandchewin:cheesy_pasta",
    10,
    10,
    "minecraft:bowl"
  );

  // Farm & Charm Pot Cooking
  event.custom({
    type: "farm_and_charm:pot_cooking",
    ingredients: recipeIngredients,
    requireContainer: true,
    container: {
      id: "minecraft:bowl",
      count: 1
    },
    result: {
      id: "brewinandchewin:cheesy_pasta",
      count: 1
    },
    requiresLearning: false
  });
});
