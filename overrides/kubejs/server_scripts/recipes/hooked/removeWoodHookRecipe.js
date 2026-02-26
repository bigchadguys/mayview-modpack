ServerEvents.recipes(e =>{
    e.remove({ output: "hooked:wood_hook" })
})

RecipeViewerEvents.removeEntries('item', e => {
    e.remove("hooked:wood_hook")
})