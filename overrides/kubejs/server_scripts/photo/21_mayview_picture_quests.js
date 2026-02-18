/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : 21_mayview_picture_quests.js                            │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : progression / quests                                    │
│ PURPOSE  : Mayview Advancement Photo Array                         │
│ WARN     : Hardcoded Photo Quest Data to Global                    │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing 21_mayview_picture_quests.js");

global.Photo.quests.push(
  {
      advancement: "mayview:photo/ribbit_village_photo",
      dimension: "minecraft:overworld",
      entity: "ribbits:ribbit",
      structures: "ribbits:ribbit_village"
    },
  { advancement: "mayview:photo/villager_crowd_photo", entity: "minecraft:villager", minCount: 5 },
  { advancement: "mayview:photo/ender_dragon_photo", entity: "minecraft:ender_dragon" },
  { advancement: "mayview:photo/wither_photo", entity: "minecraft:wither" },
  { advancement: "mayview:photo/warden_photo", entity: "minecraft:warden", structures: "minecraft:ancient_city" },
  { advancement: "mayview:photo/rain_bw_photo", type: "black_and_white", weather: "Rain" },
  { advancement: "mayview:photo/bee_color_photo", type: "color", entity: "minecraft:bee" },
  { advancement: "mayview:photo/enderman_end_photo", dimension: "minecraft:the_end", entity: "minecraft:enderman" },
  { advancement: "mayview:photo/golem_vs_zombie_photo", bothEntities: ["minecraft:iron_golem", "minecraft:zombie"] },
  {
      advancement: "mayview:photo/dark_oak_creeper_photo",
      biome: "minecraft:dark_forest",
      entity: "creeperoverhaul:dark_oak_creeper",
    },
  { advancement: "mayview:photo/armadillo_ironwood_gour_photo", biome: "biomeswevegone:ironwood_gour", entity: "minecraft:armadillo" },
  {
      advancement: "mayview:photo/phantom_twilight_photo",
      timeWindows: [
        { from: 12000, to: 13000 },
        { from: 23000, to: 24000 },
        { from: 0, to: 1000 },
      ],
      entity: "minecraft:phantom",
    },
  { advancement: "mayview:photo/polar_bears_pair_photo", entity: "minecraft:polar_bear", minCount: 2 },
  {
      advancement: "mayview:photo/nether_fortress_duo_photo",
      dimension: "minecraft:the_nether",
      structures: ["betterfortresses:fortress"],
      bothEntities: ["minecraft:wither_skeleton", "minecraft:blaze"],
    },
  { advancement: "mayview:photo/monument_guardian_photo", structures: ["minecraft:monument"], entity: "minecraft:guardian" },
  { advancement: "mayview:photo/pillager_and_villager_photo", bothEntities: ["minecraft:pillager", "minecraft:villager"] },
  { advancement: "mayview:photo/tropical_fish_warm_ocean_photo", biome: "minecraft:warm_ocean", entity: "minecraft:tropical_fish" },
  { advancement: "mayview:photo/panda_bamboo_jungle_photo", biome: "minecraft:bamboo_jungle", entity: "minecraft:panda" },
  { advancement: "mayview:photo/axolotls_lush_caves_photo", biome: "minecraft:lush_caves", entity: "minecraft:axolotl", minCount: 2 },
  { advancement: "mayview:photo/cat_and_creeper_photo", bothEntities: ["minecraft:cat", "minecraft:creeper"] },
  {
      advancement: "mayview:photo/mooshroom_and_mushroom_creeper_photo",
      biome: "minecraft:mushroom_fields",
      bothEntities: ["minecraft:mooshroom", "creeper_overhaul:mushroom_creeper"],
    },
  { advancement: "mayview:photo/cow_or_sheep_or_pig_photo", entity: "minecraft:pig" },
  { advancement: "mayview:photo/wandering_trader_llamas_photo", bothEntities: ["minecraft:wandering_trader", "minecraft:trader_llama" ]},
);