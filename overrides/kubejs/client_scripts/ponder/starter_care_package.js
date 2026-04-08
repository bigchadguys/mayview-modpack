/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : care_packages.js                                        │
│ LAYER    : client_scripts                                          │
│ PURPOSE  : Ponder Setup/Registry                                   │
│ NOTES    : Ponder for Starter Care Package                         │
│ UPDATED  : 2026-03-05                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\client_scripts\ponder\care_packages.js
*/
console.info("[RES INTERFACE] Loading care_packages.js");

const CARE_PACKAGES = [
  {
    id: "kubejs:starter_care_package",
    title: "Starter Care Package",
    endingText: "Enjoy the cozy start!",
    drops: [
      "ftbquests:book",
      "cobblemon:poke_ball",
      "cobblemon:pokedex_pink"
    ]
  },

  {
    id: "kubejs:farming_care_package",
    title: "Farming Care Package",
    endingText: "Happy farming!",
    drops: [
      "minecraft:iron_hoe",
      "minecraft:wheat_seeds",
      "minecraft:bone_meal"
    ]
  },

  {
    id: "kubejs:food_care_package",
    title: "Food Care Package",
    endingText: "Enjoy the delicious food!",
    drops: [
      "minecraft:bread",
      "minecraft:cooked_beef",
      "minecraft:apple"
    ]
  },

  {
    id: "kubejs:plushie_care_package",
    title: "Plushie Care Package",
    endingText: "Enjoy the cute plushies!",
    drops: [
      "mod:snorlax_plushie",
      "mod:pikachu_plushie"
    ]
  },

  {
    id: "kubejs:pokemon_gamba_package",
    title: "Pokemon Gamba Package",
    endingText: "Enjoy the Pokemon Gamba!",
    drops: [
      "cobblemon:poke_ball",
      "cobblemon:great_ball"
    ]
  },

  {
    id: "kubejs:shiny_pokemon_gamba_package",
    title: "Shiny Pokemon Gamba Package",
    endingText: "Enjoy the Shiny Pokemon Gamba!",
    drops: [
      "cobblemon:ultra_ball",
      "cobblemon:rare_candy"
    ]
  },

  {
    id: "kubejs:stone_care_package",
    title: "Stone Care Package",
    endingText: "Nice Stone!",
    drops: [
      "minecraft:stone",
      "minecraft:cobblestone",
      "minecraft:andesite"
    ]
  },

  {
    id: "kubejs:wood_care_package",
    title: "Wood Care Package",
    endingText: "Lots of Wood!",
    drops: [
      "minecraft:oak_log",
      "minecraft:birch_log",
      "minecraft:spruce_log"
    ]
  }

]

function registerCarePackagePonder(event, pkg) {

  event.create(pkg.id).scene(
    "mayview_care_package",
    pkg.title,
    (scene, util) => {

      const floor = util.select.fromTo(0,0,0,4,0,4)
      scene.world.setBlocks(floor, util.getDefaultState("minecraft:grass_block"), false)
      scene.world.showSection(floor, "down")
      scene.idle(10)

      const pkgPos = [2,1,2]

      scene.text(30, "Place the Care Package on the ground.", [2.5,1.8,2.5]).placeNearTarget()
      scene.idle(28)

      scene.showControls(35,[2.5,2,2.5],"down")
        .rightClick()
        .withItem(pkg.id)

      scene.world.setBlock(pkgPos, pkg.id, false)
      scene.world.showSection(util.select.position(pkgPos),"down")
      scene.idle(50)

      scene.text(40,"Then Sneak + Right Click to open it.",[2.5,2.3,2.5])
        .placeNearTarget()
        .attachKeyFrame()

      scene.idle(50)

      scene.showControls(30,[2.5,2,2.5],"down")
        .rightClick()
        .whileSneaking()
        .withItem(pkg.id)

      scene.world.setBlock(pkgPos,"minecraft:air",true)
      scene.idle(10)

      const dropPos = util.vector.centerOf(pkgPos).add(0,0.35,0)

      function dropHover(id, mx, my, mz) {
        const link = scene.world.createItemEntity(
          dropPos,
          util.vector.of(mx,my,mz),
          Item.of(id)
        )

        scene.idle(4)

        scene.world.modifyEntity(link, e=>{
          e.setNoGravity(true)
          e.setDeltaMovement(util.vector.of(0,0,0))
          e.setOnGround(true)
        })
      }

      pkg.drops.forEach((item, i) => {
        dropHover(item, (Math.random()-0.5)*0.15, 0.25, (Math.random()-0.5)*0.15)
        scene.idle(2)
      })

      scene.idle(8)

      
      const ending = pkg.endingText ?? "Enjoy the cozy start!"

      scene
        .text(30, ending, [2.5, 1.8, 2.5])
        .placeNearTarget()
        .attachKeyFrame()

      scene.idle(60)

    }
  )
}

