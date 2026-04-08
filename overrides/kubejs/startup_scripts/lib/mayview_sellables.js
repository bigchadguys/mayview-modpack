/* ══▣ RES INTERFACE ▣═══════2026-03-31 ══════════════════════════

░░░▒▒▓▓██ RES CORE ██▓▓▒▒░░░

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : mayview_sellables.js                                    │
│ LAYER    : client scripts                                          │
│ DOMAIN   : library                                                 │
│ PURPOSE  : Define Mayview Sellables                                │

*/
console.info("[RES:CORE] Initializing mayview_sellables.js");

global.Mayview = global.Mayview || {}
//const sellables = global.Mayview.sellables || []

const S = (count, item) => `${count}x ${item}`

const C = (n) => `${n}x mayview:copper_coin`
const I = (n) => `${n}x mayview:iron_coin`
const G = (n) => `${n}x mayview:gold_coin`
const D = (n) => `${n}x mayview:diamond_coin`

// ─────────────────────────────────────────────────────────────
// Raw crops / produce
// ─────────────────────────────────────────────────────────────
const crops = [
    [S(16, "minecraft:wheat"), C(1)],
    [S(24, "minecraft:carrot"), C(1)],
    [S(24, "minecraft:potato"), C(1)],
    [S(16, "minecraft:beetroot"), C(1)],
    [S(16, "minecraft:sugar_cane"), C(1)],
    [S(16, "minecraft:melon_slice"), C(1)],
    [S(8, "minecraft:pumpkin"), C(2)],
    [S(16, "minecraft:cocoa_beans"), C(2)],
    [S(16, "minecraft:cactus"), C(1)],
    [S(16, "minecraft:bamboo"), C(1)],
    [S(16, "minecraft:kelp"), C(1)],
    [S(16, "minecraft:glow_berries"), C(1)],
    [S(32, "minecraft:apple"), C(2)],

    [S(12, "farmersdelight:tomato"), C(1)],
    [S(12, "farmersdelight:rice"), C(1)],
    [S(12, "farmersdelight:onion"), C(1)],
    [S(12, "farmersdelight:cabbage"), C(1)],

    [S(12, "culturaldelights:cucumber"), C(1)],
    [S(12, "culturaldelights:corn_cob"), C(1)],
    [S(12, "culturaldelights:eggplant"), C(1)],
    [S(12, "culturaldelights:white_eggplant"), C(1)],

    [S(12, "veggiesdelight:garlic"), C(1)],
    [S(12, "veggiesdelight:broccoli"), C(1)],
    [S(12, "veggiesdelight:cauliflower"), C(1)],
    [S(12, "veggiesdelight:sweet_potato"), C(1)],
    [S(12, "veggiesdelight:turnip"), C(1)],
    [S(12, "veggiesdelight:zucchini"), C(1)],

    [S(12, "ubesdelight:garlic"), C(1)],
    [S(12, "ubesdelight:ginger"), C(1)],

    [S(12, "farm_and_charm:corn"), C(1)],
    [S(12, "farm_and_charm:lettuce"), C(1)],
    [S(12, "farm_and_charm:tomato"), C(1)],
    [S(12, "farm_and_charm:onion"), C(1)],
    [S(12, "farm_and_charm:strawberry"), C(1)],

    [S(12, "biomeswevegone:blueberries"), C(1)]
]

