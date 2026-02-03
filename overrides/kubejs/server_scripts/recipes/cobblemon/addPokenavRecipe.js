ServerEvents.recipes(event => {
    event.shaped(
        'cobblenav:pokenav_item_base',
        [
            ' D ',
            'CIC',
            ' R ',
        ],
        {
            D: "minecraft:diamond",
            C: "minecraft:copper_ingot",
            I: "minecraft:iron_ingot",
            R: "minecraft:redstone",
        }
    )
})