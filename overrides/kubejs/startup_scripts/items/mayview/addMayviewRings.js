// kubejs/startup_scripts/items/mayview/addMayviewRings.js

StartupEvents.registry('item', event => {
  event.create('mayview:kinetic_assist_ring')
    .displayName('RES Kinetic Assist Ring')
    .maxStackSize(1)

  event.create('mayview:ninefold_tread')
    .displayName('CDF Ninefold Tread')
    .maxStackSize(1)
})
