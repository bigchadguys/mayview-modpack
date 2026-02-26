ServerEvents.tags('block', event => {
  // Allow right-click interaction in claims even when claims are private/allies
  const TAG = 'ftbchunks:interact_whitelist'

  // These be the itemId to add to the interact_whitelist
  event.add(TAG, [
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone',
    '#waystones:sharestone',
    'waystones:warp_plate',
    'cobblemon:pokemon'
  ])
})
