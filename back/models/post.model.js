const mongoose = require("mongoose");

/**
 * Schema de création d'une fiche pour les posts.
 */
const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    acroche: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 2048,
    },
    picture: {
      type: String,
    },

    // likers: {
    //   type: [String],
    //   required: true,
    // },

    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
