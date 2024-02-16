const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
  //ref, link, content

  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  link: {
    type: String
  },

  content: {
    type: String
  }

},
    { timestamps: true });

const postsModel = mongoose.model("Post", postsSchema);
module.exports = postsModel;