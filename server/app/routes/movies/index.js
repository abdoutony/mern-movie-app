const express = require("express");
const upload = require("../../middleware/upload");
const {
  getAllMovies,
  addNewMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} = require("../../controllers/MoviesController");
const { checkLogin } = require("../../middleware/auth");
const router = express.Router();

module.exports = () => {
  router.get("/", getAllMovies);
  router.get("/:id", getMovieById);
  router.put("/:id", checkLogin, upload.single("poster"), updateMovieById);
  router.delete("/:id", checkLogin, deleteMovieById);
  router.post("/", checkLogin, upload.single("poster"), addNewMovie);
  return router;
};
