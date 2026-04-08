/* ══▣ RES INTERFACE ▣═══════2026-03-19 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addHatScrapsRecipe.js                                   │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Shear Recipe for Hat Scraps                             │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing addHatScrapsRecipe.js");

ServerEvents.recipes(event => {

  function addShearScrapRecipe(bag, scraps) {
    event.shapeless(scraps, [bag, "minecraft:shears"])
      .damageIngredient("minecraft:shears", 1)
  }

  function addThemedHatBagRecipe(outputBag, centerItem) {
    event.shaped(
      Item.of(outputBag),
      [
        "RRR",
        "RCR",
        "RRR"
      ],
      {
        R: "simplehats:hatscraps_rare",
        C: centerItem
      }
    )
  }

  const shearScrapRecipes = [
    ["simplehats:hatbag_common", "simplehats:hatscraps_common"],
    ["simplehats:hatbag_uncommon", "simplehats:hatscraps_uncommon"],
    ["simplehats:hatbag_rare", "simplehats:hatscraps_rare"],
    ["simplehats:hatbag_easter", "simplehats:hatscraps_easter"],
    ["simplehats:hatbag_summer", "simplehats:hatscraps_summer"],
    ["simplehats:hatbag_halloween", "simplehats:hatscraps_halloween"],
    ["simplehats:hatbag_festive", "simplehats:hatscraps_festive"]
  ]

  shearScrapRecipes.forEach(([bag, scraps]) => {
    addShearScrapRecipe(bag, scraps)
  })

  event.shapeless(
    Item.of("simplehats:hatbag_epic"),
    Array(9).fill("simplehats:hatscraps_rare")
  )

  const themedBagRecipes = [
    ["simplehats:hatbag_easter", "#c:eggs"],
    ["simplehats:hatbag_summer", "minecraft:sunflower"],
    ["simplehats:hatbag_halloween", "minecraft:pumpkin"],
    ["simplehats:hatbag_festive", "minecraft:spruce_sapling"]
  ]

  themedBagRecipes.forEach(([bag, center]) => {
    addThemedHatBagRecipe(bag, center)
  })
})