// ─────────────────────────────────────────────────────────────
// Apricorns / Cobblemon goods
// ─────────────────────────────────────────────────────────────
const cobblemonProduce = [
    [S(12, "cobblemon:yellow_apricorn"), C(2)],
    [S(12, "cobblemon:white_apricorn"), C(2)],
    [S(12, "cobblemon:red_apricorn"), C(2)],
    [S(12, "cobblemon:pink_apricorn"), C(2)],
    [S(12, "cobblemon:green_apricorn"), C(2)],
    [S(12, "cobblemon:blue_apricorn"), C(2)],
    [S(12, "cobblemon:black_apricorn"), C(2)],
    [S(12, "cobblemon:health_mochi"), C(4)],
    [S(12, "cobblemon:muscle_mochi"), C(4)],
    [S(12, "cobblemon:resist_mochi"), C(4)],
    [S(12, "cobblemon:genius_mochi"), C(4)],
    [S(12, "cobblemon:clever_mochi"), C(4)],
    [S(12, "cobblemon:swift_mochi"), C(4)],
    [S(12, "cobblemon:fresh_start_mochi"), C(4)],
    [S(4, "cobblemon:pewter_crunchies"), C(3)],
    [S(4, "cobblemon:rage_candy_bar"), C(3)],
    [S(4, "cobblemon:lava_cookie"), C(3)],
    [S(4, "cobblemon:jubilife_muffin"), C(3)],
    [S(4, "cobblemon:old_gateau"), C(3)],
    [S(4, "cobblemon:casteliacone"), C(3)],
    [S(4, "cobblemon:lumiose_galette"), C(3)],
    [S(4, "cobblemon:big_malasada"), C(3)],
    [S(4, "cobblemon:smoked_tail_curry"), C(3)],
    [S(4, "cobblemon:open_faced_sandwich"), C(3)],
    [S(4, "cobblemon:relic_coin"), C(2)]
]

// ─────────────────────────────────────────────────────────────
// Raw meats / fish / animal goods
// ─────────────────────────────────────────────────────────────
const rawProtein = [
    [S(6, "minecraft:rabbit"), C(2)],
    [S(6, "minecraft:porkchop"), C(2)],
    [S(6, "minecraft:mutton"), C(2)],
    [S(6, "minecraft:beef"), C(2)],
    [S(12, "minecraft:chicken"), C(2)],

    [S(16, "minecraft:leather"), C(3)],
    [S(16, "minecraft:feather"), C(2)]
]

