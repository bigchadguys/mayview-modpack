/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addOnionRingRecipe.js                                   │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Create Onion Ring Recipe                                │
│ WARN     : Lots of Onions                                          │
│ UPDATED  : 2026-02-10                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing addOnionRingRecipe.js");

ServerEvents.recipes(event => {
    // Cobblemon Campfire Cooking Pot Recipe
    event.custom({
        type: "cobblemon:cooking_pot_shapeless",
        category: "artifacts",
        ingredients: [
            {
                item: "farmersdelight:onion"
            },
            {
                item: "farm_and_charm:flour"
            }
        ],
        result: {
            id: "artifacts:onion_ring",
            count: 1
        },
        seasoningTag: "cobblemon:empty",
        seasoningProcessors: []
    })

    event.recipes.farmersdelight.cooking(
        "misc", // recipe book tab - valid values: meals, drinks, misc
        [   
            {
                item: "farmersdelight:onion"
            },
            {
                item: "farm_and_charm:flour"
            }
        ],
        Item.of("artifacts:onion_ring", 1), // output
        10, // exp
        200 // cookTime
    )
})