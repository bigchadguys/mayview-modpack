/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifySweetBerryCookieRecipe.js                         │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Sweet Berry Cookie Recipe                               │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifySweetBerryCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "farmersdelight:sweet_berry_cookie" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("farmersdelight:sweet_berry_cookie", 8),
        [
            "#c:grains",
            "minecraft:sweet_berries",
            "#c:grains"
        ]
    )  
})