// ─────────────────────────────────────────────────────────────
// Fish / seafood
// ─────────────────────────────────────────────────────────────
const fishAndSeafood = [
    [S(10, "minecraft:cod"), C(2)],
    [S(8, "minecraft:cooked_cod"), C(3)],
    [S(10, "minecraft:salmon"), C(2)],
    [S(8, "minecraft:cooked_salmon"), C(3)],
    [S(6, "minecraft:pufferfish"), C(3)],
    [S(8, "minecraft:tropical_fish"), C(3)],

    [S(8, "rusticdelight:calamari"), C(2)],
    [S(6, "rusticdelight:cooked_calamari"), C(3)],

    [S(8, "starcatcher:obidontiee"), C(3)],
    [S(8, "starcatcher:silverveil_perch"), C(3)],
    [S(8, "starcatcher:elderscale"), C(4)],
    [S(8, "starcatcher:driftfin"), C(2)],
    [S(8, "starcatcher:twilight_koi"), C(4)],
    [S(8, "starcatcher:thunder_bass"), C(4)],
    [S(8, "starcatcher:lightning_bass"), C(4)],
    [S(8, "starcatcher:sludge_catfish"), C(3)],
    [S(8, "starcatcher:lily_snapper"), C(3)],
    [S(8, "starcatcher:sage_catfish"), C(3)],
    [S(8, "starcatcher:pale_carp"), C(2)],
    [S(8, "starcatcher:pale_pinfish"), C(2)],
    [S(8, "starcatcher:pinfish"), C(2)],
    [S(8, "starcatcher:frostjaw_trout"), C(3)],
    [S(8, "starcatcher:crystalback_trout"), C(3)],
    [S(8, "starcatcher:aurora"), C(4)],
    [S(8, "starcatcher:wintery_pike"), C(3)],
    [S(8, "starcatcher:sandtail"), C(2)],
    [S(8, "starcatcher:mirage_carp"), C(3)],
    [S(8, "starcatcher:scorchfish"), C(3)],
    [S(8, "starcatcher:cactifish"), C(3)],
    [S(8, "starcatcher:agave_bream"), C(2)],
    [S(8, "starcatcher:sunny_sturgeon"), C(3)],
    [S(8, "starcatcher:rockgill"), C(2)],
    [S(8, "starcatcher:peakdweller"), C(3)],
    [S(8, "starcatcher:sun_seeking_carp"), C(2)],
    [S(8, "starcatcher:blossomfish"), C(2)],
    [S(8, "starcatcher:petaldrift_carp"), C(3)],
    [S(8, "starcatcher:pink_koi"), C(3)],
    [S(8, "starcatcher:morganite"), C(4)],
    [S(8, "starcatcher:rose_siamese_fish"), C(3)],
    [S(8, "starcatcher:vesani"), C(4)],
    [S(8, "starcatcher:crystalback_sturgeon"), C(4)],
    [S(8, "starcatcher:icetooth_sturgeon"), C(4)],
    [S(8, "starcatcher:boreal"), C(3)],
    [S(8, "starcatcher:crystalback_boreal"), C(4)],
    [S(8, "starcatcher:silverfin_pike"), C(3)],
    [S(8, "starcatcher:carpenjoe"), C(2)],
    [S(8, "starcatcher:willow_bream"), C(2)],
    [S(8, "starcatcher:drifting_bream"), C(2)],
    [S(8, "starcatcher:downfall_bream"), C(3)],
    [S(8, "starcatcher:hollowbelly_darter"), C(3)],
    [S(8, "starcatcher:mistback_chub"), C(2)],
    [S(8, "starcatcher:bluegigi"), C(3)],
    [S(8, "starcatcher:frostgill_chub"), C(3)],
    [S(8, "starcatcher:crystalback_minnow"), C(3)],
    [S(8, "starcatcher:azure_crystalback_minnow"), C(3)],
    [S(8, "starcatcher:blue_crystal_fin"), C(3)],
    [S(8, "starcatcher:blue_herring"), C(2)],
    [S(8, "starcatcher:ironjaw_herring"), C(3)],
    [S(8, "starcatcher:deepjaw_herring"), C(3)],
    [S(8, "starcatcher:dusktail_snapper"), C(3)],
    [S(8, "starcatcher:joel"), C(2)],
    [S(8, "starcatcher:redscaled_tuna"), C(4)],
    [S(8, "starcatcher:bigeye_tuna"), C(4)],
    [S(8, "starcatcher:sea_bass"), C(2)],
    [S(8, "starcatcher:shroomfish"), C(3)],
    [S(8, "starcatcher:sporefish"), C(3)],
    [S(8, "starcatcher:gold_fan"), C(4)],
    [S(8, "starcatcher:whiteveil"), C(3)],
    [S(8, "starcatcher:amethystback"), C(3)],
    [S(8, "starcatcher:stonefish"), C(3)],
    [S(8, "starcatcher:fossilized_angelfish"), C(4)],
    [S(8, "starcatcher:dripfin"), C(3)],
    [S(8, "starcatcher:yellowstone_fish"), C(3)],
    [S(8, "starcatcher:lush_pike"), C(3)],
    [S(8, "starcatcher:vivid_moss"), C(3)],
    [S(8, "starcatcher:the_quarrish"), C(4)],
    [S(8, "starcatcher:ghostly_pike"), C(4)],
    [S(8, "starcatcher:aquamarine_pike"), C(3)],
    [S(8, "starcatcher:garnet_mackerel"), C(3)],
    [S(8, "starcatcher:bright_amethyst_snapper"), C(4)],
    [S(8, "starcatcher:dark_amethyst_snapper"), C(4)],
    [S(8, "starcatcher:deepslatefish"), C(3)],
    [S(8, "starcatcher:sculkfish"), C(4)],
    [S(8, "starcatcher:ward"), C(4)],
    [S(8, "starcatcher:glowing_dark"), C(4)],
    [S(8, "starcatcher:suneater"), C(4)],
    [S(8, "starcatcher:pyrotrout"), C(4)],
    [S(8, "starcatcher:molten_shrimp"), C(4)],
    [S(8, "starcatcher:scorched_bloodsucker"), C(4)],
    [S(8, "starcatcher:molten_deepslate_crab"), C(4)],
    [S(8, "starcatcher:embergill"), C(4)],
    [S(8, "starcatcher:scalding_pike"), C(4)],
    [S(8, "starcatcher:cinder_squid"), C(4)],
    [S(8, "starcatcher:magma_fish"), C(4)],
    [S(8, "starcatcher:glowstone_seeker"), C(4)],
    [S(8, "starcatcher:glowstone_pufferfish"), C(4)],
    [S(8, "starcatcher:willish"), C(4)],
    [S(8, "starcatcher:cerberay"), C(4)],
    [S(8, "starcatcher:charfish"), C(4)],
    [S(8, "starcatcher:end_glow"), C(4)],
    [S(8, "starcatcher:voidbiter"), C(4)]
]

