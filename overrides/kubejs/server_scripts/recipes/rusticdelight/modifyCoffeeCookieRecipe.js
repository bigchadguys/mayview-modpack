/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCoffeeCookieRecipe.js                             │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Coffee Cookie Recipe                                    │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCoffeeCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "rusticdelight:coffee_cookie" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("rusticdelight:coffee_cookie", 8),
        [
            "#c:grains",
            "#rusticdelight:coffee_ingredients",
            "#c:grains"
        ]
    )  
})