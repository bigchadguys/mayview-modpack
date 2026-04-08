/* ══▣ RES INTERFACE ▣═══════ UPDATED  : 2026-02-28 ══════════════════════════
╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyLapisOreToLapisMilling.js                         │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
*/
console.info("[RES:CORE] Initializing modifyLapisOreToLapisMilling.js");

ServerEvents.recipes(event =>{
   event.remove({ output: "minecraft:lapis_lazuli", type: "create.milling" })
   event.remove({ output: "minecraft:lapis_lazuli", type: "farm_and_charm:mincer" })
   event.remove({ input: "minecraft:lapis_ore", output: "minecraft:lapis_lazuli", type: "create.milling" })
   event.remove({ input: "minecraft:deepslate_lapis_ore", output: "minecraft:lapis_lazuli", type: "create.milling" })

   event.recipes.create.milling("minecraft:lapis_lazuli", "minecraft:lapis_ore")
   event.recipes.create.milling("5x minecraft:lapis_lazuli", "minecraft:deepslate_lapis_ore")
})