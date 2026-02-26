/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addEverstoneRecipe.js                                   │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Everstone Recipe                                        │
│ WARN     : Normal Type Gem to Everstone                            │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing addEverstoneRecipe.js");
ServerEvents.recipes(event =>{
  event.shaped(
    Item.of("cobblemon:everstone"), // Output
    [
        " N ",
        "NSN",
        " N ",
    ],
    {
        N: "cobblemon:normal_gem",
        S: "minecraft:stone"
    }
  )  
})