/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : 90_photo_quest_counter.js                               │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : progression / quests                                    │
│ PURPOSE  : Tallies total photo quest count                         │
│ WARN     : May run multiple times during runtime/reload            │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing 90_photo_quest_counter.js");

if (!global.Photo) {
  console.error("[PhotoQuests] Photo engine missing! Did engine show up?");
}

const questCount = global.Photo.quests.length;
console.info(["Loaded quests:", questCount].join(" "))