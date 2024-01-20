const Post = require('../models/postsModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const createPost = async (req, res) => {
    //not working
    const {email, desc} = req.body;
    try {
        const upload = new Post({
            email, desc,
            image: {
                data: fs.readFileSync('C:/MajorProject/CashClimb/backend' + '/uploads/' + req.file.filename),
                contentType: 'image/jpg'
            }
        });
        console.log(upload);
        const uploadImg = await upload.save();
        console.log(uploadImg);

        res.json("uploaded");
    } catch (error) {
        res.json(error);
    }
}

const getPosts = async(req, res)=>{
    try {
        const allPosts = await Post.find({});

        res.json(allPosts);
    } catch (error) {
        res.json("Some error ocurred");
    }
}

module.exports = { createPost, getPosts };