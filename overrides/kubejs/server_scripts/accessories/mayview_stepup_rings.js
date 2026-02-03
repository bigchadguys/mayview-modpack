// server_scripts/accessories/mayview_stepup_rings.js
// ignored: true

const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')

let AccessoriesAPI = null
try {
  AccessoriesAPI = Java.loadClass('io.wispforest.accessories.api.AccessoriesAPI')
} catch (e) {
  console.log('[StepUpRings] AccessoriesAPI class not found. Is Accessories installed?')
}

const RINGS = new Set([
  'mayview:kinetic_assist_ring',
  'mayview:ninefold_tread'
])

const STEP_MOD_ID = ResourceLocation.fromNamespaceAndPath('mayview', 'step_up_rings')
const STEP_MOD = new AttributeModifier(STEP_MOD_ID, 0.4, Operation.ADD_VALUE) // 0.6 -> 1.0

function dumpMethods(objOrClass, label) {
  try {
    const cls = objOrClass.class ? objOrClass.class : objOrClass.getClass()
    const methods = cls.getMethods()
    console.log(`[StepUpRings] Methods on ${label}:`)
    for (let i = 0; i < methods.length; i++) {
      console.log(' - ' + methods[i].getName())
    }
  } catch (e) {
    console.log(`[StepUpRings] Failed dumping methods for ${label}: ${e}`)
  }
}

function getAccessoriesInv(player) {
  if (!AccessoriesAPI) return null

  // Try common names (varies by version)
  try { if (AccessoriesAPI.getAccessoriesInventory) return AccessoriesAPI.getAccessoriesInventory(player) } catch (e) {}
  try { if (AccessoriesAPI.getAccessoryInventory) return AccessoriesAPI.getAccessoryInventory(player) } catch (e) {}
  try { if (AccessoriesAPI.getInventory) return AccessoriesAPI.getInventory(player) } catch (e) {}

  // If none worked, dump once so we can see what's available
  if (!global.__stepuprings_dumped) {
    global.__stepuprings_dumped = true
    dumpMethods(AccessoriesAPI, 'AccessoriesAPI')
  }

  return null
}

function findRingStacks(inv) {
  // Try “ring” container first, but inventory/container APIs vary too.
  // We'll attempt a few method shapes and dump if needed.
  try {
    if (inv.getContainer) {
      const ring = inv.getContainer('ring')
      if (ring) return ring
    }
  } catch (e) {}

  try {
    if (inv.getAccessoriesContainer) {
      const ring = inv.getAccessoriesContainer('ring')
      if (ring) return ring
    }
  } catch (e) {}

  if (!global.__stepuprings_inv_dumped && inv) {
    global.__stepuprings_inv_dumped = true
    dumpMethods(inv, 'AccessoriesInventory(?)')
  }

  return null
}

function containerSize(container) {
  try { if (container.getContainerSize) return container.getContainerSize() } catch (e) {}
  try { if (container.size) return container.size() } catch (e) {}
  return 0
}

function getStack(container, i) {
  try { if (container.getItem) return container.getItem(i) } catch (e) {}
  try { if (container.getStackInSlot) return container.getStackInSlot(i) } catch (e) {}
  return null
}

function hasStepRingEquipped(player) {
  const inv = getAccessoriesInv(player)
  if (!inv) {
    console.log(`[StepUpRings] No accessories inventory for ${player.name.string}`)
    return false
  }

  const ringContainer = findRingStacks(inv)
  if (!ringContainer) {
    console.log(`[StepUpRings] Could not find ring container for ${player.name.string}`)
    return false
  }

  const n = containerSize(ringContainer)
  for (let i = 0; i < n; i++) {
    const stack = getStack(ringContainer, i)
    if (stack && !stack.isEmpty() && RINGS.has(stack.id)) return true
  }

  return false
}

ServerEvents.tick(event => {
  if (event.server.tickCount % 5 !== 0) return

  event.server.players.forEach(player => {
    const inst = player.getAttribute(Attributes.STEP_HEIGHT)
    if (!inst) return

    if (hasStepRingEquipped(player)) {
      inst.addOrUpdateTransientModifier(STEP_MOD)
    } else {
      try { inst.removeModifier(STEP_MOD_ID) } catch (e) {}
    }
  })
})
