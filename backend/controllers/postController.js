const Post = require('../models/postsModel');
const multer = require('multer');
const multers3 = require('multer-s3');
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const AWS = require('aws-sdk');
// const fs = require('fs');

const accessKeyId = 'AKIAQ3EGSQYXZGGBRAJG';
const secretAccessKey = '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';
const region = 'eu-north-1';
const bucketName = 'alt-f4';

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region,
});

// AWS.config.update({region: 'eu-north-1'})
const upload = () => {
    multer({
        storage: multers3({
            s3: s3,
            bucket: 'alt-f4',
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname })
            },
            key: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })
    })
}

const createPost = async (req, res) => {
    //not working
    const { email, desc } = req.body;

    const params = {
        Bucket: bucketName,      // bucket that we made earlier
        Key: req.file,               // Name of the image
        // Body:req.file.buffer,                    // Body which will contain the image in buffer format
        // ACL:"public-read-write",                 // defining the permissions to get the public link
        ContentType: "image/jpg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    };

    try {
        console.log(data);
        s3.upload(params, (error, data) => {
            if (error) {
                res.status(500).send({ "err": error })  // if we get any error while uploading error message will be returned.
            }

            console.log(data);
        })

        // const upload = new Post({
        //     email, desc,
        //     image: {
        //         data: fs.readFileSync('C:/MajorProject/CashClimb/backend' + '/uploads/' + req.file.filename),
        //         contentType: 'image/jpg'
        //     }
        // });
        // console.log(upload);
        // const uploadImg = await upload.save();
        // console.log(uploadImg);

        // res.json("uploaded");
    } catch (error) {
        res.json(error);
    }
}

const testRoute = async (req, res) => {
    // console.log(req.files);

    // const uploadSingle = upload();

    // uploadSingle(req, res, err =>{
    //     if(err){
    //         return res.status(400).json(err);
    //     }

    //     console.log(req.files);
    //     res.status(200).json({data: req.file});
    // })

    AWS.config.update({
        accessKeyId,
        secretAccessKey,
        region,
    });

    const s3 = new AWS.S3();

    if(!req.file){
        return res.send('No file uploaded');
    }

    const imgBuffer = req.file.buffer;

    const fileContent = Buffer.from(imgBuffer, 'binary');
    // console.log(req.file); 

    const params = {
        Bucket: 'alt-f4',
        Key: req.files.data.name,
        Body: fileContent
    }

    s3.upload(params, (err, data) => {
        if (err) {
            return res.json(err);
        }

        res.json(data);
    })
}

const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({});

        res.json(allPosts);
    } catch (error) {
        res.json("Some error ocurred");
    }
}

const uploadImg = async (req, res) => {

}

module.exports = { createPost, getPosts, testRoute };