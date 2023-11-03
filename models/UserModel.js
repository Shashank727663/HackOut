
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {type: String , required: true},
    email: {type: String , required: true , unique: true},
    password: {type: String , required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    pic: {
        type: "String",
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  
});

UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;