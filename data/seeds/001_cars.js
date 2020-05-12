const faker = require("faker");
const dataLength = 100;
exports.seed = function (knex, promise) {
  return knex("cars")
    .truncate()
    .then(function () {
      const cars = [];
      for (let index = 0; index < dataLength; index++) {
        cars.push({
          VIN: faker.random.uuid(),
          make: faker.lorem.word(),
          model: faker.hacker.phrase(),
          year: faker.date.past(),
          mileage: faker.random.number(),
          transmission: faker.hacker.verb(),
          title_status: faker.hacker.phrase(),
        });
      }
      return knex("cars").insert(cars);
    });
};
