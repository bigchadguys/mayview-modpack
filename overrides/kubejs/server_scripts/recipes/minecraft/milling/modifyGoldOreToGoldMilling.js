ServerEvents.recipes(event =>{
    // This shouldn't be that hard, remove raw gold output for everything
    event.remove({ output: "minecraft:raw_gold"})
    // Vanilla Shapeless Recipe for Raw Gold Block -> 9x Raw Gold
    event.shapeless(
      Item.of("minecraft:raw_gold", 9), // Output
      Item.of("minecraft:raw_gold_block") // Input
    )
    
    // Create Millstone Recipes
    event.recipes.create.milling("3x minecraft:raw_gold", "minecraft:gold_ore")
    event.recipes.create.milling("4x minecraft:raw_gold", "minecraft:deepslate_gold_ore")
    event.recipes.create.milling("4x minecraft:raw_gold", "minecraft:nether_gold_ore")

    /*
    event.recipes.create.crushing([
        Item.of("minecraft:raw_gold", 3), // Output
        CreateItem.of('create:experience_nugget', 0.5)], // Output
        'minecraft:gold_ore'// Input
    )
    event.recipes.create.crushing([
        Item.of("minecraft:raw_gold", 4), // Output
        CreateItem.of('create:experience_nugget', 0.5)], // Output
        'minecraft:deepslate_gold_ore'// Input
    )
        event.recipes.create.crushing([
        Item.of("minecraft:raw_gold", 4), // Output
        CreateItem.of('create:experience_nugget', 0.5)], // Output
        'minecraft:nether_gold_ore'// Input
    )*/
})