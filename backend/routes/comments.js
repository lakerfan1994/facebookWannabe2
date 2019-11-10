const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/:post_id', async (req, res) => {
let post_id = req.params.post_id
let comments = await db.any(`SELECT * FROM comments WHERE post_id = ${post_id}`);

    try {
        if(comments.length === 0){
    throw new Error;
}

        let getComments = (comments)
        res.json({
            payload: comments,
            message: "getting all comments"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.'
        })
    }
})

<<<<<<< HEAD

<<<<<<< HEAD
// router.post('/posts/:post_id/:commenter_id', async (req, res)=>{
// let postQuery = await db.none(`INSERT INTO comments (post_id, commenter_id, body)

// try {
//     let registerPost = (postQuery, [req.body.post_id, ])
//     res.json({
//         payload: registerPost,
//         message:"Success posting comment"
//     })
// } catch (error){
//     console.log(error)
// }
=======
router.post('/posts/register', async (req, res)=>{
=======
router.post('/register', async (req, res)=>{
>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9
let post_id = req.body.post_id
let commenter_id = req.body.commenter_id;
let commentBody = req.body.body;
 let insertstuff = 
        `INSERT INTO comments(post_id, commenter_id, body)
         VALUES ($1, $2, $3)`;



try {
    let postQuery = await db.none(insertstuff, [post_id, commenter_id, commentBody]);
    let registerPost = ([post_id, commenter_id, commentBody])
    res.json({
        payload: registerPost,
        message:"Success posting comment"
    })
} catch (error){
    res.json({err: error})}
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9

 })

<<<<<<< HEAD
<<<<<<< HEAD
// router.patch('/:post_id/:commenter_id', (req, res)=>{
// let post_id = req.params.post_id
// let commenter_id = req.params.commenter_id
=======
router.patch('/:post_id/:commenter_id', async (req, res)=>{
let post_id = req.params.post_id
let commenter_id = req.params.commenter_id
>>>>>>> master

// let patchQuery = await db.any(`SELECT * FROM comments WHERE post_id = $1 AND commenter_id =$2`)
// try{
//     let editPost = (patchQuery, [post_id, commenter_id])
//     res.json({
//         payload: editPost, 
//         message: "Edits to comment were made!"
//     })
// } catch (eroor){
//     console.log(error)
// }
// })

<<<<<<< HEAD
// router.delete('/:post_id/:commenter_id', (req, res)=>{
// let post_id = req.params.post_id
// let commenter_id = req.params.commenter_id

// let deleteQUERY = await db.any(`SELECT * FROM comments WHERE post_id =$1 AND Commenter_id=$2`)
// try{
//     let deletePost = (deleteQuery, [post_id, commenter_id])
//     res.json({
//         res.json({
//             payload: deletePost, 
//             message: "Comment was deleted!"
//         })
//     })
// }catch (error ){
//     message: "Was unable to Delete Comment!"
// }
// })
=======
router.delete('/:post_id/:commenter_id', async (req, res)=>{
let post_id = req.params.post_id
let commenter_id = req.params.commenter_id
=======
>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9

router.patch('/update', async (req, res)=>{
let post_id = req.body.post_id;
let commenter_id = req.body.commenter_id;
let commentBody = req.body.body;

let patchQuery = await db.none(`UPDATE comments SET body = $1 WHERE post_id = $2 AND commenter_id = $3 `, [commentBody, post_id, commenter_id]);
try{
    let editPost = ([post_id, commenter_id])
    res.json({
        payload: editPost, 
        message: "Edits to comment were made!"
    })
} catch (err0r){
    res.json({
        error: err0r
    })
}
})

router.delete('/delete', async (req, res)=>{
let post_id = req.body.post_id;
let commenter_id = req.body.commenter_id;

let deleteQUERY = await db.none(`DELETE FROM comments WHERE post_id = $1 AND commenter_id = $2`, [post_id, commenter_id]);
try{
    let deletePost = ([post_id, commenter_id])
    res.json(
        {
            payload: deletePost, 
            message: "Comment was deleted!"
        })
    }
catch (error ){
    message: "Was unable to Delete Comment!"
}
})

module.exports = router;
<<<<<<< HEAD
>>>>>>> master
=======

>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9
