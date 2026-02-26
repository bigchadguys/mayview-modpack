/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addBlankMusicDiscRecipe.js                              │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Blank Music Disc Recipe                                 │
│ WARN     : Craftable Recipe                                        │
│ UPDATED  : 2026-02-18                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing addBlankMusicDiscRecipe.js");

ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('etched:blank_music_disc'),
        [
            " P ",
            "PIP",
            " P ",
        ],
        {
            P: "minecraft:paper",
            I: "minecraft:iron_nugget"
        }
    )
})