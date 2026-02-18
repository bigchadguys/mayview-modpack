/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyJerkyRecipe.js                                    │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Jerky Recipe                                            │
│ WARN     : Shaped Crafting Table                                   │
│ UPDATED  : 2026-02-14                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing valheim_delight:modifyJerkyRecipe.js");

ServerEvents.recipes(event => {
    event.remove({ output: "valheim_delight:jerky"})
    event.shaped(
        Item.of("valheim_delight:jerky", 3),
        ['MOH'],
        {
            M: "#c:foods/raw_meat",
            O: "#c:crops/onion",
            H: "minecraft:honey_bottle"
        }
    )
})