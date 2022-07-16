const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    discussionId: {
      type: String,
    },
    sender: {
      type: String,
    },
    // can use instead of type: String
    // type: Schema.Types.ObjectId, ref: 'User'
    // with this, you can use Message.findById().populate(sender) to get the user directly when you get the message
    text: {
      type: String,
    },
    image: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
