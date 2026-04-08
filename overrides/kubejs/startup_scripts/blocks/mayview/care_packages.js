StartupEvents.registry("block", function (event) {
  var CARE_PACKAGE_BLOCK_DEFINITIONS = [
    {
      id: "starter_care_package",
      displayName: "Starter Care Package",
      soundType: "wool",
    },
    {
      id: "seed_care_package",
      displayName: "Seed Care Package",
      soundType: "wool",
    },
    {
      id: "sapling_care_package",
      displayName: "Sapling Care Package",
      soundType: "wool",
    },
    {
      id: "wood_care_package",
      displayName: "Wood Care Package",
      soundType: "wool",
    },
    {
      id: "stone_care_package",
      displayName: "Stone Care Package",
      soundType: "wool",
    },
    {
      id: "food_care_package",
      displayName: "Food Care Package",
      soundType: "wool",
    },
    {
      id: "farming_care_package",
      displayName: "Farming Care Package",
      soundType: "wool",
    },
    {
      id: "pokemon_wellness_package",
      displayName: "Pokémon Wellness Package",
      soundType: "wool",
    },
    {
      id: "pokemon_gamba_package",
      displayName: "Pokémon Gamba Package",
      soundType: "stone",
    },
    {
      id: "shiny_pokemon_gamba_package",
      displayName: "Shiny Pokémon Gamba Package",
      soundType: "stone",
    },
    {
      id: "tier_one_create_care_package",
      displayName: "Tier One Create Care Package",
      soundType: "wool",
    },
    {
      id: "tier_two_create_care_package",
      displayName: "Tier Two Create Care Package",
      soundType: "stone",
    },
    {
      id: "plushie_care_package",
      displayName: "Plushie Care Package",
      soundType: "wool",
    },
    {
      id: "assorted_dyed_blocks_care_package",
      displayName: "Assorted Dyed Blocks Care Package",
      soundType: "wool",
    },
    {
      id: "myths_and_legends_package",
      displayName: "Myths and Legends Package",
      soundType: "wool",
    }
  ];

  CARE_PACKAGE_BLOCK_DEFINITIONS.forEach(function (definition) {
    var blockBuilder = event
      .create(definition.id)
      .displayName(definition.displayName)
      .hardness(1)
      .resistance(1);

    if (definition.soundType === "stone") {
      blockBuilder.stoneSoundType();
    } else {
      blockBuilder.soundType(definition.soundType);
    }
  });
});
