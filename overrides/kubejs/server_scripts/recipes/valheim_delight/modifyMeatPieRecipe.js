/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyMeatPieRecipe.js                                  │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Rebuild Meat Pie Recipe                                 │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-12                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyMeatPieRecipe.js");

ServerEvents.recipes(event => {
    event.remove({output: "valheim_delight:meat_pie"});

    // Cobblemon Campfire Cooking Pot Shaped Recipe
    event.custom({
        type: "cobblemon:cooking_pot",
        category: "foods",
        pattern: [
            "PPP",
            "MMM",
            "OCO"
        ],        
        key: {
            P: {"item": "minecraft:baked_potato"},
            M: {"tag": "c:foods/cooked_meat"},
            C: {"item": "farmersdelight:pie_crust"},
            O: {"tag": "c:crops/onion"}
        },
        result: {id: "valheim_delight:meat_pie"},
        seasoningTag: "cobblemon:empty",
        seasoningProcessors: []
    });
    // Farmers Delight Cooking Recipe
    event.recipes.farmersdelight.cooking(
        "meals", // recipe book tab - valid values: meals, drinks, misc
        [   
            "minecraft:baked_potato",
            "minecraft:baked_potato",
            "#c:foods/cooked_meat",
            "#c:foods/cooked_meat",
            "#c:crops/onion",
            "#c:crops/onion"
        ],
        "valheim_delight:meat_pie", // output
        10, // exp
        10, // cookTime
        "farmersdelight:pie_crust" // container
    )
})