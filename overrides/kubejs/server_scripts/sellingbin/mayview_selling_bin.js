const sellItems = [
    ["16x minecraft:wheat", "4x mayview:copper_coin"],
    ["32x minecraft:tuff", "8x mayview:copper_coin"],
    ["8x minecraft:tropical_fish", "4x mayview:copper_coin"],
    ["16x minecraft:sugar_cane", "4x mayview:copper_coin"],
    ["16x minecraft:sugar", "8x mayview:copper_coin"],
    ["32x minecraft:spruce_log", "12x mayview:copper_coin"],
    ["16x minecraft:spider_eye", "4x mayview:copper_coin"],
    ["16x minecraft:soul_sand", "4x mayview:copper_coin"],
    ["32x minecraft:slime_ball", "8x mayview:copper_coin"],
    ["32x minecraft:sand", "8x mayview:copper_coin"],
    ["10x minecraft:salmon", "4x mayview:copper_coin"],
    ["32x minecraft:rotten_flesh", "4x mayview:copper_coin"],
    ["6x minecraft:rabbit", "4x mayview:copper_coin"],
    ["8x minecraft:pumpkin", "4x mayview:copper_coin"],
    ["6x minecraft:pufferfish", "4x mayview:copper_coin"],
    ["16x minecraft:prismarine_shard", "4x mayview:copper_coin"],
    ["24x minecraft:potato", "4x mayview:copper_coin"],
    ["6x minecraft:porkchop", "4x mayview:copper_coin"],
    ["16x minecraft:paper", "4x mayview:copper_coin"],
    ["32x minecraft:oak_log", "8x mayview:copper_coin"],
    ["32x minecraft:netherrack", "4x mayview:copper_coin"],
    ["6x minecraft:mutton", "4x mayview:copper_coin"],
    ["16x minecraft:melon_slice", "4x mayview:copper_coin"],
    ["32x minecraft:mangrove_log", "12x mayview:copper_coin"],
    ["16x minecraft:magma_cream", "4x mayview:copper_coin"],
    ["16x minecraft:leather", "16x mayview:copper_coin"],
    ["16x minecraft:kelp", "4x mayview:copper_coin"],
    ["32x minecraft:jungle_log", "12x mayview:copper_coin"],
    ["8x minecraft:iron_ingot", "4x mayview:copper_coin"],
    ["8x minecraft:gunpowder", "4x mayview:copper_coin"],
    ["32x minecraft:gravel", "8x mayview:copper_coin"],
    ["32x minecraft:granite", "8x mayview:copper_coin"],
    ["8x minecraft:gold_ingot", "4x mayview:copper_coin"],
    ["16x minecraft:glow_berries", "4x mayview:copper_coin"],
    ["8x minecraft:ghast_tear", "4x mayview:copper_coin"],
    ["16x minecraft:feather", "12x mayview:copper_coin"],
    ["16x minecraft:ender_pearl", "12x mayview:copper_coin"],
    ["32x minecraft:dirt", "8x mayview:copper_coin"],
    ["32x minecraft:diorite", "8x mayview:copper_coin"],
    ["2x minecraft:diamond", "4x mayview:copper_coin"],
    ["32x minecraft:dark_oak_log", "12x mayview:copper_coin"],
    ["8x minecraft:copper_ingot", "4x mayview:copper_coin"],
    ["8x minecraft:cooked_salmon", "4x mayview:copper_coin"],
    ["5x minecraft:cooked_rabbit", "4x mayview:copper_coin"],
    ["5x minecraft:cooked_porkchop", "4x mayview:copper_coin"],
    ["5x minecraft:cooked_mutton", "4x mayview:copper_coin"],
    ["8x minecraft:cooked_cod", "4x mayview:copper_coin"],
    ["10x minecraft:cooked_chicken", "4x mayview:copper_coin"],
    ["5x minecraft:cooked_beef", "4x mayview:copper_coin"],
    ["10x minecraft:cod", "4x mayview:copper_coin"],
    ["16x minecraft:cocoa_beans", "4x mayview:copper_coin"],
    ["32x minecraft:cobblestone", "4x mayview:copper_coin"],
    ["32x minecraft:cobbled_deepslate", "8x mayview:copper_coin"],
    ["12x minecraft:chicken", "4x mayview:copper_coin"],
    ["32x minecraft:cherry_log", "12x mayview:copper_coin"],
    ["24x minecraft:carrot", "4x mayview:copper_coin"],
    ["32x minecraft:calcite", "8x mayview:copper_coin"],
    ["16x minecraft:cactus", "4x mayview:copper_coin"],
    ["32x minecraft:bone", "4x mayview:copper_coin"],
    ["16x minecraft:blaze_rod", "8x mayview:copper_coin"],
    ["32x minecraft:blackstone", "8x mayview:copper_coin"],
    ["32x minecraft:birch_log", "12x mayview:copper_coin"],
    ["16x minecraft:beetroot", "4x mayview:copper_coin"],
    ["6x minecraft:beef", "4x mayview:copper_coin"],
    ["16x minecraft:bamboo", "4x mayview:copper_coin"],
    ["32x minecraft:arrow", "4x mayview:copper_coin"],
    ["32x minecraft:apple", "24x mayview:copper_coin"],
    ["32x minecraft:andesite", "8x mayview:copper_coin"],
    ["32x minecraft:acacia_log", "12x mayview:copper_coin"],
    ["12x farmersdelight:tomato", "4x mayview:copper_coin"],
    ["12x farmersdelight:rice", "4x mayview:copper_coin"],
    ["12x farmersdelight:onion", "4x mayview:copper_coin"],
    ["12x farmersdelight:cabbage", "4x mayview:copper_coin"],
    ["12x cobblemon:yellow_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:white_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:red_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:pink_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:green_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:blue_apricorn", "4x mayview:copper_coin"],
    ["12x cobblemon:black_apricorn", "4x mayview:copper_coin"],
    ["8x farmersdelight:fried_egg", "4x mayview:copper_coin"],
    ["8x farmersdelight:apple_pie", "32x mayview:copper_coin"],
    ["8x farmersdelight:sweet_berry_cheesecake", "32x mayview:copper_coin"],
    ["8x farmersdelight:beef_stew", "32x mayview:copper_coin"],
    ["1x brewinandchewin:pizza", "8x mayview:copper_coin"],
    ["1x veggiesdelight:vegan_pizza", "8x mayview:copper_coin"],
    ["4x veggiesdelight:vegetarian_burger", "12x mayview:copper_coin"],
    ["2x brewinandchewin:horror_lasagna", "20x mayview:copper_coin"],
    ["4x candlelight:lasagne", "16x mayview:copper_coin"],
    ["4x veggiesdelight:lasagna_pan", "12x mayview:copper_coin"],
    ["4x minecraft:golden_carrot", "1x mayview:copper_coin"],
    ["2x minecraft:rabbit_stew", "8x mayview:copper_coin"],
    ["5x brewinandchewin:vegetable_omelet", "4x mayview:copper_coin"],
    ["5x brewinandchewin:creamy_onion_soup", "4x mayview:copper_coin"],
    ["16x minecraft:bread", "1x mayview:copper_coin"],
    ["5x brewinandchewin:cheesy_pasta", "6x mayview:copper_coin"],
    ["2x brewinandchewin:scarlet_pierogi", "16x mayview:copper_coin"],
    ["4x brewinandchewin:ham_and_cheese_sandwich", "8x mayview:copper_coin"],
    ["4x ubesdelight:chicken_inasal_rice", "5x mayview:copper_coin"],
    ["5x ubesdelight:tosilog", "6x mayview:copper_coin"],
    ["4x ubesdelight:bangsilog", "5x mayview:copper_coin"],
    ["5x ubesdelight:sisig", "6x mayview:copper_coin"],
    ["4x ubesdelight:bulalo", "5x mayview:copper_coin"],
    ["4x ubesdelight:arroz_caldo", "5x mayview:copper_coin"],
    ["5x ubesdelight:mechado", "6x mayview:copper_coin"],
    ["4x ubesdelight:pandesal_ube", "12x mayview:copper_coin"],
    ["3x ubesdelight:ensaymada", "8x mayview:copper_coin"],
    ["4x ubesdelight:ensaymada_ube", "12x mayview:copper_coin"],
    ["4x farmersdelight:vegetable_soup", "5x mayview:copper_coin"],
    ["4x farmersdelight:chicken_soup", "5x mayview:copper_coin"],
    ["4x farmersdelight:fish_stew", "5x mayview:copper_coin"],
    ["4x farmersdelight:pumpkin_soup", "5x mayview:copper_coin"],
    ["4x farmersdelight:baked_cod_stew", "5x mayview:copper_coin"],
    ["5x farmersdelight:noodle_soup", "8x mayview:copper_coin"],
    ["2x biomeswevegone:allium_oddion_soup", "3x mayview:copper_coin"],
    ["2x biomeswevegone:white_puffball_stew", "6x mayview:copper_coin"],
    ["6x ubesdelight:lumpia", "7x mayview:copper_coin"],
    ["11x mynethersdelight:egg_soup", "12x mayview:copper_coin"],
    ["32x farm_and_charm:oat_pancake", "36x mayview:copper_coin"],
    ["4x veggiesdelight:sweet_potato_pancakes", "7x mayview:copper_coin"],
    ["4x bakery:chocolate_gateau", "6x mayview:copper_coin"],
    ["32x createaddition:chocolate_cake", "2x mayview:copper_coin"],
    ["4x cobblemon:open_faced_sandwich", "5x mayview:copper_coin"],
    ["4x cobblemon:big_malasada", "5x mayview:copper_coin"],
    ["16x farm_and_charm:grandmothers_strawberry_cake", "5x mayview:copper_coin"],
    ["5x farm_and_charm:sausage_with_oat_patty", "4x mayview:copper_coin"],
]

