const express = require("express");
const router = express.Router();

const {
  getCinema,
  getCinemaById,
  postCinema,
  putCinema,
  deleteCinema,
} = require("./cinema.controller");

router.get("/", getCinema);
router.get("/id/:id", getCinemaById);
router.post("/", postCinema);
router.put("/id/:id", putCinema);
router.delete("/id/:id", deleteCinema);

module.exports = router;
