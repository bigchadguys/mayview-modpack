ServerEvents.recipes(event =>{
       event.remove({ input: "veggiesdelight:broccoli", type: "create.milling" })
       event.remove({ input: "veggiesdelight:broccoli", type: "create.crushing" })
})