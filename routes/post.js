const express = require('express')
const router = express.Router()
const Post = require('../models/Post')


//Get SPECICIC POSTS

router.get('/:postId', async(req, res) => {
    try{ 
   const post = await Post.findById(req.params.postId)
res.json(post)    
}catch(err){
    res.json({message: err})
}

})


//GETS ALL THE POST
router.get('/', async(req, res) => {
    try{ 
   const posts = await Post.find()
   res.json(posts);
   
} catch (err){
    res.json({message:err})
}

})


//SUBMITS THE POST
router.post('/', async (req, res) => {
    const post = new Post({

        id: req.body.id,
        manufacture_date: req.body. manufacture_date,
        category: req.body.category,
        description:  req.body.description,
        purchase_date:  req.body.purchase_date,
        price:  req.body.price
    });
    try{ 
          
    const savedPost = await post.save()
        res.send(savedPost);
} catch(err){
res.json({message: err})
}
})



//DELETE POST
router.delete('/:postId',  async(req, res) => {
    try{
        
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (err) {
        res.json({ message: err})
    }
    })

//UPDATE POST 
router.patch('/:postId', async(req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId},
            { $set: { price: req.body.price } })
   res.json(updatedPost)
    }catch (err){
        res.json({ message: err })
    }

})

module.exports= router;