const extractors = [
    ["mayview:mythril_selling_bin", 15 * 20 * 2, false]
]

ServerEvents.recipes(event => {
    extractors.forEach(extractor => {
        sellItems.forEach(item => {
            addExtraction(event, item, extractor[0], extractor[1], extractor[2])
        })

        const leftoversRecipe = event.recipes.custommachinery.custom_machine(extractor[0], 1.61 * 20)
            .requireItem("minecraft:apple")
            .produceItem("cobblemon:leftovers").chance(0.05)
            .resetOnError()
        if (extractor[2])
            leftoversRecipe.hide()
    })

    event.shaped(
        "mayview:mythril_selling_bin",
        [
            "PMP",
            "PPP"
        ],
        {
            P: "#minecraft:planks",
            M: "ores:mythril_ingot"
        }
    )
})

ServerEvents.tags('item', event => {
    sellItems.forEach(item => event.add("mayview:sellables", item[0].replace(/^\d+x\s/, '')))
})

function addExtraction(event, item, machine, time, hide) {
    let recipe = event.recipes.custommachinery.custom_machine(machine, time)
        .requireItemOnEnd(item[0])

    for (let i = 1; i < Math.min(item.length, 7); i++)
        recipe.produceItem(item[i])

    recipe.resetOnError()
    if (hide)
        recipe.hide()
}

console.info(`[Mayview] selling bin recipes: ${sellItems.length}`)