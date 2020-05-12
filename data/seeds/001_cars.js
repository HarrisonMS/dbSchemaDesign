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
          make: faker.random.word(),
          model: faker.hacker.noun(),
          year: faker.random.number({ min: 1960, max: 2020 }),
          mileage: faker.random.number({ min: 1, max: 250000 }),
          transmission: faker.hacker.verb(),
          title_status: faker.hacker.noun(),
        });
      }
      return knex("cars").insert(cars);
    });
};
