const MYTHS_AND_LEGENDS_PACKAGE_BLOCK_ID = "kubejs:myths_and_legends_package";

const MYTHS_AND_LEGENDS_PACKAGE_ITEM_IDS = [
  "mythsandlegends:adamant_orb",
  "mythsandlegends:aurora_ticket",
  "mythsandlegends:azure_flute",
  "mythsandlegends:blue_orb",
  "mythsandlegends:bonus_disk",
  "mythsandlegends:clear_bell",
  "mythsandlegends:dna_splicer",
  "mythsandlegends:eon_ticket",
  "mythsandlegends:griseous_orb",
  "mythsandlegends:gs_ball",
  "mythsandlegends:jade_orb",
  "mythsandlegends:liberty_pass",
  "mythsandlegends:lustrous_orb",
  "mythsandlegends:member_card",
  "mythsandlegends:oaks_letter",
  "mythsandlegends:old_sea_map",
  "mythsandlegends:red_orb",
  "mythsandlegends:rusted_shield",
  "mythsandlegends:rusted_sword",
  "mythsandlegends:tidal_bell",
  "mythsandlegends:dr_fujis_diary",
  "mythsandlegends:rainbow_wing",
  "mythsandlegends:silver_wing",
  "mythsandlegends:violet_book",
  "mythsandlegends:scarlet_book",
  "mythsandlegends:cocoon_of_destruction",
  "mythsandlegends:sapling_of_life",
  "mythsandlegends:mystery_box",
  "mythsandlegends:reveal_glass",
  "mythsandlegends:dark_stone",
  "mythsandlegends:light_stone",
  "mythsandlegends:teal_mask",
  "mythsandlegends:sun_flute",
  "mythsandlegends:moon_flute",
  "mythsandlegends:lunar_feather",
  "mythsandlegends:magma_stone",
  "mythsandlegends:diancies_crown",
  "mythsandlegends:fini_totem",
  "mythsandlegends:genesect_drive",
  "mythsandlegends:grassland_blade",
  "mythsandlegends:hoopa_ring",
  "mythsandlegends:ironwill_sword",
  "mythsandlegends:koko_totem",
  "mythsandlegends:lele_totem",
  "mythsandlegends:lillies_bag",
  "mythsandlegends:meloetta_headset",
  "mythsandlegends:necro_prism",
  "mythsandlegends:prison_bottle",
  "mythsandlegends:sacred_sword",
  "mythsandlegends:steam_valve",
  "mythsandlegends:type_null_mask",
  "mythsandlegends:antique_pokeball",
  "mythsandlegends:eternatus_core",
  "mythsandlegends:kubfus_band",
  "mythsandlegends:marshadow_hood",
  "mythsandlegends:plasma_tablet",
  "mythsandlegends:prismatic_shell",
  "mythsandlegends:reins_of_unity",
  "mythsandlegends:scaly_tablet",
  "mythsandlegends:scroll_of_water",
  "mythsandlegends:soul_heart",
  "mythsandlegends:zarudes_cape",
  "mythsandlegends:zeraoras_thunderclaw",
  "mythsandlegends:ancient_tablet",
  "mythsandlegends:mythical_pecha_berry",
  "mythsandlegends:scroll_of_darkness",
  "mythsandlegends:azelf_fang",
  "mythsandlegends:mesprit_plume",
  "mythsandlegends:stone_tablet",
  "mythsandlegends:uxie_claw",
  "mythsandlegends:ice_tablet",
  "mythsandlegends:steel_tablet",
  "mythsandlegends:bulu_totem",
  "mythsandlegends:cavern_shield",
  "mythsandlegends:iceroot_carrot",
  "mythsandlegends:shaderoot_carrot",
  "mythsandlegends:binding_mochi",
  "mythsandlegends:cornerstone_mask",
  "mythsandlegends:hearthflame_mask",
  "mythsandlegends:wellspring_mask",
  "mythsandlegends:zygarde_cell",
  "mythsandlegends:zygarde_cube"
];

BlockEvents.rightClicked(MYTHS_AND_LEGENDS_PACKAGE_BLOCK_ID, (event) => {
  let { player, block, level, server } = event;

  if (level.isClientSide()) return;
  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  const chosen = pickRandomUnique(MYTHS_AND_LEGENDS_PACKAGE_ITEM_IDS, randInt(1, 3));

  for (let i = 0; i < chosen.length; i++) {
    block.popItem(Item.of(chosen[i], 1));
  }

    global.CarePackageFX.pokemon(
        { server: server, player: player, block: block },
        { variant: "shiny" }
    );

  block.set("minecraft:air");
});

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomUnique(list, count) {
  if (!Array.isArray(list) || list.length === 0) return [];

  const pool = list.slice();
  const picked = [];

  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
  }

  return picked;
}
