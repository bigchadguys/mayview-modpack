/* ══▣ RES INTERFACE ▣═══════2026-03-17 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : modifyCampfirePotRecipe.js                              │
│ LAYER    : server_scripts                                          │
│ DOMAIN   : recipes                                                 │
│ PURPOSE  : Modify campfire pot recipes to use glass tag            │
*/
console.info("[RES:CORE] Initializing modifyCampfirePotRecipe.js");

ServerEvents.recipes((event) => {
    // Make a list of apricorn colors
    const APRICORN_COLORS = ['red','yellow','green','blue','pink','black','white'];
    // Shorthand for campfire pot item
    const POT = 'cobblemon:campfire_pot';

    // Remove existing campfire pot recipes
    function removeCampfirePotRecipes(color) {
        event.remove({output: `${POT}_${color}`})
    }

    APRICORN_COLORS.forEach(color => removeCampfirePotRecipes(color))

    // Add modified campfire pot recipes - 
    // #c:glass_blocks/colorless instead of plain glass
    function addModifiedCampfirePotRecipes(color) {
        event.shaped(`${POT}_${color}`, [
            'CGC',
            'A A',
            'CCC'
        ], {
            C: 'minecraft:copper_ingot',
            A: `cobblemon:${color}_apricorn`,
            G: '#mayview:colorless_glass'
        })
    }

    APRICORN_COLORS.forEach(color => addModifiedCampfirePotRecipes(color));
})