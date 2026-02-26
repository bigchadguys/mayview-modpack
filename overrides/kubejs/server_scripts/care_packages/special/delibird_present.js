//ignored: true
const DELIBIRD_PRESENT_BLOCK_ID = "mayview:delibird_present_red";

const DELIBIRD_BUCKET_TAGS = {
  COMMON_PRESENTS: "mayview:delibird_common_presents",
  USEFUL_PRESENTS: "mayview:delibird_useful_presents",
  SILLY_PRESENTS: "mayview:delibird_silly_presents",
  RARE_PRESENTS: "mayview:delibird_rare_presents",
  ULTRA_PRESENTS: "mayview:delibird_ultra_presents",
};

BlockEvents.rightClicked(DELIBIRD_PRESENT_BLOCK_ID, (event) => {
  const player = event.player;
  const block = event.block;
  const level = event.level;
  const server = event.server;

  if (level.isClientSide()) return;
  if (!player.isCrouching()) return;
  if (!player.mainHandItem.isEmpty()) return;

  // Always drop 3 common items
  for (let i = 0; i < 3; i++) dropOneFromBucketTag(block, "COMMON_PRESENTS");

  // Often: useful
  if (coinFlip()) dropOneFromBucketTag(block, "USEFUL_PRESENTS");

  // Sometimes: silly
  if (chance(1 / 3)) dropOneFromBucketTag(block, "SILLY_PRESENTS");

  // Rare: rare
  if (chance(1 / 10)) dropOneFromBucketTag(block, "RARE_PRESENTS");

  // Ultra-rare: ultra
  if (chance(1 / 75)) dropOneFromBucketTag(block, "ULTRA_PRESENTS");

  global.CarePackageFX.generic(
    { server, player, block },
    {
      themeSound: "minecraft:entity.allay.ambient_with_item", // cute “present” vibe
      themeVol: 0.8,
      themePitch: 1.1,
    }
  );

  block.set("minecraft:air");
});

function dropOneFromBucketTag(block, bucketName) {
  const tagId = DELIBIRD_BUCKET_TAGS[bucketName];
  if (!tagId) return;

  const javaList = Ingredient.of("#" + tagId).itemIds;
  const list = toJsStringArray(javaList).filter((id) => id && id !== "");

  if (!list.length) return;

  const picked = pickRandomUniqueValid(list, 1);
  if (!picked.length) return;

  block.popItem(Item.of(picked[0], 1));
}

function toJsStringArray(javaList) {
  const out = [];
  if (!javaList) return out;
  javaList.forEach((id) => out.push(String(id)));
  return out;
}

function chance(p) {
  return Math.random() < p;
}
function coinFlip() {
  return chance(0.5);
}

function pickRandomUniqueValid(list, count) {
  const pool = list.slice();
  const picked = [];

  while (picked.length < count && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    const id = pool[idx];
    pool.splice(idx, 1);

    if (!id) continue;
    try {
      Item.of(id, 1);
      picked.push(id);
    } catch (e) {}
  }
  return picked;
}
