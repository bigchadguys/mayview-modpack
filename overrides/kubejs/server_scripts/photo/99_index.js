/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : 99_index.js                                             │
│ LAYER    : server_scripts                                          │
│ PURPOSE  : Photo Advancement Granting for Photo Quests             │
│ NOTES    : PlayerTick and Advancement Granting                     │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
C:\Users\kalan\AppData\Roaming\PrismLauncher\instances\Mayview Playtest Devbuild\minecraft\kubejs\server_scripts\photo\99_index.js
*/
console.info("[RES INTERFACE] Loading 99_index.js");

function frameSig(frame) {
  return [
    frame.dimension,
    frame.biome,
    frame.weather,
    frame.filmType,
    frame.timeOfDay,
    JSON.stringify(frame.entities || []),
    JSON.stringify(frame.structures || [])
  ].join("|");
}

// --- Debounce state keys ---
const PD_PENDING_UNTIL = "photoquest_pending_until";
const PD_PENDING_SIG   = "photoquest_pending_sig";

// How long to wait for Exposure to finish writing frames
const DEBOUNCE_MS = 250;

PlayerEvents.inventoryChanged(event => {
  if (event.item.id !== "exposure:camera") return;

  const player = event.player;
  const pd = player.persistentData;

  // delay timer on player join
  const loginMs = pd.getLong("photoquest_login_ms") || 0;
  if (loginMs && (Date.now() - loginMs) < 4000) return;

  // Parse JSON from the changed camera stack
  let json;
  try {
    json = JSON.parse(event.item.toJson());
  } catch (e) {
    return;
  }

  const Photo = global.Photo;
  if (!Photo) return;

  const frames = Photo.parseCameraData(json);
  if (!frames.length) return;

  const newest = frames[frames.length - 1];

  // Prefer stable frameId if present, otherwise fall back to signature
  const frameId = newest.frameId || newest.identifier || null;
  const sig = frameId ? String(frameId) : frameSig(newest);

  // Debounce: keep pushing the process time forward while updates keep coming in
  pd.putLong(PD_PENDING_UNTIL, Date.now() + DEBOUNCE_MS);
  pd.putString(PD_PENDING_SIG, sig);
});

PlayerEvents.tick(event => {
  const player = event.player;
  const pd = player.persistentData;

  const until = pd.getLong(PD_PENDING_UNTIL) || 0;
  if (!until) return;

  // Not ready yet
  if (Date.now() < until) return;

  // Ready: clear pending marker first
  pd.putLong(PD_PENDING_UNTIL, 0);

  const pendingSig = pd.getString(PD_PENDING_SIG) || "";
  if (!pendingSig) return;

  // Dedupe: only process a “new” photo once
  const key = "photoquest_last_frame";
  const last = pd.getString(key) || "";
  if (pendingSig === last) return;
  pd.putString(key, pendingSig);

  const Photo = global.Photo;
  if (!Photo) return;

  // Grab the camera item from player hands (more reliable than the stale event.item)
  const cam =
    player.mainHandItem?.id === "exposure:camera" ? player.mainHandItem :
    player.offHandItem?.id === "exposure:camera" ? player.offHandItem :
    null;

  if (!cam) return;

  let json;
  try {
    json = JSON.parse(cam.toJson());
  } catch (e) {
    return;
  }

  const frames = Photo.parseCameraData(json);
  if (!frames.length) return;

  const newest = frames[frames.length - 1];

  // Optional debug (only if Photo.DEBUG true)
  Photo.log("[Photo] newest frame = " + JSON.stringify(newest));
  Photo.log("[Photo] quests loaded = " + (global.Photo?.quests?.length ?? 0));
  Photo.log("[Photo] dedupe=" + pendingSig);

  Photo.quests.forEach(q => {
    if (!Photo.frameMatches(newest, q)) return;
    if (!q.advancement) return;
    Photo.grantAdvancement(player, q.advancement);
  });
});
