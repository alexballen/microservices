const axios = require("axios");

module.exports = {
  list: async () => {
    const getPlanet = await axios.get("http://database:8004/Planet");
    return getPlanet.data;
  },

  getById: async (id) => {
    const getPlanetById = await axios.get(`http://database:8004/Planet/${id}`);
    return getPlanetById.data;
  },

  create: async (planet) => {
    const createPlanet = await axios.post(
      "http://database:8004/Planet",
      planet
    );
    return createPlanet.data;
  },

  update: async (id, updatedData) => {
    const updatedFields = await axios.put(
      `http://database:8004/Planet/${id}`,
      updatedData
    );
    return updatedFields.data;
  },

  delete: async (id) => {
    const deletePlanet = await axios.delete(
      `http://database:8004/Planet/${id}`
    );
    return deletePlanet.data;
  },
};
