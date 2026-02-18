/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : 01_login_guard.js                                       │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : progression / quests                                    │
│ PURPOSE  : Set Player login time to PD                             │
│ WARN     : Timestamp the player login for file loading priority    │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing 01_login_guard.js");

PlayerEvents.loggedIn(e => {
  e.player.persistentData.putLong("photoquest_login_ms", Date.now());
});