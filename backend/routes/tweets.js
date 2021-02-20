const express = require('express')
// const Post = require('../models/Posts')

const router = express.Router();

// router.get('/', async (req, res) => {
//     console.log(res)
//     res.send('POSTED')
//     try {
//         const posts = await Post.find()
//         res.json(posts)
//     } catch (error) {
//         res.json({ message: error })
//     }
// })

// router.post('/', (req, res) => {
//     const post = new Post({
//         title: req.body.title
//     });
//     console.log(req.body)
//     post.save()
//         .then(data => {
//             res.json(data)
//         })
//         .catch(error => {
//             res.json(error)
//         })
// })

// router.get('/:postId', async (req, res) => {
//     try {
//         console.log(req.params.postId)
//         const post = await Post.findById(req.params.postId)
//         res.json(post)
//     } catch (error) {
//         res.json({ message: error })
//     }
// })


module.exports = router