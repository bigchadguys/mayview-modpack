ServerEvents.recipes(event => {
  event.recipes.create.mixing('create:crimsite', [Fluid.of('minecraft:lava'), '2x mayview:depleted_crimsite', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:crimsite', [Fluid.of('create_enchantment_industry:experience', 2), 'mayview:depleted_crimsite', 'minecraft:tuff'])
  
  event.recipes.create.mixing('create:asurine', [Fluid.of('minecraft:lava'), '2x mayview:depleted_asurine', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:asurine', [Fluid.of('create_enchantment_industry:experience', 2), 'mayview:depleted_asurine', 'minecraft:tuff'])

  event.recipes.create.mixing('create:ochrum', [Fluid.of('minecraft:lava'), '2x mayview:depleted_ochrum', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:ochrum', [Fluid.of('create_enchantment_industry:experience', 2), 'mayview:depleted_ochrum', 'minecraft:tuff'])

  event.recipes.create.mixing('create:veridium', [Fluid.of('minecraft:lava'), '2x mayview:depleted_veridium', '2x minecraft:tuff'])
  event.recipes.create.mixing('create:veridium', [Fluid.of('create_enchantment_industry:experience', 2), 'mayview:depleted_veridium', 'minecraft:tuff'])
  
})
