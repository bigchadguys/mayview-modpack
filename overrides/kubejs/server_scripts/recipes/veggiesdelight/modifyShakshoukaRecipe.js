/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyShakshoukaRecipe.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Shakshouka Recipe                                     │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyShakshoukaRecipe.js");

ServerEvents.recipes(event => {
  // Array of Recipe Ingredients
  const recipeIngredients = [
    { tag: "c:foods/bellpepper" },
    { tag: "c:crops/onion" },
    { tag: "c:crops/tomato" },
    { tag: "c:eggs" }
  ]
  const recipeOutput = "veggiesdelight:shakshouka"
  const containerId = "minecraft:bowl"
  // function to concatenate ingredients and container for cobblemon campfire pot
  function withContainer(ingredients, containerId) {return ingredients.concat([{ item: containerId }])}
  const campfirePotIngredients = withContainer(recipeIngredients, containerId)
  // Remove existing recipe output
  event.remove({ output: recipeOutput });
  // Cobblemon Cooking Pot
  // Variant 1: Shakshouka onion
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: [
        { tag: "c:foods/bellpepper" },
        { tag: "c:crops/onion" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    result: { id: recipeOutput, count: 1 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });  
  // Variant 2: Shakshouka avocado
  event.custom({
    type: "cobblemon:cooking_pot_shapeless",
    category: "foods",
    ingredients: [
        { tag: "c:foods/bellpepper" },
        { tag: "culturaldelights:avocados" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    result: { id: recipeOutput, count: 1 },
    seasoningTag: "cobblemon:empty",
    seasoningProcessors: []
  });

  // Farmers Delight Cooking
  // Variant 1: Shakshouka onion
  event.recipes.farmersdelight.cooking(
    "meals",
    [        
        { tag: "c:foods/bellpepper" },
        { tag: "c:crops/onion" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    recipeOutput,
    10,
    10,
    containerId
  );
  // Variant 2: Shakshouka avocado
  event.recipes.farmersdelight.cooking(
    "meals",
    [        
        { tag: "c:foods/bellpepper" },
        { tag: "culturaldelights:avocados" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    recipeOutput,
    10,
    10,
    containerId
  );

  // Farm & Charm Pot Cooking
  // Variant 1: Shakshouka onion
  event.custom({
    type: "farm_and_charm:pot_cooking",
    ingredients: [
        { tag: "c:foods/bellpepper" },
        { tag: "c:crops/onion" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    requireContainer: true,
    container: {id: containerId, count: 1},
    result: {id: recipeOutput, count: 1},
    requiresLearning: false
  });  
  // Variant 2: Shakshouka avocado
  event.custom({
    type: "farm_and_charm:pot_cooking",
    ingredients: [
        { tag: "c:foods/bellpepper" },
        { tag: "culturaldelights:avocados" },
        { tag: "c:crops/tomato" },
        { tag: "c:eggs" }
    ],
    requireContainer: true,
    container: {id: containerId, count: 1},
    result: {id: recipeOutput, count: 1},
    requiresLearning: false
  });
});