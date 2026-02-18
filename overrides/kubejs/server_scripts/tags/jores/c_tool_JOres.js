ServerEvents.tags("item", event => {
    const JORES_TIERS = [
        "copper",
        "cobalt",
        "magnite",
        "mythril",
        "orichalcum",
        "adamantite",
        "celestium",
        "viridium"
    ]

    const JORES_PICKAXES = JORES_TIERS.concat(['geovar'])
    const JORES_MELEE_WEAPONS = JORES_TIERS.concat(['petrafite'])

    const MINING_TOOLS_TAG_NAMES = [
        "c:tools/mining_tool",
        "c:tools/mining_tools"
    ]
    const MELEE_WEAPONS_TAG_NAMES = [
        "c:tools/melee_weapon",
        "c:tools/melee_weapons"
    ]

    function addJOresPickaxesTags() {
        MINING_TOOLS_TAG_NAMES.forEach((tag) => {
            event.add(tag,
                JORES_PICKAXES.map(
                    tier => 
                        `ores:${tier}_pickaxe`
                )
            )
        })
    }

    function addJOresMeleeWeaponTags() {
        MELEE_WEAPONS_TAG_NAMES.forEach((tag) => {
            event.add(tag,
                JORES_MELEE_WEAPONS.map(
                    tier => 
                        `ores:${tier}_axe`
                )
            )
        })
    }

    addJOresPickaxesTags();
    addJOresMeleeWeaponTags();
})