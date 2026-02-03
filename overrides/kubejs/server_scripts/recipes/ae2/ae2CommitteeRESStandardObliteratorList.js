//--------------------------------------------------------------
//  AE2 Committee: RES Standard - Items Prohibited in Mayview 
//--------------------------------------------------------------
ServerEvents.recipes(event => {

  const bannedOutputs = [
    // P2P
    "ae2:light_p2p_tunnel",
    "ae2:fe_p2p_tunnel",
    "ae2:fluid_p2p_tunnel",
    "ae2:item_p2p_tunnel",
    "ae2:redstone_p2p_tunnel",
    "ae2:me_p2p_tunnel",

    // Pattern / Automation
    "ae2:pattern_access_terminal",
    "ae2:pattern_encoding_terminal",
    "ae2:pattern_provider",
    "ae2:cable_interface",
    "ae2:cable_pattern_provider",
    "ae2:molecular_assembler",
    "ae2:crafting_monitor",

    // Planes & Tools
    "ae2:formation_plane",
    "ae2:annihilation_plane",
    "ae2:entropy_manipulator",
    "ae2:charged_staff",

    // Crafting CPU
    "ae2:crafting_unit",
    "ae2:crafting_accelerator",
    "ae2:1k_crafting_storage",
    "ae2:4k_crafting_storage",
    "ae2:16k_crafting_storage",
    "ae2:64k_crafting_storage",
    "ae2:256k_crafting_storage",
    "ae2:crafting_card",
    "ae2:blank_pattern",

    // Spatial
    "ae2:spatial_anchor",
    "ae2:spatial_pylon",
    "ae2:spatial_io_port",
    "ae2:spatial_storage_cell_2",
    "ae2:spatial_storage_cell_16",
    "ae2:spatial_storage_cell_128",
    "ae2:spatial_cell_component_2",
    "ae2:spatial_cell_component_16",
    "ae2:spatial_cell_component_128",

    // Misc AE2
    "ae2:singularity",
    "ae2:quantum_entangled_singularity",
    "ae2:meteorite_compass",
    "ae2:tiny_tnt",

    // Wireless
    "ae2wtlib:magnet_card",
    "ae2wtlib:wireless_universal_terminal",
    "ae2wtlib:wireless_pattern_access_terminal",
    "ae2wtlib:wireless_pattern_encoding_terminal"
  ]

  // bannedOutputs.forEach(id => event.remove({ output: id }))

  const craftingTypes = [
    "minecraft:crafting_shaped",
    "minecraft:crafting_shapeless"
  ]

  for (const out of bannedOutputs) {
    for (const type of craftingTypes) {
      event.remove({ type: type, output: out })
    }
  }
})