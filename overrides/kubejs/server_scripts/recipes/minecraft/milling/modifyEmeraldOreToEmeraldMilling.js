ServerEvents.recipes(event =>{
    event.remove({ output: "minecraft:emerald", type: "create.milling" })
    event.remove({ output: "minecraft:emerald", type: "farm_and_charm:mincer" })
    event.recipes.create.milling("5x minecraft:emerald", "minecraft:emerald_ore")  
    event.recipes.create.milling("6x minecraft:emerald", "minecraft:deepslate_emerald_ore")  
})