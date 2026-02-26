/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyUbeCookieRecipe.js                                │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Ube Cookie Recipe                                       │
│ WARN     : Change to grains tag                                    │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyUbeCookieRecipe.js");
ServerEvents.recipes(event =>{
    event.remove({ output: "ubesdelight:cookie_ube" , type: "minecraft:crafting_shapeless"})
    event.shapeless(
        Item.of("ubesdelight:cookie_ube", 8),
        [
            "#c:grains",
            "#c:foods/ube",
            "#c:grains"
        ]
    )  
})