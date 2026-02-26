/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCauliflowerBreadRecipe.js                         │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Cauliflower Bread Recipe                                │
│ WARN     : Change to use Dough                                     │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing modifyCauliflowerBreadRecipe.js");
ServerEvents.recipes(event =>{
  event.remove({ output: "veggiesdelight:cauliflower_bread"})  
  event.shapeless(
    Item.of("veggiesdelight:cauliflower_bread", 1),
    [
        "#c:foods/cauliflower",
        "#c:foods/cauliflower",
        "#c:foods/dough"
    ]
  )
})