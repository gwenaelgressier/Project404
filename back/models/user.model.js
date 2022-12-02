const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

/**
 * Schema de création d'une fiche utilisateur.
 */
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./img/random-user.png",
    },
    // likes: {
    //   type: [String],
    // },
    isAdmin: {
      type: Boolean,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

// fonction pour "saler"(crypter) les mots de passe.
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * fonction de verification du mot de passe en fonction du mail
 *
 * @param {*} email
 * @param {*} password
 * @returns
 */
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
