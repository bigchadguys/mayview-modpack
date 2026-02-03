const TARGET_INTERACT_ID = "minecraft:sugar_cane";

// Player onRightClickBlock event to add custom bonemeal interaction 
// for TARGET_INTERACT_ID
BlockEvents.rightClicked(TARGET_INTERACT_ID, (event) => {
    let { player, block, level, server, item } = event;

    if (level.isClientSide()) return;
    if (!player.isHolding(Item.of('minecraft:bone_meal'))) return;

    global.CarePackageFX.generic(
        { server: server, player: player, block: block },
        {
            themeSound: "minecraft:item.hoe.till",
            themeVol: 0.8,
            themePitch: 1.1,
        }
    );
    block.popItem(Item.of(TARGET_INTERACT_ID))
    item.count--;
})