const express = require('express');
const router = express.Router();
const controller = require('../controllers/postsController');

router.get('/', controller.getAllPosts);
router.post('/', controller.createPost);
router.delete('/:id', controller.deletePost);

module.exports = router;
