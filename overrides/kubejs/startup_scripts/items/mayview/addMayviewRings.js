// kubejs/startup_scripts/items/mayview/addMayviewRings.js

StartupEvents.registry('item', event => {
  const DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
  const ItemAttributeModifiers = Java.loadClass('net.minecraft.world.item.component.ItemAttributeModifiers')
  const AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
  const EquipmentSlotGroup = Java.loadClass('net.minecraft.world.entity.EquipmentSlotGroup')
  const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
  const Holder = Java.loadClass('net.minecraft.core.Holder')

  // Attribute id you confirmed:
  const STEP_ATTR_ID = new ResourceLocation('minecraft', 'generic.step_height')

  // Grab the Attribute from the registry and wrap it as a Holder
  const stepAttr = BuiltInRegistries.ATTRIBUTE.get(STEP_ATTR_ID)
  const stepAttrHolder = Holder.direct(stepAttr)

  // 1.21 AttributeModifier constructor: (ResourceLocation id, double amount, Operation)
  const stepModId = new ResourceLocation('mayview', 'kinetic_assist_step')
  const stepMod = new AttributeModifier(stepModId, 0.4, AttributeModifier.Operation.ADD_VALUE)

  const attrMods = ItemAttributeModifiers.builder()
    .add(stepAttrHolder, stepMod, EquipmentSlotGroup.ANY)
    .build()

  event.create('mayview:kinetic_assist_ring')
    .displayName('Kinetic Assist Ring')
    .unstackable()
    .component(DataComponents.ATTRIBUTE_MODIFIERS, attrMods)
})
