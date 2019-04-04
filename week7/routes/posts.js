const express = require('express');
const router = express.Router();
const data = require('../data');
const postsData = data.posts;

router.get('/', async (req, res) => {
    try{
      const posts = await postsData.getAllPosts();
      return res.json(posts)
    }
    catch(e) { return res.sendStatus(500); }
  });

  router.get('/:id', async (req, res) => {
    try {
      if(!req.params.id) throw 'id must be provided and valid';
      if(typeof req.params.id !== 'string') throw 'please provide a valid id of type string'

      const post = await postsData.getPostById(req.params.id);

      if(!post) {
        return res.status(404).json({error: 'post not found'})
      }
      return res.json(post);

    } catch(e) { return res.sendStatus(500); }
  });

  router.post('/', async (req, res) => {
    const info = req.body;
    if(!info){ return res.status(400).json({error: "You must provide data"}); }
    if(!info.title || info.title === undefined){ return res.status(400).json({error: "You must provide a name for the title."}); }
    if(!info.content || info.content === undefined){ return res.status(400).json({error: "You must provide data for the content."}); }
    if(!info.author || info.author === undefined ) {return res.status(400).json({error: "you must provide a valid author id"})}
    try {
      const newAnimal = await postsData.addPost(
        info.title,
        info.author,
        info.content
      );
      return res.json(newAnimal);

    } catch (error) { return res.sendStatus(500); }
  });

  router.put('/:id', async(req, res) => {
    const info = req.body;
    if(!info){ return res.status(400).json({error: "You must provide data"}); }
    if(!info.title && !info.content){ return res.status(400).json({error: "You must provide data to be updated."}); }

    try {
      const post = await postsData.getPostById(req.params.id);
      if(!post) { return res.status(404).json({error: "post not found"}); }
      const updated = await postsData.updatePost(req.params.id, info);
      return res.status(200).json({updated})

    } catch (error) { console.log(error) 
      return res.sendStatus(500); }

  });

  router.delete('/:id', async(req, res) => {
    try {
      // Check if id exist
      const post = await postsData.getPostById(req.params.id);
      if(!post){ return res.status(404).json({error: "post not found"}); }
      await postsData.deletePost(req.params.id);
      return res.status(200).json({delete: true, data: post});

    } catch (error) { return res.sendStatus(500); }

  });

  module.exports = router;