// ─────────────────────────────────────────────────────────────
// Cooked basics / simple prepared food
// ─────────────────────────────────────────────────────────────
const simpleFoods = [
    [S(5, "minecraft:cooked_rabbit"), C(3)],
    [S(5, "minecraft:cooked_porkchop"), C(3)],
    [S(5, "minecraft:cooked_mutton"), C(3)],
    [S(10, "minecraft:cooked_chicken"), C(3)],
    [S(5, "minecraft:cooked_beef"), C(3)],
    [S(16, "minecraft:bread"), C(1)],
    [S(4, "minecraft:golden_carrot"), C(2)],
    [S(8, "farmersdelight:fried_egg"), C(4)],
    [S(8, "bakery:bread"), C(1)],
    [S(6, "bakery:croissant"), C(2)],
    [S(6, "bakery:waffle"), C(2)],
    [S(6, "bakery:jam_roll"), C(2)],
    [S(4, "bakery:chocolate_truffle"), C(2)],
    [S(4, "create:sweet_roll"), C(2)],
    [S(6, "culturaldelights:pickle"), C(1)],
    [S(6, "culturaldelights:popcorn"), C(2)],
    [S(4, "culturaldelights:rice_ball"), C(2)],
    [S(6, "culturaldelights:tortilla"), C(1)],
    [S(6, "culturaldelights:tortilla_chips"), C(2)],
    [S(4, "culturaldelights:smoked_tomato"), C(2)],
    [S(4, "culturaldelights:smoked_eggplant"), C(2)],
    [S(4, "culturaldelights:smoked_white_eggplant"), C(2)],
    [S(4, "farmersdelight:cabbage_leaf"), C(1)],
    [S(4, "farmersdelight:cooked_rice"), C(1)],
    [S(4, "farmersdelight:fruit_salad"), C(2)],
    [S(4, "farmersdelight:mixed_salad"), C(2)],
    [S(6, "rusticdelight:roasted_coffee_beans"), C(2)],
    [S(4, "create:bar_of_chocolate"), C(2)],
    [S(4, "create:builders_tea"), C(2)],
    [S(4, "create:chocolate_glazed_berries"), C(2)],
    [S(4, "create:honeyed_apple"), C(2)],
    [S(4, "create_wrapped:barley_sugar"), C(2)],
    [S(4, "create_wrapped:gingerbread"), C(2)],
    [S(4, "valheim_delight:jerky"), C(2)],
    [S(4, "valheim_delight:fish_wrap"), C(2)],
    [S(4, "valheim_delight:whole_bread"), C(2)],
    [S(4, "valheim_delight:sausage"), C(2)],
    [S(4, "valheim_delight:fish_n_bread_salmon"), C(2)],
    [S(4, "valheim_delight:fish_n_bread_cod"), C(2)],
    [S(4, "valheim_delight:roasted_crust_pie"), C(2)],
    [S(4, "valheim_delight:meat_pie"), C(2)],
    [S(4, "valheim_delight:carrot_soup"), C(2)],
    [S(4, "valheim_delight:onion_soup"), C(2)],
    [S(4, "valheim_delight:mushroom_omelette"), C(2)],
    [S(4, "valheim_delight:minced_meat_sauce"), C(2)],
    [S(4, "valheim_delight:black_soup"), C(2)],
    [S(4, "ubesdelight:kinilaw"), C(2)]
]

