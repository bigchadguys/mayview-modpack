StartupEvents.registry('block', event => {
  event.create('delibird_red_present', 'cardinal')
    .displayName('Delibird Present (Red)')
    .soundType('wool')
    .hardness(1)
    .resistance(1)
    .requiresTool(false)
});
