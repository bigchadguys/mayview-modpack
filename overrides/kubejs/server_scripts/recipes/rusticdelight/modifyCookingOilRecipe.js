/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCookingOilRecipe.js                               │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Rustic Delight Cooking Oil Recipe                       │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-13                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCookingOilRecipe.js");

ServerEvents.recipes(event => {
  event.remove({ output: "rusticdelight:cooking_oil" });

  // Cobblemon Cooking Pot
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: [
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" }
    ],
    result: { id: "rusticdelight:cooking_oil", count: 2 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });

  // Farmers Delight Cooking
  event.recipes.farmersdelight.cooking(
    "meals",
    [
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" }
    ],
    Item.of("rusticdelight:cooking_oil", 2),
    10,
    10,
    "minecraft:glass_bottle"
  );

  // Farm & Charm Pot Cooking
  event.custom({
    type: "farm_and_charm:pot_cooking",
    ingredients: [
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" },
      { tag: "rusticdelight:cooking_oil_ingredients" }
    ],
    requireContainer: true,
    container: {
      id: "minecraft:glass_bottle",
      count: 1
    },
    result: {
      id: "rusticdelight:cooking_oil",
      count: 2
    },
    requiresLearning: false
  });
});