const axios = require("axios");

module.exports = {
  list: async () => {
    const getFilm = await axios.get("http://database:8004/Film");
    return getFilm.data;
  },

  getById: async (id) => {
    const getFilmById = await axios.get(`http://database:8004/Film/${id}`);
    return getFilmById.data;
  },

  create: async (film) => {
    const createFilm = await axios.post("http://database:8004/Film", film);
    return createFilm.data;
  },

  update: async (id, updatedData) => {
    const updatedFields = await axios.put(
      `http://database:8004/Film/${id}`,
      updatedData
    );
    return updatedFields.data;
  },

  delete: async (id) => {
    const deleteFilm = await axios.delete(`http://database:8004/Film/${id}`);
    return deleteFilm.data;
  },
};
