/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifySyrupCookieRecipe.js                              │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Syrup Cookie Recipe                                     │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifySyrupCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "rusticdelight:syrup_cookie" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("rusticdelight:syrup_cookie", 8),
        [
            "#c:grains",
            "#rusticdelight:syrup",
            "#c:grains"
        ]
    )  
})