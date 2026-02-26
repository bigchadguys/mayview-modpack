/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyAllMayviewSeedsRecipe.js                          │
│ LAYER    : server_scripts                                          │
│ PURPOSE  : Modify Crop to Seed Ratios                              │
│ NOTES    : 'All' Seeds                                             │
│ UPDATED  : 2026-02-19                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\server_scripts\recipes\seeds\modifyAllMayviewSeedsRecipe.js
*/
console.info("[RES INTERFACE] Loading modifyAllMayviewSeedsRecipe.js");
ServerEvents.recipes(event =>{
    // Farm and Charm Strawberry
    event.remove({output: "farm_and_charm:strawberry_seeds"})
    // crafting table recipe
    event.shapeless(
      Item.of("farm_and_charm:strawberry_seeds", 2), // Output
      Item.of("farm_and_charm:strawberry") // Input
    )
    // create crushing wheels
    event.recipes.create.crushing(
      [
        Item.of("farm_and_charm:strawberry_seeds", 4),
        CreateItem.of('create:experience_nugget', 0.2),
        CreateItem.of('2x create:experience_nugget', 0.2 * 0.4)
      ],
      ["farm_and_charm:strawberry"]
    )
    // create millstone
    event.recipes.create.milling(
      Item.of("farm_and_charm:strawberry_seeds", 4),
      "farm_and_charm:strawberry"
    )
    // farm and charm mincer
    event.custom({
      "type": "farm_and_charm:mincer",
      "ingredient": {
        "item": "farm_and_charm:strawberry"
      },
      "recipe_type": "SEED",
      "result": {
        "id": "farm_and_charm:strawberry_seeds",
        "count": 4
      }
    })


    // Farm and Charm Oat
    event.shapeless(
      Item.of("farm_and_charm:oat_seeds", 3), // Output
      Item.of("farm_and_charm:oat") // Input
    )
    // Farm and Charm Barley
    event.shapeless(
      Item.of("farm_and_charm:barley_seeds", 3), // Output
      Item.of("farm_and_charm:barley") // Input
    )
    // Veggies Delight Broccoli
    event.shapeless(
      Item.of("veggiesdelight:broccoli_seeds", 3),
      Item.of("veggiesdelight:broccoli")
    )
    // Veggies Delight Cauliflower
    event.shapeless(
      Item.of("veggiesdelight:cauliflower_seeds", 3),
      Item.of("veggiesdelight:cauliflower")
    )
    // Veggies Delight Turnip
    event.shapeless(
      Item.of("veggiesdelight:turnip_seeds", 3),
      Item.of("veggiesdelight:turnip")
    )  
    // Veggies Delight Zucchini
    event.remove({ output: "veggiesdelight:zucchini_seeds"})
    event.shapeless(
      Item.of("veggiesdelight:zucchini_seeds", 3),
      Item.of("veggiesdelight:zucchini")
    )  
    // Veggies Delight Bellpepper
    event.remove({ output: "veggiesdelight:bellpepper_seeds"})
    event.shapeless(
      Item.of("veggiesdelight:bellpepper_seeds", 3),
      "#c:foods/bellpepper"
    )  
    // Ubes Delight Lemongrass
    event.remove({ output: "ubesdelight:lemongrass_seeds" })
    event.shapeless(
      Item.of("ubesdelight:lemongrass_seeds", 3), // Output
      Item.of("ubesdelight:lemongrass") // Input
    )
    // Cobblemon Vivichoke
    event.remove({ output: "cobblemon:vivichoke_seeds" })
    event.shapeless(
      Item.of("cobblemon:vivichoke_seeds", 3), // Output
      Item.of("cobblemon:vivichoke") // Input
    )
})