// ─────────────────────────────────────────────────────────────
// Pantry / artisan ingredients
// ─────────────────────────────────────────────────────────────
const pantryGoods = [
    [S(16, "minecraft:sugar"), C(2)],
    [S(16, "minecraft:paper"), C(1)],

    [S(8, "farmersdelight:wheat_dough"), C(1)],
    [S(8, "farmersdelight:raw_pasta"), C(1)],
    [S(8, "farmersdelight:tomato_sauce"), C(2)],
    [S(16, "create:wheat_flour"), C(1)],
    [S(8, "create:dough"), C(1)],
    [S(12, "farm_and_charm:flour"), C(1)],
    [S(8, "farm_and_charm:yeast"), C(2)],
    [S(8, "culturaldelights:corn_dough"), C(1)],
    [S(8, "rusticdelight:syrup"), C(2)],
    [S(12, "herbalbrews:coffee_beans"), C(2)],
    [S(8, "ubesdelight:lumpia_wrapper"), C(1)],
    [S(8, "ubesdelight:milk_powder"), C(2)],
    [S(12, "herbalbrews:green_tea_leaf"), C(2)],
    [S(12, "herbalbrews:rooibos_leaf"), C(2)],
    [S(12, "herbalbrews:lavender_blossom"), C(2)],
    [S(12, "herbalbrews:tea_blossom"), C(2)]
]

// ─────────────────────────────────────────────────────────────
// Drinks / café goods
// ─────────────────────────────────────────────────────────────
const drinks = [
    [S(4, "herbalbrews:coffee"), C(2)],
    [S(4, "herbalbrews:milk_coffee"), C(3)],
    [S(4, "herbalbrews:black_tea"), C(2)],
    [S(4, "herbalbrews:green_tea"), C(2)],
    [S(4, "herbalbrews:oolong_tea"), C(2)],
    [S(4, "herbalbrews:lavender_tea"), C(3)],
    [S(4, "vinery:apple_juice"), C(2)],
    [S(4, "vinery:red_grapejuice"), C(2)],
    [S(4, "vinery:white_grapejuice"), C(2)],
    [S(4, "herbalbrews:rooibos_tea"), C(3)],
    [S(4, "herbalbrews:yerba_mate_tea"), C(3)],
    [S(4, "vinery:apple_cider"), C(3)],
    [S(4, "farm_and_charm:nettle_tea"), C(2)],
    [S(4, "farm_and_charm:ribwort_tea"), C(2)],
    [S(4, "farm_and_charm:strawberry_tea"), C(2)],
    [S(4, "brewinandchewin:kombucha"), C(3)],
    [S(4, "brewinandchewin:beer"), C(3)],
    [S(4, "brewinandchewin:mead"), C(3)],
    [S(4, "rusticdelight:syrup_coffee"), C(3)]
]

// ─────────────────────────────────────────────────────────────
// Premium bakery / desserts
// ─────────────────────────────────────────────────────────────
const desserts = [
    [S(8, "farmersdelight:apple_pie"), C(8)],
    [S(8, "farmersdelight:sweet_berry_cheesecake"), C(8)],
    [S(4, "ubesdelight:ensaymada"), C(3)],
    [S(4, "ubesdelight:ensaymada_ube"), C(4)],
    [S(4, "ubesdelight:hopia_munggo"), C(3)],
    [S(4, "ubesdelight:hopia_ube"), C(4)],
    [S(4, "ubesdelight:pandesal_ube"), C(4)],
    [S(4, "bakery:chocolate_gateau"), C(4)],
    [S(4, "veggiesdelight:sweet_potato_pancakes"), C(4)],
    [S(16, "farm_and_charm:oat_pancake"), C(6)],
    [S(16, "createaddition:chocolate_cake"), C(4)],
    [S(8, "farm_and_charm:grandmothers_strawberry_cake"), C(5)],
    [S(4, "cobblemon:big_malasada"), C(4)],
    [S(4, "ubesdelight:ube_cake"), C(4)],
    [S(10, "ubesdelight:leche_flan"), C(2)],
    [S(4, "ubesdelight:halo_halo"), C(12)],
    [S(8, "ubesdelight:milk_tea_ube"), C(2)],
    [S(32, "rusticdelight:syrup_cookie"), C(4)],
    [S(32, "rusticdelight:cherry_blossom_cookie"), C(4)],
    [S(32, "rusticdelight:coffee_cookie"), C(4)],
    [S(32, "ubesdelight:cookie_ube"), C(4)],
    [S(32, "ubesdelight:cookie_ginger"), C(4)],
    [S(32, "minecraft:cookie"), C(4)],
    [S(32, "farmersdelight:sweet_berry_cookie"), C(4)],
    [S(32, "farmersdelight:honey_cookie"), C(4)]
]

