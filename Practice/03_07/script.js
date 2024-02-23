/* eslint-disable no-unused-vars */
/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const updateBottle = (update) => {
  let main = document.querySelector("main") // main is an element
  main.innerHTML = markup(waterbottle)
  console.log("🚀 ~ updateBottle ~ update:", update)
}

const waterbottle = {
  colour: "red",
  size: 500,
  lidStatus: true,
  lidOpen: function (lidStatus) {
    this.Status = lidStatus
  },
  currentLiquid: { minerals: "water", healthy: true },
  setLiquid: function (currentLiquid) {
    this.currentLiquid = currentLiquid
    updateBottle("Bottle updated")
  },
  liquid: {
    water: { minerals: "water", healthy: true },
    cola: { minerals: "soda", healthy: false },
    fanta: { minerals: "soda", healthy: false },
  },
}
console.log("🚀 ~ waterbottle:", waterbottle)

const markup = (waterbottle) => {
  return `
  <div>
	<h3>${waterbottle.colour}</h3>
	<h3>${waterbottle.size}</h3>
	<h3>${waterbottle.lidStatus}</h3>
	<h3>${waterbottle.currentLiquid.minerals}</h3>
  </div>
`
}

const main = document.createElement("main")
main.innerHTML = markup(waterbottle)
document.body.appendChild(main)
