/* ══▣ RES INTERFACE ▣═══════2026-03-31 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addBasalttoNetherrackHaunting.js                        │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Add Haunting recipe for Basalt to Netherrack            │

*/
console.info("[RES:CORE] Initializing addBasalttoNetherrackHaunting.js");
ServerEvents.recipes(event =>{
    event.recipes.create.haunting('minecraft:netherrack', 'minecraft:basalt')
})