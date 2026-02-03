// kubejs/server_scripts/recipes/minecraft/addEnchantedGoldenAppleRecipe.js
//-------------------------------------------
//   Enchanted Golden Apple Recipe
//     Create Mechanical Craft
//-------------------------------------------
ServerEvents.recipes((event) => {
  const recipe = {
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: {
        item: "minecraft:gold_block",
      },
      B: {
        item: "vinery:apple_bag",
      },
      G: {
        item: "mayview:gold_coin",
      },
      E: {
        item: "create:experience_block",
      }
    },
    pattern: [
        "EAAAE",
        "AGGGA",
        "AGBGA",
        "AGGGA",
        "EAAAE"
    ],
    result: {
      count: 1,
      id: "minecraft:enchanted_golden_apple",
    },
    show_notification: false,
  };

  event.custom(recipe);
})