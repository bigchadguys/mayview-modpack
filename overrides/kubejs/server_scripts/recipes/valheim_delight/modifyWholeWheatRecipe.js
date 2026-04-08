/* ══▣ RES INTERFACE ▣═══════2026-03-29 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyWholeWheatRecipe.js                               │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : modify whole wheat bread recipe                         │
*/
console.info("[RES:CORE] Initializing modifyWholeWheatRecipe.js");
ServerEvents.recipes(event => {
    event.remove({ output: "valheim_delight:whole_bread"})
    event.remove({ output: "valheim_delight:whole_wheat_dough"})

    event.smelting('valheim_delight:whole_bread', 'valheim_delight:whole_wheat_dough')
    event.smoking('valheim_delight:whole_bread', 'valheim_delight:whole_wheat_dough')

    event.shapeless('valheim_delight:whole_wheat_dough', [
        '#c:eggs',
        'minecraft:wheat',
        'minecraft:wheat',
        'minecraft:wheat_seeds',
        'minecraft:wheat_seeds'
    ])   
})