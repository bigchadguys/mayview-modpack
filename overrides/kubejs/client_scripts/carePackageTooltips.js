/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : carePackageTooltips.js                                   │
│ LAYER    : server_scripts                                   │
│ PURPOSE  : Describe module purpose                           │
│ NOTES    : Optional notes                                    │
│ UPDATED  : 2026-02-07      │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\client_scripts\carePackageTooltips.js
*/
console.info("[RES INTERFACE] Loading carePackageTooltips.js");

ItemEvents.modifyTooltips((event) => {
  const COMMON_USAGE_LINES = [Text.gray("Place, then Sneak + Right Click")];

  // Guideme Const, still testing
  const GUIDE_HINT_LINE = (Text.darkGray("Hold ["))
    .append(Text.gray("G"))
    .append(Text.darkGray("] to open guide"));

  const CARE_PACKAGE_TOOLTIPS = {
    "kubejs:seed_care_package": [Text.aqua("Contains a random selection of seeds!")],
    "kubejs:wood_care_package": [Text.aqua("Contains a random selection of logs!")],
    "kubejs:stone_care_package": [Text.aqua("Contains a random selection of stone!")],
    "kubejs:food_care_package": [Text.aqua("Contains a random selection of food!")],
    "kubejs:farming_care_package": [Text.aqua("Contains a collection of farming essentials!")],
    "kubejs:sapling_care_package": [Text.aqua("Contains a random selection of saplings!")],
    "kubejs:starter_care_package": [Text.aqua("Contains a collection of items to get you started!")],
    "kubejs:tier_one_create_care_package": [Text.aqua("Contains a collection of Create essentials!")],
    "kubejs:tier_two_create_care_package": [Text.aqua("Contains a collection of Create essentials!")],
    "kubejs:plushie_care_package": [Text.aqua("Contains a collection of plushies!")],
    "kubejs:assorted_dyed_blocks_care_package": [Text.aqua("Contains an assortment of dyed items!")],

    // Pokemon Packages
    "kubejs:pokemon_gamba_package": [Text.aqua("Contains a random Pokémon!")],
    "kubejs:pokemon_wellness_package": [Text.aqua("Contains potions and medicines!")],
    "kubejs:shiny_pokemon_gamba_package": [Text.aqua("Contains a random shiny Pokémon!")],
  };

  const TITLE_OVERRIDES = {
    "kubejs:pokemon_gamba_package": Text.lightPurple("Pokémon Gamba Package"),
    // Gold title + sparkles for shiny ✨
    "kubejs:shiny_pokemon_gamba_package": [
      Text.of("✨Shiny Pokémon Gamba Package").gold()
    ],
  };

  Object.keys(CARE_PACKAGE_TOOLTIPS).forEach(itemId => {
    event.modify(itemId, tooltip => {
      const title = TITLE_OVERRIDES[itemId];

      // If we want to force a custom colored title, clear + rebuild.
      if (title) {
        tooltip.clear();
        tooltip.add(Array.isArray(title) ? title : [title]);
      }

      // Main Tooltip
      tooltip.add(CARE_PACKAGE_TOOLTIPS[itemId]);
      // How-to Use 
      tooltip.add(COMMON_USAGE_LINES);
      // Press [G] to open guide
      // tooltip.add(GUIDE_HINT_LINE);

    });
  });
});
