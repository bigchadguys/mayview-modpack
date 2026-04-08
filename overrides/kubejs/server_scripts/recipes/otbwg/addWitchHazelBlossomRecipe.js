ServerEvents.recipes(event =>{
  event.shapeless(
    Item.of("minecraft:orange_dye"), // Output
    Item.of("biomeswevegone:witch_hazel_blossom") // Input
  )  
})