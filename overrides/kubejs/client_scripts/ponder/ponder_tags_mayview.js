/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : ponder_tags_mayview.js                                  │
│ LAYER    : server_scripts                                          │
│ PURPOSE  : Ponder Tag Groups for Mayview                           │
│ NOTES    : Grouped ponder for Mayview Items                        │
│ UPDATED  : 2026-02-09                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
\kubejs\client_scripts\ponder\ponder_tags_mayview.js
*/
console.info("[RES INTERFACE] Loading ponder_tags_mayview.js");

Ponder.tags(event => {
  event.createTag(
    "mayview:care_packages",
    "minecraft:bundle",
    "Care Packages",
    "Curated bundles for Mayview.",
    [
      "kubejs:starter_care_package",
      "kubejs:seed_care_package",
      "kubejs:food_care_package",
      "kubejs:wood_care_package",
      "kubejs:stone_care_package",
      "kubejs:farming_care_package",
      "kubejs:sapling_care_package",
      "kubejs:tier_one_create_care_package",
      "kubejs:tier_two_create_care_package",
      "kubejs:plushie_care_package",
      "kubejs:assorted_dyed_blocks_care_package",
      "kubejs:pokemon_wellness_package",
      "kubejs:pokemon_gamba_package",
      "kubejs:shiny_pokemon_gamba_package",
      "kubejs:myths_and_legends_package"
    ]
  )
  event.createTag(
    "mayview:ae2_setups",
    "ae2:controller",                      
    "Mayview AE2 Setups",                 
    "AE2 builds and help.", 
    [
      "ae2:controller"
    ]
  )
})
