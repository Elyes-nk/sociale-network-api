const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema(
  {
    members: [
      { type: String }
      // can use instead of type: String
      // type: Schema.Types.ObjectId, ref: 'User'
      // with this, you can use Discussion.findById().populate(members) to get the users directly when you get the discussion
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Discussion", DiscussionSchema);
