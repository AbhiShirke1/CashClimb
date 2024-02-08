const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    desc: {
        type: String
    },

    image: {
        data: Buffer,
        contentType: String,
    }

},
    { timestamps: true });

const postsModel = mongoose.model("Post", postsSchema);
module.exports = postsModel;