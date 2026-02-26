/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyBellpepperCuttingRecipe.js                        │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Wild Bellpepper Cutting Recipe                          │
│ WARN     : Wild Bellpepper to three bellpepper colors              │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyBellpepperCuttingRecipe.js");
ServerEvents.recipes(event =>{
  event.remove({ input: 'rusticdelight:wild_bell_peppers', type: 'farmersdelight:cutting' })
  event.recipes.farmersdelight.cutting(
    "rusticdelight:wild_bell_peppers", // Input
    "#c:tools/knife", // Tool
    [
        "veggiesdelight:bellpepper_seeds",
        ChanceResult.of("rusticdelight:bell_pepper_red", 0.3),
        ChanceResult.of("rusticdelight:bell_pepper_yellow", 0.3),
        ChanceResult.of("rusticdelight:bell_pepper_green", 0.3)
    ]
  )  
})