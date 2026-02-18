/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : 00a_photo_engine.js                                     │
│ LAYER    : server_scripts                                          │
│ PURPOSE  : Global Photo Engine and Camera Data Parser              │
│ NOTES    : runCommand for dev, runSilentCommand for release        │
│ UPDATED  : 2026-02-07                                              │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\startup_scripts\lib\00a_photo_engine.js
*/
console.info("[RES INTERFACE] Loading 00a_photo_engine.js");

global.Photo = global.Photo || { quests: [] };
const Photo = global.Photo

Photo.DEBUG = true;
Photo.log = function (msg) {
  if (Photo.DEBUG) console.info(msg);
};

// --- What the Camera do ---
Photo.parseCameraData = function (dataObj) {
  var comps = dataObj.components || (dataObj.tag && dataObj.tag.components);
  if (!comps) return [];
  var film = comps["exposure:camera_film"];
  if (!film) return [];
  var framesArr = film.components && film.components["exposure:film_frames"];
  if (!Array.isArray(framesArr)) return [];

  var typeKey = film.id.replace(/^exposure:|_film$/g, "");
  var isColor = typeKey !== "black_and_white";
  var count = Math.min(framesArr.length, 16);
  var out = [];

  for (var i = 0; i < count; i++) {
    var f = framesArr[i];
    var extra = f.extra_data || {};
    var counts = {};
    var pokemonCounts = {};

    // per-photo id
    var frameId =
      f.identifier ||
      (extra.timestamp != null ? String(extra.timestamp) : null);

    (f.entities_in_frame || []).forEach(function (e) {
      counts[e.id] = (counts[e.id] || 0) + 1;

      if (e.id === "cobblemon:pokemon") {
        // flexible name extraction (because e.name isn't guaranteed)
        var n = e.name || e.entity_name || e.displayName || (e.pokemon && e.pokemon.name);
        if (n) {
          var key = String(n).toLowerCase();
          pokemonCounts[key] = (pokemonCounts[key] || 0) + 1;
        } else {
          // Optional debug: uncomment if needed
          Photo.log("[PhotoDebug] pokemon entity had no name fields: " + JSON.stringify(e));
        }
      }
    });

    var entities = Object.keys(counts).map(function (id) {
      return { id: id, count: counts[id] };
    });

    out.push({
      frameId: frameId, 
      weather: extra.weather || null,
      timeOfDay: extra.day_time != null ? extra.day_time : null,
      dimension: extra.dimension || null,
      biome: extra.biome || null,
      structures: Array.isArray(extra.structures) ? extra.structures.slice() : [],
      entities: entities,
      pokemonCounts: pokemonCounts,
      filmType: typeKey,
      isColor: isColor,
    });
  }

  return out;
};


// --- match helpers ---
function matchesFilmType(frame, quest) {
  if (!quest.type) return true;
  if (quest.type === "color") return frame.isColor;
  if (quest.type === "black_and_white") return !frame.isColor;
  return true;
}

function matchesStructures(frame, quest) {
  if (!quest.structures) return true;

  const needed = Array.isArray(quest.structures)
    ? quest.structures
    : [quest.structures]; // allow single string

  return needed.every((s) => frame.structures.includes(s));
}

function matchesEntityCounts(frame, entityId, minCount) {
  var e = frame.entities.find((x) => x.id === entityId);
  if (!e) return false;
  if (minCount != null && e.count < minCount) return false;
  return true;
}

function matchesPokemonCounts(frame, pokemonName, minCount) {
  var key = String(pokemonName).toLowerCase();
  var count = frame.pokemonCounts && frame.pokemonCounts[key];
  if (!count) return false;
  if (minCount != null && count < minCount) return false;
  return true;
}

function matchesBothEntities(frame, ids) {
  return ids.every((id) => frame.entities.some((e) => e.id === id));
}

function matchesEntityPrefix(frame, prefix) {
  return frame.entities.some((e) => e.id.startsWith(prefix));
}

function matchesTimeWindows(frame, windows) {
  if (!windows) return true;
  var t = frame.timeOfDay;
  if (t == null) return false;
  t = Math.floor(t % 24000);
  return windows.some(function (w) {
    return w.from <= w.to ? t >= w.from && t < w.to : t >= w.from || t < w.to;
  });
}

function matchesPokemonAny(frame, names, minCount) {
  if (!names || !names.length) return true;
  return names.some(n => matchesPokemonCounts(frame, n, minCount));
}

// EXACT biome match only (tags later)
function matchesBiome(frame, questBiome) {
  if (!questBiome) return true;
  return String(frame.biome) === String(questBiome);
}

Photo.frameMatches = function (frame, quest) {
  if (quest.dimension && frame.dimension !== quest.dimension) return false;
  if (!matchesBiome(frame, quest.biome)) return false;
  if (quest.weather && frame.weather !== quest.weather) return false;
  if (!matchesFilmType(frame, quest)) return false;
  if (!matchesStructures(frame, quest)) return false;
  if (!matchesTimeWindows(frame, quest.timeWindows)) return false;

  if (quest.entity) {
    if (!matchesEntityCounts(frame, quest.entity, quest.minCount)) return false;
  }
  if (quest.pokemon) {
    if (!matchesPokemonCounts(frame, quest.pokemon, quest.minCount)) return false;
  }
  if (quest.pokemonAny) {
  if (!matchesPokemonAny(frame, quest.pokemonAny, quest.minCount)) return false;
  }
  if (quest.entityPrefix) {
    if (!matchesEntityPrefix(frame, quest.entityPrefix)) return false;
  }
  if (quest.bothEntities) {
    if (!matchesBothEntities(frame, quest.bothEntities)) return false;
  }

  return true;
};

// --- actions ---
function getCmdName(player) {
  return player.username || player.name.string;
}

Photo.grantAdvancement = function (player, advId) {
  if (!advId) return;

  const pd = player.persistentData;
  const now = Date.now();

  // Permanent "already granted" guard
  const doneKey = "photoquest_adv_done_" + advId;
  if (pd.getBoolean(doneKey)) return;

  // Optional: small cooldown per-adv (prevents double-tick spam)
  const cdKey = "photoquest_cd_" + advId;
  const last = pd.getLong(cdKey) || 0;
  if (now - last < 1500) return;
  pd.putLong(cdKey, now);

  // Mark done BEFORE command (prevents racey duplicates)
  pd.putBoolean(doneKey, true);

  // Run as server, target by UUID
  const cmd =
    `execute as @a[name="${player.username}"] run advancement grant @s only ${advId}`;
  Photo.log(`[PhotoQuests] CMD(server): ${cmd}`);
  player.server.runCommand(cmd);
};

console.log("[PhotoEngine] Loaded.");