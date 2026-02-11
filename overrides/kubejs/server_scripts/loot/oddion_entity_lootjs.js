/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : oddion_entity_lootjs.js                                 │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : loot_table LootJS                                       │
│ PURPOSE  : Modify loot table for biomeswevegone:entities/oddion    │
│ WARN     : /loot give @p loot mayview:chests/oddion_onion          │
│ UPDATED  : 2026-02-10                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
// ══▣ Relative Path ▣═════════════════════════════════════════════════
// kubejs\server_scripts\loot\oddion_entity_lootjs.js
console.info("[RES:CORE] Initializing oddion_entity_lootjs.js");

LootJS.lootTables(event => {
  event.getLootTable("biomeswevegone:entities/oddion")
    .firstPool()

    .addEntry(LootEntry.of("farmersdelight:onion").withWeight(40).setCount([1, 3]))
    .addEntry(LootEntry.of("brewinandchewin:creamy_onion_soup").withWeight(10))
    .addEntry(LootEntry.of("farm_and_charm:onion_soup").withWeight(10))
    .addEntry(LootEntry.of("valheim_delight:onion_soup").withWeight(8))
    .addEntry(LootEntry.of("farm_and_charm:pasta_with_onion_sauce").withWeight(6))
    .addEntry(LootEntry.of("farmersdelight:onion_crate").withWeight(2))
    .addEntry(LootEntry.of("artifacts:onion_ring").withWeight(1))
})