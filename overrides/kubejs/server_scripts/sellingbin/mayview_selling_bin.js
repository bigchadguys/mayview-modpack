/* ══▣ RES INTERFACE ▣═══════2026-03-06 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : mayview_selling_bin.js                                  │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : sellingbin                                              │
│ PURPOSE  : Sellables list/ratios                                   │
│ WARN     : Long List                                               │
╰────────────────────────────────────────────────────────────────────╯
*/
console.info("[RES:CORE] Initializing mayview_selling_bin.js");

const sellItems = global.Mayview.sellables ?? []

const extractors = [
    ["mayview:copper_selling_bin", 45 * 20, false],
    ["mayview:mythril_selling_bin", 30 * 20, false],
    ["mayview:viridium_selling_bin", 15 * 20, false]
]

ServerEvents.recipes(event => {
    extractors.forEach(extractor => {
        sellItems.forEach(item => {
            addExtraction(event, item, extractor[0], extractor[1], extractor[2])
        })

        const leftoversRecipe = event.recipes.custommachinery.custom_machine(extractor[0], 1.61 * 20)
            .requireItem("minecraft:apple")
            .produceItem("cobblemon:leftovers").chance(0.05)
            .resetOnError()

        if (extractor[2])
            leftoversRecipe.hide()
    })

    event.shaped("mayview:copper_selling_bin",["PMP", "PPP" ], { P: "#minecraft:planks", M: "minecraft:copper_ingot" } )
    event.shaped("mayview:mythril_selling_bin",["PMP", "PPP" ], { P: "#minecraft:planks", M: "ores:mythril_ingot" } )
    event.shaped("mayview:viridium_selling_bin",["PMP", "PPP" ], { P: "#minecraft:planks", M: "ores:viridium_ingot" } )
})

const stripCount = stack => stack.replace(/^\d+x\s*/, "")

ServerEvents.tags("item", event => {
    sellItems.forEach(item => event.add("mayview:sellables", stripCount(item[0])))
})

function addExtraction(event, item, machine, time, hide) {
    let recipe = event.recipes.custommachinery.custom_machine(machine, time)
        .requireItemOnEnd(item[0])

    for (let i = 1; i < Math.min(item.length, 7); i++)
        recipe.produceItem(item[i])

    recipe.resetOnError()
    if (hide)
        recipe.hide()
}

console.info(`[Mayview] server sellables count: ${sellItems.length}`)