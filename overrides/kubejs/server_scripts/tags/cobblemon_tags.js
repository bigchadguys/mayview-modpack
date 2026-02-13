/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : cobblemon_tags.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : tags                                                    │
│ PURPOSE  : Tags for Cobblemon related                              │
│ WARN     : cobblemon:recipe_filters                                │
│ UPDATED  : 2026-02-12                                              │
╰────────────────────────────────────────────────────────────────────╯
kubejs\server_scripts\tags\cobblemon_tags.js
*/

console.info("[RES:CORE] Initializing cobblemon_tags.js");

ServerEvents.tags('item', event => {
  event.add('cobblemon:recipe_filters/bait_seasoning', [
    'minecraft:nether_star'
  ])
})
