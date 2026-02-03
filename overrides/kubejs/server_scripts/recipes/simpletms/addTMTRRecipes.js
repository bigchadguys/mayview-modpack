ServerEvents.recipes(event => {
    event.shaped(
        'simpletms:tr_blank',
        [
            'III',
            'IRI',
            'III'
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'cobblemon:relic_coin'
        }
    )
    event.shaped(
        'simpletms:tm_blank',
        [
            'IRI',
            'RBR',
            'IRI'
        ],
        {
            I: 'minecraft:iron_ingot',
            R: 'cobblemon:relic_coin',
            B: 'minecraft:iron_block'
        }
    )
})