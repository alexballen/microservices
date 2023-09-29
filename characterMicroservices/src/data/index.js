const axios = require("axios");

module.exports = {
  list: async () => {
    const getCharacter = await axios.get("http://database:8004/Character");
    return getCharacter.data;
  },

  getById: async (id) => {
    const getCharacterById = await axios.get(
      `http://database:8004/Character/${id}`
    );
    return getCharacterById.data;
  },

  create: async (character) => {
    const createCharacter = await axios.post(
      "http://database:8004/Character",
      character
    );
    return createCharacter.data;
  },

  update: async (id, updatedData) => {
    const updatedFields = await axios.put(
      `http://database:8004/Character/${id}`,
      updatedData
    );
    return updatedFields.data;
  },

  delete: async (id) => {
    const deleteCharacter = await axios.delete(
      `http://database:8004/Character/${id}`
    );
    return deleteCharacter.data;
  },
};
