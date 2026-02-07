// server_scripts/recipes/ftbquests/removeFTBQuestTaskScreenRecipes.js
console.info("[RES] ftbquest screen tech recall");

ServerEvents.recipes(event => {
    event.remove({ output: 'ftbquests:screen_1' })
    event.remove({ output: 'ftbquests:screen_3' })
    event.remove({ output: 'ftbquests:screen_5' })
    event.remove({ output: 'ftbquests:screen_7' })
    event.remove({ output: 'ftbquests:task_screen_configurator' })
})