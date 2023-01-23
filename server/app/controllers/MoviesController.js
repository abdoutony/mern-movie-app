const crudService = require("../services/crud");
const Movie = require("../models/movie");
const path = require("path");
const fs = require("fs");

// this function will let you delete an image from the file system
function deletePostImageFromDisk(imgName) {
  let pathname = path.join(__dirname, "../" + "public/uploads/" + imgName);
  fs.unlink(pathname, (err) => {
    if (err) throw err;
    console.log("File deleted");
  });
}

exports.getMovieById = async (req, res) => {
  const id = req.params.id;
  const movie = await crudService.get(id, Movie);
  if (!movie) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({ msg: "get with success", movie: movie });
};

exports.getAllMovies = async (req, res) => {
  if (req.query["q"]) {
    console.log(req.query["q"]);
    const movies = await Movie.find({
      $or: [
        { title: { $regex: req.query["q"], $options: "i" } },
        { description: { $regex: req.query["q"], $options: "i" } },
      ],
    });
    if (!movies) return res.status(500).json({ msg: "Internal server error" });
    res.status(200).json({ msg: "get with success", movies: movies });
  } else {
    const movies = await crudService.get(null, Movie, null);
    if (!movies) return res.status(500).json({ msg: "Internal server error" });
    res.status(200).json({ msg: "get with success", movies: movies });
  }
};

exports.addNewMovie = async (req, res) => {
  const { title, description, rating, category, trailer } = req.body;
  const url = req.protocol + "://" + req.get("host"); // http://localhost:4000
  if (!title || !description || !rating || !category || !trailer)
    return res
      .status(400)
      .json({ msg: "veuillez introduire les informations correctement" });
  const new_Movie = {
    title,
    description,
    rating,
    category,
    poster: url + "/uploads/" + req.file.filename, // full image link http://localhost:4000/uplaods/imagename.ext
    trailer,
  };
  const create = await crudService.create(new_Movie, Movie);
  console.log("create Movie result::::", create);
  if (!create) return res.status(500).json({ msg: "Internal server error" });
  res.status(201).json({
    msg: "create with success",
    new: create,
  });

  //res.redirect("/");
};

exports.updateMovieById = async (req, res) => {
  const MovieId = req.params.id;
  const { title, description, rating, category, trailer } = req.body;
  const movie = await Movie.findById(MovieId);
  if (!movie) {
    return res.status(404).send("Not found");
  }
  if (req.file) {
    Movie.findOne({ _id: MovieId }).then((data) => {
      let imgName = data.poster.split("/")[4];
      deletePostImageFromDisk(imgName);
    });
    const url = req.protocol + "://" + req.get("host"); // http://localhost:4000
    const updated_Movie = {
      title,
      description,
      rating,
      category,
      poster: url + "/uploads/" + req.file.filename, // full image link http://localhost:4000/uplaods/imagename.ext
      trailer,
    };
    const update = await crudService.update(MovieId, updated_Movie, Movie);
    if (!update) return res.status(500).json({ msg: "Internal server error" });
    res.status(200).json({
      msg: "update with success",
      new: update,
    });
  } else {
    const updated_Movie = {
      title,
      description,
      rating,
      category,
      trailer,
    };
    const update = await crudService.update(MovieId, updated_Movie, Movie);
    if (!update) return res.status(500).json({ msg: "Internal server error" });
    res.status(200).json({
      msg: "update with success",
      new: update,
    });
  }
};

exports.deleteMovieById = async (req, res) => {
  const MovieId = req.params.id;
  const movie = await Movie.findById(MovieId);
  if (!movie) {
    return res.status(404).send("Not found");
  }
  //deelte the post image from disl
  let imgName = movie.poster.split("/")[4];
  deletePostImageFromDisk(imgName);
  const del = await crudService.del(MovieId, Movie);
  if (!del) return res.status(500).json({ msg: "Internal server error" });
  res.status(200).json({
    msg: "delete with success",
  });
};
