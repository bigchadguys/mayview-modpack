/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCookiesRecipe.js                                  │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : progression / quests                                    │
│ PURPOSE  : Cookies Recipe                                          │
│ WARN     : Add grain tag                                           │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCookiesRecipe.js");
ServerEvents.recipes(event =>{
  event.shaped(
    Item.of("minecraft:cookie", 8),
    [
        "GCG"
    ],
    {
        G: "#c:grains",
        C: "#c:crops/cocoa_bean"
    }
  )  
})