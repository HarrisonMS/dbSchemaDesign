const express = require("express");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", (req, res) => {
  Cars.get()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.get(`/:id`, (req, res) => {
  const id = req.params.id;
  Cars.getById(id)
    .then((car) => {
      {
        car.length
          ? res.status(200).json(car)
          : res
              .status(404)
              .json({ error: "The cars information could not be retrieved." });
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ errorMessage: error.message });
    });
});

module.exports = router;
