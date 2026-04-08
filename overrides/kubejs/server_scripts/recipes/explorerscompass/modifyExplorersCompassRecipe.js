ServerEvents.recipes(event =>{
    event.remove({ output: "explorerscompass:explorerscompass" })
    event.shaped(
        Item.of("explorerscompass:explorerscompass"), // Output
        [
            " SBS ",
            " BCB ",
            " SBS "
        ], // Pattern
        {
            C: "minecraft:compass", 
            B: "minecraft:cracked_stone_bricks", 
            S: "minecraft:string"
        }
    )
})