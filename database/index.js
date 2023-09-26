const server = require("./src/server.js");
//const { Character, Film, Planet } = require("./src/database");

//Planet.list().then((res) => console.log(res[0]));
//Planet.get(1).then((res) => console.log(res));
/* Planet.insert({
  _id: "61",
  name: "La Tortolan",
  rotation_period: "18222",
  diameter: "895656",
  terrain: "Water",
}).then((res) => console.log(res)); */
//Planet.delete(60).then((res) => console.log(res));

/* const updatedData = {
  orbital_period: "485",
  gravity: "10",
};
Planet.update(59, updatedData).then((res) => console.log(res)); */

server.listen(8004, () => {
  console.log("Server listening on port 8004");
});
