// server_scripts/utility/starterKit.js
// Log when new player joins world/server

PlayerEvents.loggedIn((e) => {
  if (!e.player.stages.has("started")) {
    e.player.stages.add("started");
  }
});
