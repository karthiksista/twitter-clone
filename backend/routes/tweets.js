const express = require('express')
const tweet = require('../models/Tweets')

const router = express.Router();

router.get('/', (req, res) => {
    // console.log(res)
    // res.send(res)
    let hashes = []
    tweet.find({})
        .limit(10)
        .then(list => {
            res.json(list)
            console.log(list)
        })


})

router.get('/getHash', (req, res) => {
    let hashes = []
    tweet.find({}, { entities: 1 })
        .limit(100)
        .then(list => {
            list.map(ele => {
                // console.log(ele)
                (ele.entities.hashtags.map(hash => hashes.push(hash.text)))
            }).then(res.json(hashes))
            // console.log(hash, 'lol')
        })
})

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