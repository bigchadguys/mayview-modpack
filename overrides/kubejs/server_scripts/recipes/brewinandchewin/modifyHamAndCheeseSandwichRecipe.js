/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyHamAndCheeseSandwichRecipe.js                     │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Ham and Cheese Sandwich Recipe                          │
│ WARN     : Removed Existing Recipe and Rebuilding                  │
│ UPDATED  : 2026-02-13                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyHamAndCheeseSandwichRecipe.js");

ServerEvents.recipes(event => {
  event.remove({ output: 'brewinandchewin:ham_and_cheese_sandwich' })
  event.shapeless(
    Item.of('brewinandchewin:ham_and_cheese_sandwich', 2),
    [
        '#c:foods/bread',
        '#c:foods/bread',
        'farmersdelight:smoked_ham',
        'brewinandchewin:flaxen_cheese_wedge'
    ]
  )
});