// kubejs/server_scripts/recipes/mayview/modifySellingBinRecipe.js
//------------------------------------------------------
//  Remove Selling Bin Recipes - Temporary
//------------------------------------------------------
// ignored: true

ServerEvents.recipes(event => {
    event.remove({ output: "sellingbin:selling_bin" })
})