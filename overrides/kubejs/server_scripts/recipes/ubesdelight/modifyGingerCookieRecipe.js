/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyGingerCookieRecipe.js                             │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Ginger Cookie Recipe                                    │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyGingerCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "ubesdelight:cookie_ginger" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("ubesdelight:cookie_ginger", 8),
        [
            "#c:grains",
            "#c:foods/ginger",
            "#c:grains"
        ]
    )  
})