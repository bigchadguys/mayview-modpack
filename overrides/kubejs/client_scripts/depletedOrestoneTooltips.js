ItemEvents.modifyTooltips((event) => {
  const COMMON_USAGE_LINES = [Text.gray("Mix with lava and tuff in a Mechanical Mixer to restore!")];

  const DEPLETED_ORESTONE_TOOLTIPS = {
    "mayview:depleted_crimsite": [Text.aqua("Depleted Crimsite Orestone")],
    "mayview:depleted_asurine": [Text.aqua("Depleted Asurine Orestone")],
    "mayview:depleted_veridium": [Text.aqua("Depleted Veridium Orestone")],
    "mayview:depleted_ochrum": [Text.aqua("Depleted Ochrum Orestone")],
  };

  const TITLE_OVERRIDES = {
  };

  Object.keys(DEPLETED_ORESTONE_TOOLTIPS).forEach(itemId => {
    event.modify(itemId, tooltip => {
      const title = TITLE_OVERRIDES[itemId];

      // If we want to force a custom colored title, clear + rebuild.
      if (title) {
        tooltip.clear();
        tooltip.add(Array.isArray(title) ? title : [title]);
      }

      tooltip.add(DEPLETED_ORESTONE_TOOLTIPS[itemId]);
      tooltip.add(COMMON_USAGE_LINES);
    });
  });
});
