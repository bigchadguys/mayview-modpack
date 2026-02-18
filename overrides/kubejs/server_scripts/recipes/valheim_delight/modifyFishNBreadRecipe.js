/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyFishNBreadRecipe.js                               │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Fish N Bread Recipe                                     │
│ WARN     : Determinism required                                    │
│ UPDATED  : 2026-02-14                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyFishNBreadRecipe.js");
ServerEvents.recipes(event => {
    event.remove({ output: "valheim_delight:fish_n_bread_salmon"})
    event.shaped(
        Item.of("valheim_delight:fish_n_bread_salmon", 1),
        [
            'FB',
            'B '
        ],
        {
            B: "#c:foods/bread",
            F: "#c:foods/cooked_salmon"
        }
    )
    event.remove({ output: "valheim_delight:fish_n_bread_cod"})
    event.shaped(
        Item.of("valheim_delight:fish_n_bread_cod", 1),
        [
            'FB',
            'B '
        ],
        {
            B: "#c:foods/bread",
            F: "#c:foods/cooked_cod"
        }
    )
})