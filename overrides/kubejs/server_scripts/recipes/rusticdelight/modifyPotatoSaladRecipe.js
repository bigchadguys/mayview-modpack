/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyPotatoSaladRecipe.js                              │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Rebuild Potato Salad Recipe                             │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-12                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyPotatoSaladRecipe.js");

ServerEvents.recipes(event => {
    event.remove({output: "rusticdelight:potato_salad"});

    event.shapeless(
        Item.of('rusticdelight:potato_salad', 1),
        [
            'minecraft:bowl',
            '#c:crops/potato',
            '#c:crops/onion',
            '#c:foods/milk',
            '#c:eggs'
        ]
    )
})