// ─────────────────────────────────────────────────────────────
// Soups / stews / plated meals
// ─────────────────────────────────────────────────────────────
const meals = [
    [S(8, "farmersdelight:beef_stew"), C(8)],
    [S(2, "minecraft:rabbit_stew"), C(4)],

    [S(4, "farmersdelight:vegetable_soup"), C(4)],
    [S(4, "farmersdelight:chicken_soup"), C(4)],
    [S(4, "farmersdelight:fish_stew"), C(4)],
    [S(4, "farmersdelight:pumpkin_soup"), C(4)],
    [S(4, "farmersdelight:baked_cod_stew"), C(4)],
    [S(5, "farmersdelight:noodle_soup"), C(6)],

    [S(1, "brewinandchewin:pizza"), C(8)],
    [S(1, "veggiesdelight:vegan_pizza"), C(8)],
    [S(4, "veggiesdelight:vegetarian_burger"), C(6)],
    [S(2, "brewinandchewin:horror_lasagna"), C(8)],
    [S(4, "candlelight:lasagne"), C(8)],
    [S(4, "veggiesdelight:lasagna_pan"), C(6)],

    [S(5, "brewinandchewin:vegetable_omelet"), C(4)],
    [S(5, "brewinandchewin:creamy_onion_soup"), C(4)],
    [S(5, "brewinandchewin:cheesy_pasta"), C(6)],
    [S(2, "brewinandchewin:scarlet_pierogi"), C(6)],
    [S(4, "brewinandchewin:ham_and_cheese_sandwich"), C(8)],

    [S(4, "ubesdelight:chicken_inasal_rice"), C(5)],
    [S(5, "ubesdelight:tosilog"), C(6)],
    [S(4, "ubesdelight:bangsilog"), C(5)],
    [S(5, "ubesdelight:sisig"), C(6)],
    [S(4, "ubesdelight:bulalo"), C(5)],
    [S(4, "ubesdelight:arroz_caldo"), C(5)],
    [S(5, "ubesdelight:mechado"), C(6)],
    [S(6, "ubesdelight:lumpia"), C(7)],

    [S(2, "biomeswevegone:allium_oddion_soup"), C(3)],
    [S(2, "biomeswevegone:white_puffball_stew"), C(6)],
    [S(11, "mynethersdelight:egg_soup"), C(6)],

    [S(4, "culturaldelights:avocado_toast"), C(3)],
    [S(4, "culturaldelights:eggplant_parmesan"), C(4)],

    [S(4, "cobblemon:open_faced_sandwich"), C(5)],
    [S(5, "farm_and_charm:sausage_with_oat_patty"), C(4)],
    [S(4, "farmersdelight:cabbage_rolls"), C(3)],
    [S(4, "farmersdelight:chicken_sandwich"), C(3)],
    [S(4, "farmersdelight:cod_roll"), C(3)],
    [S(4, "farmersdelight:dumplings"), C(3)],
    [S(4, "farmersdelight:fried_rice"), C(3)],
    [S(4, "farmersdelight:mushroom_rice"), C(3)],
    [S(4, "farmersdelight:pasta_with_meatballs"), C(4)],
    [S(4, "farmersdelight:pasta_with_mutton_chop"), C(4)],
    [S(4, "farmersdelight:ratatouille"), C(4)],
    [S(2, "farmersdelight:roast_chicken"), C(5)],
    [S(4, "farmersdelight:squid_ink_pasta"), C(4)],
    [S(4, "farmersdelight:steak_and_potatoes"), C(4)],
    [S(4, "farmersdelight:stuffed_pumpkin"), C(4)],
    [S(4, "farmersdelight:vegetable_noodles"), C(3)],

    [S(4, "culturaldelights:mutton_sandwich"), C(3)],
    [S(4, "culturaldelights:pork_wrap"), C(3)],
    [S(4, "culturaldelights:pufferfish_roll"), C(4)],
    [S(4, "culturaldelights:tropical_roll"), C(3)],
    [S(4, "culturaldelights:spicy_curry"), C(4)],
    [S(4, "culturaldelights:poached_eggplants"), C(3)],
    [S(4, "culturaldelights:egg_roll"), C(3)],
    [S(4, "culturaldelights:eggplant_burger"), C(4)],
    [S(4, "culturaldelights:elote"), C(3)],
    [S(4, "culturaldelights:empanada"), C(3)],
    [S(4, "culturaldelights:hearty_salad"), C(3)],
    [S(4, "culturaldelights:creamed_corn"), C(2)],

    [S(4, "rusticdelight:spring_rolls"), C(3)],
    [S(4, "rusticdelight:stuffed_bell_pepper_green"), C(3)],
    [S(4, "rusticdelight:stuffed_bell_pepper_red"), C(3)],
    [S(4, "rusticdelight:stuffed_bell_pepper_yellow"), C(3)],
    [S(4, "rusticdelight:sweet_salad"), C(2)],
    [S(4, "rusticdelight:potato_salad"), C(2)],
    [S(4, "rusticdelight:syrup_sandwich"), C(3)],

    [S(4, "candlelight:chicken_alfredo"), C(4)],
    [S(2, "candlelight:beef_wellington"), C(6)],
    [S(4, "candlelight:roastbeef_with_glazed_carrots"), C(4)],

    [S(4, "veggiesdelight:stuffed_bellpepper"), C(4)],
    [S(4, "veggiesdelight:garlic_bread"), C(3)],
    [S(4, "veggiesdelight:shakshouka"), C(4)]
]

