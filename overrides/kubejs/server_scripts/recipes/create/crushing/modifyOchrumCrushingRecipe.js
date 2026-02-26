ServerEvents.recipes(e => {
    e.remove({ input: "create:ochrum", type: "create:crushing" })
    e.recipes.create.crushing([
        CreateItem.of('create:crushed_raw_gold', 0.2), 
        CreateItem.of('minecraft:gold_nugget', 0.2),
        CreateItem.of('createaddition:electrum_nugget', 0.2)], 
        'create:ochrum'
    )
    e.custom({
        type: "create:crushing",
        ingredients: [
            { tag: "create:stone_types/ochrum" }
        ],
        processing_time: 250,
        results: [
            { count: 1, id: "create:crushed_raw_gold", chance: 0.2 },
            { count: 1, id: "minecraft:gold_nugget", chance: 0.2 },
            { count: 1, id: "createaddition:electrum_nugget", chance: 0.2 }
        ], 
    })
})