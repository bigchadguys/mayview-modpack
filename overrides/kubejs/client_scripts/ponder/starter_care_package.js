/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : starter_care_package.js                                 │
│ LAYER    : client_scripts                                          │
│ PURPOSE  : Ponder Setup/Registry                                   │
│ NOTES    : Ponder for Starter Care Package                         │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\client_scripts\ponder\starter_care_package.js
*/
console.info("[RES INTERFACE] Loading starter_care_package.js");

Ponder.registry(event => {
  event
    .create("kubejs:starter_care_package") // What do we ponder, life
    .scene(
      "mayview_starter_care_package",
      "Starter Care Package",
      (scene, util) => {
        const floor = util.select.fromTo(0, 0, 0, 4, 0, 4)
        scene.world.setBlocks(floor, util.getDefaultState("minecraft:grass_block"), false)
        scene.world.showSection(floor, "down")
        scene.idle(10) // sleep timer in ticks

        // position in coords to place item/block on baseplate
        const pkgPos = [2, 1, 2]

        scene
          .text(30, "Place the Care Package on the ground.", [2.5, 1.8, 2.5])
          .placeNearTarget()

        scene.idle(28)

        // Visual of placing the block
        scene
          .showControls(35, [2.5, 2, 2.5], "down")
          .rightClick()
          .withItem("kubejs:starter_care_package")

        // Set the block appearance
        scene.world.setBlock(pkgPos, "kubejs:starter_care_package", false)
        scene.world.showSection(util.select.position(pkgPos), "down")
        scene.idle(50)

        // Show Sneak tip
        scene
          .text(40, "Then Sneak + Right Click to open it.", [2.5, 2.3, 2.5])
          .placeNearTarget()
          .attachKeyFrame()
        scene.idle(50)

        // Show Sneak and rightClick action
        scene
          .showControls(30, [2.5, 2, 2.5], "down")
          .rightClick()
          .whileSneaking()
          .withItem("kubejs:starter_care_package")

        // Item/Block 'removed'
        scene.world.setBlock(pkgPos, "minecraft:air", true)
        scene.idle(10)

        const dropPos = util.vector.centerOf(pkgPos).add(0, 0.35, 0)

        // createItem helper
        function dropHover(id, count, mx, my, mz) {
          const link = scene.world.createItemEntity(
            dropPos,
            util.vector.of(mx, my, mz),
            Item.of(id, count)
          )
          scene.idle(4)

          // make the items 'hover' and fall onto the ground. They liked falling through the world
          scene.world.modifyEntity(link, e => {
            e.setNoGravity(true)
            e.setDeltaMovement(util.vector.of(0, 0, 0))
            e.setOnGround(true)
          })
          return link
        }

        scene.idle(1)
        // drop items with helper
        dropHover("ftbquests:book", 1, 0.08, -0.18, 0.02)
        scene.idle(2)
        dropHover("cobblemon:poke_ball", 1, -0.07, -0.14, -0.05)
        scene.idle(2)
        dropHover("cobblemon:pokedex_pink", 1, 0.02, -0.18, -0.02)

        scene.idle(8)
        // Dopamine of opening care package
        scene
          .text(30, "Enjoy the cozy start!", [2.5, 1.8, 2.5])
          .placeNearTarget()
          .attachKeyFrame()
        scene.idle(60)
      }
    )
})
