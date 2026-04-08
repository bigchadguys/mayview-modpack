LootJS.modifiers(event => {
    const petrifiedLogs = [
        "mangrove",
        "spruce",
        "jungle",
        "cherry",
        "acacia",
        "birch",
        "dark_oak",
        "oak"
    ]
    petrifiedLogs.forEach(log => event.addTableModifier(`minecraft:blocks/${log}_log`).addLoot(LootEntry.of("ores:petrified_bark").when(c => c.randomChance(0.00025))))

    const phantasmMobs = [
        "zombie",
        "zombie_villager",
        "stray",
        "bogged",
        "husk",
        "drowned",
        "wither_skeleton",
        "skeleton",
    ]
    phantasmMobs.forEach(mob => event.addTableModifier(`minecraft:entities/${mob}`).addLoot(LootEntry.of("ores:ectoplasm").when(c => c.randomChance(0.0004))))

    const mushPlants = [
        "potatoes",
        "carrots",
        "beetroots",
        "wheat"
    ]
    mushPlants.forEach(plant => event.addTableModifier(`minecraft:blocks/${plant}`).addLoot(LootEntry.of("ores:mush").when(c => c.randomChance(0.0005))))

    const quickSilverSoils = [
        "suspicious_gravel",
        "grass_block",
        "sand",
        "gravel",
        "coarse_dirt",
        "rooted_dirt",
        "dirt_path",
        "farmland",
        "podzol",
        "mycelium",
        "suspicious_sand",
        "dirt",
    ]
    quickSilverSoils.forEach(soil => event.addTableModifier(`minecraft:blocks/${soil}`).addLoot(LootEntry.of("ores:quicksilver").when(c => c.randomChance(0.0001))))
})

RecipeViewerEvents.addInformation('item', event => {
    event.add("ores:adamantite_furnace", [
        "Can smelt Raw Celestium into either Solarium Ingots or Lunarium Ingots depending on the time of day."
    ])
    event.add("ores:lunarium_ingot", [
        "Obtained by smelting Raw Celestium in an Adamantite Furnace during the night."
    ])
    event.add("ores:solarium_ingot", [
        "Obtained by smelting Raw Celestium in an Adamantite Furnace during the day."
    ])
    event.add("ores:raw_celestium", [
        "Can be smelted inside an Adamantite Furnace.",
        "Turns into Solarium Ingots when smelted during the day.",
        "Turns into Lunarium Ingots when smelted during the night."
    ])

    event.add(
        [
            "ores:solarium_helmet", 
            "ores:solarium_chestplate", 
            "ores:solarium_leggings", 
            "ores:solarium_boots"
        ],
        [
            "A full set gives the following bonus during the day or inside of the Nether:",
            "- Increased health",
            "- Increased speed",
            "- Increased jump height",
            "- Increase fall distance before taking damage",
            "- Increased block break speed"
        ],
    )

    event.add(
        [
            "ores:lunarium_helmet", 
            "ores:lunarium_chestplate", 
            "ores:lunarium_leggings", 
            "ores:lunarium_boots"
        ],
        [
            "A full set gives the following bonus during the night or inside of the End:",
            "- Increased health",
            "- Increased speed",
            "- Increased jump height",
            "- Increase fall distance before taking damage",
            "- Increased block break speed"
        ],
    )

    event.add("ores:petrified_bark", [
        "Very rarely drops from any VANILLA log."
    ])
    event.add("ores:mush", [
        "Very rarely drops from any VANILLA crop."
    ])
    event.add("ores:ectoplasm", [
        "Very rarely drops from any VANILLA undead mob."
    ])
    event.add("ores:quicksilver", [
        "Very rarely drops from any VANILLA dirt related blocks."
    ])

    event.add("ores:raw_morphite", [
        "Can be synthesized into various ingots inside of a Morphite Synthesizer"
    ])
    event.add("ores:morphite_synthesizer", [
        "Synthesizes Morphite with Dragon's Breath and certain materials into ingots."
    ])

    event.add("ores:necronium_sword", [
        "Damages entites around the target on a critical hit."
    ])
    // event.add("ores:geovar_pickaxe", [
    //     ""
    // ])
    // event.add("ores:petrafite_axe", [
    //     ""
    // ])
    // event.add("ores:swiftite_shovel", [
    //     ""
    // ])
    event.add("ores:florite_hoe", [
        "Applies bone meal around an area."
    ])
})