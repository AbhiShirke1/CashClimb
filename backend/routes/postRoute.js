const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createPost, getOwnPosts } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const AWS = require('aws-sdk');
// const accessKeyId = 'AKIAQ3EGSQYXRHYNJDHB';
// const secretAccessKey = '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';
// const region = 'eu-north-1';
// const bucketName = 'alt-f4';



// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
//   })

// const accessKeyId = 'AKIAQ3EGSQYXZGGBRAJG';
// const secretAccessKey = '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';
// const region = 'eu-north-1';
// const bucketName = 'alt-f4';

// const s3 = new AWS.S3({
//   accessKeyId,
//   secretAccessKey,
//   region,
// });

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


// router.post('/createPost', protect, upload.single('image'), createPost);
// router.get('/allPosts', protect, getPosts);
// // router.post('/test', testRoute);
// router.post('/test', (req, res) => {
//   AWS.config.update({
//     accessKeyId: 'AKIAQ3EGSQYXZGGBRAJG',
//     secretAccessKey: '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',
//     region: 'eu-north-1'
//   });

//   const s3 = new AWS.S3();
//   const fileContent = Buffer.from(req.files.image.data, 'binary');

//   const params = {
//     Bucket: 'alt-f4',
//     Key: req.files.image.name,
//     Body: fileContent
//   }

//   s3.upload(params, (err, data)=>{
//     if(err){
//       res.json("Error ocurred");
//     }

//     res.send({
//       "response_data": data
//     })
//   })

//   console.log(req.files.image.data);
// })

router.post('/create', protect, createPost);
// router.get('/ownPosts', protect, getOwnPosts);
module.exports = router;