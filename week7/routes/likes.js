const express = require('express');
const router = express.Router();
const data = require('../data');
const postsData = data.posts;
const animalsData = data.animals;

router.post('/:id', async (req, res) => {
    if(!req.params.id){ throw "id must be provided." }
    if(!req.query.postId){throw "post id query must be provided." }

    try{
        const animal = await animalsData.get(req.params.id);
        if(!animal){return res.status(404).json({error: "animal not found."})};
    
        const post = await postsData.getPostById(req.query.postId);
        if(!post){return res.status(404).json({error: "post not found."})};

        // search for postId in like array
        let item = animal[0].likes.find((elem) => post[0]._id.toString() === elem);

        // if not in likes added to database 
        if(!item){ await animalsData.addLike(req.params.id, req.query.postId); }
        return res.sendStatus(200);
    }
    catch(e){
        return res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    if(!req.params.id){ throw "id must be provided." }
    if(!req.query.postId){throw "post id query must be provided." }

    try{
        const animal = await animalsData.get(req.params.id);
        if(!animal){return res.status(404).json({error: "animal not found."})};
    
        const post = await postsData.getPostById(req.query.postId);
        if(!post){return res.status(404).json({error: "post not found."})};

        // search for postId in like array
        let item = animal[0].likes.find((elem) => post[0]._id.toString() === elem);

        // if not in likes added to database 
        if(item){ await animalsData.removeLike(req.params.id, req.query.postId); }
        return res.sendStatus(200);
    }
    catch(e){
        return res.sendStatus(500);
    }
});

module.exports = router;