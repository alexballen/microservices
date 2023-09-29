const { catchedAsync } = require("../utils");

module.exports = {
  getData: catchedAsync(require("./getData")),
  getDataById: catchedAsync(require("./getDataById")),
  createData: catchedAsync(require("./createData")),
  updateData: catchedAsync(require("./updateData")),
  deleteData: catchedAsync(require("./deleteData")),
};
