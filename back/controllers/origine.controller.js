const mongoose = require("mongoose");

const postOrigineSchema = new mongoose.Schema({
  value: String,
  label: String,
});
const PostOrigine = mongoose.model("postOrigine", postOrigineSchema);

/**
 * function qui affiche toute les origines
 *
 * @param {*} req
 * @param {*} res
 */
function getOrigine(req, res) {
  PostOrigine.find({})
    .then((PostOrigine) =>
      res.status(200).send(
        PostOrigine.map((postOrigine) => {
          return { value: postOrigine.value, label: postOrigine.label };
        })
      )
    )
    .catch((error) => res.status(500).send(error));
}

function postOrigine(req, res) {
  const { body, file } = req;

  const { label, value } = body;

  const postOrigine = new PostOrigine({
    label: label,
    value: value,
  });

  postOrigine
    .save()
    .then((message) => res.status(201).send({ message }))
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  getOrigine,
  postOrigine,
};
