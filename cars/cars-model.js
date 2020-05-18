const db = require("../data/dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
};

function get() {
  return db("cars");
}
function getById(id) {
  return db("cars").where("id", id);
}
function insert(car) {
  return db("cars")
    .insert(car, "id")
    .then((ids) => ({ id: ids[0] }));
}

function update(id, car) {
  return db("cars").where("id", Number(id)).update(car);
}
