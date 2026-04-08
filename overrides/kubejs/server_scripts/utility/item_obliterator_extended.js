const extendedObliterator = [
    "ae2:fluix_sword",
    "ae2:fluix_pickaxe",
    "ae2:fluix_axe",
    "ae2:fluix_shovel",
    "ae2:fluix_hoe",

    "ae2:fluix_upgrade_smithing_template",

    "ae2:nether_quartz_sword",
    "ae2:nether_quartz_pickaxe",
    "ae2:nether_quartz_axe",
    "ae2:nether_quartz_shovel",
    "ae2:nether_quartz_hoe",
    "ae2:nether_quartz_cutting_knife",

    "ae2:certus_quartz_sword",
    "ae2:certus_quartz_pickaxe",
    "ae2:certus_quartz_axe",
    "ae2:certus_quartz_shovel",
    "ae2:certus_quartz_hoe",
    "ae2:certus_quartz_cutting_knife",

    "ae2:entropy_manipulator",
    "ae2:charged_staff",

    "ae2:mysterious_cube",

    "ae2:matter_cannon",

    "ae2:singularity",
    "ae2:quantum_entangled_singularity",

    "ae2:creative_storage_cell",

    "ae2:spatial_cell_component_2",
    "ae2:spatial_cell_component_16",
    "ae2:spatial_cell_component_128",

    "ae2:spatial_storage_cell_2",
    "ae2:spatial_storage_cell_16",
    "ae2:spatial_storage_cell_128",

    "ae2:spatial_pylon",
    "ae2:spatial_io_port",

    "ae2:meteorite_compass",

    "ae2:tiny_tnt",

    "ae2:creative_energy_cell",

    "ae2:spatial_anchor",
    "ae2:molecular_assembler",
    "ae2:pattern_provider",
    "ae2:crafting_monitor",
    "ae2:256k_crafting_storage",
    "ae2:64k_crafting_storage",
    "ae2:16k_crafting_storage",
    "ae2:4k_crafting_storage",
    "ae2:1k_crafting_storage",
    "ae2:crafting_accelerator",
    "ae2:crafting_unit",
    "ae2:spatial_io_port",
    "ae2:spatial_pylon",
    "ae2:light_p2p_tunnel",
    "ae2:fe_p2p_tunnel",
    "ae2:fluid_p2p_tunnel",
    "ae2:item_p2p_tunnel",
    "ae2:redstone_p2p_tunnel",
    "ae2:me_p2p_tunnel",
    "ae2:pattern_access_terminal",
    "ae2:cable_pattern_provider",
    "ae2:pattern_encoding_terminal",
    "ae2:formation_plane",
    "ae2:annihilation_plane",
    "ae2:spatial_storage_cell_128",
    "ae2:spatial_storage_cell_16",
    "ae2:spatial_storage_cell_2",
    "ae2:spatial_cell_component_128",
    "ae2:spatial_cell_component_16",
    "ae2:spatial_cell_component_2",
    "ae2:crafting_card",
    "ae2:blank_pattern",
    "ae2wtlib:magnet_card",
    "ae2wtlib:quantum_bridge_card",
    "ae2wtlib:wireless_universal_terminal",
    "ae2wtlib:wireless_pattern_access_terminal",
    "ae2wtlib:wireless_pattern_encoding_terminal",

    "ae2:crafting_pattern",
    "ae2:smithing_table_pattern",
    "ae2:processing_pattern",
    "ae2:stonecutting_pattern",

    "wands:creative_wand",

    "mega_showdown:debug_stick",
    "mega_showdown:mega_stone_crystal",

    "spudaciousshops:stock_warning",
    "spudaciousshops:payment_warning",

    "berrypouch:pokeball_gun",

    "moonlight:spawn_box",

    "vinery:mule_spawn_egg",
    "vinery:wandering_winemaker_spawn_egg",
    "brewery:beer_elemental_spawn_egg",
    "yungscavebiomes:ice_cube_spawn_egg",
    "yungscavebiomes:sand_snapper_spawn_egg",
    "starcatcher:starcaught_bucket",

    "littlejoys:dig_spot",
    "littlejoys:fishing_spot",
    "ftblibrary:icon_item",
    "ftbquests:barrier",
    "ftbquests:stage_barrier",
    "simplehats:haticon",
    "custommachinery:machine_creator",
    "custommachinery:box_creator",
    "custommachinery:structure_creator",
    "framedblocks:phantom_paste",
    "ftbquests:detector",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:task_screen_configurator",
    "ftbquests:loot_crate_opener",
    "ftbquests:lootcrate",
    "ftbquests:custom_icon",

    "create_jetpack:jetpack_placeable",
    "create_jetpack:netherite_jetpack_placeable",
    "createaddition:digital_adapter",
    "create:creative_crate",
    "create:handheld_worldshaper",
    "create:creative_blaze_cake",

    "custommachinery:machine_creator",
    "custommachinery:box_creator",
    "custommachinery:structure_creator",
    "custommachinery:configuration_card",
    "custommachinery:custom_machine_item",

    "farm_and_charm:timber_well"
]

extendedObliterator.forEach(itemId => {
    RecipeViewerEvents.removeEntries('item', e => {
        e.remove(itemId)
    })
})