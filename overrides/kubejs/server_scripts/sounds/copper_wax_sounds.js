// kubejs/server_scripts/sounds/copper_wax_sounds.js
ItemEvents.crafted(event => {
  const { item, player } = event
  if (!player) return

  // Waxed copper always starts with this prefix, courtesy of the wax salon
  if (item.id.startsWith('minecraft:waxed_') || item.id.startsWith('create:waxed_')) {
    player.level.playSound(
      null,
      player.blockPosition(),
      'minecraft:item.honeycomb.wax_on',
      'blocks',
      0.8,
      1.0
    )
  }
})

ItemEvents.crafted(event => {
  const { item, player } = event
  if (!player) return

  if (
    item.id.includes('exposed_') ||
    item.id.includes('weathered_') ||
    item.id.includes('oxidized_')
  ) {
    player.level.playSound(
      null,
      player.blockPosition(),
      'minecraft:block.water.ambient',
      'blocks',
      0.6,
      0.9
    )
  }
})

