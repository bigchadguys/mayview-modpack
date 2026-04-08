ServerEvents.recipes(e =>{
    e.remove({ output: "minecraft:raw_iron", type: "create:milling"})
    e.remove({ output: "minecraft:raw_iron", type: "farm_and_charm:mincer"})
    e.recipes.create.milling('3x minecraft:raw_iron', 'minecraft:iron_ore')
    e.recipes.create.milling('4x minecraft:raw_iron', 'minecraft:deepslate_iron_ore')
    // e.recipes.create.milling('4x minecraft:raw_iron', 'phantasm:cirite_iron_ore') // Phantasm Mod Iron Ore
})