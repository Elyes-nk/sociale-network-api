const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    freinds: [
      { type: String }
    ],
    // can use instead of type: String
    // type: Schema.Types.ObjectId, ref: 'User'
    // with this, you can use User.findById().populate(freinds) to get the users directly when you get the user
    stacks: [
      { type: String }
    ]
    // can use instead of type: String
    // type: Schema.Types.ObjectId, ref: 'Stack'
    // with this, you can use User.findById().populate(stacks) to get the stack directly when you get the user
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
