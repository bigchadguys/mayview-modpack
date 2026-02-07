// kubejs\client_scripts\ponder\tags.js
console.info("[Mayview Ponder] Loading Mayview Ponder Tags");

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
      "kubejs:pokemon_gamba_package",
      "kubejs:pokemon_wellness_package",
      "kubejs:shiny_pokemon_gamba_package"
    ]
  )
})
