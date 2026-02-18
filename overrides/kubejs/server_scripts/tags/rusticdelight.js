/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : rusticdelight.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : tags                                                    │
│ PURPOSE  : Rustic Delight tags                                     │
│ WARN     : N/A                                                     │
│ UPDATED  : 2026-02-13                                              │
╰────────────────────────────────────────────────────────────────────╯
kubejs\server_scripts\tags\rusticdelight.js
*/
console.info("[RES:CORE] Initializing tag/rusticdelight.js");

ServerEvents.tags("item", (event) => {
    // Seeds for cooking_oil_ingredients
    event.add("rusticdelight:cooking_oil_ingredients", [
        "minecraft:wheat_seeds",
        "minecraft:melon_seeds",
        "minecraft:beetroot_seeds",
        "minecraft:torchflower_seeds",
        "cobblemon:vivichoke_seeds",
        "cobblemon:red_mint_seeds",
        "cobblemon:blue_mint_seeds",
        "cobblemon:cyan_mint_seeds",
        "cobblemon:pink_mint_seeds",
        "cobblemon:green_mint_seeds",
        "cobblemon:white_mint_seeds",
        "ubesdelight:lemongrass_seeds",
        "biomeswevegone:pale_pumpkin_seeds",
        "farmersdelight:cabbage_seeds",
        "farmersdelight:tomato_seeds",
        "rusticdelight:cotton_seeds",
        "rusticdelight:bell_pepper_seeds",
        "veggiesdelight:bellpepper_seeds",
        "veggiesdelight:broccoli_seeds",
        "veggiesdelight:cauliflower_seeds",
        "veggiesdelight:turnip_seeds",
        "veggiesdelight:zucchini_seeds",
        "vinery:red_grape_seeds",
        "vinery:white_grape_seeds",
        "vinery:savanna_grape_seeds_red",
        "vinery:savanna_grape_seeds_white",
        "vinery:taiga_grape_seeds_red",
        "vinery:taiga_grape_seeds_white",
        "vinery:jungle_grape_seeds_red",
        "vinery:jungle_grape_seeds_white",
        "farm_and_charm:kernels",
        "farm_and_charm:oat_seeds",
        "farm_and_charm:barley_seeds",
        "farm_and_charm:lettuce_seeds",
        "farm_and_charm:tomato_seeds",
        "farm_and_charm:strawberry_seeds"
    ]);

});