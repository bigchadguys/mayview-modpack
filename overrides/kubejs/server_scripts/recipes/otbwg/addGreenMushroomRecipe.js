ServerEvents.recipes(event =>{
    event.shapeless(
        Item.of("minecraft:green_dye"), // Output
        Item.of("biomeswevegone:green_mushroom") // Input
    )  
    event.recipes.farmersdelight.cutting(
        'biomeswevegone:green_mushroom',
        '#c:tools/knife', // tool
        [ // results
            Item.of("minecraft:green_dye", 2),
            Item.of("minecraft:lime_dye", 2)
        ],
        // '' // sound
    )
})