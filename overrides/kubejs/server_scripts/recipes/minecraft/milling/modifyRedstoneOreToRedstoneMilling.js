ServerEvents.recipes(event =>{
    event.remove({ output: "minecraft:redstone", type: "create.milling" })
    event.remove({ output: "minecraft:redstone", type: "farm_and_charm:mincer" })
    // event.recipes.create.milling("5x minecraft:redstone", "minecraft:redstone_ore")
    // event.recipes.create.milling("6x minecraft:redstone", "minecraft:deepslate_redstone_ore")
})