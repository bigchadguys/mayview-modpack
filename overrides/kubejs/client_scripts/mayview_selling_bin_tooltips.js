/* ══▣ RES INTERFACE ▣═════════════════════════════════════════════════

░  ░░░░  ░░░      ░░░  ░░░░  ░░  ░░░░  ░░        ░░        ░░  ░░░░  ░
▒   ▒▒   ▒▒  ▒▒▒▒  ▒▒▒  ▒▒  ▒▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒▒▒▒  ▒  ▒  ▒
▓        ▓▓  ▓▓▓▓  ▓▓▓▓    ▓▓▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓      ▓▓▓▓        ▓
█  █  █  ██        █████  ███████    ███████  █████  ████████   ██   █
█  ████  ██  ████  █████  ████████  █████        ██        ██  ████  █

╭────────────────────────────────────────────────────────────────────╮
│ FILE     : mayview_selling_bin_tooltips.js                        │
│ LAYER    : client_scripts                                         │
│ PURPOSE  : Adds selling bin value tooltips to sellable items      │
│ NOTES    : Uses shared sellables data from startup_scripts        │
│ UPDATED  : 2026-04-01                                             │
╰────────────────────────────────────────────────────────────────────╯

══▣ RELATIVE PATH ▣════════════════════════════════════════════════════
kubejs\client_scripts\mayview_selling_bin_tooltips.js
*/

console.info("[RES:CORE] Initializing mayview_selling_bin_tooltips.js");

const sellItems = global.Mayview && global.Mayview.sellables ? global.Mayview.sellables : [];

console.info("[Mayview] registered selling bin tooltips for " + sellItems.length + " items");

const parseStack = stack => {
  const match = stack.match(/^(\d+)x\s+(.+)$/);
  if (!match) return { count: 1, id: stack };
  return { count: Number(match[1]), id: match[2] };
};

const coinLabel = (id, count) => {
  switch (id) {
    case "mayview:copper_coin":
      return count == 1 ? "Copper Coin" : "Copper Coins";
    case "mayview:iron_coin":
      return count == 1 ? "Iron Coin" : "Iron Coins";
    case "mayview:gold_coin":
      return count == 1 ? "Gold Coin" : "Gold Coins";
    case "mayview:diamond_coin":
      return count == 1 ? "Diamond Coin" : "Diamond Coins";
    default:
      return Item.of(id).displayName.string;
  }
};

const coloredCoinText = (id, count) => {
  const label = count + " " + coinLabel(id, count);

  switch (id) {
    case "mayview:copper_coin":
      return Text.of(label).color(0xC47A48);
    case "mayview:iron_coin":
      return Text.of(label).color(0xC8C8C8);
    case "mayview:gold_coin":
      return Text.of(label).color(0xE0B84F);
    case "mayview:diamond_coin":
      return Text.of(label).color(0x6FD9CC);
    default:
      return Text.of(label).white();
  }
};

const formatOutputStacksColored = outputs => {
  let line = Text.of("");

  outputs.forEach((stack, index) => {
    const parsed = parseStack(stack);

    if (index > 0) {
      line.append(Text.of(" + ").color(0xAAAAAA));
    }

    line.append(coloredCoinText(parsed.id, parsed.count));
  });

  return line;
};

ItemEvents.modifyTooltips(event => {
  sellItems.forEach(entry => {
    const input = parseStack(entry[0]);
    const itemId = input.id;
    const outputs = entry.slice(1);

    if (!outputs.length) return;

    event.modify(itemId, tooltip => {
      tooltip.add(Text.translate("mayview.selling_bin.sellables.tooltip.title").color(0xD8C28A));

      let ratioLine = Text.of("");
      ratioLine.append(Text.of(" " + input.count + " ").color(0xFFFFFF));
      ratioLine.append(Text.of("→ ").color(0xAAAAAA));
      // ratioLine.append(Text.of("[ ").color(0x777777));
      ratioLine.append(formatOutputStacksColored(outputs));
      // ratioLine.append(Text.of(" ]").color(0x777777));

      tooltip.add(ratioLine);
    });
  });
});