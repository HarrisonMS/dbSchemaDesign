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
router.post("/", (req, res) => {
  const cars = req.body;
  {
    !cars.vin && !cars.make && !cars.model && !cars.mileage
      ? res.status(400).json({
          errorMessage: "Please provide vin, make, model, and milage.",
        })
      : Cars.insert(cars).then((car) => {
          res.status(201).json(car);
        });
  }
});

router.put("/:id", (req, res) => {
  const cars = req.body;
  console.log(req.body);
  if (!cars.vin && !cars.make && !cars.model && !cars.mileage) {
    res.status(400).json({
      errorMessage:
        "Please provide vin, make, model, and milage for this update",
    });
  }
  Cars.update(req.params.id, req.body)
    .then((count) => {
      if (count > 0) {
        Cars.getById(req.params.id).then((car) => {
          res.status(200).json(car);
        });
      }
    })
    .catch((error) => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error updating the car",
      });
    });
});

module.exports = router;
