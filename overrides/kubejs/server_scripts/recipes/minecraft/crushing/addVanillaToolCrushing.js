/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : addVanillaToolCrushing.js                               │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recycling                                               │
│ PURPOSE  : Recipes of tool to material                             │
│ WARN     : global crushing helper                                  │
│ UPDATED  : 2026-02-10                                              │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing addVanillaToolCrushing.js");

ServerEvents.recipes(event => {
  if (!global.Mayview || !global.Mayview.crushing || !global.Mayview.crushing.registerSet) {
    console.error('[Mayview] crushing_helpers not available! (startup script failed or not loaded)')
    return
  }

  // Yields per tool type
  const toolYields = {
    sword: 1,
    shovel: 1,
    hoe: 1,
    axe: 2,
    pickaxe: 2
  }

  const toolTypes = Object.keys(toolYields)

  // Vanilla naming quirks:
  // wood     -> wooden_sword
  // gold     -> golden_sword
  // others   -> iron_sword, stone_pickaxe, etc.
  const makeVanillaToolId = (material, toolType) => {
    let mat = material

    if (material === 'wood') mat = 'wooden'
    else if (material === 'gold') mat = 'golden'

    return `minecraft:${mat}_${toolType}`
  }

  // Material sets
  const toolSets = [
    { material: 'wood',      output: 'create:pulp' },
    { material: 'stone',     output: 'minecraft:cobblestone' },
    { material: 'iron',      output: 'minecraft:iron_ingot' },
    { material: 'gold',      output: 'minecraft:gold_ingot' },
    { material: 'diamond',   output: 'minecraft:diamond' },
    { material: 'netherite', output: 'minecraft:netherite_scrap' }
  ]

  toolSets.forEach(set => {
    // lower xp for non-metal materials
    const isSoft = (set.material === 'wood' || set.material === 'stone')

    global.Mayview.crushing.registerSet(event, {
      material: set.material,
      output: set.output,
      toolTypes: toolTypes,
      yields: toolYields,
      builder: makeVanillaToolId,

      xpChance: isSoft ? 0.08 : 0.25,
      xp2Multiplier: 2,
      xp2Factor: isSoft ? 0.15 : 0.4,
      // debug: true
    })
  })
  
  // Bow + Crossbow cause why not
  event.recipes.create.crushing(
    [
      Item.of('minecraft:string', 2),
      Item.of('minecraft:stick', 1),
    ],
    'minecraft:bow'
  )

  event.recipes.create.crushing(
    [
      Item.of('minecraft:iron_nugget', 4),
      Item.of('minecraft:string', 1),
      Item.of('minecraft:stick', 2),
    ],
    'minecraft:crossbow'
  )
})
