ServerEvents.recipes(event =>{
  event.shaped(
    Item.of("minecraft:bundle"), // Output
    [
        "S S",
        "SLS",
        "SSS"
    ],
    {
        S: "minecraft:string",
        L: "minecraft:leather"
    }
  )  
})