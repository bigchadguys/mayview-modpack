ServerEvents.recipes(event => { 
  const OrestoneExtruderRecipes = [
    {
        catalyst: "minecraft:redstone_block",
        dye: "create_dragons_plus:red_dye",
        output: 'mayview:depleted_crimsite',
    },
    {
        catalyst: "minecraft:lapis_block",
        dye: "create_dragons_plus:blue_dye",
        output: 'mayview:depleted_asurine',
    },
    {
        catalyst: "minecraft:glowstone",
        dye: "create_dragons_plus:yellow_dye",
        output: 'mayview:depleted_ochrum',
    },
    {
        catalyst: "minecraft:dark_prismarine",
        dye: "create_dragons_plus:green_dye",
        output: 'mayview:depleted_veridium',
    }
  ];

  OrestoneExtruderRecipes.forEach((recipe) => {

    // Basic Recipe
    event.recipes.create_mechanical_extruder.extruding(
          Output.of(recipe.output, 0.65),
      [
          BlockPredicate.of('minecraft:water'),
          BlockPredicate.of('minecraft:lava'),
      ])
      
      // Requirements
      .catalyst(BlockPredicate.of(recipe.catalyst))
      .requirements(
        [
            RecipeRequirement.minSpeed(16.0),
            RecipeRequirement.maxSpeed(32.0)
        ]
      )
      .requiredBonks(5)
      
      // Advanced Dye Extruder Recipes
      event.recipes.create_mechanical_extruder.extruding(
          Item.of(recipe.output),
      [
          BlockPredicate.of('minecraft:lava'),
          BlockPredicate.of(recipe.dye),
      ])
      
      // Requirements
      .catalyst(BlockPredicate.of('create_enchantment_industry:super_experience_block'))
      .consumeBlocks([false,true])
      .advanced(true)
  });
  
})