// ─────────────────────────────────────────────────────────────
// Logs / wood / natural materials
// ─────────────────────────────────────────────────────────────
const bulkNatural = [
    [S(32, "minecraft:oak_log"), C(2)],
    [S(32, "minecraft:spruce_log"), C(3)],
    [S(32, "minecraft:jungle_log"), C(3)],
    [S(32, "minecraft:mangrove_log"), C(3)],
    [S(32, "minecraft:dark_oak_log"), C(3)],
    [S(32, "minecraft:cherry_log"), C(3)],
    [S(32, "minecraft:birch_log"), C(3)],
    [S(32, "minecraft:acacia_log"), C(3)],
    [S(32, "minecraft:crimson_stem"), C(2)],
    [S(32, "minecraft:warped_stem"), C(2)],
    //[S(32, "phantasm:pream_log"), C(3)],
    [S(32, "cobblemon:apricorn_log"), C(3)],
    [S(32, "cobblemon:saccharine_log"), C(3)],
    [S(32, "biomeswevegone:aspen_log"), C(3)],
    [S(32, "biomeswevegone:baobab_log"), C(3)],
    [S(32, "biomeswevegone:blue_enchanted_log"), C(3)],
    [S(32, "biomeswevegone:cika_log"), C(3)],
    [S(32, "biomeswevegone:cypress_log"), C(3)],
    [S(32, "biomeswevegone:ebony_log"), C(3)],
    [S(32, "biomeswevegone:fir_log"), C(3)],
    [S(32, "biomeswevegone:florus_stem"), C(3)],
    [S(32, "biomeswevegone:green_enchanted_log"), C(3)],
    [S(32, "biomeswevegone:holly_log"), C(3)],
    [S(32, "biomeswevegone:ironwood_log"), C(3)],
    [S(32, "biomeswevegone:jacaranda_log"), C(3)],
    [S(32, "biomeswevegone:mahogany_log"), C(3)],
    [S(32, "biomeswevegone:maple_log"), C(3)],
    [S(32, "biomeswevegone:palm_log"), C(3)],
    [S(32, "biomeswevegone:palo_verde_log"), C(3)],
    [S(32, "biomeswevegone:pine_log"), C(3)],
    [S(32, "biomeswevegone:rainbow_eucalyptus_log"), C(3)],
    [S(32, "biomeswevegone:redwood_log"), C(3)],
    [S(32, "biomeswevegone:sakura_log"), C(3)],
    [S(32, "biomeswevegone:skyris_log"), C(3)],
    [S(32, "biomeswevegone:spirit_log"), C(3)],
    [S(32, "biomeswevegone:white_mangrove_log"), C(3)],
    [S(32, "biomeswevegone:willow_log"), C(3)],
    [S(32, "biomeswevegone:witch_hazel_log"), C(3)],
    [S(32, "biomeswevegone:zelkova_log"), C(3)],
    [S(32, "vinery:dark_cherry_log"), C(3)],
    [S(32, "vinery:apple_log"), C(3)],
    [S(32, "culturaldelights:avocado_log"), C(3)],

    [S(32, "minecraft:dirt"), C(1)],
    [S(32, "minecraft:sand"), C(1)],
    [S(32, "minecraft:gravel"), C(1)],
    [S(32, "minecraft:cobblestone"), C(1)],
    [S(32, "minecraft:cobbled_deepslate"), C(2)],
    [S(32, "minecraft:tuff"), C(1)],
    [S(32, "minecraft:andesite"), C(1)],
    [S(32, "minecraft:diorite"), C(1)],
    [S(32, "minecraft:granite"), C(1)],
    [S(32, "minecraft:calcite"), C(2)],
    [S(32, "minecraft:blackstone"), C(2)],
    [S(32, "minecraft:netherrack"), C(1)],
    [S(16, "minecraft:soul_sand"), C(2)],
    [S(64, "biomeswevegone:skyris_stairs"), C(6)]
]

