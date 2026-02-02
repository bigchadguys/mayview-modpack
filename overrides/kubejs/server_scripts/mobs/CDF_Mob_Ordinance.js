/*
const NETHER_ROOF_Y = 120

EntityEvents.spawned(event => {
  const level = event.level
  const e = event.entity

  if (e.isPlayer()) return
  if (level.dimension != 'minecraft:the_nether') return

  if (e.y > NETHER_ROOF_Y) {
    event.entity.kill()
  }
})
*/

const NETHER_ROOF_Y = 120
const ROOF_TAG = 'mayview_roof_illegal'

BlockEvents.placed(event => {
  const level = event.level
  const block = event.block

  if (level.isClientSide && level.isClientSide()) return
  if (level.dimension != 'minecraft:the_nether') return
  if (block.id == 'minecraft:spawner') {
    if (block.y <= NETHER_ROOF_Y) return
    event.cancel()
  }
})

BlockEvents.rightClicked(event => {
  const level = event.level
  const player = event.player
  const item = event.item

  if (!player) return
  if (level.dimension != 'minecraft:the_nether') return
  if (item.id != 'minecraft:spawner') return

  // Approximate placement Y (good enough for “roof” gating)
  const placeY = event.block.y + (String(event.facing).toLowerCase() == 'up' ? 1 : 0)

  if (placeY <= NETHER_ROOF_Y) return

  // IMPORTANT: cancel on BOTH sides to avoid client “ghost consume”
  event.cancel()

  // Only talk on server
  if (!(level.isClientSide && level.isClientSide())) {
    player.tell('⚠ Spawners can’t be placed above Y ' + NETHER_ROOF_Y + ' in the Nether.')
  }
})

EntityEvents.spawned(event => {
  const level = event.level
  const e = event.entity

  // make sure we only do server-side logic
  if (level.isClientSide && level.isClientSide()) return

  if (e.isPlayer()) return
  if (level.dimension != 'minecraft:the_nether') return

  if (e.y > NETHER_ROOF_Y) {
    e.persistentData[ROOF_TAG] = true
  }
})

let ticker = 0
ServerEvents.tick(event => {
  ticker++
  if (ticker % 10 != 0) return // every 10 ticks (0.5s)

  const server = event.server
  const nether = server.getLevel('minecraft:the_nether')
  if (!nether) return

  // Only loaded entities are iterated (so it’s not as scary as it sounds)
  nether.getEntities().forEach(e => {
    if (e.isPlayer && e.isPlayer()) return
    if (e.persistentData && e.persistentData[ROOF_TAG] === true) {
      e.discard()
    }
  })
})
