/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCoffeeBeansToRoastedCoffeeBeansRecipe.js          │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Coffee Bean Smelting to Roasted Coffee Bean             │
│ WARN     : use c:crops/coffee_beans for smelting                   │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCoffeeBeansToRoastedCoffeeBeansRecipe.js");
ServerEvents.recipes(event =>{
  event.remove([
    { type: 'minecraft:smelting', output: 'rusticdelight:roasted_coffee_beans' }, 
    { type: 'minecraft:blasting', output: 'rusticdelight:roasted_coffee_beans' }
  ])
  event.smelting(
    "rusticdelight:roasted_coffee_beans",
    "#c:crops/coffee_beans"
  )
  event.smoking(
    "rusticdelight:roasted_coffee_beans",
    "#c:crops/coffee_beans"
  )
})