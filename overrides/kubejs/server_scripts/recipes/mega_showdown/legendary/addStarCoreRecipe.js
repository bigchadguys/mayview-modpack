ServerEvents.recipes(event => {
    event.remove({ output: 'mega_showdown:star_core' })
    event.shaped(
        Item.of('mega_showdown:star_core'),
        [
            'NNN',
            'SWS',
            'NVN'
        ],
        {
            W: "mega_showdown:wishing_star",
            V: "ores:viridium_ingot",
            N: "minecraft:netherite_block",
            S: "minecraft:nether_star"
        }
    )
})