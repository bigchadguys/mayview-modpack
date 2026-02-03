ServerEvents.recipes(event => {
    // Celestium Sun Infused Recipe
    event.shapeless(
        Item.of('ores:solarium_ingot', 1),
        [
            'cobblemon:heat_rock',
            'cobblemon:sun_stone',
            'ores:raw_celestium'
        ]
    )
    // Celestium Lunar Charged Recipe
    event.shapeless(
        Item.of('ores:lunarium_ingot', 1),
        [
            'cobblemon:moon_stone',
            'cobblemon:moon_stone',
            'cobblemon:moon_stone',
            'ores:raw_celestium'
        ]
    )
})