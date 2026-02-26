/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════
╭────────────────────────────────────────────────────────────────────╮
│ FILE     : mayview_selling_bin.js                                  │
│ LAYER    : startup_scripts                                         │
│ PURPOSE  : Register Mayview Selling Bin                            │
│ NOTES    : Mythril Tier                                            │
│ UPDATED  : 2026-02-22                                              │
╰────────────────────────────────────────────────────────────────────╯
   ══▣ RELATIVE PATH ▣═════════════════════════════════════════════════
\kubejs\startup_scripts\blocks\mayview\mayview_selling_bin.js
*/
console.info("[RES INTERFACE] Loading mayview_selling_bin.js");
StartupEvents.registry('block', event => {
	event.create("mayview:mythril_selling_bin", "custommachinery:custom_machine")
})