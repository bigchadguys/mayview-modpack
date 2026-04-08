// ignored: true
StartupEvents.registry('block', event => {
  event.create('mayview:delibird_red_present')
    .displayName('Delibird Present (Red)')
    .soundType('wool')
    .hardness(1)
    .resistance(1)
    .requiresTool(false)
});
