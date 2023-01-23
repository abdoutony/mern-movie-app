const create = (data, Model) => {
  const newObj = new Model(data);
  return newObj
    .save()
    .then((res) => res)
    .catch((err) => {
      console.log("ERROR==>services=>crud=>create:::", err);
      return null;
    });
};

const get = (id = null, Model, populateFrom = null) => {
  if (id) {
    return Model.findById(id)
      .populate(populateFrom ? populateFrom : "")

      .then((res) => res)
      .catch((err) => {
        console.log("ERROR==>services=>crud=>get:::", err);
        return null;
      });
  } else {
    return Model.find()
      .populate(populateFrom ? populateFrom : "")
      .then((res) => res)
      .catch((err) => {
        console.log("ERROR==>services=>crud=>get:::", err);
        return null;
      });
  }
};

const update = (id = null, data, Model) => {
  return Model.findOneAndUpdate({ _id: id }, data, {
    new: true,
    useFindAndModify: false,
  })
    .then((res) => res)
    .catch((err) => {
      console.log("ERROR==>services=>model=>update:::", err);
      return null;
    });
};

const del = (id = null, Model) => {
  return Model.deleteOne({ _id: id })
    .then((res) => res)
    .catch((err) => {
      console.log("ERROR==>services=>model=>delete:::", err);
      return null;
    });
};

module.exports = {
  create,
  get,
  update,
  del,
};
