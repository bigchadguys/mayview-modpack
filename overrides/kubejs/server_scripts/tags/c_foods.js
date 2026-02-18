ServerEvents.tags("item", (e) => {
  // foods/dough
  e.add("c:foods/dough",[ 
    "create:dough",
    "farm_and_charm:dough",
    "bakery:cake_dough",
    "bakery:sweet_dough"
  ]);
  // dough
  e.add("c:dough",[ 
    "create:dough",
    "farmersdelight:wheat_dough",
    "mynethersdelight:ghast_dough",
    "bakery:cake_dough",
    "bakery:sweet_dough",
    "veggiesdelight:sweet_potato_dough"
  ]);
  // foods/leafy_green
  e.add("c:foods/leafy_green", "farm_and_charm:lettuce");
  // foods/milk
  e.add("c:foods/milk", "cobblemon:moomoo_milk");
  // foods/bread
    e.add("c:foods/bread",[ 
    "farm_and_charm:farmers_bread",
    "bakery:crusty_bread",
    "bakery:bread",
    "bakery:baguette",
    "bakery:toast",
    "bakery:braided_bread",
    "bakery:bun"
  ]);
});
