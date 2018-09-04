var express = require('express');
var router = express.Router();

var posts = require('../posts.json');

router.get('/posts', function(req, res) {    
    res.json(posts);
});

router.get('/posts/:id', function(req, res) {
    var post = posts.find(post => post.id == req.params.id);

    if (!post) {
        res.status(404).end();
        return;
    }

    res.json(post);
});

module.exports = router;