// ─────────────────────────────────────────────────────────────
// Mob drops / combat materials
// ─────────────────────────────────────────────────────────────
const mobDrops = [
    [S(16, "minecraft:spider_eye"), C(2)],
    [S(32, "minecraft:rotten_flesh"), C(2)],
    [S(32, "minecraft:bone"), C(2)],
    [S(32, "minecraft:arrow"), C(1)],
    [S(8, "minecraft:gunpowder"), C(2)],
    [S(32, "minecraft:slime_ball"), C(4)],
    [S(16, "minecraft:magma_cream"), C(3)],
    [S(16, "minecraft:blaze_rod"), C(4)],
    [S(16, "minecraft:ender_pearl"), C(4)],
    [S(8, "minecraft:ghast_tear"), C(4)],
    [S(16, "minecraft:prismarine_shard"), C(3)]
]

// ─────────────────────────────────────────────────────────────
// Metals / gems / premium raw materials
// ─────────────────────────────────────────────────────────────
const valuables = [
    [S(8, "minecraft:copper_ingot"), C(1)]
]

// ─────────────────────────────────────────────────────────────
// Final combined list
// ─────────────────────────────────────────────────────────────
const sellables = 
    crops
    .concat(cobblemonProduce)
    .concat(rawProtein)
    .concat(simpleFoods)
    .concat(fishAndSeafood)
    .concat(pantryGoods)
    .concat(drinks)
    .concat(desserts)
    .concat(meals)
    .concat(bulkNatural)
    .concat(mobDrops)
    .concat(valuables)

global.Mayview.sellables = sellables

console.info("[Mayview] Sellable items list initialized with " + sellables.length + " entries.")