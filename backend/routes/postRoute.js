const express = require('express');
const router = express.Router();
const multer = require('multer');
const {createPost, getPosts} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })

var upload = multer({ storage: storage })

router.post('/createPost',protect ,upload.single('image'), createPost);
router.get('/allPosts',protect, getPosts);

module.exports = router;