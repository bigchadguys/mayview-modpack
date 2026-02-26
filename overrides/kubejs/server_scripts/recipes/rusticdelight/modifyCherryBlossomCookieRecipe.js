/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCherryBlossomCookieRecipe.js                      │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Cherry Blossom Cookie Recipe                            │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCherryBlossomCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "rusticdelight:cherry_blossom_cookie" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("rusticdelight:cherry_blossom_cookie", 8),
        [
            "#c:grains",
            "#rusticdelight:cherry_blossom_ingredients",
            "#c:grains"
        ]
    )  
})