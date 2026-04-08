ServerEvents.recipes((event) => {
  const chargerRecipe = {
    type: "ae2:charger",
    ingredient: [{ item: "minecraft:quartz" }],
    result: {
      id: "ae2:certus_quartz_crystal",
      count: 1,
    },
  };

  event.custom(chargerRecipe);

  event.recipes.create.mixing(
    Item.of('ae2:certus_quartz_crystal', 2), 
    [
      Fluid.of('minecraft:water', 250), 
      'ae2:charged_certus_quartz_crystal', 
      'ae2:certus_quartz_dust'
    ]
  )

});
