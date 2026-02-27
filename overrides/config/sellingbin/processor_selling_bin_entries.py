import json

# Where art thou selling_bin.json
path = "selling_bin.json"
with open(path, "r", encoding="utf-8") as f:
    data = json.load(f)
    
# create map of fields in json format
lines = []
for t in data["trades"]:
    inp_item = t["input"]["filter"]
    inp_count = t["input"]["count"]
    out_item = t["output"]["item"]
    out_count = t["output"]["count"]
    # append fields in const map format for js
    lines.append(f'    ["{inp_count}x {inp_item}", "{out_count}x {out_item}"],')
    
# print to console cause I'm lazy
print("const sellItems = [")
print("\n".join(lines))
print("]")